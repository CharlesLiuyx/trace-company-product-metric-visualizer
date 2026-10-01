// Structured SSOT for every canonical fidelity rule. The Markdown catalog in
// docs/fidelity-loop-rules.md is a generated view over this data
// (pnpm update:fidelity-rules-doc); enforcement/feature registries in
// fidelity-rule-contract.mjs are derived from it. Only rules with a real
// execution point are recorded. Rule IDs are stable forever: never renumber,
// never change a recorded ID's meaning, and never reuse a deleted ID.
const RULE_ENFORCEMENTS = Object.freeze([
  'hard-gate',
  'build-gate',
  'conditional-gate',
  'quantified-audit',
  'manual',
]);
const RULE_TEXT_FIELDS = Object.freeze(['trigger', 'check', 'pass', 'evidence', 'rationale']);
const RULE_ID_RE = /^[GBRLTAZI][1-9][0-9]*[a-z]?$/;

function rule(id, enforcement, fields) {
  return Object.freeze({
    id,
    enforcement,
    features: Object.freeze([]),
    ...fields,
    ...(fields.features ? { features: Object.freeze([...fields.features]) } : {}),
  });
}

export const FIDELITY_RULES = Object.freeze([
  rule('G1', 'hard-gate', {
    title: '渲染器身份',
    trigger: '每个 evidence run。',
    check: '候选必须由 `SankeyEngine.render()` 生成 d3/SVG。',
    evidence: 'audit 记录 renderer 身份。',
  }),
  rule('G2', 'hard-gate', {
    title: '原始 SVG 画布',
    trigger: '每个 evidence run。',
    check: '在 harness 固定截图尺寸前读取原始 SVG；reference 尺寸来自 `meta.referenceImage`。',
    pass:
      '`viewBox` 按数值等于 `[0, 0, intrinsicWidth, intrinsicHeight]`；`width` 是相同数值或 `100%`；' +
      '`height` 可缺省，存在时必须是相同数值，`auto`/百分比等其他 token 失败。随后才可固定截图尺寸。',
    evidence: '原始值全部写入 audit。',
  }),
  rule('G3', 'hard-gate', {
    title: '字体角色',
    trigger: '每个 evidence run。',
    check:
      '本地 Montserrat、Noto Sans、Roboto font manifest 全部加载成功；产品文本使用 View 字体角色' +
      '（Noto Sans，数值说明/Tooltip 可用 Roboto），computed family 的 fallback 位置不得含 Montserrat。' +
      '只有最近祖先带 `data-typography-role="brand"` 的真实 Logo、wordmark、商标锁定或品牌插图不受字体角色限制。',
    pass:
      '以上全部成立且 G3d 通过。Latin 字体不含 CJK glyph 时允许系统 CJK fallback；普通 label 或整层 ' +
      'annotation 不得标 brand。',
    evidence: '`typographyAudit` 汇总字体角色与字形比例结果。',
  }),
  rule('G3d', 'hard-gate', {
    title: '字形比例',
    trigger: '每个 evidence run、`verify:d3` 与 Build seal 中的非品牌产品文本（名称、金额、备注、标题，各 locale）。',
    check:
      '使用已加载字体的自然字宽，测量 textLength/spacingAndGlyphs 与祖先变换组合后的字形比例；' +
      '排除整体等比缩放与旋转。',
    pass:
      '组合变换的最大/最小主轴比不超过 1.25；不得为贴合 bbox 把文字横向压窄，优先使用自然字形、' +
      '合适字号和换行。',
    evidence:
      '`typographyAudit` 逐 text/tspan/textPath 保存 glyphScaleX、glyphAspectRatio，越界阻断 G3。' +
      '未绑定 Build 的目录回归、Pages 与 standalone 检查只以 audit 模式记录字形失败，不替代 Build 的硬门。',
  }),
  rule('G4', 'hard-gate', {
    title: '白名单外无位图',
    trigger: '每个 evidence run。',
    check:
      '`#chart` 内不得出现 `img`、canvas、foreignObject、picture、video、iframe、object 或 embed；' +
      '参与截图的元素不得用 CSS `background-image` 作像素补丁；未启用 runtime raster 时 ' +
      '`#chart > svg image` 数量为 0。',
    pass:
      '启用 runtime raster 时，dataset 显式设置 `render.allowRasterAnnotations = true`（audit 报告 ' +
      '`rasterAllowed: true`），SVG image 与 `data.rasterAnnotations` 一一对应且数量相等，每个 href 都是' +
      '存在的 `data/assets/raster-annotations/` 本地文件；Source、reference crop（`icon-references/.../crops/`）、' +
      '外链和 data URI 一律失败。',
    evidence: 'DOM 与 computed-style purity audit 的计数和 href 清单。',
  }),
  rule('G8', 'hard-gate', {
    title: 'label 与自身 node 的间距',
    trigger: '每个 evidence run，按渲染 bbox。',
    check:
      '同轴 label 与自身 node 的纵向净空；短 node（宽或高 `<=12px`）上/下同轴 label 的水平中心差；' +
      '侧置 label 与自身 node 的横向 overlap。',
    pass: '纵向净空 `<4px` 失败（目标 5px）；短 node 中心差 `<=4px`；侧置 label 不得与自身 node 横向 overlap。',
    evidence: '逐 locale 的 `labelLayoutAudit`。',
  }),
  rule('G11', 'build-gate', {
    title: '数据一致性',
    trigger: '每个 authored digest。',
    check: '独立记录 `dataset-verification/v1` 数据/SSOT/i18n 一致性证据。',
    pass: '不属于每次 raster evidence run；finish 必须引用 fresh 结果。',
  }),
  rule('G12', 'hard-gate', {
    title: '可见接口',
    features: ['visible-interface'],
    trigger: '每个可见候选接口。',
    check:
      '自动检查 candidate-rendered ID、path endpoint、link interval containment 与每个端面的 occupancy ' +
      'union：先判 binary union，再拆 per-link interval；`Σlink.width` 和颜色都不是分类器，双端宽度独立建模。' +
      '连接竖直 node edge 的 link 必须水平进入/离开。',
    pass:
      'SVG 几何容差 0.5px（endpoint 与上下边界均 `<=0.5px`），已确认 raster 边缘容差 1px，归一化后新增/缺失的' +
      '连续 `>=2px` 空档失败；连续端面不得留缝，间隔端面保留真实 gap。diagnostic 可用 warning/off，但 ' +
      'Build-bound evidence 必须 `mode=error`，且总 `status`、candidate、reference、enforcement 均为 `passed`，' +
      'audited 等于 expected，failed/pending/not-scored 接口都为 0；`fullFaceIds` 只在有 provenance 时要求 ' +
      'union 贴满 node top/bottom。',
    evidence:
      '`interfaceAudit` 分别保留 `mode`、`candidateStatus`、`referenceStatus`、`status` 与 `enforcementStatus`；' +
      'coverage 只来自候选已渲染接口，不声称发现了 reference-only 接口。',
  }),
  rule('B6', 'conditional-gate', {
    title: '文本在画布内',
    features: ['text'],
    trigger: 'Plan 含 `text` feature 或 `display-text-only` 影响时。',
    pass:
      '每个 required locale 的 rendered text bbox 全在画布内，overflow 为 0；必要时使用 locale-specific ' +
      'wrap/x/top/font-size，不改共享几何。',
    evidence: '逐 locale 的 `textLayoutAudit`。',
  }),
  rule('B15', 'conditional-gate', {
    title: 'node 柱面可见且不低于 3px',
    features: ['visible-node-face'],
    trigger: '每个 `nodes.*` render mapping 自动触发，不依赖作者声明。',
    check:
      '逐 ID、逐 locale 的 `nodePaintAudit` 基于 node face 元素自身判定有效 fill 或可见 stroke 与渲染 ' +
      '`faceHeight`；共享最小可见高度 `MIN_VISIBLE_FACE_PX` 为 3px，另有 0.5px raster 容差。',
    pass:
      '每个映射自 Source 对象的 node 都绘制出区别于背景的柱面，且高度加容差不低于 3px；透明、none、零 opacity、' +
      '隐藏，或只有 bbox、link、hitbox、接口都失败。真实 Source 柱面本身低于 3px 时，只接受 source-facts ' +
      '中绑定唯一 node、写明理由的显式短柱声明。',
    evidence: '逐 locale 的 `nodePaintAudit` 与 Plan 绑定的 `node-face-policy/v2`。',
  }),
  rule('T22', 'build-gate', {
    title: '带值 Other 是数据柱',
    trigger: 'Source Coverage 对象命中 Other/All Other 语义且显示数值时。',
    check:
      'Source Coverage 组装时强制带值 Other 是数据指标而非标注：sourceLabel 含 K/M/B/T 金额而 sourceClass ' +
      '记为非 value-bearing 类立即失败（`SOURCE_COVERAGE_OTHER_CLASS_INVALID`）；映射为 node 时必须有唯一 ' +
      'observed face。',
    pass: '把带值 Other 记成不可见节点或标注一律失败；真实柱面低于 3px 时按 B15 的短柱声明处理，而不是隐藏。',
  }),
  rule('T6', 'quantified-audit', {
    title: '侧置 label 列对齐',
    features: ['aligned-side-label-column'],
    trigger: 'Plan 含 `aligned-side-label-column`：同一视觉列中两个及以上同类侧置 label。',
    check: '侧置 label 对齐 reference 的实际左/右缘 x，不默认贴 node。',
    pass: '同列同类 label 位于同一 node 列和同一侧，渲染边缘的最大差值 `<=2px`。',
    evidence: '逐 locale 的 `labelLayoutAudit.horizontalSideLabels` 边缘位置与跨组 spread。',
  }),
  rule('T7', 'conditional-gate', {
    title: '侧置 label 垂直居中',
    features: ['centered-side-label'],
    trigger:
      'Plan 含 `centered-side-label`，或渲染结果中同一 node 同时出现独立金额同轴块与侧置名称块时。',
    pass:
      '侧置 label 渲染中心与 node 中心的垂直差 `<=4px`，使用实际 bbox/ascent 反推 top；顶对齐或分组侧标' +
      '不得声明该 feature。',
    evidence: '逐 locale 的 `labelLayoutAudit`。',
  }),
  rule('A6', 'conditional-gate', {
    title: 'annotation 净空',
    features: ['annotation-near-label'],
    trigger: 'Plan 含 `annotation-near-label`。',
    check: 'annotation 文本与带 `data-annotation-clearance` 的 annotation 图形，同 label、title、period 的渲染 bbox 比较。',
    pass: 'overlap 为 0。',
    evidence: '逐 locale 的 `annotationLayoutAudit`。',
  }),
  rule('A10', 'conditional-gate', {
    title: '交互 annotation 绑定 node',
    features: ['semantic-annotation'],
    trigger: 'Plan 要求某个 node 对象以 annotation 呈现时。',
    pass:
      '实际 group 必须带 `sankey-interactive-annotation` 和可解析的 `data-node`，含文本且由 renderer 提供' +
      '透明 hitbox；同名 node-like annotation text 未绑定该 group 或 node 不存在即失败。',
    evidence: '逐 locale 的 `semanticAnnotationAudit`。',
  }),
  rule('I12', 'quantified-audit', {
    title: '图标簇与 paired 目标对齐',
    features: ['paired-node-annotation'],
    trigger: '业务或产品图标簇与 paired node / 侧置名称构成同一横向语义组时。',
    check:
      '图标簇声明 `data-annotation-paired-node`；默认对齐 node face，用户要求与侧置 label 对齐时再声明 ' +
      '`data-annotation-paired-target="label"` 与 side。render audit 在外层 SVG 坐标系比较图标 union bbox ' +
      '与目标的纵向中心。',
    pass: '每个 required locale 的 paired 图标簇均有对应目标，且 centerY 差 `<=4px`。',
    evidence: '`annotationPairingAudit` 的逐簇 bbox、target kind/bbox、center delta 与 violation。',
  }),
  rule('T18', 'conditional-gate', {
    title: 'label 组位置',
    features: ['measured-label-position'],
    trigger: '对声明了原生 reference bbox 的固定布局 label 组运行。',
    check:
      '每次 evidence run 将该组渲染 union bbox 与持久化的原生 `referenceBBox` 比对；只有明确的用户布局纠正' +
      '才可另以 `approvedTargetBBox`、`approvedTargetAuthority: user-directed-layout-correction` 与理由声明' +
      '待验目标，并保留原 `referenceBBox`。',
    pass:
      '源语言 locale 的中心差（X 与 Y 各自）`<=6px`。非源语言 locale 不做中心 gate，但每个已测量组都必须' +
      '渲染出可测 label，缺组即失败。',
    rationale: '6px = 通用 4px 中心约定加 2px 的 ink-bbox 对 em-box 测量余量。',
    evidence: '逐 locale 的 `labelPositionAudit`。',
  }),
  rule('T19', 'build-gate', {
    title: '测量来源绑定',
    features: ['measured-label-position'],
    trigger: 'Plan 编译与 prepare-review 时。',
    check:
      'income-statement Plan 要求每个映射 `layout.labels.*`（icon 位除外）的 render 对象声明 ' +
      '`measured-label-position`（`MEASURED_LABEL_POSITION_REQUIRED`）。prepare-review 校验所有 Source 测量' +
      '的 featureEvidence（`measured-label-position`、`semantic-annotation`、`ambiguous-label-slot`）：带 ' +
      'fragment 的 locator 指向本 Build Source（processing 或 processed 路径），evidence digest、reference-image ' +
      'artifact digest 与 Build Source digest 一致，`referenceBBox` 不越 Source 边界。',
    pass: '相邻期间或其他数据集的坐标携带外来 digest，直接拒绝。',
  }),
  rule('T23', 'build-gate', {
    title: 'non-node 金额的 zero-paint 槽位',
    features: ['zero-paint-node-slot'],
    trigger: 'Income Statement `financial-value` 映射到 `nonNodeMetrics.*` 时。',
    check:
      '必须声明 Source-bound `zero-paint-node-slot`；prepare-review 对同列 peer x/width 的原生 `referenceBBox` ' +
      '做像素扫描，任一行出现横跨至少 75% 槽宽的有色连续段即判定存在 node face。',
    pass: '只有扫描确认为 zero-paint 的对象可保留 non-node 表达；1px/2px 连续横条同样失败，须改建模为 node。',
  }),
  rule('T14', 'manual', {
    title: '可见短柱端点',
    features: ['visible-short-node'],
    trigger: '声明 `visible-short-node`：reference 中短而仍可见的 node 柱面。',
    check: '逐对象核对 reference/candidate 直线段端点、宽高与 deltas，区分曲线与文字像素。',
    pass: '审阅确认覆盖同一可见直线段；任何接受的非零差异写明理由。',
  }),
  rule('T20', 'manual', {
    title: 'label 槽位歧义裁决',
    features: ['ambiguous-label-slot'],
    trigger: '声明 `ambiguous-label-slot`：label 槽位或归属在参考图上有多种读法时。',
    check: '渲染前提交绑定 reference crop 的操作者槽位裁决。',
  }),
  rule('B14', 'manual', {
    title: '指定字重的量化',
    features: ['specified-label-weight'],
    trigger: '声明 `specified-label-weight` 时。',
    check: '逐 heading 量化 computed `font-weight`，并提交绑定来源证据的人工决定。',
    pass: '不能拿 title、金额或 wordmark 字重替代。',
  }),
  rule('T16', 'manual', {
    title: '指定字重的来源',
    features: ['specified-label-weight'],
    trigger: '声明 `specified-label-weight` 时。',
    check: '对每个语义 heading 比较 computed weight 与来源规格。',
    pass: 'title、金额、备注和 wordmark 分开；缺来源时不得声明该 feature，也不得臆造统一字重。',
  }),
  rule('T17', 'manual', {
    title: 'annotation 分类',
    features: ['semantic-annotation'],
    check:
      '名称/金额/备注与 node 或其 micro-flow 属于同一语义对象时默认使用 `layout.labels`；只有真实 ' +
      'callout/guide 必须作为 annotation 时才声明 `semantic-annotation`。',
    pass: '逐 locale Hover 该文字本身，确认高亮和 Tooltip。',
  }),
  rule('B16', 'conditional-gate', {
    title: 'annotation 来源证据',
    features: ['semantic-annotation'],
    trigger: 'node object 映射 `annotations.*` 时。',
    check: '必须声明 `semantic-annotation` 并携带原生 Source 分类证据。',
    pass: '缺 feature、crop、bbox、Source digest、inspection method、classification claim 或理由均失败。',
  }),
]);

