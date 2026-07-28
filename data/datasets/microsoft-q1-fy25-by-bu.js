/* ====================================================================
 * Microsoft - Q1 FY25 income statement by business unit ($B)
 * Reconstructed from input/processed/microsoft-q1-fy25-by-bu.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const BLUE = '#01a6f0';
  const BLUE_LINK = '#85cff0';
  const GOLD = '#ffba01';
  const GOLD_LINK = '#f7d885';
  const GRAY_NODE = '#747474';
  const GRAY_LINK = '#b9b9b9';
  const HUB = '#666666';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9cca98';
  const RED = '#cc0000';
  const RED_LABEL = '#8b1000';
  const RED_LINK = '#e48682';
  const NOTE = '#626366';
  const TITLE = '#124f78';
  const RIGHT_LABEL_X = 2470;

  const microsoftPaneLogo = (x, y, size, gap = 7) => `
    <g transform="translate(${x} ${y})">
      <rect x="0" y="0" width="${size}" height="${size}" fill="#f25022"/>
      <rect x="${size + gap}" y="0" width="${size}" height="${size}" fill="#7fba00"/>
      <rect x="0" y="${size + gap}" width="${size}" height="${size}" fill="#00a4ef"/>
      <rect x="${size + gap}" y="${size + gap}" width="${size}" height="${size}" fill="#ffb900"/>
    </g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
      <defs>
        <linearGradient id="ms-bybu-azure-left" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#0b4f98"/>
          <stop offset="1" stop-color="#0875c9"/>
        </linearGradient>
        <linearGradient id="ms-bybu-azure-right" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#34c7f3"/>
          <stop offset="1" stop-color="#149fd7"/>
        </linearGradient>
        <linearGradient id="ms-bybu-azure-cross" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#0f8cdc"/>
          <stop offset="1" stop-color="#0761b5"/>
        </linearGradient>
      </defs>

      <g transform="translate(72 335)">
        ${microsoftPaneLogo(0, 0, 27, 4)}
        <text x="70" y="48" font-family="Arial,sans-serif" font-size="48" font-weight="700" fill="#77787a">Microsoft 365</text>
        <text x="148" y="93" font-family="Arial,sans-serif" font-size="47" font-weight="800" fill="#2f68b2">Linked</text>
        <rect x="290" y="55" width="50" height="45" rx="4" fill="#2f68b2"/>
        <text x="315" y="92" text-anchor="middle" font-family="Arial,sans-serif" font-size="44" font-weight="800" fill="#ffffff">in</text>
      </g>

      <g transform="translate(237 705)">
        <path d="M54 0L0 148H61L115 0Z" fill="url(#ms-bybu-azure-left)"/>
        <path d="M86 0H141L204 148H143Z" transform="scale(0.78)" fill="url(#ms-bybu-azure-right)"/>
        <path d="M67 86L145 111L171 148L95 121Z" transform="scale(0.78)" fill="url(#ms-bybu-azure-cross)"/>
        <path d="M81 62L44 148H91L121 93Z" transform="scale(0.78)" fill="#0b78c4" opacity="0.82"/>
      </g>

      <g transform="translate(178 1028)">
        <g transform="scale(0.68)" fill="#00a4ef">
          <path d="M0 14L83 2V56H0Z"/>
          <path d="M88 1L170 -10V56H88Z"/>
          <path d="M0 61H83V115L0 103Z"/>
          <path d="M88 61H170V127L88 116Z"/>
        </g>
        <g transform="translate(132 -4) scale(0.88)">
          <circle cx="53" cy="48" r="40" fill="#000000"/>
          <path d="M22 25C42 37 64 37 84 25C73 10 34 10 22 25Z" fill="#ffffff"/>
          <path d="M20 28C32 44 40 55 48 86C29 79 14 64 13 47C12 39 15 33 20 28Z" fill="#ffffff"/>
          <path d="M86 28C74 44 66 55 58 86C77 79 92 64 93 47C94 39 91 33 86 28Z" fill="#ffffff"/>
          <text x="53" y="134" text-anchor="middle" font-family="Arial,sans-serif" font-size="51" font-weight="500" fill="#000000">XBOX</text>
        </g>
      </g>
    </g>`;

  const companyLogo = `
    ${microsoftPaneLogo(0, 0, 86, 10)}
  `;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'microsoft-q1-fy25-by-bu',
    name: 'Microsoft · Q1 FY25 ByBU',
    company: 'Microsoft',
    meta: {
      company: 'Microsoft',
      title: 'Microsoft Q1 FY25 Income Statement',
      period: 'Q1 FY25',
      periodNote: 'Ending Sep. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/microsoft-q1-fy25-by-bu.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 122,
      titleWeight: 800,
      titleTextLength: 2315,
      periodX: 2528,
      periodY: 260,
      periodNoteY: 302,
      logoWidth: 196,
      logoHeight: 196,
      logoY: 260,
      logoViewBox: '0 0 182 182',
      logoSvg: companyLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: NOTE },
        hub: { node: HUB, label: NOTE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: BLUE_LINK,
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      interfaceAudit: { mode: 'error' },
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 5.76,
      nodes: {
        productivity_business_processes: { x: 483, y: 462, width: 71, height: 159 },
        intelligent_cloud: { x: 483, y: 824, width: 71, height: 134 },
        more_personal_computing: { x: 483, y: 1140, width: 71, height: 73 },
        revenue: { x: 950, y: 652, width: 70, height: 371 },
        gross_profit: { x: 1414, y: 560, width: 72, height: 256 },
        cost_of_revenue: { x: 1417, y: 1031, width: 71, height: 112 },
        operating_profit: { x: 1890, y: 466, width: 70, height: 171 },
        operating_expenses: { x: 1890, y: 861, width: 70, height: 83 },
        net_profit: { x: 2351, y: 381, width: 71, height: 138 },
        tax: { x: 2351, y: 672, width: 71, height: 30 },
        other_expense: { x: 2351, y: 812, width: 71, height: 3 },
        rnd: { x: 2351, y: 919, width: 71, height: 40 },
        sm: { x: 2351, y: 1085, width: 71, height: 31 },
        ga: { x: 2351, y: 1249, width: 71, height: 8 },
      },
      labels: {
        productivity_business_processes: {
          blocks: [
            {
              x: 485, top: 372, anchor: 'start', lineGap: 10,
              lines: [
                { text: '$value', size: 40, weight: 400, color: NOTE },
                { text: '+12% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 283, top: 485, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Productivity &', size: 40, weight: 800, color: NOTE },
                { text: 'Business Processes', size: 40, weight: 800, color: NOTE },
                { text: '58% operating margin', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        intelligent_cloud: {
          blocks: [
            {
              x: 507, top: 727, anchor: 'start', lineGap: 10,
              lines: [
                { text: '$value', size: 40, weight: 400, color: NOTE },
                { text: '+20% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 307, top: 871, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Intelligent Cloud', size: 40, weight: 800, color: NOTE },
                { text: '44% operating margin', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        more_personal_computing: {
          blocks: [
            {
              x: 506, top: 1047, anchor: 'start', lineGap: 10,
              lines: [
                { text: '$value', size: 40, weight: 400, color: NOTE },
                { text: '+17% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 307, top: 1160, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'More Personal', size: 40, weight: 800, color: NOTE },
                { text: 'Computing', size: 40, weight: 800, color: NOTE },
                { text: '27% operating margin', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 987, top: 500, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Revenue', size: 40, weight: 800, color: NOTE },
                { text: '$value', size: 40, weight: 400, color: NOTE },
                { text: '+16% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1440, top: 375, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '69% margin', size: 29, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1450, top: 1160, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Cost of', size: 40, weight: 800 },
                { text: 'revenue', size: 40, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1912, top: 280, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '47% margin', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1922, top: 960, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'expenses', size: 40, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        other_expense: {
          blocks: [
            {
              x: RIGHT_LABEL_X + 50, top: 776, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Other', size: 31, weight: 800 },
                { text: '$value', size: 27, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2444, top: 365, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '38% margin', size: 29, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: RIGHT_LABEL_X + 47, top: 645, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Tax', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X - 15, top: 907, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
                { text: '12% of revenue', size: 25, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 25, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X - 8, top: 1068, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'S&M', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
                { text: '9% of revenue', size: 25, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 25, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X - 8, top: 1214, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
                { text: '3% of revenue', size: 25, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 25, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'productivity_business_processes', col: 0, order: 0, type: 'source', label: ['Productivity &', 'Business Processes'], value: 28.3, notes: ['58% operating margin'], color: BLUE, linkTint: BLUE_LINK },
      { id: 'intelligent_cloud', col: 0, order: 1, type: 'source', label: 'Intelligent Cloud', value: 24.1, notes: ['44% operating margin'], color: GOLD, linkTint: GOLD_LINK },
      { id: 'more_personal_computing', col: 0, order: 2, type: 'source', label: ['More Personal', 'Computing'], value: 13.2, notes: ['27% operating margin'], color: GRAY_NODE, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 65.6, notes: ['+16% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 45.5, notes: ['69% margin', '(2pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 20.1 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 30.6, notes: ['47% margin', '(1pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 14.9 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 24.7, notes: ['38% margin', '(2pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 5.6 },
      { id: 'other_expense', col: 5, order: 2, type: 'cost', label: 'Other', value: 0.3 },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 7.5, notes: ['12% of revenue', '(0pp) Y/Y'] },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: 'S&M', value: 5.7, notes: ['9% of revenue', '(0pp) Y/Y'] },
      { id: 'ga', col: 5, order: 5, type: 'cost', label: 'G&A', value: 1.7, notes: ['3% of revenue', '(0pp) Y/Y'] },
    ],

    links: [
      { source: 'productivity_business_processes', target: 'revenue', value: 28.3, sourceWidth: 159, targetWidth: 160, targetOrder: 0 },
      { source: 'intelligent_cloud', target: 'revenue', value: 24.1, sourceWidth: 134, targetWidth: 136, targetOrder: 1 },
      { source: 'more_personal_computing', target: 'revenue', value: 13.2, sourceWidth: 73, targetWidth: 75, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 45.5, sourceWidth: 259, targetWidth: 256, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 20.1, sourceWidth: 112, targetWidth: 112, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 30.6, sourceWidth: 174, targetWidth: 171, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 14.9, sourceWidth: 82, targetWidth: 83, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 24.7, sourceWidth: 138, targetWidth: 138, sourceOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 5.6, sourceWidth: 30, targetWidth: 30, sourceOrder: 1 },
      { source: 'operating_profit', target: 'other_expense', value: 0.3, width: 3, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'rnd', value: 7.5, sourceWidth: 42, targetWidth: 40, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 5.7, sourceWidth: 32, targetWidth: 31, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 1.7, sourceWidth: 9, targetWidth: 8, sourceOrder: 2 },
    ],

    i18n: {
      preservedAnnotationText: ['Linked', 'in'],
      zh: {
        name: 'Microsoft · 2025 财年第一季度（按业务部门）',
        meta: {
          title: 'Microsoft 2025 财年第一季度利润表',
          period: '2025 财年第一季度',
          periodNote: '截至 2024 年 9 月',
          periodX: 2504,
        },
        nodes: {
          productivity_business_processes: { label: '生产力与业务流程', notes: ['营业利润率 58%'] },
          intelligent_cloud: { label: '智能云', notes: ['营业利润率 44%'] },
          more_personal_computing: { label: '更多个人计算', notes: ['营业利润率 27%'] },
          revenue: { label: '收入', notes: ['同比 +16%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 69%', '同比 (2 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 47%', '同比 (1 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other_expense: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 38%', '同比 (2 个百分点)'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 12%', '同比 (0 个百分点)'] },
          sm: { label: '销售与市场', notes: ['占收入 9%', '同比 (0 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 3%', '同比 (0 个百分点)'] },
        },
      },
    },
  });
})();
