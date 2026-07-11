/* ====================================================================
 * Target - Q1 FY27 income statement ($B)
 * Reconstructed from input/processed/target-q1-fy27.png as a fixed
 * d3-sankey layout with a pure SVG Target logo.
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
        <text x="752" y="1094" text-anchor="middle" font-size="38" font-weight="600" fill="${BLACK}">${advertising}</text>
        <text x="916" y="1021" text-anchor="middle" font-size="38" font-weight="300" fill="${BLACK}">$0.2B</text>
        <text x="916" y="1059" text-anchor="middle" font-family="Roboto,Arial,sans-serif" font-size="28" font-weight="300" fill="${NOTE}">${adNote}</text>
      </g>
      <g class="sankey-interactive-annotation" data-node="credit_card">
        <text x="752" y="1231" text-anchor="middle" font-size="38" font-weight="600" fill="${BLACK}">${creditCard}</text>
        <text x="916" y="1157" text-anchor="middle" font-size="38" font-weight="300" fill="${BLACK}">$0.1B</text>
        <text x="916" y="1197" text-anchor="middle" font-family="Roboto,Arial,sans-serif" font-size="28" font-weight="300" fill="${NOTE}">${creditNote}</text>
      </g>
      <g class="sankey-interactive-annotation" data-node="other_revenue">
        <text x="752" y="1345" text-anchor="middle" font-size="38" font-weight="600" fill="${BLACK}">${other}</text>
        <text x="916" y="1276" text-anchor="middle" font-size="38" font-weight="300" fill="${BLACK}">$0.2B</text>
        <text x="916" y="1316" text-anchor="middle" font-family="Roboto,Arial,sans-serif" font-size="28" font-weight="300" fill="${NOTE}">${otherNote}</text>
      </g>
    </g>`;

  const annotationsEn = smallRevenueAnnotations({
    advertising: 'Advertising', creditCard: 'Credit card', other: 'Other',
    adNote: '+51% Y/Y', creditNote: '(8%) Y/Y', otherNote: '+26% Y/Y',
  });
  const annotationsZh = smallRevenueAnnotations({
    advertising: '广告', creditCard: '信用卡', other: '其他',
    adNote: '同比 +51%', creditNote: '同比 (8%)', otherNote: '同比 +26%',
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
    key: 'target-q1-fy27',
    name: 'Target · Q1 FY27',
    company: 'Target',
    meta: {
      company: 'Target',
      title: 'Target Q1 FY27 Income Statement',
      period: 'Q1 FY27',
      periodNote: 'Ending May 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/target-q1-fy27.png', width: 2667, height: 1500 },
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
        apparel_accessories: { x: 408, y: 340, width: 72, height: 40 },
        beauty: { x: 408, y: 503, width: 72, height: 36 },
        food_beverage: { x: 408, y: 662, width: 72, height: 67 },
        hardlines: { x: 408, y: 850, width: 72, height: 37 },
        home_furnishing: { x: 408, y: 1010, width: 72, height: 34 },
        household_essentials: { x: 408, y: 1166, width: 72, height: 49 },
        other_merchandise: { x: 408, y: 1335, width: 72, height: 2 },
        merchandise_sales: { x: 782, y: 548, width: 72, height: 262 },
        advertising: { x: 866, y: 1080, width: 72, height: 2 },
        credit_card: { x: 864, y: 1218, width: 72, height: 2 },
        other_revenue: { x: 864, y: 1334, width: 72, height: 2 },
        revenue: { x: 1156, y: 648, width: 72, height: 268 },
        gross_profit: { x: 1530, y: 548, width: 72, height: 76 },
        cost_of_sales: { x: 1530, y: 822, width: 72, height: 190 },
        operating_profit: { x: 1904, y: 442, width: 72, height: 11 },
        operating_expenses: { x: 1904, y: 663, width: 72, height: 66 },
        net_profit: { x: 2277, y: 347, width: 72, height: 8 },
        tax: { x: 2277, y: 621, width: 72, height: 3 },
        interest: { x: 2277, y: 720, width: 72, height: 2 },
        sga: { x: 2277, y: 855, width: 72, height: 59 },
        depreciation_amortization: { x: 2277, y: 1097, width: 72, height: 6 },
      },
      labels: {
        apparel_accessories: {
          blocks: [
            block(228, 329, ['name'], { nameSize: 38, anchor: 'middle', lineGap: 10 }),
            block(444, 250, ['value', 'notes'], { valueSize: 38, noteSize: 28 }),
          ],
        },
        beauty: {
          blocks: [
            block(228, 509, ['name'], { nameSize: 38 }),
            block(444, 415, ['value', 'notes'], { valueSize: 38, noteSize: 28 }),
          ],
        },
        food_beverage: {
          blocks: [
            block(228, 679, ['name'], { nameSize: 38 }),
            block(444, 573, ['value', 'notes'], { valueSize: 38, noteSize: 28 }),
          ],
        },
        hardlines: {
          blocks: [
            block(228, 850, ['name'], { nameSize: 38 }),
            block(444, 760, ['value', 'notes'], { valueSize: 38, noteSize: 28 }),
          ],
        },
        home_furnishing: {
          blocks: [
            block(228, 1014, ['name'], { nameSize: 38 }),
            block(444, 920, ['value', 'notes'], { valueSize: 38, noteSize: 28 }),
          ],
        },
        household_essentials: {
          blocks: [
            block(228, 1150, ['name'], { nameSize: 38, lineGap: 10 }),
            block(444, 1075, ['value', 'notes'], { valueSize: 38, noteSize: 28 }),
          ],
        },
        other_merchandise: {
          blocks: [
            block(228, 1314, ['name'], { nameSize: 38 }),
            block(444, 1246, ['value', 'notes'], { valueSize: 38, noteSize: 28 }),
          ],
        },
        merchandise_sales: {
          blocks: [
            block(818, 354, ['name', 'value', 'notes'], { nameSize: 40, valueSize: 38, noteSize: 28, lineGap: 8 }),
          ],
        },
        advertising: { blocks: [] },
        credit_card: { blocks: [] },
        other_revenue: { blocks: [] },
        revenue: {
          blocks: [
            block(1192, 507, ['name', 'value', 'notes'], { nameSize: 40, valueSize: 38, noteSize: 28 }),
          ],
        },
        gross_profit: {
          blocks: [
            block(1566, 365, ['name', 'value', 'notes'], { nameSize: 40, valueSize: 38, noteSize: 28 }),
          ],
        },
        cost_of_sales: {
          blocks: [
            block(1566, 1035, ['name', 'value'], { nameSize: 35, valueSize: 35, lineGap: 8 }),
          ],
        },
        operating_profit: {
          blocks: [
            block(1940, 260, ['name', 'value', 'notes'], { nameSize: 40, valueSize: 38, noteSize: 28 }),
          ],
        },
        operating_expenses: {
          blocks: [
            block(1940, 753, ['name', 'value'], { nameSize: 35, valueSize: 35, lineGap: 8 }),
          ],
        },
        net_profit: {
          blocks: [
            block(2510, 294, ['name', 'value', 'notes'], { nameSize: 40, valueSize: 38, noteSize: 28 }),
          ],
        },
        tax: {
          blocks: [
            block(2510, 584, ['name', 'value'], { nameSize: 31, valueSize: 31, lineGap: 8 }),
          ],
        },
        interest: {
          blocks: [
            block(2510, 690, ['name', 'value'], { nameSize: 31, valueSize: 31, lineGap: 8 }),
          ],
        },
        sga: {
          blocks: [
            block(2510, 828, ['name', 'value'], { nameSize: 31, valueSize: 30, lineGap: 8 }),
          ],
        },
        depreciation_amortization: {
          blocks: [
            block(2510, 1046, ['name', 'value'], { nameSize: 31, valueSize: 30, lineGap: 8 }),
          ],
        },
      },
    },

    nodes: [
      { id: 'apparel_accessories', col: 0, order: 0, type: 'source', label: ['Apparel &', 'accessories'], value: 3.8, notes: ['+4% Y/Y'] },
      { id: 'beauty', col: 0, order: 1, type: 'source', label: 'Beauty', value: 3.4, notes: ['+10% Y/Y'] },
      { id: 'food_beverage', col: 0, order: 2, type: 'source', label: 'Food & beverage', value: 6.3, notes: ['+6% Y/Y'] },
      { id: 'hardlines', col: 0, order: 3, type: 'source', label: 'Hardlines', value: 3.5, notes: ['+15% Y/Y'] },
      { id: 'home_furnishing', col: 0, order: 4, type: 'source', label: 'Home furnishing', value: 3.2, notes: ['+1% Y/Y'] },
      { id: 'household_essentials', col: 0, order: 5, type: 'source', label: ['Household', 'essentials'], value: 4.6, notes: ['+5% Y/Y'] },
      { id: 'other_merchandise', col: 0, order: 6, type: 'source', label: 'Other', value: 0.1, notes: ['(88%) Y/Y'] },
      { id: 'merchandise_sales', col: 1, order: 0, type: 'source', label: ['Merchandise', 'sales'], value: 24.9, notes: ['+6% Y/Y'] },
      { id: 'advertising', col: 1, order: 1, type: 'source', label: 'Advertising', value: 0.2, notes: ['+51% Y/Y'], linkTint: GRAY_LINK },
      { id: 'credit_card', col: 1, order: 2, type: 'source', label: 'Credit card', value: 0.1, notes: ['(8%) Y/Y'], linkTint: GRAY_LINK },
      { id: 'other_revenue', col: 1, order: 3, type: 'source', label: 'Other', value: 0.2, notes: ['+26% Y/Y'], linkTint: GRAY_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 25.4, notes: ['+7% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 7.4, notes: ['29% margin', '+1pp Y/Y'] },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 18.1 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 1.1, notes: ['4% margin', '(2pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 6.2 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.8, notes: ['3% margin', '(1pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.3, linkTint: RED_LINK },
      { id: 'interest', col: 5, order: 2, type: 'cost', label: 'Interest', value: 0.1, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: ['Sales General', '& admin'], value: 5.6 },
      { id: 'depreciation_amortization', col: 5, order: 4, type: 'cost', label: ['Depreciation &', 'Amortization'], value: 0.7 },
    ],

    links: [
      { source: 'apparel_accessories', target: 'merchandise_sales', value: 3.8, sourceWidth: 40, targetWidth: 40, y0: 360, y1: 568, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK, curve: { c1x: 580, c1y: 360, c2x: 680, c2y: 568 } },
      { source: 'beauty', target: 'merchandise_sales', value: 3.4, sourceWidth: 36, targetWidth: 36, y0: 521, y1: 606, sourceOrder: 0, targetOrder: 1, linkTint: GRAY_LINK, curve: { c1x: 580, c1y: 521, c2x: 680, c2y: 606 } },
      { source: 'food_beverage', target: 'merchandise_sales', value: 6.3, sourceWidth: 67, targetWidth: 67, y0: 695.5, y1: 657.5, sourceOrder: 0, targetOrder: 2, linkTint: GRAY_LINK, curve: { c1x: 580, c1y: 695.5, c2x: 680, c2y: 657.5 } },
      { source: 'hardlines', target: 'merchandise_sales', value: 3.5, sourceWidth: 37, targetWidth: 37, y0: 868.5, y1: 709.5, sourceOrder: 0, targetOrder: 3, linkTint: GRAY_LINK, curve: { c1x: 580, c1y: 868.5, c2x: 680, c2y: 709.5 } },
      { source: 'home_furnishing', target: 'merchandise_sales', value: 3.2, sourceWidth: 34, targetWidth: 34, y0: 1027, y1: 745, sourceOrder: 0, targetOrder: 4, linkTint: GRAY_LINK, curve: { c1x: 580, c1y: 1027, c2x: 680, c2y: 745 } },
      { source: 'household_essentials', target: 'merchandise_sales', value: 4.6, sourceWidth: 49, targetWidth: 48, y0: 1190.5, y1: 786, sourceOrder: 0, targetOrder: 5, linkTint: GRAY_LINK, curve: { c1x: 580, c1y: 1190.5, c2x: 680, c2y: 786 } },
      { source: 'other_merchandise', target: 'merchandise_sales', value: 0.1, sourceWidth: 1, targetWidth: 1, y0: 1335.5, y1: 810, sourceOrder: 0, targetOrder: 6, linkTint: GRAY_LINK, curve: { c1x: 580, c1y: 1335.5, c2x: 680, c2y: 810 } },
      { source: 'merchandise_sales', target: 'revenue', value: 24.9, sourceWidth: 262, targetWidth: 262, y0: 679, y1: 779, sourceOrder: 0, targetOrder: 0, linkTint: GRAY_LINK, curve: { c1x: 960, c1y: 679, c2x: 1050, c2y: 779 } },
      { source: 'advertising', target: 'revenue', value: 0.2, sourceWidth: 2, targetWidth: 2, y0: 1081, y1: 909, sourceOrder: 0, targetOrder: 1, linkTint: GRAY_LINK, curve: { c1x: 980, c1y: 1081, c2x: 1040, c2y: 909 } },
      { source: 'credit_card', target: 'revenue', value: 0.1, sourceWidth: 1, targetWidth: 2, y0: 1218.5, y1: 911, sourceOrder: 0, targetOrder: 2, linkTint: GRAY_LINK, curve: { c1x: 980, c1y: 1218.5, c2x: 1040, c2y: 911 } },
      { source: 'other_revenue', target: 'revenue', value: 0.2, sourceWidth: 2, targetWidth: 4, y0: 1335, y1: 914, sourceOrder: 0, targetOrder: 3, linkTint: GRAY_LINK, curve: { c1x: 980, c1y: 1335, c2x: 1040, c2y: 914 } },
      { source: 'revenue', target: 'gross_profit', value: 7.4, sourceWidth: 76, targetWidth: 76, y0: 686, y1: 586, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK, curve: { c1x: 1300, c1y: 686, c2x: 1420, c2y: 586 } },
      { source: 'revenue', target: 'cost_of_sales', value: 18.1, sourceWidth: 190, targetWidth: 190, y0: 819, y1: 917, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK, curve: { c1x: 1300, c1y: 819, c2x: 1420, c2y: 917 } },
      { source: 'gross_profit', target: 'operating_profit', value: 1.1, sourceWidth: 11, targetWidth: 11, y0: 553.5, y1: 447.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK, curve: { c1x: 1690, c1y: 553.5, c2x: 1780, c2y: 447.5 } },
      { source: 'gross_profit', target: 'operating_expenses', value: 6.2, sourceWidth: 65, targetWidth: 66, y0: 591.5, y1: 696, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK, curve: { c1x: 1690, c1y: 591.5, c2x: 1780, c2y: 696 } },
      { source: 'operating_profit', target: 'net_profit', value: 0.8, sourceWidth: 8, targetWidth: 8, y0: 446, y1: 351, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK, curve: { c1x: 2050, c1y: 446, c2x: 2140, c2y: 351 } },
      { source: 'operating_profit', target: 'tax', value: 0.3, sourceWidth: 3, targetWidth: 3, y0: 450.5, y1: 622.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK, curve: { c1x: 2050, c1y: 450.5, c2x: 2140, c2y: 622.5 } },
      { source: 'operating_profit', target: 'interest', value: 0.1, sourceWidth: 2, targetWidth: 2, y0: 452, y1: 721, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK, curve: { c1x: 2050, c1y: 452, c2x: 2140, c2y: 721 } },
      { source: 'operating_expenses', target: 'sga', value: 5.6, sourceWidth: 59, targetWidth: 59, y0: 692.5, y1: 884.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK, curve: { c1x: 2050, c1y: 692.5, c2x: 2140, c2y: 884.5 } },
      { source: 'operating_expenses', target: 'depreciation_amortization', value: 0.7, sourceWidth: 7, targetWidth: 6, y0: 725.5, y1: 1100, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK, curve: { c1x: 2050, c1y: 725.5, c2x: 2140, c2y: 1100 } },
    ],

    i18n: {
      zh: {
        name: '塔吉特 · 2027 财年第一季度',
        meta: {
          title: '塔吉特 2027 财年第一季度利润表',
          period: '2027 财年第一季度',
          periodNote: '截至 2026 年 5 月',
          titleTextLength: 1740,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          apparel_accessories: { label: '服装及配饰', notes: ['同比 +4%'] },
          beauty: { label: '美妆', notes: ['同比 +10%'] },
          food_beverage: { label: '食品与饮料', notes: ['同比 +6%'] },
          hardlines: { label: '耐用消费品', notes: ['同比 +15%'] },
          home_furnishing: { label: '家居用品', notes: ['同比 +1%'] },
          household_essentials: { label: '家庭必需品', notes: ['同比 +5%'] },
          other_merchandise: { label: '其他', notes: ['同比 (88%)'] },
          merchandise_sales: { label: '商品销售', notes: ['同比 +6%'] },
          advertising: { label: '广告', notes: ['同比 +51%'] },
          credit_card: { label: '信用卡', notes: ['同比 (8%)'] },
          other_revenue: { label: '其他', notes: ['同比 +26%'] },
          revenue: { label: '收入', notes: ['同比 +7%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 29%', '同比 +1 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 4%', '同比 (2 个百分点)'] },
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
