/* Costco Q4 FY25 income statement ($B), measured from the native 2667x1500 Source. */
(function () {
  'use strict';

  const TITLE = '#155077';
  const NOTE = '#666666';
  const COSTCO_BLUE = '#005daa';
  const BLUE_LINK = '#85afd2';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const BG = '#f2f2f2';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const icon = (name, x, y) => `
    <g transform="translate(${x} ${y})" data-typography-role="brand">${BUSINESS_ICONS[name] || ''}</g>`;

  const membershipCardsZh = (x, y) => `
    <g transform="translate(${x} ${y})" data-typography-role="brand">
      <g>
        <rect x="0" y="5" width="145" height="96" rx="8" fill="#ffffff" stroke="#9ea3a8" stroke-width="1.4"/>
        <text x="15" y="39" font-family="Arial Black, Arial, sans-serif" font-size="29" font-style="italic" font-weight="900" fill="#e31837">COSTCO</text>
        <text x="43" y="58" font-family="Arial Black, Arial, sans-serif" font-size="18" font-style="italic" font-weight="900" fill="#0060a9">WHOLESALE</text>
        <g fill="#0060a9">
          <rect x="6" y="55" width="74" height="4"/><rect x="6" y="62" width="83" height="4"/><rect x="6" y="69" width="91" height="4"/>
        </g>
        <path d="M72 65l6 15h16l-13 9 5 15-14-9-13 9 5-15-13-9h16z" fill="#f8b21a"/>
        <text x="73" y="84" text-anchor="middle" font-family="Arial,'Microsoft YaHei',sans-serif" font-size="13" font-weight="800" fill="#e31837">金星会员</text>
      </g>
      <g transform="translate(168 0)">
        <rect x="0" y="5" width="145" height="96" rx="8" fill="#070707" stroke="#2e2e2e" stroke-width="1.4"/>
        <g fill="none" stroke="#c9a24c" stroke-width="2" opacity="0.92">
          <ellipse cx="72" cy="53" rx="55" ry="27"/><ellipse cx="72" cy="53" rx="31" ry="53" transform="rotate(33 72 53)"/>
          <ellipse cx="72" cy="53" rx="31" ry="53" transform="rotate(-33 72 53)"/><line x1="12" y1="53" x2="132" y2="53"/>
        </g>
        <text x="32" y="40" font-family="Arial Black, Arial, sans-serif" font-size="23" font-style="italic" font-weight="900" fill="#e31837" stroke="#ffffff" stroke-width="2" paint-order="stroke">COSTCO</text>
        <text x="49" y="56" font-family="Arial Black, Arial, sans-serif" font-size="14" font-style="italic" font-weight="900" fill="#0060a9" stroke="#ffffff" stroke-width="1.4" paint-order="stroke">WHOLESALE</text>
        <text x="72" y="82" text-anchor="middle" font-family="Arial,'Microsoft YaHei',sans-serif" font-size="13" font-weight="800" fill="#f6d37a">行政会员</text>
      </g>
    </g>`;

  const kpiCard = (x, width, lines, zh) => `
    <g>
      <rect x="${x}" y="1215" width="${width}" height="142" rx="24" fill="${COSTCO_BLUE}"/>
      ${lines.map((text, index) => `
        <text x="${x + width / 2}" y="${1257 + index * 37}" text-anchor="middle"
          font-family="Noto Sans,Arial,${zh ? "'Microsoft YaHei'," : ''}sans-serif"
          font-size="${index === 2 ? 28 : 29}" font-weight="${index === 2 ? 500 : 800}"
          fill="#ffffff">${text}</text>`).join('')}
    </g>`;

  const annotations = (zh) => {
    const text = zh ? {
      us: ['调整后美国', '可比销售额', '同比 +6.0%'],
      company: ['调整后公司', '可比销售额', '同比 +6.4%'],
      ecommerce: ['调整后', '电子商务', '同比 +13.5%'],
      interest: '利息',
    } : {
      us: ['Adj. US', 'Comp sales', '+6.0% Y/Y'],
      company: ['Adj. Company', 'Comp sales', '+6.4% Y/Y'],
      ecommerce: ['Adj.', 'E-commerce', '+13.5% Y/Y'],
      interest: 'Interest',
    };
    return `
      <g font-family="Noto Sans,Arial,sans-serif">
        ${icon('costcoCompanyWordmark', 560, 235)}
        ${zh ? membershipCardsZh(45, 1072) : icon('costcoMembershipCards', 45, 1072)}
        ${kpiCard(36, 276, text.us, zh)}
        ${kpiCard(320, 330, text.company, zh)}
        ${kpiCard(660, 216, text.ecommerce, zh)}
        <g class="sankey-interactive-annotation" data-node="interest"
          data-link-numerator="interest" data-link-denominator="net_profit"
          data-link-anchor-x="2203" data-link-anchor-y="386">
          <path d="M2162 386H2234C2248 386 2240 337 2272 337" fill="none"
            stroke="${GREEN_LINK}" stroke-width="2"/>
          <text x="2203" y="443" text-anchor="middle" font-size="31" font-weight="800"
            fill="${GREEN_LABEL}">${text.interest}</text>
          <text x="2203" y="480" text-anchor="middle" font-size="31" font-weight="400"
            fill="${GREEN_LABEL}">$0.2B</text>
          <rect x="2128" y="374" width="188" height="118" fill="transparent" pointer-events="all"/>
        </g>
      </g>`;
  };

  const line = (text, size, weight, color) => ({ text, size, weight, color });
  const block = (x, top, lines, lineGap = 8) => ({ x, top, anchor: 'middle', lineGap, lines });
  const labels = (zh) => {
    const t = zh ? {
      netSales: '净销售额', membership: '会员费', revenue: '收入', gross: '毛利润',
      merchandise: ['商品', '成本'], operatingProfit: '营业利润', sga: ['销售、一般', '及行政费用'],
      netProfit: '净利润', tax: '税费', y8: '同比 +8%', y14: '同比 +14%',
      grossMargin: '利润率 12.9%', grossPp: '同比 +0.2 个百分点',
      operatingMargin: '利润率 3.9%', operatingPp: '同比 +0.1 个百分点',
      netMargin: '利润率 3.0%', netPp: '同比 +0.1 个百分点',
    } : {
      netSales: 'Net Sales', membership: 'Membership Fee', revenue: 'Revenue', gross: 'Gross profit',
      merchandise: ['Merchandise', 'costs'], operatingProfit: 'Operating profit', sga: ['SG&A', 'expenses'],
      netProfit: 'Net profit', tax: 'Tax', y8: '+8% Y/Y', y14: '+14% Y/Y',
      grossMargin: '12.9% margin', grossPp: '+0.2pp Y/Y',
      operatingMargin: '3.9% margin', operatingPp: '+0.1pp Y/Y',
      netMargin: '3.0% margin', netPp: '+0.1pp Y/Y',
    };
    return {
      net_sales: { blocks: [
        block(438, 408, [line('$value', 39, 400, COSTCO_BLUE), line(t.y8, 28, 400, NOTE)], 9),
        block(210, 713, [line(t.netSales, 40, 800, COSTCO_BLUE)]),
      ] },
      membership_fee: { blocks: [
        block(207, 1026, [line(t.membership, 38, 800, COSTCO_BLUE)]),
        block(436, 1047, [line('$value', 39, 400, COSTCO_BLUE), line(t.y14, 28, 400, NOTE)], 9),
      ] },
      revenue: { blocks: [block(903, 469, [
        line(t.revenue, 40, 800, COSTCO_BLUE), line('$value', 39, 400, COSTCO_BLUE), line(t.y8, 28, 400, NOTE),
      ], 9)] },
      gross_profit: { blocks: [block(1373, 332, [
        line(t.gross, 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL),
        line(t.grossMargin, 28, 400, NOTE), line(t.grossPp, 28, 400, NOTE),
      ])] },
      merchandise_costs: { blocks: [block(1382, 1154, [
        ...t.merchandise.map((value) => line(value, 35, 800, RED_LABEL)), line('$value', 35, 400, RED_LABEL),
      ])] },
      operating_profit: { blocks: [block(1836, 244, [
        line(t.operatingProfit, 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL),
        line(t.operatingMargin, 28, 400, NOTE), line(t.operatingPp, 28, 400, NOTE),
      ])] },
      operating_expenses: { blocks: [block(1836, 704, [
        ...t.sga.map((value) => line(value, zh ? 31 : 35, 800, RED_LABEL)), line('$value', 35, 400, RED_LABEL),
      ])] },
      net_profit: { blocks: [block(2463, 295, [
        line(t.netProfit, 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL),
        line(t.netMargin, 28, 400, NOTE), line(t.netPp, 28, 400, NOTE),
      ])] },
      tax: { blocks: [block(2462, 493, [
        line(t.tax, 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL),
      ])] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'costco-q4-fy25', name: 'Costco · Q4 FY25', company: 'Costco',
    meta: {
      company: 'Costco', title: 'Costco Q4 FY25 Income Statement', period: 'Q4 FY25',
      periodNote: 'Ending Aug. 2025', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/costco-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 194, titleSize: 132, titleWeight: 800, titleTextLength: 2165,
      periodX: 2355, periodY: 1265, periodNoteY: 1313,
    },
    render: {
      width: 2667, height: 1500, background: BG, titleColor: TITLE, subtitleColor: NOTE, noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
      palette: {
        source: { node: COSTCO_BLUE, label: COSTCO_BLUE }, hub: { node: COSTCO_BLUE, label: COSTCO_BLUE },
        profit: { node: GREEN, label: GREEN_LABEL }, cost: { node: RED, label: RED_LABEL },
      },
      linkTint: { source: BLUE_LINK, hub: null, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations(false),
    nonNodeMetrics: [
      { id: 'interest', representation: 'flow', label: 'Interest', value: 0.2, type: 'profit', labelColor: GREEN_LABEL },
    ],
    layout: {
      scale: 4.98,
      routes: { interest: { x: 2162, y: 386, width: 0, height: 1 } },
      nodes: {
        net_sales: { x: 404, y: 523, width: 71, height: 421 },
        membership_fee: { x: 404, y: 1147, width: 71, height: 7 },
        revenue: { x: 871, y: 612, width: 70, height: 429 },
        gross_profit: { x: 1338, y: 516, width: 71, height: 53 },
        merchandise_costs: { x: 1338, y: 768, width: 71, height: 373 },
        operating_profit: { x: 1806, y: 429, width: 70, height: 15 },
        operating_expenses: { x: 1806, y: 648, width: 70, height: 38 },
        net_profit: { x: 2272, y: 327, width: 71, height: 10 },
        tax: { x: 2272, y: 517, width: 71, height: 2 },
      },
      labels: { interest: { blocks: [] }, ...labels(false) },
    },
    nodes: [
      { id: 'net_sales', col: 0, order: 0, type: 'source', label: 'Net Sales', value: 84.4, notes: ['+8% Y/Y'], color: COSTCO_BLUE, labelColor: COSTCO_BLUE, linkTint: BLUE_LINK },
      { id: 'membership_fee', col: 0, order: 1, type: 'source', label: 'Membership Fee', value: 1.7, notes: ['+14% Y/Y'], color: COSTCO_BLUE, labelColor: COSTCO_BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 86.2, notes: ['+8% Y/Y'], color: COSTCO_BLUE, labelColor: COSTCO_BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 11.1, notes: ['12.9% margin', '+0.2pp Y/Y'] },
      { id: 'merchandise_costs', col: 2, order: 1, type: 'cost', label: 'Merchandise costs', value: 75.0 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 3.3, notes: ['3.9% margin', '+0.1pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'SG&A expenses', value: 7.8 },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 2.6, notes: ['3.0% margin', '+0.1pp Y/Y'] },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.9 },
    ],
    links: [
      { source: 'net_sales', target: 'revenue', value: 84.4, sourceWidth: 421, targetWidth: 421,
        y0: 733.5, y1: 822.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'membership_fee', target: 'revenue', value: 1.7, sourceWidth: 7, targetWidth: 7,
        y0: 1150.5, y1: 1037.5, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 11.1, sourceWidth: 56, targetWidth: 53,
        y0: 640, y1: 542.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'merchandise_costs', value: 75.0, sourceWidth: 373, targetWidth: 373,
        y0: 854.5, y1: 954.5, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'gross_profit', target: 'operating_profit', value: 3.3, sourceWidth: 15, targetWidth: 15,
        y0: 523.5, y1: 436.5, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 7.8, sourceWidth: 38, targetWidth: 38,
        y0: 550, y1: 667, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 2.4, sourceWidth: 13, targetWidth: 10,
        y0: 435.5, y1: 332, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'operating_profit', target: 'tax', value: 0.9, sourceWidth: 2, targetWidth: 2,
        y0: 443, y1: 518, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      { sourceRoute: 'interest', target: 'net_profit', value: 0.2, sourceWidth: 1, targetWidth: 2,
        y0: 386, y1: 337, sourceOrder: 0, targetOrder: 1, interactionOnly: true, linkTint: GREEN_LINK,
        curve: { x0: 2162, c1x: 2234, c1y: 386, c2x: 2240, c2y: 337 } },
    ],
    i18n: {
      zh: {
        name: 'Costco · 2025 财年第四季度',
        meta: {
          title: 'Costco 2025 财年第四季度利润表', period: '2025 财年第四季度',
          periodNote: '截至 2025 年 8 月', titleTextLength: 1770,
        },
        annotationsSvg: annotations(true),
        nonNodeMetrics: { interest: { label: '利息' } },
        nodes: {
          net_sales: { label: '净销售额', notes: ['同比 +8%'] },
          membership_fee: { label: '会员费', notes: ['同比 +14%'] },
          revenue: { label: '收入', notes: ['同比 +8%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 12.9%', '同比 +0.2 个百分点'] },
          merchandise_costs: { label: '商品成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 3.9%', '同比 +0.1 个百分点'] },
          operating_expenses: { label: '销售、一般及行政费用' },
          net_profit: { label: '净利润', notes: ['利润率 3.0%', '同比 +0.1 个百分点'] },
          tax: { label: '税费' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
