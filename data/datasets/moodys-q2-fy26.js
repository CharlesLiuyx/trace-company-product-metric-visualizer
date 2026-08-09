/* ====================================================================
 * Moody's - Q2 FY26 income statement ($M)
 * Reconstructed from input/processed/moodys-q2-fy26.png as a fixed
 * d3-sankey layout. Revenue splits by the two reporting segments and
 * then follows the source's profit / expense waterfall. The source has
 * no separate gross-profit / cost-of-revenue layer.
 * ==================================================================== */
(function () {
  const TITLE = '#155277';
  const NAVY = '#0b1260';
  const NAVY_LINK = '#8a8daf';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const RIGHT_X = 2488;

  const wordmark = (label) => `
    <g font-family="Montserrat,Arial,sans-serif" data-typography-role="brand">
      <text x="1367" y="384" text-anchor="middle" font-size="112" font-weight="800"
            letter-spacing="1" textLength="505" lengthAdjust="spacingAndGlyphs"
            fill="${NAVY}">${label}</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'moodys-q2-fy26',
    name: "Moody's · Q2 FY26",
    company: "Moody's",
    meta: {
      company: "Moody's",
      title: "Moody’s Q2 FY26 Income Statement",
      period: 'Q2 FY26',
      periodNote: 'Quarter ended Jun. 30, 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/moodys-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2225,
      hidePeriodStamp: true,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      interfaceAudit: { mode: 'error' },
      palette: {
        source: { node: NAVY, label: NAVY },
        hub: { node: NAVY, label: NAVY },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: NAVY_LINK,
        hub: NAVY_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 44, value: 44, note: 30, lineGap: 9 },
    },
    annotationsSvg: wordmark('MOODY’S'),

    layout: {
      scale: 1,
      nodes: {
        decision_solutions: { x: 397, y: 318, width: 73, height: 60 },
        research_insights: { x: 397, y: 481, width: 73, height: 35 },
        data_information: { x: 397, y: 616, width: 73, height: 34 },
        corporate_finance: { x: 397, y: 754, width: 73, height: 93 },
        structured_finance: { x: 397, y: 948, width: 73, height: 20 },
        financial_institutions: { x: 397, y: 1079, width: 73, height: 30 },
        public_project: { x: 397, y: 1223, width: 73, height: 30 },
        other: { x: 397, y: 1354, width: 73, height: 1 },

        moodys_analytics: { x: 864, y: 473, width: 73, height: 132 },
        moodys_investors_service: { x: 864, y: 864, width: 73, height: 182 },
        revenue: { x: 1331, y: 623, width: 72, height: 315 },

        operating_profit: { x: 1798, y: 513, width: 73, height: 150 },
        operating_expenses: { x: 1798, y: 857, width: 73, height: 164 },

        other_income: { x: 2151, y: 523, width: 73, height: 16 },
        net_profit: { x: 2265, y: 351, width: 73, height: 125 },
        tax: { x: 2265, y: 699, width: 73, height: 40 },
        operating: { x: 2265, y: 855, width: 73, height: 74 },
        sga: { x: 2265, y: 1030, width: 73, height: 66 },
        da: { x: 2265, y: 1192, width: 73, height: 16 },
        restructuring: { x: 2265, y: 1301, width: 73, height: 2 },
      },
      labels: {
        decision_solutions: { blocks: [
          { x: 430, top: 214, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 44, textLength: 117 }, { text: '+2% Y/Y', size: 30, color: NOTE }] },
          { x: 343, top: 291, anchor: 'end', lineGap: 9, lines: [{ text: 'Decision', size: 44, weight: 700, textLength: 158 }, { text: 'Solutions', size: 44, weight: 700, textLength: 177 }] },
        ] },
        research_insights: { blocks: [
          { x: 430, top: 394, anchor: 'middle', lineGap: 0, lines: [{ text: '$value', size: 44, textLength: 117 }, { text: '+3% Y/Y', size: 30, color: NOTE }] },
          { x: 342, top: 444, anchor: 'end', lineGap: 9, lines: [{ text: 'Research', size: 44, weight: 700, textLength: 170 }, { text: '& Insights', size: 44, weight: 700, textLength: 188 }] },
        ] },
        data_information: { blocks: [
          { x: 430, top: 517, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 44, textLength: 117 }, { text: '+9% Y/Y', size: 30, color: NOTE }] },
          { x: 346, top: 579, anchor: 'end', lineGap: 9, lines: [{ text: 'Data &', size: 44, weight: 700, textLength: 128 }, { text: 'Information', size: 44, weight: 700, textLength: 231 }] },
        ] },
        corporate_finance: { blocks: [
          { x: 430, top: 658, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 44, textLength: 117 }, { text: '+27% Y/Y', size: 30, color: NOTE }] },
          { x: 348, top: 747, anchor: 'end', lineGap: 9, lines: [{ text: 'Corporate', size: 44, weight: 700, textLength: 192 }, { text: 'Finance', size: 44, weight: 700, textLength: 145 }] },
        ] },
        structured_finance: { blocks: [
          { x: 430, top: 862, anchor: 'middle', lineGap: 0, lines: [{ text: '$value', size: 44, textLength: 117 }, { text: '+12% Y/Y', size: 30, color: NOTE }] },
          { x: 341, top: 904, anchor: 'end', lineGap: 9, lines: [{ text: 'Structured', size: 44, weight: 700, textLength: 203 }, { text: 'Finance', size: 44, weight: 700, textLength: 144 }] },
        ] },
        financial_institutions: { blocks: [
          { x: 430, top: 983, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 44, textLength: 117 }, { text: '+16% Y/Y', size: 30, color: NOTE }] },
          { x: 346, top: 1043, anchor: 'end', lineGap: 9, lines: [{ text: 'Financial', size: 44, weight: 700, textLength: 168 }, { text: 'Institutions', size: 44, weight: 700, textLength: 221 }] },
        ] },
        public_project: { blocks: [
          { x: 430, top: 1127, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 44, textLength: 117 }, { text: '+38% Y/Y', size: 30, color: NOTE }] },
          { x: 347, top: 1213, anchor: 'end', lines: [{ text: 'Public, Project', size: 44, weight: 700, textLength: 273 }] },
        ] },
        other: { blocks: [
          { x: 430, top: 1254, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 44, textLength: 95 }, { text: '+20% Y/Y', size: 30, color: NOTE }] },
          { x: 340, top: 1327, anchor: 'end', lines: [{ text: 'Other', size: 44, weight: 700, textLength: 110 }] },
        ] },

        moodys_analytics: { blocks: [{ x: 900, top: 265, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Moody’s', size: 44, weight: 700, textLength: 154 }, { text: 'Analytics', size: 44, weight: 700, textLength: 176 },
          { text: '$value', size: 44, textLength: 117 }, { text: '+4% Y/Y', size: 30, color: NOTE },
        ] }] },
        moodys_investors_service: { blocks: [{ x: 900, top: 1054, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Moody’s', size: 44, weight: 700, textLength: 154 }, { text: 'Investors', size: 44, weight: 700, textLength: 176 },
          { text: 'Service', size: 44, weight: 700, textLength: 136 }, { text: '$value', size: 44, textLength: 148 },
          { text: '+25% Y/Y', size: 30, color: NOTE },
        ] }] },
        revenue: { blocks: [{ x: 1367, top: 470, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Revenue', size: 44, weight: 700, textLength: 162 }, { text: '$value', size: 44, textLength: 148 },
          { text: '+15% Y/Y', size: 30, color: NOTE },
        ] }] },
        operating_profit: { blocks: [{ x: 1834, top: 324, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Operating profit', size: 44, weight: 700, textLength: 312 }, { text: '$value', size: 44, textLength: 149 },
          { text: '48% margin', size: 30, color: NOTE }, { text: '+5pp Y/Y', size: 30, color: NOTE },
        ] }] },
        operating_expenses: { blocks: [{ x: 1834, top: 1028, anchor: 'middle', lineGap: 9, lines: [
          { text: 'Operating', size: 44, weight: 700, textLength: 165 }, { text: 'expenses', size: 44, weight: 700, textLength: 151 },
          { text: '$value', size: 44, textLength: 150 },
        ] }] },
        other_income: { blocks: [{ x: 2187, top: 559, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Other', size: 31, weight: 700 }, { text: '$value', size: 30 },
        ] }] },
        net_profit: { blocks: [{ x: 2393, top: 325, anchor: 'start', semanticRole: 'centered-side-label', lineGap: 9, lines: [
          { text: 'Net profit', size: 44, weight: 700, textLength: 186 }, { text: '$value', size: 44, textLength: 117 },
          { text: '40% margin', size: 30, color: NOTE }, { text: '+10pp Y/Y', size: 30, color: NOTE },
        ] }] },
        tax: { blocks: [{ x: RIGHT_X, top: 682, anchor: 'middle', semanticRole: 'centered-side-label', lineGap: 8, lines: [{ text: 'Tax', size: 31, weight: 700 }, { text: '$value', size: 30 }] }] },
        operating: { blocks: [{ x: RIGHT_X, top: 855, anchor: 'middle', semanticRole: 'centered-side-label', lineGap: 8, lines: [{ text: 'Operating', size: 31, weight: 700 }, { text: '$value', size: 30 }] }] },
        sga: { blocks: [{ x: RIGHT_X, top: 1027, anchor: 'middle', semanticRole: 'centered-side-label', lineGap: 8, lines: [{ text: 'SG&A', size: 31, weight: 700 }, { text: '$value', size: 30 }] }] },
        da: { blocks: [{ x: RIGHT_X, top: 1184, anchor: 'middle', semanticRole: 'centered-side-label', lines: [{ text: 'D&A ($126M)', size: 31, weight: 700 }] }] },
        restructuring: { blocks: [{ x: 2499, top: 1267, anchor: 'middle', semanticRole: 'centered-side-label', lineGap: 8, lines: [{ text: 'Restructuring', size: 31, weight: 700 }, { text: '$value', size: 30 }] }] },
      },
    },

    nodes: [
      { id: 'decision_solutions', col: 0, order: 0, type: 'source', label: 'Decision Solutions', value: 423, notes: ['+2% Y/Y'] },
      { id: 'research_insights', col: 0, order: 1, type: 'source', label: 'Research & Insights', value: 256, notes: ['+3% Y/Y'] },
      { id: 'data_information', col: 0, order: 2, type: 'source', label: 'Data & Information', value: 246, notes: ['+9% Y/Y'] },
      { id: 'corporate_finance', col: 0, order: 3, type: 'source', label: 'Corporate Finance', value: 651, notes: ['+27% Y/Y'] },
      { id: 'structured_finance', col: 0, order: 4, type: 'source', label: 'Structured Finance', value: 151, notes: ['+12% Y/Y'] },
      { id: 'financial_institutions', col: 0, order: 5, type: 'source', label: 'Financial Institutions', value: 222, notes: ['+16% Y/Y'] },
      { id: 'public_project', col: 0, order: 6, type: 'source', label: 'Public, Project', value: 224, notes: ['+38% Y/Y'] },
      { id: 'other', col: 0, order: 7, type: 'source', label: 'Other', value: 12, notes: ['+20% Y/Y'] },
      { id: 'moodys_analytics', col: 1, order: 0, type: 'hub', label: "Moody's Analytics", value: 925, notes: ['+4% Y/Y'] },
      { id: 'moodys_investors_service', col: 1, order: 1, type: 'hub', label: "Moody's Investors Service", value: 1260, valueText: '$1,260M', notes: ['+25% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 2185, valueText: '$2,185M', notes: ['+15% Y/Y'] },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1046, valueText: '$1,046M', notes: ['48% margin', '+5pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 1139, valueText: '($1,139M)' },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 125 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 879, notes: ['40% margin', '+10pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 292 },
      { id: 'operating', col: 5, order: 2, type: 'cost', label: 'Operating', value: 518 },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 463 },
      { id: 'da', col: 5, order: 4, type: 'cost', label: 'D&A', value: 126 },
      { id: 'restructuring', col: 5, order: 5, type: 'cost', label: 'Restructuring', value: 32 },
    ],

    nonNodeMetrics: [
      { id: 'cost_of_revenue', representation: 'data-only', value: 0 },
      { id: 'gross_profit', representation: 'data-only', value: 2185 },
    ],

    links: [
      { source: 'decision_solutions', target: 'moodys_analytics', value: 423, width: 61, sourceWidth: 60, targetWidth: 61, targetOrder: 0 },
      { source: 'research_insights', target: 'moodys_analytics', value: 256, width: 35, sourceWidth: 35, targetWidth: 35, targetOrder: 1 },
      { source: 'data_information', target: 'moodys_analytics', value: 246, width: 35, sourceWidth: 34, targetWidth: 36, targetOrder: 2 },
      { source: 'corporate_finance', target: 'moodys_investors_service', value: 651, width: 94, sourceWidth: 93, targetWidth: 94, targetOrder: 0 },
      { source: 'structured_finance', target: 'moodys_investors_service', value: 151, width: 22, sourceWidth: 20, targetWidth: 22, targetOrder: 1 },
      { source: 'financial_institutions', target: 'moodys_investors_service', value: 222, width: 32, sourceWidth: 30, targetWidth: 32, targetOrder: 2 },
      { source: 'public_project', target: 'moodys_investors_service', value: 224, width: 32, sourceWidth: 30, targetWidth: 32, targetOrder: 3 },
      { source: 'other', target: 'moodys_investors_service', value: 12, width: 2, sourceWidth: 1, targetWidth: 2, targetOrder: 4 },
      { source: 'moodys_analytics', target: 'revenue', value: 925, width: 133, sourceWidth: 132, targetWidth: 133, sourceOrder: 0, targetOrder: 0 },
      { source: 'moodys_investors_service', target: 'revenue', value: 1260, width: 182, sourceWidth: 182, targetWidth: 182, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'operating_profit', value: 1046, width: 151, sourceWidth: 151, targetWidth: 150, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 1139, width: 164, sourceWidth: 164, targetWidth: 164, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 754, width: 108, sourceWidth: 108, targetWidth: 109, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 292, width: 42, sourceWidth: 42, targetWidth: 40, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 125, width: 16, sourceWidth: 16, targetWidth: 16, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'operating', value: 518, width: 74, sourceWidth: 75, targetWidth: 74, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 463, width: 66, sourceWidth: 67, targetWidth: 66, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'da', value: 126, width: 16, sourceWidth: 18, targetWidth: 16, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'restructuring', value: 32, width: 2, sourceWidth: 4, targetWidth: 2, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      preservedAnnotationText: ['MOODY’S'],
      zh: {
        name: '穆迪 · 2026 财年第二季度',
        meta: {
          title: '穆迪 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月 30 日的季度',
          titleSize: 112,
          titleTextLength: 1720,
        },
        annotationsSvg: wordmark('MOODY’S'),
        nodes: {
          decision_solutions: { label: '决策解决方案', notes: ['同比 +2%'] },
          research_insights: { label: '研究与洞察', notes: ['同比 +3%'] },
          data_information: { label: '数据与信息', notes: ['同比 +9%'] },
          corporate_finance: { label: '企业融资', notes: ['同比 +27%'] },
          structured_finance: { label: '结构性融资', notes: ['同比 +12%'] },
          financial_institutions: { label: '金融机构', notes: ['同比 +16%'] },
          public_project: { label: '公共、项目', notes: ['同比 +38%'] },
          other: { label: '其他', notes: ['同比 +20%'] },
          moodys_analytics: { label: '穆迪分析', notes: ['同比 +4%'] },
          moodys_investors_service: { label: '穆迪投资者服务', notes: ['同比 +25%'] },
          revenue: { label: '收入', notes: ['同比 +15%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 48%', '同比 +5 个百分点'] },
          operating_expenses: { label: '营业费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 40%', '同比 +10 个百分点'] },
          tax: { label: '税费' },
          operating: { label: '运营' },
          sga: { label: '销售及管理费用' },
          da: { label: '折旧摊销' },
          restructuring: { label: '重组' },
        },
        nonNodeMetrics: {
          cost_of_revenue: { label: '收入成本' },
          gross_profit: { label: '毛利润' },
        },
        layout: {
          labels: {
            decision_solutions: { blocks: [
              { x: 430, top: 223, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 44 }, { text: '同比 +2%', size: 30, color: NOTE }] },
              { x: 349, top: 324, anchor: 'end', lines: [{ text: '决策解决方案', size: 44, weight: 700 }] },
            ] },
            research_insights: { blocks: [
              { x: 430, top: 386, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 44 }, { text: '同比 +3%', size: 30, color: NOTE }] },
              { x: 349, top: 471, anchor: 'end', lines: [{ text: '研究与洞察', size: 44, weight: 700 }] },
            ] },
            data_information: { blocks: [
              { x: 430, top: 511, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 44 }, { text: '同比 +9%', size: 30, color: NOTE }] },
              { x: 349, top: 605, anchor: 'end', lines: [{ text: '数据与信息', size: 44, weight: 700 }] },
            ] },
            corporate_finance: { blocks: [
              { x: 430, top: 658, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 44 }, { text: '同比 +27%', size: 30, color: NOTE }] },
              { x: 349, top: 773, anchor: 'end', lines: [{ text: '企业融资', size: 44, weight: 700 }] },
            ] },
            structured_finance: { blocks: [
              { x: 430, top: 854, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 44 }, { text: '同比 +12%', size: 30, color: NOTE }] },
              { x: 349, top: 935, anchor: 'end', lines: [{ text: '结构性融资', size: 44, weight: 700 }] },
            ] },
            financial_institutions: { blocks: [
              { x: 430, top: 983, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 44 }, { text: '同比 +16%', size: 30, color: NOTE }] },
              { x: 349, top: 1066, anchor: 'end', lines: [{ text: '金融机构', size: 44, weight: 700 }] },
            ] },
            public_project: { blocks: [
              { x: 430, top: 1127, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 44 }, { text: '同比 +38%', size: 30, color: NOTE }] },
              { x: 349, top: 1210, anchor: 'end', lines: [{ text: '公共、项目', size: 44, weight: 700 }] },
            ] },
            other: { blocks: [
              { x: 430, top: 1260, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 44 }, { text: '同比 +20%', size: 30, color: NOTE }] },
              { x: 349, top: 1329, anchor: 'end', lines: [{ text: '其他', size: 44, weight: 700 }] },
            ] },
            moodys_analytics: { blocks: [{ x: 900, top: 293, anchor: 'middle', lineGap: 9, lines: [{ text: '穆迪分析', size: 44, weight: 700 }, { text: '$value', size: 44 }, { text: '同比 +4%', size: 30, color: NOTE }] }] },
            moodys_investors_service: { blocks: [{ x: 900, top: 1086, anchor: 'middle', lineGap: 9, lines: [{ text: '穆迪投资者服务', size: 44, weight: 700 }, { text: '$value', size: 44 }, { text: '同比 +25%', size: 30, color: NOTE }] }] },
            revenue: { blocks: [{ x: 1367, top: 475, anchor: 'middle', lineGap: 9, lines: [{ text: '收入', size: 44, weight: 700 }, { text: '$value', size: 44 }, { text: '同比 +15%', size: 30, color: NOTE }] }] },
            operating_profit: { blocks: [{ x: 1834, top: 327, anchor: 'middle', lineGap: 9, lines: [{ text: '营业利润', size: 44, weight: 700 }, { text: '$value', size: 44 }, { text: '利润率 48%', size: 30, color: NOTE }, { text: '同比 +5 个百分点', size: 30, color: NOTE }] }] },
            operating_expenses: { blocks: [{ x: 1834, top: 1064, anchor: 'middle', lineGap: 9, lines: [{ text: '营业费用', size: 44, weight: 700 }, { text: '$value', size: 44 }] }] },
            other_income: { blocks: [{ x: 2187, top: 559, anchor: 'middle', lineGap: 8, lines: [{ text: '其他', size: 31, weight: 700 }, { text: '$value', size: 30 }] }] },
            net_profit: { blocks: [{ x: 2393, top: 324, anchor: 'start', semanticRole: 'centered-side-label', lineGap: 9, lines: [{ text: '净利润', size: 44, weight: 700 }, { text: '$value', size: 44 }, { text: '利润率 40%', size: 30, color: NOTE }, { text: '同比 +10 个百分点', size: 30, color: NOTE }] }] },
            tax: { blocks: [{ x: RIGHT_X, top: 682, anchor: 'middle', semanticRole: 'centered-side-label', lineGap: 8, lines: [{ text: '税费', size: 31, weight: 700 }, { text: '$value', size: 30 }] }] },
            operating: { blocks: [{ x: RIGHT_X, top: 855, anchor: 'middle', semanticRole: 'centered-side-label', lineGap: 8, lines: [{ text: '运营', size: 31, weight: 700 }, { text: '$value', size: 30 }] }] },
            sga: { blocks: [{ x: RIGHT_X, top: 1027, anchor: 'middle', semanticRole: 'centered-side-label', lineGap: 8, lines: [{ text: '销售及管理费用', size: 31, weight: 700 }, { text: '$value', size: 30 }] }] },
            da: { blocks: [{ x: RIGHT_X, top: 1184, anchor: 'middle', semanticRole: 'centered-side-label', lines: [{ text: '折旧摊销 ($126M)', size: 31, weight: 700 }] }] },
            restructuring: { blocks: [{ x: RIGHT_X, top: 1267, anchor: 'middle', semanticRole: 'centered-side-label', lineGap: 8, lines: [{ text: '重组', size: 31, weight: 700 }, { text: '$value', size: 30 }] }] },
          },
        },
      },
    },
  });
})();
