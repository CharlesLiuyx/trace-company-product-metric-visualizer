import { createHash } from 'node:crypto';
import { constants as fsConstants, existsSync } from 'node:fs';
import { copyFile, mkdir, readFile, rm, unlink } from 'node:fs/promises';
import path from 'node:path';
import { rootDir } from './project.mjs';

const DATASET_KEY_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const SHA256_RE = /^sha256:[a-f0-9]{64}$/;

function lifecycleError(code, message) {
  const error = new Error(message);
  error.code = code;
  return error;
}

function slashPath(value) {
  return value.split(path.sep).join('/');
}

function assertInsideProject(absolute, projectRoot, label) {
  const root = path.resolve(projectRoot);
  if (absolute !== root && !absolute.startsWith(`${root}${path.sep}`)) {
    throw lifecycleError('SOURCE_PATH_INVALID', `${label} escapes the project root`);
  }
}

function assertDatasetKey(key) {
  if (!DATASET_KEY_RE.test(String(key || ''))) {
    throw lifecycleError('SOURCE_KEY_INVALID', `Invalid dataset key: ${key || '<missing>'}`);
  }
}

export function sourceLifecyclePaths(key, options = {}) {
  assertDatasetKey(key);
  const projectRoot = path.resolve(options.projectRoot || rootDir);
  const processingUri = `input/processing/${key}.png`;
  const processedUri = `input/processed/${key}.png`;
  return {
    processingUri,
    processedUri,
    processingPath: path.join(projectRoot, 'input', 'processing', `${key}.png`),
    processedPath: path.join(projectRoot, 'input', 'processed', `${key}.png`),
  };
}

export function pendingSourcePath(requested, options = {}) {
  const projectRoot = path.resolve(options.projectRoot || rootDir);
  const absolute = path.resolve(projectRoot, requested);
  assertInsideProject(absolute, projectRoot, 'Pending Source');
  if (path.dirname(absolute) !== path.join(projectRoot, 'input', 'pending') || !/\.png$/i.test(absolute)) {
    throw lifecycleError('SOURCE_PATH_INVALID', 'Source must be a PNG directly under input/pending/');
  }
  return {
    originUri: slashPath(path.relative(projectRoot, absolute)),
    originPath: absolute,
  };
}

export async function sourceDigest(filePath) {
  return `sha256:${createHash('sha256').update(await readFile(filePath)).digest('hex')}`;
}

async function moveFileNoClobber(sourcePath, targetPath, expectedDigest = '') {
  if (!existsSync(sourcePath)) {
    throw lifecycleError('SOURCE_MISSING', `Source file does not exist: ${sourcePath}`);
  }
  if (existsSync(targetPath)) {
    throw lifecycleError('SOURCE_DESTINATION_EXISTS', `Source destination already exists: ${targetPath}`);
  }
  await mkdir(path.dirname(targetPath), { recursive: true });
  let targetCreated = false;
  try {
    await copyFile(sourcePath, targetPath, fsConstants.COPYFILE_EXCL);
    targetCreated = true;
    if (expectedDigest) {
      const actualDigest = await sourceDigest(targetPath);
      if (actualDigest !== expectedDigest) {
        throw lifecycleError(
          'SOURCE_DIGEST_MISMATCH',
          `Copied Source digest ${actualDigest} does not match intake digest ${expectedDigest}`
        );
      }
    }
    await unlink(sourcePath);
  } catch (cause) {
    if (targetCreated) await rm(targetPath, { force: true }).catch(() => {});
    throw cause;
  }
}

export async function claimPendingSource({ source, key, expectedDigest = '', projectRoot = rootDir }) {
  if (expectedDigest && !SHA256_RE.test(expectedDigest)) {
    throw lifecycleError('SOURCE_DIGEST_INVALID', 'Expected Source digest must be sha256');
  }
  const origin = pendingSourcePath(source, { projectRoot });
  const lifecycle = sourceLifecyclePaths(key, { projectRoot });
  if (existsSync(lifecycle.processedPath)) {
    throw lifecycleError(
      'PROCESSED_SOURCE_EXISTS',
      `Processed Source already exists for ${key}: ${lifecycle.processedUri}`
    );
  }
  if (existsSync(lifecycle.processingPath)) {
    const [originDigest, processingDigest] = await Promise.all([
      sourceDigest(origin.originPath),
      sourceDigest(lifecycle.processingPath),
    ]);
    if (!expectedDigest || originDigest !== expectedDigest || processingDigest !== expectedDigest) {
      throw lifecycleError(
        'PROCESSING_SOURCE_COLLISION',
        `${lifecycle.processingUri} already exists and does not match the selected intake Source`
      );
    }
    // Recover the copy+unlink crash window. Both paths identify the exact
    // same immutable Source, so retaining the processing locator completes
    // the interrupted claim without overwriting either set of bytes.
    await unlink(origin.originPath);
    return { ...origin, ...lifecycle, recoveredDuplicate: true };
  }
  await moveFileNoClobber(origin.originPath, lifecycle.processingPath, expectedDigest);
  return { ...origin, ...lifecycle, recoveredDuplicate: false };
}

