// Structured SSOT for every canonical fidelity rule. The Markdown catalog in
// docs/fidelity-loop-rules.md is a generated view over this data
// (pnpm update:fidelity-rules-doc); enforcement/feature registries in
// fidelity-rule-contract.mjs are derived from it. Rule IDs are stable
// forever: never renumber, never change a recorded ID's meaning. Series
// letters are a naming namespace only — navigation uses stage/topics.
const RULE_STAGES = Object.freeze(['structure', 'text', 'polish-l10n', 'build', 'subloop']);
const RULE_TOPICS = Object.freeze([
  'node',
  'link',
  'label',
  'annotation',
  'locale',
  'raster',
  'icon',
  'global',
]);
const RULE_STATUSES = Object.freeze(['active', 'superseded']);
const RULE_ENFORCEMENTS = Object.freeze([
  'hard-gate',
  'build-gate',
  'conditional-gate',
  'quantified-audit',
  'manual',
]);
const RULE_TEXT_FIELDS = Object.freeze(['trigger', 'check', 'pass', 'evidence', 'rationale']);
const RULE_ID_RE = /^[GBRLTAZI][1-9][0-9]*[a-z]?$/;

export const FIDELITY_RULE_SERIES = Object.freeze({
  G: Object.freeze({
    title: '自动与 Build 门槛',
    preamble: '每次 evidence run 的自动硬门槛与独立的 Build 门槛。',
  }),
  B: Object.freeze({
    title: '自动检查的盲点补偿',
    preamble:
      '本系列补偿具名自动检查的已知盲点，或以 conditional-gate 把盲点转为机器检查；' +
      '`补偿` 字段指向被补偿的自动规则。',
  }),
  R: Object.freeze({
    title: 'runtime raster',
    preamble: '默认禁止源图像素、crop、位图覆盖和锁定背景进入候选。只有命中完整白名单才可使用。',
  }),
  L: Object.freeze({
    title: '连接线、接口与 Hover',
    preamble: null,
  }),
  T: Object.freeze({
    title: 'label-node 与文本',
    preamble: null,
  }),
  A: Object.freeze({
    title: 'annotation 容器',
    preamble: null,
  }),
  Z: Object.freeze({
    title: '本地化固定布局',
    preamble: null,
  }),
  I: Object.freeze({
    title: '图标 crop/vector 子循环',
    preamble: null,
  }),
});

function rule(id, enforcement, fields) {
  return Object.freeze({
    id,
    enforcement,
    status: 'active',
    topics: Object.freeze([]),
    features: Object.freeze([]),
    compensates: Object.freeze([]),
    ...fields,
    ...(fields.topics ? { topics: Object.freeze([...fields.topics]) } : {}),
    ...(fields.features ? { features: Object.freeze([...fields.features]) } : {}),
    ...(fields.compensates ? { compensates: Object.freeze([...fields.compensates]) } : {}),
  });
}

