import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { existsSync } from 'node:fs';
import { evidenceFromManifest } from './dataset-build-closeout.mjs';
import { createInterfaceMatrix } from './fidelity-result.mjs';
import { rootDir } from './project.mjs';
import { inside, filesUnder, readJson } from './workflow-files.mjs';
import { showAsset } from './asset-workflow.mjs';

export const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
export async function workflowHtml(title, content, script = '') {
  const template = await readFile(path.join(rootDir, 'scripts/templates/workflow-report.html'), 'utf8');
  return template.replaceAll('{{TITLE}}', escapeHtml(title)).replace('{{CONTENT}}', content).replace('{{SCRIPT}}', script.replace(/<\/script/gi, '<\\/script'));
}
export async function currentEvidence(current) {
  const entries = [];
  for (const locator of await filesUnder(current.workspace, [`output/compare/${current.key}`])) {
    if (!/\/(?:manifest|fidelity-run)\.json$/.test(locator)) continue;
    const manifest = await readJson(inside(current.workspace, locator));
    if (manifest.status === 'evidence-ready' && manifest.identity?.buildId === current.buildId && manifest.identity?.verificationPlanDigest === current.plan?.planDigest) entries.push({ locator, manifest });
  }
  return entries.sort((a, b) => (a.manifest.evidenceReadyAt || '').localeCompare(b.manifest.evidenceReadyAt || ''));
}
export async function renderAssetReview(buildId, root = rootDir) {
  const current = await showAsset(buildId, root);
  const e = escapeHtml;
  const evidence = await currentEvidence(current);
  const sourcePath = [current.source.processingUri, current.source.processedUri].map((file) => inside(current.workspace, file)).find(existsSync);
  const source = current.source.format === 'text' ? `<pre>${e(await readFile(sourcePath, 'utf8'))}</pre>` : `<img style="width:100%;height:auto" alt="完整原始图片" src="data:image/png;base64,${(await readFile(sourcePath)).toString('base64')}" />`;
  const record = current.authoredRecord;
  const displayRows = current.metrics.map((metric) => [current.subject?.name, metric.period || current.period, metric.name, `${metric.value} ${metric.unit}`, metric.currency || '不适用', metric.quote]);
  if (record && current.adapter === 'revenue-metric') for (const observation of record.observations || []) displayRows.push([record.company, observation.date, record.displayName || record.metricName, `${observation.value} ${record.unit}`, record.currency, [record.definition, ...(observation.notes || [])].filter(Boolean).join('；')]);
  if (record && current.adapter === 'income-statement') {
    const collect = (value, label) => {
      if (!value || typeof value !== 'object') return;
      if (typeof value.value === 'number') displayRows.push([record.company, record.period, value.label || label, `${value.value} ${record.unit}`, record.currency, (value.notes || []).join('；')]);
      if (typeof value.total === 'number') displayRows.push([record.company, record.period, `${value.label || label} · 合计`, `${value.total} ${record.unit}`, record.currency, (value.notes || []).join('；')]);
      for (const [key, child] of Object.entries(value)) if (!['notes', 'i18n'].includes(key)) collect(child, `${label} / ${key}`);
    };
    for (const [key, label] of Object.entries({ revenue: '收入', costs: '成本费用', otherIncome: '其他收入', otherExpenses: '其他费用', profit: '利润' })) collect(record[key], label);
  }
  const rows = displayRows.map((values) => `<tr>${values.map((value) => `<td>${e(value)}</td>`).join('')}</tr>`).join('');
  const manual = (current.plan?.requiredChecks || []).filter((check) => check.enforcement === 'manual').flatMap((check) => (check.localeScope === 'global' ? [null] : current.plan.requiredLocales).map((locale) => ({ check, locale })));
  const labels = { 'adapter:source-coverage-review': '原材料中的数据和必要说明已完整处理，没有漏项或误读', 'adapter:manual-visual-closure': '图形、标签和图标已逐项看过，显示正确', 'impact:documentation-contract': '本次说明与实际处理一致' };
  const checks = manual.map(({ check, locale }, i) => `<div class="decision"><label>${e(labels[check.id] || check.id)}${locale ? ` · ${e(locale)}` : ''}<select data-review-index="${i}"><option value="">待确认</option><option value="passed">通过</option><option value="failed">有问题</option><option value="blocked">无法判断</option></select></label><p class="caption">${e((check.objectIds || []).join('、'))}</p></div>`).join('');
  let pictures = '';
  for (const locale of current.plan?.requiredLocales || []) {
    const latest = evidence.filter(({ manifest }) => manifest.identity.language === locale).at(-1);
    if (latest) pictures += `<figure id="candidate-${e(locale)}" data-toc="图 候选结果 ${e(locale)}"><figcaption>候选结果 · ${e(locale)}</figcaption><img alt="候选图 ${e(locale)}" style="width:100%;height:auto" src="data:image/png;base64,${(await readFile(inside(current.workspace, latest.manifest.artifacts.candidate))).toString('base64')}" /></figure>`;
  }
  const content = `<header class="report-head"><div class="eyebrow">TRACE · 自动生成的处理单</div><h1>${e(current.subject?.name || record?.company || current.key)}</h1><p>${e(current.period || record?.period || '')}</p><p class="lead">下一步：${e({ prepare: '整理数据', verify: '运行检查', review: '审阅原材料与结果', seal: '完成最终检查', publish: '准备纳入系统', structure: '检查连接关系', text: '检查文字', 'polish-l10n': '检查细节与语言' }[current.next] || current.next)}</p><p>当前状态：${e({ INTAKED: '材料已接收', AUTHORED: '数据已整理', CLOSED: '审阅已接受', BASELINE_STAGED: '等待最终检查', SEALED: '最终检查已通过' }[current.state] || current.state)} · ${current.fresh ? '输入未变化' : '输入已变，需复查'}</p></header>
<section id="source"><h2>01 · 原材料</h2><div class="section-body">${source}</div></section>
<section id="result"><h2>02 · 提取结果</h2><div class="section-body"><div class="table-wrap" id="metric-table" data-toc="表 提取结果"><table><thead><tr><th>主体</th><th>时间</th><th>指标</th><th>数值与单位</th><th>币种</th><th>原文 / 说明</th></tr></thead><tbody>${rows || '<tr><td colspan="6">该材料通过专用图表或收入数据视图核对；候选图如下。</td></tr>'}</tbody></table></div>${pictures}<p>${current.questions.length ? e(current.questions.join('；')) : '未记录待解决的来源疑问。仍需逐项审阅以上结果。'}</p></div></section>
<section id="review"><h2>03 · 逐项确认</h2><div class="section-body"><p>请对照原材料检查结果。导出的审阅记录只对应当前这一版；内容变化后须刷新处理单。</p>${checks}<label>审阅者 <input id="reviewer" autocomplete="name" /></label><label>结论 <select id="decision"><option value="">请选择</option><option value="accepted">接受这一版</option><option value="rejected">需要修改</option><option value="blocked">缺少信息</option></select></label><p><label>具体说明 <textarea id="reviewNote" rows="3" style="width:100%"></textarea></label></p><button id="downloadReview">导出审阅结果</button><p id="reviewStatus" role="status"></p></div></section>
<section id="details"><h2>附录 · 处理记录</h2><div class="section-body"><details><summary>展开记录编号、检查计划与耗时</summary><pre>${e(JSON.stringify({ buildId, reviewToken: current.reviewToken, plan: current.plan, timing: current.timing, staleArtifacts: current.staleArtifacts }, null, 2))}</pre></details><p class="caption">生成时间：${e(new Date().toISOString())}。数据来自本 Build 的记录，页面本身不作为通过证据。</p></div></section>`;
  const latestEvidence = (current.plan?.requiredLocales || []).map((locale) => evidence.filter(({ manifest }) => manifest.identity.language === locale).at(-1)).filter(Boolean);
  const awaitableAuthored = evidence.at(-1)?.manifest.identity.authoredDigest;
  const entries = await Promise.all(latestEvidence.map(({ locator }) => evidenceFromManifest(locator, { buildId, key: current.key, authoredDigest: (awaitableAuthored), verificationPlanDigest: current.plan.planDigest, projectRoot: current.workspace })));
  const automatic = { reviewToken: current.reviewToken, evidenceManifests: latestEvidence.map(({ locator }) => locator), interfaceMatrix: entries.length ? matrixFromEvidence(entries.find((entry) => entry.locale === 'en') || entries[0], current.plan.sourceDigest) : null, manual: manual.map(({ check, locale }) => ({ checkId: check.id, ...(locale ? { locale } : {}), evidenceDigests: [...new Set([...(locale ? [entries.find((entry) => entry.locale === locale)?.digest].filter(Boolean) : [current.plan.sourceCoverageDigest, current.plan.sourceDigest]), ...(check.featureEvidenceDigests || [])])] })) };
  const script = `const reviewInputs=${JSON.stringify(automatic).replace(/</g, '\\u003c')}; document.getElementById('downloadReview').addEventListener('click',()=>{const reviewer=document.getElementById('reviewer').value.trim(),decision=document.getElementById('decision').value,note=document.getElementById('reviewNote').value.trim();const choices=[...document.querySelectorAll('[data-review-index]')];if(!reviewer||!decision||!note||choices.some(el=>!el.value)){document.getElementById('reviewStatus').textContent='请完成逐项选择、审阅者、结论和具体说明。';return}const result={reviewToken:reviewInputs.reviewToken,attestation:{reviewer,decision,note,reviewedAt:new Date().toISOString()},attention:{status:'closed',closureNote:note},manualCheckDecisions:choices.map((el,i)=>({...reviewInputs.manual[i],status:el.value,note})),evidenceManifests:reviewInputs.evidenceManifests,...(reviewInputs.interfaceMatrix?{interfaceMatrix:reviewInputs.interfaceMatrix}:{})};const a=document.createElement('a'),url=URL.createObjectURL(new Blob([JSON.stringify(result,null,2)],{type:'application/json'}));a.href=url;a.download='review-${e(buildId)}.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);document.getElementById('reviewStatus').textContent='已导出，尚未写入项目。';});`;
  const output = inside(current.workspace, 'output/workflow/review.html');
  await writeFile(output, await workflowHtml('资产处理单', content, script));
  return { path: output, buildId, next: current.next };
}

