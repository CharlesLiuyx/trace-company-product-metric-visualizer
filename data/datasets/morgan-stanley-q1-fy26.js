/* ====================================================================
 * Morgan Stanley - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/morgan-stanley-q1-fy26.png as a
 * fixed d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const BLACK = '#000000';
  const TITLE = '#15527a';
  const NOTE = '#666666';
  const GRAY_LINK = '#8e8f8d';
  const GREEN = '#29a02a';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9bcf99';
  const RED = '#d60000';
  const RED_LABEL = '#8f1300';
  const RED_LINK = '#df8184';
  const RIGHT_LABEL_X = 2445;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      <text x="89" y="267" font-size="38" font-weight="800" fill="${TITLE}">By Business Segment</text>
      <text x="606" y="397" font-family="Arial,Helvetica,sans-serif" font-size="126" font-weight="400" textLength="760" lengthAdjust="spacingAndGlyphs" fill="${BLACK}">Morgan Stanley</text>

      <g fill="${BLACK}" font-family="Montserrat,Arial,sans-serif">
        <rect x="123" y="1108" width="242" height="149" rx="30"/>
        <rect x="373" y="1108" width="272" height="149" rx="30"/>
      </g>
      <g fill="#ffffff" text-anchor="middle" font-family="Montserrat,Arial,sans-serif">
        <text x="244" y="1160" font-size="29" font-weight="800">CET1 ratio</text>
        <text x="244" y="1199" font-size="28" font-weight="400">15.1%</text>
        <text x="244" y="1231" font-size="24" font-weight="400">(0.2pp) Y/Y</text>
        <text x="509" y="1160" font-size="29" font-weight="800">ROTCE</text>
        <text x="509" y="1199" font-size="28" font-weight="400">27.1%</text>
        <text x="509" y="1231" font-size="24" font-weight="400">+4.1pp Y/Y</text>
      </g>
      <g fill="${NOTE}" font-family="Montserrat,Arial,sans-serif" font-size="28" font-weight="400">
        <text x="232" y="1296">CET1 = Common Equity Tier 1</text>
        <text x="78" y="1343">ROTCE = Return on average tangible common equity</text>
      </g>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'morgan-stanley-q1-fy26',
    name: 'Morgan Stanley · Q1 FY26',
    company: 'Morgan Stanley',
    meta: {
      company: 'Morgan Stanley',
      title: 'Morgan Stanley Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/morgan-stanley-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 196,
      titleSize: 115,
      titleWeight: 800,
      titleTextLength: 2492,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
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
        hub: GRAY_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 18.4,
      nodes: {
        institutional_securities: { x: 377, y: 422, width: 73, height: 197 },
        wealth_management: { x: 377, y: 741, width: 73, height: 156 },
        investment_management: { x: 377, y: 1026, width: 73, height: 28 },
        segment_revenue: { x: 844, y: 535, width: 73, height: 382 },
        eliminations: { x: 1311, y: 1129, width: 73, height: 3 },
        revenue: { x: 1311, y: 649, width: 73, height: 379 },
        pretax_income: { x: 1778, y: 482, width: 73, height: 129 },
        operating_expenses: { x: 1778, y: 1284, width: 73, height: 2 },
        non_interest_expenses: { x: 1778, y: 875, width: 73, height: 248 },
        net_income: { x: 2246, y: 290, width: 73, height: 103 },
        tax: { x: 2246, y: 484, width: 73, height: 26 },
        compensation_benefits: { x: 2246, y: 610, width: 73, height: 156 },
        brokerage_clearing_exchange: { x: 2246, y: 848, width: 73, height: 24 },
        information_communications: { x: 2246, y: 968, width: 73, height: 20 },
        professional_services: { x: 2246, y: 1078, width: 73, height: 11 },
        occupancy: { x: 2246, y: 1184, width: 73, height: 9 },
        marketing_business_development: { x: 2246, y: 1280, width: 73, height: 6 },
        other_expenses: { x: 2246, y: 1356, width: 73, height: 20 },
      },
      labels: {
        segment_revenue: { blocks: [] },
        institutional_securities: {
          blocks: [
            {
              x: 288, top: 466, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Institutional', size: 40, weight: 800 },
                { text: 'Securities', size: 40, weight: 800 },
                { text: '31% net margin', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 414, top: 333, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+19% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        wealth_management: {
          blocks: [
            {
              x: 288, top: 760, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Wealth', size: 40, weight: 800 },
                { text: 'Management', size: 40, weight: 800 },
                { text: '24% net margin', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 414, top: 653, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+16% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        investment_management: {
          blocks: [
            {
              x: 288, top: 968, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Investment', size: 40, weight: 800 },
                { text: 'Management', size: 40, weight: 800 },
                { text: '16% net margin', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 414, top: 938, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '(4%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1348, top: 508, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 41, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+16% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        eliminations: {
          blocks: [
            {
              x: 1320, top: 1158, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Eliminations', size: 34, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        pretax_income: {
          blocks: [
            {
              x: 1815, top: 379, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Pretax income', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
              ],
            },
          ],
        },
        net_income: {
          blocks: [
            {
              x: 2350, top: 294, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net income', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '+29% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2444, top: 465, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 30, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        non_interest_expenses: {
          blocks: [
            {
              x: 1815, top: 1148, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Non interest', size: 35, weight: 800, color: RED_LABEL },
                { text: 'expenses', size: 35, weight: 800, color: RED_LABEL },
                { text: '$value', size: 33, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1815, top: 1308, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Provision', size: 34, weight: 800, color: RED_LABEL },
                { text: 'for credit loss', size: 34, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        compensation_benefits: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 641, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Compensation', size: 31, weight: 800, color: RED_LABEL },
                { text: '& benefits', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        brokerage_clearing_exchange: {
          blocks: [
            {
              x: 2480, top: 789, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Brokerage, clearing', size: 30, weight: 800, color: RED_LABEL },
                { text: '& exchange fees', size: 30, weight: 800, color: RED_LABEL },
                { text: '$value', size: 29, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        information_communications: {
          blocks: [
            {
              x: 2480, top: 920, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Information &', size: 30, weight: 800, color: RED_LABEL },
                { text: 'communications', size: 30, weight: 800, color: RED_LABEL },
                { text: '$value', size: 29, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        professional_services: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1051, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Professional', size: 30, weight: 800, color: RED_LABEL },
                { text: 'services', size: 30, weight: 800, color: RED_LABEL },
                { text: '$value', size: 29, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        occupancy: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1168, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Occupancy', size: 30, weight: 800, color: RED_LABEL },
                { text: '$value', size: 29, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        marketing_business_development: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1225, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Marketing &', size: 30, weight: 800, color: RED_LABEL },
                { text: 'business dev.', size: 30, weight: 800, color: RED_LABEL },
                { text: '$value', size: 29, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        other_expenses: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1350, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 30, weight: 800, color: RED_LABEL },
                { text: '$value', size: 29, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'institutional_securities', col: 0, order: 0, type: 'source', label: ['Institutional', 'Securities'], value: 10.7, notes: ['+19% Y/Y', '31% net margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'wealth_management', col: 0, order: 1, type: 'source', label: ['Wealth', 'Management'], value: 8.5, notes: ['+16% Y/Y', '24% net margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'investment_management', col: 0, order: 2, type: 'source', label: ['Investment', 'Management'], value: 1.5, notes: ['(4%) Y/Y', '16% net margin'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'segment_revenue', col: 1, order: 0, type: 'hub', label: '', value: 20.7, color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 20.6, notes: ['+16% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'pretax_income', col: 3, order: 0, type: 'profit', label: 'Pretax income', value: 7.0, valueText: '$7.0B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 2, type: 'cost', label: ['Provision', 'for credit loss'], value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'non_interest_expenses', col: 3, order: 1, type: 'cost', label: ['Non interest', 'expenses'], value: 13.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_income', col: 4, order: 0, type: 'profit', label: 'Net income', value: 5.6, notes: ['+29% Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 1.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'compensation_benefits', col: 4, order: 2, type: 'cost', label: ['Compensation', '& benefits'], value: 8.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'brokerage_clearing_exchange', col: 4, order: 3, type: 'cost', label: ['Brokerage, clearing', '& exchange fees'], value: 1.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'information_communications', col: 4, order: 4, type: 'cost', label: ['Information &', 'communications'], value: 1.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'professional_services', col: 4, order: 5, type: 'cost', label: ['Professional', 'services'], value: 0.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'occupancy', col: 4, order: 6, type: 'cost', label: 'Occupancy', value: 0.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'marketing_business_development', col: 4, order: 7, type: 'cost', label: ['Marketing &', 'business dev.'], value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_expenses', col: 4, order: 8, type: 'cost', label: 'Other', value: 1.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'institutional_securities', target: 'segment_revenue', value: 10.7, width: 197, sourceOrder: 0, targetOrder: 0 },
      { source: 'wealth_management', target: 'segment_revenue', value: 8.5, width: 156, sourceOrder: 0, targetOrder: 1 },
      { source: 'investment_management', target: 'segment_revenue', value: 1.5, width: 28, sourceOrder: 0, targetOrder: 2 },

      { source: 'segment_revenue', target: 'revenue', value: 20.6, width: 379, sourceOrder: 0, targetOrder: 0 },
      {
        source: 'segment_revenue',
        target: 'eliminations',
        value: 0.2,
        width: 3,
        sourceOrder: 1,
        targetOrder: 0,
        linkTint: RED_LINK,
        curve: { c1x: 1045, c1y: 932, c2x: 1188, c2y: 1128 },
      },

      { source: 'revenue', target: 'pretax_income', value: 7.0, width: 129, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'non_interest_expenses', value: 13.5, width: 248, sourceOrder: 1, targetOrder: 0, linkTint: RED_LINK },
      {
        source: 'revenue',
        target: 'operating_expenses',
        value: 0.1,
        width: 2,
        sourceOrder: 2,
        targetOrder: 0,
        linkTint: RED_LINK,
        curve: { c1x: 1495, c1y: 1033, c2x: 1635, c2y: 1285 },
      },

      { source: 'pretax_income', target: 'net_income', value: 5.6, width: 103, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      {
        source: 'pretax_income',
        target: 'tax',
        value: 1.4,
        width: 26,
        sourceOrder: 1,
        targetOrder: 0,
        linkTint: RED_LINK,
        curve: { c1x: 1988, c1y: 601, c2x: 2110, c2y: 497 },
      },

      { source: 'non_interest_expenses', target: 'compensation_benefits', value: 8.5, width: 156, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      {
        source: 'non_interest_expenses',
        target: 'brokerage_clearing_exchange',
        value: 1.3,
        width: 24,
        sourceOrder: 1,
        targetOrder: 0,
        linkTint: RED_LINK,
        curve: { c1x: 1966, c1y: 1045, c2x: 2088, c2y: 860 },
      },
      {
        source: 'non_interest_expenses',
        target: 'information_communications',
        value: 1.1,
        width: 20,
        sourceOrder: 2,
        targetOrder: 0,
        linkTint: RED_LINK,
        curve: { c1x: 1966, c1y: 1065, c2x: 2100, c2y: 978 },
      },
      { source: 'non_interest_expenses', target: 'professional_services', value: 0.6, width: 11, sourceOrder: 3, targetOrder: 0, linkTint: RED_LINK },
      {
        source: 'non_interest_expenses',
        target: 'occupancy',
        value: 0.5,
        width: 9,
        sourceOrder: 4,
        targetOrder: 0,
        linkTint: RED_LINK,
        curve: { c1x: 1978, c1y: 1091, c2x: 2105, c2y: 1189 },
      },
      {
        source: 'non_interest_expenses',
        target: 'marketing_business_development',
        value: 0.3,
        width: 6,
        sourceOrder: 5,
        targetOrder: 0,
        linkTint: RED_LINK,
        curve: { c1x: 1980, c1y: 1099, c2x: 2110, c2y: 1283 },
      },
      {
        source: 'non_interest_expenses',
        target: 'other_expenses',
        value: 1.1,
        width: 20,
        sourceOrder: 6,
        targetOrder: 0,
        linkTint: RED_LINK,
        curve: { c1x: 1985, c1y: 1114, c2x: 2118, c2y: 1366 },
      },
    ],
  });
})();
