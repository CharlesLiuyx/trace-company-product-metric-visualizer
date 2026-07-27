#!/usr/bin/env node
import { assert } from './lib/project.mjs';
import { loadBrowserData as loadSharedBrowserData } from './lib/browser-data-loader.mjs';

const TRACKED_TRANSLATABLE_ACRONYMS = new Set(['D&A', 'G&A', 'R&D', 'S&M', 'SG&A', 'TAC']);
// Grandfathered brand/logo words for datasets registered before company-identity
// derivation existed. Do not extend: rely on company metadata identity text, or
// declare dataset-specific words in `i18n.preservedAnnotationText` in the dataset file.
const PRESERVED_ANNOTATION_TEXT = new Set([
  '.com',
  'amazon',
  'amazonads',
  'audible',
  'aws',
  'ads',
  'FOODS',
  'fresh',
  'Habit',
  'Hilton',
  'Hut',
  'INTERNATIONAL',
  'Marriott',
  'MARKET',
  'Paramount+',
  'Pizza',
  'prime',
  'the',
  'twitch',
  'uber',
  'Uber',
  'Eats',
  'Uber Freight',
  'WHOLE',
  'Yum!',
]);
const SAFE_ANNOTATION_SVG_TAGS = new Set([
  'circle', 'clippath', 'defs', 'ellipse', 'g', 'line', 'lineargradient',
  'path', 'polygon', 'radialgradient', 'rect', 'stop', 'svg', 'text', 'tspan',
]);
const ANNOTATION_TEXT_LAYOUT_ATTRIBUTES = new Set([
  'x', 'y', 'dx', 'font-size', 'font-family', 'font-weight',
  'textlength', 'lengthadjust', 'text-anchor',
]);
const ANNOTATION_TEXT_LAYOUT_CHANGES = new Set([
  'x', 'y', 'font-size', 'font-family', 'textlength',
]);
const ANNOTATION_TEXT_LAYOUT_ADDITIONS = new Set([
  'font-weight', 'text-anchor',
]);
const ANNOTATION_TEXT_LAYOUT_REMOVALS = new Set([
  'font-weight', 'textlength', 'lengthadjust',
]);
const SAFE_ANNOTATION_GEOMETRY_CLASSES = new Set([
  'sankey-interactive-annotation',
  'sankey-period-stamp',
]);
const UNSUPPORTED_ANNOTATION_GEOMETRY_TAGS = new Set([
  'svg', 'defs', 'clippath', 'lineargradient', 'radialgradient',
]);
const UNSUPPORTED_ANNOTATION_GEOMETRY_ATTRIBUTES = new Set([
  'clip', 'clip-path', 'display', 'filter', 'mask', 'opacity', 'overflow',
  'preserveaspectratio', 'transform-origin', 'viewbox', 'visibility',
]);

function parseArgs(argv) {
  const strict = argv.includes('--strict');
  const keys = argv.filter((arg) => arg !== '--strict' && arg !== '--');
  return { strict, keys: new Set(keys) };
}

function loadBrowserData() {
  return loadSharedBrowserData({ runtime: ['src/sankey-engine.js', 'src/i18n-dictionaries.js', 'src/i18n.js'] });
}

function clean(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

// Localization may replace descriptive copy and label layout, but it must
// never change monetary geometry or the visible authored amount. This
// independent projection protects both numeric value and valueText even if
// the runtime overlay contract is accidentally loosened later.
function comparisonGeometryProjection(dataset, engine) {
  const canvas = engine.helpers.canvasSize(dataset);
  const render = dataset.render || {};
  return {
    key: dataset.key,
    comparisonScale: dataset.comparisonScale || null,
    canvas,
    dynamicLayout: {
      margin: render.margin || null,
      nodePadding: render.nodePadding ?? null,
      nodeWidth: render.nodeWidth ?? null,
    },
    fixedLayout: {
      scale: dataset.layout?.scale ?? null,
      nodes: dataset.layout?.nodes || null,
    },
    nodes: (dataset.nodes || []).map((node) => ({
      id: node.id,
      value: node.value,
      valueText: node.valueText ?? null,
      col: node.col ?? null,
      order: node.order ?? null,
      routeOnly: Boolean(node.routeOnly),
    })),
    nonNodeMetrics: (dataset.nonNodeMetrics || []).map((metric) => ({
      id: metric.id,
      value: metric.value,
      valueText: metric.valueText ?? null,
    })),
    links: (dataset.links || []).map((link) => ({
      source: link.source ?? null,
      target: link.target ?? null,
      sourceRoute: link.sourceRoute ?? null,
      targetRoute: link.targetRoute ?? null,
      value: link.value,
      width: link.width ?? null,
      sourceWidth: link.sourceWidth ?? null,
      targetWidth: link.targetWidth ?? null,
    })),
  };
}

function assertComparisonGeometryParity(dataset, localized, engine, language, errors) {
  const source = JSON.stringify(comparisonGeometryProjection(dataset, engine));
  const translated = JSON.stringify(comparisonGeometryProjection(localized, engine));
  assert(
    source === translated,
    `${dataset.key}: ${language} localization changes renderer value geometry; ` +
      'i18n overlays may change display text/label layout only',
    errors
  );
}

function canonicalHexColor(value) {
  if (typeof value !== 'string' || !/^#[0-9a-f]{3}(?:[0-9a-f]{3})?$/i.test(value)) {
    return '';
  }
  const hex = value.slice(1).toLowerCase();
  return hex.length === 3
    ? `#${[...hex].map((character) => character.repeat(2)).join('')}`
    : `#${hex}`;
}

function visibleTextOrigin(x, anchor, fontSize, width) {
  const coordinate = Number(x);
  const size = Number(fontSize);
  if (
    !Number.isFinite(coordinate)
    || !Number.isFinite(size)
    || size <= 0
    || !Number.isFinite(width)
    || width <= 0
  ) {
    return false;
  }
  const gutter = Math.max(1, size * 0.5);
  if (anchor === 'start') return coordinate > -gutter && coordinate < width - gutter;
  if (anchor === 'end') return coordinate > gutter && coordinate < width + gutter;
  return coordinate > gutter / 2 && coordinate < width - gutter / 2;
}

function visibleTextBaseline(y, fontSize, height) {
  const baseline = Number(y);
  const size = Number(fontSize);
  return Number.isFinite(baseline)
    && Number.isFinite(size)
    && size > 0
    && Number.isFinite(height)
    && height > 0
    && baseline >= size * 0.5
    && baseline <= height;
}

const IDENTITY_2D = Object.freeze([1, 0, 0, 1, 0, 0]);

function multiplyAffine2d(left, right) {
  const [a1, b1, c1, d1, e1, f1] = left;
  const [a2, b2, c2, d2, e2, f2] = right;
  return [
    a1 * a2 + c1 * b2,
    b1 * a2 + d1 * b2,
    a1 * c2 + c1 * d2,
    b1 * c2 + d1 * d2,
    a1 * e2 + c1 * f2 + e1,
    b1 * e2 + d1 * f2 + f1,
  ];
}

function annotationTransformMatrix(value) {
  if (!value) return [...IDENTITY_2D];
  let matrix = [...IDENTITY_2D];
  const pattern = /([A-Za-z]+)\s*\(([^)]*)\)/g;
  let cursor = 0;
  let match;
  while ((match = pattern.exec(String(value)))) {
    if (String(value).slice(cursor, match.index).trim()) return null;
    cursor = pattern.lastIndex;
    const numbers = match[2].trim()
      ? match[2].trim().split(/[\s,]+/).map(Number)
      : [];
    if (numbers.some((number) => !Number.isFinite(number))) return null;
    const name = match[1].toLowerCase();
    let next;
    if (name === 'matrix' && numbers.length === 6) {
      next = numbers;
    } else if (name === 'translate' && [1, 2].includes(numbers.length)) {
      next = [1, 0, 0, 1, numbers[0], numbers[1] || 0];
    } else if (name === 'scale' && [1, 2].includes(numbers.length)) {
      next = [numbers[0], 0, 0, numbers[1] ?? numbers[0], 0, 0];
    } else if (name === 'rotate' && [1, 3].includes(numbers.length)) {
      const radians = numbers[0] * Math.PI / 180;
      const rotation = [
        Math.cos(radians),
        Math.sin(radians),
        -Math.sin(radians),
        Math.cos(radians),
        0,
        0,
      ];
      next = numbers.length === 1
        ? rotation
        : multiplyAffine2d(
          multiplyAffine2d(
            [1, 0, 0, 1, numbers[1], numbers[2]],
            rotation
          ),
          [1, 0, 0, 1, -numbers[1], -numbers[2]]
        );
    } else if (name === 'skewx' && numbers.length === 1) {
      next = [1, 0, Math.tan(numbers[0] * Math.PI / 180), 1, 0, 0];
    } else if (name === 'skewy' && numbers.length === 1) {
      next = [1, Math.tan(numbers[0] * Math.PI / 180), 0, 1, 0, 0];
    } else {
      return null;
    }
    matrix = multiplyAffine2d(matrix, next);
  }
  return String(value).slice(cursor).trim() ? null : matrix;
}

