import path from 'node:path';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { rootDir } from './project.mjs';
import { inside, filesUnder, bytesDigest, readJson } from './workflow-files.mjs';
import { digestValue } from './dataset-build.mjs';
import { resolveSourcePath } from './source-lifecycle.mjs';

export async function projectAssetCatalog(root = rootDir) {
  const recipes = [];
  for (const file of await filesUnder(root, ['input/icon-crop-specs'])) {
    if (!file.endsWith('.json')) continue;
    const bytes = await readFile(inside(root, file));
    const spec = JSON.parse(bytes);
    recipes.push({ path: file, digest: bytesDigest(bytes), source: spec.source, runtimeOutputDir: spec.runtimeOutputDir, crops: spec.crops || [] });
  }
  const versions = [];
  for (const file of await filesUnder(root, ['data/assets/versions'])) {
    if (file.endsWith('.json')) versions.push(await readJson(inside(root, file)));
  }
  const adapters = [];
  for (const file of await filesUnder(root, ['data/datasets'])) if (file.endsWith('.js')) adapters.push({ path: file, key: path.basename(file, '.js'), code: await readFile(inside(root, file), 'utf8') });
  const entries = [];
  for (const file of await filesUnder(root, ['data/assets/raster-annotations'])) {
    if (!/\.(png|jpe?g|webp|svg)$/i.test(file)) continue;
    const digest = bytesDigest(await readFile(inside(root, file)));
    const provenance = recipes.flatMap((recipe) => recipe.crops.filter((crop) => recipe.runtimeOutputDir && crop.runtimeOutput && path.posix.join(recipe.runtimeOutputDir, crop.runtimeOutput) === file).map((crop) => ({ recipe: recipe.path, recipeDigest: recipe.digest, source: recipe.source, cropKey: crop.key })));
    const direct = adapters.filter((adapter) => adapter.code.includes(file)).map((adapter) => adapter.key);
    const consumers = new Set(direct);
    // Expand explicit sibling reuse so reverse lookup covers derived adapters.
    let changed = true;
    while (changed) { changed = false; for (const adapter of adapters) if (!consumers.has(adapter.key) && [...consumers].some((key) => adapter.code.includes(`'${key}'`) || adapter.code.includes(`"${key}"`))) { consumers.add(adapter.key); changed = true; } }
    const acceptedVersions = versions.filter((version) => {
      const { versionDigest, ...value } = version;
      if (digestValue(value) !== versionDigest) throw new Error('Asset version metadata changed');
      return version.artifact.path === file && version.artifact.digest === digest && version.review?.decision === 'accepted' && version.review.artifactDigest === digest && provenance.some((item) => item.recipeDigest === version.recipe.digest);
    }).map((version) => version.versionDigest);
    entries.push({ path: file, digest, provenance, directConsumers: direct.sort(), consumers: [...consumers].sort(), acceptedVersions, reusable: acceptedVersions.length > 0 });
  }
  return { protocol: 'asset-catalog/v1', entries, recipes: recipes.map(({ path: file, digest, source }) => ({ path: file, digest, source })) };
}
export async function updateAssetCatalog(root = rootDir, { check = false } = {}) {
  const value = await projectAssetCatalog(root);
  const contents = JSON.stringify(value, null, 2) + '\n';
  const file = inside(root, 'data/assets/catalog.json');
  if (check) { if (!existsSync(file) || await readFile(file, 'utf8') !== contents) throw new Error('Asset catalog stale: pnpm update:asset-catalog'); }
  else { await mkdir(path.dirname(file), { recursive: true }); await writeFile(file, contents); }
  return value;
}
export async function recordAssetVersion(input, root) {
  if (!input?.subject?.trim() || !input.review?.reviewer?.trim() || !input.review?.note?.trim() || input.review.decision !== 'accepted') throw new Error('Asset acceptance needs subject, reviewer and a concrete source comparison');
  if (!input.artifact?.startsWith('data/assets/raster-annotations/') || !input.recipe?.startsWith('input/icon-crop-specs/')) throw new Error('Asset version must name a runtime asset and its durable crop recipe');
  const artifactDigest = bytesDigest(await readFile(inside(root, input.artifact)));
  if (input.review.artifactDigest !== artifactDigest) throw new Error('Asset review does not bind these exact bytes');
  const recipeBytes = await readFile(inside(root, input.recipe));
  const recipe = JSON.parse(recipeBytes);
  const source = resolveSourcePath(recipe.source, { projectRoot: root });
  if (!existsSync(source)) throw new Error('Restore the original Source locally before recording an asset version');
  if (!recipe.crops?.some((crop) => crop.runtimeOutput && path.posix.join(recipe.runtimeOutputDir, crop.runtimeOutput) === input.artifact)) throw new Error('Recipe does not produce this runtime asset');
  const value = { protocol: 'asset-version/v1', subject: input.subject, artifact: { path: input.artifact, digest: artifactDigest }, recipe: { path: input.recipe, digest: bytesDigest(recipeBytes) }, source: { path: recipe.source, digest: bytesDigest(await readFile(source)) }, review: input.review };
  const version = { ...value, versionDigest: digestValue(value) };
  const output = inside(root, `data/assets/versions/${version.versionDigest.slice(7)}.json`);
  await mkdir(path.dirname(output), { recursive: true });
  try { await writeFile(output, JSON.stringify(version, null, 2) + '\n', { flag: 'wx' }); } catch (error) { if (error.code !== 'EEXIST') throw error; if (digestValue(await readJson(output)) !== digestValue(version)) throw new Error('Asset version collision'); }
  await updateAssetCatalog(root);
  return version;
}
