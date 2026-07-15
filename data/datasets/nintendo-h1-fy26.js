/* ====================================================================
 * Nintendo - H1 FY26 income statement (¥B)
 * Reconstructed from input/processed/nintendo-h1-fy26.png as a fixed
 * d3-sankey layout with validated, reused Nintendo raster annotations.
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
      <g font-family="Noto Sans,Arial,sans-serif">
        <text x="185" y="276" font-size="40" font-weight="800" fill="${TITLE}">${unitText}</text>
      </g>`;
  }

  const EN = {
    hardwareValue: ['$value', '+288% Y/Y'],
    hardwareDetail: ['Hardware', 'Switch 2', '10.4M units', '', 'Switch 1', '1.9M units', '(60%) Y/Y'],
    softwareValue: ['$value', '+0% Y/Y'],
    softwareDetail: ['Software', '82.2M units', '+17% Y/Y', '55% Digital'],
    platform: ['$value', '+120% Y/Y'],
    otherRevenue: ['$value', '(13%) Y/Y'],
    otherName: ['Other'],
    revenue: ['Revenue', '$value', '+110% Y/Y'],
    gross: ['Gross profit', '$value', '32% margin', '(25pp) Y/Y'],
    cost: ['Cost of sales', '$value'],
    operatingProfit: ['Operating profit', '$value', '10% margin', '(12pp) Y/Y'],
    operatingExpenses: ['Operating', 'expenses', '$value'],
    otherIncome: ['Other', '$value'],
    net: ['Net profit', '$value', '18% margin', '(3pp) Y/Y'],
    tax: ['Tax', '$value'],
    sga: ['Other SG&A', '$value', '10% of revenue', '(8pp) Y/Y'],
    rnd: ['R&D', '$value', '7% of revenue', '(6pp) Y/Y'],
    advertising: ['Advertising', '$value', '6% of revenue', '(1pp) Y/Y'],
  };

  const ZH = {
    hardwareValue: ['$value', '同比 +288%'],
    hardwareDetail: ['硬件', 'Switch 2 主机', '1,040 万台', '', 'Switch 1 主机', '190 万台', '同比 (60%)'],
    softwareValue: ['$value', '同比 +0%'],
    softwareDetail: ['软件', '8,220 万套', '同比 +17%', '数字版占 55%'],
    platform: ['$value', '同比 +120%'],
    otherRevenue: ['$value', '同比 (13%)'],
    otherName: ['其他'],
    revenue: ['收入', '$value', '同比 +110%'],
    gross: ['毛利润', '$value', '利润率 32%', '同比 (25 个百分点)'],
    cost: ['销售成本', '$value'],
    operatingProfit: ['营业利润', '$value', '利润率 10%', '同比 (12 个百分点)'],
    operatingExpenses: ['运营', '费用', '$value'],
    otherIncome: ['其他', '$value'],
    net: ['净利润', '$value', '利润率 18%', '同比 (3 个百分点)'],
    tax: ['税费', '$value'],
    sga: ['其他销售及管理费用', '$value', '占收入 10%', '同比 (8 个百分点)'],
    rnd: ['研发', '$value', '占收入 7%', '同比 (6 个百分点)'],
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
          { x: 399, top: 405, anchor: 'middle', lineGap: 10, lines: lines(t.hardwareValue, null, 40) },
          { x: zh ? 166 : 240, top: 535, anchor: zh ? 'start' : 'middle', lineGap: 9, lines: lines(t.hardwareDetail, null, 34) },
        ],
      },
      software: {
        blocks: [
          { x: 399, top: 890, anchor: 'middle', lineGap: 10, lines: lines(t.softwareValue, null, 40) },
          { x: 246, top: 1019, anchor: 'middle', lineGap: 9, lines: lines(t.softwareDetail, null, 34) },
        ],
      },
      dedicated_video_game_platform: {
        blocks: [
          { x: 773, top: 518, anchor: 'middle', lineGap: 10, lines: lines(t.platform, null, 40) },
        ],
      },
      other_revenue: {
        blocks: [
          { x: 773, top: 1240, anchor: 'middle', lineGap: 10, lines: lines(t.otherRevenue, null, 40) },
          { x: 690, top: 1318, anchor: 'end', lines: lines(t.otherName, null, 34) },
        ],
      },
      revenue: {
        blocks: [
          { x: 1147, top: 584, anchor: 'middle', lineGap: 10, lines: lines(t.revenue, null, 40) },
        ],
      },
      gross_profit: {
        blocks: [
          { x: 1520, top: 423, anchor: 'middle', lineGap: 9, lines: lines(t.gross, GREEN_LABEL, 40) },
        ],
      },
      cost_of_sales: {
        blocks: [
          { x: 1514, top: 1234, anchor: 'middle', lineGap: 10, lines: lines(t.cost, RED_LABEL, 34) },
        ],
      },
      operating_profit: {
        blocks: [
          { x: 1894, top: 339, anchor: 'middle', lineGap: 9, lines: lines(t.operatingProfit, GREEN_LABEL, 40) },
        ],
      },
      operating_expenses: {
        blocks: [
          { x: 1886, top: 891, anchor: 'middle', lineGap: 9, lines: lines(t.operatingExpenses, RED_LABEL, 34) },
        ],
      },
      other_income: {
        blocks: [
          { x: 2135, top: 295, anchor: 'middle', lineGap: 9, lines: lines(t.otherIncome, GREEN_LABEL, 31) },
        ],
      },
      net_profit: {
        blocks: [
          { x: 2331, top: 388, anchor: 'start', lineGap: 9, lines: lines(t.net, GREEN_LABEL, 40) },
        ],
      },
      tax: {
        blocks: [
          { x: 2424, top: 644, anchor: 'middle', lineGap: 8, lines: lines(t.tax, RED_LABEL, 31) },
        ],
      },
      other_sga: {
        blocks: [
          { x: zh ? 2458 : 2424, top: 815, anchor: 'middle', lineGap: 9, lines: lines(t.sga, RED_LABEL, zh ? 28 : 31) },
        ],
      },
      rnd: {
        blocks: [
          { x: 2424, top: 1030, anchor: 'middle', lineGap: 9, lines: lines(t.rnd, RED_LABEL, 31) },
        ],
      },
      advertising: {
        blocks: [
          { x: 2425, top: 1233, anchor: 'middle', lineGap: 9, lines: lines(t.advertising, RED_LABEL, 31) },
        ],
      },
    };
  }

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'nintendo-h1-fy26',
    name: 'Nintendo · H1 FY26',
    company: 'Nintendo',
    meta: {
      company: 'Nintendo',
      title: 'Nintendo H1 FY26 Income Statement',
      period: 'H1 FY26',
      periodNote: 'Ending Sept. 2025',
      currency: '¥',
      unit: 'B',
      decimals: 0,
      referenceImage: { src: 'input/processed/nintendo-h1-fy26.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 201,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2313,
      periodX: 1333,
      periodY: 1311,
      periodNoteY: 1354,
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
      { key: 'company-logo', href: 'data/assets/raster-annotations/nintendo/company-logo.png', x: 824, y: 245, width: 622, height: 182 },
      { key: 'switch-console-icon', href: 'data/assets/raster-annotations/nintendo/switch-console-icon-9m-fy26.png', x: 0, y: 576, width: 157, height: 176 },
      { key: 'switch-wordmark', href: 'data/assets/raster-annotations/nintendo/switch-wordmark-9m-fy26.png', x: 650, y: 427, width: 246, height: 90 },
      { key: 'mobile-store-icons', href: 'data/assets/raster-annotations/nintendo/mobile-store-icons-9m-fy26.png', x: 454, y: 1152, width: 203, height: 105 },
    ],
    layout: {
      scale: 0.37,
      nodes: {
        hardware: { x: 363, y: 507, width: 72, height: 288 },
        software: { x: 363, y: 981, width: 72, height: 104 },
        dedicated_video_game_platform: { x: 737, y: 615, width: 72, height: 395 },
        other_revenue: { x: 737, y: 1341, width: 72, height: 11 },
        revenue: { x: 1111, y: 729, width: 71, height: 406 },
        gross_profit: { x: 1484, y: 613, width: 72, height: 146 },
        cost_of_sales: { x: 1484, y: 964, width: 72, height: 257 },
        operating_profit: { x: 1858, y: 522, width: 72, height: 51 },
        operating_expenses: { x: 1858, y: 779, width: 72, height: 91 },
        other_income: { x: 2106, y: 386, width: 72, height: 44 },
        net_profit: { x: 2232, y: 401, width: 72, height: 71 },
        tax: { x: 2232, y: 671, width: 72, height: 24 },
        other_sga: { x: 2232, y: 835, width: 72, height: 37 },
        rnd: { x: 2232, y: 1060, width: 72, height: 28 },
        advertising: { x: 2232, y: 1273, width: 72, height: 21 },
      },
      labels: makeLabels(EN, false),
    },
    nodes: [
      { id: 'hardware', col: 0, order: 0, type: 'source', label: 'Hardware', value: 780, valueText: '¥780B', notes: ['+288% Y/Y', 'Switch 2: 10.4M units', 'Switch 1: 1.9M units, (60%) Y/Y'] },
      { id: 'software', col: 0, order: 1, type: 'source', label: 'Software', value: 286, valueText: '¥286B', notes: ['+0% Y/Y', '82.2M units', '+17% Y/Y', '55% Digital'] },
      { id: 'dedicated_video_game_platform', col: 1, order: 0, type: 'hub', label: 'Dedicated video game platform', value: 1066, valueText: '¥1,066B', notes: ['+120% Y/Y'] },
      { id: 'other_revenue', col: 1, order: 1, type: 'source', label: 'Other', value: 33, valueText: '¥33B', notes: ['(13%) Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 1099, valueText: '¥1,099B', notes: ['+110% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 398, valueText: '¥398B', notes: ['32% margin', '(25pp) Y/Y'] },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 701, valueText: '(¥701B)' },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 145, valueText: '¥145B', notes: ['10% margin', '(12pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: 'Operating expenses', value: 253, valueText: '(¥253B)' },
      { id: 'other_income', col: 5, order: 0, type: 'profit', label: 'Other', value: 123, valueText: '¥123B' },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 199, valueText: '¥199B', notes: ['18% margin', '(3pp) Y/Y'] },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 69, valueText: '(¥69B)' },
      { id: 'other_sga', col: 6, order: 2, type: 'cost', label: 'Other SG&A', value: 106, valueText: '(¥106B)', notes: ['10% of revenue', '(8pp) Y/Y'] },
      { id: 'rnd', col: 6, order: 3, type: 'cost', label: 'R&D', value: 82, valueText: '(¥82B)', notes: ['7% of revenue', '(6pp) Y/Y'] },
      { id: 'advertising', col: 6, order: 4, type: 'cost', label: 'Advertising', value: 65, valueText: '(¥65B)', notes: ['6% of revenue', '(1pp) Y/Y'] },
    ],
    links: [
      { source: 'hardware', target: 'dedicated_video_game_platform', value: 780, sourceWidth: 288, targetWidth: 291, targetOrder: 0 },
      { source: 'software', target: 'dedicated_video_game_platform', value: 286, sourceWidth: 104, targetWidth: 104, targetOrder: 1 },
      { source: 'dedicated_video_game_platform', target: 'revenue', value: 1066, width: 395, sourceOrder: 0, targetOrder: 0 },
      { source: 'other_revenue', target: 'revenue', value: 33, width: 11, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 398, width: 146, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_sales', value: 701, sourceWidth: 260, targetWidth: 257, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 145, width: 51, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 253, sourceWidth: 95, targetWidth: 91, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 76, width: 27, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 69, width: 24, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 123, width: 44, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'other_sga', value: 106, width: 37, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 82, width: 28, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'advertising', value: 65, sourceWidth: 26, targetWidth: 21, sourceOrder: 2 },
    ],
    i18n: {
      zh: {
        name: 'Nintendo · 2026 财年上半年',
        meta: {
          title: 'Nintendo 2026 财年上半年利润表',
          period: '2026 财年上半年',
          periodNote: '截至 2025 年 9 月',
          periodX: 1180,
          titleTextLength: 2160,
        },
        annotationsSvg: annotations('以日元计'),
        nodes: {
          hardware: { label: '硬件', notes: ['同比 +288%', 'Switch 2：1,040 万台', 'Switch 1：190 万台，同比 (60%)'] },
          software: { label: '软件', notes: ['同比 +0%', '8,220 万套', '同比 +17%', '数字版占 55%'] },
          dedicated_video_game_platform: { label: '专用游戏平台', notes: ['同比 +120%'] },
          other_revenue: { label: '其他', notes: ['同比 (13%)'] },
          revenue: { label: '收入', notes: ['同比 +110%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 32%', '同比 (25 个百分点)'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 10%', '同比 (12 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 18%', '同比 (3 个百分点)'] },
          tax: { label: '税费' },
          other_sga: { label: '其他销售及管理费用', notes: ['占收入 10%', '同比 (8 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 7%', '同比 (6 个百分点)'] },
          advertising: { label: '广告', notes: ['占收入 6%', '同比 (1 个百分点)'] },
        },
        layout: { labels: makeLabels(ZH, true) },
      },
    },
  });
})();