function transformAnnotationPoint(matrix, x, y) {
  return {
    x: matrix[0] * x + matrix[2] * y + matrix[4],
    y: matrix[1] * x + matrix[3] * y + matrix[5],
  };
}

function annotationMatrixScale(matrix) {
  return Math.max(
    Math.hypot(matrix[0], matrix[1]),
    Math.hypot(matrix[2], matrix[3])
  );
}

function hasUnsupportedAnnotationCoordinateSpace(tag) {
  const style = String(tag.attributes.style || '').trim();
  const classNames = String(tag.attributes.class || '')
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  return UNSUPPORTED_ANNOTATION_GEOMETRY_TAGS.has(tag.tagName)
    || [...UNSUPPORTED_ANNOTATION_GEOMETRY_ATTRIBUTES].some(
      (name) => Object.prototype.hasOwnProperty.call(tag.attributes, name)
    )
    || Boolean(style)
    || classNames.some(
      (className) => !SAFE_ANNOTATION_GEOMETRY_CLASSES.has(className)
    );
}

// Independent post-localization layout audit. The runtime validates overlay
// capabilities before merge; this check instead examines the completed
// projection so a future merge/projector regression cannot silently hide
// translated copy with background text or an off-canvas anchor origin.
function assertLocalizedLayoutVisibility(dataset, localized, engine, language, errors) {
  const { width, height } = engine.helpers.canvasSize(dataset);
  const type = {
    ...engine.DEFAULTS.type,
    ...(dataset.render?.type || {}),
  };
  const background = canonicalHexColor(
    dataset.render?.background || engine.DEFAULTS.background
  );
  const itemById = new Map([
    ...(localized.nodes || []),
    ...(localized.nonNodeMetrics || []),
  ].map((item) => [String(item?.id), item]));

  Object.entries(localized.layout?.labels || {}).forEach(([nodeId, label]) => {
    (label?.blocks || []).forEach((block, blockIndex) => {
      const path = `layout.labels.${nodeId}.blocks[${blockIndex}]`;
      const lineSizes = [];
      if (Array.isArray(block?.lines)) {
        block.lines.forEach((line, lineIndex) => {
          const color = canonicalHexColor(
            typeof line === 'object' ? line?.color : ''
          );
          assert(
            !color || color !== background,
            `${dataset.key}: ${language} ${path}.lines[${lineIndex}].color matches canvas background`,
            errors
          );
          lineSizes.push(
            typeof line === 'object' && line?.size != null
              ? Number(line.size)
              : Number(type.note)
          );
        });
      } else {
        const item = itemById.get(String(nodeId));
        const parts = block?.parts || ['name', 'value', 'notes'];
        if (parts.includes('name')) {
          textItems(item?.label).forEach(
            () => lineSizes.push(Number(block?.nameSize || type.name))
          );
        }
        if (parts.includes('value') && (item?.value != null || item?.valueText != null)) {
          lineSizes.push(Number(block?.valueSize || type.value));
        }
        if (parts.includes('notes')) {
          (item?.notes || []).forEach(
            () => lineSizes.push(Number(block?.noteSize || type.note))
          );
        }
      }
      if (!lineSizes.length) return;
      const lineGap = Number(block?.lineGap ?? type.lineGap);
      const sizesValid = lineSizes.every((size) => Number.isFinite(size) && size > 0);
      const originVisible = sizesValid && visibleTextOrigin(
        block?.x,
        block?.anchor || 'middle',
        Math.min(...lineSizes),
        Number(width)
      );
      assert(
        originVisible,
        `${dataset.key}: ${language} ${path} has no visible horizontal origin`,
        errors
      );
      const blockHeight = lineSizes.reduce((sum, size) => sum + size, 0)
        + lineGap * Math.max(0, lineSizes.length - 1);
      assert(
        Number.isFinite(lineGap)
          && lineGap >= 0
          && Number.isFinite(Number(block?.top))
          && Number(block.top) >= 0
          && Number(block.top) + blockHeight <= Number(height),
        `${dataset.key}: ${language} ${path} leaves the vertical canvas`,
        errors
      );
    });
  });
}

