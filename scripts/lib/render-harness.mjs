// Shared Playwright render harness for the d3 verification pipeline.
// Owns the bare harness page (scripts + local fonts, no viewer app), the
// in-page dataset render, and the browser-side measurement passes that
// scripts/verify-d3.mjs and scripts/verify-render-regression.mjs both rely
// on. Extracted from scripts/verify-d3.mjs; behavior is unchanged.
import { PROJECT_FONT_FAMILIES, localFontFaces } from './local-fonts.mjs';

function toUrl(baseUrl, src) {
  return new URL(src, `${baseUrl}/`).toString();
}

export function harnessHtml(baseUrl, scripts) {
  const scriptTags = scripts
    .map((src) => `<script src="${toUrl(baseUrl, src)}"></script>`)
    .join('\n');
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <base href="${baseUrl}/" />
  <style>
    ${localFontFaces(PROJECT_FONT_FAMILIES)}
    html, body { margin: 0; padding: 0; background: #efefef; }
    #chart { margin: 0; padding: 0; overflow: hidden; }
    #chart svg { display: block; }
  </style>
</head>
<body>
  <div id="chart"></div>
  ${scriptTags}
</body>
</html>`;
}

// Opens a harness page in the given browser context and starts collecting
// page errors. The caller owns the context/browser lifecycle.
export async function openHarnessPage(context, { baseUrl, scripts }) {
  const page = await context.newPage();
  const pageErrors = [];
  page.on('pageerror', (err) => pageErrors.push(err.message));
  await page.setContent(harnessHtml(baseUrl, scripts), { waitUntil: 'load' });
  return { page, pageErrors };
}

// Resolves the localized dataset's reference-image contract before any
// rendering: { referenceSrc, width, height, language }.
export function datasetRenderMeta(page, datasetKey, language) {
  return page.evaluate(({ key, requestedLanguage }) => {
    const dataset = window.DATASETS?.find((item) => item.key === key);
    if (!dataset) throw new Error(`Dataset not found: ${key}`);
    const i18n = window.SANKEY_I18N;
    const language = i18n?.normalizeLanguage ? i18n.normalizeLanguage(requestedLanguage) : requestedLanguage || 'en';
    const renderDataset =
      language && language !== 'en'
        ? i18n?.localizeDataset?.(dataset, language)
        : dataset;
    if (!renderDataset) throw new Error(`Dataset localization failed: ${key}, language=${language}`);
    const ref = renderDataset.meta?.referenceImage;
    if (!ref || typeof ref !== 'object' || !ref.src || !ref.width || !ref.height) {
      throw new Error(`Dataset ${key} must define meta.referenceImage { src, width, height }`);
    }
    return { referenceSrc: ref.src, width: ref.width, height: ref.height, language };
  }, { key: datasetKey, requestedLanguage: language });
}

// Renders the localized dataset into #chart and returns the purity payload
// consumed by assertPurity() (image census, forbidden elements, SVG size).
// Expects the viewport to already match the reference-image dimensions.
export function renderDatasetForPurity(page, datasetKey, language) {
  return page.evaluate(async ({ key, requestedLanguage }) => {
    const dataset = window.DATASETS.find((item) => item.key === key);
    const i18n = window.SANKEY_I18N;
    const language = i18n?.normalizeLanguage ? i18n.normalizeLanguage(requestedLanguage) : requestedLanguage || 'en';
    const renderDataset =
      language && language !== 'en'
        ? i18n?.localizeDataset?.(dataset, language)
        : dataset;
    if (!renderDataset) throw new Error(`Dataset localization failed: ${key}, language=${language}`);
    const chart = document.querySelector('#chart');
    chart.style.width = `${renderDataset.meta.referenceImage.width}px`;
    chart.style.height = `${renderDataset.meta.referenceImage.height}px`;
    window.SankeyEngine.render('#chart', renderDataset);
    const svg = document.querySelector('#chart > svg');
    if (!svg) throw new Error('SankeyEngine.render did not create #chart > svg');
    // Capture the renderer's own canvas contract before the screenshot harness
    // applies any fixed pixel sizing. G2 must not pass because the harness
    // repaired a wrong viewBox or numeric width/height after render.
    const rawRect = svg.getBoundingClientRect();
    const images = Array.from(svg.querySelectorAll('image'));
    const imageHrefs = images.map(
      (image) =>
        image.getAttribute('href') ||
        image.getAttributeNS('http://www.w3.org/1999/xlink', 'href') ||
        image.href?.baseVal ||
        ''
    );
    const expectedRasterHrefs = (Array.isArray(renderDataset.rasterAnnotations)
      ? renderDataset.rasterAnnotations
      : renderDataset.rasterAnnotations
        ? [renderDataset.rasterAnnotations]
        : []
    )
      .filter(Boolean)
      .map((item) => item.href || item.src || '')
      .filter(Boolean);
    const forbiddenElements = Array.from(
      chart.querySelectorAll('canvas,picture,video,iframe,object,embed,foreignObject')
    ).map((element) => element.tagName.toLowerCase());
    const backgroundImageElements = Array.from(chart.querySelectorAll('*'))
      .filter((element) => {
        const value = window.getComputedStyle(element).backgroundImage;
        return value && value !== 'none';
      })
      .map((element) => {
        const tag = element.tagName.toLowerCase();
        const cls = element.getAttribute('class');
        const id = element.getAttribute('id');
        return `${tag}${id ? `#${id}` : ''}${cls ? `.${String(cls).replace(/\s+/g, '.')}` : ''}`;
      });
    await Promise.all(
      imageHrefs
        .filter(Boolean)
        .map(
          (href) =>
            new Promise((resolve, reject) => {
              const probe = new Image();
              probe.onload = resolve;
              probe.onerror = () => reject(new Error(`Failed to load SVG image: ${href}`));
              probe.src = href;
            })
        )
    );
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    return {
      imageCount: images.length,
      imageHrefs,
      expectedRasterHrefs,
      rasterAllowed: renderDataset.render?.allowRasterAnnotations === true,
      chartImgCount: document.querySelectorAll('#chart img').length,
      forbiddenElements,
      backgroundImageElements,
      viewBox: svg.getAttribute('viewBox'),
      widthAttribute: svg.getAttribute('width'),
      heightAttribute: svg.getAttribute('height'),
      width: Math.round(rawRect.width),
      height: Math.round(rawRect.height),
    };
  }, { key: datasetKey, requestedLanguage: language });
}

function numericSvgLength(value) {
  if (value == null || value === '') return null;
  const match = String(value).trim().match(/^(-?(?:\d+\.?\d*|\.\d+))(?:px)?$/i);
  return match ? Number(match[1]) : null;
}

export function assertRawSvgCanvas(purity, expected) {
  const viewBox = String(purity?.viewBox || '')
    .trim()
    .split(/[\s,]+/)
    .map(Number);
  if (
    viewBox.length !== 4 ||
    !viewBox.every(Number.isFinite) ||
    viewBox[0] !== 0 ||
    viewBox[1] !== 0 ||
    viewBox[2] !== expected.width ||
    viewBox[3] !== expected.height
  ) {
    throw new Error(
      `Raw SVG viewBox mismatch: expected 0 0 ${expected.width} ${expected.height}, got ${purity?.viewBox || 'missing'}`
    );
  }

  const numericWidth = numericSvgLength(purity.widthAttribute);
  const numericHeight = numericSvgLength(purity.heightAttribute);
  if (purity.widthAttribute == null || String(purity.widthAttribute).trim() === '') {
    throw new Error('Raw SVG width is missing; expected an exact numeric width or 100%');
  }
  if (numericWidth != null && numericWidth !== expected.width) {
    throw new Error(`Raw SVG width mismatch: expected ${expected.width}, got ${purity.widthAttribute}`);
  }
  if (numericHeight != null && numericHeight !== expected.height) {
    throw new Error(`Raw SVG height mismatch: expected ${expected.height}, got ${purity.heightAttribute}`);
  }
  if (numericWidth == null && String(purity.widthAttribute).trim() !== '100%') {
    throw new Error(`Unsupported responsive SVG width: ${purity.widthAttribute}`);
  }
  if (purity.heightAttribute && numericHeight == null) {
    throw new Error(`Unsupported responsive SVG height: ${purity.heightAttribute}`);
  }
}

// Once the raw renderer contract has passed G2, normalize the displayed SVG to
// the reference pixel dimensions so Playwright screenshots and DOM-derived
// pixel regions use a stable 1:1 coordinate system.
export function sizeRenderedSvgForCapture(page, width, height) {
  return page.evaluate(({ expectedWidth, expectedHeight }) => {
    const svg = document.querySelector('#chart > svg');
    if (!svg) throw new Error('Sankey SVG is missing before capture sizing');
    svg.setAttribute('width', String(expectedWidth));
    svg.setAttribute('height', String(expectedHeight));
    svg.style.width = `${expectedWidth}px`;
    svg.style.height = `${expectedHeight}px`;
    const rect = svg.getBoundingClientRect();
    return { width: Math.round(rect.width), height: Math.round(rect.height) };
  }, { expectedWidth: width, expectedHeight: height });
}

function finiteOpacity(value, fallback = 1) {
  const numeric = Number(value);
  return Number.isFinite(numeric) ? Math.max(0, Math.min(1, numeric)) : fallback;
}

function parseComputedColour(value) {
  const source = String(value || '').trim().toLowerCase();
  if (!source || source === 'none' || source === 'transparent') return null;
  const match = source.match(/^rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:\s*[,/]\s*([\d.]+))?\s*\)$/);
  if (!match) return { source, comparable: false, alpha: 1 };
  return {
    source,
    comparable: true,
    red: Number(match[1]),
    green: Number(match[2]),
    blue: Number(match[3]),
    alpha: match[4] == null ? 1 : finiteOpacity(match[4]),
  };
}

function coloursMatch(left, right) {
  return Boolean(
    left?.comparable &&
    right?.comparable &&
    left.red === right.red &&
    left.green === right.green &&
    left.blue === right.blue
  );
}

function paintAudit(value, paintOpacity, elementOpacity, background) {
  const colour = parseComputedColour(value);
  const colourAlpha = colour?.alpha || 0;
  const effectiveAlpha = colourAlpha * finiteOpacity(paintOpacity) * finiteOpacity(elementOpacity);
  const backgroundMatch = coloursMatch(colour, background);
  return {
    colourAlpha,
    effectiveAlpha,
    backgroundMatch,
    visible: Boolean(colour && effectiveAlpha > 0 && !backgroundMatch),
  };
}

export function classifyNodePaintAudit({ dataset = '', language = '', background = '', nodes = [] }) {
  const backgroundColour = parseComputedColour(background);
  const seen = new Set();
  const duplicateNodeIds = [];
  const records = nodes.map((node, index) => {
    const id = String(node.id || `unknown-${index}`);
    if (seen.has(id)) duplicateNodeIds.push(id);
    seen.add(id);
    const displayed = node.display !== 'none' && !['hidden', 'collapse'].includes(node.visibility);
    const hasBox = Number(node.bbox?.width) > 0 && Number(node.bbox?.height) > 0;
    const fillPaint = paintAudit(
      node.fill,
      node.fillOpacity,
      node.opacity,
      backgroundColour
    );
    const strokePaint = paintAudit(
      node.stroke,
      node.strokeOpacity,
      node.opacity,
      backgroundColour
    );
    const fillVisible = displayed && hasBox && fillPaint.visible;
    const strokeVisible = displayed && hasBox && Number(node.strokeWidth) > 0 && strokePaint.visible;
    return {
      ...node,
      id,
      displayed,
      hasBox,
      fillAlpha: fillPaint.colourAlpha,
      strokeAlpha: strokePaint.colourAlpha,
      effectiveFillAlpha: fillPaint.effectiveAlpha,
      effectiveStrokeAlpha: strokePaint.effectiveAlpha,
      fillMatchesBackground: fillPaint.backgroundMatch,
      strokeMatchesBackground: strokePaint.backgroundMatch,
      fillVisible,
      strokeVisible,
      faceVisible: fillVisible || strokeVisible,
    };
  });
  return {
    schemaVersion: 1,
    dataset,
    language,
    background,
    checkedNodes: records.length,
    visibleNodeIds: records.filter((node) => node.faceVisible).map((node) => node.id).sort(),
    invisibleNodeIds: records.filter((node) => !node.faceVisible).map((node) => node.id).sort(),
    duplicateNodeIds: [...new Set(duplicateNodeIds)].sort(),
    nodes: records.sort((left, right) => left.id.localeCompare(right.id)),
  };
}

export async function auditNodePaint(page, options = {}) {
  const collected = await page.evaluate(({ dataset, language }) => {
    const svg = document.querySelector('#chart > svg');
    if (!svg) throw new Error('Node paint audit root not found: #chart > svg');
    const backdrop = Array.from(svg.children).find((element) => element.tagName.toLowerCase() === 'rect');
    const background = backdrop ? window.getComputedStyle(backdrop).fill : '';
    const nodes = Array.from(svg.querySelectorAll('rect.sankey-node')).map((element) => {
      const style = window.getComputedStyle(element);
      const box = element.getBBox();
      return {
        id: element.getAttribute('data-node') || '',
        bbox: { x: box.x, y: box.y, width: box.width, height: box.height },
        fill: style.fill,
        fillOpacity: style.fillOpacity,
        stroke: style.stroke,
        strokeOpacity: style.strokeOpacity,
        strokeWidth: Number.parseFloat(style.strokeWidth) || 0,
        opacity: style.opacity,
        display: style.display,
        visibility: style.visibility,
      };
    });
    return { dataset, language, background, nodes };
  }, { dataset: options.dataset || '', language: options.language || '' });
  return classifyNodePaintAudit(collected);
}

function nodeIdFromEvidenceTarget(target) {
  const parts = String(target || '').split(/[.:/]/).filter(Boolean);
  return parts.at(-1) || '';
}

export function nodeFaceExpectationsFromPlan(plan) {
  const checks = Array.isArray(plan?.requiredChecks) ? plan.requiredChecks : [];
  const targetsFor = (checkId) => checks
    .filter((check) => check.id === checkId)
    .flatMap((check) => check.evidenceTargets || [])
    .map(nodeIdFromEvidenceTarget)
    .filter(Boolean);
  const explicitVisible = targetsFor('feature:visible-node-face');
  const legacyVisible = targetsFor('feature:visible-short-node');
  return {
    visible: [...new Set([...explicitVisible, ...legacyVisible])].sort(),
    hidden: [...new Set(targetsFor('feature:hidden-anchor'))].sort(),
  };
}

export function assertNodePaintAudit(audit, expectations = {}) {
  if (audit.duplicateNodeIds?.length) {
    throw new Error(`Node paint audit has duplicate semantic IDs: ${audit.duplicateNodeIds.join(', ')}`);
  }
  const byId = new Map((audit.nodes || []).map((node) => [node.id, node]));
  const failures = [];
  for (const id of expectations.visible || []) {
    const node = byId.get(id);
    if (!node) failures.push(`${id}=missing`);
    else if (!node.faceVisible) failures.push(`${id}=not-painted`);
  }
  for (const id of expectations.hidden || []) {
    const node = byId.get(id);
    if (!node) failures.push(`${id}=missing`);
    else if (node.faceVisible) failures.push(`${id}=unexpected-paint`);
  }
  if (failures.length) {
    throw new Error(`Node face paint failed: ${failures.join(', ')}`);
  }
}

function evidenceTargetsForCheck(check) {
  return [...new Set((check?.evidenceTargets || [])
    .map((target) => String(target).split(/[.:/]/).filter(Boolean).at(-1))
    .filter(Boolean))];
}

// Executes feature/impact gates whose evidence is already present in the
// current render. This prevents record:fidelity from archiving a known-failed
// Plan check and leaving finish() to discover it much later.
export function assertPlannedRenderAudits(plan, audits) {
  const checks = Array.isArray(plan?.requiredChecks) ? plan.requiredChecks : [];
  const failures = [];
  for (const check of checks) {
    if (check.enforcement === 'manual') continue;
    if (check.evidenceKind === 'label-layout-audit') {
      const expectedNodes = evidenceTargetsForCheck(check);
      const measurements = audits.labelLayoutAudit?.horizontalSideLabels || [];
      for (const node of expectedNodes) {
        const matches = measurements.filter((item) => item.node === node);
        if (!matches.length) failures.push(`${check.id}/${node}=missing-measurement`);
        else if (!matches.some((item) => Number(item.verticalCenterDelta) <= 4)) {
          failures.push(`${check.id}/${node}=center-delta`);
        }
      }
    } else if (check.evidenceKind === 'text-layout-audit') {
      const audit = audits.textLayoutAudit;
      if (!audit) failures.push(`${check.id}=missing-audit`);
      else {
        if ((check.objectIds || []).length > 0 && Number(audit.checkedTexts) < 1) {
          failures.push(`${check.id}=no-rendered-text`);
        }
        if ((audit.overflowViolations || []).length > 0) failures.push(`${check.id}=overflow`);
      }
    } else if (check.evidenceKind === 'annotation-layout-audit') {
      const audit = audits.annotationLayoutAudit;
      if (!audit) failures.push(`${check.id}=missing-audit`);
      else {
        if ((check.objectIds || []).length > 0 && Number(audit.checkedAnnotationTexts) < 1) {
          failures.push(`${check.id}=no-rendered-annotation`);
        }
        if ((audit.overlapViolations || []).length > 0) failures.push(`${check.id}=overlap`);
      }
    }
  }
  if (failures.length) {
    throw new Error(`Planned render checks failed: ${failures.join(', ')}`);
  }
}

// Explicitly loads every project font face and throws when any family is
// missing: data-URI @font-face rules stay "unloaded" until some text uses
// them, so a pure fonts.check() would fail for families/weights the current
// dataset happens not to use. Scoring a fallback-font render is meaningless.
export async function assertProjectFontsLoaded(page) {
  const fontStatus = await page.evaluate(async (requiredFonts) => {
    await Promise.all(
      requiredFonts.flatMap(({ family, weights }) =>
        weights.map((weight) => document.fonts.load(`${weight} 16px "${family}"`))
      )
    );
    await document.fonts.ready;
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    const faces = Array.from(document.fonts).map((font) => ({
      family: String(font.family || '').replace(/^['"]|['"]$/g, ''),
      weight: String(font.weight || ''),
      style: String(font.style || ''),
      status: font.status,
    }));
    const loadedFaces = Object.fromEntries(
      requiredFonts.map(({ family, weights }) => [
        family,
        Object.fromEntries(
          weights.map((weight) => [
            weight,
            faces.some(
              (face) =>
                face.family === family &&
                Number(face.weight) === weight &&
                face.style === 'normal' &&
                face.status === 'loaded'
            ),
          ])
        ),
      ])
    );
    const loaded = Object.fromEntries(
      requiredFonts.map(({ family }) => [
        family,
        document.fonts.check(`16px "${family}"`) &&
          Object.values(loadedFaces[family]).every(Boolean),
      ])
    );
    return {
      requiredFonts,
      loaded,
      allLoaded: Object.values(loaded).every(Boolean),
      loadedFaces,
      faces,
    };
  }, PROJECT_FONT_FAMILIES.map(({ family, weights }) => ({ family, weights })));
  if (!fontStatus.allLoaded) {
    throw new Error(
      `Local fonts did not load; refusing to score fallback-font render: ${JSON.stringify(fontStatus)}`
    );
  }
  return fontStatus;
}

const PRODUCT_FONT_FAMILIES = new Set(['noto sans', 'roboto']);
const FORBIDDEN_PRODUCT_FONT_FAMILIES = new Set(['montserrat']);

function parsedFontFamilies(fontFamily) {
  return String(fontFamily || '')
    .split(',')
    .map((family) => family.trim().replace(/^(['"])(.*)\1$/, '$2').trim())
    .filter(Boolean);
}

function typographyViolation(record, code, reason) {
  return {
    code,
    reason,
    text: record.text,
    element: record.element,
    role: record.role,
    fontFamily: record.fontFamily,
    selectorPath: record.selectorPath,
  };
}

// Pure classifier shared by the browser collector and unit tests. Semantic
// counts are based on SVG <text> elements, while run-level checks also include
// descendant <tspan>/<textPath> elements so an inline font override cannot
// evade the final-DOM policy.
export function classifyTypographyAudit({
  dataset = '',
  language = '',
  texts = [],
  runs = [],
  invalidBrandScopes = [],
}) {
  if (!Array.isArray(texts) || !Array.isArray(runs) || !Array.isArray(invalidBrandScopes)) {
    throw new TypeError('Typography audit texts, runs, and invalidBrandScopes must be arrays');
  }

  const inventory = texts.map((record) => ({
    ...record,
    primaryFontFamily: parsedFontFamilies(record.fontFamily)[0] || '',
  }));
  const textRuns = runs.map((record) => ({
    ...record,
    primaryFontFamily: parsedFontFamilies(record.fontFamily)[0] || '',
  }));
  const violations = invalidBrandScopes.map((scope) => ({
    code: 'invalid-brand-role-scope',
    reason: 'brand-role-must-use-a-minimal-brand-graphic-wrapper',
    text: '',
    element: scope.element || '',
    role: 'brand',
    fontFamily: '',
    selectorPath: scope.selectorPath || '',
  }));

  for (const record of textRuns) {
    const families = parsedFontFamilies(record.fontFamily);
    const normalized = families.map((family) => family.toLowerCase());
    if (!families.length) {
      violations.push(
        typographyViolation(record, 'text-missing-font-family', 'rendered-text-has-no-computed-font-family')
      );
      continue;
    }
    if (record.role === 'brand') continue;
    if (normalized.some((family) => FORBIDDEN_PRODUCT_FONT_FAMILIES.has(family))) {
      violations.push(
        typographyViolation(
          record,
          'product-text-uses-montserrat',
          'product-text-computed-font-family-contains-montserrat'
        )
      );
      continue;
    }
    if (!PRODUCT_FONT_FAMILIES.has(normalized[0])) {
      violations.push(
        typographyViolation(
          record,
          'product-text-uses-unapproved-font',
          'product-text-primary-font-must-be-noto-sans-or-roboto'
        )
      );
    }
  }

  const familyCounts = { product: {}, brand: {} };
  for (const record of inventory) {
    const family = record.primaryFontFamily || '(missing)';
    const role = record.role === 'brand' ? 'brand' : 'product';
    familyCounts[role][family] = (familyCounts[role][family] || 0) + 1;
  }

  return {
    schemaVersion: 1,
    ruleId: 'G3',
    status: violations.length ? 'failed' : 'passed',
    dataset: String(dataset || ''),
    language: String(language || ''),
    checkedTextCount: inventory.length,
    checkedTextRuns: textRuns.length,
    productTextCount: inventory.filter((record) => record.role !== 'brand').length,
    brandTextCount: inventory.filter((record) => record.role === 'brand').length,
    familyCounts,
    inventory,
    textRuns,
    invalidBrandScopes,
    violations,
  };
}

// Read-only final-DOM audit. The root selector is configurable so the same
// policy can inspect a live Sankey or a reattached serialized export.
export async function typographyAudit(page, options = {}) {
  const collected = await page.evaluate(({ rootSelector, dataset, language }) => {
    const svg = document.querySelector(rootSelector);
    if (!svg) throw new Error(`Typography audit root not found: ${rootSelector}`);

    const normalizeText = (element) =>
      String(element.textContent || '').replace(/\s+/g, ' ').trim();
    const selectorSegment = (element) => {
      const tag = element.tagName.toLowerCase();
      const id = element.getAttribute('id');
      const classes = String(element.getAttribute('class') || '')
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .map((name) => `.${name}`)
        .join('');
      const node = element.getAttribute('data-node');
      const role = element.getAttribute('data-typography-role');
      const siblings = element.parentElement
        ? Array.from(element.parentElement.children).filter((sibling) => sibling.tagName === element.tagName)
        : [];
      const position = siblings.length > 1 ? `:nth-of-type(${siblings.indexOf(element) + 1})` : '';
      return `${tag}${id ? `#${id}` : ''}${classes}${node ? `[data-node="${node}"]` : ''}${role ? `[data-typography-role="${role}"]` : ''}${position}`;
    };
    const selectorPath = (element) => {
      const segments = [];
      let current = element;
      while (current) {
        segments.unshift(selectorSegment(current));
        if (current === svg) break;
        current = current.parentElement;
      }
      return segments.join(' > ');
    };
    const recordFor = (element) => {
      const style = window.getComputedStyle(element);
      return {
        text: normalizeText(element),
        element: element.tagName.toLowerCase(),
        role: element.closest('[data-typography-role="brand"]') ? 'brand' : 'product',
        fontFamily: String(style.fontFamily || ''),
        fontWeight: String(style.fontWeight || ''),
        selectorPath: selectorPath(element),
      };
    };

    const texts = Array.from(svg.querySelectorAll('text')).map(recordFor);
    const runs = Array.from(svg.querySelectorAll('text, text tspan, text textPath')).map(recordFor);
    const invalidBrandElements = [];
    if (svg.getAttribute('data-typography-role') === 'brand') invalidBrandElements.push(svg);
    invalidBrandElements.push(
      ...svg.querySelectorAll(
        '.sankey-annotations[data-typography-role="brand"], .sankey-label[data-typography-role="brand"]'
      )
    );
    const invalidBrandScopes = [...new Set(invalidBrandElements)].map((element) => ({
      element: element.tagName.toLowerCase(),
      selectorPath: selectorPath(element),
    }));

    return { dataset, language, texts, runs, invalidBrandScopes };
  }, {
    rootSelector: options.rootSelector || '#chart > svg',
    dataset: options.dataset || '',
    language: options.language || '',
  });
  return classifyTypographyAudit(collected);
}

export function assertTypographyAudit(audit) {
  if (audit?.status === 'passed' && Array.isArray(audit.violations) && audit.violations.length === 0) {
    return audit;
  }
  const violations = Array.isArray(audit?.violations) ? audit.violations : [];
  const details = violations
    .slice(0, 5)
    .map((violation) => {
      const text = violation.text ? ` ${JSON.stringify(violation.text)}` : '';
      const font = violation.fontFamily ? ` font=${JSON.stringify(violation.fontFamily)}` : '';
      const selector = violation.selectorPath ? ` at ${violation.selectorPath}` : '';
      return `${violation.code || 'invalid-audit'}${text}${font}${selector}`;
    })
    .join('; ');
  throw new Error(
    `Typography audit failed (G3): ${violations.length || 'invalid'} violation(s)${details ? `: ${details}` : ''}`
  );
}

const TEXT_LAYOUT_TOLERANCE = 0.5;

function normalizeLayoutItem(item, family, index) {
  if (!item || typeof item !== 'object') {
    throw new TypeError(`${family}[${index}] must be an object`);
  }
  const source = item.bbox && typeof item.bbox === 'object' ? item.bbox : item;
  const bbox = {};
  for (const field of ['x', 'y', 'width', 'height']) {
    if (!Number.isFinite(source[field])) {
      throw new TypeError(`${family}[${index}].bbox.${field} must be finite`);
    }
    bbox[field] = source[field];
  }
  if (bbox.width < 0 || bbox.height < 0) {
    throw new RangeError(`${family}[${index}] bbox dimensions cannot be negative`);
  }
  return {
    identity: String(item.identity || `${family}:${index}`),
    text: String(item.text || ''),
    bbox,
  };
}

function boxEdges(item) {
  return {
    left: item.bbox.x,
    top: item.bbox.y,
    right: item.bbox.x + item.bbox.width,
    bottom: item.bbox.y + item.bbox.height,
  };
}

// Pure layout classifier shared by the browser-backed render audit and unit
// tests. SVG user-space bboxes may drift by a subpixel across Chromium/font
// builds, so only overflow or overlap greater than 0.5px is actionable.
export function classifyTextAndAnnotationLayout({
  width,
  height,
  texts = [],
  annotations = [],
  protectedTexts = [],
}) {
  if (!Number.isFinite(width) || width <= 0 || !Number.isFinite(height) || height <= 0) {
    throw new RangeError('Text layout canvas width and height must be positive finite numbers');
  }
  if (!Array.isArray(texts) || !Array.isArray(annotations) || !Array.isArray(protectedTexts)) {
    throw new TypeError('texts, annotations, and protectedTexts must be arrays');
  }

  const normalizedTexts = texts.map((item, index) => normalizeLayoutItem(item, 'texts', index));
  const normalizedAnnotations = annotations.map((item, index) =>
    normalizeLayoutItem(item, 'annotations', index)
  );
  const normalizedProtected = protectedTexts.map((item, index) =>
    normalizeLayoutItem(item, 'protectedTexts', index)
  );

  const overflowViolations = [];
  for (const item of normalizedTexts) {
    const edges = boxEdges(item);
    const overflow = {
      left: Math.max(0, -edges.left),
      top: Math.max(0, -edges.top),
      right: Math.max(0, edges.right - width),
      bottom: Math.max(0, edges.bottom - height),
    };
    if (Object.values(overflow).some((amount) => amount > TEXT_LAYOUT_TOLERANCE)) {
      overflowViolations.push({
        identity: item.identity,
        text: item.text,
        bbox: item.bbox,
        overflow,
      });
    }
  }

  const overlapViolations = [];
  for (const annotation of normalizedAnnotations) {
    const annotationEdges = boxEdges(annotation);
    for (const protectedText of normalizedProtected) {
      if (annotation.identity === protectedText.identity) continue;
      const protectedEdges = boxEdges(protectedText);
      const overlapWidth = Math.min(annotationEdges.right, protectedEdges.right)
        - Math.max(annotationEdges.left, protectedEdges.left);
      const overlapHeight = Math.min(annotationEdges.bottom, protectedEdges.bottom)
        - Math.max(annotationEdges.top, protectedEdges.top);
      if (overlapWidth <= TEXT_LAYOUT_TOLERANCE || overlapHeight <= TEXT_LAYOUT_TOLERANCE) continue;
      overlapViolations.push({
        annotation: {
          identity: annotation.identity,
          text: annotation.text,
          bbox: annotation.bbox,
        },
        protectedText: {
          identity: protectedText.identity,
          text: protectedText.text,
          bbox: protectedText.bbox,
        },
        intersection: {
          x: Math.max(annotationEdges.left, protectedEdges.left),
          y: Math.max(annotationEdges.top, protectedEdges.top),
          width: overlapWidth,
          height: overlapHeight,
        },
      });
    }
  }

  return {
    textLayoutAudit: {
      tolerance: TEXT_LAYOUT_TOLERANCE,
      width,
      height,
      checkedTexts: normalizedTexts.length,
      overflowViolations,
    },
    annotationLayoutAudit: {
      tolerance: TEXT_LAYOUT_TOLERANCE,
      checkedAnnotationTexts: normalizedAnnotations.length,
      checkedProtectedTexts: normalizedProtected.length,
      overlapViolations,
    },
  };
}

// Browser-backed collector. It converts every text bbox into the outer SVG's
// user space (including ancestor transforms), then delegates all decisions to
// classifyTextAndAnnotationLayout so browser and unit-test semantics cannot
// diverge.
export async function auditTextAndAnnotationLayout(page) {
  const geometry = await page.evaluate(() => {
    const svg = document.querySelector('#chart > svg');
    if (!svg) throw new Error('SankeyEngine.render did not create #chart > svg');

    const viewBox = svg.viewBox?.baseVal;
    const clientBox = svg.getBoundingClientRect();
    const width = viewBox?.width > 0
      ? viewBox.width
      : Number(svg.getAttribute('width')) || clientBox.width;
    const height = viewBox?.height > 0
      ? viewBox.height
      : Number(svg.getAttribute('height')) || clientBox.height;
    const rootScreenMatrix = svg.getScreenCTM();

    const transformPoint = (matrix, x, y) => {
      if (!matrix) return { x, y };
      return {
        x: matrix.a * x + matrix.c * y + matrix.e,
        y: matrix.b * x + matrix.d * y + matrix.f,
      };
    };
    const bboxInRootSpace = (element) => {
      let box;
      try {
        box = element.getBBox();
      } catch {
        return null;
      }
      let matrix = null;
      const elementScreenMatrix = element.getScreenCTM();
      if (rootScreenMatrix && elementScreenMatrix) {
        try {
          matrix = rootScreenMatrix.inverse().multiply(elementScreenMatrix);
        } catch {
          matrix = null;
        }
      }
      const points = [
        transformPoint(matrix, box.x, box.y),
        transformPoint(matrix, box.x + box.width, box.y),
        transformPoint(matrix, box.x, box.y + box.height),
        transformPoint(matrix, box.x + box.width, box.y + box.height),
      ];
      const xs = points.map((point) => point.x);
      const ys = points.map((point) => point.y);
      const left = Math.min(...xs);
      const top = Math.min(...ys);
      const right = Math.max(...xs);
      const bottom = Math.max(...ys);
      return { x: left, y: top, width: right - left, height: bottom - top };
    };
    const textValue = (element) => String(element.textContent || '').replace(/\s+/g, ' ').trim();
    const isPeriodText = (element) => {
      const parent = element.parentElement;
      return parent?.parentElement === svg
        && parent.tagName.toLowerCase() === 'g'
        && !parent.getAttribute('class');
    };

    const texts = [];
    const annotations = [];
    const protectedTexts = [];
    Array.from(svg.querySelectorAll('text')).forEach((element, index) => {
      const annotation = element.closest('.sankey-annotations');
      const label = element.closest('.sankey-label');
      const title = element.matches('.sankey-title');
      const period = isPeriodText(element);
      const node = label?.getAttribute('data-node');
      const role = annotation
        ? 'annotation'
        : label
          ? `label${node ? `:${node}` : ''}`
          : title
            ? 'title'
            : period
              ? 'period'
              : 'text';
      const item = {
        identity: `${role}#${index}`,
        text: textValue(element),
        bbox: bboxInRootSpace(element),
      };
      if (!item.bbox) return;
      texts.push(item);
      if (annotation) annotations.push(item);
      if (!annotation && (label || title || period)) protectedTexts.push(item);
    });

    return { width, height, texts, annotations, protectedTexts };
  });
  return classifyTextAndAnnotationLayout(geometry);
}

