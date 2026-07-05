/* ====================================================================
 * Sea - Q4 FY25 income statement ($B)
 * Reconstructed from input/processed/sea-q4-fy25.png as a fixed
 * d3-sankey layout with pure SVG/vector brand annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const BLUE = '#07008e';
  const BLUE_LABEL = '#07008e';
  const BLUE_LINK = '#8785c4';
  const SHOPEE = '#ff5a00';
  const MONEE = '#075bed';
  const GARENA = '#d80000';
  const OTHER_GREY = '#7d7d7d';
  const GREEN = '#29a32a';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#d70000';
  const RED_LABEL = '#8f1200';
  const RED_LINK = '#df8184';
  const NOTE = '#767676';
  const WHITE = '#ffffff';
  const BG = '#f2f2f2';

  const seaLogoSvg = `
    <defs>
      <clipPath id="sea-q4-fy25-logo-clip"><circle cx="95" cy="95" r="88"/></clipPath>
    </defs>
    <g clip-path="url(#sea-q4-fy25-logo-clip)">
      <rect x="0" y="0" width="190" height="190" fill="#0a0089"/>
      <path d="M-20 42 C38 5 92 6 136 36 C166 56 196 56 222 43 L222 -20 L-20 -20 Z" fill="#ff2b25"/>
      <path d="M-20 72 C44 40 89 40 138 66 C166 80 196 78 222 62 L222 23 C184 43 155 45 121 26 C78 2 31 9 -20 42 Z" fill="#ff5a18"/>
      <path d="M-20 100 C38 76 81 80 129 94 C163 104 190 102 222 88 L222 61 C189 76 165 78 137 66 C87 43 42 39 -20 72 Z" fill="#11cfe3"/>
      <path d="M-20 135 C42 105 88 112 137 125 C169 133 196 130 222 116 L222 86 C191 101 163 104 129 94 C81 80 39 76 -20 100 Z" fill="#428ee9"/>
      <path d="M-20 210 L222 210 L222 116 C194 132 166 136 137 125 C87 113 41 106 -20 135 Z" fill="#08008f"/>
      <path d="M132 64 C158 57 178 57 203 50 L222 44 L222 76 C186 91 162 94 132 83 Z" fill="#00b889"/>
    </g>
    <text x="242" y="108" font-family="Montserrat,Arial,sans-serif" font-size="118" font-weight="800" fill="${BLUE}">sea</text>
    <text x="260" y="151" font-family="Montserrat,Arial,sans-serif" font-size="21" font-weight="600" fill="${BLUE}">connecting the dots</text>`;

  const shopeeBag = (x, y, s) => `
    <g transform="translate(${x} ${y}) scale(${s})">
      <path d="M7 23 H75 L69 93 Q68 105 56 105 H26 Q14 105 13 93 Z" fill="${SHOPEE}"/>
      <path d="M26 24 V17 C26 4 56 4 56 17 V24" fill="none" stroke="${SHOPEE}" stroke-width="6" stroke-linecap="round"/>
      <text x="41" y="78" text-anchor="middle" font-family="Arial,sans-serif" font-size="60" fill="${WHITE}">S</text>
    </g>`;

  const garenaGlyph = (x, y, s) => `
    <g transform="translate(${x} ${y}) scale(${s})" fill="${GARENA}">
      <path d="M86 8 C61 20 40 24 13 24 C42 39 76 37 104 26 C94 39 81 49 64 55 C38 64 21 80 13 101 C30 86 50 80 72 82 C53 92 45 108 50 128 C61 114 74 105 91 102 C82 118 86 135 103 147 C102 124 115 108 137 97 C113 94 99 84 95 67 C116 63 136 53 153 36 C130 39 112 34 99 21 C96 16 91 11 86 8 Z"/>
      <circle cx="78" cy="105" r="20" fill="${WHITE}"/>
      <circle cx="81" cy="105" r="10" fill="${GARENA}"/>
    </g>`;

  const kpiCard = (x, y, width, height, content) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="18" fill="${BLUE}"/>
      ${content}
    </g>`;

  const callout = (L) => `
    <g>
      <path d="M2012 278 H2289 Q2310 278 2310 300 V511 Q2310 534 2288 534 H2021 Q2007 534 2007 520 V506 L1970 478 L2007 450 V302 Q2007 278 2012 278 Z" fill="${BG}" stroke="${BLUE}" stroke-width="3"/>
      ${shopeeBag(2026, 291, 0.47)}
      <text x="2068" y="323" font-size="31" font-weight="500" fill="${SHOPEE}">Shopee</text>
      <text x="2212" y="323" font-size="30" font-weight="400" fill="${GREEN_LABEL}">$0.1B</text>
      <text x="2028" y="385" font-family="Arial Rounded MT Bold,Arial,sans-serif" font-size="38" font-weight="900" fill="${MONEE}">monee</text>
      <path d="M2035 397 C2051 388 2066 388 2081 397" fill="none" stroke="${SHOPEE}" stroke-width="4" stroke-linecap="round"/>
      <path d="M2082 397 C2096 389 2112 389 2126 397" fill="none" stroke="${GARENA}" stroke-width="4" stroke-linecap="round"/>
      <text x="2212" y="385" font-size="30" font-weight="400" fill="${GREEN_LABEL}">$0.3B</text>
      ${garenaGlyph(2025, 412, 0.34)}
      <text x="2078" y="445" font-size="31" font-weight="500" fill="${GARENA}">Garena</text>
      <text x="2212" y="445" font-size="30" font-weight="400" fill="${GREEN_LABEL}">$0.4B</text>
      <text x="2070" y="505" font-size="30" font-weight="800" fill="${NOTE}">${L.other}</text>
      <text x="2212" y="505" font-size="30" font-weight="500" fill="${RED_LABEL}">($0.2B)</text>
    </g>`;

  const annotations = (L) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <path d="M1748 551 H1824" fill="none" stroke="${GREEN_LINK}" stroke-width="2.2" stroke-linecap="round"/>

      ${shopeeBag(122, 524, 1.0)}
      <text x="213" y="604" font-size="59" font-weight="400" fill="${SHOPEE}">Shopee</text>
      <text x="210" y="646" font-size="26" font-weight="400" fill="${NOTE}">${L.ecommerce}</text>

      <text x="101" y="894" font-family="Arial Rounded MT Bold,Arial,sans-serif" font-size="78" font-weight="900" fill="${MONEE}">monee</text>
      <path d="M106 915 C128 900 151 900 174 915" fill="none" stroke="${SHOPEE}" stroke-width="6" stroke-linecap="round"/>
      <path d="M178 915 C201 900 227 900 250 915" fill="none" stroke="${GARENA}" stroke-width="6" stroke-linecap="round"/>
      <rect x="384" y="850" width="13" height="13" transform="rotate(45 390.5 856.5)" fill="${SHOPEE}"/>
      <text x="102" y="932" font-size="27" font-weight="400" fill="${NOTE}">${L.digitalFinancialServices}</text>

      ${garenaGlyph(74, 979, 0.73)}
      <text x="206" y="1056" font-size="59" font-weight="400" fill="${GARENA}">Garena</text>
      <text x="158" y="1098" font-size="27" font-weight="400" fill="${NOTE}">${L.digitalEntertainment}</text>

      ${kpiCard(
        31,
        1258,
        430,
        98,
        `
          <text x="64" y="1305" font-size="26" font-weight="800" fill="${WHITE}">${L.shopeeMarketplace}</text>
          <text x="374" y="1305" font-size="26" font-weight="500" fill="${WHITE}">$3.6B</text>
          <text x="217" y="1336" text-anchor="middle" font-size="25" font-weight="400" fill="${WHITE}">${L.shopeeMarketplaceYoy}</text>
        `
      )}
      ${kpiCard(
        472,
        1258,
        379,
        99,
        `
          <text x="506" y="1305" font-size="26" font-weight="800" fill="${WHITE}">${L.garenaBookings}</text>
          <text x="764" y="1305" font-size="26" font-weight="500" fill="${WHITE}">$0.7B</text>
          <text x="662" y="1336" text-anchor="middle" font-size="25" font-weight="400" fill="${WHITE}">${L.garenaBookingsYoy}</text>
        `
      )}
      ${callout(L)}
    </g>`;

  const annotationsEn = annotations({
    ecommerce: 'E-commerce',
    digitalFinancialServices: 'Digital Financial Services',
    digitalEntertainment: 'Digital Entertainment',
    shopeeMarketplace: 'Shopee Marketplace',
    shopeeMarketplaceYoy: '+50% Y/Y',
    garenaBookings: 'Garena Bookings',
    garenaBookingsYoy: '+24% Y/Y &amp; -20% Q/Q',
    other: 'Other',
  });

  const annotationsZh = annotations({
    ecommerce: '电商',
    digitalFinancialServices: '数字金融服务',
    digitalEntertainment: '数字娱乐',
    shopeeMarketplace: 'Shopee 市场',
    shopeeMarketplaceYoy: '同比 +50%',
    garenaBookings: 'Garena 预订额',
    garenaBookingsYoy: '同比 +24%，环比 -20%',
    other: '其他',
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'sea-q4-fy25',
    name: 'Sea · Q4 FY25',
    company: 'Sea',
    meta: {
      company: 'Sea',
      title: 'Sea Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/sea-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 1905,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoSvg: seaLogoSvg,
      logoViewBox: '0 0 540 190',
      logoWidth: 540,
      logoHeight: 190,
      logoY: 310,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: BLUE_LABEL },
        hub: { node: BLUE, label: BLUE_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: BLUE_LINK,
        hub: BLUE_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 37, value: 36, note: 27, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,

    layout: {
      nodes: {
        shopee: { x: 460, y: 490, width: 72, height: 244 },
        monee: { x: 460, y: 866, width: 72, height: 55 },
        garena: { x: 460, y: 1045, width: 72, height: 34 },
        other_services: { x: 460, y: 1212, width: 72, height: 4 },
        revenue: { x: 928, y: 698, width: 71, height: 337 },
        gross_profit: { x: 1394, y: 578, width: 73, height: 147 },
        cost_of_revenue: { x: 1394, y: 933, width: 73, height: 190 },
        other: { x: 1748, y: 550, width: 76, height: 2 },
        operating_profit: { x: 1862, y: 468, width: 71, height: 29 },
        operating_expenses: { x: 1861, y: 682, width: 73, height: 121 },
        sm: { x: 2328, y: 576, width: 73, height: 69 },
        ga: { x: 2329, y: 820, width: 72, height: 18 },
        rnd: { x: 2329, y: 1011, width: 72, height: 13 },
        credit_losses: { x: 2329, y: 1198, width: 72, height: 21 },
      },
      labels: {
        shopee: {
          blocks: [
            {
              x: 497, top: 398, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 36, weight: 400, color: SHOPEE },
                { text: '+36% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        monee: {
          blocks: [
            {
              x: 497, top: 775, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 36, weight: 400, color: MONEE },
                { text: '+54% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        garena: {
          blocks: [
            {
              x: 497, top: 955, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 36, weight: 400, color: SHOPEE },
                { text: '+35% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_services: {
          blocks: [
            {
              x: 497, top: 1154, anchor: 'middle', lineGap: 9,
              lines: [{ text: '$42M', size: 40, weight: 400, color: OTHER_GREY }],
            },
            {
              x: 260, top: 1185, anchor: 'middle',
              lines: [{ text: 'Other Services', size: 37, weight: 800, color: OTHER_GREY }],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 964, top: 556, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 37, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
                { text: '+38% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1430, top: 365, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Gross', size: 37, weight: 800 },
                { text: 'profit', size: 37, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
                { text: '44% margin', size: 27, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1430, top: 1135, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Cost of', size: 37, weight: 800 },
                { text: 'revenue', size: 37, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 1786, top: 568, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 32, weight: 800 },
                { text: '$27M', size: 31, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1897, top: 248, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 37, weight: 800 },
                { text: 'profit', size: 37, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
                { text: '8% margin', size: 27, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1897, top: 822, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 37, weight: 800 },
                { text: 'expenses', size: 37, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: 2505, top: 576, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'S&M', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '20% of revenue', size: 27, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2505, top: 788, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '6% of revenue', size: 27, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2505, top: 978, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '4% of revenue', size: 27, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        credit_losses: {
          blocks: [
            {
              x: 2520, top: 1164, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Provision for', size: 31, weight: 800 },
                { text: 'credit losses', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '6% of revenue', size: 27, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'shopee', col: 0, order: 0, type: 'source', label: 'Shopee', value: 5.0, valueText: '$5.0B', notes: ['+36% Y/Y', 'E-commerce'], color: BLUE, labelColor: SHOPEE, linkTint: BLUE_LINK },
      { id: 'monee', col: 0, order: 1, type: 'source', label: 'Monee', value: 1.1, notes: ['+54% Y/Y', 'Digital Financial Services'], color: BLUE, labelColor: MONEE, linkTint: BLUE_LINK },
      { id: 'garena', col: 0, order: 2, type: 'source', label: 'Garena', value: 0.7, notes: ['+35% Y/Y', 'Digital Entertainment'], color: BLUE, labelColor: GARENA, linkTint: BLUE_LINK },
      { id: 'other_services', col: 0, order: 3, type: 'source', label: 'Other Services', value: 0.042, valueText: '$42M', color: BLUE, labelColor: OTHER_GREY, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 6.9, notes: ['+38% Y/Y'], color: BLUE, labelColor: BLUE_LABEL },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 3.0, notes: ['44% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 3.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 3, order: 0, type: 'profit', label: 'Other', value: 0.027, valueText: '$27M', color: BG, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: ['Operating', 'profit'], value: 0.6, notes: ['8% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 0, type: 'cost', label: 'S&M', value: 1.4, notes: ['20% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 1, type: 'cost', label: 'G&A', value: 0.4, notes: ['6% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 0.3, notes: ['4% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'credit_losses', col: 5, order: 3, type: 'cost', label: ['Provision for', 'credit losses'], value: 0.4, notes: ['6% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'shopee', target: 'revenue', value: 5.0, width: 244, sourceOrder: 0, targetOrder: 0 },
      { source: 'monee', target: 'revenue', value: 1.1, width: 55, sourceOrder: 0, targetOrder: 1 },
      { source: 'garena', target: 'revenue', value: 0.7, width: 34, sourceOrder: 0, targetOrder: 2 },
      { source: 'other_services', target: 'revenue', value: 0.042, width: 4, sourceOrder: 0, targetOrder: 3 },

      { source: 'revenue', target: 'gross_profit', value: 3.0, width: 147, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 3.9, width: 190, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },

      { source: 'gross_profit', target: 'operating_profit', value: 0.6, width: 26, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.4, width: 121, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      {
        source: 'other', target: 'operating_profit', value: 0.027, width: 2,
        sourceOrder: 0, targetOrder: 1, linkTint: GREEN_LINK,
        y0: 551, y1: 496,
        curve: { x0: 1824, x1: 1862, c1x: 1840, c2x: 1848, c1y: 551, c2y: 496 },
      },

      { source: 'operating_expenses', target: 'sm', value: 1.4, width: 69, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.4, width: 18, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.3, width: 13, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'credit_losses', value: 0.4, width: 21, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      preservedAnnotationText: ['Shopee', 'monee', 'Garena'],
      zh: {
        name: 'Sea · 2025 财年第四季度',
        meta: {
          title: 'Sea 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月',
          titleSize: 112,
          titleTextLength: 1750,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          shopee: { label: 'Shopee 电商', notes: ['同比 +36%', '电商'] },
          monee: { label: 'Monee 金融服务', notes: ['同比 +54%', '数字金融服务'] },
          garena: { label: 'Garena 游戏娱乐', notes: ['同比 +35%', '数字娱乐'] },
          other_services: { label: '其他服务' },
          revenue: { label: '收入', notes: ['同比 +38%'] },
          gross_profit: { label: '毛利润', notes: ['毛利率 44%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          other: { label: '其他' },
          operating_profit: { label: ['营业', '利润'], notes: ['利润率 8%', '同比 +2 个百分点'] },
          operating_expenses: { label: ['营业', '费用'] },
          sm: { label: '销售与营销', notes: ['占收入 20%', '同比 (1 个百分点)'] },
          ga: { label: '一般及行政', notes: ['占收入 6%', '同比 (2 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 4%', '同比 (2 个百分点)'] },
          credit_losses: { label: ['信用', '损失拨备'], notes: ['占收入 6%', '同比 +1 个百分点'] },
        },
        layout: {
          labels: {
            shopee: {
              blocks: [
                {
                  x: 497, top: 398, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 36, weight: 400, color: SHOPEE },
                    { text: '同比 +36%', size: 27, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            monee: {
              blocks: [
                {
                  x: 497, top: 775, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 36, weight: 400, color: MONEE },
                    { text: '同比 +54%', size: 27, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            garena: {
              blocks: [
                {
                  x: 497, top: 955, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 36, weight: 400, color: SHOPEE },
                    { text: '同比 +35%', size: 27, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            other_services: {
              blocks: [
                {
                  x: 497, top: 1154, anchor: 'middle', lineGap: 9,
                  lines: [{ text: '$42M', size: 40, weight: 400, color: OTHER_GREY }],
                },
                {
                  x: 260, top: 1185, anchor: 'middle',
                  lines: [{ text: '其他服务', size: 37, weight: 800, color: OTHER_GREY }],
                },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 964, top: 556, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '收入', size: 37, weight: 800 },
                    { text: '$value', size: 36, weight: 400 },
                    { text: '同比 +38%', size: 27, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1430, top: 365, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '毛', size: 37, weight: 800 },
                    { text: '利润', size: 37, weight: 800 },
                    { text: '$value', size: 36, weight: 400 },
                    { text: '毛利率 44%', size: 27, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 27, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_revenue: {
              blocks: [
                {
                  x: 1430, top: 1135, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '收入', size: 37, weight: 800 },
                    { text: '成本', size: 37, weight: 800 },
                    { text: '$value', size: 36, weight: 400 },
                  ],
                },
              ],
            },
            other: {
              blocks: [
                {
                  x: 1786, top: 568, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '其他', size: 32, weight: 800 },
                    { text: '$27M', size: 31, weight: 400 },
                  ],
                },
              ],
            },
            operating_profit: {
              blocks: [
                {
                  x: 1897, top: 248, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '营业', size: 37, weight: 800 },
                    { text: '利润', size: 37, weight: 800 },
                    { text: '$value', size: 36, weight: 400 },
                    { text: '利润率 8%', size: 27, weight: 400, color: NOTE },
                    { text: '同比 +2 个百分点', size: 27, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1897, top: 822, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '营业', size: 37, weight: 800 },
                    { text: '费用', size: 37, weight: 800 },
                    { text: '$value', size: 36, weight: 400 },
                  ],
                },
              ],
            },
            sm: {
              blocks: [
                {
                  x: 2505, top: 576, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '销售与营销', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 20%', size: 27, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 27, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: 2505, top: 788, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '一般及行政', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 6%', size: 27, weight: 400, color: NOTE },
                    { text: '同比 (2 个百分点)', size: 27, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            rnd: {
              blocks: [
                {
                  x: 2505, top: 978, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '研发', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 4%', size: 27, weight: 400, color: NOTE },
                    { text: '同比 (2 个百分点)', size: 27, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            credit_losses: {
              blocks: [
                {
                  x: 2535, top: 1164, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '信用', size: 31, weight: 800 },
                    { text: '损失拨备', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 6%', size: 27, weight: 400, color: NOTE },
                    { text: '同比 +1 个百分点', size: 27, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
          },
        },
      },
    },
  });
})();
