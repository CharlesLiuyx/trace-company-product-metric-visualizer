/* Tesla Q2 FY23 income statement ($B), reconstructed from the source Sankey. */
(function () {
  const SOURCE_NODE = '#666666';
  const SOURCE_LABEL = '#5e5e5e';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const GRAY_LINK = '#b3b3b3';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const TESLA_RED = '#e51837';
  const TESLA_LOGO_PATH =
    'M12 0C7.7 0 3.9.9 1.1 2.6l1.5 2.6C5 4 8.3 3.3 12 3.3S19 4 21.4 5.2l1.5-2.6C20.1.9 16.3 0 12 0ZM6.4 6.1C8.1 5.7 9.9 5.5 12 5.5s3.9.2 5.6.6l-1.2 2.7c-.9-.2-1.8-.3-2.8-.4L12.7 24h-1.4l-.9-15.6c-1 0-1.9.2-2.8.4L6.4 6.1Z';
  const teslaPath = (window.SANKEY_BRAND && window.SANKEY_BRAND.tesla) || TESLA_LOGO_PATH;
  const businessIcons = window.SANKEY_BUSINESS_ICONS || {};

  const annotations = `
    <g transform="translate(164 526)" data-typography-role="brand" data-annotation-clearance="tesla-vehicle-stack">
      ${businessIcons.teslaVehicleStack || ''}
    </g>`;

  const labels = {
    auto_sales: {
      blocks: [
        {
          x: 474, top: 316, anchor: 'middle', lineGap: 11,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '+49% Y/Y', size: 28, weight: 400, color: NOTE },
          ],
        },
        {
          x: 277,
          top: 433,
          anchor: 'middle',
          semanticRole: 'source-offset-label',
          lines: [{ text: 'Auto sales', size: 40, weight: 800 }],
        },
      ],
    },
    regulatory_credits: {
      blocks: [
        {
          x: 475, top: 897, anchor: 'middle', lineGap: 11,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '(18%) Y/Y', size: 28, weight: 400, color: NOTE },
          ],
        },
        {
          x: 394, top: 966, anchor: 'end',
          lines: [{ text: 'Regulatory credits', size: 38, weight: 800 }],
        },
      ],
    },
    leasing: {
      blocks: [
        {
          x: 477, top: 1042, anchor: 'middle', lineGap: 11,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '(4%) Y/Y', size: 28, weight: 400, color: NOTE },
          ],
        },
        { x: 400, top: 1115, anchor: 'end', lines: [{ text: 'Leasing', size: 38, weight: 800 }] },
      ],
    },
    auto: {
      blocks: [{
        x: 847, top: 368, anchor: 'middle', lineGap: 11,
        lines: [
          { text: 'Auto', size: 39, weight: 800 },
          { text: '$value', size: 39, weight: 400 },
          { text: '+46% Y/Y', size: 28, weight: 400, color: NOTE },
        ],
      }],
    },
    energy_generation_storage: {
      blocks: [
        {
          x: 680, top: 1142, anchor: 'middle', lineGap: 11,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '+74% Y/Y', size: 28, weight: 400, color: NOTE },
          ],
        },
        {
          x: 336, top: 1224, anchor: 'middle',
          lines: [{ text: 'Energy generation & storage', size: 38, weight: 800 }],
        },
      ],
    },
    services: {
      blocks: [
        {
          x: 947, top: 1219, anchor: 'middle', lineGap: 11,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '+47% Y/Y', size: 28, weight: 400, color: NOTE },
          ],
        },
        { x: 810, top: 1327, anchor: 'middle', lines: [{ text: 'Services', size: 40, weight: 800 }] },
      ],
    },
    revenue: {
      blocks: [{
        x: 1220, top: 461, anchor: 'middle', lineGap: 11,
        lines: [
          { text: 'Revenue', size: 40, weight: 800 },
          { text: '$value', size: 39, weight: 400 },
          { text: '+47% Y/Y', size: 28, weight: 400, color: NOTE },
        ],
      }],
    },
    gross_profit: {
      blocks: [{
        x: 1587, top: 342, anchor: 'middle', lineGap: 10,
        lines: [
          { text: 'Gross profit', size: 38, weight: 800 },
          { text: '$value', size: 39, weight: 400 },
          { text: '18% margin', size: 28, weight: 400, color: NOTE },
          { text: '(7pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ],
      }],
    },
    cost_of_revenue: {
      blocks: [{
        x: 1596, top: 1225, anchor: 'middle', lineGap: 9,
        lines: [
          { text: 'Cost of', size: 38, weight: 800 },
          { text: 'revenue', size: 38, weight: 800 },
          { text: '$value', size: 37, weight: 400 },
        ],
      }],
    },
    operating_profit: {
      blocks: [{
        x: 1956, top: 288, anchor: 'middle', lineGap: 10,
        lines: [
          { text: 'Operating profit', size: 38, weight: 800 },
          { text: '$value', size: 38, weight: 400 },
          { text: '10% margin', size: 28, weight: 400, color: NOTE },
          { text: '(5pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ],
      }],
    },
    operating_expenses: {
      blocks: [{
        x: 1950, top: 724, anchor: 'middle', lineGap: 9,
        lines: [
          { text: 'Operating', size: 38, weight: 800 },
          { text: 'expenses', size: 38, weight: 800 },
          { text: '$value', size: 37, weight: 400 },
        ],
      }],
    },
    other: {
      blocks: [{
        x: 2217, top: 262, anchor: 'middle', lineGap: 8,
        lines: [
          { text: 'Other', size: 31, weight: 800 },
          { text: '$value', size: 31, weight: 400 },
        ],
      }],
    },
    interest: {
      blocks: [{
        x: 2220, top: 522, anchor: 'middle', lineGap: 8,
        lines: [
          { text: 'Interest', size: 32, weight: 800 },
          { text: '$value', size: 31, weight: 400 },
        ],
      }],
    },
    net_profit: {
      blocks: [{
        x: 2491, top: 372, anchor: 'middle', lineGap: 10,
        lines: [
          { text: 'Net profit', size: 38, weight: 800 },
          { text: '$value', size: 38, weight: 400 },
          { text: '11% margin', size: 28, weight: 400, color: NOTE },
          { text: '(3pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ],
      }],
    },
    tax: {
      blocks: [{
        x: 2487, top: 643, anchor: 'middle', lineGap: 8,
        lines: [
          { text: 'Tax', size: 31, weight: 800 },
          { text: '$value', size: 31, weight: 400 },
        ],
      }],
    },
    sga: {
      blocks: [{
        x: 2487, top: 899, anchor: 'middle', lineGap: 8,
        lines: [
          { text: 'SG&A', size: 31, weight: 800 },
          { text: '$value', size: 31, weight: 400 },
        ],
      }],
    },
    rnd: {
      blocks: [{
        x: 2487, top: 1132, anchor: 'middle', lineGap: 8,
        lines: [
          { text: 'R&D', size: 31, weight: 800 },
          { text: '$value', size: 31, weight: 400 },
        ],
      }],
    },
  };

  function localizeLabels(base, translations) {
    return Object.fromEntries(
      Object.entries(base).map(([id, value]) => {
        let textIndex = 0;
        return [
          id,
          {
            blocks: value.blocks.map((block) => ({
              ...block,
              lines: block.lines.map((line) => (
                line.text === '$value'
                  ? { ...line }
                  : { ...line, text: translations[id][textIndex++] }
              )),
            })),
          },
        ];
      })
    );
  }

  const zhLabels = localizeLabels(labels, {
    auto_sales: ['同比 +49%', '汽车销售'],
    regulatory_credits: ['同比 (18%)', '监管积分'],
    leasing: ['同比 (4%)', '租赁'],
    auto: ['汽车业务', '同比 +46%'],
    energy_generation_storage: ['同比 +74%', '能源发电与储能'],
    services: ['同比 +47%', '服务'],
    revenue: ['收入', '同比 +47%'],
    gross_profit: ['毛利润', '利润率 18%', '同比 (7 个百分点)'],
    cost_of_revenue: ['收入', '成本'],
    operating_profit: ['营业利润', '利润率 10%', '同比 (5 个百分点)'],
    operating_expenses: ['运营', '费用'],
    other: ['其他'],
    interest: ['利息'],
    net_profit: ['净利润', '利润率 11%', '同比 (3 个百分点)'],
    tax: ['税费'],
    sga: ['销售及管理'],
    rnd: ['研发'],
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tesla-q2-fy23',
    name: 'Tesla - Q2 FY23',
    company: 'Tesla',
    meta: {
      company: 'Tesla',
      title: 'Tesla Q2 FY23 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/tesla-q2-fy23.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 148,
      titleSize: 92,
      titleWeight: 800,
      titleTextLength: 2040,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 250,
      logoHeight: 215,
      logoY: 252,
      logoViewBox: '0 0 24 24',
      logoSvg: `<path d="${teslaPath}" fill="${TESLA_RED}"/>`,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: SOURCE_NODE, label: SOURCE_LABEL },
        hub: { node: SOURCE_NODE, label: SOURCE_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations,
    layout: {
      scale: 21.1,
      nodes: {
        auto_sales: { x: 439, y: 409, width: 72, height: 432 },
        regulatory_credits: { x: 439, y: 991, width: 72, height: 3 },
        leasing: { x: 439, y: 1137, width: 72, height: 10 },
        auto: { x: 813, y: 509, width: 72, height: 449 },
        energy_generation_storage: { x: 645, y: 1231, width: 72, height: 30 },
        services: { x: 915, y: 1326, width: 72, height: 44 },
        revenue: { x: 1184, y: 607, width: 72, height: 526 },
        gross_profit: { x: 1553, y: 525, width: 72, height: 94 },
        cost_of_revenue: { x: 1558, y: 770, width: 72, height: 432 },
        operating_profit: { x: 1924, y: 469, width: 72, height: 49 },
        operating_expenses: { x: 1922, y: 658, width: 72, height: 42 },
        other: { x: 2185, y: 345, width: 72, height: 5 },
        interest: { x: 2182, y: 502, width: 72, height: 2 },
        net_profit: { x: 2307, y: 379, width: 72, height: 54 },
        tax: { x: 2307, y: 660, width: 72, height: 4 },
        sga: { x: 2307, y: 918, width: 72, height: 24 },
        rnd: { x: 2307, y: 1154, width: 72, height: 19 },
      },
      labels,
    },
    nodes: [
      { id: 'auto_sales', col: 0, order: 0, type: 'source', label: 'Auto sales', value: 20.4, notes: ['+49% Y/Y'] },
      {
        id: 'regulatory_credits',
        col: 0,
        order: 1,
        type: 'source',
        label: 'Regulatory credits',
        value: 0.3,
        notes: ['(18%) Y/Y'],
      },
      { id: 'leasing', col: 0, order: 2, type: 'source', label: 'Leasing', value: 0.6, notes: ['(4%) Y/Y'] },
      { id: 'auto', col: 1, order: 0, type: 'source', label: 'Auto', value: 21.3, notes: ['+46% Y/Y'] },
      {
        id: 'energy_generation_storage',
        col: 1,
        order: 1,
        type: 'source',
        label: 'Energy generation & storage',
        value: 1.5,
        notes: ['+74% Y/Y'],
      },
      { id: 'services', col: 1, order: 2, type: 'source', label: 'Services', value: 2.2, notes: ['+47% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 24.9, notes: ['+47% Y/Y'] },
      {
        id: 'gross_profit',
        col: 3,
        order: 0,
        type: 'profit',
        label: 'Gross profit',
        value: 4.5,
        notes: ['18% margin', '(7pp) Y/Y'],
      },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 20.4 },
      {
        id: 'operating_profit',
        col: 4,
        order: 0,
        type: 'profit',
        label: 'Operating profit',
        value: 2.4,
        notes: ['10% margin', '(5pp) Y/Y'],
      },
      {
        id: 'operating_expenses',
        col: 4,
        order: 1,
        type: 'cost',
        label: ['Operating', 'expenses'],
        value: 2.1,
      },
      { id: 'other', col: 5, order: 0, type: 'profit', label: 'Other', value: 0.3 },
      { id: 'interest', col: 5, order: 1, type: 'profit', label: 'Interest', value: 0.2 },
      {
        id: 'net_profit',
        col: 6,
        order: 0,
        type: 'profit',
        label: 'Net profit',
        value: 2.6,
        notes: ['11% margin', '(3pp) Y/Y'],
      },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.3 },
      { id: 'sga', col: 6, order: 2, type: 'cost', label: 'SG&A', value: 1.2 },
      { id: 'rnd', col: 6, order: 3, type: 'cost', label: 'R&D', value: 0.9 },
    ],
    links: [
      {
        source: 'auto_sales',
        target: 'auto',
        value: 20.4,
        sourceWidth: 432,
        targetWidth: 432,
        targetOrder: 0,
        y1: 725,
      },
      {
        source: 'regulatory_credits',
        target: 'auto',
        value: 0.3,
        sourceWidth: 3,
        targetWidth: 4,
        targetOrder: 1,
        y1: 943,
      },
      { source: 'leasing', target: 'auto', value: 0.6, sourceWidth: 10, targetWidth: 13, targetOrder: 2, y1: 951.5 },
      { source: 'auto', target: 'revenue', value: 21.3, sourceWidth: 449, targetWidth: 449, targetOrder: 0, y1: 831.5 },
      {
        source: 'energy_generation_storage',
        target: 'revenue',
        value: 1.5,
        sourceWidth: 30,
        targetWidth: 31,
        targetOrder: 1,
        y1: 1071.5,
      },
      { source: 'services', target: 'revenue', value: 2.2, sourceWidth: 44, targetWidth: 46, targetOrder: 2, y1: 1110 },
      {
        source: 'revenue',
        target: 'gross_profit',
        value: 4.5,
        sourceWidth: 93,
        targetWidth: 94,
        sourceOrder: 0,
        y0: 653.5,
        y1: 572,
      },
      {
        source: 'revenue',
        target: 'cost_of_revenue',
        value: 20.4,
        sourceWidth: 433,
        targetWidth: 432,
        sourceOrder: 1,
        y0: 916.5,
        y1: 986,
      },
      {
        source: 'gross_profit',
        target: 'operating_profit',
        value: 2.4,
        sourceWidth: 49,
        targetWidth: 49,
        sourceOrder: 0,
        y0: 549.5,
        y1: 493.5,
      },
      {
        source: 'gross_profit',
        target: 'operating_expenses',
        value: 2.1,
        sourceWidth: 45,
        targetWidth: 42,
        sourceOrder: 1,
        y0: 596.5,
        y1: 679,
      },
      {
        source: 'other',
        target: 'net_profit',
        value: 0.3,
        sourceWidth: 5,
        targetWidth: 5,
        targetOrder: 0,
        y1: 381.5,
        curve: { c1x: 2260, c1y: 347.5, c2x: 2285, c2y: 381.5 },
      },
      {
        source: 'operating_profit',
        target: 'net_profit',
        value: 2.1,
        sourceWidth: 44,
        targetWidth: 47,
        sourceOrder: 0,
        targetOrder: 1,
        y0: 491,
        y1: 407.5,
        curve: { c1x: 2110, c1y: 491, c2x: 2250, c2y: 407.5 },
      },
      {
        source: 'interest',
        target: 'net_profit',
        value: 0.2,
        sourceWidth: 2,
        targetWidth: 2,
        targetOrder: 2,
        y1: 432,
        curve: { c1x: 2280, c1y: 503, c2x: 2290, c2y: 432 },
      },
      {
        source: 'operating_profit',
        target: 'tax',
        value: 0.3,
        sourceWidth: 5,
        targetWidth: 4,
        sourceOrder: 1,
        y0: 515.5,
        y1: 662,
        curve: { c1x: 2110, c1y: 515.5, c2x: 2240, c2y: 662 },
      },
      {
        source: 'operating_expenses',
        target: 'sga',
        value: 1.2,
        sourceWidth: 23,
        targetWidth: 24,
        sourceOrder: 0,
        y0: 669.5,
        y1: 930,
      },
      {
        source: 'operating_expenses',
        target: 'rnd',
        value: 0.9,
        sourceWidth: 19,
        targetWidth: 19,
        sourceOrder: 1,
        y0: 690.5,
        y1: 1163.5,
      },
    ],
    i18n: {
      zh: {
        name: 'Tesla · 2023 财年第二季度',
        meta: { title: 'Tesla 2023 财年第二季度利润表', period: '', periodNote: '' },
        nodes: {
          auto_sales: { label: '汽车销售', notes: ['同比 +49%'] },
          regulatory_credits: { label: '监管积分', notes: ['同比 (18%)'] },
          leasing: { label: '租赁', notes: ['同比 (4%)'] },
          auto: { label: '汽车业务', notes: ['同比 +46%'] },
          energy_generation_storage: { label: '能源发电与储能', notes: ['同比 +74%'] },
          services: { label: '服务', notes: ['同比 +47%'] },
          revenue: { label: '收入', notes: ['同比 +47%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 18%', '同比 (7 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 10%', '同比 (5 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 11%', '同比 (3 个百分点)'] },
          tax: { label: '税费' },
          sga: { label: '销售及管理' },
          rnd: { label: '研发' },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();
