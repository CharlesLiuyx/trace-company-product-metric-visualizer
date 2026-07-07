/* ====================================================================
 *  Uber - Q4 FY25 income statement ($B)
 *  Reconstructed from input/processed/uber-q4-fy25.png as a fixed d3-sankey
 *  layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const BLACK = '#000000';
  const TITLE = '#155077';
  const GREEN = '#289321';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9bce98';
  const GREEN_GUIDE = '#b7d8b6';
  const RED = '#d40000';
  const RED_LABEL = '#8f1200';
  const RED_LINK = '#e48083';
  const GRAY_LINK = '#8f8f8f';
  const NOTE = '#666666';
  const RIGHT_COST_LABEL_X = 2375;

  const card = (x, width, title, value, note, extra = '') => `
    <g>
      <rect x="${x}" y="1163" width="${width}" height="148" rx="18" fill="#000000"/>
      <text x="${x + width / 2}" y="1216" text-anchor="middle" font-size="29" font-weight="800" fill="#ffffff">${title}</text>
      ${value ? `<text x="${x + width / 2}" y="1255" text-anchor="middle" font-size="29" font-weight="500" fill="#ffffff">${value}</text>` : ''}
      ${note ? `<text x="${x + width / 2}" y="1287" text-anchor="middle" font-size="23" font-weight="500" fill="#ffffff">${note}</text>` : ''}
      ${extra}
    </g>`;

  const annotations = (L) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <rect x="157" y="355" width="113" height="113" rx="15" fill="#000000"/>
      <text x="213" y="427" text-anchor="middle" font-family="Arial,sans-serif" font-size="39" font-weight="500" fill="#ffffff">Uber</text>

      <text x="84" y="804" font-family="Arial,sans-serif" font-size="57" font-weight="500" fill="#001f28">Uber</text>
      <text x="218" y="804" font-family="Arial,sans-serif" font-size="57" font-weight="800" fill="#09c64f">Eats</text>
      <text x="84" y="1073" font-family="Arial,sans-serif" font-size="48" font-weight="500" fill="#000000">Uber Freight</text>

      ${card(31, 157, L.trips, '3.8B', L.tripsYoy)}
      ${card(194, 170, 'MAPC', '202M', L.mapcYoy)}
      ${card(371, 330, L.grossBookings, '$54.1B', L.grossBookingsYoy)}
      ${card(
        709,
        379,
        L.takeRate,
        '',
        '',
        `
          <text x="${L.takeRateX}" y="1254" font-size="${L.takeRateSize}" font-weight="500" fill="#ffffff">${L.mobilityTakeRate}</text>
          <text x="${L.takeRateX}" y="1287" font-size="${L.takeRateSize}" font-weight="500" fill="#ffffff">${L.deliveryTakeRate}</text>
        `
      )}
      <text x="85" y="1348" font-size="29" font-weight="500" fill="${NOTE}">${L.mapcFootnote}</text>
    </g>`;

  const annotationsEn = annotations({
    taxBenefit: 'Tax benefit',
    trips: 'Trips',
    tripsYoy: '+22% Y/Y',
    mapcYoy: '+18% Y/Y',
    grossBookings: 'Gross Bookings',
    grossBookingsYoy: '+22% Y/Y',
    takeRate: 'Take rate',
    takeRateX: 741,
    takeRateSize: 27,
    mobilityTakeRate: 'Mobility 29.9% (-0.4pp Y/Y)',
    deliveryTakeRate: 'Delivery 19.2% (+0.5pp Y/Y)',
    mapcFootnote: 'MAPC = Monthly active users completing ride or delivery',
  });

  const annotationsZh = annotations({
    taxBenefit: '税收收益',
    trips: '行程',
    tripsYoy: '同比 +22%',
    mapcYoy: '同比 +18%',
    grossBookings: '总预订额',
    grossBookingsYoy: '同比 +22%',
    takeRate: '抽成率',
    takeRateX: 737,
    takeRateSize: 25,
    mobilityTakeRate: '出行 29.9%（-0.4 个百分点）',
    deliveryTakeRate: '配送 19.2%（+0.5 个百分点）',
    mapcFootnote: 'MAPC = 完成出行或配送的月活跃用户',
  });

  const labelText = {
    en: {
      mobilityYoy: '+19% Y/Y',
      mobilityName: 'Mobility',
      mobilityMargin: '27% adjusted margin',
      mobilityMarginYoy: '+1pp Y/Y',
      deliveryYoy: '+30% Y/Y',
      deliveryName: 'Delivery',
      deliveryMargin: '21% adjusted margin',
      deliveryMarginYoy: '+1pp Y/Y',
      freightYoy: '(0%) Y/Y',
      freightMargin: '0% adjusted margin',
      freightMarginYoy: '+2pp Y/Y',
      revenue: 'Revenue',
      revenueYoy: '+20% Y/Y',
      grossProfit: 'Gross profit',
      grossMargin: '40% margin',
      grossYoy: '+0pp Y/Y',
      costOf: 'Cost of',
      revenueWord: 'revenue',
      operatingProfit: 'Operating profit',
      operatingMargin: '12% margin',
      operatingYoy: '+6pp Y/Y',
      taxBenefit: 'Tax benefit',
      operating: 'Operating',
      expenses: 'expenses',
      netProfit: 'Net profit',
      other: 'Other',
      sm: 'S&M ($1.4B)',
      smPct: '9% of revenue',
      smYoy: '(1pp) Y/Y',
      rnd: 'R&D ($0.9B)',
      rndPct: '6% of revenue',
      rndYoy: '(0pp) Y/Y',
      operations: 'Operations ($0.8B)',
      operationsPct: '5% of revenue',
      operationsYoy: '(0pp) Y/Y',
      ga: 'G&A ($0.7B)',
      gaPct: '5% of revenue',
      gaYoy: '(4pp) Y/Y',
      da: 'D&A ($0.2B)',
      daPct: '1% of revenue',
      daYoy: '(0pp) Y/Y',
    },
    zh: {
      mobilityYoy: '同比 +19%',
      mobilityName: '出行',
      mobilityMargin: '调整后利润率 27%',
      mobilityMarginYoy: '同比 +1 个百分点',
      deliveryYoy: '同比 +30%',
      deliveryName: '配送',
      deliveryMargin: '调整后利润率 21%',
      deliveryMarginYoy: '同比 +1 个百分点',
      freightYoy: '同比 (0%)',
      freightMargin: '调整后利润率 0%',
      freightMarginYoy: '同比 +2 个百分点',
      revenue: '收入',
      revenueYoy: '同比 +20%',
      grossProfit: '毛利润',
      grossMargin: '利润率 40%',
      grossYoy: '同比 +0 个百分点',
      costOf: '收入',
      revenueWord: '成本',
      operatingProfit: '营业利润',
      operatingMargin: '利润率 12%',
      operatingYoy: '同比 +6 个百分点',
      taxBenefit: '税收收益',
      operating: '营业',
      expenses: '费用',
      netProfit: '净利润',
      other: '其他',
      sm: '销售与市场 ($1.4B)',
      smPct: '占收入 9%',
      smYoy: '同比 (1 个百分点)',
      rnd: '研发 ($0.9B)',
      rndPct: '占收入 6%',
      rndYoy: '同比 (0 个百分点)',
      operations: '运营 ($0.8B)',
      operationsPct: '占收入 5%',
      operationsYoy: '同比 (0 个百分点)',
      ga: '管理费用 ($0.7B)',
      gaPct: '占收入 5%',
      gaYoy: '同比 (4 个百分点)',
      da: '折旧与摊销 ($0.2B)',
      daPct: '占收入 1%',
      daYoy: '同比 (0 个百分点)',
    },
  };

  const makeLabels = (L) => ({
    mobility: {
      blocks: [
        {
          x: 410, top: 292, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: L.mobilityYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 185, top: 482, anchor: 'middle', lineGap: 9,
          lines: [
            { text: L.mobilityName, size: 41, weight: 800 },
            { text: L.mobilityMargin, size: 29, weight: 400, color: NOTE },
            { text: L.mobilityMarginYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    delivery: {
      blocks: [
        {
          x: 410, top: 696, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: L.deliveryYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 203, top: 806, anchor: 'middle', lineGap: 9,
          lines: [
            { text: L.deliveryName, size: 41, weight: 800 },
            { text: L.deliveryMargin, size: 29, weight: 400, color: NOTE },
            { text: L.deliveryMarginYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    freight: {
      blocks: [
        {
          x: 410, top: 1002, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: L.freightYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 184, top: 1080, anchor: 'middle', lineGap: 9,
          lines: [
            { text: L.freightMargin, size: 29, weight: 400, color: NOTE },
            { text: L.freightMarginYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    revenue: {
      blocks: [
        {
          x: 792, top: 485, anchor: 'start', lineGap: 9,
          lines: [
            { text: L.revenue, size: 42, weight: 800 },
            { text: '$value', size: 40, weight: 400 },
            { text: L.revenueYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    gross_profit: {
      blocks: [
        {
          x: 1345, top: 335, anchor: 'middle', lineGap: 9,
          lines: [
            { text: L.grossProfit, size: 38, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: L.grossMargin, size: 29, weight: 400, color: NOTE },
            { text: L.grossYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    cost_of_revenue: {
      blocks: [
        {
          x: 1345, top: 1146, anchor: 'middle', lineGap: 8,
          lines: [
            { text: L.costOf, size: 36, weight: 800 },
            { text: L.revenueWord, size: 36, weight: 800 },
            { text: '$value', size: 37, weight: 400 },
          ],
        },
      ],
    },
    operating_profit: {
      blocks: [
        {
          x: 1812, top: 235, anchor: 'middle', lineGap: 9,
          lines: [
            { text: L.operatingProfit, size: 38, weight: 800 },
            { text: '$value', size: 40, weight: 400 },
            { text: L.operatingMargin, size: 29, weight: 400, color: NOTE },
            { text: L.operatingYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    operating_expenses: {
      blocks: [
        {
          x: 1811, top: 793, anchor: 'middle', lineGap: 8,
          lines: [
            { text: L.operating, size: 38, weight: 800 },
            { text: L.expenses, size: 38, weight: 800 },
            { text: '$value', size: 38, weight: 400 },
          ],
        },
      ],
    },
    tax_benefit: {
      blocks: [
        {
          x: 2162, top: 392, anchor: 'middle', lineGap: 16,
          lines: [
            { text: L.taxBenefit, size: 32, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 33, weight: 400, color: GREEN_LABEL },
          ],
        },
      ],
    },
    net_profit: {
      blocks: [
        {
          x: 2365, top: 275, anchor: 'start', lineGap: 10,
          lines: [
            { text: L.netProfit, size: 38, weight: 800 },
            { text: '$value', size: 40, weight: 400 },
          ],
        },
      ],
    },
    other: {
      blocks: [
        {
          x: 2410, top: 492, anchor: 'start', lineGap: 10,
          lines: [
            { text: L.other, size: 32, weight: 800 },
            { text: '$value', size: 32, weight: 400 },
          ],
        },
      ],
    },
    sm: {
      blocks: [
        {
          x: RIGHT_COST_LABEL_X, top: 701, anchor: 'start', lineGap: 10,
          lines: [
            { text: L.sm, size: 32, weight: 800 },
            { text: L.smPct, size: 29, weight: 400, color: NOTE },
            { text: L.smYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    rnd: {
      blocks: [
        {
          x: RIGHT_COST_LABEL_X, top: 849, anchor: 'start', lineGap: 10,
          lines: [
            { text: L.rnd, size: 32, weight: 800 },
            { text: L.rndPct, size: 29, weight: 400, color: NOTE },
            { text: L.rndYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    operations: {
      blocks: [
        {
          x: 2328, top: 1006, anchor: 'start', lineGap: 10,
          lines: [
            { text: L.operations, size: 31, weight: 800 },
            { text: L.operationsPct, size: 29, weight: 400, color: NOTE },
            { text: L.operationsYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    ga: {
      blocks: [
        {
          x: RIGHT_COST_LABEL_X, top: 1154, anchor: 'start', lineGap: 10,
          lines: [
            { text: L.ga, size: 32, weight: 800 },
            { text: L.gaPct, size: 29, weight: 400, color: NOTE },
            { text: L.gaYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    da: {
      blocks: [
        {
          x: RIGHT_COST_LABEL_X, top: 1297, anchor: 'start', lineGap: 10,
          lines: [
            { text: L.da, size: 32, weight: 800 },
            { text: L.daPct, size: 29, weight: 400, color: NOTE },
            { text: L.daYoy, size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'uber-q4-fy25',
    name: 'Uber - Q4 FY25',
    meta: {
      title: 'Uber Q4 FY25 Income Statement',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/uber-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 123,
      titleWeight: 700,
      titleTextLength: 2025,
      logoWidth: 470,
      logoHeight: 165,
      logoY: 262,
      logoViewBox: '0 0 470 165',
      logoSvg: `
        <text x="235" y="150" text-anchor="middle" font-family="Arial,sans-serif" font-size="193" font-weight="500" fill="#000000">Uber</text>
      `,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#efefef',
      titleColor: TITLE,
      noteColor: NOTE,
      palette: {
        source: { node: BLACK, label: BLACK },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: GRAY_LINK,
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      labelYOffset: -9,
    },
    annotationsSvg: annotationsEn,

    layout: {
      scale: 28.3,
      nodes: {
        mobility: { x: 375, y: 389, width: 71, height: 233 },
        delivery: { x: 375, y: 789, width: 71, height: 139 },
        freight: { x: 375, y: 1094, width: 71, height: 37 },
        revenue: { x: 842, y: 630, width: 71, height: 408 },
        gross_profit: { x: 1309, y: 523, width: 71, height: 161 },
        cost_of_revenue: { x: 1309, y: 884, width: 71, height: 247 },
        operating_profit: { x: 1776, y: 421, width: 71, height: 50 },
        operating_expenses: { x: 1776, y: 661, width: 71, height: 111 },
        tax_benefit: { x: 2120, y: 370, width: 84, height: 2 },
        net_profit: { x: 2243, y: 308, width: 72, height: 8 },
        other: { x: 2243, y: 508, width: 72, height: 42 },
        sm: { x: 2243, y: 706, width: 72, height: 39 },
        rnd: { x: 2243, y: 875, width: 72, height: 25 },
        operations: { x: 2243, y: 1035, width: 72, height: 22 },
        ga: { x: 2243, y: 1195, width: 72, height: 20 },
        da: { x: 2243, y: 1355, width: 72, height: 5 },
      },
      labels: makeLabels(labelText.en),
    },

    nodes: [
      {
        id: 'mobility', col: 0, order: 0, type: 'source',
        label: 'Mobility', value: 8.2, notes: ['+19% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'delivery', col: 0, order: 1, type: 'source',
        label: 'Delivery', value: 4.9, notes: ['+30% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'freight', col: 0, order: 2, type: 'source',
        label: 'Uber Freight', value: 1.3, notes: ['(0%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'revenue', col: 1, order: 0, type: 'hub',
        label: 'Revenue', value: 14.4, notes: ['+20% Y/Y'], color: BLACK, labelColor: BLACK,
      },
      {
        id: 'gross_profit', col: 2, order: 0, type: 'profit',
        label: 'Gross profit', value: 5.7, notes: ['40% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_revenue', col: 2, order: 1, type: 'cost',
        label: ['Cost of', 'revenue'], value: 8.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_profit', col: 3, order: 0, type: 'profit',
        label: 'Operating profit', value: 1.8, notes: ['12% margin', '+6pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'operating_expenses', col: 3, order: 1, type: 'cost',
        label: ['Operating', 'expenses'], value: 3.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'tax_benefit', col: 4, order: 0, type: 'profit',
        label: 'Tax benefit', value: 0.04, valueText: '$0.0B', color: GREEN_GUIDE, labelColor: GREEN_LABEL, linkTint: GREEN_GUIDE,
      },
      {
        id: 'net_profit', col: 4, order: 0, type: 'profit',
        label: 'Net profit', value: 0.3, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'other', col: 4, order: 1, type: 'cost',
        label: 'Other', value: 1.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'sm', col: 4, order: 2, type: 'cost',
        label: 'S&M', value: 1.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'rnd', col: 4, order: 3, type: 'cost',
        label: 'R&D', value: 0.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operations', col: 4, order: 4, type: 'cost',
        label: 'Operations', value: 0.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'ga', col: 4, order: 5, type: 'cost',
        label: 'G&A', value: 0.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'da', col: 4, order: 6, type: 'cost',
        label: 'D&A', value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
    ],

    links: [
      { source: 'mobility', target: 'revenue', value: 8.2, width: 232 },
      { source: 'delivery', target: 'revenue', value: 4.9, width: 139 },
      { source: 'freight', target: 'revenue', value: 1.3, width: 37 },

      { source: 'revenue', target: 'gross_profit', value: 5.7, width: 161 },
      { source: 'revenue', target: 'cost_of_revenue', value: 8.7, width: 247 },

      { source: 'gross_profit', target: 'operating_profit', value: 1.8, width: 50 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.9, width: 111 },

      { source: 'operating_profit', target: 'net_profit', value: 0.3, width: 8, sourceOrder: 0, targetOrder: 0 },
      {
        source: 'tax_benefit',
        target: 'net_profit',
        value: 0.04,
        width: 2,
        targetOrder: 1,
        y1: 316,
        linkTint: GREEN_GUIDE,
        curve: { c1x: 2216, c1y: 371, c2x: 2220, c2y: 316 },
      },
      { source: 'operating_profit', target: 'other', value: 1.5, width: 42, sourceOrder: 1 },

      { source: 'operating_expenses', target: 'sm', value: 1.4, width: 39, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.9, width: 25, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'operations', value: 0.8, width: 22, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'ga', value: 0.7, width: 20, sourceOrder: 3 },
      { source: 'operating_expenses', target: 'da', value: 0.2, width: 5, sourceOrder: 4 },
    ],

    i18n: {
      zh: {
        name: 'Uber · 2025 财年第四季度',
        meta: {
          title: 'Uber 2025 财年第四季度利润表',
          titleTextLength: 1780,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          mobility: { label: '出行', notes: ['同比 +19%'] },
          delivery: { label: '配送', notes: ['同比 +30%'] },
          freight: { label: 'Uber Freight 货运', notes: ['同比 (0%)'] },
          revenue: { label: '收入', notes: ['同比 +20%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 40%', '同比 +0 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 12%', '同比 +6 个百分点'] },
          operating_expenses: { label: '运营费用' },
          tax_benefit: { label: '税收收益' },
          net_profit: { label: '净利润' },
          other: { label: '其他' },
          sm: { label: '销售与市场' },
          rnd: { label: '研发' },
          operations: { label: '运营' },
          ga: { label: '管理费用' },
          da: { label: '折旧与摊销' },
        },
        layout: {
          labels: makeLabels(labelText.zh),
        },
      },
    },
  });
})();
