/* ====================================================================
 * Target - Q3 FY25 income statement ($B)
 * Reconstructed from input/processed/target-q3-fy25.png as a fixed
 * d3-sankey layout with a dataset-owned, pure SVG Target logo.
 * ==================================================================== */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const BLACK = '#000000';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';

  const logoSvg = `
    <circle cx="94" cy="90" r="90" fill="${RED}"/>
    <circle cx="94" cy="90" r="60" fill="${BG}"/>
    <circle cx="94" cy="90" r="30" fill="${RED}"/>
    <text x="94" y="230" text-anchor="middle" font-family="Montserrat,Arial,sans-serif"
      font-size="52" font-weight="800" textLength="180" lengthAdjust="spacingAndGlyphs" fill="${RED}">TARGET</text>`;

  const smallRevenueAnnotations = ({ advertising, creditCard, other, adNote, creditNote, otherNote }) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <g class="sankey-interactive-annotation" data-node="advertising">
        <text x="752" y="1064" text-anchor="middle" font-size="38" font-weight="600" fill="${BLACK}">${advertising}</text>
        <text x="916" y="991" text-anchor="middle" font-size="38" font-weight="300" fill="${BLACK}">$0.2B</text>
        <text x="916" y="1029" text-anchor="middle" font-family="Roboto,Arial,sans-serif" font-size="28" font-weight="300" fill="${NOTE}">${adNote}</text>
      </g>
      <g class="sankey-interactive-annotation" data-node="credit_card">
        <text x="752" y="1201" text-anchor="middle" font-size="38" font-weight="600" fill="${BLACK}">${creditCard}</text>
        <text x="916" y="1127" text-anchor="middle" font-size="38" font-weight="300" fill="${BLACK}">$0.1B</text>
        <text x="916" y="1167" text-anchor="middle" font-family="Roboto,Arial,sans-serif" font-size="28" font-weight="300" fill="${NOTE}">${creditNote}</text>
      </g>
      <g class="sankey-interactive-annotation" data-node="other_revenue">
        <text x="752" y="1315" text-anchor="middle" font-size="38" font-weight="600" fill="${BLACK}">${other}</text>
        <text x="916" y="1246" text-anchor="middle" font-size="38" font-weight="300" fill="${BLACK}">$0.2B</text>
        <text x="916" y="1286" text-anchor="middle" font-family="Roboto,Arial,sans-serif" font-size="28" font-weight="300" fill="${NOTE}">${otherNote}</text>
      </g>
    </g>`;

  const annotationsEn = smallRevenueAnnotations({
    advertising: 'Advertising', creditCard: 'Credit card', other: 'Other',
    adNote: '+44% Y/Y', creditNote: '(20%) Y/Y', otherNote: '+26% Y/Y',
  });
  const annotationsZh = smallRevenueAnnotations({
    advertising: '广告', creditCard: '信用卡', other: '其他',
    adNote: '同比 +44%', creditNote: '同比 (20%)', otherNote: '同比 +26%',
  });

  const block = (x, top, parts, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    lineGap: options.lineGap == null ? 8 : options.lineGap,
    nameSize: options.nameSize,
    valueSize: options.valueSize,
    noteSize: options.noteSize,
    nameColor: options.nameColor,
    valueColor: options.valueColor,
    noteColor: options.noteColor,
    parts,
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'target-q3-fy25',
    name: 'Target · Q3 FY25',
    company: 'Target',
    meta: {
      company: 'Target',
      title: 'Target Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Oct. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/target-q3-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 133,
      titleWeight: 800,
      titleTextLength: 2125,
      periodX: 2234,
      periodY: 1280,
      periodNoteY: 1320,
      logoWidth: 198,
      logoHeight: 235,
      logoY: 254,
      logoViewBox: '0 0 198 235',
      logoSvg,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      nodeRadius: 0,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLACK, label: BLACK },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: GRAY_LINK,
        hub: GRAY_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 38, value: 38, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,
    layout: {
      scale: 10.5,
      nodes: {
        apparel_accessories: { x: 408, y: 319, width: 72, height: 40 },
        beauty: { x: 408, y: 483, width: 72, height: 34 },
        food_beverage: { x: 408, y: 638, width: 72, height: 63 },
        hardlines: { x: 408, y: 825, width: 72, height: 34 },
        home_furnishing: { x: 408, y: 984, width: 72, height: 41 },
        household_essentials: { x: 408, y: 1148, width: 72, height: 48 },
        other_merchandise: { x: 408, y: 1312, width: 72, height: 2 },
        merchandise_sales: { x: 782, y: 528, width: 72, height: 260 },
        advertising: { x: 888, y: 1057, width: 70, height: 3 },
        credit_card: { x: 888, y: 1194, width: 70, height: 1 },
        other_revenue: { x: 888, y: 1323, width: 70, height: 1 },
        revenue: { x: 1156, y: 637, width: 72, height: 266 },
        gross_profit: { x: 1530, y: 527, width: 72, height: 75 },
        cost_of_sales: { x: 1530, y: 824, width: 72, height: 190 },
        operating_profit: { x: 1904, y: 435, width: 72, height: 9 },
        operating_expenses: { x: 1904, y: 654, width: 72, height: 65 },
        net_profit: { x: 2277, y: 334, width: 72, height: 7 },
        tax: { x: 2277, y: 540, width: 72, height: 2 },
        interest: { x: 2277, y: 644, width: 72, height: 2 },
        sga: { x: 2277, y: 821, width: 72, height: 60 },
        depreciation_amortization: { x: 2277, y: 1081, width: 72, height: 6 },
      },
      labels: {
        apparel_accessories: { blocks: [block(228, 308, ['name'], { nameSize: 38, lineGap: 10 }), block(444, 229, ['value', 'notes'], { valueSize: 38, noteSize: 28 })] },
        beauty: { blocks: [block(228, 488, ['name'], { nameSize: 38 }), block(444, 394, ['value', 'notes'], { valueSize: 38, noteSize: 28 })] },
        food_beverage: { blocks: [block(228, 671, ['name'], { nameSize: 38 }), block(444, 550, ['value', 'notes'], { valueSize: 38, noteSize: 28 })] },
        hardlines: { blocks: [block(228, 829, ['name'], { nameSize: 38 }), block(444, 737, ['value', 'notes'], { valueSize: 38, noteSize: 28 })] },
        home_furnishing: { blocks: [block(228, 993, ['name'], { nameSize: 38 }), block(444, 897, ['value', 'notes'], { valueSize: 38, noteSize: 28 })] },
        household_essentials: { blocks: [block(228, 1134, ['name'], { nameSize: 38, lineGap: 10 }), block(444, 1056, ['value', 'notes'], { valueSize: 38, noteSize: 28 })] },
        other_merchandise: { blocks: [block(228, 1294, ['name'], { nameSize: 38 }), block(444, 1220, ['value', 'notes'], { valueSize: 38, noteSize: 28 })] },
        merchandise_sales: { blocks: [block(818, 334, ['name', 'value', 'notes'], { nameSize: 40, valueSize: 38, noteSize: 28, lineGap: 8 })] },
        advertising: { blocks: [] },
        credit_card: { blocks: [] },
        other_revenue: { blocks: [] },
        revenue: { blocks: [block(1192, 496, ['name', 'value', 'notes'], { nameSize: 40, valueSize: 38, noteSize: 28 })] },
        gross_profit: { blocks: [block(1566, 344, ['name', 'value', 'notes'], { nameSize: 40, valueSize: 38, noteSize: 28 })] },
        cost_of_sales: { blocks: [block(1566, 1035, ['name', 'value'], { nameSize: 35, valueSize: 35, lineGap: 8 })] },
        operating_profit: { blocks: [block(1940, 239, ['name', 'value', 'notes'], { nameSize: 40, valueSize: 38, noteSize: 28 })] },
        operating_expenses: { blocks: [block(1940, 744, ['name', 'value'], { nameSize: 35, valueSize: 35, lineGap: 8 })] },
        net_profit: { blocks: [block(2510, 273, ['name', 'value', 'notes'], { nameSize: 40, valueSize: 38, noteSize: 28 })] },
        tax: { blocks: [block(2510, 511, ['name', 'value'], { nameSize: 31, valueSize: 31, lineGap: 8 })] },
        interest: { blocks: [block(2510, 616, ['name', 'value'], { nameSize: 31, valueSize: 31, lineGap: 8 })] },
        sga: { blocks: [block(2510, 792, ['name', 'value'], { nameSize: 31, valueSize: 30, lineGap: 8 })] },
        depreciation_amortization: { blocks: [block(2510, 1035, ['name', 'value'], { nameSize: 31, valueSize: 30, lineGap: 8 })] },
      },
    },
    nodes: [
      { id: 'apparel_accessories', col: 0, order: 0, type: 'source', label: ['Apparel &', 'accessories'], value: 3.8, notes: ['(4%) Y/Y'] },
      { id: 'beauty', col: 0, order: 1, type: 'source', label: 'Beauty', value: 3.2, notes: ['+0% Y/Y'] },
      { id: 'food_beverage', col: 0, order: 2, type: 'source', label: 'Food & beverage', value: 6.0, valueText: '$6.0B', notes: ['+2% Y/Y'] },
      { id: 'hardlines', col: 0, order: 3, type: 'source', label: 'Hardlines', value: 3.2, notes: ['+1% Y/Y'] },
      { id: 'home_furnishing', col: 0, order: 4, type: 'source', label: 'Home furnishing', value: 3.9, notes: ['(7%) Y/Y'] },
      { id: 'household_essentials', col: 0, order: 5, type: 'source', label: ['Household', 'essentials'], value: 4.5, notes: ['(4%) Y/Y'] },
      { id: 'other_merchandise', col: 0, order: 6, type: 'source', label: 'Other', value: 0.034, valueText: '$34M', notes: ['+13% Y/Y'] },
      { id: 'merchandise_sales', col: 1, order: 0, type: 'source', label: ['Merchandise', 'sales'], value: 24.8, notes: ['(2%) Y/Y'] },
      { id: 'advertising', col: 1, order: 1, type: 'source', label: 'Advertising', value: 0.2, notes: ['+44% Y/Y'], linkTint: GRAY_LINK },
      { id: 'credit_card', col: 1, order: 2, type: 'source', label: 'Credit card', value: 0.1, notes: ['(20%) Y/Y'], linkTint: GRAY_LINK },
      { id: 'other_revenue', col: 1, order: 3, type: 'source', label: 'Other', value: 0.2, notes: ['+26% Y/Y'], linkTint: GRAY_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 25.3, notes: ['(2%) Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 7.1, notes: ['28% margin', '(0pp) Y/Y'] },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 18.1 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 0.9, notes: ['4% margin', '(1pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 6.2 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.7, notes: ['3% margin', '(1pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.2, linkTint: RED_LINK },
      { id: 'interest', col: 5, order: 2, type: 'cost', label: 'Interest', value: 0.1, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: ['Sales General', '& admin'], value: 5.5 },
      { id: 'depreciation_amortization', col: 5, order: 4, type: 'cost', label: ['Depreciation &', 'Amortization'], value: 0.6 },
    ],
    links: [
      { source: 'apparel_accessories', target: 'merchandise_sales', value: 3.8, sourceWidth: 40, targetWidth: 40, y0: 339, y1: 548, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK, curve: { c1x: 580, c1y: 339, c2x: 680, c2y: 548 } },
      { source: 'beauty', target: 'merchandise_sales', value: 3.2, sourceWidth: 34, targetWidth: 34, y0: 500, y1: 585, sourceOrder: 0, targetOrder: 1, linkTint: GRAY_LINK, curve: { c1x: 580, c1y: 500, c2x: 680, c2y: 585 } },
      { source: 'food_beverage', target: 'merchandise_sales', value: 6.0, sourceWidth: 63, targetWidth: 63, y0: 669.5, y1: 633.5, sourceOrder: 0, targetOrder: 2, linkTint: GRAY_LINK, curve: { c1x: 580, c1y: 669.5, c2x: 680, c2y: 633.5 } },
      { source: 'hardlines', target: 'merchandise_sales', value: 3.2, sourceWidth: 34, targetWidth: 34, y0: 842, y1: 682, sourceOrder: 0, targetOrder: 3, linkTint: GRAY_LINK, curve: { c1x: 580, c1y: 842, c2x: 680, c2y: 682 } },
      { source: 'home_furnishing', target: 'merchandise_sales', value: 3.9, sourceWidth: 41, targetWidth: 41, y0: 1004.5, y1: 719.5, sourceOrder: 0, targetOrder: 4, linkTint: GRAY_LINK, curve: { c1x: 580, c1y: 1004.5, c2x: 680, c2y: 719.5 } },
      { source: 'household_essentials', target: 'merchandise_sales', value: 4.5, sourceWidth: 48, targetWidth: 47, y0: 1172, y1: 764, sourceOrder: 0, targetOrder: 5, linkTint: GRAY_LINK, curve: { c1x: 580, c1y: 1172, c2x: 680, c2y: 764 } },
      { source: 'other_merchandise', target: 'merchandise_sales', value: 0.034, sourceWidth: 1, targetWidth: 1, y0: 1313, y1: 787, sourceOrder: 0, targetOrder: 6, linkTint: GRAY_LINK, curve: { c1x: 580, c1y: 1313, c2x: 680, c2y: 787 } },
      { source: 'merchandise_sales', target: 'revenue', value: 24.8, sourceWidth: 260, targetWidth: 260, y0: 658, y1: 768, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK, curve: { c1x: 960, c1y: 658, c2x: 1050, c2y: 768 } },
      { source: 'advertising', target: 'revenue', value: 0.2, sourceWidth: 2, targetWidth: 2, y0: 1058, y1: 896, sourceOrder: 0, targetOrder: 1, linkTint: GRAY_LINK, curve: { c1x: 980, c1y: 1058, c2x: 1040, c2y: 896 } },
      { source: 'credit_card', target: 'revenue', value: 0.1, sourceWidth: 1, targetWidth: 2, y0: 1194.5, y1: 898, sourceOrder: 0, targetOrder: 2, linkTint: GRAY_LINK, curve: { c1x: 1050, c1y: 1194.5, c2x: 1090, c2y: 898 } },
      { source: 'other_revenue', target: 'revenue', value: 0.2, sourceWidth: 2, targetWidth: 4, y0: 1323.5, y1: 901, sourceOrder: 0, targetOrder: 3, linkTint: GRAY_LINK, curve: { c1x: 1050, c1y: 1323.5, c2x: 1090, c2y: 901 } },
      { source: 'revenue', target: 'gross_profit', value: 7.1, sourceWidth: 75, targetWidth: 75, y0: 674.5, y1: 564.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK, curve: { c1x: 1300, c1y: 674.5, c2x: 1420, c2y: 564.5 } },
      { source: 'revenue', target: 'cost_of_sales', value: 18.1, sourceWidth: 190, targetWidth: 190, y0: 807, y1: 919, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK, curve: { c1x: 1300, c1y: 807, c2x: 1420, c2y: 919 } },
      { source: 'gross_profit', target: 'operating_profit', value: 0.9, sourceWidth: 9, targetWidth: 9, y0: 531.5, y1: 439.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK, curve: { c1x: 1690, c1y: 531.5, c2x: 1780, c2y: 439.5 } },
      { source: 'gross_profit', target: 'operating_expenses', value: 6.2, sourceWidth: 65, targetWidth: 65, y0: 568.5, y1: 686.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK, curve: { c1x: 1690, c1y: 568.5, c2x: 1780, c2y: 686.5 } },
      { source: 'operating_profit', target: 'net_profit', value: 0.7, sourceWidth: 7, targetWidth: 7, y0: 438.5, y1: 337.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK, curve: { c1x: 2050, c1y: 438.5, c2x: 2140, c2y: 337.5 } },
      { source: 'operating_profit', target: 'tax', value: 0.2, sourceWidth: 2, targetWidth: 2, y0: 442, y1: 541, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK, curve: { c1x: 2050, c1y: 442, c2x: 2140, c2y: 541 } },
      { source: 'operating_profit', target: 'interest', value: 0.1, sourceWidth: 2, targetWidth: 2, y0: 443, y1: 645, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK, curve: { c1x: 2050, c1y: 443, c2x: 2140, c2y: 645 } },
      { source: 'operating_expenses', target: 'sga', value: 5.5, sourceWidth: 58, targetWidth: 60, y0: 683, y1: 851, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK, curve: { c1x: 2050, c1y: 683, c2x: 2140, c2y: 851 } },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 0.6, sourceWidth: 6, targetWidth: 6, y0: 716, y1: 1084, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK, curve: { c1x: 2050, c1y: 716, c2x: 2140, c2y: 1084 } },
    ],
    i18n: {
      zh: {
        name: '塔吉特 · 2025 财年第三季度',
        meta: {
          title: '塔吉特 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 10 月',
          titleTextLength: 1740,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          apparel_accessories: { label: '服装及配饰', notes: ['同比 (4%)'] },
          beauty: { label: '美妆', notes: ['同比 +0%'] },
          food_beverage: { label: '食品与饮料', notes: ['同比 +2%'] },
          hardlines: { label: '耐用消费品', notes: ['同比 +1%'] },
          home_furnishing: { label: '家居用品', notes: ['同比 (7%)'] },
          household_essentials: { label: '家庭必需品', notes: ['同比 (4%)'] },
          other_merchandise: { label: '其他', notes: ['同比 +13%'] },
          merchandise_sales: { label: '商品销售', notes: ['同比 (2%)'] },
          advertising: { label: '广告', notes: ['同比 +44%'] },
          credit_card: { label: '信用卡', notes: ['同比 (20%)'] },
          other_revenue: { label: '其他', notes: ['同比 +26%'] },
          revenue: { label: '收入', notes: ['同比 (2%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 28%', '同比 (0 个百分点)'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 4%', '同比 (1 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 3%', '同比 (1 个百分点)'] },
          tax: { label: '税费' },
          interest: { label: '利息' },
          sga: { label: ['销售、一般及', '行政费用'] },
          depreciation_amortization: { label: '折旧及摊销' },
        },
      },
    },
  });
})();