export const FIDELITY_RULES = Object.freeze([
  rule('G1', 'hard-gate', {
    stage: 'structure',
    topics: ['global'],
    trigger: '每个 evidence run。',
    check: '候选必须由 `SankeyEngine.render()` 生成 d3/SVG。',
    evidence: '通过须记录 renderer 身份。',
  }),
  rule('G2', 'hard-gate', {
    stage: 'structure',
    topics: ['global'],
    trigger: '每个 evidence run。',
    check:
      '在 harness 固定截图尺寸前读取原始 SVG；reference 尺寸来自 `meta.referenceImage`。',
    pass:
      '`viewBox` 必须按数值等于 `[0, 0, intrinsicWidth, intrinsicHeight]`。`width` 必须是相同 ' +
      'numeric 值或 `100%`；`height` 可缺省，存在时必须是相同 numeric 值，`auto`/百分比等其他 ' +
      'token 失败。随后才可固定截图尺寸。',
    evidence: '原始值全部写入 audit。',
  }),
  rule('G3', 'hard-gate', {
    stage: 'text',
    topics: ['global'],
    trigger: '每个 evidence run。',
    check: '字体总门槛要求 G3a、G3b、G3c、G3d 同时通过。',
    evidence: '汇总保留字体角色与字形比例结果。',
  }),
  rule('G3a', 'hard-gate', {
    stage: 'text',
    topics: ['global'],
    check: '本地 Montserrat、Noto Sans、Roboto font manifest 全部加载成功。',
    pass: 'Latin 字体不含 CJK glyph 时允许系统 CJK fallback。',
  }),
  rule('G3b', 'hard-gate', {
    stage: 'text',
    topics: ['global'],
    check: '产品文本使用 View 字体角色：Noto Sans，数值说明/Tooltip 可用 Roboto。',
    pass: 'computed family 的 fallback 位置不得含 Montserrat。',
  }),
  rule('G3c', 'hard-gate', {
    stage: 'text',
    topics: ['global'],
    check:
      '仅最近祖先带 `data-typography-role="brand"` 的真实 Logo、wordmark、商标锁定或品牌插图' +
      '可不受 G3b 限制。',
    pass: '不能给普通 label 或整层 annotation 标 brand。',
  }),
  rule('G3d', 'hard-gate', {
    stage: 'text',
    topics: ['global', 'label', 'annotation'],
    trigger: '每个 evidence run、verify:d3 与 Build seal 的非品牌产品文本，覆盖名称、金额、备注、标题及各 locale。',
    check: '使用已加载字体的自然字宽，测量 textLength/spacingAndGlyphs 与祖先变换的组合字形比例；排除整体等比缩放及旋转。',
    pass: '组合变换的最大/最小主轴比不得超过 1.25；禁止为贴合 bbox 把文字横向压窄成纵向细长字形。优先使用自然字形、合适字号和换行，不能以更大字号再压窄代替。',
    evidence: 'typographyAudit 逐 text/tspan/textPath 保存 glyphScaleX、glyphAspectRatio，越界阻断 G3；普通标签不得借 brand 角色豁免。未绑定 Build 的历史目录回归、Pages 与 standalone 检查以 audit 模式单独保存字形失败状态和逐行 findings，不据此追认历史图，也不替代新增/返工 Build 的硬门。',
    origin: '2026-09-05 Circle Q2 FY26：用户指出右侧费用名称与金额纵向拉伸过多。',
  }),
  rule('G4', 'hard-gate', {
    stage: 'structure',
    topics: ['global'],
    check: '`#chart` 内不得出现 `img`、canvas、foreignObject、picture、video、iframe、object 或 embed。',
    pass: 'DOM audit 数量须为 0。',
  }),
  rule('G5', 'hard-gate', {
    stage: 'structure',
    topics: ['global'],
    check: '参与截图的元素不得用 CSS `background-image` 作为像素补丁。',
    pass: 'computed-style audit 须为 0。',
  }),
  rule('G6', 'hard-gate', {
    stage: 'structure',
    topics: ['global', 'raster'],
    trigger: '未启用 runtime raster 时。',
    pass: '`#chart > svg image` 数量必须为 0。',
  }),
  rule('G7', 'hard-gate', {
    stage: 'structure',
    topics: ['global', 'raster'],
    trigger: '启用 runtime raster 时。',
    check: '每个 SVG image 必须满足 R 系列。',
    pass: '任一白名单条件失败即失败。',
  }),
  rule('G8', 'hard-gate', {
    stage: 'text',
    topics: ['label', 'node'],
    check: '同轴 label 与自身 node 不得纵向交叠。',
    pass: '目标净空 5px，渲染 bbox 净空 `<4px` 必须失败。',
  }),
  rule('G9', 'hard-gate', {
    stage: 'text',
    topics: ['label', 'node'],
    trigger: '`visible-short-node` 与上下同轴 label。',
    pass: '水平中心差必须 `<=4px`。',
    evidence: '逐 object ID、逐 locale 报告。',
  }),
  rule('G10', 'hard-gate', {
    stage: 'text',
    topics: ['label', 'node'],
    pass: '左右相邻 label 与 node 的渲染 bbox 不得横向 overlap。',
  }),
  rule('G11', 'build-gate', {
    stage: 'build',
    topics: ['global'],
    trigger: '每个 authored digest。',
    check: '独立记录 `dataset-verification/v1` 数据/SSOT/i18n 一致性证据。',
    pass: '它不属于每次 raster evidence run，finish 必须引用 fresh 结果。',
  }),
  rule('G12', 'hard-gate', {
    stage: 'structure',
    topics: ['link'],
    features: ['visible-interface'],
    trigger: '每个可见候选接口。',
    check:
      '自动检查 candidate-rendered ID、path endpoint、竖直 node 的水平切线、link interval ' +
      'containment 和 occupancy union。',
    pass:
      'SVG 几何容差 0.5px，已确认 raster 边缘容差 1px，归一化后新增/缺失的连续 `>=2px` 空档失败。' +
      'diagnostic 可用 warning/off，但任何 Build-bound evidence 必须 `mode=error`；' +
      'warning/off/not-scored 均非通过。有效通过同时要求：`mode=error`，总 `status`、candidate、' +
      'reference、enforcement 均为 `passed`；audited 等于 expected，`failedInterfaces`、' +
      '`pendingInterfaces`、`notScoredInterfaces` 都为 0；reference/candidate 原始 raster ' +
      'intervals 未被覆盖，用于评分的 intervals 裁进 node bbox；`fullFaceIds` 使用经过 Matrix ' +
      'provenance 验证的完整端面 policy interval。',
    evidence:
      '接口自动报告保留 `mode`、`candidateStatus`、`referenceStatus`、`status` 和 ' +
      '`enforcementStatus` 五个独立轴。自动报告的 coverage 只来自候选已渲染接口，' +
      '`referenceStatus` 只表示这些候选接口都已与 reference 成功评分，不声称发现了 ' +
      'reference-only 接口——后者只能由完整 Matrix 补齐。自动层通过后仍须由完整 Matrix 补齐 ' +
      'reference-only、candidate-only 和人工身份判断。',
  }),
  rule('B1', 'manual', {
    stage: 'text',
    topics: ['label', 'node'],
    compensates: ['G8', 'G9'],
    rationale: '同轴检测可能漏掉手写偏左/偏右但语义属于柱正上/下的汇总 label。',
    check: '文本 stage 按语义组人工确认中心和净空。',
  }),
  rule('B2', 'manual', {
    stage: 'text',
    topics: ['label', 'node'],
    compensates: ['G10'],
    rationale: '横向不交叠不能证明侧置 label 与参考图距离相同。',
    evidence: '记录对应边缘 x 和局部 crop。',
  }),
  rule('B3', 'conditional-gate', {
    stage: 'text',
    topics: ['label'],
    features: ['centered-side-label'],
    trigger: '`centered-side-label`，或渲染结果中同一 node 同时出现独立金额同轴块与侧置名称块时触发。',
    pass: '侧置 label 垂直中心差 `<=4px`；顶对齐或分组侧标不得误标该 feature。',
  }),
  rule('B4', 'manual', {
    stage: 'text',
    topics: ['label', 'node'],
    compensates: ['G8', 'G9'],
    rationale: 'value/name/note block 放错 x 后可能逃过同轴归组。',
    check: '按 object ID 人工核对 block center 与 node center。',
  }),
  rule('B5', 'conditional-gate', {
    stage: 'text',
    topics: ['annotation', 'label'],
    features: ['annotation-near-label'],
    trigger: '`annotation-near-label` 触发。',
    pass: 'annotation 与 label/title/period 的 bbox overlap 为 0。',
    evidence: '记录实际净空。',
  }),
  rule('B6', 'conditional-gate', {
    stage: 'text',
    topics: ['label', 'locale'],
    features: ['text'],
    trigger: '`text` 触发。',
    pass: '每个 required locale 的 rendered text 全在画布内；overflow count 必须为 0。',
  }),
  rule('B7', 'conditional-gate', {
    stage: 'structure',
    topics: ['node'],
    status: 'superseded',
    supersededBy: 'B15',
    trigger: '历史 invisible-node 模型触发。',
    check: '该模型已由“所有语义 node 必须真实 paint”的 B15 取代。',
  }),
  rule('B8', 'quantified-audit', {
    stage: 'structure',
    topics: ['link'],
    compensates: ['G12'],
    rationale: '自动接口 union 无法可靠识别同色相接、重叠和 per-link 身份。',
    check: '用 Matrix 行和 contact sheet 完成人工 reconcile。',
  }),
  rule('B9', 'manual', {
    stage: 'polish-l10n',
    topics: ['link'],
    rationale: '渐变规则不能判断参考图是否要求纯色 profit ribbon。',
    check: '紧邻 source edge 取色。',
    evidence: '留 crop。',
  }),
  rule('B10', 'quantified-audit', {
    stage: 'structure',
    topics: ['link', 'node'],
    compensates: ['G11'],
    rationale: '数据一致性不能证明参考图拓扑或 Hover surface 语义。',
    check: '结合 authored topology、自动数据证据和人工关系清单判断。',
  }),
  rule('B11', 'manual', {
    stage: 'structure',
    topics: ['link'],
    rationale: 'tapered closed path 的周长中点不是 link 中心线中点。',
    check: '逐 link 检查 Tooltip anchor。',
  }),
  rule('B12', 'quantified-audit', {
    stage: 'structure',
    topics: ['node', 'link'],
    rationale: '`node.height - Σlink.width` 只提示 rounding 风险，不证明连续、间隔、重叠或越界。',
    pass: '结论来自 occupancy。',
  }),
  rule('B13', 'manual', {
    stage: 'text',
    topics: ['label', 'node'],
    compensates: ['G8'],
    rationale: '自身 node 净空检查不会覆盖 label 与同列相邻 node。',
    check: '两侧 bbox 都须人工检查。',
  }),
  rule('B14', 'manual', {
    stage: 'text',
    topics: ['label'],
    features: ['specified-label-weight'],
    trigger: '`specified-label-weight` 触发。',
    check: '逐 heading 的 computed `font-weight` 量化和绑定来源证据的强制人工决定。',
    pass: '不能拿 title、金额或 wordmark 字重替代。',
  }),
  rule('B15', 'conditional-gate', {
    stage: 'structure',
    topics: ['node'],
    features: ['visible-node-face'],
    trigger: '每个 ObjectInventory `nodes.*` render mapping 自动触发，不依赖作者声明 face intent。',
    check: '逐 ID、逐 locale 的 `nodePaintAudit`。',
    pass: 'bbox、link、hitbox 或接口存在都不能替代真实柱面 paint。',
  }),
  rule('B16', 'conditional-gate', {
    stage: 'build',
    topics: ['annotation', 'node'],
    features: ['semantic-annotation'],
    trigger: 'node object 映射 `annotations.*` 时。',
    check: '必须声明 `semantic-annotation` 并携带原生 source 分类证据。',
    pass: '缺 feature、crop、bbox、Source digest、inspection method、classification claim 或理由均失败。',
  }),
  rule('R1', 'manual', {
    stage: 'subloop',
    topics: ['raster', 'icon'],
    pass: '仅公司、业务线、产品线或 segment 的有语义 icon cluster 可申请；水印、署名和装饰不适用。',
  }),
  rule('R2', 'manual', {
    stage: 'subloop',
    topics: ['raster', 'icon'],
    check: 'crop 必须按 spec 提取并经模型/人工验证。',
    pass: 'crop 不准先重裁，不能继续生成 runtime。',
  }),
  rule('R3', 'hard-gate', {
    stage: 'structure',
    topics: ['raster'],
    pass: 'runtime 文件必须由 spec 的 `runtimeOutputDir` 生成/同步，并位于 `data/assets/raster-annotations/<company>/`。',
  }),
  rule('R4', 'hard-gate', {
    stage: 'structure',
    topics: ['raster'],
    pass: 'dataset 只能通过 `data.rasterAnnotations` 引用批准的 runtime 文件。',
  }),
  rule('R5', 'hard-gate', {
    stage: 'structure',
    topics: ['raster'],
    pass: '使用 raster 的 dataset 必须显式设置 `render.allowRasterAnnotations = true`。',
  }),
  rule('R6', 'hard-gate', {
    stage: 'structure',
    topics: ['raster'],
    pass: 'render audit 必须报告 `rasterAllowed: true`。',
  }),
  rule('R7', 'hard-gate', {
    stage: 'structure',
    topics: ['raster'],
    pass: 'SVG image 数量必须等于 `data.rasterAnnotations` 数量。',
  }),
  rule('R8', 'hard-gate', {
    stage: 'structure',
    topics: ['raster'],
    pass: '每个 href 必须是存在的 `data/assets/raster-annotations/` 本地文件；禁止 source、reference crop、外链和 data URI。',
  }),
  rule('R9', 'hard-gate', {
    stage: 'structure',
    topics: ['raster'],
    pass: '`icon-references/.../crops/` 永远只是 reference/conversion asset，dataset 不得以任何 raster surface 直接引用。',
  }),
  rule('L1', 'manual', {
    stage: 'structure',
    topics: ['link'],
    trigger: '多入口节点。',
    check: '按实际进入 node edge 的垂直位置自上而下对照 reference。',
    evidence: '保存顺序和 crop。',
  }),
  rule('L2', 'manual', {
    stage: 'structure',
    topics: ['link'],
    trigger: '多出口节点。',
    check: '按实际离开 node edge 的垂直位置自上而下对照 reference。',
    evidence: '保存顺序和 crop。',
  }),
  rule('L3', 'manual', {
    stage: 'structure',
    topics: ['link'],
    check: '`sourceOrder` 只控制源端堆叠，`targetOrder` 只控制目标端堆叠。',
    pass: '修复后分别核对两端。',
  }),
  rule('L4', 'manual', {
    stage: 'structure',
    topics: ['link', 'node'],
    trigger: '同一 node 混合主经营流与税、利息、投资等辅助流时。',
    check: 'source/target 两端分别核对层级和身份。',
  }),
  rule('L5', 'quantified-audit', {
    stage: 'structure',
    topics: ['link'],
    trigger: '显式 curve、socket、`y0/y1` 或端点宽度。',
    check: '须分别记录两端 endpoint、interval、node bbox 和 source/target width。',
    pass: '只看中心线或源码数字不算通过。',
  }),
  rule('L6', 'quantified-audit', {
    stage: 'structure',
    topics: ['link', 'node'],
    check: '先比较所有 link 的 occupancy union 与 node edge。',
    pass: 'candidate SVG 必须 containment，reference raster 晕边只保留为 raw observation，不能反写几何。',
  }),
  rule('L7', 'manual', {
    stage: 'structure',
    topics: ['link'],
    trigger: '自定义 curve。',
    pass: '水平推进且不折返：`source.x1 <= c1x <= c2x <= target.x0`；任何非单调形态须有 reference crop 证明。',
  }),
  rule('L8', 'manual', {
    stage: 'structure',
    topics: ['link'],
    check: 'source、target、socket 和绕行关系必须逐条从 reference 追踪。',
    pass: '不得按财务算式或邻近 node 推断拓扑。',
  }),
  rule('L9', 'manual', {
    stage: 'structure',
    topics: ['link', 'node'],
    trigger: '用户指出接口错误时。',
    check: '先核对 node bbox。',
    pass: 'bbox 错先联动 node/label/endpoints，bbox 对再修 union、内部顺序和中心。',
  }),
  rule('L10', 'quantified-audit', {
    stage: 'structure',
    topics: ['link'],
    trigger: '短距离多入口接口。',
    check: '按 reference 复现连续 union 或真实间隔。',
    pass: '弯曲短 link 还须无台阶、直角和非预期重叠。',
  }),
  rule('L11', 'quantified-audit', {
    stage: 'structure',
    topics: ['link', 'node'],
    features: ['visible-interface'],
    check: '每个端面先判 binary occupancy union，再拆 per-link。',
    pass:
      '`Σlink.width` 和颜色都不是分类器。连续端面不得留缝，间隔端面保留真实 gap，双端宽度独立' +
      '建模。`fullFaceIds` 仅在 Matrix 有 provenance 时要求 union 贴满 node top/bottom。',
  }),
  rule('L12', 'manual', {
    stage: 'polish-l10n',
    topics: ['link'],
    trigger: '从深色 hub/source 出发的 profit link。',
    check: '在 source edge 外取色。',
    pass: 'reference 为纯色时用显式 `linkTint`，不能改 node tint 掩盖。',
  }),
  rule('L13', 'manual', {
    stage: 'structure',
    topics: ['node', 'link', 'label'],
    trigger: 'node 上下移动时。',
    check: '所属 label、相关 `y0/y1`、curve 和 stacked intervals 作为一个系统联动并复查。',
  }),
  rule('L14', 'manual', {
    stage: 'structure',
    topics: ['link', 'node'],
    check: 'Hover Share 的唯一公式和分组语义由 `CONTEXT.md` 拥有。',
    pass:
      'node、label、link 和 endpoint guide surface 必须一致，Adapter 只提供 authored ' +
      'amount/topology，禁止百分比 override。',
  }),
  rule('L15', 'hard-gate', {
    stage: 'structure',
    topics: ['link'],
    trigger: 'link 连接竖直 node edge 时。',
    pass: '必须水平进入/离开；endpoint 和上下边界偏差均 `<=0.5px`。不允许 prose-only 斜切豁免。',
    rationale: '如未来需要例外，先增加 typed policy 和测试。',
  }),
  rule('L16', 'manual', {
    stage: 'structure',
    topics: ['link'],
    check: 'Tooltip Tag 锚到 link 中心曲线 `t=0.5`，不能用闭合 tapered path 周长中点。',
    pass: '多 Tag 各自沿关系中心线，边缘 clamp 不得遮挡关键 guide/node/label。',
  }),
  rule('T1', 'quantified-audit', {
    stage: 'text',
    topics: ['label', 'node'],
    pass: '上/下同轴 label 与 node、同组相邻 block 的目标净空都是 `5px ±1px`。',
    evidence: '记录实际 edge gap。',
  }),
  rule('T2', 'quantified-audit', {
    stage: 'text',
    topics: ['label', 'node'],
    check: '语义在 node 上/下的 label 以 node centerX 对齐。',
    pass: '短柱中心差 `<=4px`，并保留 5px 目标净空。',
  }),
  rule('T3', 'manual', {
    stage: 'text',
    topics: ['label', 'node'],
    trigger: '参考图特殊间距。',
    pass: '可记录实测 edge gap 和理由，但候选净空仍不得低于 G8 的 4px hard floor。',
    evidence: '人工决定须引用对应 reference/candidate crop。',
  }),
  rule('T4', 'quantified-audit', {
    stage: 'text',
    topics: ['label', 'node'],
    pass: '侧置 label 与 node 不横向 overlap，目标边界净空至少 5px。',
    evidence: '记录 bbox gap。',
  }),
  rule('T5', 'manual', {
    stage: 'text',
    topics: ['label', 'node'],
    check: '同一 node 的 label/node 先做确定性 bbox audit，再看完整语义组视觉。',
    pass: '模型复核不能覆盖小于 4px 或中心超差的量化失败。',
  }),
  rule('T6', 'quantified-audit', {
    stage: 'text',
    topics: ['label'],
    features: ['aligned-side-label-column'],
    trigger: '`aligned-side-label-column`：同一视觉列中的两个及以上同类侧置 label。',
    check: '侧置 label 对齐 reference 的实际左/右缘 x。',
    pass: '同列同类 label 必须位于同一 node 列和同一侧，渲染边缘的最大差值 `<=2px`；不默认贴 node。',
    evidence: '逐 locale 的 `labelLayoutAudit.horizontalSideLabels` 边缘位置与跨组 spread。',
  }),
  rule('T7', 'conditional-gate', {
    stage: 'text',
    topics: ['label'],
    features: ['centered-side-label'],
    trigger: '`centered-side-label`，或渲染结果中同一 node 同时出现独立金额同轴块与侧置名称块时触发。',
    pass: '渲染中心与 node 中心差 `<=4px`；使用实际 bbox/ascent 反推 top。',
  }),
  rule('T8', 'manual', {
    stage: 'text',
    topics: ['label', 'node'],
    check: '同 node 的侧置 name 与同轴 value/note 仍按一个语义组检查。',
    pass: '即使垂直交叠也不能漏掉同轴关系。',
  }),
  rule('T9', 'manual', {
    stage: 'text',
    topics: ['label', 'node'],
    trigger: '短 source 的 value/name/note block。',
    check: '逐一核对 centerX 和归属。',
    pass: '不能依赖自动同轴识别。',
  }),
  rule('T10', 'manual', {
    stage: 'text',
    topics: ['node', 'label'],
    trigger: 'interest、other income、tax、investment 等短辅助节点。',
    check: '以自身 label/bbox 为参照。',
    pass: '不能被主流带牵走。',
  }),
  rule('T11', 'manual', {
    stage: 'text',
    topics: ['label'],
    check: '名称、数值、备注、margin、Y/Y 和紧邻图标先归成完整语义 label，再拆 blocks/lines 或划 region。',
  }),
  rule('T12', 'manual', {
    stage: 'structure',
    topics: ['node'],
    status: 'superseded',
    supersededBy: 'B15',
    trigger: '历史 invisible-node 人工例外。',
    check: '例外分支已删除；无柱面的对象必须改建模为 flow geometry 或 semantic annotation。',
  }),
  rule('T12a', 'manual', {
    stage: 'structure',
    topics: ['node', 'annotation'],
    status: 'superseded',
    supersededBy: 'A10',
    trigger: '历史 invisible-node 只有 annotation 是可见入口。',
    pass: '现行 semantic annotation 的结构、hitbox 和 Hover 关系统一由 A10 管理。',
  }),
  rule('T13', 'conditional-gate', {
    stage: 'structure',
    topics: ['node'],
    features: ['visible-node-face'],
    trigger: '`visible-node-face`（含常见的 1–3px 短柱）。',
    pass:
      '必须保留 reference bbox，并有区别背景的有效 fill 或可见 stroke；透明、none、零 opacity、' +
      '隐藏、仅 hitbox/link 均失败。',
  }),
  rule('T14', 'manual', {
    stage: 'structure',
    topics: ['node'],
    features: ['visible-short-node'],
    trigger: '`visible-short-node` 由 reference 中“短而仍可见”的语义事实触发，没有通用高度阈值。',
    check: '逐对象记录 reference/candidate 直线段端点、宽高和 deltas，区分曲线与文字像素。',
    pass:
      '通过要求 reviewer 确认覆盖同一可见直线段；任何接受的非零差异写明理由。调整 node width/x ' +
      '后同步重算 label 中心。',
  }),
  rule('T15', 'manual', {
    stage: 'text',
    topics: ['label', 'node'],
    trigger: 'label 位于同列两 node 之间时。',
    check: '同时检查它与自身 node、相邻 node 的净空。',
    pass: '任一 overlap 失败，所有 locale 都复查。',
  }),
  rule('T16', 'manual', {
    stage: 'text',
    topics: ['label'],
    features: ['specified-label-weight'],
    trigger: '`specified-label-weight`。',
    check: '对每个语义 heading 比较 computed weight 与来源规格并提交人工决定。',
    pass: 'title、金额、备注和 wordmark 分开。缺来源时不得声明该 feature，也不得臆造统一字重。',
  }),
  rule('T17', 'manual', {
    stage: 'text',
    topics: ['label', 'annotation'],
    features: ['semantic-annotation'],
    check:
      '先按参考图判断文字是否属于 Sankey node：名称/金额/备注与 node 或其 micro-flow 属于同一' +
      '语义对象时默认使用 `layout.labels`。',
    pass:
      '只有真实 callout/guide 必须作为 annotation 时才声明 `semantic-annotation`，并逐 locale ' +
      'Hover 该文字本身、确认高亮和 Tooltip。',
  }),
  rule('T18', 'conditional-gate', {
    stage: 'text',
    topics: ['label'],
    features: ['measured-label-position'],
    origin: '41c2f20',
    trigger: '`measured-label-position` 触发。',
    check:
      '每次 evidence run 将每个固定布局 label 组的渲染 union bbox 与 preflight 持久化的原生 ' +
      '`referenceBBox` 自动比对；只有明确的用户布局纠正才可保留该原图测量，并以 `approvedTargetBBox`、' +
      '`approvedTargetAuthority: user-directed-layout-correction` 与具体理由声明待验目标。',
    pass:
      '源语言 locale 的中心差（X 与 Y 各自）`<=6px`，超差失败。非源语言 locale 不做中心 gate' +
      '（本地化验收由 Z2/Z5/Z6 拥有），但每个已测量组必须渲染出可测的 label，缺组即失败；' +
      '存在经授权 target 时审计同时保留 source `referenceBBox`。',
    rationale: '6px = 通用 4px 中心约定加 2px 的 ink-bbox 对 em-box 测量协议余量。',
    evidence: '逐 locale 的 `labelPositionAudit`。',
  }),
  rule('T19', 'build-gate', {
    stage: 'build',
    topics: ['global'],
    features: ['measured-label-position'],
    origin: '41c2f20',
    trigger: 'prepare-review 时。',
    check:
      '校验所有声明 Source 测量的 featureEvidence（`measured-label-position`、' +
      '`semantic-annotation`、`ambiguous-label-slot`）：locator 必须指向本 Build Source，' +
      'evidence digest、reference-image artifact digest 与 Build Source digest 三者一致，' +
      'referenceBBox 不越 Source 边界。',
    pass: '相邻期间或其他数据集的坐标携带外来 digest，直接拒绝——过期测量不允许进入任何后续 gate。',
  }),
  rule('T20', 'manual', {
    stage: 'text',
    topics: ['label'],
    features: ['ambiguous-label-slot'],
    origin: '41c2f20',
    trigger:
      '`ambiguous-label-slot` 触发：preflight 发现 label 槽位或归属在参考图上存在多解' +
      '（如“柱下方”与“左侧槽位”皆可读通）时必须声明该 feature。',
    check: '在 text stage 冻结前提交绑定 reference crop 的操作者槽位裁决（manual decision）。',
    pass: '不允许按单一解释先渲染、等用户复审时指出再改判。',
  }),
  rule('T21', 'conditional-gate', {
    stage: 'structure',
    topics: ['node'],
    features: ['visible-node-face'],
    compensates: ['B15'],
    origin: '72644e5',
    trigger: '每个语义 node 自动触发；`visible-short-node` 同样适用。',
    check:
      '`node-face-policy/v2` 重新计算每个 expected-visible node 的 `faceHeight`；低于共享最小可见高度 ' +
      '`MIN_VISIBLE_FACE_PX`（3px，含 0.5px raster 容差）时立即失败，而不是只写入 audit 字段。',
    pass:
      '每个 expected-visible node 达到 floor；真实 Source face 本身低于 floor 时，只接受 ' +
      '`source-coverage/v2` 中绑定 Source digest、原生 face bbox 与唯一 node target 的显式例外，' +
      '且候选高度不得比 Source 实测 face 明显更小；T14 人工端点/形态决定仍必须通过。',
    rationale:
      '补上 B15/`faceVisible` 只验 alpha>0、bbox 非零而不验渲染高度的盲点：消除“数值极小 → ' +
      '亚像素柱、肉眼不可见”，并给所有 short 节点统一最小柱高、杜绝逐次在 1px/11px 间猜测' +
      '（同一批曾出现 Visa=6px、SAP/Comcast=3px 的各自取值）。',
    evidence: '逐 locale 的 `nodePaintAudit` + Plan 绑定的 `node-face-policy/v2`；例外另引用 Source Coverage digest。',
  }),
  rule('T22', 'build-gate', {
    stage: 'build',
    topics: ['node'],
    trigger: 'Source Coverage 对象命中 Other/All Other 语义且确认承载数值（value-bearing）时。',
    check:
      '`source-coverage/v2` 在组装时强制：带值 Other 是数据指标，不是标注——sourceLabel 含 ' +
      'K/M/B/T 金额而 sourceClass 记为非 value-bearing 类立即失败' +
      '（`SOURCE_COVERAGE_OTHER_CLASS_INVALID`）；若映射为 node，必须有唯一 observed face。',
    pass:
      '柱面不得缺失：把带值 Other 记成不可见节点或标注的分类一律失败。真实 Source face ' +
      '低于共享 floor 时按 T21 走 `source-visible-face-below-floor` 显式例外' +
      '（`visible-short-node`），而不是隐藏。',
    rationale:
      'Texas Instruments Q4 FY25 与 Lyft Q3 FY25 连续把带值 Other 的真实细柱误判为不可见节点' +
      '（CB-003/CB-007 复发）；对 Other 的可见性歧义不再留人工判断空间，一律收敛为可见数据柱。',
    evidence: '`source-coverage/v2` 组装校验；例外仍须绑定 Source digest 与原生 face bbox。',
  }),
  rule('T23', 'build-gate', {
    stage: 'build',
    topics: ['node'],
    features: ['zero-paint-node-slot'],
    origin: 'workday-q3-fy26-feedback',
    trigger: 'Income Statement `financial-value` 映射到 `nonNodeMetrics.*` 时。',
    check:
      '必须声明 Source-bound `zero-paint-node-slot`，prepare-review 对同列 peer x/width 的原生 ' +
      '`referenceBBox` 做像素扫描；任一行出现横跨至少 75% 槽宽的有色连续段即判定存在 node face。',
    pass:
      '只有已绑定 Build Source digest、覆盖该 Source observation 完整高度、匹配同列已测 node face ' +
      '槽宽且扫描确认为 zero-paint 的对象可保留 non-node 表达；1px/2px 连续横条均失败并改建模为 node。',
    evidence: '`source-coverage/v2` + `zero-paint-node-slot` featureEvidence + prepare-review pixel gate。',
    rationale:
      'Workday Q3 FY26 的 Restructuring 71×2px 横条曾被声明为 zero-face route，导致 authored ' +
      'mapping、NodeFacePolicy 与 G12 在同一错误前提上全部自洽。',
  }),
  rule('A1', 'manual', {
    stage: 'text',
    topics: ['annotation'],
    check: '识别 KPI/card/capsule/badge/callout 的真实容器外框。',
    evidence: '记录 bbox。',
  }),
  rule('A2', 'manual', {
    stage: 'text',
    topics: ['annotation'],
    check: '计算容器内全部语义文字和图标的 union bbox。',
    pass: '装饰或透明 hitbox 不计视觉 union。',
  }),
  rule('A3', 'manual', {
    stage: 'text',
    topics: ['annotation'],
    pass: '居中意图要求内容 union 中心与容器中心一致，或有 reference 支持的稳定偏移。',
  }),
  rule('A4', 'manual', {
    stage: 'text',
    topics: ['annotation'],
    check: '左/右/顶对齐意图按 reference 检查对应边距和组内行距。',
  }),
  rule('A5', 'manual', {
    stage: 'text',
    topics: ['annotation'],
    pass: '内容不得贴边，尤其底边、右边和圆角区域。',
    evidence: '保存四边净空。',
  }),
  rule('A6', 'conditional-gate', {
    stage: 'text',
    topics: ['annotation', 'label'],
    features: ['annotation-near-label'],
    trigger: '`annotation-near-label` 触发。',
    pass: 'annotation 与邻近 label、title、period 的 overlap 为 0，目标净空至少 5px；按实际渲染 bbox 判断。',
  }),
  rule('A7', 'manual', {
    stage: 'text',
    topics: ['annotation', 'locale'],
    trigger: '非默认语言替换 annotation 文本后。',
    pass: '内容 union 仍须在容器内且不越画布。',
  }),
  rule('A8', 'manual', {
    stage: 'text',
    topics: ['annotation'],
    check: '优先由容器中心、内容高度、行高和 padding 推导 baseline。',
    evidence: '手写 baseline 时保存容器/union bbox、中心差和边距。',
  }),
  rule('A9', 'manual', {
    stage: 'text',
    topics: ['annotation'],
    check: '负空间流带 annotation 是连接两端的完整容器：量左右锚点、上下极值、文字 union 和经过的 node face。',
    pass: '不能缩成浮动卡片或只移动文字。',
  }),
  rule('A10', 'conditional-gate', {
    stage: 'text',
    topics: ['annotation', 'node'],
    features: ['semantic-annotation'],
    trigger: '`semantic-annotation`。',
    pass:
      '实际 group 必须带 `sankey-interactive-annotation` 和可解析的 `data-node`，含文本且由 ' +
      'renderer 提供透明 hitbox；同名 node-like annotation text 未绑定该 group 或 node 不存在' +
      '即失败。',
  }),
  rule('Z1', 'manual', {
    stage: 'polish-l10n',
    topics: ['locale'],
    trigger: '新增或实质修改 locale 时。',
    pass: '每个 required locale 都要独立 evidence run 和人工布局决定；默认语言证据不能代替。',
  }),
  rule('Z2', 'manual', {
    stage: 'polish-l10n',
    topics: ['locale'],
    check: '本地化 Diff 可辅助定位。',
    pass: '通过依据是纯净性、bbox、标点/混排、越界和重叠，不追求与英文像素相同。',
  }),
  rule('Z3', 'manual', {
    stage: 'polish-l10n',
    topics: ['locale'],
    check: '检查所有 locale-sensitive surface：labels、annotations、cards、title/period、图标旁文字和底部标记。',
  }),
  rule('Z4', 'manual', {
    stage: 'polish-l10n',
    topics: ['locale'],
    check: '明确核对 `R&D`、`SG&A`、`G&A`、`D&A`、含 `&` 的组合、金额后缀和中英品牌。',
    pass: '不得半翻译或拆坏缩写。',
  }),
  rule('Z5', 'conditional-gate', {
    stage: 'polish-l10n',
    topics: ['locale', 'label'],
    features: ['text'],
    trigger: '`text` 触发。',
    pass:
      '每个 rendered text bbox 在画布内且不压 node；overflow 为 0，必要时使用 locale-specific ' +
      'wrap/x/top/font-size。',
  }),
  rule('Z6', 'manual', {
    stage: 'polish-l10n',
    topics: ['locale'],
    check: '修复顺序：先 locale overlay 文案/布局，再拆行、局部位置、局部字号或合适 `textLength`。',
    pass: '不改共享几何。',
  }),
  rule('Z6a', 'manual', {
    stage: 'polish-l10n',
    topics: ['locale', 'raster', 'annotation'],
    trigger: 'locale 文字扩展碰到 runtime raster 时。',
    check: '只在该 locale 的完整 raster 列表移动 annotation x/y。',
    pass: '保持 href、尺寸和 node/link geometry，主体净空至少 5px。',
  }),
  rule('Z7', 'manual', {
    stage: 'polish-l10n',
    topics: ['locale'],
    pass: 'locale overlay 不能改变财务值、links、node geometry、source image 或验证语义。',
  }),
  rule('Z8', 'manual', {
    stage: 'polish-l10n',
    topics: ['locale', 'label'],
    pass: '品牌名、ticker、单位缩写或正式产品英文名可保留，但必须在允许的 identity/preserved-text 配置中记录。',
  }),
  rule('I1', 'manual', {
    stage: 'subloop',
    topics: ['icon'],
    check: '公司、业务、产品和 segment 图标可进入子循环。',
    pass: '目标是可复用 vector 或 R 系列 runtime copy，reference crop 不是成品。',
  }),
  rule('I2', 'manual', {
    stage: 'subloop',
    topics: ['icon'],
    pass: 'crop spec 必须覆盖 inventory 中全部有语义 cluster，除非任务明确缩小范围。',
  }),
  rule('I3', 'manual', {
    stage: 'subloop',
    topics: ['icon'],
    pass: 'reference crops、validation sheet 和 crop report 放在 `icon-references` 规定目录；详细路径由资产文档拥有。',
  }),
  rule('I4', 'manual', {
    stage: 'subloop',
    topics: ['icon'],
    pass: 'crop 只有在主体完整、视觉居中且无无关文字/线条/水印/邻图时通过；否则先重裁。',
  }),
  rule('I5', 'manual', {
    stage: 'subloop',
    topics: ['icon'],
    trigger: '主体铺满取景框时。',
    check: '显式指定 background removal 颜色。',
    pass: '`transparentPixelRatio` 接近 0 时不得假设自动去背成功。',
  }),
  rule('I6', 'manual', {
    stage: 'subloop',
    topics: ['icon'],
    evidence: '每个 crop 的人工/模型验收结论持久化在 validation record。',
  }),
  rule('I7', 'manual', {
    stage: 'subloop',
    topics: ['icon'],
    check: 'vector 候选必须是纯 SVG，不含 image/位图/截图。',
    pass: '与 aligned reference 同 viewport 比较结构、负形、留白和中心。',
  }),
  rule('I8', 'manual', {
    stage: 'subloop',
    topics: ['icon'],
    pass: '可复用 vector 放共享 icon registry，一次性 logo 放 dataset-owned vector。',
    evidence: '验证证据留在 validation 资产区。',
  }),
  rule('I9', 'manual', {
    stage: 'subloop',
    topics: ['icon'],
    trigger: 'materially similar 图标。',
    pass: '优先复用已有 vector，只调整 viewBox、transform、size、placement、stroke 或 fill。',
  }),
  rule('I10', 'manual', {
    stage: 'subloop',
    topics: ['icon'],
    pass: '子循环结束要求 crop 已验证、候选纯 vector 或批准 runtime copy、主体结构/负形/留白/中心稳定且资产落点正确。',
  }),
  rule('I11', 'manual', {
    stage: 'subloop',
    topics: ['icon'],
    check: '公司 Logo 只有一个 owner。',
    pass: '使用 `meta.logoSvg` 时不得在 annotations 再画同一实例；自定义 annotation 定位则移除前者。',
  }),
  rule('I12', 'quantified-audit', {
    stage: 'subloop',
    topics: ['icon', 'annotation', 'node', 'label'],
    features: ['paired-node-annotation'],
    trigger: '业务或产品图标簇与 paired node / 侧置名称构成同一横向语义组时触发。',
    check: '图标簇必须声明 `data-annotation-paired-node`；默认对齐 node face，用户要求与侧置 Label 对齐时再声明 `data-annotation-paired-target="label"` 与 side。render audit 在外层 SVG 坐标系量化图标 union bbox 与显式目标的纵向中心差。',
    pass: '每个 required locale 的 paired 图标簇均有对应目标，且 centerY 差 `<=4px`。',
    evidence: '`annotationPairingAudit` 的逐簇 bbox、target kind/bbox、center delta 与 violation。',
    rationale: '仅检查图标与文字不重叠，无法发现整列品牌簇系统性错配到上方业务行。',
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
    if (!RULE_STAGES.includes(entry.stage)) {
      catalogError('RULE_STAGE_INVALID', `${entry.id} has unsupported stage: ${entry.stage}`);
    }
    if (!entry.topics.length) catalogError('RULE_TOPICS_REQUIRED', `${entry.id} needs at least one topic`);
    for (const topic of entry.topics) {
      if (!RULE_TOPICS.includes(topic)) catalogError('RULE_TOPIC_INVALID', `${entry.id} has unsupported topic: ${topic}`);
    }
    if (!RULE_STATUSES.includes(entry.status)) {
      catalogError('RULE_STATUS_INVALID', `${entry.id} has unsupported status: ${entry.status}`);
    }
    if (entry.status === 'superseded' && !entry.supersededBy) {
      catalogError('RULE_SUPERSESSION_INVALID', `${entry.id} is superseded and must name supersededBy`);
    }
    if (!FIDELITY_RULE_SERIES[entry.id[0]]) {
      catalogError('RULE_SERIES_INVALID', `${entry.id} has no registered series`);
    }
    const hasBody = RULE_TEXT_FIELDS.some((field) => typeof entry[field] === 'string' && entry[field].trim());
    if (!hasBody) catalogError('RULE_BODY_REQUIRED', `${entry.id} needs at least one descriptive field`);
  }
  for (const entry of rules) {
    for (const target of entry.compensates) {
      if (!ids.has(target)) catalogError('RULE_COMPENSATES_UNKNOWN', `${entry.id} compensates unknown rule: ${target}`);
    }
    if (entry.supersededBy && !ids.has(entry.supersededBy)) {
      catalogError('RULE_SUPERSESSION_UNKNOWN', `${entry.id} names unknown supersededBy: ${entry.supersededBy}`);
    }
  }
  return rules;
}

validateCatalog(FIDELITY_RULES);

export const FIDELITY_RULE_STAGES = RULE_STAGES;
export const FIDELITY_RULE_TOPICS = RULE_TOPICS;

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
