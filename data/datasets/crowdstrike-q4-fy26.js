/* ====================================================================
 * CrowdStrike - Q4 FY26 income statement ($M)
 * Reconstructed from input/processed/crowdstrike-q4-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155278';
  const BLACK = '#000000';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#676767';
  const BRAND_RED = '#fb0000';
  const RIGHT_LABEL_X = 2450;

  const crowdstrikeLogo = `
    <g fill="${BRAND_RED}">
      <path d="M5,3 C28,6 57,26 84,52 C57,34 29,17 5,3 Z"/>
      <path d="M10,44 C37,52 68,80 95,114 C70,88 38,60 10,44 Z"/>
    </g>
    <text x="106" y="84" font-family="Montserrat,Arial,sans-serif"
      font-size="100" font-weight="800" fill="${BRAND_RED}"
      textLength="728" lengthAdjust="spacingAndGlyphs">CROWDSTRIKE</text>
  `;

  const card = (x, y, w, h, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="32" fill="${BLACK}"/>
      ${lines.map((line, i) => `
        <text x="${x + w / 2}" y="${y + 52 + i * 45}" text-anchor="middle"
          font-size="${i === 0 ? 30 : 29}" font-weight="${i === 0 ? 800 : 500}" fill="#ffffff">${line}</text>
      `).join('')}
    </g>`;

  const annotationsEn = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${card(30, 1143, 146, 162, ['ARR', '$5.25B', '+24% Y/Y'])}
      ${card(191, 1144, 517, 161, ['Customers with', '6+ modules 50% +2pp Y/Y', '7+ modules 34% +2pp Y/Y'])}
      <text x="123" y="1358" font-size="30" font-weight="500" fill="${NOTE}">ARR = Annual Recurring Revenue</text>
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${card(30, 1143, 146, 162, ['ARR', '$5.25B', '同比 +24%'])}
      ${card(191, 1144, 517, 161, ['客户中', '6+ 模块 50% 同比 +2 个百分点', '7+ 模块 34% 同比 +2 个百分点'])}
      <text x="123" y="1358" font-size="30" font-weight="500" fill="${NOTE}">ARR = 年度经常性收入</text>
    </g>`;

  const zhLayoutLabels = {
    subscription: {
      blocks: [
        {
          x: 427, top: 397, anchor: 'middle', lineGap: 13,
          lines: [
            { text: '$value', size: 40, weight: 400, color: BLACK },
            { text: '同比 +23%', size: 29, weight: 400, color: NOTE },
          ],
        },
        { x: 219, top: 675, anchor: 'middle', lines: [{ text: '订阅', size: 40, weight: 800, color: BLACK }] },
      ],
    },
    professional_services: {
      blocks: [
        {
          x: 429, top: 953, anchor: 'middle', lineGap: 13,
          lines: [
            { text: '$value', size: 40, weight: 400, color: BLACK },
            { text: '同比 +26%', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 223, top: 1000, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '专业', size: 40, weight: 800, color: BLACK },
            { text: '服务', size: 40, weight: 800, color: BLACK },
          ],
        },
      ],
    },
    revenue: {
      blocks: [
        {
          x: 894, top: 468, anchor: 'middle', lineGap: 13,
          lines: [
            { text: '收入', size: 40, weight: 800, color: BLACK },
            { text: '$value', size: 40, weight: 400, color: BLACK },
            { text: '同比 +23%', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    gross_profit: {
      blocks: [
        {
          x: 1361, top: 305, anchor: 'middle', lineGap: 13,
          lines: [
            { text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
            { text: '利润率 76%', size: 29, weight: 400, color: NOTE },
            { text: '同比 +2 个百分点', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    cost_of_revenue: {
      blocks: [
        {
          x: 1358, top: 1094, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '收入', size: 34, weight: 800, color: RED_LABEL },
            { text: '成本', size: 34, weight: 800, color: RED_LABEL },
            { text: '$value', size: 34, weight: 400, color: RED_LABEL },
          ],
        },
      ],
    },
    operating_expenses: {
      blocks: [
        {
          x: 1832, top: 455, anchor: 'middle', lineGap: 13,
          lines: [
            { text: '营业', size: 40, weight: 800, color: RED_LABEL },
            { text: '费用', size: 40, weight: 800, color: RED_LABEL },
            { text: '$value', size: 40, weight: 400, color: RED_LABEL },
          ],
        },
      ],
    },
    operating_loss: {
      blocks: [
        {
          x: 1627, top: 1010, anchor: 'middle', lineGap: 13,
          lines: [
            { text: '营业', size: 40, weight: 800, color: RED_LABEL },
            { text: '亏损', size: 40, weight: 800, color: RED_LABEL },
            { text: '$value', size: 40, weight: 400, color: RED_LABEL },
            { text: '利润率 (1%)', size: 29, weight: 400, color: NOTE },
            { text: '同比 +8 个百分点', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    sm: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 458, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '销售与市场', size: 32, weight: 800, color: RED_LABEL },
            { text: '$value', size: 33, weight: 400, color: RED_LABEL },
            { text: '占收入 36%', size: 28, weight: 400, color: NOTE },
            { text: '同比 (3 个百分点)', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    rnd: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 758, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '研发', size: 32, weight: 800, color: RED_LABEL },
            { text: '$value', size: 33, weight: 400, color: RED_LABEL },
            { text: '占收入 28%', size: 28, weight: 400, color: NOTE },
            { text: '同比 (2 个百分点)', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    ga: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 1023, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '管理费用', size: 32, weight: 800, color: RED_LABEL },
            { text: '$value', size: 33, weight: 400, color: RED_LABEL },
            { text: '占收入 13%', size: 28, weight: 400, color: NOTE },
            { text: '同比 (1 个百分点)', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'crowdstrike-q4-fy26',
    name: 'CrowdStrike · Q4 FY26',
    company: 'CrowdStrike',
    meta: {
      company: 'CrowdStrike',
      title: 'CrowdStrike Q4 FY26 Income Statement',
      period: 'Q4 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/crowdstrike-q4-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 205,
      titleSize: 118,
      titleWeight: 800,
      titleTextLength: 2460,
      periodX: 896,
      periodY: 1219,
      periodNoteY: 1265,
      logoWidth: 1479,
      logoHeight: 124,
      logoY: 270,
      logoViewBox: '0 0 1479 124',
      logoSvg: crowdstrikeLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: '#3a3a3a',
      noteColor: NOTE,
      palette: {
        source: { node: BLACK, label: BLACK },
        hub: { node: BLACK, label: BLACK },
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
      type: { name: 40, value: 40, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotationsEn,

    layout: {
      scale: 0.276,
      nodes: {
        subscription: { x: 392, y: 498, width: 71, height: 343 },
        professional_services: { x: 392, y: 1056, width: 71, height: 17 },
        revenue: { x: 859, y: 622, width: 71, height: 360 },
        gross_profit: { x: 1325, y: 496, width: 72, height: 273 },
        cost_of_revenue: { x: 1326, y: 987, width: 71, height: 87 },
        operating_expenses: { x: 1793, y: 621, width: 72, height: 275 },
        operating_loss: { x: 1591, y: 987, width: 72, height: 2 },
        sm: { x: 2260, y: 446, width: 72, height: 128 },
        rnd: { x: 2260, y: 751, width: 72, height: 102 },
        ga: { x: 2260, y: 1037, width: 72, height: 45 },
      },
      labels: {
        subscription: {
          blocks: [
            {
              x: 427, top: 397, anchor: 'middle', lineGap: 13,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+23% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 219, top: 675, anchor: 'middle', lines: [{ text: 'Subscription', size: 38, weight: 700 }] },
          ],
        },
        professional_services: {
          blocks: [
            {
              x: 429, top: 953, anchor: 'middle', lineGap: 13,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+26% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 223, top: 996, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'Professional', size: 38, weight: 700 },
                { text: 'services', size: 38, weight: 700 },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 894, top: 468, anchor: 'middle', lineGap: 13,
              lines: [
                { text: 'Revenue', size: 38, weight: 700 },
                { text: '$value', size: 40, weight: 400 },
                { text: '+23% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1361, top: 305, anchor: 'middle', lineGap: 13,
              lines: [
                { text: 'Gross profit', size: 38, weight: 700 },
                { text: '$value', size: 40, weight: 400 },
                { text: '76% margin', size: 29, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1358, top: 1094, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Cost of', size: 33, weight: 700 },
                { text: 'revenue', size: 33, weight: 700 },
                { text: '$value', size: 34, weight: 400 },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1832, top: 455, anchor: 'middle', lineGap: 13,
              lines: [
                { text: 'Operating', size: 38, weight: 700 },
                { text: 'expenses', size: 38, weight: 700 },
                { text: '$value', size: 40, weight: 400 },
              ],
            },
          ],
        },
        operating_loss: {
          blocks: [
            {
              x: 1627, top: 1010, anchor: 'middle', lineGap: 13,
              lines: [
                { text: 'Operating', size: 38, weight: 700 },
                { text: 'loss', size: 38, weight: 700 },
                { text: '$value', size: 40, weight: 400 },
                { text: '(1%) margin', size: 29, weight: 400, color: NOTE },
                { text: '+8pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 458, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'S&M', size: 30, weight: 700 },
                { text: '$value', size: 31, weight: 400 },
                { text: '36% of revenue', size: 27, weight: 400, color: NOTE },
                { text: '(3pp) Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 758, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'R&D', size: 30, weight: 700 },
                { text: '$value', size: 31, weight: 400 },
                { text: '28% of revenue', size: 27, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1023, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'G&A', size: 30, weight: 700 },
                { text: '$value', size: 31, weight: 400 },
                { text: '13% of revenue', size: 27, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'subscription', col: 0, order: 0, type: 'source', label: 'Subscription', value: 1242, valueText: '$1,242M', notes: ['+23% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'professional_services', col: 0, order: 1, type: 'source', label: ['Professional', 'services'], value: 63, notes: ['+26% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1305, valueText: '$1,305M', notes: ['+23% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 989, valueText: '$989M', notes: ['76% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 316, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 1, type: 'cost', label: ['Operating', 'loss'], value: -7, notes: ['(1%) margin', '+8pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 996, valueText: '($996M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 0, type: 'cost', label: 'S&M', value: 465, notes: ['36% of revenue', '(3pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 1, type: 'cost', label: 'R&D', value: 368, notes: ['28% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 164, notes: ['13% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'subscription', target: 'revenue', value: 1242, width: 343, sourceOrder: 0, targetOrder: 0 },
      { source: 'professional_services', target: 'revenue', value: 63, width: 17, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 989, width: 273, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 316, width: 87, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 989, width: 273, sourceOrder: 0, targetOrder: 0 },
      {
        source: 'operating_loss',
        target: 'operating_expenses',
        value: 7,
        width: 2,
        sourceOrder: 0,
        targetOrder: 1,
        curve: { c1x: 1680, c1y: 987, c2x: 1707, c2y: 896 },
      },
      { source: 'operating_expenses', target: 'sm', value: 465, width: 128, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 368, width: 102, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 164, width: 45, sourceOrder: 2, targetOrder: 0 },
    ],

    i18n: {
      preservedAnnotationText: ['ARR'],
      zh: {
        name: 'CrowdStrike · 2026 财年第四季度',
        meta: {
          title: 'CrowdStrike 2026 财年第四季度利润表',
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 1 月',
          titleTextLength: 1760,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          subscription: { label: '订阅', notes: ['同比 +23%'] },
          professional_services: { label: ['专业', '服务'], notes: ['同比 +26%'] },
          revenue: { label: '收入', notes: ['同比 +23%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 76%', '同比 +2 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_loss: { label: ['营业', '亏损'], notes: ['利润率 (1%)', '同比 +8 个百分点'] },
          operating_expenses: { label: ['营业', '费用'] },
          sm: { label: '销售与市场', notes: ['占收入 36%', '同比 (3 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 28%', '同比 (2 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 13%', '同比 (1 个百分点)'] },
        },
        layout: { labels: zhLayoutLabels },
      },
    },
  });
})();
