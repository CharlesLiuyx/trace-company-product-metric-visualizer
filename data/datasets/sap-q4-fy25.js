/* ====================================================================
 * SAP - Q4 FY25 income statement (€B)
 * Reconstructed from input/processed/sap-q4-fy25.png as a fixed
 * d3-sankey layout with a pure SVG SAP logo annotation.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const NAVY = '#35495f';
  const NAVY_LINK = '#9da6af';
  const BLUE = '#1a68c0';
  const BLUE_LINK = '#91b4db';
  const CYAN = '#02afeb';
  const CYAN_LINK = '#86d3ee';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';

  const block = (x, top, parts, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    lineGap: options.lineGap == null ? 9 : options.lineGap,
    parts,
    ...(options.nameSize ? { nameSize: options.nameSize } : {}),
    ...(options.valueSize ? { valueSize: options.valueSize } : {}),
    ...(options.noteSize ? { noteSize: options.noteSize } : {}),
    ...(options.nameColor ? { nameColor: options.nameColor } : {}),
    ...(options.valueColor ? { valueColor: options.valueColor } : {}),
    ...(options.noteColor ? { noteColor: options.noteColor } : {}),
  });
  const text = (value, size, weight, color) => ({ text: value, size, weight, color });

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      <g transform="translate(1010 253)" data-typography-role="brand">
        <defs>
          <linearGradient id="sap-q4-fy25-logo-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#12b7e7"/>
            <stop offset="0.55" stop-color="#13a9df"/>
            <stop offset="1" stop-color="#226bc0"/>
          </linearGradient>
        </defs>
        <path d="M0 0H340L172 168H0Z" fill="url(#sap-q4-fy25-logo-gradient)"/>
        <path d="M0 84H256L172 168H0Z" fill="#226bc0" opacity="0.68"/>
        <text x="18" y="134" transform="skewX(-8)" font-family="Arial Black,Arial,sans-serif" font-size="116" font-weight="900" textLength="236" lengthAdjust="spacingAndGlyphs" fill="#ffffff">SAP</text>
        <text x="210" y="168" font-family="Arial,Helvetica,sans-serif" font-size="31" font-weight="700" fill="#2272c2">&#174;</text>
      </g>
      <g fill="${NOTE}" font-size="25" font-weight="400">
        <text x="73" y="1301">SaaS = Software as a Service</text>
        <text x="73" y="1330">PaaS = Platform as a Service</text>
        <text x="73" y="1360">IaaS = Infrastructure as a Service</text>
      </g>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'sap-q4-fy25',
    name: 'SAP · Q4 FY25',
    company: 'SAP',
    meta: {
      company: 'SAP',
      title: 'SAP Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '€',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/sap-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 1958,
      hidePeriodStamp: true,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: NAVY, label: NAVY },
        hub: { node: NAVY, label: NAVY },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: NAVY_LINK,
        hub: NAVY_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 28, lineGap: 9 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 27.2,
      nodes: {
        saas_paas: { x: 364, y: 453, width: 71, height: 150 },
        iaas: { x: 364, y: 784, width: 71, height: 1 },
        software_licenses: { x: 364, y: 919, width: 71, height: 10 },
        software_support: { x: 364, y: 1082, width: 71, height: 69 },
        cloud: { x: 738, y: 558, width: 70, height: 152 },
        licenses_support: { x: 738, y: 957, width: 70, height: 80 },
        services: { x: 738, y: 1234, width: 70, height: 28 },
        revenue: { x: 1112, y: 679, width: 70, height: 264 },
        gross_profit: { x: 1485, y: 559, width: 71, height: 191 },
        cost_of_revenue: { x: 1485, y: 968, width: 71, height: 70 },
        operating_profit: { x: 1859, y: 468, width: 71, height: 67 },
        operating_expenses: { x: 1859, y: 745, width: 71, height: 122 },
        other_income: { x: 2122, y: 470, width: 70, height: 4 },
        net_profit: { x: 2232, y: 379, width: 71, height: 50 },
        tax: { x: 2232, y: 633, width: 71, height: 22 },
        sm: { x: 2232, y: 889, width: 71, height: 61 },
        rnd: { x: 2232, y: 1072, width: 71, height: 45 },
        ga: { x: 2232, y: 1232, width: 71, height: 11 },
        // SAP reports €21M (0.021B) for other operating income/expense, net.
        // Its 0.57px proportional height keeps a 1px flow, while the terminal
        // face uses Comcast's established 3px small-node visibility minimum.
        other_opex: { x: 2232, y: 1369, width: 71, height: 3 },
      },
      labels: {
        saas_paas: { blocks: [
          block(399, 333, ['value', 'notes'], { valueColor: NAVY, noteColor: NOTE }),
          block(336, 512, ['name'], { anchor: 'end', nameColor: NAVY }),
        ] },
        iaas: { blocks: [
          block(399, 698, ['value', 'notes'], { valueColor: NAVY, noteColor: NOTE }),
          block(312, 760, ['name'], { anchor: 'end', nameColor: NAVY }),
        ] },
        software_licenses: { blocks: [
          block(399, 833, ['value', 'notes'], { valueColor: BLUE, noteColor: NOTE }),
          block(330, 877, ['name'], { anchor: 'end', lineGap: 8, nameColor: BLUE }),
        ] },
        software_support: { blocks: [
          block(399, 996, ['value', 'notes'], { valueColor: BLUE, noteColor: NOTE }),
          block(329, 1084, ['name'], { anchor: 'end', lineGap: 8, nameColor: BLUE }),
        ] },
        cloud: { blocks: [
          block(773, 412, ['name', 'value', 'notes'], { valueColor: NAVY, noteColor: NOTE, nameColor: NAVY }),
        ] },
        licenses_support: { blocks: [
          block(773, 761, ['name', 'value', 'notes'], { valueColor: BLUE, noteColor: NOTE, nameColor: BLUE }),
        ] },
        services: { blocks: [
          block(773, 1133, ['value', 'notes'], { valueColor: CYAN, noteColor: NOTE }),
          block(709, 1226, ['name'], { anchor: 'end', nameColor: CYAN }),
        ] },
        revenue: { blocks: [
          block(1147, 539, ['name', 'value', 'notes'], { valueColor: NAVY, noteColor: NOTE, nameColor: NAVY }),
        ] },
        gross_profit: { blocks: [
          block(1520, 381, ['name', 'value', 'notes'], { valueColor: GREEN_LABEL, noteColor: NOTE, nameColor: GREEN_LABEL }),
        ] },
        cost_of_revenue: { blocks: [
          block(1523, 1065, ['name', 'value'], { lineGap: 8, nameSize: 35, valueSize: 33, valueColor: RED_LABEL, nameColor: RED_LABEL }),
        ] },
        operating_profit: { blocks: [
          block(1895, 287, ['name', 'value', 'notes'], { valueColor: GREEN_LABEL, noteColor: NOTE, nameColor: GREEN_LABEL }),
        ] },
        operating_expenses: { blocks: [
          block(1894, 874, ['name', 'value'], { lineGap: 8, nameSize: 35, valueSize: 33, valueColor: RED_LABEL, nameColor: RED_LABEL }),
        ] },
        other_income: { blocks: [
          block(2157, 488, ['name', 'value'], { lineGap: 8, nameSize: 30, valueSize: 30, valueColor: GREEN_LABEL, nameColor: GREEN_LABEL }),
        ] },
        net_profit: { blocks: [
          block(2330, 362, ['name', 'value', 'notes'], { anchor: 'start', valueColor: GREEN_LABEL, noteColor: NOTE, nameColor: GREEN_LABEL }),
        ] },
        tax: { blocks: [
          block(2423, 614, ['name', 'value'], { lineGap: 8, nameSize: 30, valueSize: 30, valueColor: RED_LABEL, nameColor: RED_LABEL }),
        ] },
        sm: { blocks: [{
          x: 2350, top: 878, anchor: 'start', lineGap: 8,
          lines: [
            text('S&M (€2.3B)', 30, 800, RED_LABEL),
            text('24% of revenue', 27, 400, NOTE),
            text('(3pp) Y/Y', 27, 400, NOTE),
          ],
        }] },
        rnd: { blocks: [{
          x: 2350, top: 1058, anchor: 'start', lineGap: 8,
          lines: [
            text('R&D (€1.7B)', 30, 800, RED_LABEL),
            text('18% of revenue', 27, 400, NOTE),
            text('(0pp) Y/Y', 27, 400, NOTE),
          ],
        }] },
        ga: { blocks: [{
          x: 2350, top: 1218, anchor: 'start', lineGap: 8,
          lines: [
            text('G&A (€0.5B)', 30, 800, RED_LABEL),
            text('5% of revenue', 27, 400, NOTE),
            text('+1pp Y/Y', 27, 400, NOTE),
          ],
        }] },
        other_opex: { blocks: [{
          x: 2324, top: 1357, anchor: 'start', lineGap: 8,
          lines: [text('Other (€0.0B)', 30, 800, RED_LABEL)],
        }] },
      },
    },

    nodes: [
      { id: 'saas_paas', col: 0, order: 0, type: 'source', label: 'SaaS/PaaS', value: 5.5, valueText: '€5.5B', notes: ['+21% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'iaas', col: 0, order: 1, type: 'source', label: 'IaaS', value: 0.1, valueText: '€0.1B', notes: ['(37%) Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'software_licenses', col: 0, order: 2, type: 'source', label: ['Software', 'Licenses'], value: 0.5, valueText: '€0.5B', notes: ['(34%) Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'software_support', col: 0, order: 3, type: 'source', label: ['Software', 'Support'], value: 2.6, valueText: '€2.6B', notes: ['(11%) Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'cloud', col: 1, order: 0, type: 'source', label: 'Cloud', value: 5.6, valueText: '€5.6B', notes: ['+19% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'licenses_support', col: 1, order: 1, type: 'source', label: ['Licenses', '& Support'], value: 3.0, valueText: '€3.0B', notes: ['(15%) Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'services', col: 1, order: 2, type: 'source', label: 'Services', value: 1.1, valueText: '€1.1B', notes: ['(4%) Y/Y'], color: CYAN, labelColor: CYAN, linkTint: CYAN_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 9.7, valueText: '€9.7B', notes: ['+3% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 7.0, valueText: '€7.0B', notes: ['73% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 2.6, valueText: '(€2.6B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 2.6, valueText: '€2.6B', notes: ['26% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 4.5, valueText: '(€4.5B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 5, order: 0, type: 'profit', label: 'Other', value: 0.2, valueText: '€0.2B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 1.9, valueText: '€1.9B', notes: ['20% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.9, valueText: '(€0.9B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 6, order: 2, type: 'cost', label: 'S&M', value: 2.3, valueText: '(€2.3B)', notes: ['24% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 3, type: 'cost', label: 'R&D', value: 1.7, valueText: '(€1.7B)', notes: ['18% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 6, order: 4, type: 'cost', label: 'G&A', value: 0.5, valueText: '(€0.5B)', notes: ['5% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_opex', col: 6, order: 5, type: 'cost', label: 'Other', value: 0.021, valueText: '(€0.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'saas_paas', target: 'cloud', value: 5.5, width: 150, sourceWidth: 150, targetWidth: 150, targetOrder: 0, linkTint: NAVY_LINK },
      { source: 'iaas', target: 'cloud', value: 0.1, width: 1, sourceWidth: 1, targetWidth: 2, targetOrder: 1, linkTint: NAVY_LINK },
      { source: 'software_licenses', target: 'licenses_support', value: 0.5, width: 10, sourceWidth: 10, targetWidth: 11, targetOrder: 0, linkTint: BLUE_LINK },
      { source: 'software_support', target: 'licenses_support', value: 2.6, width: 69, sourceWidth: 69, targetWidth: 69, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'cloud', target: 'revenue', value: 5.6, width: 152, sourceWidth: 152, targetWidth: 156, targetOrder: 0, linkTint: NAVY_LINK },
      { source: 'licenses_support', target: 'revenue', value: 3.0, width: 80, sourceWidth: 80, targetWidth: 80, targetOrder: 1, linkTint: BLUE_LINK },
      { source: 'services', target: 'revenue', value: 1.1, width: 28, sourceWidth: 28, targetWidth: 28, targetOrder: 2, linkTint: CYAN_LINK },
      { source: 'revenue', target: 'gross_profit', value: 7.0, width: 191, sourceWidth: 194, targetWidth: 191, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 2.6, width: 70, sourceWidth: 70, targetWidth: 70, sourceOrder: 1, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 2.6, width: 67, sourceWidth: 67, targetWidth: 67, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.5, width: 122, sourceWidth: 124, targetWidth: 122, sourceOrder: 1, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 1.7, width: 46, sourceWidth: 46, targetWidth: 46, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.9, width: 22, sourceWidth: 21, targetWidth: 22, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'other_income', target: 'net_profit', value: 0.2, width: 4, sourceWidth: 4, targetWidth: 4, sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK },
      { source: 'operating_expenses', target: 'sm', value: 2.3, width: 61, sourceWidth: 63, targetWidth: 61, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 1.7, width: 45, sourceWidth: 46, targetWidth: 45, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 0.5, width: 11, sourceWidth: 12, targetWidth: 11, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
      // Keep the source ribbon at the €0.021B-proportional 1px width. Its
      // 3px terminal width exactly fills the shared small-node face, matching
      // the Comcast Other/Tax minimum-visible-node convention.
      { source: 'operating_expenses', target: 'other_opex', value: 0.021, width: 1, sourceWidth: 1, targetWidth: 3, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
    ],

    i18n: {
      zh: {
        name: 'SAP · 2025 财年第四季度',
        meta: {
          title: 'SAP 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
        },
        nodes: {
          saas_paas: { label: 'SaaS/PaaS', notes: ['同比 +21%'] },
          iaas: { label: 'IaaS', notes: ['同比 (37%)'] },
          software_licenses: { label: ['软件', '许可证'], notes: ['同比 (34%)'] },
          software_support: { label: ['软件', '支持'], notes: ['同比 (11%)'] },
          cloud: { label: '云', notes: ['同比 +19%'] },
          licenses_support: { label: ['许可证', '与支持'], notes: ['同比 (15%)'] },
          services: { label: '服务', notes: ['同比 (4%)'] },
          revenue: { label: '收入', notes: ['同比 +3%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 73%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 26%', '同比 +5 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 20%', '同比 +2 个百分点'] },
          tax: { label: '税费' },
          sm: { label: '销售与市场', notes: ['占收入 24%', '同比 (3 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 18%', '同比 (0 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 5%', '同比 +1 个百分点'] },
          other_opex: { label: '其他' },
        },
        layout: {
          labels: {
            sm: { blocks: [{
              x: 2350, top: 878, anchor: 'start', lineGap: 8,
              lines: [text('销售与市场 (€2.3B)', 30, 800, RED_LABEL), text('占收入 24%', 27, 400, NOTE), text('同比 (3 个百分点)', 27, 400, NOTE)],
            }] },
            rnd: { blocks: [{
              x: 2350, top: 1058, anchor: 'start', lineGap: 8,
              lines: [text('研发 (€1.7B)', 30, 800, RED_LABEL), text('占收入 18%', 27, 400, NOTE), text('同比 (0 个百分点)', 27, 400, NOTE)],
            }] },
            ga: { blocks: [{
              x: 2350, top: 1218, anchor: 'start', lineGap: 8,
              lines: [text('管理费用 (€0.5B)', 30, 800, RED_LABEL), text('占收入 5%', 27, 400, NOTE), text('同比 +1 个百分点', 27, 400, NOTE)],
            }] },
            other_opex: { blocks: [{
              x: 2324, top: 1357, anchor: 'start', lineGap: 8,
              lines: [text('其他 (€0.0B)', 30, 800, RED_LABEL)],
            }] },
          },
        },
      },
    },
  });
})();
