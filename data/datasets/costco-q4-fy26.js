/* Costco Q4 FY26 income statement ($B), measured from the native 2667x1500 Source. */
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

  const kpiCard = (x, width, lines, zh, metricId) => `
    <g>
      <rect x="${x}" y="1215" width="${width}" height="142" rx="24" fill="${COSTCO_BLUE}"/>
      ${lines.map((text, index) => `
        <text ${index === 2 ? `data-operating-metric="${metricId}"` : ''} x="${x + width / 2}" y="${1257 + index * 37}" text-anchor="middle"
          font-family="Noto Sans,Arial,${zh ? "'Microsoft YaHei'," : ''}sans-serif"
          font-size="${index === 2 ? 28 : 29}" font-weight="${index === 2 ? 500 : 800}"
          fill="#ffffff">${text}</text>${index === 2 ? `<text x="${x + width / 2}" y="1350" text-anchor="middle" font-size="18" fill="#ffffff">${zh ? '同比' : 'Y/Y'}</text>` : ''}`).join('')}
    </g>`;

  const annotations = (zh) => {
    const text = zh ? {
      us: ['调整后美国', '可比销售额', '+7.2%'],
      company: ['调整后公司', '可比销售额', '+6.7%'],
      ecommerce: ['调整后', '数字化销售额', '+19.8%'],
      interest: '利息',
    } : {
      us: ['Adj. US', 'Comp sales', '+7.2%'],
      company: ['Adj. Company', 'Comp sales', '+6.7%'],
      ecommerce: ['Adj.', 'Digitally-Enabled', '+19.8%'],
      interest: 'Interest',
    };
    return `
      <g font-family="Noto Sans,Arial,sans-serif">
        ${icon('costcoCompanyWordmark', 580, 235)}
        ${zh ? membershipCardsZh(58, 1080) : icon('costcoMembershipCards', 58, 1080)}
        ${kpiCard(36, 276, text.us, zh, 'adj-us-comp')}
        ${kpiCard(320, 330, text.company, zh, 'adj-company-comp')}
        ${kpiCard(660, 276, text.ecommerce, zh, 'adj-digital')}
        <g class="sankey-interactive-annotation" data-node="interest"
          data-link-numerator="interest" data-link-denominator="net_profit"
          data-link-anchor-x="2186" data-link-anchor-y="373">
          <path d="M2148 373H2218C2248 373 2245 332 2272 332" fill="none"
            stroke="${GREEN_LINK}" stroke-width="2"/>
          <text x="2186" y="415" text-anchor="middle" font-size="31" font-weight="800"
            fill="${GREEN_LABEL}">${text.interest}</text>
          <text x="2186" y="455" text-anchor="middle" font-size="31" font-weight="400"
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
      netProfit: '净利润', tax: '税费', y8: '同比 +11%', y14: '同比 +7%',
      grossMargin: '利润率 12.9%', grossPp: '同比 -0.2 个百分点',
      operatingMargin: '利润率 4.0%', operatingPp: '同比 +0.1 个百分点',
      netMargin: '利润率 3.1%', netPp: '同比 +0.1 个百分点',
    } : {
      netSales: 'Net Sales', membership: 'Membership Fee', revenue: 'Revenue', gross: 'Gross profit',
      merchandise: ['Merchandise', 'costs'], operatingProfit: 'Operating profit', sga: ['SG&A', 'expenses'],
      netProfit: 'Net profit', tax: 'Tax', y8: '+11% Y/Y', y14: '+7% Y/Y',
      grossMargin: '12.9% margin', grossPp: '(0.2pp) Y/Y',
      operatingMargin: '4.0% margin', operatingPp: '+0.1pp Y/Y',
      netMargin: '3.1% margin', netPp: '+0.1pp Y/Y',
    };
    return {
      net_sales: { blocks: [
        block(438, 394, [line('$value', 39, 400, COSTCO_BLUE), line(t.y8, 28, 400, NOTE)], 9),
        block(210, 709, [line(t.netSales, 40, 800, COSTCO_BLUE)]),
      ] },
      membership_fee: { blocks: [
        block(207, 1014, [line(t.membership, 38, 800, COSTCO_BLUE)]),
        block(436, 1049, [line('$value', 39, 400, COSTCO_BLUE), line(t.y14, 28, 400, NOTE)], 9),
      ] },
      revenue: { blocks: [block(907, 439, [
        line(t.revenue, 40, 800, COSTCO_BLUE), line('$value', 39, 400, COSTCO_BLUE), line(t.y8, 28, 400, NOTE),
      ], 9)] },
      gross_profit: { blocks: [block(1373, 296, [
        line(t.gross, 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL),
        line(t.grossMargin, 28, 400, NOTE), line(t.grossPp, 28, 400, NOTE),
      ])] },
      merchandise_costs: { blocks: [block(1373, 1163, [
        ...t.merchandise.map((value) => line(value, 35, 800, RED_LABEL)), line('$value', 35, 400, RED_LABEL),
      ])] },
      operating_profit: { blocks: [block(1840, 208, [
        line(t.operatingProfit, 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL),
        line(t.operatingMargin, 28, 400, NOTE), line(t.operatingPp, 28, 400, NOTE),
      ])] },
      operating_expenses: { blocks: [block(1840, 650, [
        ...t.sga.map((value) => line(value, zh ? 31 : 35, 800, RED_LABEL)), line('$value', 35, 400, RED_LABEL),
      ])] },
      net_profit: { blocks: [block(2463, 266, [
        line(t.netProfit, 40, 800, GREEN_LABEL), line('$value', 39, 400, GREEN_LABEL),
        line(t.netMargin, 28, 400, NOTE), line(t.netPp, 28, 400, NOTE),
      ])] },
      tax: { blocks: [block(2462, 480, [
        line(t.tax, 31, 800, RED_LABEL), line('$value', 31, 400, RED_LABEL),
      ])] },
    };
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'costco-q4-fy26', name: 'Costco · Q4 FY26', company: 'Costco',
    meta: {
      company: 'Costco', title: 'Costco Q4 FY26 Income Statement', period: 'Q4 FY26',
      periodNote: 'Ending Aug. 2026', currency: '$', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processing/costco-q4-fy26.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 194, titleSize: 132, titleWeight: 800, titleTextLength: 2165,
      periodX: 2255, periodY: 1228, periodNoteY: 1270,
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
    operatingMetrics: [{"id": "adj-us-comp", "label": "Adj. US Comp sales", "literal": "+7.2%", "value": "7.2", "unit": "%", "currency": null, "comparison": "eq", "basis": "unspecified", "notes": ["Y/Y"], "quote": "Adj. US Comp sales\n+7.2% Y/Y", "anchor": {"type": "image-box", "box": [36, 1215, 276, 142]}}, {"id": "adj-company-comp", "label": "Adj. Company Comp sales", "literal": "+6.7%", "value": "6.7", "unit": "%", "currency": null, "comparison": "eq", "basis": "unspecified", "notes": ["Y/Y"], "quote": "Adj. Company Comp sales\n+6.7% Y/Y", "anchor": {"type": "image-box", "box": [320, 1215, 330, 142]}}, {"id": "adj-digital", "label": "Adj. Digitally-Enabled", "literal": "+19.8%", "value": "19.8", "unit": "%", "currency": null, "comparison": "eq", "basis": "unspecified", "notes": ["Y/Y"], "quote": "Adj. Digitally-Enabled\n+19.8% Y/Y", "anchor": {"type": "image-box", "box": [660, 1215, 276, 142]}}],
    annotationsSvg: annotations(false),
    nonNodeMetrics: [
      { id: 'interest', representation: 'flow', label: 'Interest', value: 0.2, type: 'profit', labelColor: GREEN_LABEL },
    ],
    layout: {
      scale: 4.98,
      routes: { interest: { x: 2148, y: 373, width: 0, height: 1 } },
      nodes: {
        net_sales: { x: 404, y: 493, width: 72, height: 481 },
        membership_fee: { x: 404, y: 1154, width: 72, height: 10 },
        revenue: { x: 871, y: 590, width: 72, height: 490 },
        gross_profit: { x: 1338, y: 486, width: 72, height: 63 },
        merchandise_costs: { x: 1338, y: 724, width: 72, height: 429 },
        operating_profit: { x: 1806, y: 397, width: 72, height: 19 },
        operating_expenses: { x: 1806, y: 593, width: 72, height: 43 },
        net_profit: { x: 2272, y: 317, width: 72, height: 16 },
        tax: { x: 2272, y: 517, width: 72, height: 4 },
      },
      labels: { interest: { blocks: [] }, ...labels(false) },
    },
    nodes: [
      { id: 'net_sales', col: 0, order: 0, type: 'source', label: 'Net Sales', value: 93.9, notes: ['+11% Y/Y'], color: COSTCO_BLUE, labelColor: COSTCO_BLUE, linkTint: BLUE_LINK },
      { id: 'membership_fee', col: 0, order: 1, type: 'source', label: 'Membership Fee', value: 1.9, notes: ['+7% Y/Y'], color: COSTCO_BLUE, labelColor: COSTCO_BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 95.7, notes: ['+11% Y/Y'], color: COSTCO_BLUE, labelColor: COSTCO_BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 12.2, notes: ['12.9% margin', '(0.2pp) Y/Y'] },
      { id: 'merchandise_costs', col: 2, order: 1, type: 'cost', label: 'Merchandise costs', value: 83.5 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 3.8, notes: ['4.0% margin', '+0.1pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'SG&A expenses', value: 8.4 },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 3.0, valueText: '$3.0B', notes: ['3.1% margin', '+0.1pp Y/Y'] },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 1.0, valueText: '($1.0B)' },
    ],
    links: [
    {
        "source": "net_sales",
        "target": "revenue",
        "value": 93.9,
        "sourceWidth": 481,
        "targetWidth": 481,
        "y0": 733.5,
        "y1": 830.5,
        "sourceOrder": 0,
        "targetOrder": 0
    },
    {
        "source": "membership_fee",
        "target": "revenue",
        "value": 1.9,
        "sourceWidth": 10,
        "targetWidth": 9,
        "y0": 1159,
        "y1": 1075.5,
        "sourceOrder": 0,
        "targetOrder": 1
    },
    {
        "source": "revenue",
        "target": "gross_profit",
        "value": 12.2,
        "sourceWidth": 63,
        "targetWidth": 63,
        "y0": 621.5,
        "y1": 517.5,
        "sourceOrder": 0,
        "targetOrder": 0,
        "linkTint": GREEN_LINK
    },
    {
        "source": "revenue",
        "target": "merchandise_costs",
        "value": 83.5,
        "sourceWidth": 427,
        "targetWidth": 429,
        "y0": 866.5,
        "y1": 938.5,
        "sourceOrder": 1,
        "targetOrder": 0,
        "linkTint": RED_LINK
    },
    {
        "source": "gross_profit",
        "target": "operating_profit",
        "value": 3.8,
        "sourceWidth": 19,
        "targetWidth": 19,
        "y0": 495.5,
        "y1": 406.5,
        "sourceOrder": 0,
        "targetOrder": 0,
        "linkTint": GREEN_LINK
    },
    {
        "source": "gross_profit",
        "target": "operating_expenses",
        "value": 8.4,
        "sourceWidth": 44,
        "targetWidth": 43,
        "y0": 527,
        "y1": 614.5,
        "sourceOrder": 1,
        "targetOrder": 0,
        "linkTint": RED_LINK
    },
    {
        "source": "operating_profit",
        "target": "net_profit",
        "value": 2.8,
        "sourceWidth": 15,
        "targetWidth": 16,
        "y0": 404.5,
        "y1": 325,
        "sourceOrder": 0,
        "targetOrder": 0,
        "linkTint": GREEN_LINK
    },
    {
        "source": "operating_profit",
        "target": "tax",
        "value": 1.0,
        "sourceWidth": 4,
        "targetWidth": 4,
        "y0": 414,
        "y1": 519,
        "sourceOrder": 1,
        "targetOrder": 0,
        "linkTint": RED_LINK
    },
    {
        "sourceRoute": "interest",
        "target": "net_profit",
        "value": 0.2,
        "sourceWidth": 1,
        "targetWidth": 1,
        "y0": 373,
        "y1": 332,
        "sourceOrder": 0,
        "targetOrder": 1,
        "interactionOnly": true,
        "linkTint": GREEN_LINK,
        "curve": {
            "x0": 2148,
            "c1x": 2218,
            "c1y": 373,
            "c2x": 2245,
            "c2y": 332
        }
    }
],
    i18n: {
      zh: {
        name: 'Costco · 2026 财年第四季度',
        meta: {
          title: 'Costco 2026 财年第四季度利润表', period: '2026 财年第四季度',
          periodNote: '截至 2026 年 8 月', titleTextLength: 1770,
        },
        annotationsSvg: annotations(true),
        nonNodeMetrics: { interest: { label: '利息' } },
        nodes: {
          net_sales: { label: '净销售额', notes: ['同比 +11%'] },
          membership_fee: { label: '会员费', notes: ['同比 +7%'] },
          revenue: { label: '收入', notes: ['同比 +11%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 12.9%', '同比 -0.2 个百分点'] },
          merchandise_costs: { label: '商品成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 4.0%', '同比 +0.1 个百分点'] },
          operating_expenses: { label: '销售、一般及行政费用' },
          net_profit: { label: '净利润', notes: ['利润率 3.1%', '同比 +0.1 个百分点'] },
          tax: { label: '税费' },
        },
        layout: { labels: labels(true) },
      },
    },
  });
})();
