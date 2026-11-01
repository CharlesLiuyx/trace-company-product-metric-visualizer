# Sankey View Adapter

This file owns the field format of a Sankey View Adapter,
`data/datasets/<dataset-key>.js`, as `SankeyEngine.render(selector, data)`
(`src/sankey-engine.js`) and the verifiers read it. Financial values live in
the [Income Statement SSOT](income-statement.md); shared contracts are in the
[schema index](../schema.md); modeling rules in
[dynamic-dataset-workflow.md](../../docs/dynamic-dataset-workflow.md); gate
definitions in [fidelity-loop-rules.md](../../docs/fidelity-loop-rules.md).

Author `nodes` and `links` by hand and tune `layout.nodes` / `layout.labels`
against the processed reference image.

```js
{
  key:  'nvidia-q1-fy27',        // dataset key, export filenames
  name: 'NVIDIA · Q1 FY27',      // dataset dropdown label
  meta: { … },                   // title, period, currency, logo, reference
  nodes: [ … ],
  links: [ … ],
  nonNodeMetrics: [ … ],         // optional Source metrics without a node face
  layout: { nodes, routes, labels, scale },
  annotationsSvg: '…',           // optional SVG markup (string or string[])
  rasterAnnotations: [ … ],      // optional runtime images
  render: { … },                 // renderer config overrides
  comparisonScale: { … },        // optional non-revenue anchor
  operatingMetrics: [ … ],       // optional View mirror, see operating-metrics.md
  i18n: { … },                   // localized display overlays
}
```

## meta

| field | notes |
| --- | --- |
| `title` | chart heading |
| `titleX` / `titleY` | title anchor (text-anchor middle); defaults canvas centre / `120` |
| `titleSize` / `titleWeight` | defaults `142` / `800` |
| `titleTextLength` / `titleLengthAdjust` | fixed rendered title width; adjust default `spacingAndGlyphs` |
| `period` / `periodNote` | period stamp, lines 1 and 2 (e.g. `"Q1 FY27"`, `"Ending Apr. 2026"`) |
| `periodX` / `periodY` / `periodNoteY` | stamp position; defaults `width − 210` / `222` / `276` |
| `hidePeriodStamp` | `true` suppresses the stamp when the Source prints the period in the title |
| `currency` | value prefix, default `"$"` |
| `unit` | value suffix (`"B"`, `"M"`), default `""` |
| `decimals` | decimal places for non-integers, default `1` |
| `referenceImage` | processed Source, `{ src, width, height }`; its size is the default canvas (G2) and the render-regression reference |
| `logoSvg` | inner SVG markup of the company logo; the renderer wraps it with `data-typography-role="brand"` |
| `logoViewBox` / `logoWidth` / `logoHeight` | logo coordinates and size; defaults `"0 0 150 86"` / `150` / `86` |
| `logoX` / `logoY` | logo top-left; when omitted it is centred above the hub column just above its label (A11) |

`meta.currency` mirrors the Source and may be `''` when the image shows bare
numbers (e.g. an "in RMB" note); a non-empty `meta.currency` must agree with
the SSOT currency and `meta.unit` must equal the SSOT `unit` (`verify:ssot`).
Cross-company normalization reads the SSOT, not the Adapter.

## node