export async function isRecoverablePendingClaim({ source, key, expectedDigest, projectRoot = rootDir }) {
  if (!SHA256_RE.test(String(expectedDigest || ''))) return false;
  const origin = pendingSourcePath(source, { projectRoot });
  const lifecycle = sourceLifecyclePaths(key, { projectRoot });
  if (
    !existsSync(origin.originPath) ||
    !existsSync(lifecycle.processingPath) ||
    existsSync(lifecycle.processedPath)
  ) {
    return false;
  }
  const [originDigest, processingDigest] = await Promise.all([
    sourceDigest(origin.originPath),
    sourceDigest(lifecycle.processingPath),
  ]);
  return originDigest === expectedDigest && processingDigest === expectedDigest;
}

export async function restorePendingSource(claim, options = {}) {
  const projectRoot = path.resolve(options.projectRoot || rootDir);
  const originPath = path.resolve(claim.originPath || path.join(projectRoot, claim.originUri || ''));
  const processingPath = path.resolve(claim.processingPath || path.join(projectRoot, claim.processingUri || ''));
  assertInsideProject(originPath, projectRoot, 'Pending Source');
  assertInsideProject(processingPath, projectRoot, 'Processing Source');
  await moveFileNoClobber(processingPath, originPath, options.expectedDigest || '');
}

/**
 * Resolve a stable processed locator to the in-progress copy when the final
 * projection does not exist yet. Callers keep authored paths stable while a
 * Build remains in input/processing/.
 */
export function resolveSourcePath(requested, options = {}) {
  const projectRoot = path.resolve(options.projectRoot || rootDir);
  const absolute = path.isAbsolute(requested)
    ? path.resolve(requested)
    : path.resolve(projectRoot, requested);
  assertInsideProject(absolute, projectRoot, 'Source locator');
  if (existsSync(absolute)) return absolute;

  const relative = slashPath(path.relative(projectRoot, absolute));
  const match = relative.match(/^input\/processed\/([^/]+\.png)$/i);
  if (!match) return absolute;
  const processingPath = path.join(projectRoot, 'input', 'processing', match[1]);
  return existsSync(processingPath) ? processingPath : absolute;
}

export async function promoteProcessingSource({ key, expectedDigest, projectRoot = rootDir }) {
  assertDatasetKey(key);
  if (!SHA256_RE.test(String(expectedDigest || ''))) {
    throw lifecycleError('SOURCE_DIGEST_INVALID', 'Expected Source digest must be sha256');
  }
  const lifecycle = sourceLifecyclePaths(key, { projectRoot });
  const processingExists = existsSync(lifecycle.processingPath);
  const processedExists = existsSync(lifecycle.processedPath);

  if (processedExists) {
    const processedDigest = await sourceDigest(lifecycle.processedPath);
    if (processedDigest !== expectedDigest) {
      throw lifecycleError(
        'PROCESSED_SOURCE_COLLISION',
        `${lifecycle.processedUri} has digest ${processedDigest}; expected ${expectedDigest}`
      );
    }
    if (processingExists) {
      const processingDigest = await sourceDigest(lifecycle.processingPath);
      if (processingDigest !== expectedDigest) {
        throw lifecycleError(
          'PROCESSING_SOURCE_COLLISION',
          `${lifecycle.processingUri} has digest ${processingDigest}; expected ${expectedDigest}`
        );
      }
      // Recover the only crash window in the no-clobber copy+unlink move: the
      // exact Source exists at both locators, so the final projection wins.
      await unlink(lifecycle.processingPath);
      return { ...lifecycle, alreadyCompleted: true, recoveredDuplicate: true };
    }
    return { ...lifecycle, alreadyCompleted: true, recoveredDuplicate: false };
  }

  if (!processingExists) {
    throw lifecycleError(
      'PROCESSING_SOURCE_MISSING',
      `No in-progress Source exists for ${key}: ${lifecycle.processingUri}`
    );
  }
  const processingDigest = await sourceDigest(lifecycle.processingPath);
  if (processingDigest !== expectedDigest) {
    throw lifecycleError(
      'PROCESSING_SOURCE_DIGEST_MISMATCH',
      `${lifecycle.processingUri} has digest ${processingDigest}; expected ${expectedDigest}`
    );
  }
  await moveFileNoClobber(lifecycle.processingPath, lifecycle.processedPath, expectedDigest);
  return { ...lifecycle, alreadyCompleted: false, recoveredDuplicate: false };
}