// Rendered-bbox audit of the label-node spacing hard gates (G8-G10 in
// docs/fidelity-loop-rules.md): same-axis vertical gap >= 4px (5px target),
// short-node center delta <= 4px, horizontal side-label overlap forbidden.
// The classifier is pure so the exact hard/target boundaries stay unit tested.
export function classifyLabelLayoutAudit(geometry) {
  const round = (value) => Math.round(value * 10) / 10;
  const normalizeBox = (box) => ({
    x: round(box.x),
    y: round(box.y),
    width: round(box.width),
    height: round(box.height),
    left: round(box.x),
    top: round(box.y),
    right: round(box.x + box.width),
    bottom: round(box.y + box.height),
    centerX: round(box.x + box.width / 2),
    centerY: round(box.y + box.height / 2),
  });
  const nodeBoxes = new Map(
    (geometry.nodes || []).map((item) => [item.id, normalizeBox(item.box)])
  );
  const labelBoxes = (geometry.labels || [])
    .map((item, index) => ({
      node: item.node,
      labelIndex: item.labelIndex ?? index,
      box: normalizeBox(item.box),
    }))
    .filter((item) => item.node && item.box.width > 0 && item.box.height > 0);

  const horizontalOverlap = (a, b) => Math.min(a.right, b.right) - Math.max(a.left, b.left);
  const verticalOverlap = (a, b) => Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
  const thresholds = Object.freeze({
    stackedLabelMinGap: 4,
    stackedLabelTargetGap: 5,
    shortNodeCenterMaxDelta: 4,
    sideLabelTargetGap: 5,
  });
  const verticalStacks = [];
  const horizontalSideLabels = [];
  const byNode = new Map();

  labelBoxes.forEach((label) => {
    const node = nodeBoxes.get(label.node);
    if (!node) return;

    if (!byNode.has(label.node)) byNode.set(label.node, []);
    byNode.get(label.node).push(label);

    const overlapX = horizontalOverlap(label.box, node);
    const centerDelta = Math.abs(label.box.centerX - node.centerX);
    const sameAxisTolerance = Math.max(12, Math.min(40, node.width / 2));
    const verticalOverlapPx = verticalOverlap(label.box, node);
    const sideAdjacent = label.box.centerX < node.left || label.box.centerX > node.right;
    if (verticalOverlapPx > 0 && sideAdjacent) {
      const overlap = overlapX;
      if (label.box.right <= node.left) {
        horizontalSideLabels.push({
          node: label.node,
          labelIndex: label.labelIndex,
          side: 'left-of-node',
          gap: round(node.left - label.box.right),
          overlap: 0,
          verticalCenterDelta: round(Math.abs(label.box.centerY - node.centerY)),
          verticalOverlap: round(verticalOverlapPx),
        });
      } else if (label.box.left >= node.right) {
        horizontalSideLabels.push({
          node: label.node,
          labelIndex: label.labelIndex,
          side: 'right-of-node',
          gap: round(label.box.left - node.right),
          overlap: 0,
          verticalCenterDelta: round(Math.abs(label.box.centerY - node.centerY)),
          verticalOverlap: round(verticalOverlapPx),
        });
      } else if (overlap > 0) {
        horizontalSideLabels.push({
          node: label.node,
          labelIndex: label.labelIndex,
          side: label.box.centerX < node.centerX ? 'left-overlap' : 'right-overlap',
          gap: round(-overlap),
          overlap: round(overlap),
          verticalCenterDelta: round(Math.abs(label.box.centerY - node.centerY)),
          verticalOverlap: round(verticalOverlapPx),
        });
      }
    }

    const shortNode = node.height <= 12 || node.width <= 12;
    const verticallySeparated = label.box.bottom <= node.top || label.box.top >= node.bottom;
    const sameAxis = overlapX > 0 && (centerDelta <= sameAxisTolerance || (shortNode && verticallySeparated));
    if (!sameAxis) return;

    const above = label.box.centerY <= node.centerY;
    const gap = above ? node.top - label.box.bottom : label.box.top - node.bottom;
    verticalStacks.push({
      node: label.node,
      labelIndex: label.labelIndex,
      direction: above ? 'above-node' : 'below-node',
      centerDelta: round(centerDelta),
      gap: round(gap),
      overlap: round(Math.max(0, -gap)),
      horizontalOverlap: round(overlapX),
      shortNode,
    });
  });

  const adjacentLabelGaps = [];
  byNode.forEach((labels, node) => {
    const sorted = labels.slice().sort((a, b) => a.box.top - b.box.top);
    for (let i = 1; i < sorted.length; i += 1) {
      const upper = sorted[i - 1];
      const lower = sorted[i];
      const gap = round(lower.box.top - upper.box.bottom);
      if (gap < 0 || horizontalOverlap(upper.box, lower.box) <= 0) continue;
      adjacentLabelGaps.push({
        node,
        upperLabelIndex: upper.labelIndex,
        lowerLabelIndex: lower.labelIndex,
        gap,
      });
    }
  });

  const horizontalViolations = horizontalSideLabels.filter((item) => item.overlap > 0);
  const verticalViolations = verticalStacks.filter((item) => item.gap < thresholds.stackedLabelMinGap);
  const centerViolations = verticalStacks.filter(
    (item) => item.shortNode && item.centerDelta > thresholds.shortNodeCenterMaxDelta
  );
  return {
    thresholds,
    verticalStacks,
    verticalViolations,
    centerViolations,
    adjacentLabelGaps,
    horizontalSideLabels,
    horizontalViolations,
  };
}

