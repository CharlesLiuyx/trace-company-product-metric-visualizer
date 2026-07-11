/* ====================================================================
 * Moody's - Q4 FY25 income statement ($M)
 * Reconstructed from input/processed/moodys-q4-fy25.png as a fixed
 * d3-sankey layout. Revenue is split by Moody's Analytics and Moody's
 * Investors Service, then follows the source's operating-profit waterfall.
 * The source has no separate gross-profit / cost-of-revenue layer, so
 * SSOT-parity nodes for that layer are parked off-canvas.
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
    key: 'moodys-q4-fy25',
    name: "Moody's · Q4 FY25",
    company: "Moody's",
    meta: {
      company: "Moody's",
      title: 'Moody’s Q4 FY25 Income Statement',
      period: 'Q4 FY25',
      periodNote: 'Quarter ended Dec. 31, 2025',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/moodys-q4-fy25.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2225,
      periodX: -2000,
      periodY: -2000,
      periodNoteY: -1950,
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
        decision_solutions: { x: 397, y: 328, width: 73, height: 60 },
        research_insights: { x: 397, y: 489, width: 73, height: 34 },
        data_information: { x: 397, y: 627, width: 73, height: 31 },
        corporate_finance: { x: 397, y: 790, width: 73, height: 63 },
        structured_finance: { x: 397, y: 963, width: 73, height: 19 },
        financial_institutions: { x: 397, y: 1094, width: 73, height: 22 },
        public_project: { x: 397, y: 1227, width: 73, height: 20 },
        other: { x: 397, y: 1350, width: 73, height: 2 },

        moodys_analytics: { x: 864, y: 479, width: 73, height: 125 },
        moodys_investors_service: { x: 864, y: 870, width: 73, height: 122 },
        revenue: { x: 1331, y: 627, width: 72, height: 245 },

        operating_profit: { x: 1800, y: 475, width: 73, height: 100 },
        operating_expenses: { x: 1798, y: 846, width: 73, height: 146 },

        net_profit: { x: 2265, y: 394, width: 73, height: 79 },
        interest_other: { x: 2265, y: 642, width: 73, height: 11 },
        tax: { x: 2265, y: 754, width: 73, height: 11 },
        operating: { x: 2265, y: 871, width: 73, height: 66 },
        sga: { x: 2265, y: 1041, width: 73, height: 60 },
        da: { x: 2265, y: 1221, width: 73, height: 16 },
        other_expense: { x: 2265, y: 1369, width: 73, height: 3 },

        cost_of_revenue: { x: -2000, y: -2000, width: 1, height: 1 },
        gross_profit: { x: -2000, y: -2000, width: 1, height: 1 },
      },
      labels: {
        decision_solutions: {
          blocks: [
            { x: 430, top: 226, anchor: 'middle', lineGap: 9,
              lines: [{ text: '$value', size: 44 }, { text: '+12% Y/Y', size: 30, color: NOTE }] },
            { x: 349, top: 304, anchor: 'end', lineGap: 9,
              lines: [{ text: 'Decision', size: 44, weight: 700 }, { text: 'Solutions', size: 44, weight: 700 }] },
          ],
        },
        research_insights: {
          blocks: [
            { x: 430, top: 392, anchor: 'middle', lineGap: 9,
              lines: [{ text: '$value', size: 44 }, { text: '+6% Y/Y', size: 30, color: NOTE }] },
            { x: 349, top: 452, anchor: 'end', lineGap: 9,
              lines: [{ text: 'Research', size: 44, weight: 700 }, { text: '& Insights', size: 44, weight: 700 }] },
          ],
        },
        data_information: {
          blocks: [
            { x: 430, top: 524, anchor: 'middle', lineGap: 9,
              lines: [{ text: '$value', size: 44 }, { text: '+8% Y/Y', size: 30, color: NOTE }] },
            { x: 349, top: 589, anchor: 'end', lineGap: 9,
              lines: [{ text: 'Data &', size: 44, weight: 700 }, { text: 'Information', size: 44, weight: 700 }] },
          ],
        },
        corporate_finance: {
          blocks: [
            { x: 430, top: 687, anchor: 'middle', lineGap: 9,
              lines: [{ text: '$value', size: 44 }, { text: '+26% Y/Y', size: 30, color: NOTE }] },
            { x: 349, top: 766, anchor: 'end', lineGap: 9,
              lines: [{ text: 'Corporate', size: 44, weight: 700 }, { text: 'Finance', size: 44, weight: 700 }] },
          ],
        },
        structured_finance: {
          blocks: [
            { x: 430, top: 862, anchor: 'middle', lineGap: 9,
              lines: [{ text: '$value', size: 44 }, { text: '+1% Y/Y', size: 30, color: NOTE }] },
            { x: 349, top: 918, anchor: 'end', lineGap: 9,
              lines: [{ text: 'Structured', size: 44, weight: 700 }, { text: 'Finance', size: 44, weight: 700 }] },
          ],
        },
        financial_institutions: {
          blocks: [
            { x: 430, top: 992, anchor: 'middle', lineGap: 9,
              lines: [{ text: '$value', size: 44 }, { text: '+1% Y/Y', size: 30, color: NOTE }] },
            { x: 349, top: 1050, anchor: 'end', lineGap: 9,
              lines: [{ text: 'Financial', size: 44, weight: 700 }, { text: 'Institutions', size: 44, weight: 700 }] },
          ],
        },
        public_project: {
          blocks: [
            { x: 430, top: 1126, anchor: 'middle', lineGap: 9,
              lines: [{ text: '$value', size: 44 }, { text: '+30% Y/Y', size: 30, color: NOTE }] },
            { x: 349, top: 1206, anchor: 'end',
              lines: [{ text: 'Public, Project', size: 44, weight: 700 }] },
          ],
        },
        other: {
          blocks: [
            { x: 430, top: 1249, anchor: 'middle', lineGap: 9,
              lines: [{ text: '$value', size: 44 }, { text: '+13% Y/Y', size: 30, color: NOTE }] },
            { x: 349, top: 1324, anchor: 'end',
              lines: [{ text: 'Other', size: 44, weight: 700 }] },
          ],
        },

        moodys_analytics: {
          blocks: [
            { x: 900, top: 272, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Moody’s', size: 44, weight: 700 },
                { text: 'Analytics', size: 44, weight: 700 },
                { text: '$value', size: 44 },
                { text: '+9% Y/Y', size: 30, color: NOTE },
              ] },
          ],
        },
        moodys_investors_service: {
          blocks: [
            { x: 900, top: 1004, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Moody’s', size: 44, weight: 700 },
                { text: 'Investors', size: 44, weight: 700 },
                { text: 'Service', size: 44, weight: 700 },
                { text: '$value', size: 44 },
                { text: '+17% Y/Y', size: 30, color: NOTE },
              ] },
          ],
        },
        revenue: {
          blocks: [
            { x: 1367, top: 470, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 44, weight: 700 },
                { text: '$value', size: 44 },
                { text: '+13% Y/Y', size: 30, color: NOTE },
              ] },
          ],
        },
        operating_profit: {
          blocks: [
            { x: 1836, top: 282, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating profit', size: 44, weight: 700 },
                { text: '$value', size: 44 },
                { text: '41% margin', size: 30, color: NOTE },
                { text: '+7pp Y/Y', size: 30, color: NOTE },
              ] },
          ],
        },
        operating_expenses: {
          blocks: [
            { x: 1834, top: 999, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating', size: 44, weight: 700 },
                { text: 'expenses', size: 44, weight: 700 },
                { text: '$value', size: 44 },
              ] },
          ],
        },
        net_profit: {
          blocks: [
            { x: 2393, top: 364, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'Net profit', size: 44, weight: 700 },
                { text: '$value', size: 44 },
                { text: '32% margin', size: 30, color: NOTE },
                { text: '+9pp Y/Y', size: 30, color: NOTE },
              ] },
          ],
        },
        interest_other: {
          blocks: [
            { x: RIGHT_X, top: 606, anchor: 'middle', lineGap: 12,
              lines: [{ text: 'Interest & other', size: 31, weight: 700 }, { text: '$value', size: 30 }] },
          ],
        },
        tax: {
          blocks: [
            { x: RIGHT_X, top: 720, anchor: 'middle', lineGap: 11,
              lines: [{ text: 'Tax', size: 31, weight: 700 }, { text: '$value', size: 30 }] },
          ],
        },
        operating: {
          blocks: [
            { x: RIGHT_X, top: 861, anchor: 'middle', lineGap: 12,
              lines: [{ text: 'Operating', size: 31, weight: 700 }, { text: '$value', size: 30 }] },
          ],
        },
        sga: {
          blocks: [
            { x: RIGHT_X, top: 1028, anchor: 'middle', lineGap: 11,
              lines: [{ text: 'SG&A', size: 31, weight: 700 }, { text: '$value', size: 30 }] },
          ],
        },
        da: {
          blocks: [
            { x: RIGHT_X, top: 1168, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'Depreciation &', size: 31, weight: 700 },
                { text: 'Amortization', size: 31, weight: 700 },
                { text: '$value', size: 30 },
              ] },
          ],
        },
        other_expense: {
          blocks: [
            { x: RIGHT_X, top: 1312, anchor: 'middle', lineGap: 12,
              lines: [{ text: 'Other', size: 31, weight: 700 }, { text: '$value', size: 30 }] },
          ],
        },
      },
    },

    nodes: [
      { id: 'decision_solutions', col: 0, order: 0, type: 'source', label: 'Decision Solutions', value: 450, notes: ['+12% Y/Y'] },
      { id: 'research_insights', col: 0, order: 1, type: 'source', label: 'Research & Insights', value: 258, notes: ['+6% Y/Y'] },
      { id: 'data_information', col: 0, order: 2, type: 'source', label: 'Data & Information', value: 235, notes: ['+8% Y/Y'] },
      { id: 'corporate_finance', col: 0, order: 3, type: 'source', label: 'Corporate Finance', value: 480, notes: ['+26% Y/Y'] },
      { id: 'structured_finance', col: 0, order: 4, type: 'source', label: 'Structured Finance', value: 139, notes: ['+1% Y/Y'] },
      { id: 'financial_institutions', col: 0, order: 5, type: 'source', label: 'Financial Institutions', value: 169, notes: ['+1% Y/Y'] },
      { id: 'public_project', col: 0, order: 6, type: 'source', label: 'Public, Project', value: 149, notes: ['+30% Y/Y'] },
      { id: 'other', col: 0, order: 7, type: 'source', label: 'Other', value: 9, notes: ['+13% Y/Y'] },

      { id: 'moodys_analytics', col: 1, order: 0, type: 'hub', label: "Moody's Analytics", value: 943, notes: ['+9% Y/Y'] },
      { id: 'moodys_investors_service', col: 1, order: 1, type: 'hub', label: "Moody's Investors Service", value: 946, notes: ['+17% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 1889, valueText: '$1,889M', notes: ['+13% Y/Y'] },

      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 770, notes: ['41% margin', '+7pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 1119, valueText: '($1,119M)' },

      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 611, notes: ['32% margin', '+9pp Y/Y'] },
      { id: 'interest_other', col: 4, order: 1, type: 'cost', label: 'Interest & other', value: 83 },
      { id: 'tax', col: 4, order: 2, type: 'cost', label: 'Tax', value: 76 },
      { id: 'operating', col: 4, order: 3, type: 'cost', label: 'Operating', value: 502 },
      { id: 'sga', col: 4, order: 4, type: 'cost', label: 'SG&A', value: 467 },
      { id: 'da', col: 4, order: 5, type: 'cost', label: 'Depreciation & Amortization', value: 124 },
      { id: 'other_expense', col: 4, order: 6, type: 'cost', label: 'Other', value: 26 },

      { id: 'cost_of_revenue', col: 5, order: 98, type: 'cost', label: 'Cost of revenue', value: 0 },
      { id: 'gross_profit', col: 5, order: 99, type: 'profit', label: 'Gross profit', value: 1889, valueText: '$1,889M' },
    ],

    links: [
      { source: 'decision_solutions', target: 'moodys_analytics', value: 450, width: 60, targetOrder: 0 },
      { source: 'research_insights', target: 'moodys_analytics', value: 258, width: 34, targetOrder: 1 },
      { source: 'data_information', target: 'moodys_analytics', value: 235, width: 31, targetOrder: 2 },

      { source: 'corporate_finance', target: 'moodys_investors_service', value: 480, width: 62, targetOrder: 0 },
      { source: 'structured_finance', target: 'moodys_investors_service', value: 139, width: 18, targetOrder: 1 },
      { source: 'financial_institutions', target: 'moodys_investors_service', value: 169, width: 22, targetOrder: 2 },
      { source: 'public_project', target: 'moodys_investors_service', value: 149, width: 19, targetOrder: 3 },
      { source: 'other', target: 'moodys_investors_service', value: 9, width: 1, targetOrder: 4 },

      { source: 'moodys_analytics', target: 'revenue', value: 943, width: 123, sourceWidth: 125, targetWidth: 123, sourceOrder: 0, targetOrder: 0 },
      { source: 'moodys_investors_service', target: 'revenue', value: 946, width: 122, sourceOrder: 0, targetOrder: 1 },

      { source: 'revenue', target: 'operating_profit', value: 770, width: 100, sourceWidth: 100, targetWidth: 100, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 1119, width: 145, sourceWidth: 145, targetWidth: 146, sourceOrder: 1, targetOrder: 0 },

      { source: 'operating_profit', target: 'net_profit', value: 611, width: 79, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest_other', value: 83, width: 11, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 76, width: 10, sourceOrder: 2, targetOrder: 0 },

      { source: 'operating_expenses', target: 'operating', value: 502, width: 66, sourceWidth: 66, targetWidth: 66, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 467, width: 60, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'da', value: 124, width: 16, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_expense', value: 26, width: 3, sourceWidth: 4, targetWidth: 3, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      preservedAnnotationText: ['MOODY’S'],
      zh: {
        name: '穆迪 · 2025 财年第四季度',
        meta: {
          title: '穆迪 2025 财年第四季度利润表',
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月 31 日的季度',
          titleSize: 112,
          titleTextLength: 1720,
        },
        annotationsSvg: wordmark('MOODY’S'),
        nodes: {
          decision_solutions: { label: '决策解决方案', notes: ['同比 +12%'] },
          research_insights: { label: '研究与洞察', notes: ['同比 +6%'] },
          data_information: { label: '数据与信息', notes: ['同比 +8%'] },
          corporate_finance: { label: '企业融资', notes: ['同比 +26%'] },
          structured_finance: { label: '结构性融资', notes: ['同比 +1%'] },
          financial_institutions: { label: '金融机构', notes: ['同比 +1%'] },
          public_project: { label: '公共、项目', notes: ['同比 +30%'] },
          other: { label: '其他', notes: ['同比 +13%'] },
          moodys_analytics: { label: '穆迪分析', notes: ['同比 +9%'] },
          moodys_investors_service: { label: '穆迪投资者服务', notes: ['同比 +17%'] },
          revenue: { label: '收入', notes: ['同比 +13%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 41%', '同比 +7 个百分点'] },
          operating_expenses: { label: '营业费用' },
          net_profit: { label: '净利润', notes: ['利润率 32%', '同比 +9 个百分点'] },
          interest_other: { label: '利息及其他' },
          tax: { label: '税费' },
          operating: { label: '运营' },
          sga: { label: '销售及管理费用' },
          da: { label: '折旧及摊销' },
          other_expense: { label: '其他' },
          cost_of_revenue: { label: '收入成本' },
          gross_profit: { label: '毛利润' },
        },
        layout: {
          labels: {
            decision_solutions: { blocks: [
              { x: 430, top: 226, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 44 }, { text: '同比 +12%', size: 30, color: NOTE }] },
              { x: 349, top: 326, anchor: 'end', lines: [{ text: '决策解决方案', size: 44, weight: 700 }] },
            ] },
            research_insights: { blocks: [
              { x: 430, top: 386, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 44 }, { text: '同比 +6%', size: 30, color: NOTE }] },
              { x: 349, top: 480, anchor: 'end', lines: [{ text: '研究与洞察', size: 44, weight: 700 }] },
            ] },
            data_information: { blocks: [
              { x: 430, top: 529, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 44 }, { text: '同比 +8%', size: 30, color: NOTE }] },
              { x: 349, top: 612, anchor: 'end', lines: [{ text: '数据与信息', size: 44, weight: 700 }] },
            ] },
            corporate_finance: { blocks: [
              { x: 430, top: 687, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 44 }, { text: '同比 +26%', size: 30, color: NOTE }] },
              { x: 349, top: 795, anchor: 'end', lines: [{ text: '企业融资', size: 44, weight: 700 }] },
            ] },
            structured_finance: { blocks: [
              { x: 430, top: 862, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 44 }, { text: '同比 +1%', size: 30, color: NOTE }] },
              { x: 349, top: 949, anchor: 'end', lines: [{ text: '结构性融资', size: 44, weight: 700 }] },
            ] },
            financial_institutions: { blocks: [
              { x: 430, top: 995, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 44 }, { text: '同比 +1%', size: 30, color: NOTE }] },
              { x: 349, top: 1080, anchor: 'end', lines: [{ text: '金融机构', size: 44, weight: 700 }] },
            ] },
            public_project: { blocks: [
              { x: 430, top: 1128, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 44 }, { text: '同比 +30%', size: 30, color: NOTE }] },
              { x: 349, top: 1208, anchor: 'end', lines: [{ text: '公共、项目', size: 44, weight: 700 }] },
            ] },
            other: { blocks: [
              { x: 430, top: 1249, anchor: 'middle', lineGap: 9, lines: [{ text: '$value', size: 44 }, { text: '同比 +13%', size: 30, color: NOTE }] },
              { x: 349, top: 1325, anchor: 'end', lines: [{ text: '其他', size: 44, weight: 700 }] },
            ] },
            moodys_analytics: { blocks: [
              { x: 900, top: 294, anchor: 'middle', lineGap: 9, lines: [{ text: '穆迪分析', size: 44, weight: 700 }, { text: '$value', size: 44 }, { text: '同比 +9%', size: 30, color: NOTE }] },
            ] },
            moodys_investors_service: { blocks: [
              { x: 900, top: 1014, anchor: 'middle', lineGap: 9, lines: [{ text: '穆迪投资者服务', size: 44, weight: 700 }, { text: '$value', size: 44 }, { text: '同比 +17%', size: 30, color: NOTE }] },
            ] },
            revenue: { blocks: [
              { x: 1367, top: 470, anchor: 'middle', lineGap: 9, lines: [{ text: '收入', size: 44, weight: 700 }, { text: '$value', size: 44 }, { text: '同比 +13%', size: 30, color: NOTE }] },
            ] },
            operating_profit: { blocks: [
              { x: 1836, top: 282, anchor: 'middle', lineGap: 9, lines: [{ text: '营业利润', size: 44, weight: 700 }, { text: '$value', size: 44 }, { text: '利润率 41%', size: 30, color: NOTE }, { text: '同比 +7 个百分点', size: 30, color: NOTE }] },
            ] },
            operating_expenses: { blocks: [
              { x: 1834, top: 1009, anchor: 'middle', lineGap: 9, lines: [{ text: '营业费用', size: 44, weight: 700 }, { text: '$value', size: 44 }] },
            ] },
            net_profit: { blocks: [
              { x: 2393, top: 364, anchor: 'start', lineGap: 9, lines: [{ text: '净利润', size: 44, weight: 700 }, { text: '$value', size: 44 }, { text: '利润率 32%', size: 30, color: NOTE }, { text: '同比 +9 个百分点', size: 30, color: NOTE }] },
            ] },
            interest_other: { blocks: [
              { x: RIGHT_X, top: 604, anchor: 'middle', lineGap: 8, lines: [{ text: '利息及其他', size: 31, weight: 700 }, { text: '$value', size: 30 }] },
            ] },
            tax: { blocks: [
              { x: RIGHT_X, top: 720, anchor: 'middle', lineGap: 8, lines: [{ text: '税费', size: 31, weight: 700 }, { text: '$value', size: 30 }] },
            ] },
            operating: { blocks: [
              { x: RIGHT_X, top: 860, anchor: 'middle', lineGap: 8, lines: [{ text: '运营', size: 31, weight: 700 }, { text: '$value', size: 30 }] },
            ] },
            sga: { blocks: [
              { x: RIGHT_X, top: 1028, anchor: 'middle', lineGap: 8, lines: [{ text: '销售及管理费用', size: 31, weight: 700 }, { text: '$value', size: 30 }] },
            ] },
            da: { blocks: [
              { x: RIGHT_X, top: 1166, anchor: 'middle', lineGap: 8, lines: [{ text: '折旧及摊销', size: 31, weight: 700 }, { text: '$value', size: 30 }] },
            ] },
            other_expense: { blocks: [
              { x: RIGHT_X, top: 1310, anchor: 'middle', lineGap: 8, lines: [{ text: '其他', size: 31, weight: 700 }, { text: '$value', size: 30 }] },
            ] },
          },
        },
      },
    },
  });
})();
