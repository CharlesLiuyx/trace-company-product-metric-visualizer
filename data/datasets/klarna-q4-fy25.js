/* Klarna Q4 FY25 income statement ($M), measured against the local reference. */
(function () {
  const BLACK = '#000000';
  const NOTE = '#666666';
  const TITLE = '#155077';
  const PINK = '#ffb1d1';
  const PINK_LINK = '#f2c6dc';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const RIGHT_LABEL_X = 2492;

  const card = (x, y, width, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="159" rx="30" fill="${PINK}"/>
      ${lines.map((line) => `<text x="${x + width / 2}" y="${y + line.y}" text-anchor="middle" font-size="${line.size || 30}" font-weight="${line.weight || 500}" fill="${BLACK}">${line.text}</text>`).join('')}
    </g>`;

  const klarnaLogoSvg = `
    <rect x="0" y="0" width="552" height="232" rx="76" fill="${PINK}"/>
    <text x="276" y="159" text-anchor="middle" font-family="Arial Black,Montserrat,Arial,sans-serif" font-size="136" font-weight="900" fill="#0b051d">Klarna</text>`;

  const annotationsEn = `
    <g font-family="Montserrat,Arial,sans-serif">
      <line x1="1588" y1="605" x2="1652" y2="605" stroke="${RED}" stroke-width="4"/>
      ${card(62, 1144, 190, [
        { text: 'GMV', y: 48, weight: 800 },
        { text: '$38.7B', y: 86 },
        { text: '+32% Y/Y LfL', y: 126, size: 28 },
      ])}
      ${card(262, 1144, 380, [
        { text: 'Active Consumers', y: 48, weight: 800 },
        { text: '118M', y: 86 },
        { text: '+28% Y/Y', y: 126, size: 28 },
      ])}
      ${card(650, 1144, 248, [
        { text: 'Merchants', y: 48, weight: 800 },
        { text: '966K', y: 86 },
        { text: '+42% Y/Y', y: 126, size: 28 },
      ])}
      <text x="124" y="1350" font-size="30" font-weight="500" fill="${NOTE}">GMV = Gross Merchandise Value</text>
      <text x="2100" y="1305" font-size="30" font-weight="500" fill="${NOTE}">Adjusted for the sale of</text>
      <text x="2100" y="1345" font-size="30" font-weight="500" fill="${NOTE}">Klarna Checkout (KCO)</text>
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      <line x1="1588" y1="605" x2="1652" y2="605" stroke="${RED}" stroke-width="4"/>
      ${card(62, 1144, 190, [
        { text: 'GMV', y: 48, weight: 800 },
        { text: '$38.7B', y: 86 },
        { text: '同比 +32% LfL', y: 126, size: 26 },
      ])}
      ${card(262, 1144, 380, [
        { text: '活跃消费者', y: 48, weight: 800 },
        { text: '1.18 亿', y: 86 },
        { text: '同比 +28%', y: 126, size: 28 },
      ])}
      ${card(650, 1144, 248, [
        { text: '商户', y: 48, weight: 800 },
        { text: '96.6 万', y: 86 },
        { text: '同比 +42%', y: 126, size: 28 },
      ])}
      <text x="124" y="1350" font-size="30" font-weight="500" fill="${NOTE}">GMV = 商品交易总额</text>
      <text x="2100" y="1305" font-size="30" font-weight="500" fill="${NOTE}">已调整 Klarna Checkout</text>
      <text x="2100" y="1345" font-size="30" font-weight="500" fill="${NOTE}">（KCO）出售的影响</text>
    </g>`;

  const values = (x, top) => ({ x, top, anchor: 'middle', lineGap: 8, parts: ['value', 'notes'], valueSize: 38, noteSize: 29 });
  const names = (x, top, anchor = 'middle', size = 40) => ({ x, top, anchor, lineGap: 8, parts: ['name'], nameSize: size });
  const full = (x, top, size = 40, noteSize = 29) => ({ x, top, anchor: 'middle', lineGap: 8, parts: ['name', 'value', 'notes'], nameSize: size, valueSize: 39, noteSize });
  const cost = (x, top, size = 33) => ({ x, top, anchor: 'start', lineGap: 8, parts: ['name', 'value'], nameSize: size, valueSize: 31 });
  const rightCost = (top, size = 31) => ({ ...cost(RIGHT_LABEL_X, top, size), anchor: 'middle' });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'klarna-q4-fy25',
    name: 'Klarna · Q4 FY25',
    company: 'Klarna',
    meta: {
      company: 'Klarna',
      title: 'Klarna Q4 FY25 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/klarna-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 198,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2092,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 552,
      logoHeight: 232,
      logoY: 244,
      logoViewBox: '0 0 552 232',
      logoSvg: klarnaLogoSvg,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      nodeRadius: 0,
      palette: {
        source: { node: BLACK, label: BLACK },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: PINK_LINK, hub: PINK_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,
    layout: {
      scale: 356 / 1082,
      nodes: {
        transaction_revenue: { x: 369, y: 505, width: 73, height: 245 },
        gain_on_sale_consumer_receivables: { x: 369, y: 880, width: 73, height: 24 },
        interest: { x: 369, y: 1018, width: 73, height: 90 },
        revenue: { x: 839, y: 645, width: 73, height: 356 },
        transaction_margin: { x: 1306, y: 504, width: 73, height: 122 },
        provision_credit_losses: { x: 1306, y: 816, width: 73, height: 83 },
        processing_servicing_costs: { x: 1306, y: 983, width: 73, height: 83 },
        funding_costs: { x: 1306, y: 1150, width: 73, height: 70 },
        operating_loss: { x: 1588, y: 603, width: 64, height: 4 },
        operating_expenses: { x: 1772, y: 403, width: 73, height: 127 },
        tech_product_development: { x: 2240, y: 315, width: 73, height: 34 },
        sales_marketing: { x: 2240, y: 533, width: 73, height: 35 },
        customer_service_operations: { x: 2240, y: 731, width: 73, height: 17 },
        general_administrative: { x: 2240, y: 917, width: 73, height: 22 },
        da_impairment: { x: 2240, y: 1109, width: 73, height: 20 },
      },
      labels: {
        transaction_revenue: { blocks: [values(405, 415), names(220, 600)] },
        gain_on_sale_consumer_receivables: { blocks: [values(405, 792), names(267, 819, 'end')] },
        interest: { blocks: [values(405, 930), names(220, 1037)] },
        revenue: { blocks: [full(876, 497)] },
        transaction_margin: { blocks: [full(1342, 311, 38)] },
        provision_credit_losses: { blocks: [cost(1410, 828)] },
        processing_servicing_costs: { blocks: [cost(1407, 995)] },
        funding_costs: { blocks: [cost(1397, 1177)] },
        operating_loss: { blocks: [full(1620, 625)] },
        operating_expenses: { blocks: [full(1808, 246)] },
        tech_product_development: { blocks: [rightCost(300)] },
        sales_marketing: { blocks: [rightCost(522)] },
        customer_service_operations: { blocks: [rightCost(706, 30)] },
        general_administrative: { blocks: [rightCost(895)] },
        da_impairment: { blocks: [rightCost(1080)] },
      },
    },
    nodes: [
      { id: 'transaction_revenue', col: 0, order: 0, type: 'source', label: ['Transaction', 'revenue'], value: 743, notes: ['+24% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: PINK_LINK },
      { id: 'gain_on_sale_consumer_receivables', col: 0, order: 1, type: 'source', label: ['Gain on sale', 'of consumer', 'receivables'], value: 73, notes: ['NM'], color: BLACK, labelColor: BLACK, linkTint: PINK_LINK },
      { id: 'interest', col: 0, order: 2, type: 'source', label: 'Interest', value: 267, notes: ['+47% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: PINK_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1082, notes: ['+38% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: PINK_LINK },
      { id: 'transaction_margin', col: 2, order: 0, type: 'profit', label: ['Transaction', 'margin dollars'], value: 372, notes: ['+17% Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'provision_credit_losses', col: 2, order: 1, type: 'cost', label: ['Provision for', 'credit losses'], value: 250, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'processing_servicing_costs', col: 2, order: 2, type: 'cost', label: ['Processing and', 'servicing costs'], value: 250, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'funding_costs', col: 2, order: 3, type: 'cost', label: 'Funding costs', value: 210, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 1, type: 'cost', label: ['Operating', 'loss'], value: -11, notes: ['(1%) margin', '+12pp Y/Y'], color: '#f2f2f2', labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 384, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tech_product_development', col: 5, order: 0, type: 'cost', label: ['Tech & product', 'development'], value: 102, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sales_marketing', col: 5, order: 1, type: 'cost', label: ['Sales &', 'marketing'], value: 106, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'customer_service_operations', col: 5, order: 2, type: 'cost', label: ['Customer service', '& operations'], value: 51, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'general_administrative', col: 5, order: 3, type: 'cost', label: ['General &', 'administrative'], value: 66, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'da_impairment', col: 5, order: 4, type: 'cost', label: ['D&A and', 'impairment'], value: 59, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'transaction_revenue', target: 'revenue', value: 743, width: 245, sourceWidth: 245, targetWidth: 245, y0: 627.5, y1: 767.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'gain_on_sale_consumer_receivables', target: 'revenue', value: 73, width: 24, sourceWidth: 24, targetWidth: 24, y0: 892, y1: 902, sourceOrder: 0, targetOrder: 1 },
      { source: 'interest', target: 'revenue', value: 267, width: 88, sourceWidth: 90, targetWidth: 88, y0: 1063, y1: 957, sourceOrder: 0, targetOrder: 2 },
      { source: 'revenue', target: 'transaction_margin', value: 372, width: 122, sourceWidth: 122, targetWidth: 122, y0: 706, y1: 565, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'provision_credit_losses', value: 250, width: 83, sourceWidth: 83, targetWidth: 83, y0: 808.5, y1: 857.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'processing_servicing_costs', value: 250, width: 83, sourceWidth: 83, targetWidth: 83, y0: 891.5, y1: 1024.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'revenue', target: 'funding_costs', value: 210, width: 70, sourceWidth: 70, targetWidth: 70, y0: 966, y1: 1185, sourceOrder: 3, targetOrder: 0 },
      { source: 'transaction_margin', target: 'operating_expenses', value: 372, width: 122, sourceWidth: 122, targetWidth: 123, y0: 565, y1: 464.5, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 11, width: 4, sourceWidth: 4, targetWidth: 4, y0: 605, y1: 528, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK, curve: { x0: 1652, x1: 1772, c1x: 1700, c1y: 605, c2x: 1720, c2y: 528 } },
      { source: 'operating_expenses', target: 'tech_product_development', value: 102, width: 34, sourceWidth: 34, targetWidth: 34, y0: 420, y1: 332, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sales_marketing', value: 106, width: 35, sourceWidth: 35, targetWidth: 35, y0: 454.5, y1: 550.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'customer_service_operations', value: 51, width: 17, sourceWidth: 17, targetWidth: 17, y0: 480.5, y1: 739.5, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'general_administrative', value: 66, width: 22, sourceWidth: 22, targetWidth: 22, y0: 500, y1: 928, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'da_impairment', value: 59, width: 20, sourceWidth: 20, targetWidth: 20, y0: 520, y1: 1119, sourceOrder: 4, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Klarna · 2025 财年第四季度',
        meta: {
          title: 'Klarna 2025 财年第四季度利润表',
          period: '',
          periodNote: '',
          titleSize: 108,
          titleTextLength: 1500,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          transaction_revenue: { label: ['交易', '收入'], notes: ['同比 +24%'] },
          gain_on_sale_consumer_receivables: { label: ['出售消费者', '应收账款', '收益'], notes: ['无意义可比数'] },
          interest: { label: '利息', notes: ['同比 +47%'] },
          revenue: { label: '收入', notes: ['同比 +38%'] },
          transaction_margin: { label: ['交易', '毛利额'], notes: ['同比 +17%'] },
          provision_credit_losses: { label: ['信用损失', '准备金'] },
          processing_servicing_costs: { label: ['处理和', '服务成本'] },
          funding_costs: { label: '融资成本' },
          operating_loss: { label: ['营业', '亏损'], notes: ['利润率 (1%)', '同比 +12 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          tech_product_development: { label: ['技术与产品', '开发'] },
          sales_marketing: { label: ['销售与', '营销'] },
          customer_service_operations: { label: ['客服与', '运营'] },
          general_administrative: { label: ['一般及', '行政'] },
          da_impairment: { label: ['折旧、摊销', '及减值'] },
        },
      },
    },
  });
})();
