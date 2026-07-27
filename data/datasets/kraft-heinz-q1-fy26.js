/* Kraft Heinz Q1 FY26 fixed-layout income statement, measured from
 * input/processed/kraft-heinz-q1-fy26.png. */
(function () {
  const NAVY = '#26457e';
  const NAVY_LINK = '#98a6c2';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#9acd99';
  const RED = '#d90000';
  const RED_LABEL = '#9e1706';
  const RED_LINK = '#e18484';
  const TITLE = '#15527a';
  const NOTE = '#686868';
  const BG = '#f2f2f2';
  const RIGHT_X = 2516;

  // The source draws Other as a micro-flow/leader rather than a visible node.
  // Keep the callout interactive so its label and guide share the underlying
  // financial node's Hover Share context (T12/T12a).
  const otherAnnotation = (isZh) => `
    <g class="sankey-interactive-annotation" data-node="other" data-link-numerator="other" data-link-denominator="net_profit" data-link-anchor-x="2300" data-link-anchor-y="445">
      <path d="M2206 445 H2288 C2308 445 2308 362 2337 362" fill="none" stroke="${GREEN_LINK}" stroke-width="2" stroke-linecap="butt"/>
      <rect x="2210" y="452" width="210" height="96" fill="transparent" pointer-events="all"/>
      <text x="2310" y="491" text-anchor="end" font-size="32" font-weight="800" fill="${GREEN_LABEL}">${isZh ? '其他' : 'Other'}</text>
      <text x="2310" y="530" text-anchor="end" font-size="31" fill="${GREEN_LABEL}">$0.1B</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  const data = {
    key: 'kraft-heinz-q1-fy26',
    name: 'Kraft Heinz · Q1 FY26',
    company: 'Kraft Heinz',
    meta: {
      company: 'Kraft Heinz', title: 'Kraft Heinz Q1 FY26 Income Statement', period: 'Q1 FY26', periodNote: 'Ending Mar. 2026',
      currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/kraft-heinz-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 197, titleSize: 126, titleWeight: 800, titleTextLength: 2470,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667, height: 1500, background: BG, allowRasterAnnotations: true, interfaceAudit: { mode: 'error' },
      titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      palette: { source: { node: NAVY, label: NAVY }, hub: { node: NAVY, label: NAVY }, profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL } },
      linkTint: { source: NAVY_LINK, hub: NAVY_LINK, profit: GREEN_LINK, cost: RED_LINK }, linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: otherAnnotation(false),
    rasterAnnotations: [
      { key: 'kraft-heinz-company-logo', href: 'data/assets/raster-annotations/kraft-heinz/company-logo.png', x: 650, y: 265, width: 605, height: 135 },
      { key: 'kraft-heinz-north-america-kool-aid', href: 'data/assets/raster-annotations/kraft-heinz/north-america-kool-aid.png', x: 17, y: 248, width: 135, height: 170 },
      { key: 'kraft-heinz-north-america-condiments', href: 'data/assets/raster-annotations/kraft-heinz/north-america-condiments.png', x: 199, y: 255, width: 170, height: 142 },
      { key: 'kraft-heinz-international-developed-maxwell-house', href: 'data/assets/raster-annotations/kraft-heinz/international-developed-maxwell-house.png', x: 74, y: 435, width: 107, height: 146 },
      { key: 'kraft-heinz-emerging-markets-home-bake', href: 'data/assets/raster-annotations/kraft-heinz/emerging-markets-home-bake.png', x: 229, y: 387, width: 121, height: 107 },
    ],
    nodes: [
      { id: 'north_america', col: 0, order: 0, type: 'source', label: 'North America', value: 4.5, notes: ['(1%) Y/Y'] },
      { id: 'international_developed_markets', col: 0, order: 1, type: 'source', label: ['International', 'Developed Markets'], value: 0.8, notes: ['+3% Y/Y'] },
      { id: 'emerging_markets', col: 0, order: 2, type: 'source', label: 'Emerging Markets', value: 0.7, notes: ['+7% Y/Y'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Net sales', value: 6.0, notes: ['+1% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 2.2, notes: ['37% margin', '+2pp Y/Y'] },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 3.8 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.1, notes: ['19% margin', '(1pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.1 },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 0.8, notes: ['13% margin', '+1pp Y/Y'] },
      { id: 'other', col: 4, order: 1, type: 'profit', label: 'Other', value: 0.1, color: BG },
      { id: 'tax', col: 4, order: 2, type: 'cost', label: 'Tax', value: 0.2 },
      { id: 'interest', col: 4, order: 3, type: 'cost', label: 'Interest', value: 0.2 },
      { id: 'sga', col: 4, order: 4, type: 'cost', label: 'SG&A', value: 1.1, notes: ['18% of revenue', '+3pp Y/Y'] },
      { id: 'intangible', col: 4, order: 5, type: 'cost', label: 'Intangible', value: 0.013, valueText: '($13M)', notes: ['0% of revenue'], color: RED },
    ],
    links: [
      { source: 'north_america', target: 'revenue', value: 4.5, sourceWidth: 254, targetWidth: 254, y0: 630, y1: 768, targetOrder: 0 },
      { source: 'international_developed_markets', target: 'revenue', value: 0.8, sourceWidth: 45, targetWidth: 45, y0: 976.5, y1: 917.5, targetOrder: 1 },
      { source: 'emerging_markets', target: 'revenue', value: 0.7, sourceWidth: 40, targetWidth: 40, y0: 1185, y1: 960, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 2.2, sourceWidth: 124, targetWidth: 124, y0: 703, y1: 592, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 3.8, sourceWidth: 215, targetWidth: 215, y0: 872.5, y1: 956.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.1, sourceWidth: 62, targetWidth: 62, y0: 561, y1: 457, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.1, sourceWidth: 62, targetWidth: 60, y0: 623, y1: 739, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.8, sourceWidth: 40, targetWidth: 45, y0: 446, y1: 339.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.2, sourceWidth: 12, targetWidth: 12, y0: 472, y1: 634, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.2, sourceWidth: 10, targetWidth: 12, y0: 483, y1: 770, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 1.1, sourceWidth: 60, targetWidth: 60, y0: 739, y1: 993, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'intangible', value: 0.013, sourceWidth: 2, targetWidth: 2, y0: 770, y1: 1220, sourceOrder: 1, targetOrder: 0 },
    ],
    layout: {
      scale: 56.5,
      nodes: {
        north_america: { x: 466, y: 503, width: 72, height: 254 }, international_developed_markets: { x: 466, y: 954, width: 72, height: 45 }, emerging_markets: { x: 466, y: 1165, width: 72, height: 40 },
        revenue: { x: 935, y: 641, width: 72, height: 339 }, gross_profit: { x: 1402, y: 530, width: 72, height: 124 }, cost_of_sales: { x: 1402, y: 849, width: 72, height: 215 },
        operating_profit: { x: 1868, y: 426, width: 72, height: 62 }, operating_expenses: { x: 1868, y: 709, width: 72, height: 62 },
        net_profit: { x: 2337, y: 317, width: 72, height: 45 }, other: { x: 2206, y: 443, width: 108, height: 4 }, tax: { x: 2337, y: 628, width: 72, height: 12 }, interest: { x: 2337, y: 764, width: 72, height: 12 }, sga: { x: 2337, y: 963, width: 72, height: 62 }, intangible: { x: 2315, y: 1219, width: 94, height: 2 },
      },
      labels: {
        north_america: { blocks: [{ x: 502, top: 419, anchor: 'middle', lineGap: 12, lines: [{ text: '$value', size: 40 }, { text: '(1%) Y/Y', size: 29, color: NOTE }] }, { x: 297, top: 614, anchor: 'middle', lineGap: 7, lines: [{ text: 'North America', size: 40, weight: 800 }] }] },
        international_developed_markets: { blocks: [{ x: 502, top: 865, anchor: 'middle', lineGap: 12, lines: [{ text: '$value', size: 40 }, { text: '+3% Y/Y', size: 29, color: NOTE }] }, { x: 270, top: 937, anchor: 'middle', lineGap: 7, lines: [{ text: 'International', size: 40, weight: 800 }, { text: 'Developed Markets', size: 40, weight: 800 }] }] },
        emerging_markets: { blocks: [{ x: 502, top: 1068, anchor: 'middle', lineGap: 12, lines: [{ text: '$value', size: 40 }, { text: '+7% Y/Y', size: 29, color: NOTE }] }, { x: 270, top: 1170, anchor: 'middle', lineGap: 7, lines: [{ text: 'Emerging Markets', size: 40, weight: 800 }] }] },
        revenue: { blocks: [{ x: 971, top: 500, anchor: 'middle', lineGap: 12, lines: [{ text: 'Net sales', size: 40, weight: 800 }, { text: '$value', size: 40 }, { text: '+1% Y/Y', size: 29, color: NOTE }] }] },
        gross_profit: { blocks: [{ x: 1438, top: 349, anchor: 'middle', lineGap: 12, lines: [{ text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, color: GREEN_LABEL }, { text: '37% margin', size: 29, color: NOTE }, { text: '+2pp Y/Y', size: 29, color: NOTE }] }] },
        cost_of_sales: { blocks: [{ x: 1438, top: 1086, anchor: 'middle', lineGap: 12, lines: [{ text: 'Cost of sales', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, color: RED_LABEL }] }] },
        operating_profit: { blocks: [{ x: 1904, top: 247, anchor: 'middle', lineGap: 12, lines: [{ text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, color: GREEN_LABEL }, { text: '19% margin', size: 29, color: NOTE }, { text: '(1pp) Y/Y', size: 29, color: NOTE }] }] },
        operating_expenses: { blocks: [{ x: 1904, top: 790, anchor: 'middle', lineGap: 10, lines: [{ text: 'Operating', size: 40, weight: 800, color: RED_LABEL }, { text: 'expenses', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, color: RED_LABEL }] }] },
        net_profit: { blocks: [{ x: RIGHT_X, top: 292, anchor: 'middle', lineGap: 12, lines: [{ text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, color: GREEN_LABEL }, { text: '13% margin', size: 29, color: NOTE }, { text: '+1pp Y/Y', size: 29, color: NOTE }] }] },
        other: { blocks: [] },
        tax: { blocks: [{ x: RIGHT_X, top: 614, anchor: 'middle', lineGap: 8, lines: [{ text: 'Tax', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
        interest: { blocks: [{ x: RIGHT_X, top: 750, anchor: 'middle', lineGap: 8, lines: [{ text: 'Interest', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
        sga: { blocks: [{ x: RIGHT_X, top: 955, anchor: 'middle', lineGap: 8, lines: [{ text: 'SG&A', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }, { text: '18% of revenue', size: 29, color: NOTE }, { text: '+3pp Y/Y', size: 29, color: NOTE }] }] },
        intangible: { blocks: [{ x: RIGHT_X, top: 1175, anchor: 'middle', lineGap: 8, lines: [{ text: 'Intangible', size: 31, weight: 800, color: RED_LABEL }, { text: '($13M)', size: 31, color: RED_LABEL }, { text: '0% of revenue', size: 29, color: NOTE }] }] },
      },
    },
    i18n: {
      zh: {
        name: '卡夫亨氏 · 2026 财年第一季度',
        meta: { title: '卡夫亨氏 2026 财年第一季度利润表', period: '2026 财年第一季度', periodNote: '截至 2026 年 3 月', titleTextLength: 2100 },
        nodes: {
          north_america: { label: '北美', notes: ['同比 (1%)'] }, international_developed_markets: { label: '国际发达市场', notes: ['同比 +3%'] }, emerging_markets: { label: '新兴市场', notes: ['同比 +7%'] }, revenue: { label: '净销售额', notes: ['同比 +1%'] }, gross_profit: { label: '毛利润', notes: ['利润率 37%', '同比 +2 个百分点'] }, cost_of_sales: { label: '销售成本' }, operating_profit: { label: '营业利润', notes: ['利润率 19%', '同比 (1 个百分点)'] }, operating_expenses: { label: '运营费用' }, net_profit: { label: '净利润', notes: ['利润率 13%', '同比 +1 个百分点'] }, other: { label: '其他' }, tax: { label: '税费' }, interest: { label: '利息' }, sga: { label: '销售、一般及管理费用', notes: ['占收入 18%', '同比 +3 个百分点'] }, intangible: { label: '无形资产', notes: ['占收入 0%'] },
        },
        annotationsSvg: otherAnnotation(true),
        layout: { labels: {
          north_america: { blocks: [{ x: 502, top: 419, anchor: 'middle', lineGap: 12, lines: [{ text: '$value', size: 40 }, { text: '同比 (1%)', size: 29, color: NOTE }] }, { x: 297, top: 614, anchor: 'middle', lineGap: 7, lines: [{ text: '北美', size: 40, weight: 800 }] }] },
          international_developed_markets: { blocks: [{ x: 502, top: 865, anchor: 'middle', lineGap: 12, lines: [{ text: '$value', size: 40 }, { text: '同比 +3%', size: 29, color: NOTE }] }, { x: 297, top: 947, anchor: 'middle', lineGap: 7, lines: [{ text: '国际发达市场', size: 40, weight: 800 }] }] },
          emerging_markets: { blocks: [{ x: 502, top: 1068, anchor: 'middle', lineGap: 12, lines: [{ text: '$value', size: 40 }, { text: '同比 +7%', size: 29, color: NOTE }] }, { x: 297, top: 1170, anchor: 'middle', lineGap: 7, lines: [{ text: '新兴市场', size: 40, weight: 800 }] }] },
          revenue: { blocks: [{ x: 971, top: 500, anchor: 'middle', lineGap: 12, lines: [{ text: '净销售额', size: 40, weight: 800 }, { text: '$value', size: 40 }, { text: '同比 +1%', size: 29, color: NOTE }] }] },
          gross_profit: { blocks: [{ x: 1438, top: 349, anchor: 'middle', lineGap: 12, lines: [{ text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, color: GREEN_LABEL }, { text: '利润率 37%', size: 29, color: NOTE }, { text: '同比 +2 个百分点', size: 29, color: NOTE }] }] },
          cost_of_sales: { blocks: [{ x: 1438, top: 1086, anchor: 'middle', lineGap: 12, lines: [{ text: '销售成本', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, color: RED_LABEL }] }] },
          operating_profit: { blocks: [{ x: 1904, top: 247, anchor: 'middle', lineGap: 12, lines: [{ text: '营业利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, color: GREEN_LABEL }, { text: '利润率 19%', size: 29, color: NOTE }, { text: '同比 (1 个百分点)', size: 29, color: NOTE }] }] },
          operating_expenses: { blocks: [{ x: 1904, top: 810, anchor: 'middle', lineGap: 10, lines: [{ text: '运营费用', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, color: RED_LABEL }] }] },
          net_profit: { blocks: [{ x: 2525, top: 292, anchor: 'middle', lineGap: 12, lines: [{ text: '净利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, color: GREEN_LABEL }, { text: '利润率 13%', size: 29, color: NOTE }, { text: '同比 +1 个百分点', size: 29, color: NOTE }] }] },
          other: { blocks: [] },
          tax: { blocks: [{ x: RIGHT_X, top: 614, anchor: 'middle', lineGap: 8, lines: [{ text: '税费', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
          interest: { blocks: [{ x: RIGHT_X, top: 750, anchor: 'middle', lineGap: 8, lines: [{ text: '利息', size: 31, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }] }] },
          sga: { blocks: [{ x: 2525, top: 955, anchor: 'middle', lineGap: 8, lines: [{ text: '销售、一般及', size: 27, weight: 800, color: RED_LABEL }, { text: '管理费用', size: 27, weight: 800, color: RED_LABEL }, { text: '$value', size: 31, color: RED_LABEL }, { text: '占收入 18%', size: 29, color: NOTE }, { text: '同比 +3 个百分点', size: 29, color: NOTE }] }] },
          intangible: { blocks: [{ x: 2525, top: 1175, anchor: 'middle', lineGap: 8, lines: [{ text: '无形资产', size: 31, weight: 800, color: RED_LABEL }, { text: '($13M)', size: 31, color: RED_LABEL }, { text: '占收入 0%', size: 29, color: NOTE }] }] },
        } },
      },
    },
  };

  // Fixed-label inputs are baseline-oriented; this aligns their visible bboxes
  // to the measured reference anchors in both locales.
  for (const labels of [data.layout.labels, data.i18n.zh.layout.labels]) {
    for (const label of Object.values(labels)) {
      for (const block of label.blocks) block.top -= 10;
    }
  }

  window.DATASETS.push(data);
})();