// This is deliberately a second enforcement layer around the runtime's
// canonical token parser. Runtime validation rejects a bad overlay before it
// is merged; this verifier independently compares the completed localized
// projection so loosening merge/validation control flow cannot make a
// semantic amount change pass CI.
function assertVisibleSignature(
  sourceTexts,
  localizedTexts,
  {
    i18n,
    owner,
    language,
    path,
    mode = 'exact',
    allowLiteralToBinding = false,
  },
  errors
) {
  const source = i18n.visibleAmountSignature(sourceTexts);
  const localized = i18n.visibleAmountSignature(localizedTexts);
  const tokenMatches = (sourceToken, localizedToken) => {
    if (sourceToken === localizedToken) return true;
    const sourceParts = sourceToken.split(':');
    const localizedParts = localizedToken.split(':');
    return sourceParts.length === localizedParts.length
      && sourceParts[4] === '*'
      && ['', 'yoy', 'qoq'].includes(localizedParts[4])
      && sourceParts.slice(0, 4).every(
        (part, index) => part === localizedParts[index]
      );
  };
  const available = source.valueTokens.slice();
  const introducesValue = localized.valueTokens.some((token) => {
    const index = available.findIndex(
      (sourceToken) => tokenMatches(sourceToken, token)
    );
    if (index < 0) return true;
    available.splice(index, 1);
    return false;
  });
  let bindingsValid = localized.valueBindings === 0;
  let omissionsValid = true;
  if (mode === 'exact') {
    const bindingDelta = localized.valueBindings - source.valueBindings;
    bindingsValid = allowLiteralToBinding
      ? bindingDelta >= 0 && available.length === bindingDelta
      : bindingDelta === 0;
    omissionsValid = allowLiteralToBinding || available.length === 0;
  }
  assert(
    !introducesValue && bindingsValid && omissionsValid,
    `${owner}: ${language} localization changes visible financial tokens at ${path}`,
    errors
  );
}

function itemVisibleTexts(item) {
  return [...textItems(item?.label), ...textItems(item?.notes)];
}

function labelVisibleTexts(labelSpec) {
  return (labelSpec?.blocks || []).flatMap((block) => (
    (() => {
      const texts = (block?.lines || [])
        .map(layoutLineText)
        .filter((text) => text != null);
      const bindings = texts.filter((text) => text === '$value');
      const copy = texts.filter((text) => text !== '$value').join(' ');
      return [...bindings, ...(copy ? [copy] : [])];
    })()
  ));
}

function assertDatasetVisibleAmountParity(dataset, localized, i18n, language, errors) {
  assertVisibleSignature(
    [dataset.name],
    [localized.name],
    {
      i18n,
      owner: dataset.key,
      language,
      path: 'name',
    },
    errors
  );
  for (const key of ['title', 'subtitle', 'period', 'periodNote']) {
    assertVisibleSignature(
      [dataset.meta?.[key]],
      [localized.meta?.[key]],
      {
        i18n,
        owner: dataset.key,
        language,
        path: `meta.${key}`,
      },
      errors
    );
  }

  for (const collectionKey of ['nodes', 'nonNodeMetrics']) {
    for (const sourceItem of dataset[collectionKey] || []) {
      const localizedItem = (localized[collectionKey] || [])
        .find((item) => String(item?.id) === String(sourceItem?.id));
      assertVisibleSignature(
        [
          ...itemVisibleTexts(sourceItem),
          ...labelVisibleTexts(dataset.layout?.labels?.[sourceItem.id]),
        ],
        itemVisibleTexts(localizedItem),
        {
          i18n,
          owner: dataset.key,
          language,
          path: `${collectionKey}.${sourceItem.id}`,
          mode: 'subset',
        },
        errors
      );
    }
  }

  const labelIds = new Set([
    ...Object.keys(dataset.layout?.labels || {}),
    ...Object.keys(localized.layout?.labels || {}),
  ]);
  for (const nodeId of labelIds) {
    const sourceLabel = dataset.layout?.labels?.[nodeId];
    const sourceNode = (dataset.nodes || []).find((node) => String(node?.id) === String(nodeId));
    const sourceMetric = (dataset.nonNodeMetrics || [])
      .find((metric) => String(metric?.id) === String(nodeId));
    assertVisibleSignature(
      sourceLabel
        ? labelVisibleTexts(sourceLabel)
        : (sourceNode || (sourceMetric && sourceMetric.representation !== 'data-only')
            ? ['$value']
            : []),
      labelVisibleTexts(localized.layout?.labels?.[nodeId]),
      {
        i18n,
        owner: dataset.key,
        language,
        path: `layout.labels.${nodeId}`,
        allowLiteralToBinding: true,
      },
      errors
    );
  }

  assertVisibleSignature(
    annotationVisibleTexts(dataset.annotationsSvg),
    annotationVisibleTexts(localized.annotationsSvg),
    {
      i18n,
      owner: dataset.key,
      language,
      path: 'annotationsSvg',
    },
    errors
  );
}

function financialVisibleTexts(value, key = '') {
  if (Array.isArray(value)) return value.flatMap((item) => financialVisibleTexts(item, key));
  if (value == null) return [];
  if (typeof value !== 'object') return ['label', 'notes'].includes(key) ? [String(value)] : [];
  return Object.entries(value).flatMap(([childKey, child]) => financialVisibleTexts(child, childKey));
}

function assertFinancialVisibleAmountParity(record, localized, i18n, language, errors) {
  for (const key of ['period', 'periodNote']) {
    assertVisibleSignature(
      [record[key]],
      [localized[key]],
      {
        i18n,
        owner: record.key,
        language,
        path: key,
      },
      errors
    );
  }
  assertVisibleSignature(
    financialVisibleTexts(record),
    financialVisibleTexts(localized),
    {
      i18n,
      owner: record.key,
      language,
      path: 'financial-display',
      mode: 'subset',
    },
    errors
  );
}

const FINANCIAL_DISPLAY_KEYS = new Set([
  'i18n', 'label', 'notes', 'period', 'periodNote',
]);

function financialSemanticProjection(value) {
  if (Array.isArray(value)) return value.map(financialSemanticProjection);
  if (!value || typeof value !== 'object') return value;
  return Object.fromEntries(
    Object.keys(value)
      .filter((key) => !FINANCIAL_DISPLAY_KEYS.has(key))
      .sort()
      .map((key) => [key, financialSemanticProjection(value[key])])
  );
}

function assertFinancialSemanticParity(record, localized, language, errors) {
  assert(
    JSON.stringify(financialSemanticProjection(record))
      === JSON.stringify(financialSemanticProjection(localized)),
    `${record.key}: ${language} localization changes financial SSOT identity/value topology`,
    errors
  );
}

function textItems(value) {
  if (Array.isArray(value)) return value.flatMap(textItems);
  return value == null ? [] : [String(value)];
}

function addText(list, owner, pathLabel, sourceValue, localizedValue) {
  const sourceItems = textItems(sourceValue);
  const localizedItems = textItems(localizedValue);
  sourceItems.forEach((source, index) => {
    list.push({
      owner,
      path: pathLabel,
      source: clean(source),
      localized: clean(localizedItems[index] ?? localizedItems.join(' ')),
    });
  });
}

function collectItemTexts(list, owner, item, localizedItem, basePath) {
  if (!item) return;
  addText(list, owner, `${basePath}.label`, item.label, localizedItem?.label);
  addText(list, owner, `${basePath}.notes`, item.notes, localizedItem?.notes);
  (item.children || []).forEach((child, index) => {
    collectItemTexts(list, owner, child, localizedItem?.children?.[index], `${basePath}.children[${index}]`);
  });
}

function layoutLineText(line) {
  return typeof line === 'string' ? line : line?.text;
}

function stripTrailingMoney(text) {
  return clean(text).replace(/\s+\([^)]*[$€¥￥]\s*\d[^)]*\)$/u, '');
}

