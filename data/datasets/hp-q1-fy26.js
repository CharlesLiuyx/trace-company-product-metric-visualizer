/* ====================================================================
 * HP - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/hp-q1-fy26.png as a fixed d3-sankey
 * layout with a reusable SVG HP logo annotation.
 * ==================================================================== */
(function () {
  const HP_BLUE = '#0b9bd4';
  const TITLE = '#15527a';
  const BLUE_LABEL = '#009bd8';
  const BLUE_LINK = '#82c8df';
  const GREEN = '#239d22';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#99d099';
  const RED = '#d30000';
  const RED_LABEL = '#8d1707';
  const RED_LINK = '#df7f82';
  const NOTE = '#666666';
  const PS_COMMERCIAL = '#8998ee';
  const PS_COMMERCIAL_LINK = '#c2c9ed';
  const PS_CONSUMER = '#3baaf4';
  const PS_CONSUMER_LINK = '#9fceed';
  const PRINTING_SUPPLIES = '#4d98ee';
  const PRINTING_SUPPLIES_LINK = '#abc9ed';
  const PRINTING_COMMERCIAL = '#83cff5';
  const PRINTING_COMMERCIAL_LINK = '#c4dfef';
  const PRINTING_CONSUMER = '#006fc7';
  const RIGHT_LABEL_X = 2380;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'hp-q1-fy26',
    name: 'HP - Q1 FY26',
    company: 'HP',
    meta: {
      company: 'HP',
      title: 'HP Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/hp-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 124,
      titleWeight: 800,
      titleTextLength: 1888,
      periodX: 2462,
      periodY: 249,
      periodNoteY: 291,
      logoWidth: 248,
      logoHeight: 248,
      logoY: 236,
      logoViewBox: '0 0 300 300',
      logoSvg: BUSINESS_ICONS.hpLogo || '',
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: HP_BLUE, label: BLUE_LABEL },
        hub: { node: HP_BLUE, label: BLUE_LABEL },
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
      type: { name: 39, value: 38, note: 28, lineGap: 8 },
    },

    layout: {
      scale: 25.8,
      nodes: {
        ps_commercial: { x: 415, y: 444, width: 73, height: 188 },
        ps_consumer: { x: 415, y: 757, width: 73, height: 79 },
        printing_supplies: { x: 415, y: 944, width: 73, height: 74 },
        printing_commercial: { x: 415, y: 1128, width: 73, height: 30 },
        printing_consumer: { x: 415, y: 1281, width: 73, height: 8 },
        personal_systems: { x: 790, y: 575, width: 74, height: 266 },
        printing: { x: 790, y: 1057, width: 74, height: 108 },
        revenue: { x: 1164, y: 689, width: 74, height: 374 },
        gross_profit: { x: 1537, y: 582, width: 74, height: 74 },
        cost_of_revenue: { x: 1537, y: 862, width: 74, height: 300 },
        operating_profit: { x: 1910, y: 480, width: 74, height: 21 },
        operating_expenses: { x: 1910, y: 715, width: 74, height: 55 },
        net_profit: { x: 2283, y: 364, width: 74, height: 15 },
        tax: { x: 2283, y: 603, width: 74, height: 3 },
        other_nonoperating: { x: 2283, y: 701, width: 74, height: 3 },
        sga: { x: 2283, y: 850, width: 74, height: 40 },
        rnd: { x: 2283, y: 1048, width: 74, height: 11 },
        restructuring: { x: 2283, y: 1208, width: 74, height: 4 },
        other_opex: { x: 2283, y: 1350, width: 74, height: 3 },
      },
      labels: {
        ps_commercial: {
          blocks: [
            {
              x: 384, top: 495, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Personal Systems', size: 37, weight: 800 },
                { text: 'Commercial', size: 37, weight: 800 },
              ],
            },
            {
              x: 451, top: 356, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 37, weight: 400 },
                { text: '+9% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ps_consumer: {
          blocks: [
            {
              x: 384, top: 755, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Personal Systems', size: 37, weight: 800 },
                { text: 'Consumer', size: 37, weight: 800 },
              ],
            },
            {
              x: 451, top: 670, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 37, weight: 400 },
                { text: '+16% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        printing_supplies: {
          blocks: [
            {
              x: 384, top: 940, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Printing', size: 37, weight: 800 },
                { text: 'Supplies', size: 37, weight: 800 },
              ],
            },
            {
              x: 451, top: 858, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 37, weight: 400 },
                { text: '(1%) Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        printing_commercial: {
          blocks: [
            {
              x: 384, top: 1110, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Printing', size: 37, weight: 800 },
                { text: 'Commercial', size: 37, weight: 800 },
              ],
            },
            {
              x: 451, top: 1040, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 37, weight: 400 },
                { text: '(3%) Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        printing_consumer: {
          blocks: [
            {
              x: 384, top: 1245, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Printing', size: 37, weight: 800 },
                { text: 'Consumer', size: 37, weight: 800 },
              ],
            },
            {
              x: 451, top: 1188, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 37, weight: 400 },
                { text: '(8%) Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        personal_systems: {
          blocks: [
            {
              x: 827, top: 383, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Personal', size: 39, weight: 800 },
                { text: 'Systems', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '+11% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        printing: {
          blocks: [
            {
              x: 827, top: 1187, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Printing', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '(2%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1201, top: 552, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '+7% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1574, top: 400, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 39, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '20% margin', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1574, top: 1187, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Cost of', size: 38, weight: 800, color: RED_LABEL },
                { text: 'revenue', size: 38, weight: 800, color: RED_LABEL },
                { text: '$value', size: 37, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1947, top: 308, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating profit', size: 39, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '5% margin', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1947, top: 792, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating', size: 38, weight: 800, color: RED_LABEL },
                { text: 'expenses', size: 38, weight: 800, color: RED_LABEL },
                { text: '$value', size: 37, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2382, top: 333, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'Net profit', size: 39, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '4% margin', size: 28, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 565, anchor: 'start', lineGap: 7,
              lines: [
                { text: 'Tax', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        other_nonoperating: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 665, anchor: 'start', lineGap: 7,
              lines: [
                { text: 'Other', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        sga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 850, anchor: 'start', lineGap: 7,
              lines: [
                { text: 'SG&A', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
                { text: '10% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1018, anchor: 'start', lineGap: 7,
              lines: [
                { text: 'R&D', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
                { text: '3% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        restructuring: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1165, anchor: 'start', lineGap: 7,
              lines: [
                { text: 'Restructuring', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
                { text: '1% of revenue', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_opex: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1310, anchor: 'start', lineGap: 7,
              lines: [
                { text: 'Other', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
                { text: '0% of revenue', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      {
        id: 'ps_commercial', col: 0, order: 0, type: 'source',
        label: ['Personal Systems', 'Commercial'], value: 7.3, notes: ['+9% Y/Y'],
        color: PS_COMMERCIAL, labelColor: PS_COMMERCIAL, linkTint: PS_COMMERCIAL_LINK,
      },
      {
        id: 'ps_consumer', col: 0, order: 1, type: 'source',
        label: ['Personal Systems', 'Consumer'], value: 3.0, valueText: '$3.0B', notes: ['+16% Y/Y'],
        color: PS_CONSUMER, labelColor: PS_CONSUMER, linkTint: PS_CONSUMER_LINK,
      },
      {
        id: 'printing_supplies', col: 0, order: 2, type: 'source',
        label: ['Printing', 'Supplies'], value: 2.8, notes: ['(1%) Y/Y'],
        color: PRINTING_SUPPLIES, labelColor: PRINTING_SUPPLIES, linkTint: PRINTING_SUPPLIES_LINK,
      },
      {
        id: 'printing_commercial', col: 0, order: 3, type: 'source',
        label: ['Printing', 'Commercial'], value: 1.1, notes: ['(3%) Y/Y'],
        color: PRINTING_COMMERCIAL, labelColor: PRINTING_COMMERCIAL, linkTint: PRINTING_COMMERCIAL_LINK,
      },
      {
        id: 'printing_consumer', col: 0, order: 4, type: 'source',
        label: ['Printing', 'Consumer'], value: 0.3, notes: ['(8%) Y/Y'],
        color: PRINTING_CONSUMER, labelColor: PRINTING_CONSUMER, linkTint: PRINTING_CONSUMER,
      },
      { id: 'personal_systems', col: 1, order: 0, type: 'source', label: ['Personal', 'Systems'], value: 10.3, notes: ['+11% Y/Y'], color: HP_BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'printing', col: 1, order: 1, type: 'source', label: 'Printing', value: 4.2, notes: ['(2%) Y/Y'], color: HP_BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 14.4, notes: ['+7% Y/Y'], color: HP_BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 2.8, notes: ['20% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 11.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 0.8, notes: ['5% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.5, notes: ['4% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_nonoperating', col: 5, order: 2, type: 'cost', label: 'Other', value: 0.1, valueText: '($0.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 1.5, notes: ['10% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 0.4, notes: ['3% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'restructuring', col: 5, order: 5, type: 'cost', label: 'Restructuring', value: 0.1, valueText: '($0.1B)', notes: ['1% of revenue'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_opex', col: 5, order: 6, type: 'cost', label: 'Other', value: 0.1, valueText: '($0.1B)', notes: ['0% of revenue'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'ps_commercial', target: 'personal_systems', value: 7.3, width: 187, targetOrder: 0, linkTint: { left: PS_COMMERCIAL_LINK, right: PS_COMMERCIAL_LINK } },
      { source: 'ps_consumer', target: 'personal_systems', value: 3.0, width: 79, targetOrder: 1, linkTint: { left: PS_CONSUMER_LINK, right: PS_CONSUMER_LINK } },
      { source: 'printing_supplies', target: 'printing', value: 2.8, width: 73, targetOrder: 0, linkTint: { left: PRINTING_SUPPLIES_LINK, right: PRINTING_SUPPLIES_LINK } },
      { source: 'printing_commercial', target: 'printing', value: 1.1, width: 28, targetOrder: 1, linkTint: { left: PRINTING_COMMERCIAL_LINK, right: PRINTING_COMMERCIAL_LINK } },
      { source: 'printing_consumer', target: 'printing', value: 0.3, width: 7, targetOrder: 2, linkTint: { left: '#6ea8d9', right: '#6ea8d9' } },
      { source: 'personal_systems', target: 'revenue', value: 10.3, width: 266, targetOrder: 0 },
      { source: 'printing', target: 'revenue', value: 4.2, width: 108, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 2.8, width: 74, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 11.6, width: 300, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.8, width: 21, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.1, width: 53, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.5, width: 15, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.1, width: 3, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'other_nonoperating', value: 0.1, width: 3, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 1.5, width: 40, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.4, width: 10, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'restructuring', value: 0.1, width: 2, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.1, width: 3, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'HP · 2026 财年第一季度',
        meta: {
          title: 'HP 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 1 月',
        },
        nodes: {
          ps_commercial: { label: '商用个人系统', notes: ['同比 +9%'] },
          ps_consumer: { label: '消费者个人系统', notes: ['同比 +16%'] },
          printing_supplies: { label: '打印耗材', notes: ['同比 (1%)'] },
          printing_commercial: { label: '商用打印', notes: ['同比 (3%)'] },
          printing_consumer: { label: '消费者打印', notes: ['同比 (8%)'] },
          personal_systems: { label: '个人系统', notes: ['同比 +11%'] },
          printing: { label: '打印', notes: ['同比 (2%)'] },
          revenue: { label: '收入', notes: ['同比 +7%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 20%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 5%', '同比 (1 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 4%', '同比 (0 个百分点)'] },
          tax: { label: '税费' },
          other_nonoperating: { label: '其他' },
          sga: { label: '销售、一般及行政', notes: ['占收入 10%', '同比 (0 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 3%', '同比 (0 个百分点)'] },
          restructuring: { label: '重组', notes: ['占收入 1%'] },
          other_opex: { label: '其他', notes: ['占收入 0%'] },
        },
      },
    },
  });
})();
