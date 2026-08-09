/* ====================================================================
 * P&G - Q4 FY26 income statement ($B)
 * Reconstructed from input/processed/p-g-q4-fy26.png as a measured,
 * fixed d3-sankey layout. Financial SSOT: data/income-statements/p-g.js.
 * ==================================================================== */
(function () {
  const TITLE = '#15527a';
  const SOURCE = '#173f8f';
  const SOURCE_LINK = '#8ba1ca';
  const NOTE = '#6b6b6b';
  const GREEN = '#28a228';
  const GREEN_LABEL = '#008d50';
  const GREEN_LINK = '#9ccc9c';
  const OTHER_GUIDE = '#5db45d';
  const RED = '#db0000';
  const RED_LABEL = '#9b1600';
  const RED_LINK = '#df8585';
  const RIGHT_LABEL_X = 2504;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'p-g-q4-fy26',
    name: 'P&G · Q4 FY26',
    company: 'P&G',
    meta: {
      company: 'P&G',
      title: 'P&G Q4 FY26 Income Statement',
      period: 'Q4 FY26',
      periodNote: 'Ending June 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/p-g-q4-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 1990,
      periodX: 2479,
      periodY: 220,
      periodNoteY: 261,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      allowRasterAnnotations: true,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: SOURCE, label: SOURCE },
        hub: { node: SOURCE, label: SOURCE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: SOURCE_LINK,
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    rasterAnnotations: [
      { key: 'p-g-company-logo', href: 'data/assets/raster-annotations/p-g/company-logo-q4-fy26.png', x: 808, y: 232, width: 300, height: 300 },
      { key: 'beauty-product-cluster', href: 'data/assets/raster-annotations/p-g/beauty-product-cluster-q4-fy26.png', x: 10, y: 370, width: 250, height: 145 },
      { key: 'grooming-product-cluster', href: 'data/assets/raster-annotations/p-g/grooming-product-cluster-q4-fy26.png', x: 10, y: 545, width: 235, height: 115 },
      { key: 'health-care-product-cluster', href: 'data/assets/raster-annotations/p-g/health-care-product-cluster-q4-fy26.png', x: 10, y: 700, width: 250, height: 130 },
      { key: 'fabric-home-care-product-cluster', href: 'data/assets/raster-annotations/p-g/fabric-home-care-product-cluster-q4-fy26.png', x: 0, y: 855, width: 235, height: 125 },
      { key: 'baby-feminine-family-care-product-cluster', href: 'data/assets/raster-annotations/p-g/baby-feminine-family-care-product-cluster-q4-fy26.png', x: 30, y: 1080, width: 115, height: 125 },
    ],
    annotationsSvg: `<g class="sankey-interactive-annotation" data-node="other_income" data-link-numerator="other_income" data-link-denominator="net_profit" data-link-anchor-x="2238" data-link-anchor-y="464.5"><rect x="2195" y="463" width="82" height="3" fill="${OTHER_GUIDE}"/><text x="2238" y="530" text-anchor="middle" font-size="34" font-weight="800" fill="#008d50">Other</text><text x="2238" y="572" text-anchor="middle" font-size="34" font-weight="400" fill="#008d50">$0.1B</text></g>`,
    layout: {
      scale: 16,
      nodes: {
        beauty: { x: 464, y: 405, width: 73, height: 64 },
        grooming: { x: 464, y: 584, width: 73, height: 26 },
        health_care: { x: 464, y: 725, width: 73, height: 43 },
        fabric_home_care: { x: 464, y: 883, width: 73, height: 121 },
        baby_feminine_family_care: { x: 464, y: 1119, width: 73, height: 83 },
        corporate: { x: 464, y: 1317, width: 73, height: 3 },
        revenue: { x: 931, y: 677, width: 73, height: 350 },
        gross_profit: { x: 1399, y: 594, width: 73, height: 169 },
        cost_of_products_sold: { x: 1399, y: 982, width: 73, height: 179 },
        operating_profit: { x: 1866, y: 480, width: 73, height: 64 },
        operating_expenses: { x: 1866, y: 753, width: 73, height: 103 },
        other_income: { x: 2277, y: 463, width: 3, height: 3 },
        net_profit: { x: 2332, y: 368, width: 73, height: 50 },
        tax: { x: 2332, y: 657, width: 73, height: 11 },
        interest: { x: 2332, y: 821, width: 73, height: 4 },
      },
      labels: {
        beauty: {
          blocks: [
            { x: 496, top: 307, anchor: 'middle', lineGap: 12, lines: [
              { text: '$value', size: 40, weight: 400, color: SOURCE },
              { text: '+6% Y/Y', size: 29, weight: 400, color: NOTE },
            ] },
            { x: 430, top: 411, anchor: 'end', lines: [{ text: 'Beauty', size: 36, weight: 800, color: SOURCE }] },
          ],
        },
        grooming: {
          blocks: [
            { x: 496, top: 490, anchor: 'middle', lineGap: 12, lines: [
              { text: '$value', size: 40, weight: 400, color: SOURCE },
              { text: '+1% Y/Y', size: 29, weight: 400, color: NOTE },
            ] },
            { x: 430, top: 572, anchor: 'end', lines: [{ text: 'Grooming', size: 36, weight: 800, color: SOURCE }] },
          ],
        },
        health_care: {
          blocks: [
            { x: 496, top: 627, anchor: 'middle', lineGap: 12, lines: [
              { text: '$value', size: 40, weight: 400, color: SOURCE },
              { text: '+1% Y/Y', size: 29, weight: 400, color: NOTE },
            ] },
            { x: 430, top: 701, anchor: 'end', lineGap: 6, lines: [
              { text: 'Health', size: 36, weight: 800, color: SOURCE },
              { text: 'Care', size: 36, weight: 800, color: SOURCE },
            ] },
          ],
        },
        fabric_home_care: {
          blocks: [
            { x: 496, top: 790, anchor: 'middle', lineGap: 12, lines: [
              { text: '$value', size: 40, weight: 400, color: SOURCE },
              { text: '+1% Y/Y', size: 29, weight: 400, color: NOTE },
            ] },
            { x: 425, top: 893, anchor: 'end', lineGap: 6, lines: [
              { text: 'Fabric &', size: 40, weight: 800, color: SOURCE },
              { text: 'Home Care', size: 40, weight: 800, color: SOURCE },
            ] },
          ],
        },
        baby_feminine_family_care: {
          blocks: [
            { x: 496, top: 1017, anchor: 'middle', lineGap: 12, lines: [
              { text: '$value', size: 40, weight: 400, color: SOURCE },
              { text: '(1%) Y/Y', size: 29, weight: 400, color: NOTE },
            ] },
            { x: 425, top: 1115, anchor: 'end', lineGap: 6, lines: [
              { text: 'Baby, Feminine', size: 40, weight: 800, color: SOURCE },
              { text: '& Family Care', size: 40, weight: 800, color: SOURCE },
            ] },
          ],
        },
        corporate: {
          blocks: [
            { x: 500.5, top: 1257, anchor: 'middle', lines: [{ text: '$value', size: 40, weight: 400, color: SOURCE }] },
            { x: 430, top: 1294, anchor: 'end', lines: [{ text: 'Corporate', size: 37, weight: 800, color: SOURCE }] },
          ],
        },
        revenue: {
          blocks: [
            { x: 964, top: 533, anchor: 'middle', lineGap: 12, lines: [
              { text: 'Net sales', size: 40, weight: 800, color: SOURCE },
              { text: '$value', size: 40, weight: 400, color: SOURCE },
              { text: '+2% Y/Y', size: 29, weight: 400, color: NOTE },
            ] },
          ],
        },
        gross_profit: {
          blocks: [
            { x: 1436, top: 409, anchor: 'middle', lineGap: 12, lines: [
              { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
              { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
              { text: '48% margin', size: 29, weight: 400, color: NOTE },
              { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
            ] },
          ],
        },
        cost_of_products_sold: {
          blocks: [
            { x: 1435, top: 1180, anchor: 'middle', lineGap: 8, lines: [
              { text: 'Cost of', size: 40, weight: 800, color: RED_LABEL },
              { text: 'products sold', size: 40, weight: 800, color: RED_LABEL },
              { text: '$value', size: 40, weight: 400, color: RED_LABEL },
            ] },
          ],
        },
        operating_profit: {
          blocks: [
            { x: 1902, top: 292, anchor: 'middle', lineGap: 12, lines: [
              { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
              { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
              { text: '19% margin', size: 29, weight: 400, color: NOTE },
              { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
            ] },
          ],
        },
        operating_expenses: {
          blocks: [
            { x: 1902, top: 871, anchor: 'middle', lineGap: 8, lines: [
              { text: 'Operating', size: 40, weight: 800, color: RED_LABEL },
              { text: 'expenses', size: 40, weight: 800, color: RED_LABEL },
              { text: '$value', size: 40, weight: 400, color: RED_LABEL },
            ] },
          ],
        },
        other_income: { blocks: [] },
        net_profit: {
          blocks: [
            { x: RIGHT_LABEL_X, top: 343, anchor: 'middle', lineGap: 12, lines: [
              { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
              { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
              { text: '15% margin', size: 29, weight: 400, color: NOTE },
              { text: '(3%) Y/Y', size: 29, weight: 400, color: NOTE },
            ] },
          ],
        },
        tax: {
          blocks: [
            { x: 2518, top: 629, anchor: 'middle', lineGap: 8, lines: [
              { text: 'Tax', size: 34, weight: 800, color: RED_LABEL },
              { text: '$value', size: 34, weight: 400, color: RED_LABEL },
            ] },
          ],
        },
        interest: {
          blocks: [
            { x: 2519, top: 784, anchor: 'middle', lineGap: 8, lines: [
              { text: 'Interest', size: 34, weight: 800, color: RED_LABEL },
              { text: '$value', size: 34, weight: 400, color: RED_LABEL },
            ] },
          ],
        },
      },
    },
    nodes: [
      { id: 'beauty', col: 0, order: 0, type: 'source', label: 'Beauty', value: 4.0, valueText: '$4.0B', notes: ['+6% Y/Y'] },
      { id: 'grooming', col: 0, order: 1, type: 'source', label: 'Grooming', value: 1.7, notes: ['+1% Y/Y'] },
      { id: 'health_care', col: 0, order: 2, type: 'source', label: ['Health', 'Care'], value: 2.8, notes: ['+1% Y/Y'] },
      { id: 'fabric_home_care', col: 0, order: 3, type: 'source', label: ['Fabric &', 'Home Care'], value: 7.4, notes: ['+1% Y/Y'] },
      { id: 'baby_feminine_family_care', col: 0, order: 4, type: 'source', label: ['Baby, Feminine', '& Family Care'], value: 5.0, valueText: '$5.0B', notes: ['(1%) Y/Y'] },
      { id: 'corporate', col: 0, order: 5, type: 'source', label: 'Corporate', value: 0.3 },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Net sales', value: 21.2, notes: ['+2% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 10.3, notes: ['48% margin', '(1pp) Y/Y'] },
      { id: 'cost_of_products_sold', col: 2, order: 1, type: 'cost', label: ['Cost of', 'products sold'], value: 10.9 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 3.9, notes: ['19% margin', '(2pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 6.3 },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: '', value: 0.1, valueText: '$0.1B', labelSide: 'right' },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 3.1, valueText: '$3.1B', notes: ['15% margin', '(3%) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.9, valueText: '($0.9B)' },
      { id: 'interest', col: 5, order: 2, type: 'cost', label: 'Interest', value: 0.1, valueText: '($0.1B)', color: RED_LINK, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'beauty', target: 'revenue', value: 4.0, sourceWidth: 64, targetWidth: 66, sourceOrder: 0, targetOrder: 0 },
      { source: 'grooming', target: 'revenue', value: 1.7, sourceWidth: 26, targetWidth: 28, sourceOrder: 0, targetOrder: 1 },
      { source: 'health_care', target: 'revenue', value: 2.8, sourceWidth: 43, targetWidth: 46, sourceOrder: 0, targetOrder: 2 },
      { source: 'fabric_home_care', target: 'revenue', value: 7.4, sourceWidth: 121, targetWidth: 122, sourceOrder: 0, targetOrder: 3 },
      { source: 'baby_feminine_family_care', target: 'revenue', value: 5.0, sourceWidth: 83, targetWidth: 83, sourceOrder: 0, targetOrder: 4 },
      { source: 'corporate', target: 'revenue', value: 0.3, sourceWidth: 3, targetWidth: 5, sourceOrder: 0, targetOrder: 5 },
      { source: 'revenue', target: 'gross_profit', value: 10.3, width: 169, sourceOrder: 0, targetOrder: 0, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
      { source: 'revenue', target: 'cost_of_products_sold', value: 10.9, sourceWidth: 181, targetWidth: 179, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 3.9, width: 64, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 6.3, sourceWidth: 105, targetWidth: 103, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 3.0, width: 47, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.9, sourceWidth: 13, targetWidth: 11, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.1, width: 4, sourceOrder: 2, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 0.1, width: 3, sourceOrder: 0, targetOrder: 1, curve: { c1x: 2293, c1y: 464.5, c2x: 2306.5, c2y: 416.5 }, linkTint: { left: OTHER_GUIDE, right: GREEN_LINK } },
    ],
    i18n: {
      zh: {
        name: '宝洁 · 2026 财年第四季度',
        meta: {
          title: '宝洁 2026 财年第四季度利润表',
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 6 月',
          titleTextLength: 1750,
        },
        nodes: {
          beauty: { label: '美容', notes: ['同比 +6%'] },
          grooming: { label: '男士理容', notes: ['同比 +1%'] },
          health_care: { label: '健康护理', notes: ['同比 +1%'] },
          fabric_home_care: { label: '织物及家居护理', notes: ['同比 +1%'] },
          baby_feminine_family_care: { label: '婴幼儿、女性及家庭护理', notes: ['同比 (1%)'] },
          corporate: { label: '总部及其他' },
          revenue: { label: '净销售额', notes: ['同比 +2%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 48%', '同比 (1 个百分点)'] },
          cost_of_products_sold: { label: '产品销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 19%', '同比 (2 个百分点)'] },
          operating_expenses: { label: '营业费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 15%', '同比 (3%)'] },
          tax: { label: '税费' },
          interest: { label: '利息' },
        },
        annotationsSvg: `<g class="sankey-interactive-annotation" data-node="other_income" data-link-numerator="other_income" data-link-denominator="net_profit" data-link-anchor-x="2238" data-link-anchor-y="464.5"><rect x="2195" y="463" width="82" height="3" fill="${OTHER_GUIDE}"/><text x="2238" y="530" text-anchor="middle" font-size="34" font-weight="800" fill="#008d50">其他</text><text x="2238" y="572" text-anchor="middle" font-size="34" font-weight="400" fill="#008d50">$0.1B</text></g>`,
        layout: {
          labels: {
            beauty: { blocks: [
              { x: 496, top: 306, anchor: 'middle', lineGap: 12, lines: [{ text: '$value', size: 40, weight: 400, color: SOURCE }, { text: '同比 +6%', size: 29, weight: 400, color: NOTE }] },
              { x: 425, top: 411, anchor: 'end', lines: [{ text: '美容', size: 40, weight: 800, color: SOURCE }] },
            ] },
            grooming: { blocks: [
              { x: 496, top: 490, anchor: 'middle', lineGap: 12, lines: [{ text: '$value', size: 40, weight: 400, color: SOURCE }, { text: '同比 +1%', size: 29, weight: 400, color: NOTE }] },
              { x: 425, top: 572, anchor: 'end', lines: [{ text: '男士理容', size: 40, weight: 800, color: SOURCE }] },
            ] },
            health_care: { blocks: [
              { x: 496, top: 627, anchor: 'middle', lineGap: 12, lines: [{ text: '$value', size: 40, weight: 400, color: SOURCE }, { text: '同比 +1%', size: 29, weight: 400, color: NOTE }] },
              { x: 425, top: 728, anchor: 'end', lines: [{ text: '健康护理', size: 34, weight: 800, color: SOURCE }] },
            ] },
            fabric_home_care: { blocks: [
              { x: 496, top: 790, anchor: 'middle', lineGap: 12, lines: [{ text: '$value', size: 40, weight: 400, color: SOURCE }, { text: '同比 +1%', size: 29, weight: 400, color: NOTE }] },
              { x: 425, top: 924, anchor: 'end', lines: [{ text: '织物及家居护理', size: 30, weight: 800, color: SOURCE }] },
            ] },
            baby_feminine_family_care: { blocks: [
              { x: 496, top: 1017, anchor: 'middle', lineGap: 12, lines: [{ text: '$value', size: 40, weight: 400, color: SOURCE }, { text: '同比 (1%)', size: 29, weight: 400, color: NOTE }] },
              { x: 425, top: 1124, anchor: 'end', lineGap: 6, lines: [{ text: '婴幼儿、女性', size: 30, weight: 800, color: SOURCE }, { text: '及家庭护理', size: 30, weight: 800, color: SOURCE }] },
            ] },
            corporate: { blocks: [
              { x: 500.5, top: 1257, anchor: 'middle', lines: [{ text: '$value', size: 40, weight: 400, color: SOURCE }] },
              { x: 425, top: 1294, anchor: 'end', lines: [{ text: '总部及其他', size: 34, weight: 800, color: SOURCE }] },
            ] },
            revenue: { blocks: [{ x: 964, top: 533, anchor: 'middle', lineGap: 12, lines: [{ text: '净销售额', size: 40, weight: 800, color: SOURCE }, { text: '$value', size: 40, weight: 400, color: SOURCE }, { text: '同比 +2%', size: 29, weight: 400, color: NOTE }] }] },
            gross_profit: { blocks: [{ x: 1436, top: 408, anchor: 'middle', lineGap: 12, lines: [{ text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: '利润率 48%', size: 29, weight: 400, color: NOTE }, { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
            cost_of_products_sold: { blocks: [{ x: 1435, top: 1180, anchor: 'middle', lineGap: 8, lines: [{ text: '产品销售成本', size: 36, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, weight: 400, color: RED_LABEL }] }] },
            operating_profit: { blocks: [{ x: 1902, top: 289, anchor: 'middle', lineGap: 12, lines: [{ text: '营业利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: '利润率 19%', size: 29, weight: 400, color: NOTE }, { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE }] }] },
            operating_expenses: { blocks: [{ x: 1902, top: 901, anchor: 'middle', lineGap: 8, lines: [{ text: '营业费用', size: 40, weight: 800, color: RED_LABEL }, { text: '$value', size: 40, weight: 400, color: RED_LABEL }] }] },
            other_income: { blocks: [] },
            net_profit: { blocks: [{ x: RIGHT_LABEL_X, top: 343, anchor: 'middle', lineGap: 12, lines: [{ text: '净利润', size: 40, weight: 800, color: GREEN_LABEL }, { text: '$value', size: 40, weight: 400, color: GREEN_LABEL }, { text: '利润率 15%', size: 29, weight: 400, color: NOTE }, { text: '同比 (3%)', size: 29, weight: 400, color: NOTE }] }] },
            tax: { blocks: [{ x: RIGHT_LABEL_X, top: 636, anchor: 'middle', lineGap: 8, lines: [{ text: '税费', size: 34, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, weight: 400, color: RED_LABEL }] }] },
            interest: { blocks: [{ x: RIGHT_LABEL_X, top: 792, anchor: 'middle', lineGap: 8, lines: [{ text: '利息', size: 34, weight: 800, color: RED_LABEL }, { text: '$value', size: 34, weight: 400, color: RED_LABEL }] }] },
          },
        },
      },
    },
  });
})();