export function matrixFromEvidence(entry, sourceDigest) {
  const audit = entry.interfaceAudit;
  const span = (intervals) => { const top = Math.min(...intervals.map((item) => item.top)); const bottom = Math.max(...intervals.map((item) => item.bottom)); return { top, bottom, center: (top + bottom) / 2, width: bottom - top }; };
  return createInterfaceMatrix({ schemaVersion: 1, protocol: 'interface-matrix/v1', expectedInterfaceIds: audit.expectedInterfaceIds, rows: audit.interfaces.map((item) => {
    const candidate = { nodeBbox: item.nodeBox, unionIntervals: item.candidateUnion, linkIntervals: item.links.map((link) => ({ linkId: link.link, top: link.interval.top, bottom: link.interval.bottom })) };
    const referenceIntervals = item.referenceComparison?.reference || item.reference?.intervals;
    if (!referenceIntervals?.length) throw new Error(`Reference interface requires an explicit review: ${item.id}`);
    const reference = { nodeBbox: item.nodeBox, unionIntervals: referenceIntervals, linkIntervals: [] };
    const a = span(candidate.unionIntervals), b = span(reference.unionIntervals);
    return { id: item.id, node: item.node, side: item.face, coverageIntent: item.coverageIntent === 'full-face' ? 'full-face' : 'reference', candidate, reference,
      deltas: Object.fromEntries(['top', 'bottom', 'center', 'width'].map((key) => [key, a[key] - b[key]])),
      evidenceDigests: { referenceCrop: item.referenceCropDigest, audit: entry.artifactDigests.interfaceAudit, contactSheet: entry.artifactDigests.interfaceContactSheet },
      provenance: { kind: 'reference', digest: sourceDigest }, result: item.result === 'pass' ? 'passed' : 'failed', endpointStatus: audit.candidateStatus === 'passed' ? 'passed' : 'failed', tangentStatus: audit.candidateStatus === 'passed' ? 'passed' : 'failed',
    };
  }) });
}
