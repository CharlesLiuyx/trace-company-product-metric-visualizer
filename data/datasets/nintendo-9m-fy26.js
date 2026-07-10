/* ====================================================================
 * Nintendo - 9M FY26 income statement (¥B)
 * Reconstructed from input/processed/nintendo-9m-fy26.png as a fixed
 * d3-sankey layout with validated runtime raster annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLACK = '#000000';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';

  function annotations(unitText) {
    return `
      <g font-family="Montserrat,Arial,sans-serif">
        <text x="143" y="276" font-size="40" font-weight="800" fill="${TITLE}">${unitText}</text>
      </g>`;
  }

  const EN = {
    hardwareValue: ['$value', '+213% Y/Y'],
    hardwareDetail: ['Hardware', 'Switch 2', '17.3M units', '', 'Switch 1', '3.2M units', '(66%) Y/Y'],
    softwareValue: ['$value', '+16% Y/Y'],
    softwareDetail: ['Software', '147M units', '+18% Y/Y', '50% Digital'],
    platform: ['$value', '+107% Y/Y'],
    otherRevenue: ['$value', '(10%) Y/Y'],
    otherName: ['Other'],
    revenue: ['Revenue', '$value', '+99% Y/Y'],
    gross: ['Gross profit', '$value', '37% margin', '(22pp) Y/Y'],
    cost: ['Cost of sales', '$value'],
    operatingProfit: ['Operating profit', '$value', '16% margin', '(10pp) Y/Y'],
    operatingExpenses: ['Operating', 'expenses', '$value'],
    otherIncome: ['Other', '$value'],
    net: ['Net profit', '$value', '19% margin', '(6pp) Y/Y'],
    tax: ['Tax', '$value'],
    sga: ['Other SG&A', '$value', '9% of revenue', '(6pp) Y/Y'],
    rnd: ['R&D', '$value', '7% of revenue', '(4pp) Y/Y'],
    advertising: ['Advertising', '$value', '6% of revenue', '(1pp) Y/Y'],
  };

  const ZH = {
    hardwareValue: ['$value', '同比 +213%'],
    hardwareDetail: ['硬件', 'Switch 2 主机', '1,730 万台', '', 'Switch 1 主机', '320 万台', '同比 (66%)'],
    softwareValue: ['$value', '同比 +16%'],
    softwareDetail: ['软件', '1.47 亿套', '同比 +18%', '数字版 50%'],
    platform: ['$value', '同比 +107%'],
    otherRevenue: ['$value', '同比 (10%)'],
    otherName: ['其他'],
    revenue: ['收入', '$value', '同比 +99%'],
    gross: ['毛利润', '$value', '利润率 37%', '同比 (22 个百分点)'],
    cost: ['销售成本', '$value'],
    operatingProfit: ['营业利润', '$value', '利润率 16%', '同比 (10 个百分点)'],
    operatingExpenses: ['运营', '费用', '$value'],
    otherIncome: ['其他', '$value'],
    net: ['净利润', '$value', '利润率 19%', '同比 (6 个百分点)'],
    tax: ['税费', '$value'],
    sga: ['其他销售及管理费用', '$value', '占收入 9%', '同比 (6 个百分点)'],
    rnd: ['研发', '$value', '占收入 7%', '同比 (4 个百分点)'],
    advertising: ['广告', '$value', '占收入 6%', '同比 (1 个百分点)'],
  };

  function lines(texts, nameColor, nameSize) {
    return texts.map((text, index) => ({
      text,
      size: index === 0 ? nameSize : (text === '$value' ? nameSize : 29),
      weight: index === 0 ? 800 : 400,
      color: index <= 1 && nameColor ? nameColor : (index >= 2 ? NOTE : undefined),
    }));
  }

  function makeLabels(t, zh) {
    return {
      hardware: {
        blocks: [
          { x: 399, top: 367, anchor: 'middle', lineGap: 10, lines: lines(t.hardwareValue, null, 40) },
          { x: zh ? 166 : 240, top: 487, anchor: zh ? 'start' : 'middle', lineGap: 9, lines: lines(t.hardwareDetail, null, 34) },
        ],
      },
      software: {
        blocks: [
          { x: 399, top: 890, anchor: 'middle', lineGap: 10, lines: lines(t.softwareValue, null, 40) },
          { x: 246, top: 996, anchor: 'middle', lineGap: 9, lines: lines(t.softwareDetail, null, 34) },
        ],
      },
      dedicated_video_game_platform: {
        blocks: [
          { x: 773, top: 472, anchor: 'middle', lineGap: 10, lines: lines(t.platform, null, 40) },
        ],
      },
      other_revenue: {
        blocks: [
          { x: 773, top: 1169, anchor: 'middle', lineGap: 10, lines: lines(t.otherRevenue, null, 40) },
          { x: 690, top: 1257, anchor: 'end', lines: lines(t.otherName, null, 34) },
        ],
      },
      revenue: {
        blocks: [
          { x: 1147, top: 542, anchor: 'middle', lineGap: 10, lines: lines(t.revenue, null, 40) },
        ],
      },
      gross_profit: {
        blocks: [
          { x: 1520, top: 377, anchor: 'middle', lineGap: 9, lines: lines(t.gross, GREEN_LABEL, 40) },
        ],
      },
      cost_of_sales: {
        blocks: [
          { x: 1520, top: 1264, anchor: 'middle', lineGap: 10, lines: lines(t.cost, RED_LABEL, 34) },
        ],
      },
      operating_profit: {
        blocks: [
          { x: 1894, top: 285, anchor: 'middle', lineGap: 9, lines: lines(t.operatingProfit, GREEN_LABEL, 40) },
        ],
      },
      operating_expenses: {
        blocks: [
          { x: 1894, top: 837, anchor: 'middle', lineGap: 9, lines: lines(t.operatingExpenses, RED_LABEL, 34) },
        ],
      },
      other_income: {
        blocks: [
          { x: 2142, top: 233, anchor: 'middle', lineGap: 9, lines: lines(t.otherIncome, GREEN_LABEL, 31) },
        ],
      },
      net_profit: {
        blocks: [
          { x: 2331, top: 342, anchor: 'start', lineGap: 9, lines: lines(t.net, GREEN_LABEL, 40) },
        ],
      },
      tax: {
        blocks: [
          { x: 2424, top: 588, anchor: 'middle', lineGap: 8, lines: lines(t.tax, RED_LABEL, 31) },
        ],
      },
      other_sga: {
        blocks: [
          { x: zh ? 2458 : 2424, top: 764, anchor: 'middle', lineGap: 9, lines: lines(t.sga, RED_LABEL, zh ? 28 : 31) },
        ],
      },
      rnd: {
        blocks: [
          { x: 2424, top: 955, anchor: 'middle', lineGap: 9, lines: lines(t.rnd, RED_LABEL, 31) },
        ],
      },
      advertising: {
        blocks: [
          { x: 2425, top: 1155, anchor: 'middle', lineGap: 9, lines: lines(t.advertising, RED_LABEL, 31) },
        ],
      },
    };
  }

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'nintendo-9m-fy26',
    name: 'Nintendo · 9M FY26',
    company: 'Nintendo',
    meta: {
      company: 'Nintendo',
      title: 'Nintendo 9M FY26 Income Statement',
      period: '9M FY26',
      periodNote: 'Ending Dec. 2025',
      currency: '¥',
      unit: 'B',
      decimals: 0,
      referenceImage: { src: 'input/processed/nintendo-9m-fy26.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2408,
      periodX: 1333,
      periodY: 1338,
      periodNoteY: 1381,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      interfaceAudit: { mode: 'error' },
      allowRasterAnnotations: true,
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
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations('in yen'),
    rasterAnnotations: [
      { key: 'company-logo', href: 'data/assets/raster-annotations/nintendo/company-logo.png', x: 824, y: 217, width: 622, height: 182 },
      { key: 'switch-console-icon', href: 'data/assets/raster-annotations/nintendo/switch-console-icon-9m-fy26.png', x: 0, y: 535, width: 157, height: 176 },
      { key: 'switch-wordmark', href: 'data/assets/raster-annotations/nintendo/switch-wordmark-9m-fy26.png', x: 650, y: 382, width: 246, height: 90 },
      { key: 'mobile-store-icons', href: 'data/assets/raster-annotations/nintendo/mobile-store-icons-9m-fy26.png', x: 454, y: 1152, width: 203, height: 105 },
    ],
    layout: {
      scale: 0.245,
      nodes: {
        hardware: { x: 363, y: 468, width: 72, height: 316 },
        software: { x: 363, y: 989, width: 72, height: 137 },
        dedicated_video_game_platform: { x: 737, y: 571, width: 72, height: 453 },
        other_revenue: { x: 737, y: 1270, width: 72, height: 14 },
        revenue: { x: 1111, y: 696, width: 71, height: 467 },
        gross_profit: { x: 1484, y: 563, width: 72, height: 174 },
        cost_of_sales: { x: 1484, y: 959, width: 72, height: 293 },
        operating_profit: { x: 1858, y: 469, width: 72, height: 73 },
        operating_expenses: { x: 1858, y: 716, width: 72, height: 101 },
        other_income: { x: 2106, y: 320, width: 72, height: 46 },
        net_profit: { x: 2232, y: 356, width: 72, height: 88 },
        tax: { x: 2232, y: 610, width: 72, height: 31 },
        other_sga: { x: 2232, y: 791, width: 72, height: 42 },
        rnd: { x: 2232, y: 987, width: 72, height: 31 },
        advertising: { x: 2232, y: 1190, width: 72, height: 28 },
      },
      labels: makeLabels(EN, false),
    },
    nodes: [
      { id: 'hardware', col: 0, order: 0, type: 'source', label: 'Hardware', value: 1292, valueText: '¥1,292B', notes: ['+213% Y/Y', 'Switch 2: 17.3M units', 'Switch 1: 3.2M units, (66%) Y/Y'] },
      { id: 'software', col: 0, order: 1, type: 'source', label: 'Software', value: 559, valueText: '¥559B', notes: ['+16% Y/Y', '147M units', '+18% Y/Y', '50% Digital'] },
      { id: 'dedicated_video_game_platform', col: 1, order: 0, type: 'hub', label: 'Dedicated video game platform', value: 1851, valueText: '¥1,851B', notes: ['+107% Y/Y'] },
      { id: 'other_revenue', col: 1, order: 1, type: 'source', label: 'Other', value: 55, valueText: '¥55B', notes: ['(10%) Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 1906, valueText: '¥1,906B', notes: ['+99% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 712, valueText: '¥712B', notes: ['37% margin', '(22pp) Y/Y'] },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 1193, valueText: '(¥1,193B)' },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 300, valueText: '¥300B', notes: ['16% margin', '(10pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: 'Operating expenses', value: 412, valueText: '(¥412B)' },
      { id: 'other_income', col: 5, order: 0, type: 'profit', label: 'Other', value: 188, valueText: '¥188B' },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 359, valueText: '¥359B', notes: ['19% margin', '(6pp) Y/Y'] },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 129, valueText: '(¥129B)' },
      { id: 'other_sga', col: 6, order: 2, type: 'cost', label: 'Other SG&A', value: 170, valueText: '(¥170B)', notes: ['9% of revenue', '(6pp) Y/Y'] },
      { id: 'rnd', col: 6, order: 3, type: 'cost', label: 'R&D', value: 128, valueText: '(¥128B)', notes: ['7% of revenue', '(4pp) Y/Y'] },
      { id: 'advertising', col: 6, order: 4, type: 'cost', label: 'Advertising', value: 114, valueText: '(¥114B)', notes: ['6% of revenue', '(1pp) Y/Y'] },
    ],
    links: [
      { source: 'hardware', target: 'dedicated_video_game_platform', value: 1292, width: 316, targetOrder: 0 },
      { source: 'software', target: 'dedicated_video_game_platform', value: 559, width: 137, targetOrder: 1 },
      { source: 'dedicated_video_game_platform', target: 'revenue', value: 1851, width: 453, sourceOrder: 0, targetOrder: 0 },
      { source: 'other_revenue', target: 'revenue', value: 55, width: 14, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 712, width: 174, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 1193, width: 293, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 300, width: 73, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 412, width: 101, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 171, width: 42, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 129, width: 31, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 188, width: 46, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'other_sga', value: 170, width: 42, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 128, width: 31, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'advertising', value: 114, width: 28, sourceOrder: 2 },
    ],
    i18n: {
      zh: {
        name: 'Nintendo · 2026 财年前 9 个月',
        meta: {
          title: 'Nintendo 2026 财年前 9 个月利润表',
          period: '2026 财年前 9 个月',
          periodNote: '截至 2025 年 12 月',
          periodX: 1180,
          titleTextLength: 2130,
        },
        annotationsSvg: annotations('以日元计'),
        nodes: {
          hardware: { label: '硬件', notes: ['同比 +213%', 'Switch 2：1,730 万台', 'Switch 1：320 万台，同比 (66%)'] },
          software: { label: '软件', notes: ['同比 +16%', '1.47 亿套', '同比 +18%', '数字版占 50%'] },
          dedicated_video_game_platform: { label: '专用游戏平台', notes: ['同比 +107%'] },
          other_revenue: { label: '其他', notes: ['同比 (10%)'] },
          revenue: { label: '收入', notes: ['同比 +99%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 37%', '同比 (22 个百分点)'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 16%', '同比 (10 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 19%', '同比 (6 个百分点)'] },
          tax: { label: '税费' },
          other_sga: { label: '其他销售及管理费用', notes: ['占收入 9%', '同比 (6 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 7%', '同比 (4 个百分点)'] },
          advertising: { label: '广告', notes: ['占收入 6%', '同比 (1 个百分点)'] },
        },
        layout: { labels: makeLabels(ZH, true) },
      },
    },
  });
})();
