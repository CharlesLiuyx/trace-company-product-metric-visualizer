/* ====================================================================
 * Snowflake - Q1 FY27 income statement ($M)
 * Reconstructed from input/processed/snowflake-q1-fy27.png as a fixed
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
      <g transform="translate(75 78) scale(.88)">
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
      <text x="168" y="106" font-family="Roboto,Arial,sans-serif" font-size="108" font-weight="300" letter-spacing="-5" textLength="470" lengthAdjust="spacingAndGlyphs">snowflake</text>
    </g>`;

  const card = (x, y, width, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="160" rx="35" fill="${BLUE}"/>
      ${lines.map((line) => `<text x="${x + width / 2}" y="${y + line.y}" text-anchor="middle" font-size="${line.size}" font-weight="${line.weight || 400}" fill="#ffffff">${line.text}</text>`).join('')}
    </g>`;

  const annotationsEn = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${card(26, 1095, 184, [
        { text: 'DBNR', y: 51, size: 31, weight: 800 },
        { text: '126%', y: 95, size: 31 },
        { text: '+2pp Y/Y', y: 136, size: 25 },
      ])}
      ${card(224, 1095, 146, [
        { text: 'RPO', y: 51, size: 31, weight: 800 },
        { text: '$9.2B', y: 95, size: 29 },
        { text: '+38% Y/Y', y: 136, size: 23 },
      ])}
      ${card(384, 1093, 451, [
        { text: 'Customers 13,912 +22% Y/Y', y: 74, size: 27, weight: 700 },
        { text: '&gt; $1M 779 +29% Y/Y', y: 116, size: 26, weight: 700 },
      ])}
      <text x="201" y="1291" font-size="29" font-weight="400" fill="${NOTE}">DBNR = Dollar Based Net Retention</text>
      <text x="156" y="1337" font-size="29" font-weight="400" fill="${NOTE}">RPO = Remaining Performance Obligation</text>
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${card(26, 1095, 184, [
        { text: 'DBNR', y: 51, size: 31, weight: 800 },
        { text: '126%', y: 95, size: 31 },
        { text: '同比 +2 个百分点', y: 136, size: 20 },
      ])}
      ${card(224, 1095, 146, [
        { text: 'RPO', y: 51, size: 31, weight: 800 },
        { text: '$9.2B', y: 95, size: 29 },
        { text: '同比 +38%', y: 136, size: 22 },
      ])}
      ${card(384, 1093, 451, [
        { text: '客户 13,912，同比 +22%', y: 74, size: 27, weight: 700 },
        { text: '&gt; $1M 客户 779，同比 +29%', y: 116, size: 25, weight: 700 },
      ])}
      <text x="201" y="1291" font-size="29" font-weight="400" fill="${NOTE}">DBNR = 美元口径净收入留存率</text>
      <text x="156" y="1337" font-size="29" font-weight="400" fill="${NOTE}">RPO = 剩余履约义务</text>
    </g>`;

  const zhLabels = {
    product_revenue: {
      blocks: [
        { x: 410, top: 366, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 39 }, { text: '同比 +34%', size: 29, color: NOTE }] },
        { x: 143, top: 570, anchor: 'start', lineGap: 9, lines: [{ text: '产品', size: 40, weight: 800 }, { text: '收入', size: 40, weight: 800 }] },
      ],
    },
    professional_services: {
      blocks: [
        { x: 410, top: 916, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 39 }, { text: '同比 +25%', size: 29, color: NOTE }] },
        { x: 143, top: 970, anchor: 'start', lineGap: 9, lines: [{ text: '专业', size: 40, weight: 800 }, { text: '服务', size: 40, weight: 800 }] },
      ],
    },
    revenue: { blocks: [{ x: 877, top: 422, anchor: 'middle', lineGap: 10, lines: [{ text: '收入', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '同比 +33%', size: 29, color: NOTE }] }] },
    gross_profit: { blocks: [{ x: 1344, top: 260, anchor: 'middle', lineGap: 10, lines: [{ text: '毛利润', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '利润率 67%', size: 29, color: NOTE }, { text: '同比 +0 个百分点', size: 29, color: NOTE }] }] },
    cost_of_revenue: { blocks: [{ x: 1344, top: 1038, anchor: 'middle', lineGap: 8, lines: [{ text: '收入', size: 36, weight: 800 }, { text: '成本', size: 36, weight: 800 }, { text: '$value', size: 36 }] }] },
    operating_loss: { blocks: [{ x: 1597, top: 1008, anchor: 'middle', lineGap: 8, lines: [{ text: '营业亏损', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '利润率 (23%)', size: 29, color: NOTE }, { text: '同比 +19 个百分点', size: 29, color: NOTE }] }] },
    operating_expenses: { blocks: [{ x: 1812, top: 403, anchor: 'middle', lineGap: 8, lines: [{ text: '营业费用', size: 40, weight: 800 }, { text: '$value', size: 39 }] }] },
    sm: { blocks: [{ x: RIGHT_LABEL_X, top: 389, anchor: 'start', lineGap: 8, lines: [{ text: '销售与', size: 32, weight: 800 }, { text: '营销', size: 32, weight: 800 }, { text: '$value', size: 31 }, { text: '占收入 42%', size: 29, color: NOTE }, { text: '同比 (2 个百分点)', size: 29, color: NOTE }] }] },
    rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 726, anchor: 'start', lineGap: 8, lines: [{ text: '研究与', size: 32, weight: 800 }, { text: '开发', size: 32, weight: 800 }, { text: '$value', size: 31 }, { text: '占收入 38%', size: 29, color: NOTE }, { text: '同比 (7 个百分点)', size: 29, color: NOTE }] }] },
    ga: { blocks: [{ x: RIGHT_LABEL_X, top: 1010, anchor: 'start', lineGap: 8, lines: [{ text: '一般及', size: 32, weight: 800 }, { text: '行政', size: 32, weight: 800 }, { text: '$value', size: 31 }, { text: '占收入 9%', size: 29, color: NOTE }, { text: '同比 (11 个百分点)', size: 29, color: NOTE }] }] },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'snowflake-q1-fy27',
    name: 'Snowflake · Q1 FY27',
    company: 'Snowflake',
    meta: {
      company: 'Snowflake',
      title: 'Snowflake Q1 FY27 Income Statement',
      period: 'Q1 FY27',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/snowflake-q1-fy27.png', width: 2667, height: 1500 },
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
        product_revenue: { x: 375, y: 454, width: 71, height: 349 },
        professional_services: { x: 375, y: 1010, width: 71, height: 15 },
        revenue: { x: 842, y: 565, width: 71, height: 363 },
        gross_profit: { x: 1309, y: 445, width: 71, height: 244 },
        cost_of_revenue: { x: 1309, y: 898, width: 71, height: 119 },
        operating_loss: { x: 1562, y: 903, width: 71, height: 85 },
        operating_expenses: { x: 1777, y: 562, width: 71, height: 326 },
        sm: { x: 2243, y: 373, width: 71, height: 154 },
        rnd: { x: 2243, y: 723, width: 71, height: 139 },
        ga: { x: 2243, y: 1038, width: 71, height: 34 },
      },
      labels: {
        product_revenue: {
          blocks: [
            { x: 410, top: 366, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 39 }, { text: '+34% Y/Y', size: 29, color: NOTE }] },
            { x: 143, top: 570, anchor: 'start', lineGap: 9, lines: [{ text: 'Product', size: 40, weight: 800 }, { text: 'revenue', size: 40, weight: 800 }] },
          ],
        },
        professional_services: {
          blocks: [
            { x: 410, top: 916, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 39 }, { text: '+25% Y/Y', size: 29, color: NOTE }] },
            { x: 102, top: 970, anchor: 'start', lineGap: 9, lines: [{ text: 'Professional', size: 40, weight: 800 }, { text: 'services', size: 40, weight: 800 }] },
          ],
        },
        revenue: { blocks: [{ x: 877, top: 422, anchor: 'middle', lineGap: 10, lines: [{ text: 'Revenue', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '+33% Y/Y', size: 29, color: NOTE }] }] },
        gross_profit: { blocks: [{ x: 1344, top: 260, anchor: 'middle', lineGap: 10, lines: [{ text: 'Gross profit', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '67% margin', size: 29, color: NOTE }, { text: '+0pp Y/Y', size: 29, color: NOTE }] }] },
        cost_of_revenue: { blocks: [{ x: 1344, top: 1038, anchor: 'middle', lineGap: 8, lines: [{ text: 'Cost of', size: 36, weight: 800 }, { text: 'revenue', size: 36, weight: 800 }, { text: '$value', size: 36 }] }] },
        operating_loss: { blocks: [{ x: 1597, top: 1008, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating', size: 40, weight: 800 }, { text: 'loss', size: 40, weight: 800 }, { text: '$value', size: 39 }, { text: '(23%) margin', size: 29, color: NOTE }, { text: '+19pp Y/Y', size: 29, color: NOTE }] }] },
        operating_expenses: { blocks: [{ x: 1812, top: 403, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating', size: 40, weight: 800 }, { text: 'expenses', size: 40, weight: 800 }, { text: '$value', size: 39 }] }] },
        sm: { blocks: [{ x: RIGHT_LABEL_X, top: 389, anchor: 'start', lineGap: 8, lines: [{ text: 'Sales &', size: 32, weight: 800 }, { text: 'marketing', size: 32, weight: 800 }, { text: '$value', size: 31 }, { text: '42% of revenue', size: 29, color: NOTE }, { text: '(2pp) Y/Y', size: 29, color: NOTE }] }] },
        rnd: { blocks: [{ x: RIGHT_LABEL_X, top: 726, anchor: 'start', lineGap: 8, lines: [{ text: 'Research &', size: 32, weight: 800 }, { text: 'development', size: 32, weight: 800 }, { text: '$value', size: 31 }, { text: '38% of revenue', size: 29, color: NOTE }, { text: '(7pp) Y/Y', size: 29, color: NOTE }] }] },
        ga: { blocks: [{ x: RIGHT_LABEL_X, top: 1010, anchor: 'start', lineGap: 8, lines: [{ text: 'General &', size: 32, weight: 800 }, { text: 'admin', size: 32, weight: 800 }, { text: '$value', size: 31 }, { text: '9% of revenue', size: 29, color: NOTE }, { text: '(11pp) Y/Y', size: 29, color: NOTE }] }] },
      },
    },
    nodes: [
      { id: 'product_revenue', col: 0, order: 0, type: 'source', label: 'Product revenue', value: 1334, valueText: '$1,334M', notes: ['+34% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'professional_services', col: 0, order: 1, type: 'source', label: 'Professional services', value: 57, notes: ['+25% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1391, valueText: '$1,391M', notes: ['+33% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 926, notes: ['67% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: 'Cost of revenue', value: 465, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 0, type: 'cost', label: 'Operating loss', value: -326, notes: ['(23%) margin', '+19pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: 'Operating expenses', value: 1253, valueText: '($1,253M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 0, type: 'cost', label: 'Sales & marketing', value: 589, notes: ['42% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 1, type: 'cost', label: 'Research & development', value: 535, notes: ['38% of revenue', '(7pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'General & admin', value: 129, notes: ['9% of revenue', '(11pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'product_revenue', target: 'revenue', value: 1334, sourceWidth: 349, targetWidth: 348, y0: 628.5, y1: 739, sourceOrder: 0, targetOrder: 0 },
      { source: 'professional_services', target: 'revenue', value: 57, sourceWidth: 15, targetWidth: 15, y0: 1017.5, y1: 920.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 926, width: 242, y0: 686, y1: 567, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 465, sourceWidth: 121, targetWidth: 119, y0: 867.5, y1: 957.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 926, width: 244, y0: 567, y1: 684, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 326, sourceWidth: 85, targetWidth: 85, y0: 945.5, y1: 845.5, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'sm', value: 589, width: 154, y0: 639, y1: 450, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'rnd', value: 535, width: 139, y0: 785.5, y1: 792.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_expenses', target: 'ga', value: 129, sourceWidth: 34, targetWidth: 34, y0: 871, y1: 1055, sourceOrder: 2, targetOrder: 0, linkTint: RED_LINK },
    ],
    i18n: {
      zh: {
        name: 'Snowflake · 2027 财年第一季度',
        meta: { title: 'Snowflake 2027 财年第一季度利润表', period: '2027 财年第一季度', periodNote: '截至 2026 年 4 月', titleSize: 112, titleTextLength: 2050 },
        annotationsSvg: annotationsZh,
        nodes: {
          product_revenue: { label: '产品收入', notes: ['同比 +34%'] },
          professional_services: { label: '专业服务', notes: ['同比 +25%'] },
          revenue: { label: '收入', notes: ['同比 +33%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 67%', '同比 +0 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (23%)', '同比 +19 个百分点'] },
          operating_expenses: { label: '营业费用' },
          sm: { label: '销售与营销', notes: ['占收入 42%', '同比 (2 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 38%', '同比 (7 个百分点)'] },
          ga: { label: '一般及行政', notes: ['占收入 9%', '同比 (11 个百分点)'] },
        },
        layout: { labels: zhLabels },
      },
    },
  });
})();
