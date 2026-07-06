/* ====================================================================
 *  DiDi - Q4 FY25 income statement (RMB B)
 *  Reconstructed from input/processed/didi-q4-fy25.png as a fixed
 *  d3-sankey layout with reused whitelisted Didi raster annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const ORANGE = '#ff7d41';
  const ORANGE_LINK = '#f7bca2';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const DARK = '#5b5b5b';
  const NOTE = '#818181';
  const WHITE = '#ffffff';

  const kpiCard = (x, y, width, height, content) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="28" fill="${ORANGE}"/>
      ${content}
    </g>`;

  const annotations = (L) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <text x="328" y="288" text-anchor="middle" font-size="41" font-weight="800" fill="${TITLE}">${L.inRmb}</text>
      ${kpiCard(
        154,
        1200,
        259,
        150,
        `
          <text x="283" y="1253" text-anchor="middle" font-size="29" font-weight="800" fill="${WHITE}">${L.seg1Name}</text>
          <text x="283" y="1296" text-anchor="middle" font-size="36" font-weight="500" fill="${WHITE}">4.8B</text>
          <text x="283" y="1329" text-anchor="middle" font-size="28" font-weight="500" fill="${WHITE}">${L.seg1Yoy}</text>
        `
      )}
      ${kpiCard(
        427,
        1200,
        239,
        150,
        `
          <text x="546" y="1253" text-anchor="middle" font-size="29" font-weight="800" fill="${WHITE}">${L.seg2Name}</text>
          <text x="546" y="1296" text-anchor="middle" font-size="36" font-weight="500" fill="${WHITE}">${L.seg2Val}</text>
          <text x="546" y="1329" text-anchor="middle" font-size="28" font-weight="500" fill="${WHITE}">${L.seg2Yoy}</text>
        `
      )}
      <text x="873" y="1286" text-anchor="middle" font-size="27" font-weight="400" fill="${NOTE}">${L.gtvNote}</text>
    </g>`;

  const annotationsEn = annotations({
    inRmb: 'in RMB',
    seg1Name: 'Transactions',
    seg1Yoy: '+14% Y/Y',
    seg2Name: 'Core GTV',
    seg2Val: 'RMB 123.8B',
    seg2Yoy: '+20% Y/Y',
    gtvNote: 'GTV = Gross Transaction Value',
  });

  const annotationsZh = annotations({
    inRmb: '单位：人民币',
    seg1Name: '交易笔数',
    seg1Yoy: '同比 +14%',
    seg2Name: '核心 GTV',
    seg2Val: 'RMB 123.8B',
    seg2Yoy: '同比 +20%',
    gtvNote: 'GTV = 交易总额',
  });

  const labelText = {
    en: {
      chinaValue: '51.7B',
      chinaYoy: '+9% Y/Y',
      chinaName: 'China Mobility',
      chinaMargin: '5% adjusted margin',
      chinaMarginYoy: '+0pp Y/Y',
      intlValue: '4.4B',
      intlYoy: '+47% Y/Y',
      intlName: 'International',
      intlMargin: '(78%) adjusted margin',
      intlMarginYoy: '(54pp) Y/Y',
      otherValue: '2.3B',
      otherYoy: '(8%) Y/Y',
      otherName: 'Other initiatives',
      otherMargin: '(56%) adjusted margin',
      otherMarginYoy: '(10pp) Y/Y',
      revenue: 'Revenue',
      revenueValue: '58.4B',
      revenueYoy: '+10% Y/Y',
      gross: 'Gross profit',
      grossValue: '11.2B',
      grossMargin: '19% margin',
      grossYoy: '+1pp Y/Y',
      costOf: 'Cost of',
      revenueWord: 'revenue',
      other: 'Other',
      operating: 'Operating',
      loss: 'loss',
      lossMargin: '(1%) margin',
      lossYoy: '(4pp) Y/Y',
      expenses: 'expenses',
      sm: 'S&M (6.2B)',
      smPct: '11% of revenue',
      smYoy: '+7pp Y/Y',
      ga: 'G&A (3.3B)',
      gaPct: '6% of revenue',
      gaYoy: '+2pp Y/Y',
      rnd: 'R&D (2.5B)',
      rndPct: '4% of revenue',
      rndYoy: '+0pp Y/Y',
      operations: 'Operations (2.4B)',
      operationsPct: '4% of revenue',
      operationsYoy: '+1pp Y/Y',
    },
    zh: {
      chinaValue: '51.7B',
      chinaYoy: '同比 +9%',
      chinaName: '中国出行',
      chinaMargin: '经调整利润率 5%',
      chinaMarginYoy: '同比 +0 个百分点',
      intlValue: '4.4B',
      intlYoy: '同比 +47%',
      intlName: '国际业务',
      intlMargin: '经调整利润率 (78%)',
      intlMarginYoy: '同比 (54 个百分点)',
      otherValue: '2.3B',
      otherYoy: '同比 (8%)',
      otherName: '其他新业务',
      otherMargin: '经调整利润率 (56%)',
      otherMarginYoy: '同比 (10 个百分点)',
      revenue: '收入',
      revenueValue: '58.4B',
      revenueYoy: '同比 +10%',
      gross: '毛利润',
      grossValue: '11.2B',
      grossMargin: '毛利率 19%',
      grossYoy: '同比 +1 个百分点',
      costOf: '收入',
      revenueWord: '成本',
      other: '其他',
      operating: '营业',
      loss: '亏损',
      lossMargin: '利润率 (1%)',
      lossYoy: '同比 (4 个百分点)',
      expenses: '费用',
      sm: '销售与营销 (6.2B)',
      smPct: '占收入 11%',
      smYoy: '同比 +7 个百分点',
      ga: '一般及行政 (3.3B)',
      gaPct: '占收入 6%',
      gaYoy: '同比 +2 个百分点',
      rnd: '研发 (2.5B)',
      rndPct: '占收入 4%',
      rndYoy: '同比 +0 个百分点',
      operations: '运营 (2.4B)',
      operationsPct: '占收入 4%',
      operationsYoy: '同比 +1 个百分点',
    },
  };

  const makeLabels = (L) => ({
    china_mobility: {
      blocks: [
        {
          x: 434, top: 405, anchor: 'middle', lineGap: 12,
          lines: [
            { text: L.chinaValue, size: 36, weight: 400 },
            { text: L.chinaYoy, size: 27, weight: 400, color: NOTE },
          ],
        },
        {
          x: 222, top: 655, anchor: 'middle', lineGap: 11,
          lines: [
            { text: L.chinaName, size: 37, weight: 800 },
            { text: L.chinaMargin, size: 27, weight: 400, color: NOTE },
            { text: L.chinaMarginYoy, size: 27, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    international: {
      blocks: [
        {
          x: 438, top: 868, anchor: 'middle', lineGap: 12,
          lines: [
            { text: L.intlValue, size: 36, weight: 400 },
            { text: L.intlYoy, size: 27, weight: 400, color: NOTE },
          ],
        },
        {
          x: 213, top: 905, anchor: 'middle', lineGap: 11,
          lines: [
            { text: L.intlName, size: 37, weight: 800 },
            { text: L.intlMargin, size: 27, weight: 400, color: NOTE },
            { text: L.intlMarginYoy, size: 27, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    other_initiatives: {
      blocks: [
        {
          x: 439, top: 1033, anchor: 'middle', lineGap: 12,
          lines: [
            { text: L.otherValue, size: 36, weight: 400 },
            { text: L.otherYoy, size: 27, weight: 400, color: NOTE },
          ],
        },
        {
          x: 206, top: 1063, anchor: 'middle', lineGap: 11,
          lines: [
            { text: L.otherName, size: 37, weight: 800 },
            { text: L.otherMargin, size: 27, weight: 400, color: NOTE },
            { text: L.otherMarginYoy, size: 27, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    revenue: {
      blocks: [
        {
          x: 900, top: 468, anchor: 'middle', lineGap: 12,
          lines: [
            { text: L.revenue, size: 37, weight: 800 },
            { text: L.revenueValue, size: 36, weight: 400 },
            { text: L.revenueYoy, size: 27, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    gross_profit: {
      blocks: [
        {
          x: 1365, top: 309, anchor: 'middle', lineGap: 14,
          lines: [
            { text: L.gross, size: 37, weight: 800 },
            { text: L.grossValue, size: 36, weight: 400 },
            { text: L.grossMargin, size: 27, weight: 400, color: NOTE },
            { text: L.grossYoy, size: 27, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    cost_of_revenue: {
      blocks: [
        {
          x: 1366, top: 1148, anchor: 'middle', lineGap: 11,
          lines: [
            { text: L.costOf, size: 37, weight: 800 },
            { text: L.revenueWord, size: 37, weight: 800 },
            { text: '$value', size: 36, weight: 400 },
          ],
        },
      ],
    },
    other_income: {
      blocks: [
        {
          x: 1653, top: 448, anchor: 'middle', lineGap: 9,
          lines: [
            { text: L.other, size: 32, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
          ],
        },
      ],
    },
    operating_loss: {
      blocks: [
        {
          x: 1635, top: 850, anchor: 'middle', lineGap: 11,
          lines: [
            { text: L.operating, size: 37, weight: 800 },
            { text: L.loss, size: 37, weight: 800 },
            { text: '$value', size: 36, weight: 400 },
            { text: L.lossMargin, size: 27, weight: 400, color: NOTE },
            { text: L.lossYoy, size: 27, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    operating_expenses: {
      blocks: [
        {
          x: 1836, top: 454, anchor: 'middle', lineGap: 12,
          lines: [
            { text: L.operating, size: 37, weight: 800 },
            { text: L.expenses, size: 37, weight: 800 },
            { text: '$value', size: 36, weight: 400 },
          ],
        },
      ],
    },
    sm: {
      blocks: [
        {
          x: 2492, top: 295, anchor: 'middle', lineGap: 11,
          lines: [
            { text: L.sm, size: 30, weight: 800 },
            { text: L.smPct, size: 27, weight: 400, color: NOTE },
            { text: L.smYoy, size: 27, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    ga: {
      blocks: [
        {
          x: 2486, top: 585, anchor: 'middle', lineGap: 11,
          lines: [
            { text: L.ga, size: 30, weight: 800 },
            { text: L.gaPct, size: 27, weight: 400, color: NOTE },
            { text: L.gaYoy, size: 27, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    rnd: {
      blocks: [
        {
          x: 2486, top: 855, anchor: 'middle', lineGap: 11,
          lines: [
            { text: L.rnd, size: 30, weight: 800 },
            { text: L.rndPct, size: 27, weight: 400, color: NOTE },
            { text: L.rndYoy, size: 27, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    operations: {
      blocks: [
        {
          x: 2492, top: 1089, anchor: 'middle', lineGap: 11,
          lines: [
            { text: L.operations, size: 30, weight: 800 },
            { text: L.operationsPct, size: 27, weight: 400, color: NOTE },
            { text: L.operationsYoy, size: 27, weight: 400, color: NOTE },
          ],
        },
      ],
    },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'didi-q4-fy25',
    name: 'DiDi · Q4 FY25',
    company: 'DiDi',
    meta: {
      company: 'DiDi',
      title: 'Didi Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/didi-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 203,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 1957,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      allowRasterAnnotations: true,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: ORANGE, label: DARK },
        hub: { node: ORANGE, label: DARK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: ORANGE_LINK,
        hub: ORANGE_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 37, value: 36, note: 27, lineGap: 11 },
    },
    annotationsSvg: annotationsEn,
    rasterAnnotations: [
      {
        key: 'company-logo',
        href: 'data/assets/raster-annotations/didi/company-logo.png',
        x: 565,
        y: 262,
        width: 530,
        height: 172,
      },
      {
        key: 'china-mobility-tile',
        href: 'data/assets/raster-annotations/didi/china-mobility-tile.png',
        x: 139,
        y: 490,
        width: 176,
        height: 146,
      },
    ],

    layout: {
      nodes: {
        china_mobility: { x: 398, y: 499, width: 71, height: 347 },
        international: { x: 398, y: 970, width: 71, height: 30 },
        other_initiatives: { x: 398, y: 1130, width: 71, height: 15 },
        revenue: { x: 864, y: 618, width: 72, height: 392 },
        gross_profit: { x: 1331, y: 499, width: 72, height: 75 },
        cost_of_revenue: { x: 1331, y: 822, width: 72, height: 317 },
        other_income: { x: 1617, y: 539, width: 72, height: 3 },
        operating_loss: { x: 1597, y: 822, width: 72, height: 18 },
        operating_expenses: { x: 1799, y: 616, width: 72, height: 96 },
        sm: { x: 2266, y: 295, width: 72, height: 41 },
        ga: { x: 2266, y: 585, width: 72, height: 22 },
        rnd: { x: 2266, y: 855, width: 72, height: 17 },
        operations: { x: 2266, y: 1089, width: 72, height: 16 },
      },
      labels: makeLabels(labelText.en),
    },

    nodes: [
      { id: 'china_mobility', col: 0, order: 0, type: 'source', label: 'China Mobility', value: 51.7, valueText: '51.7B', notes: ['+9% Y/Y', '5% adjusted margin', '+0pp Y/Y'], color: ORANGE, labelColor: DARK, linkTint: ORANGE_LINK },
      { id: 'international', col: 0, order: 1, type: 'source', label: 'International', value: 4.4, valueText: '4.4B', notes: ['+47% Y/Y', '(78%) adjusted margin', '(54pp) Y/Y'], color: ORANGE, labelColor: DARK, linkTint: ORANGE_LINK },
      { id: 'other_initiatives', col: 0, order: 2, type: 'source', label: 'Other initiatives', value: 2.3, valueText: '2.3B', notes: ['(8%) Y/Y', '(56%) adjusted margin', '(10pp) Y/Y'], color: ORANGE, labelColor: DARK, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 58.4, valueText: '58.4B', notes: ['+10% Y/Y'], color: ORANGE, labelColor: DARK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 11.2, valueText: '11.2B', notes: ['19% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 47.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 3, order: 0, type: 'profit', label: 'Other', value: 0.5, valueText: '0.5B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_loss', col: 3, order: 1, type: 'cost', label: ['Operating', 'loss'], value: -2.7, notes: ['(1%) margin', '(4pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 14.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 0, type: 'cost', label: 'S&M', value: 6.2, valueText: '(6.2B)', notes: ['11% of revenue', '+7pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 1, type: 'cost', label: 'G&A', value: 3.3, valueText: '(3.3B)', notes: ['6% of revenue', '+2pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 2.5, valueText: '(2.5B)', notes: ['4% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operations', col: 5, order: 3, type: 'cost', label: 'Operations', value: 2.4, valueText: '(2.4B)', notes: ['4% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'china_mobility', target: 'revenue', value: 51.7, width: 347, sourceOrder: 0, targetOrder: 0 },
      { source: 'international', target: 'revenue', value: 4.4, width: 30, sourceOrder: 0, targetOrder: 1 },
      { source: 'other_initiatives', target: 'revenue', value: 2.3, width: 15, sourceOrder: 0, targetOrder: 2 },

      { source: 'revenue', target: 'gross_profit', value: 11.2, width: 75, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 47.2, width: 317, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },

      { source: 'gross_profit', target: 'operating_expenses', value: 11.2, width: 75, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK },
      {
        source: 'other_income', target: 'operating_expenses', value: 0.5, width: 3,
        sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK,
        y0: 541, y1: 618,
        curve: { x0: 1689, x1: 1799, c1x: 1724, c2x: 1762, c1y: 541, c2y: 618 },
      },
      {
        source: 'operating_loss', target: 'operating_expenses', value: 2.7, width: 18,
        sourceOrder: 0, targetOrder: 2, linkTint: RED_LINK,
        y0: 831, y1: 703,
        curve: { x0: 1669, x1: 1799, c1x: 1715, c2x: 1760, c1y: 831, c2y: 703 },
      },

      { source: 'operating_expenses', target: 'sm', value: 6.2, width: 41, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 3.3, width: 22, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 2.5, width: 17, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'operations', value: 2.4, width: 16, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'DiDi · 2025 财年第四季度',
        meta: {
          title: 'Didi 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          titleSize: 112,
          titleTextLength: 1750,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          china_mobility: { label: '中国出行', notes: ['同比 +9%', '经调整利润率 5%', '同比 +0 个百分点'] },
          international: { label: '国际业务', notes: ['同比 +47%', '经调整利润率 (78%)', '同比 (54 个百分点)'] },
          other_initiatives: { label: '其他新业务', notes: ['同比 (8%)', '经调整利润率 (56%)', '同比 (10 个百分点)'] },
          revenue: { label: '收入', notes: ['同比 +10%'] },
          gross_profit: { label: '毛利润', notes: ['毛利率 19%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          other_income: { label: '其他' },
          operating_loss: { label: ['营业', '亏损'], notes: ['利润率 (1%)', '同比 (4 个百分点)'] },
          operating_expenses: { label: ['营业', '费用'] },
          sm: { label: '销售与营销', notes: ['占收入 11%', '同比 +7 个百分点'] },
          ga: { label: '一般及行政', notes: ['占收入 6%', '同比 +2 个百分点'] },
          rnd: { label: '研发', notes: ['占收入 4%', '同比 +0 个百分点'] },
          operations: { label: '运营', notes: ['占收入 4%', '同比 +1 个百分点'] },
        },
        layout: {
          labels: makeLabels(labelText.zh),
        },
      },
    },
  });
})();