function catalogError(code, message) {
  const error = new Error(message);
  error.code = code;
  throw error;
}

function validateCatalog(rules) {
  const ids = new Set();
  for (const entry of rules) {
    if (!RULE_ID_RE.test(entry.id)) catalogError('RULE_ID_INVALID', `Invalid fidelity rule ID: ${entry.id}`);
    if (ids.has(entry.id)) catalogError('RULE_ID_DUPLICATE', `Duplicate fidelity rule ID: ${entry.id}`);
    ids.add(entry.id);
    if (!RULE_ENFORCEMENTS.includes(entry.enforcement)) {
      catalogError('RULE_ENFORCEMENT_INVALID', `${entry.id} has unsupported enforcement: ${entry.enforcement}`);
    }
    if (typeof entry.title !== 'string' || !entry.title.trim()) {
      catalogError('RULE_TITLE_REQUIRED', `${entry.id} needs a title`);
    }
    const hasBody = RULE_TEXT_FIELDS.some((field) => typeof entry[field] === 'string' && entry[field].trim());
    if (!hasBody) catalogError('RULE_BODY_REQUIRED', `${entry.id} needs at least one descriptive field`);
  }
  return rules;
}

validateCatalog(FIDELITY_RULES);

export function catalogEnforcements(rules = FIDELITY_RULES) {
  return Object.freeze(Object.fromEntries(rules.map((entry) => [entry.id, entry.enforcement])));
}

export function catalogFeatureMappings(rules = FIDELITY_RULES) {
  const byFeature = new Map();
  for (const entry of rules) {
    for (const feature of entry.features) {
      const bucket = byFeature.get(feature) || [];
      bucket.push(entry.id);
      byFeature.set(feature, bucket);
    }
  }
  return Object.freeze(
    Object.fromEntries(
      [...byFeature.entries()]
        .sort(([left], [right]) => left.localeCompare(right))
        .map(([feature, ruleIds]) => [feature, Object.freeze(ruleIds.sort((a, b) => a.localeCompare(b)))])
    )
  );
}