export async function auditLabelLayout(page) {
  const geometry = await page.evaluate(() => {
    const svg = document.querySelector('#chart > svg');
    if (!svg) throw new Error('SankeyEngine.render did not create #chart > svg');
    const boxFor = (element) => {
      const box = element.getBBox();
      return { x: box.x, y: box.y, width: box.width, height: box.height };
    };
    return {
      nodes: Array.from(svg.querySelectorAll('.sankey-node[data-node]')).map((element) => ({
        id: element.getAttribute('data-node'),
        box: boxFor(element),
      })),
      labels: Array.from(svg.querySelectorAll('.sankey-label[data-node]:not(.sankey-icon)')).map(
        (element, labelIndex) => ({
          node: element.getAttribute('data-node'),
          labelIndex,
          box: boxFor(element),
        })
      ),
    };
  });
  return classifyLabelLayoutAudit(geometry);
}

// Bounding boxes of every rendered element family (nodes, links, labels,
// icons, annotations, rasters, canvas-edge sentinels) for per-region pixel
// metrics.
export function collectRenderedRegions(page) {
  return page.evaluate(() => {
    const svg = document.querySelector('#chart > svg');
    if (!svg) throw new Error('SankeyEngine.render did not create #chart > svg');

    const svgBox = svg.getBoundingClientRect();
    const width = Math.round(svgBox.width);
    const height = Math.round(svgBox.height);
    const regions = [];
    const seen = new Set();
    const round = (value) => Math.round(value * 10) / 10;
    const addBox = (region, element, note = '') => {
      if (!element || typeof element.getBBox !== 'function') return;
      let box;
      try {
        box = element.getBBox();
      } catch {
        return;
      }
      if (!box || box.width <= 0 || box.height <= 0) return;
      const x = Math.max(0, Math.floor(box.x));
      const y = Math.max(0, Math.floor(box.y));
      const right = Math.min(width, Math.ceil(box.x + box.width));
      const bottom = Math.min(height, Math.ceil(box.y + box.height));
      if (right <= x || bottom <= y) return;
      const key = `${region}:${x}:${y}:${right - x}:${bottom - y}`;
      if (seen.has(key)) return;
      seen.add(key);
      regions.push({
        region,
        x,
        y,
        width: right - x,
        height: bottom - y,
        note,
      });
    };
    const addRect = (region, x, y, w, h, note = '') => {
      const left = Math.max(0, Math.floor(x));
      const top = Math.max(0, Math.floor(y));
      const right = Math.min(width, Math.ceil(x + w));
      const bottom = Math.min(height, Math.ceil(y + h));
      if (right <= left || bottom <= top) return;
      const key = `${region}:${left}:${top}:${right - left}:${bottom - top}`;
      if (seen.has(key)) return;
      seen.add(key);
      regions.push({ region, x: left, y: top, width: right - left, height: bottom - top, note });
    };

    addRect('edge:top', 0, 0, width, Math.min(80, height), 'canvas boundary sentinel');
    addRect('edge:bottom', 0, Math.max(0, height - 80), width, Math.min(80, height), 'canvas boundary sentinel');
    addRect('edge:left', 0, 0, Math.min(80, width), height, 'canvas boundary sentinel');
    addRect('edge:right', Math.max(0, width - 80), 0, Math.min(80, width), height, 'canvas boundary sentinel');

    Array.from(svg.querySelectorAll('.sankey-node[data-node]')).forEach((element) => {
      addBox(`node:${element.getAttribute('data-node')}`, element, 'rendered node bbox');
    });
    Array.from(svg.querySelectorAll('.sankey-link')).forEach((element, index) => {
      let box;
      try {
        box = element.getBBox();
      } catch {
        return;
      }
      const strokeWidth = Number(element.getAttribute('stroke-width')) || 0;
      const pad = Math.ceil(strokeWidth / 2) + 2;
      addRect(
        `link:${element.getAttribute('data-source')}->${element.getAttribute('data-target')}#${index}`,
        box.x - pad,
        box.y - pad,
        box.width + pad * 2,
        box.height + pad * 2,
        `rendered path bbox padded by ${pad}px`
      );
    });
    Array.from(svg.querySelectorAll('.sankey-label[data-node]:not(.sankey-icon)')).forEach((element, index) => {
      addBox(`label:${element.getAttribute('data-node')}#${index}`, element, 'rendered label bbox');
    });
    Array.from(svg.querySelectorAll('.sankey-label.sankey-icon[data-node]')).forEach((element, index) => {
      addBox(`icon:${element.getAttribute('data-node')}#${index}`, element, 'rendered vector icon bbox');
    });
    Array.from(svg.querySelectorAll('.sankey-annotations')).forEach((element, index) => {
      addBox(`annotation:${index}`, element, 'annotationsSvg group bbox');
    });
    Array.from(svg.querySelectorAll('.sankey-raster-annotations image')).forEach((element, index) => {
      const key = element.getAttribute('data-key') || index;
      addBox(`raster:${key}`, element, 'approved runtime raster annotation bbox');
    });
    Array.from(svg.children).forEach((element, index) => {
      const tag = element.tagName.toLowerCase();
      const cls = element.getAttribute('class') || '';
      if (tag === 'text') addBox(`direct-text:${index}`, element, 'title or period text bbox');
      if (tag === 'g' && !cls) addBox(`direct-group:${index}`, element, 'unclassified top-level SVG group bbox');
    });

    return regions.map((region) => ({
      ...region,
      x: round(region.x),
      y: round(region.y),
      width: round(region.width),
      height: round(region.height),
    }));
  });
}
