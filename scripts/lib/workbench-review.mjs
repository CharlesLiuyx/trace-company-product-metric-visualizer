// A disposable review projection. It never publishes data or writes a Build.
import path from 'node:path';
import vm from 'node:vm';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { fileManifest, readJson, inside, bytesDigest } from './workflow-files.mjs';
import { digestValue } from './dataset-build.mjs';
import { mergeSource } from './workflow-merge.mjs';
import { applicationManifest } from './workflow-application.mjs';
import { readSemanticContribution } from './workflow-dependencies.mjs';

const GENERATED = new Set(['data/dataset-manifest.js', 'data/metric-observations.js', 'data/dataset-file-metadata.js', 'data/render-baselines.json', 'data/assets/catalog.json']);
const dataPath = (file) => (file.startsWith('data/') || /^input\/icon-crop-specs\/[^/]+\.json$/.test(file)) && !GENERATED.has(file);
const read = (root, file) => readFile(inside(root, file)).catch((error) => { if (error.code !== 'ENOENT') throw error; return null; });
async function metadata(root) {
  const source = await read(root, 'data/dataset-file-metadata.js');
  if (!source) return null;
  const context = { window: {} };
  vm.runInNewContext(source.toString('utf8'), context, { timeout: 1000 });
  return context.window.DATASET_FILE_METADATA;
}

export const reviewTasks = (tasks) => tasks.filter((task) => task.buildId.startsWith('build-') && task.selectable && task.revision)
  .sort((a, b) => a.key.localeCompare(b.key) || a.buildId.localeCompare(b.buildId));

export async function composeReviewData(root, snapshot, tasks) {
  const members = [], keys = new Set(), times = await metadata(snapshot), ownedTimes = new Map();
  for (const task of reviewTasks(tasks)) {
    if (keys.has(task.key)) throw new Error(`统一验收存在重复数据：${task.key}；请先解决两个草稿的归属。`);
    keys.add(task.key);
    const workspace = inside(root, `output/builds/${task.buildId}/workspace`);
    try {
      const build = await readJson(inside(root, `output/builds/${task.buildId}/manifest.json`));
      const base = await readJson(path.join(workspace, 'output/workflow/base.json'));
      if (digestValue(base.entries) !== base.digest) throw new Error('草稿基线摘要不匹配，请刷新草稿');
      const baseRoot = inside(root, path.relative(root, base.root));
      const draft = await fileManifest(workspace);
      const before = new Map(base.entries.map((entry) => [entry.path, entry.digest]));
      const incoming = new Map(draft.entries.map((entry) => [entry.path, entry.digest]));
      for (const file of new Set([...before.keys(), ...incoming.keys()])) {
        if (!dataPath(file) || before.get(file) === incoming.get(file)) continue;
        if (!incoming.has(file)) throw new Error(`草稿删除了 ${file}，需要先明确处理删除`);
        const [original, current, next] = await Promise.all([read(baseRoot, file), read(snapshot, file), read(workspace, file)]);
        if ((original ? bytesDigest(original) : undefined) !== before.get(file) || !next || bytesDigest(next) !== incoming.get(file)) throw new Error(`复制时文件已变化：${file}`);
        let merged;
        if (current?.equals(next)) continue;
        if ((!current && !original) || current && original && current.equals(original)) merged = next;
        else merged = mergeSource(file, original?.toString('utf8') ?? null, current?.toString('utf8') ?? null, next.toString('utf8'));
        await mkdir(path.dirname(inside(snapshot, file)), { recursive: true });
        await writeFile(inside(snapshot, file), merged);
      }
      const timeKey = build.adapter === 'revenue-metric' ? 'data/revenue-metrics.js' : task.key;
      const time = (await metadata(workspace))?.files?.[timeKey];
      if (time && times) {
        if (ownedTimes.has(timeKey) && digestValue(ownedTimes.get(timeKey)) !== digestValue(time)) throw new Error(`显示时间冲突：${timeKey}`);
        ownedTimes.set(timeKey, time); times.files[timeKey] = time;
      }
      members.push({ buildId: task.buildId, key: task.key, revision: task.revision, sourceDigest: draft.digest, pending: task.reviewPending, workspace, build });
    } catch (error) { throw new Error(`${task.key}：${error.message}`); }
  }
  if (times) await writeFile(path.join(snapshot, 'data/dataset-file-metadata.js'), `window.DATASET_FILE_METADATA = ${JSON.stringify(times)};\n`);
  return members;
}

export async function bindReviewMembers(root, snapshot, members, inspect) {
  const application = await applicationManifest(snapshot);
  const projected = new Map((await fileManifest(snapshot)).entries.map((entry) => [entry.path, entry.digest]));
  const result = [];
  for (const member of members) {
    const { workspace, build, revision, ...identity } = member;
    let reviewToken = null, reason = '待任务更新检查';
    const current = await inspect(member.buildId).catch(() => null);
    if (current?.fresh && current.reviewToken === revision) {
      const [shown, authored, draftApplication] = await Promise.all([
        readSemanticContribution(build, snapshot), readSemanticContribution(build, workspace), applicationManifest(workspace),
      ]);
      const authoredArtifacts = build.receipts.filter((receipt) => receipt.state === 'AUTHORED').at(-1)?.payload.artifacts || [];
      // Additional companies may be visible, but the reviewed company's values,
      // display time, application and all its existing assets must be identical.
      const assetsMatch = authoredArtifacts.filter((item) => ['asset', 'asset-recipe'].includes(item.role) && !GENERATED.has(item.path)).every((item) => projected.get(item.path) === item.digest);
      if (digestValue(shown) === digestValue(authored) && application.digest === draftApplication.digest && assetsMatch) { reviewToken = revision; reason = '待验收'; }
      else reason = '汇总后的依赖已变化，待任务更新检查';
    }
    result.push({ ...identity, reviewToken, reason });
  }
  return result;
}

export async function assertReviewMembersFresh(root, members) {
  for (const member of members) {
    const workspace = inside(root, `output/builds/${member.buildId}/workspace`);
    const selection = await readJson(inside(root, `output/local-view/builds/${member.buildId}.json`));
    if ((await fileManifest(workspace)).digest !== member.sourceDigest || selection.revision !== member.revision) throw new Error(`${member.key} 在汇总期间已更新，正在重新生成验收版本`);
  }
}

// CLI review reads the exact immutable receipt displayed by the one-place view.
export async function readReviewPreview(root, buildId, previewId) {
  let source = buildId;
  let directory = inside(root, `output/workbench/previews/${source}/${previewId}`);
  let preview;
  try { preview = await readJson(path.join(directory, 'candidate.json')); }
  catch (error) {
    if (error.code !== 'ENOENT') throw error;
    source = 'review'; directory = inside(root, `output/workbench/previews/review/${previewId}`);
    preview = await readJson(path.join(directory, 'candidate.json'));
  }
  if (preview.id !== previewId || preview.source !== source) throw new Error('Displayed preview identity does not match its receipt');
  const member = source === 'review' ? preview.members?.find((item) => item.buildId === buildId) : preview;
  if (!member?.reviewToken) throw new Error('This Build has no current review binding in the displayed preview');
  return { directory, preview, member };
}