function isTrackedCompositeLayoutPhrase(text) {
  const value = clean(text);
  const phrase = stripTrailingMoney(value);
  if (/^(Cost of revenues?|Cost of sales|Sales & marketing|Product development|General & Administrative|General & admin|Research & development|Technology & content|Technology & development|Marketing & business dev\.|Amortization & other|Amortization & impairment)$/i.test(phrase)) {
    return true;
  }
  return /^\(?\d+(?:\.\d+)?%\)?\s+of revenue\s+\([^)]+\)$/i.test(value);
}

function collectCompositeLayoutPhrases(dataset, localized) {
  const list = [];
  Object.entries(dataset.layout?.labels || {}).forEach(([nodeId, labelSpec]) => {
    const localizedSpec = localized.layout?.labels?.[nodeId];
    (labelSpec.blocks || []).forEach((block, blockIndex) => {
      const lines = block.lines || [];
      for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
        const maxLines = Math.min(4, lines.length - lineIndex);
        for (let count = maxLines; count > 1; count -= 1) {
          const sourceText = lines
            .slice(lineIndex, lineIndex + count)
            .map(layoutLineText)
            .map(clean)
            .filter(Boolean)
            .join(' ');
          if (!isTrackedCompositeLayoutPhrase(sourceText)) continue;
          const localizedText = Array.from({ length: count }, (_item, offset) => {
            const localizedLine = localizedSpec?.blocks?.[blockIndex]?.lines?.[lineIndex + offset];
            return clean(layoutLineText(localizedLine));
          }).filter(Boolean).join(' ');
          list.push({
            owner: dataset.key,
            path: `layout.labels.${nodeId}.blocks[${blockIndex}].lines[${lineIndex}-${lineIndex + count - 1}]`,
            source: sourceText,
            localized: localizedText,
          });
          lineIndex += count - 1;
          break;
        }
      }
    });
  });
  return list;
}

function decodeSvgText(text) {
  return String(text || '').replace(/&(#x?[0-9a-f]+|amp|lt|gt|quot|apos);/gi, (entity, body) => {
    const key = body.toLowerCase();
    if (key === 'amp') return '&';
    if (key === 'lt') return '<';
    if (key === 'gt') return '>';
    if (key === 'quot') return '"';
    if (key === 'apos') return "'";
    const codePoint = key.startsWith('#x') ? parseInt(key.slice(2), 16) : parseInt(key.slice(1), 10);
    return Number.isFinite(codePoint) ? String.fromCodePoint(codePoint) : entity;
  });
}

function collectSvgTextSegments(svgText, basePath) {
  const list = [];
  if (typeof svgText !== 'string' || !svgText) return list;
  let textIndex = 0;
  svgText.replace(/<text\b[^>]*>([\s\S]*?)<\/text>/gi, (_match, body) => {
    let segmentIndex = 0;
    body.split(/<[^>]+>/g).forEach((part) => {
      const text = clean(decodeSvgText(part));
      if (text) {
        list.push({
          path: `${basePath}.text[${textIndex}].segment[${segmentIndex}]`,
          text,
        });
      }
      segmentIndex += 1;
    });
    textIndex += 1;
    return _match;
  });
  return list;
}

function annotationVisibleTexts(svgText) {
  const list = [];
  if (typeof svgText !== 'string' || !svgText) return list;
  svgText.replace(/<text\b[^>]*>([\s\S]*?)<\/text>/gi, (_match, body) => {
    const text = body.split(/<[^>]+>/g)
      .map((part) => clean(decodeSvgText(part)))
      .filter(Boolean)
      .join(' ');
    if (text) list.push(text);
    return _match;
  });
  return list;
}

