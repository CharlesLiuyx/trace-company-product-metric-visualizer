/* Fixed SVG Sankey measured from input/processed/bullish-q3-fy25.png. */
(function () {
  const BLACK = '#000000';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const TITLE = '#155077';
  const RIGHT_LABEL_X = 2475;

  const bullishMark = `
    <g transform="translate(7 0) scale(0.93 1.015)">
      <path d="M 6 7 C 35 25 68 28 95 34 C 107 37 116 41 123 48
        L 101 79 C 88 68 74 63 56 61 L 56 47 C 36 44 18 36 0 24 Z"
        fill="${BLACK}"/>
      <path d="M 269 7 C 246 22 223 29 194 33 C 143 40 108 78 108 129
        L 108 137 L 162 137 L 162 129 C 162 98 181 78 215 74 L 215 57
        C 176 60 151 79 143 108 L 127 108 C 133 76 156 55 195 49
        C 227 45 253 35 276 21 Z" fill="${BLACK}"/>
    </g>`;

  const tradingWordmark = `
    <g data-typography-role="brand" transform="translate(116 281)">
      <g transform="translate(0 -1) scale(0.18 0.18)">${bullishMark}</g>
      <text x="58" y="28" font-family="Montserrat,Arial,sans-serif" font-size="38" font-weight="500" fill="${BLACK}">Bullish</text>
    </g>`;

  const coinDeskWordmark = `
    <g data-typography-role="brand" transform="translate(92 553)">
      <g fill="none" stroke="#f8bf1e" stroke-width="8" stroke-linecap="round">
        <path d="M 10 7 H 31 M 10 7 V 34 M 10 34 H 31"/>
      </g>
      <g fill="#f8bf1e">
        <circle cx="10" cy="7" r="7"/><circle cx="31" cy="7" r="7"/>
        <circle cx="10" cy="21" r="7"/><circle cx="10" cy="34" r="7"/>
        <circle cx="31" cy="34" r="7"/><circle cx="27" cy="21" r="4"/>
      </g>
      <text x="47" y="36" font-family="Montserrat,Arial,sans-serif" font-size="36" font-weight="800" fill="#2a2a2a">CoinDesk</text>
    </g>`;

  const subscriptionCaption = (lines) => `
    <g class="sankey-interactive-annotation" data-node="subscription_services_other"
       font-family="Noto Sans,Arial,sans-serif" text-anchor="middle">
      <text x="204" y="668" font-size="40" font-weight="800" fill="${BLACK}">${lines[0]}</text>
      <text x="204" y="718" font-size="40" font-weight="800" fill="${BLACK}">${lines[1]}</text>
      <text x="204" y="768" font-size="40" font-weight="800" fill="${BLACK}">${lines[2]}</text>
      <text x="204" y="807" font-size="29" font-weight="400" fill="${NOTE}">${lines[3]}</text>
      <text x="204" y="846" font-size="29" font-weight="400" fill="${NOTE}">${lines[4]}</text>
      <text x="204" y="885" font-size="29" font-weight="400" fill="${NOTE}">${lines[5]}</text>
    </g>`;

  const subscriptionCaptionEn = subscriptionCaption([
    'Subscription,', 'Services &amp;', 'Other revenue',
    'Primarily', 'subscription and services', '(media/data)',
  ]);
  const subscriptionCaptionZh = `
    <g class="sankey-interactive-annotation" data-node="subscription_services_other"
       font-family="Noto Sans,Arial,sans-serif" text-anchor="middle">
      <text x="210" y="702" font-size="40" font-weight="800" fill="${BLACK}">订阅、服务</text>
      <text x="210" y="752" font-size="40" font-weight="800" fill="${BLACK}">及其他收入</text>
      <text x="210" y="791" font-size="29" font-weight="400" fill="${NOTE}">主要为订阅与服务</text>
      <text x="210" y="830" font-size="29" font-weight="400" fill="${NOTE}">（媒体/数据）</text>
    </g>`;

  const tradingCaption = (name, firstNote, secondNote) => `
    <g class="sankey-interactive-annotation" data-node="trading_net"
       font-family="Noto Sans,Arial,sans-serif" text-anchor="middle">
      <text x="204" y="383" font-size="40" font-weight="800" fill="${BLACK}">${name}</text>
      <text x="204" y="425" font-size="30" font-weight="400" fill="${NOTE}">${firstNote}</text>
      <text x="204" y="467" font-size="30" font-weight="400" fill="${NOTE}">${secondNote}</text>
    </g>`;

  const tradingCaptionEn = tradingCaption('Trading (net)', 'Based on $42B of', 'digital asset sales');
  const tradingCaptionZh = tradingCaption('交易净收入', '基于 420 亿美元', '数字资产销售额');

  const line = (text, size, weight, color) => ({ text, size, weight, color });
  const block = (x, top, lines, anchor = 'middle', lineGap = 8) => ({
    x, top, anchor, lineGap, lines,
  });

  const EN = {
    trading_net: {
      blocks: [
        block(407, 242, [
          line('$value', 40, 400, BLACK),
          line('(29%) Y/Y', 30, 400, NOTE),
        ], 'middle', 10),
      ],
    },
    subscription_services_other: {
      blocks: [
        block(401, 481, [
          line('$value', 40, 400, BLACK),
          line('+227% Y/Y', 30, 400, NOTE),
        ], 'middle', 10),
      ],
    },
    revenue: {
      blocks: [block(874, 274, [
        line('Revenue', 40, 800, BLACK),
        line('$value', 40, 400, BLACK),
        line('+79% Y/Y', 30, 400, NOTE),
      ], 'middle', 10)],
    },
    net_mark_to_market_investments: {
      blocks: [block(874, 1157, [
        line('Net mark-to-market', 40, 800, GREEN_LABEL),
        line('& investments', 40, 800, GREEN_LABEL),
        line('$value', 40, 400, GREEN_LABEL),
      ], 'middle', 10)],
    },
    pretax_income: {
      blocks: [block(1793, 303.5, [
        line('Pretax income', 40, 800, GREEN_LABEL),
        line('$value', 40, 400, GREEN_LABEL),
      ], 'middle', 10)],
    },
    operating_expenses: {
      blocks: [block(1809, 1136.5, [
        line('Expenses', 40, 800, RED_LABEL),
        line('$value', 40, 400, RED_LABEL),
      ], 'middle', 10)],
    },
    tax_benefit: {
      blocks: [block(2113.5, 524, [
        line('Tax benefit', 34, 800, GREEN_LABEL),
        line('$value', 34, 400, GREEN_LABEL),
      ], 'middle', 8)],
    },
    net_income: {
      blocks: [block(2453, 317, [
        line('Net income', 40, 800, GREEN_LABEL),
        line('$value', 40, 400, GREEN_LABEL),
      ], 'middle', 10)],
    },
    administrative: {
      blocks: [block(RIGHT_LABEL_X, 831, [
        line('Administrative', 34, 800, RED_LABEL),
        line('$value', 34, 400, RED_LABEL),
      ], 'middle', 8)],
    },
    fv_liabilities_derivatives: {
      blocks: [
        block(RIGHT_LABEL_X, 1016, [
          line('FV of liabilities &', 34, 800, RED_LABEL),
        ], 'middle', 7),
        block(2414, 1057, [
          line('derivatives', 34, 800, RED_LABEL),
        ], 'middle', 7),
        block(2565, 1057, [
          line('$value', 34, 400, RED_LABEL),
        ], 'middle', 7),
      ],
    },
    finance_expenses: {
      blocks: [block(RIGHT_LABEL_X, 1167, [
        line('Finance expenses', 34, 800, RED_LABEL),
        line('$value', 34, 400, RED_LABEL),
      ], 'middle', 8)],
    },
    other_expenses: {
      blocks: [block(RIGHT_LABEL_X, 1295, [
        line('Other', 34, 800, RED_LABEL),
        line('$value', 34, 400, RED_LABEL),
      ], 'middle', 8)],
    },
  };

  const ZH = {
    trading_net: {
      blocks: [
        block(407, 242, [
          line('$value', 40, 400, BLACK),
          line('同比 (29%)', 30, 400, NOTE),
        ], 'middle', 10),
      ],
    },
    subscription_services_other: {
      blocks: [
        block(407, 481, [
          line('$value', 40, 400, BLACK),
          line('同比 +227%', 30, 400, NOTE),
        ], 'middle', 10),
      ],
    },
    revenue: {
      blocks: [block(874, 274, [
        line('收入', 40, 800, BLACK),
        line('$value', 40, 400, BLACK),
        line('同比 +79%', 30, 400, NOTE),
      ], 'middle', 10)],
    },
    net_mark_to_market_investments: {
      blocks: [block(874, 1157, [
        line('按市值计价及', 40, 800, GREEN_LABEL),
        line('投资净收益', 40, 800, GREEN_LABEL),
        line('$value', 40, 400, GREEN_LABEL),
      ], 'middle', 10)],
    },
    pretax_income: {
      blocks: [block(1809, 305, [
        line('税前利润', 40, 800, GREEN_LABEL),
        line('$value', 40, 400, GREEN_LABEL),
      ], 'middle', 10)],
    },
    operating_expenses: {
      blocks: [block(1809, 1143, [
        line('费用', 40, 800, RED_LABEL),
        line('$value', 40, 400, RED_LABEL),
      ], 'middle', 10)],
    },
    tax_benefit: {
      blocks: [block(2113.5, 533, [
        line('税收收益', 34, 800, GREEN_LABEL),
        line('$value', 34, 400, GREEN_LABEL),
      ], 'middle', 8)],
    },
    net_income: {
      blocks: [block(2453, 325, [
        line('净利润', 40, 800, GREEN_LABEL),
        line('$value', 40, 400, GREEN_LABEL),
      ], 'middle', 10)],
    },
    administrative: {
      blocks: [block(RIGHT_LABEL_X, 831, [
        line('行政费用', 34, 800, RED_LABEL),
        line('$value', 34, 400, RED_LABEL),
      ], 'middle', 8)],
    },
    fv_liabilities_derivatives: {
      blocks: [block(RIGHT_LABEL_X, 1016, [
        line('负债及衍生品', 34, 800, RED_LABEL),
        line('公允价值变动', 34, 800, RED_LABEL),
        line('$value', 34, 400, RED_LABEL),
      ], 'middle', 7)],
    },
    finance_expenses: {
      blocks: [block(RIGHT_LABEL_X, 1167, [
        line('财务费用', 34, 800, RED_LABEL),
        line('$value', 34, 400, RED_LABEL),
      ], 'middle', 8)],
    },
    other_expenses: {
      blocks: [block(RIGHT_LABEL_X, 1295, [
        line('其他', 34, 800, RED_LABEL),
        line('$value', 34, 400, RED_LABEL),
      ], 'middle', 8)],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'bullish-q3-fy25',
    name: 'Bullish · Q3 FY25',
    company: 'Bullish',
    meta: {
      company: 'Bullish',
      title: 'Bullish Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Sep. 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: {
        src: 'input/processed/bullish-q3-fy25.png',
        width: 2667,
        height: 1500,
      },
      titleX: 1334,
      titleY: 198,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2136,
      hidePeriodStamp: true,
      logoWidth: 275,
      logoHeight: 145,
      logoY: 350,
      logoViewBox: '0 0 275 145',
      logoSvg: bullishMark,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      nodeRadius: 0,
      interfaceAudit: { mode: 'error' },
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLACK, label: BLACK },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: GRAY_LINK,
        hub: GREEN_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 30, lineGap: 8 },
    },
    annotationsSvg: `${tradingWordmark}${coinDeskWordmark}${tradingCaptionEn}${subscriptionCaptionEn}`,
    layout: {
      scale: 4.64,
      nodes: {
        trading_net: { x: 372, y: 335, width: 71, height: 68 },
        subscription_services_other: { x: 372, y: 573, width: 71, height: 233 },
        revenue: { x: 839, y: 415, width: 70, height: 302 },
        net_mark_to_market_investments: { x: 839, y: 939, width: 70, height: 199 },
        total_income: { x: 1306, y: 531, width: 71, height: 504 },
        pretax_income: { x: 1774, y: 415, width: 70, height: 83 },
        operating_expenses: { x: 1774, y: 700, width: 70, height: 418 },
        tax_benefit: { x: 2078, y: 509, width: 71, height: 1 },
        net_income: { x: 2240, y: 325, width: 71, height: 85 },
        administrative: { x: 2240, y: 746, width: 71, height: 213 },
        fv_liabilities_derivatives: { x: 2240, y: 1023, width: 71, height: 75 },
        finance_expenses: { x: 2240, y: 1164, width: 71, height: 62 },
        other_expenses: { x: 2240, y: 1301, width: 71, height: 63 },
      },
      labels: EN,
    },
    nodes: [
      {
        id: 'trading_net', col: 0, order: 0, type: 'source',
        label: 'Trading (net)', value: 15, valueText: '$15M',
        notes: ['(29%) Y/Y', 'Based on $42B of digital asset sales'],
      },
      {
        id: 'subscription_services_other', col: 0, order: 1, type: 'source',
        label: ['Subscription,', 'Services &', 'Other revenue'], value: 50, valueText: '$50M',
        notes: ['+227% Y/Y', 'Primarily subscription and services (media/data)'],
      },
      {
        id: 'revenue', col: 1, order: 0, type: 'source',
        label: 'Revenue', value: 65, valueText: '$65M', notes: ['+79% Y/Y'],
      },
      {
        id: 'net_mark_to_market_investments', col: 1, order: 1, type: 'profit',
        label: ['Net mark-to-market', '& investments'], value: 43, valueText: '$43M',
      },
      {
        id: 'total_income', col: 2, order: 0, type: 'hub',
        label: '', value: 108, valueText: '', color: GREEN, labelColor: GREEN_LABEL,
      },
      {
        id: 'pretax_income', col: 3, order: 0, type: 'profit',
        label: 'Pretax income', value: 18, valueText: '$18M',
      },
      {
        id: 'operating_expenses', col: 3, order: 1, type: 'cost',
        label: 'Expenses', value: 90, valueText: '($90M)',
      },
      {
        id: 'tax_benefit', col: 4, order: 0, type: 'profit',
        label: 'Tax benefit', value: 0.1, valueText: '$0.1M',
      },
      {
        id: 'net_income', col: 5, order: 0, type: 'profit',
        label: 'Net income', value: 18, valueText: '$18M',
      },
      {
        id: 'administrative', col: 4, order: 1, type: 'cost',
        label: 'Administrative', value: 46, valueText: '($46M)',
      },
      {
        id: 'fv_liabilities_derivatives', col: 4, order: 2, type: 'cost',
        label: ['FV of liabilities &', 'derivatives'], value: 16, valueText: '($16M)',
      },
      {
        id: 'finance_expenses', col: 4, order: 3, type: 'cost',
        label: 'Finance expenses', value: 14, valueText: '($14M)',
      },
      {
        id: 'other_expenses', col: 4, order: 4, type: 'cost',
        label: 'Other', value: 14, valueText: '($14M)',
      },
    ],
    links: [
      {
        source: 'trading_net', target: 'revenue', value: 15,
        sourceWidth: 68, targetWidth: 68, sourceOrder: 0, targetOrder: 0,
      },
      {
        source: 'subscription_services_other', target: 'revenue', value: 50,
        sourceWidth: 233, targetWidth: 234, sourceOrder: 0, targetOrder: 1,
      },
      {
        source: 'revenue', target: 'total_income', value: 65,
        sourceWidth: 302, targetWidth: 303, sourceOrder: 0, targetOrder: 0,
        linkTint: GREEN_LINK,
      },
      {
        source: 'net_mark_to_market_investments', target: 'total_income', value: 43,
        sourceWidth: 199, targetWidth: 201, sourceOrder: 0, targetOrder: 1,
        linkTint: GREEN_LINK,
      },
      {
        source: 'total_income', target: 'pretax_income', value: 18,
        sourceWidth: 84, targetWidth: 83, sourceOrder: 0, targetOrder: 0,
        linkTint: GREEN_LINK,
      },
      {
        source: 'total_income', target: 'operating_expenses', value: 90,
        sourceWidth: 420, targetWidth: 418, sourceOrder: 1, targetOrder: 0,
        linkTint: RED_LINK,
      },
      {
        source: 'pretax_income', target: 'net_income', value: 18,
        sourceWidth: 83, targetWidth: 84, sourceOrder: 0, targetOrder: 0,
        linkTint: GREEN_LINK,
      },
      {
        source: 'tax_benefit', target: 'net_income', value: 0.1,
        sourceWidth: 1, targetWidth: 1, sourceOrder: 0, targetOrder: 1,
        y0: 509.5, y1: 409.5,
        curve: { c1x: 2166, c1y: 509.5, c2x: 2187, c2y: 409.5 },
        linkTint: GREEN_LINK,
      },
      {
        source: 'operating_expenses', target: 'administrative', value: 46,
        sourceWidth: 213, targetWidth: 213, sourceOrder: 0, targetOrder: 0,
      },
      {
        source: 'operating_expenses', target: 'fv_liabilities_derivatives', value: 16,
        sourceWidth: 74, targetWidth: 75, sourceOrder: 1, targetOrder: 0,
      },
      {
        source: 'operating_expenses', target: 'finance_expenses', value: 14,
        sourceWidth: 65, targetWidth: 62, sourceOrder: 2, targetOrder: 0,
      },
      {
        source: 'operating_expenses', target: 'other_expenses', value: 14,
        sourceWidth: 66, targetWidth: 63, sourceOrder: 3, targetOrder: 0,
      },
    ],
    i18n: {
      preservedAnnotationText: ['Bullish', 'CoinDesk'],
      zh: {
        name: 'Bullish · 2025 财年第三季度',
        meta: {
          title: 'Bullish 2025 财年第三季度利润表',
          period: '2025 财年第三季度',
          periodNote: '截至 2025 年 9 月',
          titleTextLength: 1770,
        },
        nodes: {
          trading_net: {
            label: '交易净收入',
            notes: ['同比 (29%)', '基于 420 亿美元数字资产销售额'],
          },
          subscription_services_other: {
            label: '订阅、服务及其他收入',
            notes: ['同比 +227%', '主要为订阅与服务（媒体/数据）'],
          },
          revenue: { label: '收入', notes: ['同比 +79%'] },
          net_mark_to_market_investments: { label: '按市值计价及投资净收益' },
          pretax_income: { label: '税前利润' },
          operating_expenses: { label: '费用' },
          tax_benefit: { label: '税收收益', valueText: '$0.1M' },
          net_income: { label: '净利润' },
          administrative: { label: '行政费用' },
          fv_liabilities_derivatives: { label: '负债及衍生品公允价值变动' },
          finance_expenses: { label: '财务费用' },
          other_expenses: { label: '其他' },
        },
        annotationsSvg: `${tradingWordmark}${coinDeskWordmark}${tradingCaptionZh}${subscriptionCaptionZh}`,
        layout: { labels: ZH },
      },
    },
  });
})();
