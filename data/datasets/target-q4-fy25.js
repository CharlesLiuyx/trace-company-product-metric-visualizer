/* ====================================================================
 * Target - Q4 FY25 income statement ($B)
 * Reconstructed from input/processed/target-q4-fy25.png as a fixed
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
    adNote: '+55% Y/Y', creditNote: '(9%) Y/Y', otherNote: '+23% Y/Y',
  });
  const annotationsZh = smallRevenueAnnotations({
    advertising: '广告', creditCard: '信用卡', other: '其他',
    adNote: '同比 +55%', creditNote: '同比 (9%)', otherNote: '同比 +23%',
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
    key: 'target-q4-fy25',
    name: 'Target · Q4 FY25',
    company: 'Target',
    meta: {
      company: 'Target',
      title: 'Target Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/target-q4-fy25.png', width: 2667, height: 1500 },
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
    annotationsSvg: '',
    layout: {
      scale: 10.5,
      nodes: {
        apparel_accessories: { x: 408, y: 342, width: 72, height: 39 },
        beauty: { x: 408, y: 495, width: 72, height: 33 },
        food_beverage: { x: 408, y: 654, width: 72, height: 64 },
        hardlines: { x: 408, y: 838, width: 72, height: 57 },
        home_furnishing: { x: 408, y: 999, width: 72, height: 46 },
        household_essentials: { x: 408, y: 1147, width: 72, height: 44 },
        other_merchandise: { x: 408, y: 1313, width: 72, height: 1 },
        merchandise_sales: { x: 782, y: 539, width: 72, height: 295 },
        advertising: { x: 889, y: 1079, width: 72, height: 2 },
        credit_card: { x: 892, y: 1200, width: 72, height: 1 },
        other_revenue: { x: 889, y: 1320, width: 72, height: 2 },
        revenue: { x: 1156, y: 655, width: 72, height: 302 },
        gross_profit: { x: 1528, y: 538, width: 72, height: 78 },
        cost_of_sales: { x: 1530, y: 849, width: 72, height: 220 },
        operating_profit: { x: 1904, y: 450, width: 72, height: 11 },
        operating_expenses: { x: 1904, y: 648, width: 72, height: 64 },
        net_profit: { x: 2277, y: 367, width: 72, height: 8 },
        tax: { x: 2277, y: 562, width: 72, height: 3 },
        interest: { x: 2277, y: 682, width: 72, height: 1 },
        sga: { x: 2277, y: 809, width: 72, height: 59 },
        depreciation_amortization: { x: 2277, y: 1087, width: 72, height: 5 },
      },
      labels: {
        apparel_accessories: { blocks: [block(228, 318, ['name'], { nameSize: 38, lineGap: 10 }), block(444, 252, ['value', 'notes'], { valueSize: 38, noteSize: 28 })] },
        beauty: { blocks: [block(228, 488, ['name'], { nameSize: 38 }), block(444, 405, ['value', 'notes'], { valueSize: 38, noteSize: 28 })] },
        food_beverage: { blocks: [block(228, 663, ['name'], { nameSize: 38 }), block(444, 556, ['value', 'notes'], { valueSize: 38, noteSize: 28 })] },
        hardlines: { blocks: [block(228, 843, ['name'], { nameSize: 38 }), block(444, 750, ['value', 'notes'], { valueSize: 38, noteSize: 28 })] },
        home_furnishing: { blocks: [block(228, 999, ['name'], { nameSize: 38 }), block(444, 911, ['value', 'notes'], { valueSize: 38, noteSize: 28 })] },
        household_essentials: { blocks: [block(228, 1122, ['name'], { nameSize: 38, lineGap: 10 }), block(444, 1049, ['value', 'notes'], { valueSize: 38, noteSize: 28 })] },
        other_merchandise: { blocks: [block(228, 1294, ['name'], { nameSize: 38 }), block(444, 1222, ['value', 'notes'], { valueSize: 38, noteSize: 28 })] },
        merchandise_sales: { blocks: [block(818, 344, ['name', 'value', 'notes'], { nameSize: 40, valueSize: 38, noteSize: 28, lineGap: 8 })] },
        advertising: { blocks: [block(738, 1057, ['name'], { nameSize: 38 }), block(922, 991, ['value', 'notes'], { valueSize: 38, noteSize: 28 })] },
        credit_card: { blocks: [block(742, 1178, ['name'], { nameSize: 38 }), block(928, 1108, ['value', 'notes'], { valueSize: 38, noteSize: 28 })] },
        other_revenue: { blocks: [block(780, 1298, ['name'], { nameSize: 38 }), block(922, 1228, ['value', 'notes'], { valueSize: 38, noteSize: 28 })] },
        revenue: { blocks: [block(1192, 516, ['name', 'value', 'notes'], { nameSize: 40, valueSize: 38, noteSize: 28 })] },
        gross_profit: { blocks: [block(1564, 356, ['name', 'value', 'notes'], { nameSize: 40, valueSize: 38, noteSize: 28 })] },
        cost_of_sales: { blocks: [block(1566, 1085, ['name', 'value'], { nameSize: 35, valueSize: 35, lineGap: 8 })] },
        operating_profit: { blocks: [block(1940, 269, ['name', 'value', 'notes'], { nameSize: 40, valueSize: 38, noteSize: 28 })] },
        operating_expenses: { blocks: [block(1940, 724, ['name', 'value'], { nameSize: 35, valueSize: 35, lineGap: 8 })] },
        net_profit: { blocks: [block(2473, 312, ['name', 'value', 'notes'], { nameSize: 40, valueSize: 38, noteSize: 28 })] },
        tax: { blocks: [block(2480, 531, ['name', 'value'], { nameSize: 31, valueSize: 31, lineGap: 8 })] },
        interest: { blocks: [block(2485, 653, ['name', 'value'], { nameSize: 31, valueSize: 31, lineGap: 8 })] },
        sga: { blocks: [block(2492, 790, ['name', 'value'], { nameSize: 31, valueSize: 30, lineGap: 8 })] },
        depreciation_amortization: { blocks: [block(2493, 1034, ['name', 'value'], { nameSize: 31, valueSize: 30, lineGap: 8 })] },
      },
    },
    nodes: [
      { id: 'apparel_accessories', col: 0, order: 0, type: 'source', label: ['Apparel &', 'accessories'], value: 4.1, notes: ['(6%) Y/Y'] },
      { id: 'beauty', col: 0, order: 1, type: 'source', label: 'Beauty', value: 3.5, notes: ['+1% Y/Y'] },
      { id: 'food_beverage', col: 0, order: 2, type: 'source', label: 'Food & beverage', value: 6.6, notes: ['+2% Y/Y'] },
      { id: 'hardlines', col: 0, order: 3, type: 'source', label: 'Hardlines', value: 6.0, valueText: '$6.0B', notes: ['(2%) Y/Y'] },
      { id: 'home_furnishing', col: 0, order: 4, type: 'source', label: 'Home furnishing', value: 4.8, notes: ['(5%) Y/Y'] },
      { id: 'household_essentials', col: 0, order: 5, type: 'source', label: ['Household', 'essentials'], value: 4.7, notes: ['(2%) Y/Y'] },
      { id: 'other_merchandise', col: 0, order: 6, type: 'source', label: 'Other', value: 0.1, notes: ['(9%) Y/Y'] },
      { id: 'merchandise_sales', col: 1, order: 0, type: 'source', label: ['Merchandise', 'sales'], value: 29.8, notes: ['(2%) Y/Y'] },
      { id: 'advertising', col: 1, order: 1, type: 'source', label: 'Advertising', value: 0.3, notes: ['+55% Y/Y'], linkTint: GRAY_LINK },
      { id: 'credit_card', col: 1, order: 2, type: 'source', label: 'Credit card', value: 0.1, notes: ['(9%) Y/Y'], linkTint: GRAY_LINK },
      { id: 'other_revenue', col: 1, order: 3, type: 'source', label: 'Other', value: 0.2, notes: ['+23% Y/Y'], linkTint: GRAY_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 30.5, notes: ['(1%) Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 8.1, notes: ['27% margin', '+0pp Y/Y'] },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 22.3 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 1.4, notes: ['5% margin', '(0pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 6.7 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.0, valueText: '$1.0B', notes: ['3% margin', '(0pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.3, linkTint: RED_LINK },
      { id: 'interest', col: 5, order: 2, type: 'cost', label: 'Interest', value: 0.1, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: ['Sales General', '& admin'], value: 6.0, valueText: '($6.0B)' },
      { id: 'depreciation_amortization', col: 5, order: 4, type: 'cost', label: ['Depreciation &', 'Amortization'], value: 0.7 },
    ],
    links: [
      { source: 'apparel_accessories', target: 'merchandise_sales', value: 4.1, sourceWidth: 39, targetWidth: 40, y0: 361.5, y1: 559, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK, curve: { c1x: 580, c1y: 361.5, c2x: 680, c2y: 559 } },
      { source: 'beauty', target: 'merchandise_sales', value: 3.5, sourceWidth: 33, targetWidth: 34, y0: 511.5, y1: 596, sourceOrder: 0, targetOrder: 1, linkTint: GRAY_LINK, curve: { c1x: 580, c1y: 511.5, c2x: 680, c2y: 596 } },
      { source: 'food_beverage', target: 'merchandise_sales', value: 6.6, sourceWidth: 64, targetWidth: 65, y0: 686, y1: 645.5, sourceOrder: 0, targetOrder: 2, linkTint: GRAY_LINK, curve: { c1x: 580, c1y: 686, c2x: 680, c2y: 645.5 } },
      { source: 'hardlines', target: 'merchandise_sales', value: 6.0, sourceWidth: 57, targetWidth: 58, y0: 866.5, y1: 707, sourceOrder: 0, targetOrder: 3, linkTint: GRAY_LINK, curve: { c1x: 580, c1y: 866.5, c2x: 680, c2y: 707 } },
      { source: 'home_furnishing', target: 'merchandise_sales', value: 4.8, sourceWidth: 46, targetWidth: 47, y0: 1022, y1: 759.5, sourceOrder: 0, targetOrder: 4, linkTint: GRAY_LINK, curve: { c1x: 580, c1y: 1022, c2x: 680, c2y: 759.5 } },
      { source: 'household_essentials', target: 'merchandise_sales', value: 4.7, sourceWidth: 44, targetWidth: 50, y0: 1169, y1: 808, sourceOrder: 0, targetOrder: 5, linkTint: GRAY_LINK, curve: { c1x: 580, c1y: 1169, c2x: 680, c2y: 808 } },
      { source: 'other_merchandise', target: 'merchandise_sales', value: 0.1, sourceWidth: 1, targetWidth: 1, y0: 1313.5, y1: 833.5, sourceOrder: 0, targetOrder: 6, linkTint: GRAY_LINK, curve: { c1x: 580, c1y: 1313.5, c2x: 680, c2y: 833.5 } },
      { source: 'merchandise_sales', target: 'revenue', value: 29.8, sourceWidth: 295, targetWidth: 295, y0: 686.5, y1: 802.5, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK, curve: { c1x: 960, c1y: 686.5, c2x: 1050, c2y: 802.5 } },
      { source: 'advertising', target: 'revenue', value: 0.3, sourceWidth: 2, targetWidth: 3, y0: 1080, y1: 951.5, sourceOrder: 0, targetOrder: 1, linkTint: GRAY_LINK, curve: { c1x: 980, c1y: 1080, c2x: 1040, c2y: 951.5 } },
      { source: 'credit_card', target: 'revenue', value: 0.1, sourceWidth: 1, targetWidth: 1, y0: 1200.5, y1: 953.5, sourceOrder: 0, targetOrder: 2, linkTint: GRAY_LINK, curve: { c1x: 1050, c1y: 1200.5, c2x: 1090, c2y: 953.5 } },
      { source: 'other_revenue', target: 'revenue', value: 0.2, sourceWidth: 2, targetWidth: 2, y0: 1321, y1: 956, sourceOrder: 0, targetOrder: 3, linkTint: GRAY_LINK, curve: { c1x: 1050, c1y: 1321, c2x: 1090, c2y: 956 } },
      { source: 'revenue', target: 'gross_profit', value: 8.1, sourceWidth: 81, targetWidth: 78, y0: 695.5, y1: 577, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK, curve: { c1x: 1300, c1y: 695.5, c2x: 1420, c2y: 577 } },
      { source: 'revenue', target: 'cost_of_sales', value: 22.3, sourceWidth: 221, targetWidth: 220, y0: 846.5, y1: 959, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK, curve: { c1x: 1300, c1y: 846.5, c2x: 1420, c2y: 959 } },
      { source: 'gross_profit', target: 'operating_profit', value: 1.4, sourceWidth: 14, targetWidth: 11, y0: 545, y1: 455.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK, curve: { c1x: 1690, c1y: 545, c2x: 1780, c2y: 455.5 } },
      { source: 'gross_profit', target: 'operating_expenses', value: 6.7, sourceWidth: 64, targetWidth: 64, y0: 584, y1: 680, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK, curve: { c1x: 1690, c1y: 584, c2x: 1780, c2y: 680 } },
      { source: 'operating_profit', target: 'net_profit', value: 1.0, sourceWidth: 8, targetWidth: 8, y0: 454, y1: 371, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK, curve: { c1x: 2050, c1y: 454, c2x: 2140, c2y: 371 } },
      { source: 'operating_profit', target: 'tax', value: 0.3, sourceWidth: 2, targetWidth: 3, y0: 458, y1: 563.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK, curve: { c1x: 2050, c1y: 458, c2x: 2140, c2y: 563.5 } },
      { source: 'operating_profit', target: 'interest', value: 0.1, sourceWidth: 1, targetWidth: 1, y0: 460.5, y1: 682.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK, curve: { c1x: 2050, c1y: 460.5, c2x: 2140, c2y: 682.5 } },
      { source: 'operating_expenses', target: 'sga', value: 6.0, sourceWidth: 58, targetWidth: 59, y0: 677, y1: 838.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK, curve: { c1x: 2050, c1y: 677, c2x: 2140, c2y: 838.5 } },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 0.7, sourceWidth: 6, targetWidth: 5, y0: 709, y1: 1089.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK, curve: { c1x: 2050, c1y: 709, c2x: 2140, c2y: 1089.5 } },
    ],
    i18n: {
      zh: {
        name: '塔吉特 · 2025 财年第四季度',
        meta: {
          title: '塔吉特 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2026 年 1 月',
          titleTextLength: 1740,
        },
        nodes: {
          apparel_accessories: { label: '服装及配饰', notes: ['同比 (6%)'] },
          beauty: { label: '美妆', notes: ['同比 +1%'] },
          food_beverage: { label: '食品与饮料', notes: ['同比 +2%'] },
          hardlines: { label: '耐用消费品', notes: ['同比 (2%)'] },
          home_furnishing: { label: '家居用品', notes: ['同比 (5%)'] },
          household_essentials: { label: '家庭必需品', notes: ['同比 (2%)'] },
          other_merchandise: { label: '其他', notes: ['同比 (9%)'] },
          merchandise_sales: { label: '商品销售', notes: ['同比 (2%)'] },
          advertising: { label: '广告', notes: ['同比 +55%'] },
          credit_card: { label: '信用卡', notes: ['同比 (9%)'] },
          other_revenue: { label: '其他', notes: ['同比 +23%'] },
          revenue: { label: '收入', notes: ['同比 (1%)'] },
          gross_profit: { label: '毛利润', notes: ['利润率 27%', '同比 +0 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 5%', '同比 (0 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 3%', '同比 (0 个百分点)'] },
          tax: { label: '税费' },
          interest: { label: '利息' },
          sga: { label: ['销售、一般及', '行政费用'] },
          depreciation_amortization: { label: '折旧及摊销' },
        },
        layout: {
          labels: {
            apparel_accessories: { blocks: [block(228, 338, ['name'], { nameSize: 38, lineGap: 10 }), block(444, 252, ['value', 'notes'], { valueSize: 38, noteSize: 28 })] },
            household_essentials: { blocks: [block(228, 1146, ['name'], { nameSize: 38, lineGap: 10 }), block(444, 1049, ['value', 'notes'], { valueSize: 38, noteSize: 28 })] },
          },
        },
      },
    },
  });
})();
