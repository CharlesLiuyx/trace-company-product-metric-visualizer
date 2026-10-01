import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { existsSync } from 'node:fs';
import { rootDir } from './project.mjs';
import { inside } from './workflow-files.mjs';
import { showAsset, currentEvidence, latestPerLocale } from './asset-workflow.mjs';

export const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
export async function workflowHtml(title, content, script = '') {
  const template = await readFile(path.join(rootDir, 'scripts/templates/workflow-report.html'), 'utf8');
  return template.replaceAll('{{TITLE}}', escapeHtml(title)).replace('{{CONTENT}}', content).replace('{{SCRIPT}}', script.replace(/<\/script/gi, '<\\/script'));
}
export { currentEvidence };
const REVIEW_FIELDS = new Set(['reviewToken', 'previewId', 'reviewer', 'decision', 'note', 'reviewedAt']);
// The current candidate evidence a review binds: the latest Build-bound,
// evidence-ready run per required locale.
export async function reviewInputsFor(current) {
  const latest = latestPerLocale(await currentEvidence(current), current.plan?.requiredLocales || []);
  return { reviewToken: current.reviewToken, evidenceManifests: latest.map(({ locator }) => locator) };
}
// A review is { reviewToken, previewId, reviewer, decision, note }: the
// operator's acceptance of the displayed candidate is the only human decision.
// It is recorded as given, with the current evidence manifests attached.
export async function expandHumanReview(current, review) {
  if (!review || typeof review !== 'object' || Array.isArray(review)) throw new Error('A review must be a JSON object');
  const unsupported = Object.keys(review).filter((key) => !REVIEW_FIELDS.has(key));
  if (unsupported.length) throw new Error(`Unsupported review field(s): ${unsupported.join(', ')}; a review is { reviewToken, previewId, reviewer, decision, note }`);
  const reviewer = String(review.reviewer || '').trim(), note = String(review.note || '').trim();
  if (!reviewer || !note) throw new Error('A review needs reviewer, decision and a concrete note');
  if (review.decision !== 'accepted') throw new Error('Only an explicit acceptance closes a Build; record problems with record:workflow feedback');
  const { evidenceManifests } = await reviewInputsFor(current);
  const previewId = review.previewId == null ? null : String(review.previewId);
  return {
    reviewToken: review.reviewToken,
    ...(previewId ? { previewId } : {}),
    acceptance: { reviewer, decision: 'accepted', note, ...(review.reviewedAt ? { reviewedAt: review.reviewedAt } : {}), ...(previewId ? { previewId } : {}) },
    ...(evidenceManifests.length ? { evidenceManifests } : {}),
  };
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
    for (const [key, label] of Object.entries({ revenue: '收入', costs: '成本费用', operatingOtherIncome: '营业利润调整收入', operatingOtherExpenses: '营业利润调整支出', otherIncome: '其他收入', otherExpenses: '其他费用', profit: '利润' })) collect(record[key], label);
  }
  const rows = displayRows.map((values) => `<tr>${values.map((value) => `<td>${e(value)}</td>`).join('')}</tr>`).join('');
  let pictures = '';
  for (const locale of current.plan?.requiredLocales || []) {
    const latest = evidence.filter(({ manifest }) => manifest.identity.language === locale).at(-1);
    if (latest) pictures += `<figure id="candidate-${e(locale)}" data-toc="图 候选结果 ${e(locale)}"><figcaption>候选结果 · ${e(locale)}</figcaption><img alt="候选图 ${e(locale)}" style="width:100%;height:auto" src="data:image/png;base64,${(await readFile(inside(current.workspace, latest.manifest.artifacts.candidate))).toString('base64')}" /></figure>`;
  }
  const content = `<header class="report-head"><div class="eyebrow">TRACE · 自动生成的处理单</div><h1>${e(current.subject?.name || record?.company || current.key)}</h1><p>${e(current.period || record?.period || '')}</p><p class="lead">下一步：${e({ prepare: '整理数据', verify: '运行检查', review: '审阅原材料与结果', seal: '完成最终检查', publish: '准备纳入系统', structure: '检查连接关系', text: '检查文字', 'polish-l10n': '检查细节与语言' }[current.next] || current.next)}</p><p>当前状态：${e({ INTAKED: '材料已接收', AUTHORED: '数据已整理', CLOSED: '审阅已接受', BASELINE_STAGED: '等待最终检查', SEALED: '最终检查已通过' }[current.state] || current.state)} · ${current.fresh ? '输入未变化' : '输入已变，需复查'}</p></header>
<section id="source"><h2>01 · 原材料</h2><div class="section-body">${source}</div></section>
<section id="result"><h2>02 · 提取结果</h2><div class="section-body"><div class="table-wrap" id="metric-table" data-toc="表 提取结果"><table><thead><tr><th>主体</th><th>时间</th><th>指标</th><th>数值与单位</th><th>币种</th><th>原文 / 说明</th></tr></thead><tbody>${rows || '<tr><td colspan="6">该材料通过专用图表或收入数据视图核对；候选图如下。</td></tr>'}</tbody></table></div>${pictures}<p>${current.questions.length ? e(current.questions.join('；')) : '未记录待解决的来源疑问。仍需逐项审阅以上结果。'}</p></div></section>
<section id="review"><h2>03 · 审阅结论</h2><div class="section-body"><p>请对照原材料检查数据、必要说明与候选图，确认没有漏项、误读或显示错误。导出的审阅记录只对应当前这一版；内容变化后须刷新处理单。有问题时不要导出，改用 <code>record:workflow feedback</code> 记录，修复后重新 <code>continue</code>。</p><label>审阅者 <input id="reviewer" autocomplete="name" /></label><label>结论 <select id="decision"><option value="">请选择</option><option value="accepted">接受这一版</option></select></label><p><label>具体说明 <textarea id="reviewNote" rows="3" style="width:100%"></textarea></label></p><button id="downloadReview">导出审阅结果</button><p id="reviewStatus" role="status"></p></div></section>
<section id="details"><h2>附录 · 处理记录</h2><div class="section-body"><details><summary>展开记录编号、检查计划与耗时</summary><pre>${e(JSON.stringify({ buildId, reviewToken: current.reviewToken, plan: current.plan, timing: current.timing, staleArtifacts: current.staleArtifacts }, null, 2))}</pre></details><p class="caption">生成时间：${e(new Date().toISOString())}。数据来自本 Build 的记录，页面本身不作为通过证据。</p></div></section>`;
  const script = `const reviewToken=${JSON.stringify(current.reviewToken || null).replace(/</g, '\\u003c')}; document.getElementById('downloadReview').addEventListener('click',()=>{const reviewer=document.getElementById('reviewer').value.trim(),decision=document.getElementById('decision').value,note=document.getElementById('reviewNote').value.trim();if(!reviewer||decision!=='accepted'||!note){document.getElementById('reviewStatus').textContent='请填写审阅者、选择接受并写明具体说明；有问题请用 record:workflow feedback 记录。';return}const result={reviewToken,reviewer,decision,note,reviewedAt:new Date().toISOString()};const a=document.createElement('a'),url=URL.createObjectURL(new Blob([JSON.stringify(result,null,2)],{type:'application/json'}));a.href=url;a.download='review-${e(buildId)}.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);document.getElementById('reviewStatus').textContent='已导出，尚未写入项目。';});`;
  const output = inside(current.workspace, 'output/workflow/review.html');
  await writeFile(output, await workflowHtml('资产处理单', content, script));
  return { path: output, buildId, next: current.next };
}
