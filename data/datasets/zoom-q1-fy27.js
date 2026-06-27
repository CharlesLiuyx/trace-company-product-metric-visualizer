/* ====================================================================
 * Zoom - Q1 FY27 income statement ($M)
 * Reconstructed from input/processed/zoom-q1-fy27.png as a fixed d3-sankey
 * layout with pure SVG annotations.
 * ==================================================================== */
(function () {
  const BLUE = '#2f8df2';
  const BLUE_LABEL = '#1768dc';
  const BLUE_LINK = '#94c1ed';
  const GREEN = '#24a226';
  const GREEN_LABEL = '#00964d';
  const GREEN_LINK = '#9bcd9b';
  const RED = '#d60000';
  const RED_LABEL = '#991100';
  const RED_LINK = '#df8182';
  const NOTE = '#6b6b6b';
  const TITLE = '#15527a';
  const RIGHT_LABEL_X = 2375;

  const kpiCard = (x, y, width, height, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="36" fill="${BLUE}"/>
      ${lines.map((line, index) => `
        <text x="${x + width / 2}" y="${y + 48 + index * 40}" text-anchor="middle"
          font-size="${index === 0 ? 30 : 30}" font-weight="${index === 0 ? 800 : 500}" fill="#ffffff">${line}</text>
      `).join('')}
    </g>`;

  const annotationsEn = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${kpiCard(18, 1116, 145, 168, ['RPO', '$4.3B', '+11% Y/Y'])}
      ${kpiCard(169, 1118, 141, 164, ['DBNE', '99%', 'TTM'])}
      ${kpiCard(317, 1119, 332, 164, ['Customers &gt; $100K', '+8% Y/Y to 4,534'])}
      ${kpiCard(656, 1119, 332, 164, ['Monthly Churn', '3.0%', '+0.2pp Y/Y'])}
      <text x="76" y="1314" font-size="27" font-weight="500" fill="${NOTE}">RPO = Remaining Performance Obligation</text>
      <text x="126" y="1356" font-size="27" font-weight="500" fill="${NOTE}">DBNE = Dollar Based Net Expansion</text>
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${kpiCard(18, 1116, 145, 168, ['RPO', '$4.3B', '同比 +11%'])}
      ${kpiCard(169, 1118, 141, 164, ['DBNE', '99%', '过去 12 个月'])}
      ${kpiCard(317, 1119, 332, 164, ['&gt;$100K 客户', '同比 +8% 至 4,534'])}
      ${kpiCard(656, 1119, 332, 164, ['月流失率', '3.0%', '同比 +0.2 个百分点'])}
      <text x="76" y="1314" font-size="27" font-weight="500" fill="${NOTE}">RPO = 剩余履约义务</text>
      <text x="126" y="1356" font-size="27" font-weight="500" fill="${NOTE}">DBNE = 美元口径净扩张率</text>
    </g>`;

  const zhLayoutLabels = {
    enterprise: {
      blocks: [
        {
          x: 380, top: 450, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 +7%', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 210, top: 638, anchor: 'middle',
          lines: [{ text: '企业', size: 41, weight: 800 }],
        },
      ],
    },
    online: {
      blocks: [
        {
          x: 380, top: 858, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 +3%', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 212, top: 1012, anchor: 'middle',
          lines: [{ text: '线上', size: 41, weight: 800 }],
        },
      ],
    },
    revenue: {
      blocks: [
        {
          x: 848, top: 528, anchor: 'middle', lineGap: 11,
          lines: [
            { text: '收入', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 +5%', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    gross_profit: {
      blocks: [
        {
          x: 1315, top: 376, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '毛利润', size: 39, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '利润率 78%', size: 29, weight: 400, color: NOTE },
            { text: '同比 +2 个百分点', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    operating_profit: {
      blocks: [
        {
          x: 1782, top: 280, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '营业利润', size: 39, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '利润率 25%', size: 29, weight: 400, color: NOTE },
            { text: '同比 +4 个百分点', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    investments: {
      blocks: [
        {
          x: 2105, top: 212, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '投资', size: 33, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
          ],
        },
      ],
    },
    other: {
      blocks: [
        {
          x: 2105, top: 550, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '其他', size: 33, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
          ],
        },
      ],
    },
    net_profit: {
      blocks: [
        {
          x: 2315, top: 322, anchor: 'start', lineGap: 10,
          lines: [
            { text: '净利润', size: 39, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '利润率 34%', size: 29, weight: 400, color: NOTE },
            { text: '同比 +13 个百分点', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    cost_of_revenue: {
      blocks: [
        {
          x: 1315, top: 1105, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '收入', size: 34, weight: 800 },
            { text: '成本', size: 34, weight: 800 },
            { text: '$value', size: 33, weight: 400 },
          ],
        },
      ],
    },
    operating_expenses: {
      blocks: [
        {
          x: 1782, top: 957, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '运营', size: 34, weight: 800 },
            { text: '费用', size: 34, weight: 800 },
            { text: '$value', size: 33, weight: 400 },
          ],
        },
      ],
    },
    tax: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 648, anchor: 'start', lineGap: 8,
          lines: [
            { text: '税费', size: 32, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
          ],
        },
      ],
    },
    sm: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 832, anchor: 'start', lineGap: 8,
          lines: [
            { text: '销售与市场', size: 32, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '占收入 27%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    rnd: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 1030, anchor: 'start', lineGap: 8,
          lines: [
            { text: '研发', size: 32, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '占收入 18%', size: 29, weight: 400, color: NOTE },
            { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    ga: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 1210, anchor: 'start', lineGap: 8,
          lines: [
            { text: '管理费用', size: 32, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '占收入 8%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'zoom-q1-fy27',
    name: 'Zoom · Q1 FY27',
    company: 'Zoom',
    meta: {
      company: 'Zoom',
      title: 'Zoom Q1 FY27 Income Statement',
      period: 'Q1 FY27',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/zoom-q1-fy27.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2245,
      periodX: 190,
      periodY: 310,
      periodNoteY: 352,
      logoWidth: 460,
      logoHeight: 150,
      logoY: 282,
      logoViewBox: '0 0 460 150',
      logoSvg: `
        <text x="230" y="100" text-anchor="middle" font-family="Montserrat,Arial,sans-serif"
          font-size="124" font-weight="800" letter-spacing="-7" fill="#2d8cff">zoom</text>
      `,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
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
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,

    layout: {
      scale: 0.266,
      nodes: {
        enterprise: { x: 344, y: 553, width: 72, height: 202 },
        online: { x: 344, y: 960, width: 72, height: 129 },
        revenue: { x: 812, y: 673, width: 71, height: 333 },
        gross_profit: { x: 1278, y: 557, width: 73, height: 259 },
        cost_of_revenue: { x: 1278, y: 1011, width: 73, height: 73 },
        operating_profit: { x: 1746, y: 463, width: 72, height: 82 },
        operating_expenses: { x: 1745, y: 758, width: 73, height: 176 },
        investments: { x: 2069, y: 299, width: 71, height: 40 },
        other: { x: 2071, y: 515, width: 72, height: 18 },
        net_profit: { x: 2213, y: 337, width: 72, height: 113 },
        tax: { x: 2212, y: 668, width: 73, height: 28 },
        sm: { x: 2212, y: 830, width: 73, height: 88 },
        rnd: { x: 2212, y: 1037, width: 73, height: 60 },
        ga: { x: 2212, y: 1235, width: 73, height: 26 },
      },
      labels: {
        enterprise: {
          blocks: [
            {
              x: 380, top: 458, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+7% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 212, top: 638, anchor: 'middle',
              lines: [{ text: 'Enterprise', size: 41, weight: 800 }],
            },
          ],
        },
        online: {
          blocks: [
            {
              x: 380, top: 866, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+3% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 211, top: 1012, anchor: 'middle',
              lines: [{ text: 'Online', size: 41, weight: 800 }],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 848, top: 528, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+5% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1315, top: 376, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '78% margin', size: 29, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1782, top: 280, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '25% margin', size: 29, weight: 400, color: NOTE },
                { text: '+4pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        investments: {
          blocks: [
            {
              x: 2105, top: 212, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Investments', size: 33, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 2105, top: 550, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Other', size: 33, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2315, top: 322, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '34% margin', size: 29, weight: 400, color: NOTE },
                { text: '+13pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1315, top: 1105, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Cost of', size: 34, weight: 800 },
                { text: 'revenue', size: 34, weight: 800 },
                { text: '$value', size: 33, weight: 400 },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1782, top: 957, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating', size: 34, weight: 800 },
                { text: 'expenses', size: 34, weight: 800 },
                { text: '$value', size: 33, weight: 400 },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
          x: RIGHT_LABEL_X, top: 648, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Tax', size: 32, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
          x: RIGHT_LABEL_X, top: 832, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'S&M', size: 32, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '27% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
          x: RIGHT_LABEL_X, top: 1030, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'R&D', size: 32, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '18% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
          x: RIGHT_LABEL_X, top: 1210, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'G&A', size: 32, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '8% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'enterprise', col: 0, order: 0, type: 'source', label: 'Enterprise', value: 756, color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'online', col: 0, order: 1, type: 'source', label: 'Online', value: 483, color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1239, valueText: '$1,239M', color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 965, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 274, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 310, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 654, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'investments', col: 4, order: 0, type: 'profit', label: 'Investments', value: 152, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other', col: 4, order: 1, type: 'profit', label: 'Other', value: 69, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 426, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 106, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 330, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 228, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 96, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'enterprise', target: 'revenue', value: 756, width: 202, sourceOrder: 0, targetOrder: 0 },
      { source: 'online', target: 'revenue', value: 483, width: 129, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 965, width: 259, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 274, width: 73, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 310, width: 82, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 654, width: 176, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 204, width: 55, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 106, width: 28, sourceOrder: 1, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 69, width: 18, sourceOrder: 0, targetOrder: 2 },
      { source: 'investments', target: 'net_profit', value: 152, width: 40, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 330, width: 88, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 228, width: 60, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 96, width: 26, sourceOrder: 2, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Zoom · 2027 财年第一季度',
        meta: {
          title: 'Zoom 2027 财年第一季度利润表',
          period: '2027 财年第一季度',
          periodNote: '截至 2026 年 4 月',
          titleTextLength: 1770,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          enterprise: { label: '企业', notes: ['同比 +7%'] },
          online: { label: '线上', notes: ['同比 +3%'] },
          revenue: { label: '收入', notes: ['同比 +5%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 78%', '同比 +2 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 25%', '同比 +4 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          investments: { label: '投资' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 34%', '同比 +13 个百分点'] },
          tax: { label: '税费' },
          sm: { label: '销售与市场', notes: ['占收入 27%', '同比 (3 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 18%', '同比 +1 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 8%', '同比 (1 个百分点)'] },
        },
        layout: { labels: zhLayoutLabels },
      },
    },
  });
})();
