/* ====================================================================
 * Moody's - Q1 FY26 income statement ($M)
 * Reconstructed from input/processed/moodys-q1-fy26.png as a fixed
 * d3-sankey layout. Revenue splits by the two reporting segments
 * (Moody's Analytics + Moody's Investors Service), each fed by its
 * business lines, then flows through the operating-profit / operating-
 * expense waterfall. No separate gross-profit / cost-of-revenue layer
 * is shown, so those SSOT-parity nodes are parked off-canvas.
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
  const RIGHT_X = 2488; // terminal cost labels sit to the right of their bars

  const wordmark = (label) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <text x="1367" y="384" text-anchor="middle" font-size="112" font-weight="800"
            letter-spacing="1" textLength="505" lengthAdjust="spacingAndGlyphs"
            fill="${NAVY}">${label}</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'moodys-q1-fy26',
    name: "Moody's · Q1 FY26",
    company: "Moody's",
    meta: {
      company: "Moody's",
      title: "Moody’s Q1 FY26 Income Statement",
      period: 'Q1 FY26',
      periodNote: 'Quarter ended Mar. 31, 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/moodys-q1-fy26.png', width: 2667, height: 1500 },
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
    annotationsSvg: wordmark("MOODY’S"),

    layout: {
      scale: 1,
      nodes: {
        decision_solutions: { x: 397, y: 325, width: 73, height: 55 },
        research_insights: { x: 397, y: 488, width: 73, height: 33 },
        data_information: { x: 397, y: 623, width: 73, height: 31 },
        corporate_finance: { x: 397, y: 785, width: 73, height: 80 },
        structured_finance: { x: 397, y: 972, width: 73, height: 18 },
        financial_institutions: { x: 397, y: 1094, width: 73, height: 25 },
        public_project: { x: 397, y: 1226, width: 73, height: 23 },
        other: { x: 397, y: 1349, width: 73, height: 2 },

        moodys_analytics: { x: 864, y: 486, width: 73, height: 119 },
        moodys_investors_service: { x: 864, y: 886, width: 73, height: 148 },

        revenue: { x: 1331, y: 622, width: 72, height: 267 },

        operating_profit: { x: 1798, y: 484, width: 73, height: 118 },
        operating_expenses: { x: 1798, y: 890, width: 73, height: 149 },

        net_profit: { x: 2265, y: 352, width: 73, height: 84 },
        tax: { x: 2265, y: 572, width: 73, height: 27 },
        interest_other: { x: 2265, y: 735, width: 73, height: 7 },
        operating: { x: 2265, y: 882, width: 73, height: 69 },
        sga: { x: 2265, y: 1050, width: 73, height: 61 },
        da: { x: 2265, y: 1214, width: 73, height: 16 },
        restructuring: { x: 2265, y: 1334, width: 73, height: 3 },

        cost_of_revenue: { x: -2000, y: -2000, width: 1, height: 1 },
        gross_profit: { x: -2000, y: -2000, width: 1, height: 1 },
      },
      labels: {
        decision_solutions: {
          blocks: [
            { x: 430, top: 225, anchor: 'middle', lineGap: 9,
              lines: [{ text: '$value', size: 44 }, { text: '+7% Y/Y', size: 30, color: NOTE }] },
            { x: 349, top: 304, anchor: 'end', lineGap: 9,
              lines: [{ text: 'Decision', size: 44, weight: 700 }, { text: 'Solutions', size: 44, weight: 700 }] },
          ],
        },
        research_insights: {
          blocks: [
            { x: 430, top: 383, anchor: 'middle', lineGap: 9,
              lines: [{ text: '$value', size: 44 }, { text: '+8% Y/Y', size: 30, color: NOTE }] },
            { x: 349, top: 458, anchor: 'end', lineGap: 9,
              lines: [{ text: 'Research', size: 44, weight: 700 }, { text: '& Insights', size: 44, weight: 700 }] },
          ],
        },
        data_information: {
          blocks: [
            { x: 430, top: 527, anchor: 'middle', lineGap: 9,
              lines: [{ text: '$value', size: 44 }, { text: '+10% Y/Y', size: 30, color: NOTE }] },
            { x: 349, top: 596, anchor: 'end', lineGap: 9,
              lines: [{ text: 'Data &', size: 44, weight: 700 }, { text: 'Information', size: 44, weight: 700 }] },
          ],
        },
        corporate_finance: {
          blocks: [
            { x: 430, top: 685, anchor: 'middle', lineGap: 9,
              lines: [{ text: '$value', size: 44 }, { text: '+12% Y/Y', size: 30, color: NOTE }] },
            { x: 349, top: 776, anchor: 'end', lineGap: 9,
              lines: [{ text: 'Corporate', size: 44, weight: 700 }, { text: 'Finance', size: 44, weight: 700 }] },
          ],
        },
        structured_finance: {
          blocks: [
            { x: 430, top: 871, anchor: 'middle', lineGap: 9,
              lines: [{ text: '$value', size: 44 }, { text: '(1%) Y/Y', size: 30, color: NOTE }] },
            { x: 349, top: 938, anchor: 'end', lineGap: 9,
              lines: [{ text: 'Structured', size: 44, weight: 700 }, { text: 'Finance', size: 44, weight: 700 }] },
          ],
        },
        financial_institutions: {
          blocks: [
            { x: 430, top: 998, anchor: 'middle', lineGap: 9,
              lines: [{ text: '$value', size: 44 }, { text: '+2% Y/Y', size: 30, color: NOTE }] },
            { x: 349, top: 1056, anchor: 'end', lineGap: 9,
              lines: [{ text: 'Financial', size: 44, weight: 700 }, { text: 'Institutions', size: 44, weight: 700 }] },
          ],
        },
        public_project: {
          blocks: [
            { x: 430, top: 1128, anchor: 'middle', lineGap: 9,
              lines: [{ text: '$value', size: 44 }, { text: '+8% Y/Y', size: 30, color: NOTE }] },
            { x: 349, top: 1211, anchor: 'end',
              lines: [{ text: 'Public, Project', size: 44, weight: 700 }] },
          ],
        },
        other: {
          blocks: [
            { x: 430, top: 1251, anchor: 'middle', lineGap: 9,
              lines: [{ text: '$value', size: 44 }, { text: '+44% Y/Y', size: 30, color: NOTE }] },
            { x: 349, top: 1319, anchor: 'end',
              lines: [{ text: 'Other', size: 44, weight: 700 }] },
          ],
        },

        moodys_analytics: {
          blocks: [
            { x: 900, top: 278, anchor: 'middle', lineGap: 9,
              lines: [
                { text: "Moody’s", size: 44, weight: 700 },
                { text: 'Analytics', size: 44, weight: 700 },
                { text: '$value', size: 44 },
                { text: '+8% Y/Y', size: 30, color: NOTE },
              ] },
          ],
        },
        moodys_investors_service: {
          blocks: [
            { x: 900, top: 1040, anchor: 'middle', lineGap: 9,
              lines: [
                { text: "Moody’s", size: 44, weight: 700 },
                { text: 'Investors', size: 44, weight: 700 },
                { text: 'Service', size: 44, weight: 700 },
                { text: '$value', size: 44 },
                { text: '+8% Y/Y', size: 30, color: NOTE },
              ] },
          ],
        },

        revenue: {
          blocks: [
            { x: 1367, top: 470, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 44, weight: 700 },
                { text: '$value', size: 44 },
                { text: '+8% Y/Y', size: 30, color: NOTE },
              ] },
          ],
        },

        operating_profit: {
          blocks: [
            { x: 1834, top: 291, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating profit', size: 44, weight: 700 },
                { text: '$value', size: 44 },
                { text: '44% margin', size: 30, color: NOTE },
                { text: '+0pp Y/Y', size: 30, color: NOTE },
              ] },
          ],
        },
        operating_expenses: {
          blocks: [
            { x: 1834, top: 1045, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating', size: 44, weight: 700 },
                { text: 'expenses', size: 44, weight: 700 },
                { text: '$value', size: 44 },
              ] },
          ],
        },

        net_profit: {
          blocks: [
            { x: 2393, top: 323, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'Net profit', size: 44, weight: 700 },
                { text: '$value', size: 44 },
                { text: '32% margin', size: 30, color: NOTE },
                { text: '(1pp) Y/Y', size: 30, color: NOTE },
              ] },
          ],
        },
        tax: {
          blocks: [
            { x: RIGHT_X, top: 544, anchor: 'middle', lineGap: 8,
              lines: [{ text: 'Tax', size: 31, weight: 700 }, { text: '$value', size: 30 }] },
          ],
        },
        interest_other: {
          blocks: [
            { x: RIGHT_X, top: 696, anchor: 'middle', lineGap: 8,
              lines: [{ text: 'Interest & other', size: 31, weight: 700 }, { text: '$value', size: 30 }] },
          ],
        },
        operating: {
          blocks: [
            { x: RIGHT_X, top: 872, anchor: 'middle', lineGap: 8,
              lines: [{ text: 'Operating', size: 31, weight: 700 }, { text: '$value', size: 30 }] },
          ],
        },
        sga: {
          blocks: [
            { x: RIGHT_X, top: 1040, anchor: 'middle', lineGap: 8,
              lines: [{ text: 'SG&A', size: 31, weight: 700 }, { text: '$value', size: 30 }] },
          ],
        },
        da: {
          blocks: [
            { x: RIGHT_X, top: 1202, anchor: 'middle',
              lines: [{ text: 'D&A ($122M)', size: 31, weight: 700 }] },
          ],
        },
        restructuring: {
          blocks: [
            { x: RIGHT_X, top: 1293, anchor: 'middle', lineGap: 8,
              lines: [{ text: 'Restructuring', size: 31, weight: 700 }, { text: '$value', size: 30 }] },
          ],
        },
      },
    },

    nodes: [
      { id: 'decision_solutions', col: 0, order: 0, type: 'source', label: 'Decision Solutions', value: 432, notes: ['+7% Y/Y'] },
      { id: 'research_insights', col: 0, order: 1, type: 'source', label: 'Research & Insights', value: 255, notes: ['+8% Y/Y'] },
      { id: 'data_information', col: 0, order: 2, type: 'source', label: 'Data & Information', value: 239, notes: ['+10% Y/Y'] },
      { id: 'corporate_finance', col: 0, order: 3, type: 'source', label: 'Corporate Finance', value: 633, notes: ['+12% Y/Y'] },
      { id: 'structured_finance', col: 0, order: 4, type: 'source', label: 'Structured Finance', value: 137, notes: ['(1%) Y/Y'] },
      { id: 'financial_institutions', col: 0, order: 5, type: 'source', label: 'Financial Institutions', value: 194, notes: ['+2% Y/Y'] },
      { id: 'public_project', col: 0, order: 6, type: 'source', label: 'Public, Project', value: 176, notes: ['+8% Y/Y'] },
      { id: 'other', col: 0, order: 7, type: 'source', label: 'Other', value: 13, notes: ['+44% Y/Y'] },

      { id: 'moodys_analytics', col: 1, order: 0, type: 'hub', label: "Moody's Analytics", value: 926, notes: ['+8% Y/Y'] },
      { id: 'moodys_investors_service', col: 1, order: 1, type: 'hub', label: "Moody's Investors Service", value: 1153, valueText: '$1,153M', notes: ['+8% Y/Y'] },

      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 2079, valueText: '$2,079M', notes: ['+8% Y/Y'] },

      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 922, notes: ['44% margin', '+0pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 1157, valueText: '($1,157M)' },

      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 661, notes: ['32% margin', '(1pp) Y/Y'] },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 209 },
      { id: 'interest_other', col: 4, order: 2, type: 'cost', label: 'Interest & other', value: 52 },
      { id: 'operating', col: 4, order: 3, type: 'cost', label: 'Operating', value: 531 },
      { id: 'sga', col: 4, order: 4, type: 'cost', label: 'SG&A', value: 477 },
      { id: 'da', col: 4, order: 5, type: 'cost', label: 'D&A', value: 122 },
      { id: 'restructuring', col: 4, order: 6, type: 'cost', label: 'Restructuring', value: 27 },

      { id: 'cost_of_revenue', col: 5, order: 98, type: 'cost', label: 'Cost of revenue', value: 0 },
      { id: 'gross_profit', col: 5, order: 99, type: 'profit', label: 'Gross profit', value: 2079, valueText: '$2,079M' },
    ],

    links: [
      { source: 'decision_solutions', target: 'moodys_analytics', value: 432, width: 55, targetOrder: 0 },
      { source: 'research_insights', target: 'moodys_analytics', value: 255, width: 33, targetOrder: 1 },
      { source: 'data_information', target: 'moodys_analytics', value: 239, width: 31, targetOrder: 2 },

      { source: 'corporate_finance', target: 'moodys_investors_service', value: 633, width: 80, targetOrder: 0 },
      { source: 'structured_finance', target: 'moodys_investors_service', value: 137, width: 18, targetOrder: 1 },
      { source: 'financial_institutions', target: 'moodys_investors_service', value: 194, width: 25, targetOrder: 2 },
      { source: 'public_project', target: 'moodys_investors_service', value: 176, width: 23, targetOrder: 3 },
      { source: 'other', target: 'moodys_investors_service', value: 13, width: 2, targetOrder: 4 },

      { source: 'moodys_analytics', target: 'revenue', value: 926, width: 119, sourceOrder: 0, targetOrder: 0 },
      { source: 'moodys_investors_service', target: 'revenue', value: 1153, width: 148, sourceOrder: 0, targetOrder: 1 },

      { source: 'revenue', target: 'operating_profit', value: 922, width: 118, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 1157, width: 149, sourceOrder: 1, targetOrder: 0 },

      { source: 'operating_profit', target: 'net_profit', value: 661, width: 84, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 209, width: 27, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest_other', value: 52, width: 7, sourceOrder: 2, targetOrder: 0 },

      { source: 'operating_expenses', target: 'operating', value: 531, width: 69, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 477, width: 61, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'da', value: 122, width: 16, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'restructuring', value: 27, width: 3, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      preservedAnnotationText: ['MOODY’S'],
      zh: {
        name: "穆迪 · 2026 财年第一季度",
        meta: {
          title: '穆迪 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月 31 日的季度',
          titleSize: 112,
          titleTextLength: 1720,
        },
        annotationsSvg: wordmark("MOODY’S"),
        nodes: {
          decision_solutions: { label: '决策解决方案', notes: ['同比 +7%'] },
          research_insights: { label: '研究与洞察', notes: ['同比 +8%'] },
          data_information: { label: '数据与信息', notes: ['同比 +10%'] },
          corporate_finance: { label: '企业融资', notes: ['同比 +12%'] },
          structured_finance: { label: '结构性融资', notes: ['同比 (1%)'] },
          financial_institutions: { label: '金融机构', notes: ['同比 +2%'] },
          public_project: { label: '公共、项目', notes: ['同比 +8%'] },
          other: { label: '其他', notes: ['同比 +44%'] },
          moodys_analytics: { label: '穆迪分析', notes: ['同比 +8%'] },
          moodys_investors_service: { label: '穆迪投资者服务', notes: ['同比 +8%'] },
          revenue: { label: '收入', notes: ['同比 +8%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 44%', '同比 +0 个百分点'] },
          operating_expenses: { label: '营业费用' },
          net_profit: { label: '净利润', notes: ['利润率 32%', '同比 (1 个百分点)'] },
          tax: { label: '税费' },
          interest_other: { label: '利息及其他' },
          operating: { label: '运营' },
          sga: { label: '销售及管理费用' },
          da: { label: '折旧摊销' },
          restructuring: { label: '重组' },
          cost_of_revenue: { label: '收入成本' },
          gross_profit: { label: '毛利润' },
        },
        layout: {
          labels: {
            decision_solutions: {
              blocks: [
                { x: 430, top: 225, anchor: 'middle', lineGap: 9,
                  lines: [{ text: '$value', size: 44 }, { text: '同比 +7%', size: 30, color: NOTE }] },
                { x: 349, top: 326, anchor: 'end',
                  lines: [{ text: '决策解决方案', size: 44, weight: 700 }] },
              ],
            },
            research_insights: {
              blocks: [
                { x: 430, top: 383, anchor: 'middle', lineGap: 9,
                  lines: [{ text: '$value', size: 44 }, { text: '同比 +8%', size: 30, color: NOTE }] },
                { x: 349, top: 481, anchor: 'end',
                  lines: [{ text: '研究与洞察', size: 44, weight: 700 }] },
              ],
            },
            data_information: {
              blocks: [
                { x: 430, top: 527, anchor: 'middle', lineGap: 9,
                  lines: [{ text: '$value', size: 44 }, { text: '同比 +10%', size: 30, color: NOTE }] },
                { x: 349, top: 616, anchor: 'end',
                  lines: [{ text: '数据与信息', size: 44, weight: 700 }] },
              ],
            },
            corporate_finance: {
              blocks: [
                { x: 430, top: 685, anchor: 'middle', lineGap: 9,
                  lines: [{ text: '$value', size: 44 }, { text: '同比 +12%', size: 30, color: NOTE }] },
                { x: 349, top: 803, anchor: 'end',
                  lines: [{ text: '企业融资', size: 44, weight: 700 }] },
              ],
            },
            structured_finance: {
              blocks: [
                { x: 430, top: 871, anchor: 'middle', lineGap: 9,
                  lines: [{ text: '$value', size: 44 }, { text: '同比 (1%)', size: 30, color: NOTE }] },
                { x: 349, top: 958, anchor: 'end',
                  lines: [{ text: '结构性融资', size: 44, weight: 700 }] },
              ],
            },
            financial_institutions: {
              blocks: [
                { x: 430, top: 998, anchor: 'middle', lineGap: 9,
                  lines: [{ text: '$value', size: 44 }, { text: '同比 +2%', size: 30, color: NOTE }] },
                { x: 349, top: 1084, anchor: 'end',
                  lines: [{ text: '金融机构', size: 44, weight: 700 }] },
              ],
            },
            public_project: {
              blocks: [
                { x: 430, top: 1128, anchor: 'middle', lineGap: 9,
                  lines: [{ text: '$value', size: 44 }, { text: '同比 +8%', size: 30, color: NOTE }] },
                { x: 349, top: 1211, anchor: 'end',
                  lines: [{ text: '公共、项目', size: 44, weight: 700 }] },
              ],
            },
            other: {
              blocks: [
                { x: 430, top: 1251, anchor: 'middle', lineGap: 9,
                  lines: [{ text: '$value', size: 44 }, { text: '同比 +44%', size: 30, color: NOTE }] },
                { x: 349, top: 1319, anchor: 'end',
                  lines: [{ text: '其他', size: 44, weight: 700 }] },
              ],
            },
            moodys_analytics: {
              blocks: [
                { x: 900, top: 300, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '穆迪分析', size: 44, weight: 700 },
                    { text: '$value', size: 44 },
                    { text: '同比 +8%', size: 30, color: NOTE },
                  ] },
              ],
            },
            moodys_investors_service: {
              blocks: [
                { x: 900, top: 1055, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '穆迪投资者服务', size: 44, weight: 700 },
                    { text: '$value', size: 44 },
                    { text: '同比 +8%', size: 30, color: NOTE },
                  ] },
              ],
            },
            revenue: {
              blocks: [
                { x: 1367, top: 470, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '收入', size: 44, weight: 700 },
                    { text: '$value', size: 44 },
                    { text: '同比 +8%', size: 30, color: NOTE },
                  ] },
              ],
            },
            operating_profit: {
              blocks: [
                { x: 1834, top: 291, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '营业利润', size: 44, weight: 700 },
                    { text: '$value', size: 44 },
                    { text: '利润率 44%', size: 30, color: NOTE },
                    { text: '同比 +0 个百分点', size: 30, color: NOTE },
                  ] },
              ],
            },
            operating_expenses: {
              blocks: [
                { x: 1834, top: 1055, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '营业费用', size: 44, weight: 700 },
                    { text: '$value', size: 44 },
                  ] },
              ],
            },
            net_profit: {
              blocks: [
                { x: 2393, top: 323, anchor: 'start', lineGap: 9,
                  lines: [
                    { text: '净利润', size: 44, weight: 700 },
                    { text: '$value', size: 44 },
                    { text: '利润率 32%', size: 30, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 30, color: NOTE },
                  ] },
              ],
            },
            tax: {
              blocks: [
                { x: RIGHT_X, top: 544, anchor: 'middle', lineGap: 8,
                  lines: [{ text: '税费', size: 31, weight: 700 }, { text: '$value', size: 30 }] },
              ],
            },
            interest_other: {
              blocks: [
                { x: RIGHT_X, top: 696, anchor: 'middle', lineGap: 8,
                  lines: [{ text: '利息及其他', size: 31, weight: 700 }, { text: '$value', size: 30 }] },
              ],
            },
            operating: {
              blocks: [
                { x: RIGHT_X, top: 872, anchor: 'middle', lineGap: 8,
                  lines: [{ text: '运营', size: 31, weight: 700 }, { text: '$value', size: 30 }] },
              ],
            },
            sga: {
              blocks: [
                { x: RIGHT_X, top: 1040, anchor: 'middle', lineGap: 8,
                  lines: [{ text: '销售及管理费用', size: 31, weight: 700 }, { text: '$value', size: 30 }] },
              ],
            },
            da: {
              blocks: [
                { x: RIGHT_X, top: 1202, anchor: 'middle',
                  lines: [{ text: '折旧摊销 ($122M)', size: 31, weight: 700 }] },
              ],
            },
            restructuring: {
              blocks: [
                { x: RIGHT_X, top: 1293, anchor: 'middle', lineGap: 8,
                  lines: [{ text: '重组', size: 31, weight: 700 }, { text: '$value', size: 30 }] },
              ],
            },
          },
        },
      },
    },
  });
})();
