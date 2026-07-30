/* Oracle — Q4 FY23 income statement ($B).
 * Reconstructed from input/processed/oracle-q4-fy23.png as a measured,
 * fixed-layout d3-sankey. The Oracle mark is reusable pure SVG; publisher
 * attribution and social branding are intentionally omitted. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const DARK = '#3a3632';
  const GRAY_LINK = '#9f9d9c';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const ORACLE_RED = '#ff141d';

  const ORACLE_LOGO = `
    <path fill="${ORACLE_RED}" fill-rule="evenodd" d="M78 8h137a70 70 0 0 1 0 140H78a70 70 0 0 1 0-140Zm6 34h125a36 36 0 0 1 0 72H84a36 36 0 0 1 0-72Z"/>
    <g fill="${ORACLE_RED}" transform="translate(44 176)" data-typography-role="brand">
      <text x="102" y="26" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="38" font-weight="700" letter-spacing="3" textLength="205" lengthAdjust="spacingAndGlyphs">ORACLE</text>
    </g>`;

  const labels = (zh) => {
    const t = zh ? {
      cloudSupport: ['云服务与', '许可证支持'],
      cloudLicense: ['云许可证与', '本地部署许可证'],
      hardware: '硬件',
      services: '服务',
      revenue: '收入',
      gross: '毛利润',
      cost: ['收入', '成本'],
      cloud: '云',
      operating: '营业利润',
      expenses: ['运营', '费用'],
      net: '净利润',
      taxBenefit: '税收收益',
      financial: '财务费用',
      other: '其他',
      sm: '销售与市场',
      rnd: '研发',
      ga: '一般及行政',
      amortization: '摊销',
      yoy23: '同比 +23%',
      yoy15: '同比 (15%)',
      yoy1: '同比 (1%)',
      yoy76: '同比 +76%',
      yoy17: '同比 +17%',
      margin73: '利润率 73%',
      pp7: '同比 (7 个百分点)',
      margin30: '利润率 30%',
      pp8: '同比 (8 个百分点)',
      margin24: '利润率 24%',
      pp3: '同比 (3 个百分点)',
      gm81: '毛利率 81%',
      gm69: '毛利率 69%',
      gm10: '毛利率 10%',
    } : {
      cloudSupport: ['Cloud services', '& license support'],
      cloudLicense: ['Cloud license', '& on-premise', 'license'],
      hardware: 'Hardware',
      services: 'Services',
      revenue: 'Revenue',
      gross: 'Gross profit',
      cost: ['Cost of', 'revenue'],
      cloud: 'Cloud',
      operating: 'Operating profit',
      expenses: ['Operating', 'expenses'],
      net: 'Net profit',
      taxBenefit: 'Tax benefit',
      financial: 'Financial',
      other: 'Other',
      sm: 'S&M',
      rnd: 'R&D',
      ga: 'G&A',
      amortization: 'Amortization',
      yoy23: '+23% Y/Y',
      yoy15: '(15%) Y/Y',
      yoy1: '(1%) Y/Y',
      yoy76: '+76% Y/Y',
      yoy17: '+17% Y/Y',
      margin73: '73% margin',
      pp7: '(7pp) Y/Y',
      margin30: '30% margin',
      pp8: '(8pp) Y/Y',
      margin24: '24% margin',
      pp3: '(3pp) Y/Y',
      gm81: '81% gross margin',
      gm69: '69% gross margin',
      gm10: '10% gross margin',
    };
    const line = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });
    const valueNote = (x, top, note) => ({
      x, top, anchor: 'middle', lineGap: 9,
      lines: [line('$value', 40, 400), line(note, 28, 400, NOTE)],
    });
    const sideName = (x, top, values) => ({
      x, top, anchor: 'end', lineGap: 8,
      lines: (Array.isArray(values) ? values : [values]).map((text) => line(text, 40, 800)),
    });
    const rightPair = (x, top, name, value, size = 34) => ({
      x, top, anchor: 'start', lineGap: 8,
      lines: [line(name, size, 800, RED_LABEL), line(value, size, 400, RED_LABEL)],
    });

    return {
      cloud_services_license_support: {
        blocks: [
          valueNote(435, 384, t.yoy23),
          sideName(353, zh ? 544 : 543, t.cloudSupport),
        ],
      },
      cloud_license_on_premise_license: {
        blocks: [
          valueNote(421, 778, t.yoy15),
          sideName(339, zh ? 850 : 822, t.cloudLicense),
        ],
      },
      hardware: {
        blocks: [
          valueNote(404, 966, t.yoy1),
          sideName(310, 1055, t.hardware),
        ],
      },
      services: {
        blocks: [
          valueNote(396, 1142, t.yoy76),
          sideName(302, 1233, t.services),
        ],
      },
      revenue: {
        blocks: [{
          x: 888, top: 524, anchor: 'middle', lineGap: 9,
          lines: [line(t.revenue, 42, 800), line('$value', 40, 400), line(t.yoy17, 28, 400, NOTE)],
        }],
      },
      gross_profit: {
        blocks: [{
          x: 1355.5, top: 343, anchor: 'middle', lineGap: 9,
          lines: [
            line(t.gross, 40, 800, GREEN_LABEL),
            line('$value', 40, 400, GREEN_LABEL),
            line(t.margin73, 28, 400, NOTE),
            line(t.pp7, 28, 400, NOTE),
          ],
        }],
      },
      cost_of_revenue: {
        blocks: [{
          x: 1363, top: 1161, anchor: 'middle', lineGap: 8,
          lines: [...t.cost.map((text) => line(text, 40, 800, RED_LABEL)), line('$value', 38, 400, RED_LABEL)],
        }],
      },
      cor_cloud: {
        blocks: [{
          x: 1693, top: 1103, anchor: 'start', lineGap: 8,
          lines: [line(`${t.cloud} ($2.2B)`, 30, 700, RED_LABEL), line(t.gm81, 27, 400, NOTE)],
        }],
      },
      cor_hardware: {
        blocks: [{
          x: 1666, top: 1212, anchor: 'start', lineGap: 8,
          lines: [line(`${t.hardware} ($0.3B)`, 30, 700, RED_LABEL), line(t.gm69, 27, 400, NOTE)],
        }],
      },
      cor_services: {
        blocks: [{
          x: 1717, top: 1325, anchor: 'start', lineGap: 8,
          lines: [line(`${t.services} ($1.3B)`, 30, 700, RED_LABEL), line(t.gm10, 27, 400, NOTE)],
        }],
      },
      operating_profit: {
        blocks: [{
          x: 1818, top: 263, anchor: 'middle', lineGap: 9,
          lines: [
            line(t.operating, 40, 800, GREEN_LABEL),
            line('$value', 40, 400, GREEN_LABEL),
            line(t.margin30, 28, 400, NOTE),
            line(t.pp8, 28, 400, NOTE),
          ],
        }],
      },
      operating_expenses: {
        blocks: [{
          x: 1815, top: 856, anchor: 'middle', lineGap: 8,
          lines: [...t.expenses.map((text) => line(text, 40, 800, RED_LABEL)), line('$value', 38, 400, RED_LABEL)],
        }],
      },
      net_profit: {
        blocks: [{
          x: 2354, top: 343, anchor: 'start', lineGap: 9,
          lines: [
            line(t.net, 40, 800, GREEN_LABEL),
            line('$value', 40, 400, GREEN_LABEL),
            line(t.margin24, 28, 400, NOTE),
            line(t.pp3, 28, 400, NOTE),
          ],
        }],
      },
      tax_benefit: {
        blocks: [{
          x: zh ? 2218 : 2238.5, top: 510, anchor: 'end', lineGap: 8,
          lines: [line(t.taxBenefit, 34, 800, GREEN_LABEL), line('$value', 34, 400, GREEN_LABEL)],
        }],
      },
      financial: { blocks: [rightPair(2370, 582, t.financial, '($1.0B)')] },
      other_financial: { blocks: [rightPair(2392, 684, t.other, '($0.1B)')] },
      sm: { blocks: [rightPair(2393, zh ? 781 : 801, t.sm, '($2.3B)')] },
      rnd: { blocks: [rightPair(2397, 943, t.rnd, '($2.2B)')] },
      ga: { blocks: [rightPair(2394, zh ? 1057 : 1084, t.ga, '($0.4B)')] },
      amortization: { blocks: [rightPair(2327, 1190, t.amortization, '($0.9B)')] },
      other_opex: { blocks: [rightPair(2394, 1302, t.other, '($0.2B)')] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'oracle-q4-fy23',
    name: 'Oracle · Q4 FY23',
    company: 'Oracle',
    meta: {
      company: 'Oracle',
      title: 'Oracle Q4 FY23 Income Statement',
      period: 'Q4 FY23',
      periodNote: 'Ending May 2023',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/oracle-q4-fy23.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2123,
      periodX: 877,
      periodY: 1297,
      periodNoteY: 1341,
      logoWidth: 293,
      logoHeight: 241,
      logoY: 239,
      logoViewBox: '0 0 293 212',
      logoSvg: ORACLE_LOGO,
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
        source: { node: DARK, label: DARK },
        hub: { node: DARK, label: DARK },
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
      type: { name: 40, value: 40, note: 28, lineGap: 8 },
    },
    layout: {
      scale: 24.5,
      nodes: {
        cloud_services_license_support: { x: 386, y: 481, width: 71, height: 229 },
        cloud_license_on_premise_license: { x: 386, y: 871, width: 71, height: 51 },
        hardware: { x: 388, y: 1066, width: 71, height: 19 },
        services: { x: 386, y: 1240, width: 71, height: 34 },
        revenue: { x: 853, y: 669, width: 70, height: 342 },
        gross_profit: { x: 1320, y: 524, width: 71, height: 248 },
        cost_of_revenue: { x: 1327, y: 1055, width: 72, height: 90 },
        cor_cloud: { x: 1585, y: 1106, width: 70, height: 51 },
        cor_hardware: { x: 1585, y: 1240, width: 70, height: 30 },
        cor_services: { x: 1588, y: 1365, width: 70, height: 4 },
        operating_profit: { x: 1783, y: 444, width: 70, height: 100 },
        operating_expenses: { x: 1780, y: 693, width: 70, height: 145 },
        tax_benefit: { x: 2115, y: 493, width: 70, height: 3 },
        net_profit: { x: 2254, y: 354, width: 71, height: 80 },
        financial: { x: 2254, y: 627, width: 71, height: 21 },
        other_financial: { x: 2254, y: 699, width: 71, height: 1 },
        sm: { x: 2254, y: 807, width: 71, height: 54 },
        rnd: { x: 2254, y: 957, width: 71, height: 53 },
        ga: { x: 2254, y: 1112, width: 71, height: 19 },
        amortization: { x: 2254, y: 1232, width: 71, height: 9 },
        other_opex: { x: 2254, y: 1349, width: 71, height: 1 },
      },
      labels: labels(false),
    },
    nodes: [
      {
        id: 'cloud_services_license_support', col: 0, order: 0, type: 'source',
        label: ['Cloud services', '& license support'], value: 9.4, valueText: '$9.4B',
        notes: ['+23% Y/Y'],
      },
      {
        id: 'cloud_license_on_premise_license', col: 0, order: 1, type: 'source',
        label: ['Cloud license', '& on-premise', 'license'], value: 2.2, valueText: '$2.2B',
        notes: ['(15%) Y/Y'],
      },
      { id: 'hardware', col: 0, order: 2, type: 'source', label: 'Hardware', value: 0.9, valueText: '$0.9B', notes: ['(1%) Y/Y'] },
      { id: 'services', col: 0, order: 3, type: 'source', label: 'Services', value: 1.5, valueText: '$1.5B', notes: ['+76% Y/Y'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 13.8, valueText: '$13.8B', notes: ['+17% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 10.1, valueText: '$10.1B', notes: ['73% margin', '(7pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 3.7, valueText: '($3.7B)' },
      { id: 'cor_cloud', col: 3, order: 2, type: 'cost', label: 'Cloud', value: 2.2, valueText: '($2.2B)', notes: ['81% gross margin'] },
      { id: 'cor_hardware', col: 3, order: 3, type: 'cost', label: 'Hardware', value: 0.3, valueText: '($0.3B)', notes: ['69% gross margin'] },
      { id: 'cor_services', col: 3, order: 4, type: 'cost', label: 'Services', value: 1.3, valueText: '($1.3B)', notes: ['10% gross margin'] },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 4.1, valueText: '$4.1B', notes: ['30% margin', '(8pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 6.0, valueText: '($6.0B)' },
      { id: 'tax_benefit', col: 4, order: 0, type: 'profit', label: 'Tax benefit', value: 0.2, valueText: '$0.2B' },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 3.3, valueText: '$3.3B', notes: ['24% margin', '(3pp) Y/Y'] },
      { id: 'financial', col: 5, order: 1, type: 'cost', label: 'Financial', value: 1.0, valueText: '($1.0B)' },
      { id: 'other_financial', col: 5, order: 2, type: 'cost', label: 'Other', value: 0.1, valueText: '($0.1B)' },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 2.3, valueText: '($2.3B)' },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 2.2, valueText: '($2.2B)' },
      { id: 'ga', col: 5, order: 5, type: 'cost', label: 'G&A', value: 0.4, valueText: '($0.4B)' },
      { id: 'amortization', col: 5, order: 6, type: 'cost', label: 'Amortization', value: 0.9, valueText: '($0.9B)' },
      { id: 'other_opex', col: 5, order: 7, type: 'cost', label: 'Other', value: 0.2, valueText: '($0.2B)' },
    ],
    links: [
      {
        source: 'cloud_services_license_support', target: 'revenue', value: 9.4,
        sourceWidth: 229, targetWidth: 231, y0: 595.5, y1: 784.5, targetOrder: 0,
      },
      {
        source: 'cloud_license_on_premise_license', target: 'revenue', value: 2.2,
        sourceWidth: 51, targetWidth: 51, y0: 896.5, y1: 925.5, targetOrder: 1,
      },
      {
        source: 'hardware', target: 'revenue', value: 0.9,
        sourceWidth: 19, targetWidth: 19, y0: 1075.5, y1: 960.5, targetOrder: 2,
      },
      {
        source: 'services', target: 'revenue', value: 1.5,
        sourceWidth: 34, targetWidth: 41, y0: 1257, y1: 990.5, targetOrder: 3,
      },
      {
        source: 'revenue', target: 'gross_profit', value: 10.1,
        sourceWidth: 249, targetWidth: 248, y0: 793.5, y1: 648, sourceOrder: 0,
      },
      {
        source: 'revenue', target: 'cost_of_revenue', value: 3.7,
        sourceWidth: 93, targetWidth: 90, y0: 964.5, y1: 1100, sourceOrder: 1,
      },
      {
        source: 'cost_of_revenue', target: 'cor_cloud', value: 2.2,
        sourceWidth: 51, targetWidth: 51, y0: 1080.5, y1: 1131.5, sourceOrder: 0,
      },
      {
        source: 'cost_of_revenue', target: 'cor_hardware', value: 0.3,
        sourceWidth: 30, targetWidth: 30, y0: 1121, y1: 1255, sourceOrder: 1,
      },
      {
        source: 'cost_of_revenue', target: 'cor_services', value: 1.3,
        sourceWidth: 9, targetWidth: 4, y0: 1140.5, y1: 1367, sourceOrder: 2,
      },
      {
        source: 'gross_profit', target: 'operating_profit', value: 4.1,
        sourceWidth: 100, targetWidth: 100, y0: 574, y1: 494, sourceOrder: 0,
      },
      {
        source: 'gross_profit', target: 'operating_expenses', value: 6.0,
        sourceWidth: 148, targetWidth: 145, y0: 698, y1: 765.5, sourceOrder: 1,
      },
      {
        source: 'operating_profit', target: 'net_profit', value: 3.3,
        sourceWidth: 75, targetWidth: 77, y0: 481.5, y1: 392.5, sourceOrder: 0, targetOrder: 0,
      },
      {
        source: 'operating_profit', target: 'financial', value: 1.0,
        sourceWidth: 22, targetWidth: 21, y0: 530, y1: 637.5, sourceOrder: 1,
      },
      {
        source: 'operating_profit', target: 'other_financial', value: 0.1,
        sourceWidth: 3, targetWidth: 1, y0: 542.5, y1: 699.5, sourceOrder: 2,
      },
      {
        source: 'tax_benefit', target: 'net_profit', value: 0.2,
        sourceWidth: 3, targetWidth: 3, y0: 494.5, y1: 432.5, sourceOrder: 0, targetOrder: 1,
      },
      {
        source: 'operating_expenses', target: 'sm', value: 2.3,
        sourceWidth: 55, targetWidth: 54, y0: 720.5, y1: 834, sourceOrder: 0,
      },
      {
        source: 'operating_expenses', target: 'rnd', value: 2.2,
        sourceWidth: 55, targetWidth: 53, y0: 775.5, y1: 983.5, sourceOrder: 1,
      },
      {
        source: 'operating_expenses', target: 'ga', value: 0.4,
        sourceWidth: 22, targetWidth: 19, y0: 814, y1: 1121.5, sourceOrder: 2,
      },
      {
        source: 'operating_expenses', target: 'amortization', value: 0.9,
        sourceWidth: 11, targetWidth: 8, y0: 830.5, y1: 1236, sourceOrder: 3,
      },
      {
        source: 'operating_expenses', target: 'other_opex', value: 0.2,
        sourceWidth: 2, targetWidth: 1, y0: 837, y1: 1349.5, sourceOrder: 4,
      },
    ],
    i18n: {
      zh: {
        name: 'Oracle · 2023 财年第四季度',
        meta: {
          title: 'Oracle 2023 财年第四季度利润表',
          period: '2023 财年第四季度',
          periodNote: '截至 2023 年 5 月',
          titleTextLength: 2123,
        },
        nodes: {
          cloud_services_license_support: { label: '云服务与许可证支持', notes: ['同比 +23%'] },
          cloud_license_on_premise_license: { label: '云许可证与本地部署许可证', notes: ['同比 (15%)'] },
          hardware: { label: '硬件', notes: ['同比 (1%)'] },
          services: { label: '服务', notes: ['同比 +76%'] },
          revenue: { label: '收入', notes: ['同比 +17%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 73%', '同比 (7 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          cor_cloud: { label: '云', notes: ['毛利率 81%'] },
          cor_hardware: { label: '硬件', notes: ['毛利率 69%'] },
          cor_services: { label: '服务', notes: ['毛利率 10%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 30%', '同比 (8 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          tax_benefit: { label: '税收收益' },
          net_profit: { label: '净利润', notes: ['利润率 24%', '同比 (3 个百分点)'] },
          financial: { label: '财务费用' },
          other_financial: { label: '其他' },
          sm: { label: '销售与市场' },
          rnd: { label: '研发' },
          ga: { label: '一般及行政' },
          amortization: { label: '摊销' },
          other_opex: { label: '其他' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
