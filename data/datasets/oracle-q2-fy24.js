/* Oracle — Q2 FY24 income statement ($B).
 * Reconstructed from input/processed/oracle-q2-fy24.png as a measured,
 * fixed-layout d3-sankey. Oracle marks are pure SVG/text; publisher
 * attribution is intentionally not rendered. */
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
      financial: '财务费用',
      tax: '税费',
      other: '其他',
      rnd: '研发',
      sm: '销售与市场',
      ga: '一般及行政',
      amortization: '摊销',
      yoy12: '同比 +12%',
      yoy18: '同比 (18%)',
      yoy11: '同比 (11%)',
      yoy2: '同比 (2%)',
      yoy5: '同比 +5%',
      margin71: '利润率 71%',
      pp2: '同比 (2 个百分点)',
      margin28: '利润率 28%',
      pp3: '同比 +3 个百分点',
      margin19: '利润率 19%',
      pp5: '同比 +5 个百分点',
      gm79: '毛利率 79%',
      gm72: '毛利率 72%',
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
      financial: 'Financial',
      tax: 'Tax',
      other: 'Other',
      rnd: 'R&D',
      sm: 'S&M',
      ga: 'G&A',
      amortization: 'Amortization',
      yoy12: '+12% Y/Y',
      yoy18: '(18%) Y/Y',
      yoy11: '(11%) Y/Y',
      yoy2: '(2%) Y/Y',
      yoy5: '+5% Y/Y',
      margin71: '71% margin',
      pp2: '(2pp) Y/Y',
      margin28: '28% margin',
      pp3: '+3pp Y/Y',
      margin19: '19% margin',
      pp5: '+5pp Y/Y',
      gm79: '79% gross margin',
      gm72: '72% gross margin',
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
    return {
      cloud_services_support: {
        blocks: [valueNote(430, 388, t.yoy12), sideName(370, 574, t.cloudSupport)],
      },
      cloud_on_premise_license: {
        blocks: [valueNote(430, 807, t.yoy18), sideName(331, zh ? 873 : 845, t.cloudLicense)],
      },
      hardware: {
        blocks: [valueNote(430, 984, t.yoy11), sideName(295, 1062, t.hardware)],
      },
      services: {
        blocks: [valueNote(430, 1162, t.yoy2), sideName(278, 1248, t.services)],
      },
      revenue: {
        blocks: [{
          x: 895, top: 532, anchor: 'middle', lineGap: 9,
          lines: [line(t.revenue, 42, 800), line('$value', 40, 400), line(t.yoy5, 28, 400, NOTE)],
        }],
      },
      gross_profit: {
        blocks: [{
          x: 1361, top: 395, anchor: 'middle', lineGap: 9,
          lines: [
            line(t.gross, 40, 800, GREEN_LABEL),
            line('$value', 40, 400, GREEN_LABEL),
            line(t.margin71, 28, 400, NOTE),
            line(t.pp2, 28, 400, NOTE),
          ],
        }],
      },
      cost_of_revenue: {
        blocks: [{
          x: 1366, top: 1192, anchor: 'middle', lineGap: 8,
          lines: [...t.cost.map((text) => line(text, 40, 800, RED_LABEL)), line('$value', 38, 400, RED_LABEL)],
        }],
      },
      cor_cloud: {
        blocks: [{
          x: 1656, top: 1104, anchor: 'start', lineGap: 8,
          lines: [line(`${t.cloud} ($2.2B)`, 30, 700, RED_LABEL), line(t.gm79, 27, 400, NOTE)],
        }],
      },
      cor_hardware: {
        blocks: [{
          x: 1632, top: 1221, anchor: 'start', lineGap: 8,
          lines: [line(`${t.hardware} ($0.2B)`, 30, 700, RED_LABEL), line(t.gm72, 27, 400, NOTE)],
        }],
      },
      cor_services: {
        blocks: [{
          x: 1637, top: 1337, anchor: 'start', lineGap: 8,
          lines: [line(`${t.services} ($1.3B)`, 30, 700, RED_LABEL), line(t.gm10, 27, 400, NOTE)],
        }],
      },
      operating_profit: {
        blocks: [{
          x: 1832, top: 315, anchor: 'middle', lineGap: 9,
          lines: [
            line(t.operating, 40, 800, GREEN_LABEL),
            line('$value', 40, 400, GREEN_LABEL),
            line(t.margin28, 28, 400, NOTE),
            line(t.pp3, 28, 400, NOTE),
          ],
        }],
      },
      operating_expenses: {
        blocks: [{
          x: 1831, top: 928, anchor: 'middle', lineGap: 8,
          lines: [...t.expenses.map((text) => line(text, 40, 800, RED_LABEL)), line('$value', 38, 400, RED_LABEL)],
        }],
      },
      net_profit: {
        blocks: [{
          x: 2351, top: 365, anchor: 'start', lineGap: 9,
          lines: [
            line(t.net, 40, 800, GREEN_LABEL),
            line('$value', 40, 400, GREEN_LABEL),
            line(t.margin19, 28, 400, NOTE),
            line(t.pp5, 28, 400, NOTE),
          ],
        }],
      },
      financial: {
        blocks: [{
          x: 2376, top: 558, anchor: 'start', lineGap: 8,
          lines: [line(t.financial, 34, 800, RED_LABEL), line('($0.9B)', 34, 400, RED_LABEL)],
        }],
      },
      tax: {
        blocks: [{
          x: 2397, top: 642, anchor: 'start', lineGap: 8,
          lines: [line(t.tax, 34, 800, RED_LABEL), line('($0.2B)', 34, 400, RED_LABEL)],
        }],
      },
      other_non_operating: {
        blocks: [{
          x: 2410, top: 735, anchor: 'start', lineGap: 8,
          lines: [line(t.other, 34, 800, RED_LABEL), line('($14M)', 34, 400, RED_LABEL)],
        }],
      },
      rnd: { blocks: [{ x: 2413, top: 850, anchor: 'start', lines: [line(`${t.rnd} ($2.2B)`, 34, 800, RED_LABEL)] }] },
      sm: {
        blocks: [{
          x: 2413, top: zh ? 948 : 976, anchor: 'start', lineGap: 8,
          lines: zh
            ? [line(t.sm, 34, 800, RED_LABEL), line('($2.1B)', 34, 400, RED_LABEL)]
            : [line(`${t.sm} ($2.1B)`, 34, 800, RED_LABEL)],
        }],
      },
      ga: { blocks: [{ x: 2414, top: 1079, anchor: 'start', lineGap: 8, lines: [line(t.ga, 34, 800, RED_LABEL), line('($0.4B)', 34, 400, RED_LABEL)] }] },
      amortization: {
        blocks: [{
          x: 2359, top: 1201, anchor: 'start', lineGap: 8,
          lines: [line(t.amortization, 34, 800, RED_LABEL), line('($0.8B)', 34, 400, RED_LABEL)],
        }],
      },
      other_opex: {
        blocks: [{
          x: 2417, top: 1300, anchor: 'start', lineGap: 8,
          lines: [line(t.other, 34, 800, RED_LABEL), line('($0.1B)', 34, 400, RED_LABEL)],
        }],
      },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'oracle-q2-fy24',
    name: 'Oracle · Q2 FY24',
    company: 'Oracle',
    meta: {
      company: 'Oracle',
      title: 'Oracle Q2 FY24 Income Statement',
      period: 'Q2 FY24',
      periodNote: 'Ending Nov. 2023',
      currency: '$',
      unit: 'B',
      decimals: 3,
      referenceImage: { src: 'input/processed/oracle-q2-fy24.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2123,
      periodX: 895,
      periodY: 1295,
      periodNoteY: 1341,
      logoWidth: 293,
      logoHeight: 212,
      logoY: 248,
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
      scale: 29.3,
      nodes: {
        cloud_services_support: { x: 394, y: 481, width: 71, height: 282 },
        cloud_on_premise_license: { x: 394, y: 901, width: 71, height: 33 },
        hardware: { x: 394, y: 1076, width: 71, height: 21 },
        services: { x: 394, y: 1255, width: 71, height: 38 },
        revenue: { x: 861, y: 677, width: 70, height: 380 },
        gross_profit: { x: 1325, y: 578, width: 72, height: 269 },
        cost_of_revenue: { x: 1330, y: 1061, width: 72, height: 108 },
        cor_cloud: { x: 1538, y: 1101, width: 70, height: 65 },
        cor_hardware: { x: 1538, y: 1226, width: 70, height: 35 },
        cor_services: { x: 1541, y: 1351, width: 70, height: 4 },
        operating_profit: { x: 1796, y: 500, width: 70, height: 105 },
        operating_expenses: { x: 1796, y: 745, width: 70, height: 162 },
        net_profit: { x: 2262, y: 376, width: 71, height: 71 },
        financial: { x: 2262, y: 593, width: 71, height: 24 },
        tax: { x: 2262, y: 691, width: 71, height: 4 },
        other_non_operating: { x: 2262, y: 764, width: 71, height: 1 },
        rnd: { x: 2262, y: 850, width: 71, height: 62 },
        sm: { x: 2262, y: 980, width: 71, height: 59 },
        ga: { x: 2262, y: 1112, width: 71, height: 22 },
        amortization: { x: 2262, y: 1233, width: 71, height: 8 },
        other_opex: { x: 2262, y: 1340, width: 71, height: 1 },
      },
      labels: labels(false),
    },
    nodes: [
      { id: 'cloud_services_support', col: 0, order: 0, type: 'source', label: ['Cloud services', '& license support'], value: 9.6, valueText: '$9.6B', notes: ['+12% Y/Y'] },
      { id: 'cloud_on_premise_license', col: 0, order: 1, type: 'source', label: ['Cloud license', '& on-premise', 'license'], value: 1.1, valueText: '$1.1B', notes: ['(18%) Y/Y'] },
      { id: 'hardware', col: 0, order: 2, type: 'source', label: 'Hardware', value: 0.8, valueText: '$0.8B', notes: ['(11%) Y/Y'] },
      { id: 'services', col: 0, order: 3, type: 'source', label: 'Services', value: 1.4, valueText: '$1.4B', notes: ['(2%) Y/Y'] },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 12.9, valueText: '$12.9B', notes: ['+5% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 9.2, valueText: '$9.2B', notes: ['71% margin', '(2pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 3.7, valueText: '($3.7B)' },
      { id: 'cor_cloud', col: 3, order: 2, type: 'cost', label: 'Cloud', value: 2.2, valueText: '($2.2B)', notes: ['79% gross margin'] },
      { id: 'cor_hardware', col: 3, order: 3, type: 'cost', label: 'Hardware', value: 0.2, valueText: '($0.2B)', notes: ['72% gross margin'] },
      { id: 'cor_services', col: 3, order: 4, type: 'cost', label: 'Services', value: 1.3, valueText: '($1.3B)', notes: ['10% gross margin'] },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 3.6, valueText: '$3.6B', notes: ['28% margin', '+3pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 5.6, valueText: '($5.6B)' },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 2.5, valueText: '$2.5B', notes: ['19% margin', '+5pp Y/Y'] },
      { id: 'financial', col: 4, order: 1, type: 'cost', label: 'Financial', value: 0.9, valueText: '($0.9B)' },
      { id: 'tax', col: 4, order: 2, type: 'cost', label: 'Tax', value: 0.2, valueText: '($0.2B)' },
      { id: 'other_non_operating', col: 4, order: 3, type: 'cost', label: 'Other', value: 0.014, valueText: '($14M)' },
      { id: 'rnd', col: 4, order: 4, type: 'cost', label: 'R&D', value: 2.2, valueText: '($2.2B)' },
      { id: 'sm', col: 4, order: 5, type: 'cost', label: 'S&M', value: 2.1, valueText: '($2.1B)' },
      { id: 'ga', col: 4, order: 6, type: 'cost', label: 'G&A', value: 0.4, valueText: '($0.4B)' },
      { id: 'amortization', col: 4, order: 7, type: 'cost', label: 'Amortization', value: 0.8, valueText: '($0.8B)' },
      { id: 'other_opex', col: 4, order: 8, type: 'cost', label: 'Other', value: 0.1, valueText: '($0.1B)' },
    ],
    links: [
      { source: 'cloud_services_support', target: 'revenue', value: 9.6, sourceWidth: 282, targetWidth: 283, targetOrder: 0 },
      { source: 'cloud_on_premise_license', target: 'revenue', value: 1.1, sourceWidth: 33, targetWidth: 32, targetOrder: 1 },
      { source: 'hardware', target: 'revenue', value: 0.8, sourceWidth: 21, targetWidth: 24, targetOrder: 2 },
      { source: 'services', target: 'revenue', value: 1.4, sourceWidth: 38, targetWidth: 41, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 9.2, sourceWidth: 271, targetWidth: 269, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 3.7, sourceWidth: 109, targetWidth: 108, sourceOrder: 1 },
      { source: 'cost_of_revenue', target: 'cor_cloud', value: 2.2, sourceWidth: 64, targetWidth: 65, sourceOrder: 0 },
      { source: 'cost_of_revenue', target: 'cor_hardware', value: 0.2, sourceWidth: 6, targetWidth: 35, sourceOrder: 1 },
      { source: 'cost_of_revenue', target: 'cor_services', value: 1.3, sourceWidth: 38, targetWidth: 4, sourceOrder: 2 },
      { source: 'gross_profit', target: 'operating_profit', value: 3.6, sourceWidth: 105, targetWidth: 105, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 5.6, sourceWidth: 164, targetWidth: 162, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 2.5, sourceWidth: 73, targetWidth: 71, sourceOrder: 0 },
      { source: 'operating_profit', target: 'financial', value: 0.9, sourceWidth: 26, targetWidth: 24, sourceOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 0.2, sourceWidth: 5, targetWidth: 4, sourceOrder: 2 },
      { source: 'operating_profit', target: 'other_non_operating', value: 0.014, sourceWidth: 1, targetWidth: 1, sourceOrder: 3 },
      { source: 'operating_expenses', target: 'rnd', value: 2.2, sourceWidth: 64, targetWidth: 62, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 2.1, sourceWidth: 61, targetWidth: 59, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 0.4, sourceWidth: 12, targetWidth: 22, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'amortization', value: 0.8, sourceWidth: 22, targetWidth: 8, sourceOrder: 3 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.1, sourceWidth: 3, targetWidth: 1, sourceOrder: 4 },
    ],
    i18n: {
      preservedAnnotationText: ['ORACLE'],
      zh: {
        name: 'Oracle · 2024 财年第二季度',
        meta: {
          title: 'Oracle 2024 财年第二季度利润表',
          period: '2024 财年第二季度',
          periodNote: '截至 2023 年 11 月',
          titleTextLength: 2123,
        },
        nodes: {
          cloud_services_support: { label: '云服务与许可证支持', notes: ['同比 +12%'] },
          cloud_on_premise_license: { label: '云许可证与本地部署许可证', notes: ['同比 (18%)'] },
          hardware: { label: '硬件', notes: ['同比 (11%)'] },
          services: { label: '服务', notes: ['同比 (2%)'] },
          revenue: { label: '收入', notes: ['同比 +5%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 71%', '同比 (2 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          cor_cloud: { label: '云', notes: ['毛利率 79%'] },
          cor_hardware: { label: '硬件', notes: ['毛利率 72%'] },
          cor_services: { label: '服务', notes: ['毛利率 10%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 28%', '同比 +3 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 19%', '同比 +5 个百分点'] },
          financial: { label: '财务费用' },
          tax: { label: '税费' },
          other_non_operating: { label: '其他' },
          rnd: { label: '研发' },
          sm: { label: '销售与市场' },
          ga: { label: '一般及行政' },
          amortization: { label: '摊销' },
          other_opex: { label: '其他' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
