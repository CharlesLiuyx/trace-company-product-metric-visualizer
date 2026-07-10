/* ====================================================================
 * Snowflake - Q4 FY26 income statement ($M)
 * Reconstructed from input/processed/snowflake-q4-fy26.png as a fixed
 * d3-sankey layout with pure SVG/vector annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const BLUE = '#40bce8';
  const BLUE_LABEL = '#29b5e8';
  const BLUE_LINK = '#a2d9ed';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2355;

  const snowflakeLogo = `
    <g fill="${BLUE_LABEL}">
      <g transform="translate(78 78)">
        <g id="snowflake-arm">
          <rect x="-13" y="-78" width="26" height="61" rx="13"/>
          <path d="M-13-42 L-50-63 Q-58-68-64-61 Q-70-54-63-48 L-25-26 Z"/>
        </g>
        <use href="#snowflake-arm" transform="rotate(60)"/>
        <use href="#snowflake-arm" transform="rotate(120)"/>
        <use href="#snowflake-arm" transform="rotate(180)"/>
        <use href="#snowflake-arm" transform="rotate(240)"/>
        <use href="#snowflake-arm" transform="rotate(300)"/>
        <path d="M0-20 L20 0 L0 20 L-20 0 Z" fill="#f2f2f2"/>
        <path d="M0-11 L11 0 L0 11 L-11 0 Z"/>
      </g>
      <text x="172" y="106" font-family="Roboto,Arial,sans-serif" font-size="114" font-weight="300" letter-spacing="-5">snowflake</text>
    </g>`;

  const card = (x, y, width, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="160" rx="35" fill="${BLUE}"/>
      ${lines.map((line) => `<text x="${x + width / 2}" y="${y + line.y}" text-anchor="middle" font-size="${line.size}" font-weight="${line.weight || 400}" fill="#ffffff">${line.text}</text>`).join('')}
    </g>`;

  const annotationsEn = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${card(26, 1083, 184, [
        { text: 'DBNR', y: 51, size: 31, weight: 800 },
        { text: '125%', y: 95, size: 31 },
        { text: '(1pp) Y/Y', y: 136, size: 25 },
      ])}
      ${card(224, 1083, 146, [
        { text: 'RPO', y: 51, size: 31, weight: 800 },
        { text: '$9.8B', y: 95, size: 29 },
        { text: '+42% Y/Y', y: 136, size: 23 },
      ])}
      ${card(384, 1081, 451, [
        { text: 'Customers 13,328 +21% Y/Y', y: 74, size: 27, weight: 700 },
        { text: '&gt; $1M 733 +27% Y/Y', y: 116, size: 26, weight: 700 },
      ])}
      <text x="201" y="1285" font-size="29" font-weight="400" fill="${NOTE}">DBNR = Dollar Based Net Retention</text>
      <text x="156" y="1337" font-size="29" font-weight="400" fill="${NOTE}">RPO = Remaining Performance Obligation</text>
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${card(26, 1083, 184, [
        { text: 'DBNR', y: 51, size: 31, weight: 800 },
        { text: '125%', y: 95, size: 31 },
        { text: '同比 (1 个百分点)', y: 136, size: 20 },
      ])}
      ${card(224, 1083, 146, [
        { text: 'RPO', y: 51, size: 31, weight: 800 },
        { text: '$9.8B', y: 95, size: 29 },
        { text: '同比 +42%', y: 136, size: 22 },
      ])}
      ${card(384, 1081, 451, [
        { text: '客户 13,328，同比 +21%', y: 74, size: 27, weight: 700 },
        { text: '&gt; $1M 客户 733，同比 +27%', y: 116, size: 25, weight: 700 },
      ])}
      <text x="201" y="1285" font-size="29" font-weight="400" fill="${NOTE}">DBNR = 美元口径净收入留存率</text>
      <text x="156" y="1337" font-size="29" font-weight="400" fill="${NOTE}">RPO = 剩余履约义务</text>
    </g>`;

  const zhLabels = {
    product_revenue: {
      blocks: [
        { x: 410, top: 376, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 39 }, { text: '同比 +30%', size: 29, color: NOTE }] },
        { x: 143, top: 570, anchor: 'start', lineGap: 9, lines: [{ text: '产品', size: 40, weight: 800 }, { text: '收入', size: 40, weight: 800 }] },
      ],
    },
    professional_services: {
      blocks: [
        { x: 410, top: 901, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 39 }, { text: '同比 +32%', size: 29, color: NOTE }] },
        { x: 143, top: 960, anchor: 'start', lineGap: 9, lines: [{ text: '专业', size: 40, weight: 800 }, { text: '服务', size: 40, weight: 800 }] },
      ],
    },
    revenue: { blocks: [{ x: 877, top: 460, anchor: 'middle', lineGap: 10, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '同比 +30%', size: 29, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1344, top: 284, anchor: 'middle', lineGap: 10, lines: [{ text: '毛利润', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '利润率 67%', size: 29, color: NOTE }, { text: '同比 +1 个百分点', size: 29, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1344, top: 1048, anchor: 'middle', lineGap: 8, lines: [{ text: '收入', size: 36, weight: 800 }, { text: '成本', size: 36, weight: 800 }, { text: '$value', size: 36 }] }] },
    operating_loss: { blocks: [{ x: 1632, top: 990, anchor: 'middle', lineGap: 8, lines: [{ text: '营业亏损', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '利润率 (25%)', size: 29, color: NOTE }, { text: '同比 +14 个百分点', size: 29, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1812, top: 443, anchor: 'middle', lineGap: 8, lines: [{ text: '营业费用', size: 40, weight: 800 }, { text: '$value', size: 39 }] }] },
    sm: { blocks: [{ x: RIGHT_LABEL_X, top: 453, anchor: 'start', lineGap: 8, lines: [{ text: '销售与', size: 32, weight: 800 }, { text: '营销', size: 32, weight: 800 }, { text: '$value', size: 31 }, { text: '占收入 43%', size: 29, color: NOTE }, { text: '同比 (1 个百分点)', size: 29, color: NOTE }] }] },
    rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 753, anchor: 'start', lineGap: 8, lines: [{ text: '研究与', size: 32, weight: 800 }, { text: '开发', size: 32, weight: 800 }, { text: '$value', size: 31 }, { text: '占收入 40%', size: 29, color: NOTE }, { text: '同比 (10 个百分点)', size: 29, color: NOTE }] }] },
    ga: { blocks: [{ x: RIGHT_LABEL_X, top: 1027, anchor: 'start', lineGap: 8, lines: [{ text: '一般及', size: 32, weight: 800 }, { text: '行政', size: 32, weight: 800 }, { text: '$value', size: 31 }, { text: '占收入 9%', size: 29, color: NOTE }, { text: '同比 (3 个百分点)', size: 29, color: NOTE }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'snowflake-q4-fy26',
    name: 'Snowflake · Q4 FY26',
    company: 'Snowflake',
    meta: {
      company: 'Snowflake',
      title: 'Snowflake Q4 FY26 Income Statement',
      period: 'Q4 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/snowflake-q4-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2435,
      periodX: 2419,
      periodY: 273,
      periodNoteY: 318,
      logoWidth: 755,
      logoHeight: 156,
      logoY: 263,
      logoViewBox: '0 0 755 156',
      logoSvg: snowflakeLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      nodeRadius: 0,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: BLUE_LABEL },
        hub: { node: BLUE, label: BLUE_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: BLUE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
      interfaceAudit: { mode: 'error' },
    },
    annotationsSvg: annotationsEn,
    layout: {
      scale: 1,
      nodes: {
        product_revenue: { x: 375, y: 469, width: 71, height: 299 },
        professional_services: { x: 375, y: 995, width: 71, height: 12 },
        revenue: { x: 842, y: 602, width: 71, height: 312 },
        gross_profit: { x: 1309, y: 468, width: 71, height: 208 },
        cost_of_revenue: { x: 1309, y: 927, width: 71, height: 103 },
        operating_loss: { x: 1597, y: 896, width: 71, height: 76 },
        operating_expenses: { x: 1777, y: 603, width: 71, height: 285 },
        sm: { x: 2243, y: 445, width: 71, height: 133 },
        rnd: { x: 2243, y: 738, width: 71, height: 123 },
        ga: { x: 2243, y: 1048, width: 71, height: 27 },
      },
      labels: {
        product_revenue: {
          blocks: [
            { x: 410, top: 376, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 39 }, { text: '+30% Y/Y', size: 29, color: NOTE }] },
            { x: 143, top: 570, anchor: 'start', lineGap: 9, lines: [{ text: 'Product', size: 40, weight: 800 }, { text: 'revenue', size: 40, weight: 800 }] },
          ],
        },
        professional_services: {
          blocks: [
            { x: 410, top: 901, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 39 }, { text: '+32% Y/Y', size: 29, color: NOTE }] },
            { x: 102, top: 960, anchor: 'start', lineGap: 9, lines: [{ text: 'Professional', size: 40, weight: 800 }, { text: 'services', size: 40, weight: 800 }] },
          ],
        },
        revenue: { blocks: [{ x: 877, top: 460, anchor: 'middle', lineGap: 10, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '+30% Y/Y', size: 29, color: NOTE }] }] },
        gross_profit: { blocks: [{ x: 1344, top: 284, anchor: 'middle', lineGap: 10, lines: [{ text: 'Gross profit', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '67% margin', size: 29, color: NOTE }, { text: '+1pp Y/Y', size: 29, color: NOTE }] }] },
        cost_of_revenue: { blocks: [{ x: 1344, top: 1048, anchor: 'middle', lineGap: 8, lines: [{ text: 'Cost of', size: 36, weight: 800 }, { text: 'revenue', size: 36, weight: 800 }, { text: '$value', size: 36 }] }] },
        operating_loss: { blocks: [{ x: 1632, top: 990, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating', size: 40, weight: 800 }, { text: 'loss', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '(25%) margin', size: 29, color: NOTE }, { text: '+14pp Y/Y', size: 29, color: NOTE }] }] },
        operating_expenses: { blocks: [{ x: 1812, top: 443, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating', size: 40, weight: 800 }, { text: 'expenses', size: 40, weight: 800 }, { text: '$value', size: 39 }] }] },
        sm: { blocks: [{ x: RIGHT_LABEL_X, top: 453, anchor: 'start', lineGap: 8, lines: [{ text: 'Sales &', size: 32, weight: 800 }, { text: 'marketing', size: 32, weight: 800 }, { text: '$value', size: 31 }, { text: '43% of revenue', size: 29, color: NOTE }, { text: '(1pp) Y/Y', size: 29, color: NOTE }] }] },
        rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 753, anchor: 'start', lineGap: 8, lines: [{ text: 'Research &', size: 32, weight: 800 }, { text: 'development', size: 32, weight: 800 }, { text: '$value', size: 31 }, { text: '40% of revenue', size: 29, color: NOTE }, { text: '(10pp) Y/Y', size: 29, color: NOTE }] }] },
        ga: { blocks: [{ x: RIGHT_LABEL_X, top: 1027, anchor: 'start', lineGap: 8, lines: [{ text: 'General &', size: 32, weight: 800 }, { text: 'admin', size: 32, weight: 800 }, { text: '$value', size: 31 }, { text: '9% of revenue', size: 29, color: NOTE }, { text: '(3pp) Y/Y', size: 29, color: NOTE }] }] },
      },
    },
    nodes: [
      { id: 'product_revenue', col: 0, order: 0, type: 'source', label: 'Product revenue', value: 1227, notes: ['+30% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'professional_services', col: 0, order: 1, type: 'source', label: 'Professional services', value: 57, notes: ['+32% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1284, notes: ['+30% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 858, notes: ['67% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: 'Cost of revenue', value: 426, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 0, type: 'cost', label: 'Operating loss', value: -318, notes: ['(25%) margin', '+14pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: 'Operating expenses', value: 1176, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 0, type: 'cost', label: 'Sales & marketing', value: 551, notes: ['43% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 1, type: 'cost', label: 'Research & development', value: 511, notes: ['40% of revenue', '(10pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'General & admin', value: 114, notes: ['9% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'product_revenue', target: 'revenue', value: 1227, sourceWidth: 299, targetWidth: 300, y0: 618.5, y1: 752, sourceOrder: 0, targetOrder: 0 },
      { source: 'professional_services', target: 'revenue', value: 57, sourceWidth: 12, targetWidth: 12, y0: 1001, y1: 908, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 858, width: 208, y0: 706, y1: 572, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 426, sourceWidth: 104, targetWidth: 103, y0: 862, y1: 978.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 858, width: 208, y0: 572, y1: 707, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 318, sourceWidth: 76, targetWidth: 77, y0: 934, y1: 849.5, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 551, width: 133, y0: 669.5, y1: 511.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 511, width: 123, y0: 797.5, y1: 799.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 114, sourceWidth: 29, targetWidth: 27, y0: 873.5, y1: 1061.5, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Snowflake · 2026 财年第四季度',
        meta: { title: 'Snowflake 2026 财年第四季度利润表', period: '2026 财年第四季度', periodNote: '截至 2026 年 1 月', titleSize: 112, titleTextLength: 2050 },
        annotationsSvg: annotationsZh,
        nodes: {
          product_revenue: { label: '产品收入', notes: ['同比 +30%'] },
          professional_services: { label: '专业服务', notes: ['同比 +32%'] },
          revenue: { label: '收入', notes: ['同比 +30%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 67%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (25%)', '同比 +14 个百分点'] },
          operating_expenses: { label: '营业费用' },
          sm: { label: '销售与营销', notes: ['占收入 43%', '同比 (1 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 40%', '同比 (10 个百分点)'] },
          ga: { label: '一般及行政', notes: ['占收入 9%', '同比 (3 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();