function annotationSvgSafetyIssue(svgText) {
  if (svgText == null || svgText === '') return '';
  if (typeof svgText !== 'string') return 'is not a string';
  let markup = svgText;
  for (let pass = 0; pass < 3; pass += 1) {
    const decoded = decodeSvgText(markup);
    if (decoded === markup) break;
    markup = decoded;
  }
  const checkedMarkup = markup.replace(/<!--[\s\S]*?-->/g, '');
  if (/<!--|-->/.test(checkedMarkup) || /<\s*[!?]/.test(checkedMarkup)) {
    return 'contains unsupported declaration markup';
  }
  const tagPattern = /<\s*(\/?)\s*([A-Za-z][\w:.-]*)\b[^>]*>/g;
  let match;
  while ((match = tagPattern.exec(checkedMarkup))) {
    if (!SAFE_ANNOTATION_SVG_TAGS.has(match[2].toLowerCase())) {
      return `contains disallowed <${match[2]}>`;
    }
    if (
      /(?:\s|\/)on[a-z][\w:.-]*\s*=/i.test(match[0])
      || /\b(?:href|xlink:href|src)\s*=/i.test(match[0])
      || /\b(?:expression\s*\(|@import\b)/i.test(match[0])
    ) return 'contains unsafe attributes';
  }
  if (checkedMarkup.replace(tagPattern, '').includes('<')) return 'contains malformed markup';
  const compactMarkup = checkedMarkup.replace(/[\u0000-\u0020\u007f]+/g, '');
  if (/(?:javascript|vbscript|data:text\/html):/i.test(compactMarkup)) {
    return 'contains an unsafe URL';
  }
  for (const urlMatch of checkedMarkup.matchAll(/\burl\s*\(\s*([^)]*?)\s*\)/gi)) {
    const target = urlMatch[1].trim().replace(/^(['"])(.*)\1$/, '$2');
    if (!/^#[A-Za-z_][\w:.-]*$/.test(target)) {
      return 'contains a non-local SVG definition URL';
    }
  }
  return '';
}

function annotationSvgStructureSignature(svgText) {
  let markup = svgText;
  for (let pass = 0; pass < 3; pass += 1) {
    const decoded = decodeSvgText(markup);
    if (decoded === markup) break;
    markup = decoded;
  }
  markup = markup.replace(/<!--[\s\S]*?-->/g, '');
  const tokens = [];
  const tags = [];
  const outsideText = [];
  const stack = [];
  const tagPattern = /<\s*(\/?)\s*([A-Za-z][\w:.-]*)\b[^>]*>/g;
  let cursor = 0;
  let match;
  while ((match = tagPattern.exec(markup))) {
    const text = markup.slice(cursor, match.index);
    const parentTag = stack[stack.length - 1]?.tagName || '';
    if (text.trim() && !['text', 'tspan'].includes(parentTag)) {
      const normalizedText = text.replace(/\s+/g, ' ').trim();
      tokens.push(`#text:${normalizedText}`);
      outsideText.push(normalizedText);
    }
    cursor = tagPattern.lastIndex;
    const tagName = match[2].toLowerCase();
    if (match[1]) {
      if (stack.pop()?.tagName !== tagName) {
        return { error: 'has unbalanced tags', tokens: [] };
      }
      tokens.push(`/${tagName}`);
      tags.push({
        closing: true,
        selfClosing: false,
        tagName,
        attributes: {},
        ancestorTagIndexes: stack.map((entry) => entry.tagIndex),
      });
      continue;
    }
    const selfClosing = /\/\s*>$/.test(match[0]);
    const attributeText = match[0]
      .replace(/^<\s*[A-Za-z][\w:.-]*/i, '')
      .replace(/\/?\s*>$/, '');
    const attributes = [];
    const attributeMap = {};
    const names = new Set();
    const attributePattern = /([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
    let attributeCursor = 0;
    let attributeMatch;
    while ((attributeMatch = attributePattern.exec(attributeText))) {
      if (attributeText.slice(attributeCursor, attributeMatch.index).trim()) {
        return { error: 'has malformed attributes', tokens: [] };
      }
      attributeCursor = attributePattern.lastIndex;
      const name = attributeMatch[1].toLowerCase();
      if (names.has(name)) return { error: `duplicates attribute "${name}"`, tokens: [] };
      names.add(name);
      let attributeValue = attributeMatch[2] ?? attributeMatch[3] ?? attributeMatch[4] ?? '';
      for (let pass = 0; pass < 3; pass += 1) {
        const decoded = decodeSvgText(attributeValue);
        if (decoded === attributeValue) break;
        attributeValue = decoded;
      }
      attributes.push(`${name}=${JSON.stringify(attributeValue)}`);
      attributeMap[name] = attributeValue;
    }
    if (attributeText.slice(attributeCursor).trim()) {
      return { error: 'has malformed attributes', tokens: [] };
    }
    attributes.sort();
    tokens.push(`<${tagName}${selfClosing ? '/' : ''}|${attributes.join('|')}`);
    tags.push({
      closing: false,
      selfClosing,
      tagName,
      attributes: attributeMap,
      ancestorTagIndexes: stack.map((entry) => entry.tagIndex),
    });
    if (!selfClosing) stack.push({ tagName, tagIndex: tags.length - 1 });
  }
  const tail = markup.slice(cursor);
  const parentTag = stack[stack.length - 1]?.tagName || '';
  if (tail.trim() && !['text', 'tspan'].includes(parentTag)) {
    const normalizedText = tail.replace(/\s+/g, ' ').trim();
    tokens.push(`#text:${normalizedText}`);
    outsideText.push(normalizedText);
  }
  if (stack.length) return { error: 'has unclosed tags', tokens: [] };
  return { error: '', tokens, tags, outsideText };
}

function validAnnotationTextLayoutAttribute(name, value, sourceValue, { width, height }) {
  const numeric = () => (
    /^[+-]?(?:\d+(?:\.\d+)?|\.\d+)$/.test(value) ? Number(value) : NaN
  );
  const sourceNumber = Number(sourceValue);
  let number;
  if (name === 'x') {
    number = numeric();
    return Number.isFinite(number)
      && Number.isFinite(sourceNumber)
      && number >= -32
      && number <= width
      && Math.abs(number - sourceNumber) <= 180;
  }
  if (name === 'y') {
    number = numeric();
    return Number.isFinite(number)
      && Number.isFinite(sourceNumber)
      && number >= 0
      && number <= height
      && Math.abs(number - sourceNumber) <= 24;
  }
  if (name === 'dx') {
    number = numeric();
    return Number.isFinite(number)
      && Number.isFinite(sourceNumber)
      && Math.abs(number) <= 64
      && Math.abs(number - sourceNumber) <= 16;
  }
  if (name === 'font-size') {
    number = numeric();
    return Number.isFinite(number)
      && Number.isFinite(sourceNumber)
      && number >= 8
      && number <= 256
      && number / sourceNumber >= 0.6
      && number / sourceNumber <= 1.25;
  }
  if (name === 'textlength') {
    number = numeric();
    return Number.isFinite(number)
      && Number.isFinite(sourceNumber)
      && number >= 16
      && number <= width
      && number / sourceNumber >= 0.6
      && number / sourceNumber <= 1.25;
  }
  if (name === 'font-family') {
    return value.length > 0
      && value.length <= 200
      && /^[\p{L}\p{N}\s,'"._-]+$/u.test(value);
  }
  if (name === 'font-weight') return /^(?:normal|bold|bolder|lighter|[1-9]00)$/i.test(value);
  if (name === 'lengthadjust') return /^(?:spacing|spacingAndGlyphs)$/.test(value);
  if (name === 'text-anchor') return /^(?:start|middle|end)$/.test(value);
  return false;
}

function verifierInheritedTextState(model, tag) {
  const state = { matrix: [...IDENTITY_2D] };
  (tag.ancestorTagIndexes || []).forEach((tagIndex) => {
    const ancestor = model.tags[tagIndex];
    if (!ancestor || ancestor.closing) return;
    if (hasUnsupportedAnnotationCoordinateSpace(ancestor)) {
      state.matrix = null;
      return;
    }
    const transform = annotationTransformMatrix(ancestor.attributes.transform);
    if (!transform) {
      state.matrix = null;
      return;
    }
    if (state.matrix) state.matrix = multiplyAffine2d(state.matrix, transform);
    for (const name of ['font-size', 'text-anchor']) {
      if (ancestor.attributes[name] != null) state[name] = ancestor.attributes[name];
    }
    if (ancestor.tagName === 'text') {
      for (const name of ['x', 'y', 'dx']) {
        if (ancestor.attributes[name] != null) {
          state[`text-${name}`] = ancestor.attributes[name];
        }
      }
    }
  });
  return state;
}

function validTspanDxContraction(value, sourceValue) {
  const localized = Number(value);
  const source = Number(sourceValue);
  return Number.isFinite(localized)
    && Number.isFinite(source)
    && Math.abs(localized) <= 64
    && Math.abs(localized - source) <= 16
    && (
      source === 0
        ? localized === 0
        : Math.sign(localized) === Math.sign(source)
          && Math.abs(localized) <= Math.abs(source)
    );
}

function finalAnnotationTextBoundsIssue(tag, model, bounds, tspanDxChanged = false) {
  const attributes = tag.attributes;
  const inherited = verifierInheritedTextState(model, tag);
  const ownTransform = annotationTransformMatrix(attributes.transform);
  const matrix = (
    inherited.matrix
    && ownTransform
    && !hasUnsupportedAnnotationCoordinateSpace(tag)
  )
    ? multiplyAffine2d(inherited.matrix, ownTransform)
    : null;
  if (!matrix) return 'uses an unsupported effective transform';
  const fontSize = Number(attributes['font-size'] || inherited['font-size'] || 16);
  const anchor = attributes['text-anchor'] || inherited['text-anchor'] || 'start';
  let x;
  let y;
  if (tag.tagName === 'tspan' && tspanDxChanged) {
    x = Number(attributes.x ?? inherited['text-x'])
      + Number(inherited['text-dx'] || 0)
      + Number(attributes.dx || 0);
    y = Number(attributes.y ?? inherited['text-y']);
  } else {
    x = Number(attributes.x) + Number(attributes.dx || 0);
    y = Number(attributes.y);
  }
  const point = transformAnnotationPoint(matrix, x, y);
  const effectiveFontSize = fontSize * annotationMatrixScale(matrix);
  return visibleTextOrigin(point.x, anchor, effectiveFontSize, bounds.width)
    && visibleTextBaseline(point.y, effectiveFontSize, bounds.height)
    ? ''
    : 'moves effective text bounds outside the canvas';
}

function annotationSvgProjectionIssue(sourceSvg, localizedSvg, canvas) {
  const source = annotationSvgStructureSignature(sourceSvg || '');
  const localized = annotationSvgStructureSignature(localizedSvg || '');
  if (source.error) return `source ${source.error}`;
  if (localized.error) return `localized ${localized.error}`;
  if (source.tags.length !== localized.tags.length) return 'changes element count';
  if (JSON.stringify(source.outsideText) !== JSON.stringify(localized.outsideText)) {
    return 'changes non-text content';
  }
  const bounds = {
    width: Number.isFinite(Number(canvas?.width)) && Number(canvas.width) > 0
      ? Number(canvas.width)
      : 4096,
    height: Number.isFinite(Number(canvas?.height)) && Number(canvas.height) > 0
      ? Number(canvas.height)
      : 4096,
  };
  for (let index = 0; index < source.tags.length; index += 1) {
    const sourceTag = source.tags[index];
    const localizedTag = localized.tags[index];
    if (
      sourceTag.tagName !== localizedTag.tagName
      || sourceTag.closing !== localizedTag.closing
      || sourceTag.selfClosing !== localizedTag.selfClosing
    ) return `changes element structure at tag ${index}`;
    if (sourceTag.closing) continue;
    const sourceAttributes = sourceTag.attributes;
    const localizedAttributes = localizedTag.attributes;
    const names = new Set([
      ...Object.keys(sourceAttributes),
      ...Object.keys(localizedAttributes),
    ]);
    for (const name of names) {
      const sourceHas = Object.prototype.hasOwnProperty.call(sourceAttributes, name);
      const localizedHas = Object.prototype.hasOwnProperty.call(localizedAttributes, name);
      const sourceValue = sourceAttributes[name];
      const localizedValue = localizedAttributes[name];
      if (!['text', 'tspan'].includes(sourceTag.tagName)) {
        if (!sourceHas || !localizedHas || sourceValue !== localizedValue) {
          return `changes non-text attribute ${name} at tag ${index}`;
        }
        continue;
      }
      if (!ANNOTATION_TEXT_LAYOUT_ATTRIBUTES.has(name)) {
        if (!sourceHas || !localizedHas || sourceValue !== localizedValue) {
          return `changes source-owned text attribute ${name} at tag ${index}`;
        }
        continue;
      }
      if (sourceHas && !localizedHas) {
        if (!ANNOTATION_TEXT_LAYOUT_REMOVALS.has(name)) {
          return `removes disallowed text attribute ${name} at tag ${index}`;
        }
        continue;
      }
      if (!sourceHas && localizedHas) {
        if (
          !ANNOTATION_TEXT_LAYOUT_ADDITIONS.has(name)
          || (sourceTag.tagName === 'tspan' && name === 'text-anchor')
          || !validAnnotationTextLayoutAttribute(name, localizedValue, undefined, bounds)
        ) return `adds invalid text attribute ${name} at tag ${index}`;
        continue;
      }
      if (sourceValue !== localizedValue) {
        if (
          sourceTag.tagName === 'tspan'
          && name === 'dx'
          && validTspanDxContraction(localizedValue, sourceValue)
        ) {
          continue;
        }
        if (
          !ANNOTATION_TEXT_LAYOUT_CHANGES.has(name)
          || (
            sourceTag.tagName === 'tspan'
            && ['x', 'y', 'font-size'].includes(name)
          )
          || !validAnnotationTextLayoutAttribute(name, localizedValue, sourceValue, bounds)
        ) return `changes invalid text attribute ${name} at tag ${index}`;
      }
    }
    if (sourceTag.tagName === 'text') {
      const sourceX = sourceAttributes.x;
      const localizedX = localizedAttributes.x;
      const sourceY = sourceAttributes.y;
      const localizedY = localizedAttributes.y;
      const sourceSize = sourceAttributes['font-size'];
      const localizedSize = localizedAttributes['font-size'];
      const sourceAnchor = sourceAttributes['text-anchor'];
      const localizedAnchor = localizedAttributes['text-anchor'];
      if (
        (
          localizedX !== sourceX
          || localizedY !== sourceY
          || localizedSize !== sourceSize
          || localizedAnchor !== sourceAnchor
        )
      ) {
        const boundsIssue = finalAnnotationTextBoundsIssue(
          localizedTag,
          localized,
          bounds
        );
        if (boundsIssue) return `${boundsIssue} at tag ${index}`;
      }
    }
    if (
      sourceTag.tagName === 'tspan'
      && localizedAttributes.dx !== sourceAttributes.dx
    ) {
      const boundsIssue = finalAnnotationTextBoundsIssue(
        localizedTag,
        localized,
        bounds,
        true
      );
      if (boundsIssue) {
        return `${boundsIssue} at tag ${index}`;
      }
    }
  }
  return '';
}

function collectDatasetTexts(dataset, localized) {
  const list = [];
  addText(list, dataset.key, 'name', dataset.name, localized.name);
  addText(list, dataset.key, 'meta.title', dataset.meta?.title, localized.meta?.title);
  addText(list, dataset.key, 'meta.subtitle', dataset.meta?.subtitle, localized.meta?.subtitle);
  addText(list, dataset.key, 'meta.period', dataset.meta?.period, localized.meta?.period);
  addText(list, dataset.key, 'meta.periodNote', dataset.meta?.periodNote, localized.meta?.periodNote);
  (dataset.nodes || []).forEach((node, index) => {
    const localizedNode = localized.nodes?.[index];
    addText(list, dataset.key, `nodes.${node.id || index}.label`, node.label, localizedNode?.label);
    addText(list, dataset.key, `nodes.${node.id || index}.notes`, node.notes, localizedNode?.notes);
  });
  Object.entries(dataset.layout?.labels || {}).forEach(([nodeId, labelSpec]) => {
    const localizedSpec = localized.layout?.labels?.[nodeId];
    (labelSpec.blocks || []).forEach((block, blockIndex) => {
      (block.lines || []).forEach((line, lineIndex) => {
        const sourceText = typeof line === 'string' ? line : line?.text;
        const localizedLine = localizedSpec?.blocks?.[blockIndex]?.lines?.[lineIndex];
        const localizedText = typeof localizedLine === 'string' ? localizedLine : localizedLine?.text;
        addText(list, dataset.key, `layout.labels.${nodeId}.blocks[${blockIndex}].lines[${lineIndex}]`, sourceText, localizedText);
      });
    });
  });
  const sourceAnnotations = collectSvgTextSegments(dataset.annotationsSvg, 'annotationsSvg');
  const localizedAnnotations = collectSvgTextSegments(localized.annotationsSvg, 'annotationsSvg');
  sourceAnnotations.forEach((item, index) => {
    addText(list, dataset.key, item.path, item.text, localizedAnnotations[index]?.text);
  });
  return list;
}

function collectFinancialTexts(record, localized) {
  const list = [];
  addText(list, record.key, 'period', record.period, localized.period);
  addText(list, record.key, 'periodNote', record.periodNote, localized.periodNote);
  addText(list, record.key, 'revenue.notes', record.revenue?.notes, localized.revenue?.notes);
  (record.revenue?.items || []).forEach((item, index) => {
    collectItemTexts(list, record.key, item, localized.revenue?.items?.[index], `revenue.items[${index}]`);
  });
  collectItemTexts(list, record.key, record.costs?.costOfRevenue, localized.costs?.costOfRevenue, 'costs.costOfRevenue');
  (record.costs?.costOfRevenue?.items || []).forEach((item, index) => {
    collectItemTexts(list, record.key, item, localized.costs?.costOfRevenue?.items?.[index], `costs.costOfRevenue.items[${index}]`);
  });
  (record.costs?.operatingExpenses?.items || []).forEach((item, index) => {
    collectItemTexts(list, record.key, item, localized.costs?.operatingExpenses?.items?.[index], `costs.operatingExpenses.items[${index}]`);
  });
  collectItemTexts(list, record.key, record.costs?.tax, localized.costs?.tax, 'costs.tax');
  (record.otherIncome?.items || []).forEach((item, index) => {
    collectItemTexts(list, record.key, item, localized.otherIncome?.items?.[index], `otherIncome.items[${index}]`);
  });
  (record.otherExpenses?.items || []).forEach((item, index) => {
    collectItemTexts(list, record.key, item, localized.otherExpenses?.items?.[index], `otherExpenses.items[${index}]`);
  });
  Object.keys(record.profit || {}).forEach((key) => {
    collectItemTexts(list, record.key, record.profit[key], localized.profit?.[key], `profit.${key}`);
  });
  (record.profit?.gross?.items || []).forEach((item, index) => {
    collectItemTexts(list, record.key, item, localized.profit?.gross?.items?.[index], `profit.gross.items[${index}]`);
  });
  (record.profit?.operating?.items || []).forEach((item, index) => {
    collectItemTexts(list, record.key, item, localized.profit?.operating?.items?.[index], `profit.operating.items[${index}]`);
  });
  return list;
}

function collectRevenueMetricTexts(record, localized) {
  const list = [];
  addText(list, record.key, 'displayName', record.displayName, localized.displayName);
  addText(list, record.key, 'period', record.period, localized.period);
  addText(list, record.key, 'periodNote', record.periodNote, localized.periodNote);
  addText(list, record.key, 'definition', record.definition, localized.definition);
  addText(list, record.key, 'lineage', record.lineage, localized.lineage);
  Object.keys(record.conditions || {}).forEach((key) => {
    addText(list, record.key, `conditions.${key}`, record.conditions[key], localized.conditions?.[key]);
  });
  (record.observations || []).forEach((observation, index) => {
    addText(list, record.key, `observations[${index}].notes`, observation.notes, localized.observations?.[index]?.notes);
  });
  return list;
}

function collectCompanyTexts(company, localized) {
  const list = [];
  for (const field of ['sector', 'industry', 'headquarters', 'fiscalYearEnd', 'description']) {
    addText(list, company.key || company.name, field, company[field], localized[field]);
  }
  return list;
}

function looksTranslatable(text) {
  const value = clean(text);
  if (!value || value === '$value') return false;
  if (!/[A-Za-z]/.test(value)) return false;
  if (/^https?:\/\//i.test(value)) return false;
  if (/^\(?[$€¥￥]?\d[\d.,]*[BMK]?\)?$/i.test(value)) return false;
  if (TRACKED_TRANSLATABLE_ACRONYMS.has(value)) return true;
  if (/^[A-Z0-9&./ +-]{1,12}$/.test(value)) return false;
  if (/^[\d\s$().,%+-]+[BMK]?$/.test(value)) return false;
  return true;
}

function companyIdentityTextSet(companies) {
  const set = new Set();
  const add = (value) => {
    const text = clean(value);
    if (!text) return;
    set.add(text.toLowerCase());
    for (const token of text.split(/\s+/)) {
      const word = token.replace(/^[('"]+|[)'",.]+$/g, '');
      if (word.length >= 3) set.add(word.toLowerCase());
    }
  };
  for (const company of companies) {
    add(company.name);
    add(company.legalName);
    for (const alias of company.aliases || []) add(alias);
  }
  return set;
}

function datasetPreservedAnnotationText(dataset, companyIdentityText) {
  const declared = dataset.i18n?.preservedAnnotationText;
  if (!Array.isArray(declared) || !declared.length) return companyIdentityText;
  return new Set([
    ...companyIdentityText,
    ...declared.map((text) => clean(text).toLowerCase()).filter(Boolean),
  ]);
}

function fallbackItems(items, preservedAnnotationText, isPreservedTerm) {
  return items.filter((item) => {
    if (!looksTranslatable(item.source)) return false;
    // Shared-dictionary identity mappings (EXACT_ZH term -> itself) declare
    // brand terms that intentionally render unchanged, on any path.
    if (isPreservedTerm && isPreservedTerm(item.source)) return false;
    if (item.path.startsWith('annotationsSvg.')) {
      if (PRESERVED_ANNOTATION_TEXT.has(item.source)) return false;
      // Whole-segment matches only: never exempts words inside longer
      // translatable sentences.
      if (preservedAnnotationText?.has(clean(item.source).toLowerCase())) return false;
    }
    return item.source === item.localized;
  });
}

function hasDuplicatedLocalizedTerms(text) {
  const parts = clean(text).split(/\s+/).filter(Boolean);
  return parts.length > 1 && parts.every((part) => part === parts[0]);
}

function compositeLayoutPhraseIssues(items) {
  return items.filter((item) => {
    const localized = clean(item.localized);
    const textOnly = localized.replace(/\([^)]*[$€¥￥][^)]*\)/gu, '');
    return !localized || /[A-Za-z]/.test(textOnly) || hasDuplicatedLocalizedTerms(textOnly);
  });
}

function main() {
  const { strict, keys } = parseArgs(process.argv.slice(2));
  const { context, i18n, datasets, records, revenueRecords, companies } = loadBrowserData();
  const engine = context.SankeyEngine;
  const errors = [];
  const warnings = [];

  assert(i18n, 'window.SANKEY_I18N is not defined', errors);
  if (!i18n) throw new Error(errors.join('\n'));
  assert(
    typeof i18n.visibleAmountSignature === 'function',
    'src/i18n.js did not expose visibleAmountSignature; strict visible-value checks cannot run',
    errors
  );

  const languages = i18n.languageCodes || [];
  const defaultLanguage = i18n.defaultLanguage || 'en';
  assert(languages.includes(defaultLanguage), `default language "${defaultLanguage}" is not in languageCodes`, errors);

  const defaultUiKeys = Object.keys(i18n.ui?.[defaultLanguage] || {});
  for (const language of languages) {
    for (const key of defaultUiKeys) {
      assert(i18n.ui?.[language]?.[key] != null, `UI language "${language}" missing key "${key}"`, errors);
    }
  }

  const companyIdentityText = companyIdentityTextSet(companies);
  const selectedDatasets = keys.size ? datasets.filter((dataset) => keys.has(dataset.key)) : datasets;
  const selectedRecords = records.filter((record) => !keys.size || keys.has(record.key));
  const selectedRevenueRecords = revenueRecords.filter((record) => !keys.size || keys.has(record.key));
  const selectedCompanyNames = new Set([
    ...selectedRecords.map((record) => clean(record.company).toLowerCase()),
    ...selectedRevenueRecords.map((record) => clean(record.company).toLowerCase()),
  ]);
  if (keys.size) {
    for (const key of keys) {
      assert(
        datasets.some((dataset) => dataset.key === key) || revenueRecords.some((record) => record.key === key),
        `Unknown dataset or revenue metric key "${key}"`,
        errors
      );
    }
  }

  for (const language of languages.filter((code) => code !== defaultLanguage)) {
    const isPreservedTerm = (text) => Boolean(i18n.isPreservedTerm && i18n.isPreservedTerm(text, language));
    for (const dataset of selectedDatasets) {
      const localized = i18n.localizeDataset(dataset, language);
      assertComparisonGeometryParity(dataset, localized, engine, language, errors);
      assertLocalizedLayoutVisibility(dataset, localized, engine, language, errors);
      assertDatasetVisibleAmountParity(dataset, localized, i18n, language, errors);
      for (const [path, markup] of [
        ['annotationsSvg', dataset.annotationsSvg],
        [`i18n.${language}.annotationsSvg`, localized.annotationsSvg],
      ]) {
        const safetyIssue = annotationSvgSafetyIssue(markup);
        assert(
          !safetyIssue,
          `${dataset.key}: ${path} ${safetyIssue}`,
          errors
        );
      }
      const annotationProjectionIssue = annotationSvgProjectionIssue(
        dataset.annotationsSvg,
        localized.annotationsSvg,
        engine.helpers.canvasSize(dataset)
      );
      assert(
        !annotationProjectionIssue,
        `${dataset.key}: ${language} annotationsSvg ${annotationProjectionIssue}`,
        errors
      );
      assert(clean(localized.name), `${dataset.key}: localized dataset name is empty for ${language}`, errors);
      if (clean(dataset.meta?.title)) {
        assert(clean(localized.meta?.title), `${dataset.key}: localized meta.title is empty for ${language}`, errors);
      }
      for (const node of localized.nodes || []) {
        const sourceNode = (dataset.nodes || []).find((item) => item.id === node.id);
        if (clean(textItems(sourceNode?.label).join(' '))) {
          assert(clean(textItems(node.label).join(' ')), `${dataset.key}: node "${node.id}" localized label is empty for ${language}`, errors);
        }
      }
      const fallbacks = fallbackItems(
        collectDatasetTexts(dataset, localized),
        datasetPreservedAnnotationText(dataset, companyIdentityText),
        isPreservedTerm
      );
      if (fallbacks.length) {
        const sample = fallbacks.slice(0, 5).map((item) => `${item.path}="${item.source}"`).join('; ');
        const message = `${dataset.key}: ${fallbacks.length} dataset text fallback(s) for ${language}; ${sample}`;
        if (strict) errors.push(message);
        else warnings.push(message);
      }
      const compositeIssues = compositeLayoutPhraseIssues(collectCompositeLayoutPhrases(dataset, localized));
      if (compositeIssues.length) {
        const sample = compositeIssues.slice(0, 5).map((item) => `${item.path} "${item.source}" -> "${item.localized}"`).join('; ');
        const message = `${dataset.key}: ${compositeIssues.length} composite layout phrase issue(s) for ${language}; ${sample}`;
        if (strict) errors.push(message);
        else warnings.push(message);
      }
      if (strict) {
        assert(dataset.i18n?.[language], `${dataset.key}: missing explicit dataset.i18n.${language} overlay`, errors);
      }
    }

    for (const record of selectedRecords) {
      const localized = i18n.localizeFinancialRecord(record, language);
      assertFinancialSemanticParity(record, localized, language, errors);
      assertFinancialVisibleAmountParity(record, localized, i18n, language, errors);
      const fallbacks = fallbackItems(collectFinancialTexts(record, localized), null, isPreservedTerm);
      if (fallbacks.length) {
        const sample = fallbacks.slice(0, 5).map((item) => `${item.path}="${item.source}"`).join('; ');
        const message = `${record.key}: ${fallbacks.length} financial SSOT fallback(s) for ${language}; ${sample}`;
        if (strict) errors.push(message);
        else warnings.push(message);
      }
      if (strict) {
        assert(record.i18n?.[language], `${record.key}: missing explicit financial record i18n.${language} overlay`, errors);
      }
    }

    for (const record of selectedRevenueRecords) {
      const localized = i18n.localizeRevenueMetricRecord(record, language);
      const fallbacks = fallbackItems(collectRevenueMetricTexts(record, localized), null, isPreservedTerm);
      if (fallbacks.length) {
        const sample = fallbacks.slice(0, 5).map((item) => `${item.path}="${item.source}"`).join('; ');
        const message = `${record.key}: ${fallbacks.length} revenue SSOT fallback(s) for ${language}; ${sample}`;
        if (strict) errors.push(message);
        else warnings.push(message);
      }
      if (strict) {
        assert(record.i18n?.[language], `${record.key}: missing explicit revenue record i18n.${language} overlay`, errors);
      }
    }

    {
      for (const company of companies.filter((company) => !keys.size || selectedCompanyNames.has(clean(company.name).toLowerCase()) || (company.aliases || []).some((alias) => selectedCompanyNames.has(clean(alias).toLowerCase())))) {
        const localized = i18n.localizeCompanyMetadata(company, language);
        const fallbacks = fallbackItems(collectCompanyTexts(company, localized), null, isPreservedTerm);
        if (fallbacks.length) {
          const sample = fallbacks.slice(0, 3).map((item) => `${item.path}="${item.source}"`).join('; ');
          const message = `${company.key || company.name}: ${fallbacks.length} company metadata fallback(s) for ${language}; ${sample}`;
          if (strict) errors.push(message);
          else warnings.push(message);
        }
        if (strict) {
          assert(company.i18n?.[language], `${company.key || company.name}: missing explicit company i18n.${language} overlay`, errors);
        }
      }
    }
  }

  if (errors.length) {
    console.error(`i18n verification failed with ${errors.length} error(s):`);
    for (const error of errors) console.error(`- ${error}`);
    process.exit(1);
  }

  for (const warning of warnings.slice(0, 80)) console.warn(`warning: ${warning}`);
  if (warnings.length > 80) console.warn(`warning: ${warnings.length - 80} additional fallback warning(s) omitted`);
  console.log(`i18n verification passed: ${languages.length} language(s), ${selectedDatasets.length} dataset(s), ${selectedRevenueRecords.length} revenue metric(s), strict=${strict}.`);
}

main();
