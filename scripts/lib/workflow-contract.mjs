import { readFile } from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import { rootDir } from './project.mjs';
import { SOURCE_FACTS_PROTOCOL, METRIC_COVERAGE_PROTOCOL, METRIC_RECORD_PROTOCOL } from './metric-source.mjs';
import { ARTIFACT_MANIFEST_PROTOCOL, CHECKPOINT_PROTOCOL } from './workflow-dependencies.mjs';
import { PUBLICATION_PROTOCOL } from './workflow-publication.mjs';
import { VERIFICATION_PLAN_PROTOCOL } from './verification-plan.mjs';
import { REVIEW_PACKET_PROTOCOL } from './dataset-build-closeout.mjs';

export const WORKFLOW_ACTIONS = Object.freeze({
  'recover-lock': '核对锁 token 与已退出 PID 后恢复操作锁',
  'recover-session': '核对当前 generation 后恢复并更换执行代次',
  session: '取得已释放 Build 的执行权（--session）', 'release-session': '当前 Session 显式释放 Build 执行权',
  start: '接收来源、生成独立工作目录', prepare: '从事实生成数据与检查记录', continue: '根据现有记录执行下一步',
  show: '只读查看处理进度', report: '生成供审阅的 HTML 处理单', checkpoint: '记录图形阶段的明确冻结或重开决定', review: '消费当前版本的人工审阅',
  seal: '暂存基线并重新执行最终检查', batch: '记录成员并以独立进程继续多个 Build', refresh: '核对冲突后更新工作目录、准备新计划',
  assets: '只读查找资产版本、来源与使用位置', 'asset-version': '在草稿中记录绑定字节的资产接受', feedback: '记录反馈并列出同批检查范围',
  'archive-list': '只读枚举完整的待归档来源', archive: '消费操作员确认的精确清单并归档',
});
export const WORKFLOW_PROTOCOLS = Object.freeze({ sourceFacts: SOURCE_FACTS_PROTOCOL, textSourceClassification: 'source-classification/v2', metricSourceCoverage: METRIC_COVERAGE_PROTOCOL, metricObservations: METRIC_RECORD_PROTOCOL, artifactManifest: ARTIFACT_MANIFEST_PROTOCOL, checkpoint: CHECKPOINT_PROTOCOL, publication: PUBLICATION_PROTOCOL, releaseAttempt: 'release-attempt/v1', session: 'workflow-session/v1', gitTransport: 'git-transport/v1', workbench: 'trace-workbench/v1', workflowTimestamps: 'workflow-timestamps/v1', application: 'workflow-application/v1' });
export async function workflowCommandReference(root = rootDir) {
  const pkg = JSON.parse(await readFile(path.join(root, 'package.json'), 'utf8'));
  const scripts = Object.entries(pkg.scripts).filter(([key]) => /^(record:workflow|record:transport-review|publish:datasets|release:dataset|release:git|verify:release|verify:workbench|view:published|(?:verify|update):(?:metric-catalog|metrics|asset-catalog|feedback-patterns|workflow|workflow-reference|workflow-graph))$/.test(key));
  return `# 当前 Workflow 命令与协议\n\n由 \`scripts/lib/workflow-contract.mjs\` 与 \`package.json\` 生成，请勿手工修改。\n操作说明：[asset-workflow.md](asset-workflow.md)。\n\n## 一张处理单的操作\n\n| 命令 | 作用 |\n| --- | --- |\n${Object.entries(WORKFLOW_ACTIONS).map(([name, label]) => `| \`pnpm record:workflow -- ${name}\` | ${label} |`).join('\n')}\n\n\`start\` 需要 \`--source <pending-file> --key <key> --facts <facts.json>\`；\n其他单项操作使用 \`<build-id>\`。\`review\`、\`checkpoint\`、\`feedback\`、\`asset-version\`、\`archive\`\n使用 \`--input <json>\`。\`batch\` 使用 \`--input <json> --concurrency 2\`。\n\n## 项目入口\n\n| 命令 | 执行文件 |\n| --- | --- |\n${scripts.map(([name, script]) => `| \`pnpm ${name}\` | \`${script}\` |`).join('\n')}\n\n发布先 \`publish:datasets -- plan <build-id> [...]\`，再 \`publish:datasets -- commit <plan-digest>\`。\n输出使用 \`release:dataset -- <published-digest> site|standalone [failed-attempt-id]\`。\n\n## 当前协议\n\n| 对象 | 协议 |\n| --- | --- |\n${Object.entries({ ...WORKFLOW_PROTOCOLS, verificationPlan: VERIFICATION_PLAN_PROTOCOL, reviewPacket: REVIEW_PACKET_PROTOCOL }).map(([key, value]) => `| ${key} | \`${value}\` |`).join('\n')}\n\n历史 Build 不因本表更新而获得新的审阅或检查点。\n`;
}
export async function verifyWorkflowContract(root = rootDir) {
  const contract = JSON.parse(await readFile(path.join(root, 'docs/architecture/lifecycle-contract.json'), 'utf8'));
  for (const [name, protocol] of Object.entries(WORKFLOW_PROTOCOLS)) assert.equal(contract.protocols[name], protocol, `${name} protocol drift`);
  assert.deepEqual(contract.workflow.sourceFormats, ['png', 'txt', 'md']);
  assert.equal(contract.workflow.canonicalVisibility, 'immutable-tree-with-atomic-pointer');
  const actual = await readFile(path.join(root, 'docs/workflow-command-reference.md'), 'utf8');
  assert.equal(actual, await workflowCommandReference(root), 'Run pnpm update:workflow-reference');
  const fidelity = await readFile(path.join(root, 'docs/fidelity-loop-rules.md'), 'utf8');
  assert.ok(fidelity.includes('### VerificationPlan v5') && fidelity.includes('`verification-plan/v5` 从 inventory feature'), 'Current prose Plan version drift');
  const lifecycle = await readFile(path.join(root, 'docs/architecture/dataset-lifecycle.md'), 'utf8');
  assert.ok(!lifecycle.includes('prepare a fresh v4 Plan/v3 packet'), 'Freshness recovery cannot use stale Plan/Packet versions');
  const crop = await readFile(path.join(root, 'input/icon-crop-specs/README.md'), 'utf8');
  assert.ok(!crop.includes('SVG/vector assets before using them in d3 output'), 'Crop guidance conflicts with the runtime raster owner');
  return `${Object.keys(WORKFLOW_ACTIONS).length} workflow actions and ${Object.keys(WORKFLOW_PROTOCOLS).length} protocol extensions verified`;
}
