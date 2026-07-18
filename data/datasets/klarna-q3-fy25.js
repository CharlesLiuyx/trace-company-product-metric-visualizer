/* Klarna Q3 FY25 income statement ($M), measured against the local reference. */
(function () {
  const BLACK = '#000000';
  const NOTE = '#666666';
  const TITLE = '#155077';
  const PINK = '#fbb1d0';
  const PINK_LINK = '#f2b8d2';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const RIGHT_LABEL_X = 2479;

  const card = (x, y, width, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="159" rx="30" fill="${PINK}"/>
      ${lines.map((line) => `<text x="${x + width / 2}" y="${y + line.y}" text-anchor="middle" font-size="${line.size || 30}" font-weight="${line.weight || 500}" fill="${BLACK}">${line.text}</text>`).join('')}
    </g>`;

  const klarnaLogoSvg = `
    <rect x="0" y="0" width="552" height="232" rx="76" fill="${PINK}"/>
    <text x="276" y="159" text-anchor="middle" font-family="Arial Black,Montserrat,Arial,sans-serif" font-size="136" font-weight="900" fill="#0b051d">Klarna</text>`;

  const annotationsEn = `
    <g>
      ${card(62, 1144, 190, [
        { text: 'GMV', y: 48, weight: 800 },
        { text: '$32.7B', y: 86 },
        { text: '+23% Y/Y LfL', y: 126, size: 28 },
      ])}
      ${card(262, 1144, 380, [
        { text: 'Active Consumers', y: 48, weight: 800 },
        { text: '114M', y: 86 },
        { text: '+31% Y/Y', y: 126, size: 28 },
      ])}
      ${card(650, 1144, 210, [
        { text: 'Merchants', y: 48, weight: 800 },
        { text: '850K', y: 86 },
        { text: '+38% Y/Y', y: 126, size: 28 },
      ])}
      <text x="124" y="1350" font-size="30" font-weight="500" fill="${NOTE}">GMV = Gross Merchandise Value</text>
      <text x="2098" y="1305" font-size="30" font-weight="500" fill="${NOTE}">Adjusted for the sale of</text>
      <text x="2098" y="1345" font-size="30" font-weight="500" fill="${NOTE}">Klarna Checkout (KCO)</text>
    </g>`;

  const annotationsZh = `
    <g>
      ${card(62, 1144, 190, [
        { text: 'GMV', y: 48, weight: 800 },
        { text: '$32.7B', y: 86 },
        { text: '同比 +23% LfL', y: 126, size: 26 },
      ])}
      ${card(262, 1144, 380, [
        { text: '活跃消费者', y: 48, weight: 800 },
        { text: '1.14 亿', y: 86 },
        { text: '同比 +31%', y: 126, size: 28 },
      ])}
      ${card(650, 1144, 210, [
        { text: '商户', y: 48, weight: 800 },
        { text: '85 万', y: 86 },
        { text: '同比 +38%', y: 126, size: 28 },
      ])}
      <text x="124" y="1350" font-size="30" font-weight="500" fill="${NOTE}">GMV = 商品交易总额</text>
      <text x="2098" y="1305" font-size="30" font-weight="500" fill="${NOTE}">已调整 Klarna Checkout</text>
      <text x="2098" y="1345" font-size="30" font-weight="500" fill="${NOTE}">（KCO）出售的影响</text>
    </g>`;

  const values = (x, top) => ({
    x, top, anchor: 'middle', lineGap: 8, parts: ['value', 'notes'], valueSize: 38, noteSize: 29,
  });
  const names = (x, top, anchor = 'middle', size = 40) => ({
    x, top, anchor, lineGap: 8, parts: ['name'], nameSize: size,
  });
  const full = (x, top, size = 40, noteSize = 29) => ({
    x, top, anchor: 'middle', lineGap: 8, parts: ['name', 'value', 'notes'], nameSize: size, valueSize: 39, noteSize,
  });
  const cost = (x, top, size = 33) => ({
    x, top, anchor: 'start', lineGap: 8, parts: ['name', 'value'], nameSize: size, valueSize: 31,
  });
  const rightCost = (top, size = 31) => ({ ...cost(RIGHT_LABEL_X, top, size), anchor: 'middle' });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'klarna-q3-fy25',
    name: 'Klarna · Q3 FY25',
    company: 'Klarna',
    meta: {
      company: 'Klarna',
      title: 'Klarna Q3 FY25 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/klarna-q3-fy25.png', width: 2667, height: 1500 },
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
      scale: 416 / 903,
      nodes: {
        transaction_revenue: { x: 369, y: 518, width: 73, height: 291 },
        interest: { x: 369, y: 990, width: 73, height: 125 },
        revenue: { x: 837, y: 638, width: 73, height: 416 },
        transaction_margin: { x: 1305, y: 514, width: 73, height: 130 },
        provision_credit_losses: { x: 1305, y: 881, width: 73, height: 106 },
        processing_servicing_costs: { x: 1305, y: 1073, width: 73, height: 94 },
        funding_costs: { x: 1305, y: 1251, width: 73, height: 81 },
        operating_loss: { x: 1640, y: 641, width: 73, height: 38 },
        operating_expenses: { x: 1773, y: 442, width: 72, height: 166 },
        tech_product_development: { x: 2239, y: 382, width: 73, height: 44 },
        sales_marketing: { x: 2239, y: 584, width: 73, height: 39 },
        customer_service_operations: { x: 2239, y: 784, width: 73, height: 22 },
        general_administrative: { x: 2239, y: 966, width: 73, height: 28 },
        da_impairment: { x: 2239, y: 1155, width: 73, height: 31 },
      },
      labels: {
        transaction_revenue: { blocks: [values(405, 423), names(220, 613)] },
        interest: { blocks: [values(405, 887), names(220, 1028)] },
        revenue: { blocks: [full(874, 499)] },
        transaction_margin: { blocks: [full(1342, 330, 38)] },
        provision_credit_losses: { blocks: [cost(1408, 874)] },
        processing_servicing_costs: { blocks: [cost(1383, 1060)] },
        funding_costs: { blocks: [cost(1392, 1262)] },
        operating_loss: { blocks: [full(1677, 708, 38)] },
        operating_expenses: { blocks: [full(1809, 285, 38)] },
        tech_product_development: { blocks: [rightCost(350)] },
        sales_marketing: { blocks: [rightCost(548)] },
        customer_service_operations: { blocks: [rightCost(738, 30)] },
        general_administrative: { blocks: [rightCost(927)] },
        da_impairment: { blocks: [rightCost(1116)] },
      },
    },
    nodes: [
      { id: 'transaction_revenue', col: 0, order: 0, type: 'source', label: ['Transaction', 'revenue'], value: 634, notes: ['+24% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: PINK_LINK },
      { id: 'interest', col: 0, order: 1, type: 'source', label: 'Interest', value: 269, notes: ['+55% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: PINK_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 903, notes: ['+32% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: PINK_LINK },
      { id: 'transaction_margin', col: 2, order: 0, type: 'profit', label: ['Transaction', 'margin dollars'], value: 281, notes: ['(6%) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'provision_credit_losses', col: 2, order: 1, type: 'cost', label: ['Provision for', 'credit losses'], value: 235, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'processing_servicing_costs', col: 2, order: 2, type: 'cost', label: ['Processing and', 'servicing costs'], value: 208, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'funding_costs', col: 2, order: 3, type: 'cost', label: 'Funding costs', value: 180, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 1, type: 'cost', label: 'Operating loss', value: -83, notes: ['(5%) margin', '(4pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 364, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tech_product_development', col: 5, order: 0, type: 'cost', label: ['Tech & product', 'development'], value: 97, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sales_marketing', col: 5, order: 1, type: 'cost', label: ['Sales &', 'marketing'], value: 85, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'customer_service_operations', col: 5, order: 2, type: 'cost', label: ['Customer service', '& operations'], value: 50, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'general_administrative', col: 5, order: 3, type: 'cost', label: ['General &', 'administrative'], value: 63, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'da_impairment', col: 5, order: 4, type: 'cost', label: ['D&A and', 'impairment'], value: 69, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],
    links: [
      { source: 'transaction_revenue', target: 'revenue', value: 634, width: 292, sourceWidth: 291, targetWidth: 292, y0: 663.5, y1: 784, sourceOrder: 0, targetOrder: 0 },
      { source: 'interest', target: 'revenue', value: 269, width: 125, sourceWidth: 125, targetWidth: 124, y0: 1052.5, y1: 992, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'transaction_margin', value: 281, width: 129, sourceWidth: 128, targetWidth: 129, y0: 702, y1: 579.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'provision_credit_losses', value: 235, width: 107, sourceWidth: 107, targetWidth: 106, y0: 819.5, y1: 934, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'processing_servicing_costs', value: 208, width: 97, sourceWidth: 97, targetWidth: 94, y0: 921.5, y1: 1120, sourceOrder: 2, targetOrder: 0 },
      { source: 'revenue', target: 'funding_costs', value: 180, width: 81, sourceWidth: 80, targetWidth: 81, y0: 1010, y1: 1291.5, sourceOrder: 3, targetOrder: 0 },
      { source: 'transaction_margin', target: 'operating_expenses', value: 281, width: 129, sourceWidth: 129, targetWidth: 128, y0: 579.5, y1: 506, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 83, width: 38, sourceWidth: 38, targetWidth: 38, y0: 660, y1: 589, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK, curve: { x0: 1713, x1: 1773, c1x: 1735, c1y: 660, c2x: 1750, c2y: 589 } },
      { source: 'operating_expenses', target: 'tech_product_development', value: 97, width: 44, sourceWidth: 44, targetWidth: 44, y0: 464, y1: 404, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sales_marketing', value: 85, width: 39, sourceWidth: 39, targetWidth: 39, y0: 505.5, y1: 603.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'customer_service_operations', value: 50, width: 23, sourceWidth: 23, targetWidth: 22, y0: 536.5, y1: 795, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'general_administrative', value: 63, width: 28, sourceWidth: 28, targetWidth: 28, y0: 562, y1: 980, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'da_impairment', value: 69, width: 32, sourceWidth: 32, targetWidth: 31, y0: 592, y1: 1170.5, sourceOrder: 4, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Klarna · 2025 财年第三季度',
        meta: {
          title: 'Klarna 2025 财年第三季度利润表',
          period: '',
          periodNote: '',
          titleSize: 108,
          titleTextLength: 1500,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          transaction_revenue: { label: ['交易', '收入'], notes: ['同比 +24%'] },
          interest: { label: '利息', notes: ['同比 +55%'] },
          revenue: { label: '收入', notes: ['同比 +32%'] },
          transaction_margin: { label: ['交易', '毛利额'], notes: ['同比 (6%)'] },
          provision_credit_losses: { label: ['信用损失', '准备金'] },
          processing_servicing_costs: { label: ['处理和', '服务成本'] },
          funding_costs: { label: '融资成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (5%)', '同比 (4 个百分点)'] },
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
