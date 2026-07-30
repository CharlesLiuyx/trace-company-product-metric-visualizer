/* Oracle — Q4 FY24 income statement ($B).
 * Reconstructed from input/processed/oracle-q4-fy24.png as a measured,
 * fixed-layout d3-sankey. Oracle marks are pure SVG/text; publisher
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
    <rect x="3" y="0" width="277" height="175" rx="87.5" fill="${ORACLE_RED}"/>
    <rect x="36" y="31" width="211" height="113" rx="56.5" fill="${BG}"/>
    <text x="146.5" y="241" text-anchor="middle" font-family="Arial,Helvetica,sans-serif"
      font-size="38" font-weight="700" letter-spacing="3" textLength="293"
      lengthAdjust="spacingAndGlyphs" fill="${ORACLE_RED}"
      data-typography-role="brand">ORACLE</text>`;

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
      financial: '财务费用',
      tax: '税费',
      other: '其他',
      rnd: '研发',
      sm: '销售与市场',
      amortization: '摊销',
      ga: '一般及行政',
      yoy9: '同比 +9%',
      yoy15: '同比 (15%)',
      yoy1: '同比 (1%)',
      yoy6: '同比 (6%)',
      yoy3: '同比 +3%',
      margin73: '利润率 73%',
      pp1: '同比 (1 个百分点)',
      margin33: '利润率 33%',
      pp3: '同比 +3 个百分点',
      margin22: '利润率 22%',
      pp2: '同比 (2 个百分点)',
      gm79: '毛利率 79%',
      gm71: '毛利率 71%',
      gm8: '毛利率 8%',
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
      financial: 'Financial',
      tax: 'Tax',
      other: 'Other',
      rnd: 'R&D',
      sm: 'S&M',
      amortization: 'Amortization',
      ga: 'G&A',
      yoy9: '+9% Y/Y',
      yoy15: '(15%) Y/Y',
      yoy1: '(1%) Y/Y',
      yoy6: '(6%) Y/Y',
      yoy3: '+3% Y/Y',
      margin73: '73% margin',
      pp1: '(1pp) Y/Y',
      margin33: '33% margin',
      pp3: '+3pp Y/Y',
      margin22: '22% margin',
      pp2: '(2pp) Y/Y',
      gm79: '79% gross margin',
      gm71: '71% gross margin',
      gm8: '8% gross margin',
    };
    const line = (text, size, weight, color) => ({ text, size, weight, ...(color ? { color } : {}) });
    const valueNote = (x, top, note) => ({
      x, top, anchor: 'middle', lineGap: 9,
      lines: [line('$value', 40, 400), line(note, 28, 400, NOTE)],
    });
    const sideName = (x, top, value) => ({
      x, top, anchor: 'end', lineGap: 8,
      lines: (Array.isArray(value) ? value : [value]).map((text) => line(text, 40, 800)),
    });
    const rightPair = (x, top, name, value) => ({
      x, top, anchor: 'start', lineGap: 8,
      lines: [line(name, 30, 800, RED_LABEL), line(value, 30, 400, RED_LABEL)],
    });
    return {
      cloud_services_license_support: {
        blocks: [valueNote(442, 309, t.yoy9), sideName(389, zh ? 496 : 494, t.cloudSupport)],
      },
      cloud_license_on_premise: {
        blocks: [valueNote(442, 749, t.yoy15), sideName(350, zh ? 815 : 790, t.cloudLicense)],
      },
      hardware: { blocks: [sideName(317, 1033, t.hardware), valueNote(442, 953, t.yoy1)] },
      services: { blocks: [sideName(299, 1242, t.services), valueNote(442, 1144, t.yoy6)] },
      revenue: {
        blocks: [{
          x: 907, top: 500, anchor: 'middle', lineGap: 9,
          lines: [line(t.revenue, 42, 800), line('$value', 40, 400), line(t.yoy3, 28, 400, NOTE)],
        }],
      },
      gross_profit: {
        blocks: [{
          x: 1369, top: 352, anchor: 'middle', lineGap: 9,
          lines: [
            line(t.gross, 40, 800, GREEN_LABEL),
            line('$value', 40, 400, GREEN_LABEL),
            line(t.margin73, 28, 400, NOTE),
            line(t.pp1, 28, 400, NOTE),
          ],
        }],
      },
      cost_of_revenue: {
        blocks: [{
          x: 1369, top: 1168, anchor: 'middle', lineGap: 8,
          lines: [...t.cost.map((text) => line(text, 40, 800, RED_LABEL)), line('$value', 38, 400, RED_LABEL)],
        }],
      },
      cor_cloud: {
        blocks: [{
          x: 1678, top: 1099, anchor: 'start', lineGap: 8,
          lines: [line(`${t.cloud} ($2.5B)`, 30, 700, RED_LABEL), line(t.gm79, 27, 400, NOTE)],
        }],
      },
      cor_hardware: {
        blocks: [{
          x: 1660, top: 1207, anchor: 'start', lineGap: 8,
          lines: [line(`${t.hardware} ($0.2B)`, 30, 700, RED_LABEL), line(t.gm71, 27, 400, NOTE)],
        }],
      },
      cor_services: {
        blocks: [{
          x: 1672, top: 1305, anchor: 'start', lineGap: 8,
          lines: [line(`${t.services} ($1.2B)`, 30, 700, RED_LABEL), line(t.gm8, 27, 400, NOTE)],
        }],
      },
      operating_profit: {
        blocks: [{
          x: 1846, top: 252, anchor: 'middle', lineGap: 9,
          lines: [
            line(t.operating, 40, 800, GREEN_LABEL),
            line('$value', 40, 400, GREEN_LABEL),
            line(t.margin33, 28, 400, NOTE),
            line(t.pp3, 28, 400, NOTE),
          ],
        }],
      },
      operating_expenses: {
        blocks: [{
          x: 1846, top: 922, anchor: 'middle', lineGap: 8,
          lines: [...t.expenses.map((text) => line(text, 40, 800, RED_LABEL)), line('$value', 38, 400, RED_LABEL)],
        }],
      },
      net_profit: {
        blocks: [{
          x: 2374, top: 314, anchor: 'start', lineGap: 9,
          lines: [
            line(t.net, 40, 800, GREEN_LABEL),
            line('$value', 40, 400, GREEN_LABEL),
            line(t.margin22, 28, 400, NOTE),
            line(t.pp2, 28, 400, NOTE),
          ],
        }],
      },
      financial: { blocks: [rightPair(2406, 536, t.financial, '($0.9B)')] },
      tax: { blocks: [rightPair(2424, 645, t.tax, '($0.6B)')] },
      other_financial: { blocks: [rightPair(2427, 751, t.other, '($26M)')] },
      rnd: {
        blocks: [{
          x: 2388, top: 891, anchor: 'start',
          lines: [line(`${t.rnd} ($2.2B)`, 30, 800, RED_LABEL)],
        }],
      },
      sm: {
        blocks: [{
          x: 2389, top: zh ? 1015 : 1033, anchor: 'start', lineGap: 8,
          lines: zh
            ? [line(t.sm, 30, 800, RED_LABEL), line('($2.1B)', 30, 400, RED_LABEL)]
            : [line(`${t.sm} ($2.1B)`, 30, 800, RED_LABEL)],
        }],
      },
      amortization: { blocks: [rightPair(2374, 1136, t.amortization, '($0.7B)')] },
      ga: {
        blocks: [{
          x: 2385, top: zh ? 1242 : 1252, anchor: 'start', lineGap: 8,
          lines: zh
            ? [line(t.ga, 30, 800, RED_LABEL), line('($0.4B)', 30, 400, RED_LABEL)]
            : [line(`${t.ga} ($0.4B)`, 30, 800, RED_LABEL)],
        }],
      },
      other_opex: {
        blocks: [{
          x: 2376, top: 1354, anchor: 'start',
          lines: [line(`${t.other} ($0.2B)`, 30, 800, RED_LABEL)],
        }],
      },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'oracle-q4-fy24',
    name: 'Oracle · Q4 FY24',
    company: 'Oracle',
    meta: {
      company: 'Oracle',
      title: 'Oracle Q4 FY24 Income Statement',
      period: 'Q4 FY24',
      periodNote: 'Ending May 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/oracle-q4-fy24.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2123,
      periodX: 222,
      periodY: 291,
      periodNoteY: 334,
      logoWidth: 293,
      logoHeight: 242,
      logoY: 231,
      logoViewBox: '0 0 293 242',
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
      linkTint: { source: GRAY_LINK, hub: GRAY_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 28, lineGap: 8 },
    },
    layout: {
      scale: 28.02,
      nodes: {
        cloud_services_license_support: { x: 407, y: 402, width: 71, height: 286 },
        cloud_license_on_premise: { x: 407, y: 840, width: 71, height: 50 },
        hardware: { x: 407, y: 1051, width: 71, height: 21 },
        services: { x: 407, y: 1244, width: 71, height: 37 },
        revenue: { x: 872, y: 645, width: 70, height: 401 },
        gross_profit: { x: 1333, y: 534, width: 72, height: 291 },
        cost_of_revenue: { x: 1333, y: 1039, width: 72, height: 107 },
        cor_cloud: { x: 1564, y: 1091, width: 70, height: 69 },
        cor_hardware: { x: 1569, y: 1234, width: 70, height: 5 },
        cor_services: { x: 1569, y: 1313, width: 70, height: 30 },
        operating_profit: { x: 1811, y: 433, width: 70, height: 130 },
        operating_expenses: { x: 1809, y: 748, width: 70, height: 158 },
        net_profit: { x: 2275, y: 326, width: 71, height: 86 },
        financial: { x: 2275, y: 561, width: 71, height: 22 },
        tax: { x: 2275, y: 677, width: 71, height: 15 },
        other_financial: { x: 2275, y: 787, width: 71, height: 2 },
        rnd: { x: 2275, y: 880, width: 71, height: 60 },
        sm: { x: 2275, y: 1021, width: 71, height: 58 },
        amortization: { x: 2275, y: 1161, width: 71, height: 19 },
        ga: { x: 2275, y: 1270, width: 71, height: 9 },
        other_opex: { x: 2275, y: 1374, width: 71, height: 2 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'cloud_services_license_support', col: 0, order: 0, type: 'source', label: ['Cloud services', '& license support'], value: 10.2, valueText: '$10.2B', notes: ['+9% Y/Y'] },
      { id: 'cloud_license_on_premise', col: 0, order: 1, type: 'source', label: ['Cloud license', '& on-premise', 'license'], value: 1.8, valueText: '$1.8B', notes: ['(15%) Y/Y'] },
      { id: 'hardware', col: 0, order: 2, type: 'source', label: 'Hardware', value: 0.8, valueText: '$0.8B', notes: ['(1%) Y/Y'] },
      { id: 'services', col: 0, order: 3, type: 'source', label: 'Services', value: 1.4, valueText: '$1.4B', notes: ['(6%) Y/Y'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 14.3, valueText: '$14.3B', notes: ['+3% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 10.4, valueText: '$10.4B', notes: ['73% margin', '(1pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 3.9, valueText: '($3.9B)' },
      { id: 'cor_cloud', col: 3, order: 2, type: 'cost', label: 'Cloud', value: 2.5, valueText: '($2.5B)', notes: ['79% gross margin'] },
      { id: 'cor_hardware', col: 3, order: 3, type: 'cost', label: 'Hardware', value: 0.2, valueText: '($0.2B)', notes: ['71% gross margin'] },
      { id: 'cor_services', col: 3, order: 4, type: 'cost', label: 'Services', value: 1.2, valueText: '($1.2B)', notes: ['8% gross margin'] },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 4.7, valueText: '$4.7B', notes: ['33% margin', '+3pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 5.7, valueText: '($5.7B)' },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 3.1, valueText: '$3.1B', notes: ['22% margin', '(2pp) Y/Y'] },
      { id: 'financial', col: 4, order: 1, type: 'cost', label: 'Financial', value: 0.9, valueText: '($0.9B)' },
      { id: 'tax', col: 4, order: 2, type: 'cost', label: 'Tax', value: 0.6, valueText: '($0.6B)' },
      { id: 'other_financial', col: 4, order: 3, type: 'cost', label: 'Other', value: 0.026, valueText: '($26M)' },
      { id: 'rnd', col: 4, order: 4, type: 'cost', label: 'R&D', value: 2.2, valueText: '($2.2B)' },
      { id: 'sm', col: 4, order: 5, type: 'cost', label: 'S&M', value: 2.1, valueText: '($2.1B)' },
      { id: 'amortization', col: 4, order: 6, type: 'cost', label: 'Amortization', value: 0.7, valueText: '($0.7B)' },
      { id: 'ga', col: 4, order: 7, type: 'cost', label: 'G&A', value: 0.4, valueText: '($0.4B)' },
      { id: 'other_opex', col: 4, order: 8, type: 'cost', label: 'Other', value: 0.2, valueText: '($0.2B)' },
    ],
    links: [
      { source: 'cloud_services_license_support', target: 'revenue', value: 10.2, sourceWidth: 286, targetWidth: 286, targetOrder: 0 },
      { source: 'cloud_license_on_premise', target: 'revenue', value: 1.8, sourceWidth: 50, targetWidth: 50, targetOrder: 1 },
      { source: 'hardware', target: 'revenue', value: 0.8, sourceWidth: 21, targetWidth: 21, targetOrder: 2 },
      { source: 'services', target: 'revenue', value: 1.4, sourceWidth: 37, targetWidth: 44, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 10.4, sourceWidth: 291, targetWidth: 291, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 3.9, sourceWidth: 110, targetWidth: 107, sourceOrder: 1 },
      { source: 'cost_of_revenue', target: 'cor_cloud', value: 2.5, sourceWidth: 69, targetWidth: 69, sourceOrder: 0 },
      { source: 'cost_of_revenue', target: 'cor_hardware', value: 0.2, sourceWidth: 5, targetWidth: 5, sourceOrder: 1 },
      { source: 'cost_of_revenue', target: 'cor_services', value: 1.2, sourceWidth: 33, targetWidth: 30, sourceOrder: 2 },
      { source: 'gross_profit', target: 'operating_profit', value: 4.7, sourceWidth: 130, targetWidth: 130, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 5.7, sourceWidth: 161, targetWidth: 158, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 3.1, sourceWidth: 86, targetWidth: 86, sourceOrder: 0 },
      { source: 'operating_profit', target: 'financial', value: 0.9, sourceWidth: 22, targetWidth: 22, sourceOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 0.6, sourceWidth: 15, targetWidth: 15, sourceOrder: 2 },
      { source: 'operating_profit', target: 'other_financial', value: 0.026, sourceWidth: 7, targetWidth: 2, sourceOrder: 3 },
      { source: 'operating_expenses', target: 'rnd', value: 2.2, sourceWidth: 60, targetWidth: 60, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 2.1, sourceWidth: 58, targetWidth: 58, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'amortization', value: 0.7, sourceWidth: 19, targetWidth: 19, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'ga', value: 0.4, sourceWidth: 9, targetWidth: 9, sourceOrder: 3 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.2, sourceWidth: 12, targetWidth: 2, sourceOrder: 4 },
    ],
    i18n: {
      zh: {
        name: 'Oracle · 2024 财年第四季度',
        meta: {
          title: 'Oracle 2024 财年第四季度利润表',
          period: '2024 财年第四季度',
          periodNote: '截至 2024 年 5 月',
          titleTextLength: 2123,
        },
        nodes: {
          cloud_services_license_support: { label: '云服务与许可证支持', notes: ['同比 +9%'] },
          cloud_license_on_premise: { label: '云许可证与本地部署许可证', notes: ['同比 (15%)'] },
          hardware: { label: '硬件', notes: ['同比 (1%)'] },
          services: { label: '服务', notes: ['同比 (6%)'] },
          revenue: { label: '收入', notes: ['同比 +3%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 73%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          cor_cloud: { label: '云', notes: ['毛利率 79%'] },
          cor_hardware: { label: '硬件', notes: ['毛利率 71%'] },
          cor_services: { label: '服务', notes: ['毛利率 8%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 33%', '同比 +3 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 22%', '同比 (2 个百分点)'] },
          financial: { label: '财务费用' },
          tax: { label: '税费' },
          other_financial: { label: '其他' },
          rnd: { label: '研发' },
          sm: { label: '销售与市场' },
          amortization: { label: '摊销' },
          ga: { label: '一般及行政' },
          other_opex: { label: '其他' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