Every entry in `nodes[]` is a semantic, painted node face. Never preserve an
SSOT field or a flow socket with an off-canvas, background-coloured or
transparent node; use [`nonNodeMetrics`](#nonnodemetrics-and-routes).

| field | type | notes |
| --- | --- | --- |
| `id` | string | unique snake_case id; referenced by links |
| `label` | string \| string[] | name; an array renders as multiple lines |
| `value` | number | displayed amount (sign handled by `type`) |
| `valueText` | string | replaces the formatted value. Required when an exact-integer amount keeps its decimal: `3.0` formats as `€3B`, so set `valueText: '€3.0B'` |
| `notes` | string[] | grey lines under the value (margins, Y/Y, % of rev) |
| `type` | string | `source` (teal revenue inputs) · `hub` (black Revenue) · `profit` (green retained value) · `cost` (red outflows, shown `($X)`) |
| `col` / `order` | number | column (0 = far left) and top-to-bottom order; used by the dynamic layout |
| `labelSide` | string | `left` · `right` · `above` · `below` · `split-left` (name left, value above); auto when omitted |
| `color` / `labelColor` / `linkTint` | string | per-node overrides of the type palette, label colour and link tint |
| `icons` / `iconSize` | string[] / number | `src/icons.js` icon names drawn by the auto label; size default `30` |

## link

```js
{ source: 'hyperscale', target: 'data_center', value: 37.9 }
```

Link colour is a gradient derived from the endpoint types. A link `value` is
the actual flow amount: it may not exceed what its source receives or what its
target passes on by more than one display unit; never copy the target's total
into each inflow (`verify:ssot`, `scripts/lib/link-amounts.mjs`).

| field | notes |
| --- | --- |
| `sourceRoute` / `targetRoute` | a `layout.routes` id replacing `source` / `target`; each side has exactly one |
| `width` | equal width at both ends; falls back to `value × layout.scale` |
| `sourceWidth` / `targetWidth` | measured visible widths; either one renders a closed tapered ribbon, the missing side falls back to `width` |
| `y0` / `y1` | explicit source/target centre positions |
| `sourceOrder` / `targetOrder` | stacking order at the source/target face (defaults to array order) |
| `curve` | optional `x0`, `x1`, `c1x`, `c1y`, `c2x`, `c2y` cubic controls |
| `linkTint` | string, or `{ left, right }` gradient stops |
| `interactionOnly` | `true` paints no path; the link keeps hover semantics while its guide is drawn in `annotationsSvg` |
| `showTooltip` | `false` only for a source-matched visual routing bridge with no reportable percentage; suppresses only the card |

Use endpoint widths only when the reference shows different source and target
intervals; measure the complete interface union first, and never use them to
hide a wrong node bbox or socket order. Measured `sourceWidth`, `targetWidth`,
`y0` and `y1` stay on links, never in the SSOT or an i18n overlay; their
acceptance is G12.

Hover Share（所占比例）is renderer-owned
([`CONTEXT.md`](../../CONTEXT.md#renderer-owned-semantics)). `hoverPercentMode`,
`nodeHoverPercentDenominator`, `percent`, `percentage`, `percentText` and
`percentageText` are not link fields; `verify:ssot` rejects them. Colour or
transparency never changes which relationship is calculated.

## nonNodeMetrics and routes

When the Source has no node face for a metric, declare it separately:

```js
nonNodeMetrics: [
  { id: 'tax', representation: 'data-only' },
  { id: 'other', representation: 'annotation', value: 0.028, type: 'profit' },
  { id: 'cost_bridge', representation: 'flow', value: 7.6, type: 'cost' },
],
links: [
  { source: 'revenue', targetRoute: 'cost_bridge', value: 7.6 },
  { sourceRoute: 'cost_bridge', target: 'store_opex', value: 4.4 },
],
layout: { routes: { cost_bridge: { x: 926, y: 748, width: 0, height: 319 } } },
```

- `data-only`: the SSOT metric is intentionally absent from this view.
- `annotation`: needs an authored `value` and an `annotationsSvg` group with
  `data-node="<id>"` ([semantic annotation labels](#semantic-annotation-labels)).
- `flow`: needs an authored `value`, one `layout.routes.<id>` record and at
  least one `sourceRoute`/`targetRoute` endpoint. A route is link geometry: no
  node rectangle, hitbox or node-paint audit row.

Optional `label`, `notes`, `valueText`, `type` and `labelColor` describe the
metric; a `flow` route renders them as a label like a node, or through
`layout.labels.<id>`. `verify:ssot` rejects id collisions with `nodes[]`, stale ids and
`layout.nodes` geometry for a non-node metric. Which representation a Source
value may name is a modeling rule (T22).

## layout

`layout.nodes` selects the fixed renderer; without it d3-sankey lays out by
`col` / `order`.

| field | notes |
| --- | --- |
| `layout.nodes.<id>` | painted node bbox `{ x, y, width, height }` in viewBox units; missing `width` uses `render.nodeWidth`, missing `height` uses `value × scale` |
| `layout.routes.<id>` | `{ x, y, width, height }` of a `flow` non-node metric (optional `type`); requires `layout.nodes` |
| `layout.scale` | viewBox units per authored value, the fixed renderer's `ky` fallback for geometry without an explicit height or width (default: smallest `height / value`) |
| `layout.labels.<id>` | `{ blocks, icons }` replacing the auto label of node or non-node metric `<id>` |

`layout.scale` never asserts that every face has that ratio, and app modules
must not read it to calibrate a comparison.

Each `blocks[]` entry is one positioned text block:

| field | notes |
| --- | --- |
| `x`, `top`, `anchor` | position; `top` is the block's top edge (plus `render.labelYOffset`); `anchor` `start` · `middle` (default) · `end` |
| `lines` | strings or `{ text, size, weight, color, font, textLength, lengthAdjust }`; `text: '$value'` binds the node's formatted amount (`valueText` wins) |
| `parts` | instead of `lines`: ordered `name` / `value` / `notes` from node data, styled by `nameSize`/`valueSize`/`noteSize`, `nameWeight`/`valueWeight`/`noteWeight`, `nameColor`/`valueColor`/`noteColor`, `valueFont`/`noteFont` |
| `lineGap` | px between lines, default `render.type.lineGap` |
| `semanticRole` | `name` · `amount` · `note` · `top-aligned-side-label`, rendered as `data-label-role` (T7); describes Source semantics only |

Line fonts route by authored role: `$value` uses `amountFontFamily`, other
lines with weight below 700 use `valueFontFamily`, names use `fontFamily`;
`font` overrides. `icons: { names, x, y, size, sizes, gap, color, strokeWidth }`
draws `src/icons.js` icons at a fixed position (names default to node `icons`).
Use `top-aligned-side-label` only when the Source anchors a side name to the
top of its node.

## annotationsSvg

SVG markup (string or string array) drawn after the labels in
`.sankey-annotations`. Only `circle`, `clipPath`, `defs`, `ellipse`, `g`,
`line`, `linearGradient`, `path`, `polygon`, `radialGradient`, `rect`, `stop`,
`svg`, `text` and `tspan` are allowed; comments, `href`/`src`, event handlers
and `url()` references other than local `#id`s are rejected.

### SVG typography roles

Annotation text is product text by default: labels, KPI copy, values, notes
and callouts use the renderer typography roles and must not use Montserrat. A
real Logo, wordmark, trademark lockup or brand illustration marks its smallest
complete ancestor:

```html
<g data-typography-role="brand"><!-- any font family is allowed here --></g>
```

`meta.logoSvg` receives this wrapper automatically. A
`window.SANKEY_BUSINESS_ICONS` fragment placed in `annotationsSvg` still needs a
marked placement wrapper. Never mark the whole layer, a node label, a KPI card
or plain company/product-name text as brand.

### Semantic annotation labels

Node name/value/note copy belongs in `layout.labels`. Only when the reference
proves a metric has no node face and appears as a bespoke callout, declare an
`annotation` non-node metric and draw an explicit group (A10 audits each one):

```html
<g class="sankey-interactive-annotation" data-node="other_income">
  <text>Other</text><text>$0.1B</text>
</g>
```

The renderer inserts a transparent `.sankey-annotation-hitbox` per group. KPI,
brand or decorative annotations never claim a financial metric to obtain hover.

## rasterAnnotations

An object or array of runtime images, drawn above `annotationsSvg` and the
labels. Rendering throws unless `render.allowRasterAnnotations` is `true` (G4);
allowed files and crop policy are owned by
[data/assets/README.md](../assets/README.md). They are source-owned and never
localized.

| field | notes |
| --- | --- |
| `href` (or `src`) | local `data/assets/raster-annotations/…` file |
| `x`, `y`, `width`, `height` | required viewBox box |
| `key` / `id` | rendered as `data-key`; also names the clearance entry |
| `pairedNode` | wraps the image with `data-annotation-paired-node` (I12; A6 clearance is automatic) |
| `pairedTarget` / `pairedSide` | `'label'` aligns to the node's side label (side `left` · `right`) instead of its face |
| `clearance` | `true` adds an unpaired image to A6 clearance |
| `preserveAspectRatio` / `opacity` / `pointerEvents` | defaults `none` / opaque / `none` |

## render

`render` deep-merges over the renderer `DEFAULTS` in `src/sankey-engine.js`.
The canvas is `meta.referenceImage` size unless `render.width` / `height` are
set (G2). Authored keys include `width`, `height`, `margin`, `background`,
`nodeWidth`, `nodePadding`, `nodeRadius`, `palette.<type>.{node,label}`,
`linkTint.<type>`, `linkOpacity`, `type.{name,value,note,lineGap}`,
`titleColor`, `subtitleColor` (period line), `noteColor`, `fontFamily`,
`valueFontFamily`, `amountFontFamily`, `labelWeight`, `valueWeight` and
`interaction`, plus:

- `allowRasterAnnotations`: opt-in for `rasterAnnotations`.
- `labelYOffset`: added to every `layout.labels` block `top`.
- `interfaceAudit`: the G12 connector audit (read by
  `scripts/lib/interface-fidelity.mjs`):

```js
render: { interfaceAudit: { mode: 'error', fullFaceIds: ['gross_profit:left'] } }
```

`mode` is `error`, `warning` (default when absent) or `off`. Build render
evidence accepts only `error`, so every fixed-layout Adapter a Build renders
declares `mode: 'error'`; `warning` / `off` only serve diagnostic `verify:d3`
runs. Optional `fullFaceIds` lists `'<node-id>:left|right'` interfaces whose
intent is full-face coverage; it is not acceptance evidence and never covers a
real socket gap. The audit report and contact sheet are verifier artifacts.

## comparisonScale

Comparison Visual Scale is compiled by the renderer; its semantics are owned
by [`CONTEXT.md`](../../CONTEXT.md#renderer-owned-semantics). The default anchor
is the rendered `revenue` node: its positive value must match the SSOT
`revenue.total` within the half-unit display interval of `decimals`
(`0.5 × 10^-decimals`, ULP inside the interval, no epsilon; `roundingTolerance`
is not an anchor authority). An Adapter with that face must not declare the
field. Only an Adapter without a rendered `revenue` face names the face that
carries the revenue total:

```js
comparisonScale: { anchorNodeId: 'biopharma' }
```

`anchorNodeId` references a positive, non-route node whose id and value match
exactly one positive item in an acyclic SSOT `revenue` lineage within the same
interval. The renderer never infers it from labels, type or order.

## i18n overlay

Dataset overlays are keyed by language code and are display-only:

```js
i18n: {
  zh: {
    name: 'NVIDIA · 2027 财年第一季度',
    meta: { title: 'NVIDIA 2027 财年第一季度利润表', period: '2027 财年第一季度',
      periodNote: '截至 2026 年 4 月', titleTextLength: 2100 },
    nodes: {
      revenue: { label: '收入', notes: ['同比 +85%'] },
      gross_profit: { label: '毛利润', notes: ['毛利率 75%', '同比 +14 个百分点'] },
    },
    layout: { labels: { revenue: { blocks: [
      { lines: [{ text: '收入' }, { text: '$value' }, { text: '同比 +85%' }] },
    ] } } },
  },
}
```

`src/i18n.js` accepts only `name`; `meta` `title`, `subtitle`, `period`,
`periodNote`, `titleTextLength`, `titleSize`, `periodX`, `hidePeriodStamp`;
`nodes.<id>` / `nonNodeMetrics.<id>` `label` and `notes`; `layout.labels` block
text/typography/position keys; and `annotationsSvg` text. Every other path is
rejected. `valueText` and `$value` are authoritative amounts, and a locale may
never introduce or alter a visible financial or temporal token; the full
boundary is owned by [`CONTEXT.md`](../../CONTEXT.md#renderer-owned-semantics).
Fixed layouts localize every explicit `layout.labels.*.blocks[].lines[].text`
other than `$value`.

`i18n.preservedAnnotationText` (`string[]`, not a language) lists
`annotationsSvg` segments that stay untranslated in every language, such as
`aws` or `Uber Eats`; company name, legal name and alias words from company
metadata are exempt automatically. `pnpm verify:i18n` matches whole segments
case-insensitively. Terms unchanged in every position (YouTube, iPhone,
`Microsoft 365`) are identity mappings in `EXACT_ZH` in
`src/i18n-dictionaries.js`.
