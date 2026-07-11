/* Autodesk Q4 FY26 income statement ($M), reconstructed from the processed reference. */
(function () {
  const TITLE = '#155077';
  const BLACK = '#000000';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2442;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'autodesk-q4-fy26',
    name: 'Autodesk · Q4 FY26',
    company: 'Autodesk',
    meta: {
      company: 'Autodesk',
      title: 'Autodesk Q4 FY26 Income Statement',
      period: 'Q4 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/autodesk-q4-fy26.png', width: 2667, height: 1500 },
      titleX: 1331,
      titleY: 198,
      titleSize: 132,
      titleWeight: 700,
      titleTextLength: 2317,
      periodX: 2457,
      periodY: 265,
      periodNoteY: 307,
      logoWidth: 407,
      logoHeight: 230,
      logoY: 240,
      logoViewBox: '0 0 407 230',
      logoSvg: BUSINESS_ICONS.autodeskCompanyLogo || '',
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
      type: { name: 40, value: 38, note: 28, lineGap: 9 },
    },
    layout: {
      scale: 0.164,
      nodes: {
        aec: { x: 390, y: 463, width: 72, height: 159.9 },
        autocad: { x: 390, y: 758, width: 72, height: 78.392 },
        manufacturing: { x: 390, y: 964, width: 72, height: 62.484 },
        media_entertainment: { x: 390, y: 1149, width: 72, height: 14.76 },
        other_revenue: { x: 390, y: 1285, width: 72, height: 5.412 },
        revenue: { x: 857, y: 669, width: 72, height: 320.948 },
        gross_profit: { x: 1327, y: 597, width: 72, height: 293.724 },
        cost_of_revenue: { x: 1327, y: 1057, width: 72, height: 27.224 },
        operating_profit: { x: 1792, y: 529, width: 72, height: 70.684 },
        operating_expenses: { x: 1792, y: 758, width: 72, height: 223.04 },
        net_profit: { x: 2259, y: 463, width: 72, height: 51.824 },
        tax_other: { x: 2259, y: 659, width: 72, height: 18.86 },
        sm: { x: 2259, y: 784, width: 72, height: 104.304 },
        rnd: { x: 2259, y: 962, width: 72, height: 68.88 },
        ga: { x: 2259, y: 1108, width: 72, height: 31.324 },
        other_expense: { x: 2259, y: 1238, width: 72, height: 18.532 },
      },
      labels: {
        aec: {
          blocks: [
            { x: 194, top: 469, anchor: 'middle', lineGap: 10, lines: [
              { text: 'Architecture', size: 41, weight: 700 },
              { text: 'Engineering', size: 41, weight: 700 },
              { text: '& Construction', size: 41, weight: 700 },
            ] },
            { x: 432, top: 365, anchor: 'middle', lineGap: 10, lines: [
              { text: '$value', size: 38, weight: 400 },
              { text: '+22% Y/Y', size: 28, weight: 400, color: NOTE },
            ] },
          ],
        },
        autocad: {
          blocks: [
            { x: 210, top: 772, anchor: 'middle', lineGap: 9, lines: [
              { text: 'AutoCAD', size: 41, weight: 700 },
              { text: 'Computer-aided design', size: 28, weight: 400, color: NOTE },
              { text: 'Including LT', size: 28, weight: 400, color: NOTE },
            ] },
            { x: 423, top: 659, anchor: 'middle', lineGap: 10, lines: [
              { text: '$value', size: 38, weight: 400 },
              { text: '+17% Y/Y', size: 28, weight: 400, color: NOTE },
            ] },
          ],
        },
        manufacturing: {
          blocks: [
            { x: 196, top: 969, anchor: 'middle', lineGap: 10, lines: [
              { text: 'Manufacturing', size: 41, weight: 700 },
            ] },
            { x: 429, top: 862, anchor: 'middle', lineGap: 10, lines: [
              { text: '$value', size: 38, weight: 400 },
              { text: '+20% Y/Y', size: 28, weight: 400, color: NOTE },
            ] },
          ],
        },
        media_entertainment: {
          blocks: [
            { x: 210, top: 1097, anchor: 'middle', lineGap: 10, lines: [
              { text: 'Media &', size: 39, weight: 700 },
              { text: 'Entertainment', size: 39, weight: 700 },
            ] },
            { x: 429, top: 1050, anchor: 'middle', lineGap: 10, lines: [
              { text: '$value', size: 37, weight: 400 },
              { text: '+7% Y/Y', size: 28, weight: 400, color: NOTE },
            ] },
          ],
        },
        other_revenue: {
          blocks: [
            { x: 196, top: 1259, anchor: 'middle', lineGap: 10, lines: [
              { text: 'Other', size: 38, weight: 700 },
            ] },
            { x: 426, top: 1184, anchor: 'middle', lineGap: 10, lines: [
              { text: '$value', size: 37, weight: 400 },
              { text: '+14% Y/Y', size: 28, weight: 400, color: NOTE },
            ] },
          ],
        },
        revenue: { blocks: [{ x: 890, top: 521, anchor: 'middle', lineGap: 10, lines: [
          { text: 'Revenue', size: 40, weight: 700 },
          { text: '$value', size: 39, weight: 400 },
          { text: '+19% Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        gross_profit: { blocks: [{ x: 1361, top: 406, anchor: 'middle', lineGap: 10, lines: [
          { text: 'Gross profit', size: 39, weight: 700 },
          { text: '$value', size: 39, weight: 400 },
          { text: '92% margin', size: 28, weight: 400, color: NOTE },
          { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        operating_profit: { blocks: [{ x: 1828, top: 339, anchor: 'middle', lineGap: 10, lines: [
          { text: 'Operating profit', size: 39, weight: 700 },
          { text: '$value', size: 39, weight: 400 },
          { text: '22% margin', size: 28, weight: 400, color: NOTE },
          { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        net_profit: { blocks: [{ x: 2359, top: 409, anchor: 'start', lineGap: 10, lines: [
          { text: 'Net profit', size: 39, weight: 700 },
          { text: '$value', size: 39, weight: 400 },
          { text: '16% margin', size: 28, weight: 400, color: NOTE },
          { text: '(2pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        tax_other: { blocks: [{ x: 2452, top: 600, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Tax & Other', size: 32, weight: 700 },
          { text: '$value', size: 31, weight: 400 },
        ] }] },
        cost_of_revenue: { blocks: [{ x: 1357, top: 1100, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Cost of', size: 34, weight: 700 },
          { text: 'revenue', size: 34, weight: 700 },
          { text: '$value', size: 33, weight: 400 },
        ] }] },
        operating_expenses: { blocks: [{ x: 1828, top: 995, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Operating', size: 34, weight: 700 },
          { text: 'expenses', size: 34, weight: 700 },
          { text: '$value', size: 33, weight: 400 },
        ] }] },
        sm: { blocks: [{ x: 2460, top: 734, anchor: 'middle', lineGap: 8, lines: [
          { text: 'S&M', size: 32, weight: 700 },
          { text: '$value', size: 31, weight: 400 },
          { text: '32% of revenue', size: 28, weight: 400, color: NOTE },
          { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        rnd: { blocks: [{ x: 2460, top: 896, anchor: 'middle', lineGap: 8, lines: [
          { text: 'R&D', size: 32, weight: 700 },
          { text: '$value', size: 31, weight: 400 },
          { text: '21% of revenue', size: 28, weight: 400, color: NOTE },
          { text: '(3pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        ga: { blocks: [{ x: 2457, top: 1055, anchor: 'middle', lineGap: 8, lines: [
          { text: 'G&A', size: 32, weight: 700 },
          { text: '$value', size: 31, weight: 400 },
          { text: '10% of revenue', size: 28, weight: 400, color: NOTE },
          { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
        other_expense: { blocks: [{ x: 2457, top: 1219, anchor: 'middle', lineGap: 8, lines: [
          { text: 'Other', size: 32, weight: 700 },
          { text: '$value', size: 31, weight: 400 },
          { text: '6% of revenue', size: 28, weight: 400, color: NOTE },
          { text: '+4pp Y/Y', size: 28, weight: 400, color: NOTE },
        ] }] },
      },
    },
    nodes: [
      { id: 'aec', col: 0, order: 0, type: 'source', label: ['Architecture', 'Engineering', '& Construction'], value: 975, notes: ['+22% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'autocad', col: 0, order: 1, type: 'source', label: 'AutoCAD', value: 478, notes: ['+17% Y/Y', 'Computer-aided design', 'Including LT'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'manufacturing', col: 0, order: 2, type: 'source', label: 'Manufacturing', value: 381, notes: ['+20% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'media_entertainment', col: 0, order: 3, type: 'source', label: ['Media &', 'Entertainment'], value: 90, notes: ['+7% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'other_revenue', col: 0, order: 4, type: 'source', label: 'Other', value: 33, notes: ['+14% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1957, valueText: '$1,957M', notes: ['+19% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1791, valueText: '$1,791M', notes: ['92% margin', '+1pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 166 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 431, notes: ['22% margin', '(0pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1360, valueText: '($1,360M)' },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 316, notes: ['16% margin', '(2pp) Y/Y'] },
      { id: 'tax_other', col: 4, order: 1, type: 'cost', label: 'Tax & Other', value: 115 },
      { id: 'sm', col: 4, order: 2, type: 'cost', label: 'S&M', value: 636, notes: ['32% of revenue', '+0pp Y/Y'] },
      { id: 'rnd', col: 4, order: 3, type: 'cost', label: 'R&D', value: 420, notes: ['21% of revenue', '(3pp) Y/Y'] },
      { id: 'ga', col: 4, order: 4, type: 'cost', label: 'G&A', value: 191, notes: ['10% of revenue', '(1pp) Y/Y'] },
      { id: 'other_expense', col: 4, order: 5, type: 'cost', label: 'Other', value: 113, notes: ['6% of revenue', '+4pp Y/Y'] },
    ],
    links: [
      { source: 'aec', target: 'revenue', value: 975, width: 159.9, targetOrder: 0 },
      { source: 'autocad', target: 'revenue', value: 478, width: 78.392, targetOrder: 1 },
      { source: 'manufacturing', target: 'revenue', value: 381, width: 62.484, targetOrder: 2 },
      { source: 'media_entertainment', target: 'revenue', value: 90, width: 14.76, targetOrder: 3 },
      { source: 'other_revenue', target: 'revenue', value: 33, width: 5.412, targetOrder: 4 },
      { source: 'revenue', target: 'gross_profit', value: 1791, width: 293.724, sourceOrder: 0, targetOrder: 0, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
      { source: 'revenue', target: 'cost_of_revenue', value: 166, width: 27.224, sourceOrder: 1, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'gross_profit', target: 'operating_profit', value: 431, width: 70.684, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1360, width: 223.04, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 316, width: 51.824, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax_other', value: 115, width: 18.86, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 636, width: 104.304, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 420, width: 68.88, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 191, width: 31.324, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_expense', value: 113, width: 18.532, sourceOrder: 3, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'Autodesk · 2026 财年第四季度',
        meta: {
          title: 'Autodesk 2026 财年第四季度利润表',
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 1 月',
          titleTextLength: 1830,
        },
        nodes: {
          aec: { label: ['建筑、工程', '与施工'], notes: ['同比 +22%'] },
          autocad: { label: 'AutoCAD 产品', notes: ['同比 +17%', '计算机辅助设计', '包含 LT'] },
          manufacturing: { label: '制造', notes: ['同比 +20%'] },
          media_entertainment: { label: ['媒体与', '娱乐'], notes: ['同比 +7%'] },
          other_revenue: { label: '其他', notes: ['同比 +14%'] },
          revenue: { label: '收入', notes: ['同比 +19%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 92%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 22%', '同比 (0 个百分点)'] },
          operating_expenses: { label: ['运营', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 16%', '同比 (2 个百分点)'] },
          tax_other: { label: '税费及其他' },
          sm: { label: 'S&M 费用', notes: ['占收入 32%', '同比 +0 个百分点'] },
          rnd: { label: 'R&D 费用', notes: ['占收入 21%', '同比 (3 个百分点)'] },
          ga: { label: 'G&A 费用', notes: ['占收入 10%', '同比 (1 个百分点)'] },
          other_expense: { label: '其他', notes: ['占收入 6%', '同比 +4 个百分点'] },
        },
        layout: {
          labels: {
            aec: { blocks: [
              { x: 194, top: 469, anchor: 'middle', lineGap: 10, lines: [{ text: '建筑、工程', size: 41, weight: 700 }, { text: '与施工', size: 41, weight: 700 }] },
              { x: 432, top: 365, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 38, weight: 400 }, { text: '同比 +22%', size: 28, weight: 400, color: NOTE }] },
            ] },
            autocad: { blocks: [
              { x: 210, top: 772, anchor: 'middle', lineGap: 9, lines: [{ text: 'AutoCAD 产品', size: 39, weight: 700 }, { text: '计算机辅助设计', size: 28, weight: 400, color: NOTE }, { text: '包含 LT', size: 28, weight: 400, color: NOTE }] },
              { x: 423, top: 659, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 38, weight: 400 }, { text: '同比 +17%', size: 28, weight: 400, color: NOTE }] },
            ] },
            manufacturing: { blocks: [
              { x: 196, top: 969, anchor: 'middle', lineGap: 10, lines: [{ text: '制造', size: 41, weight: 700 }] },
              { x: 429, top: 862, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 38, weight: 400 }, { text: '同比 +20%', size: 28, weight: 400, color: NOTE }] },
            ] },
            media_entertainment: { blocks: [
              { x: 210, top: 1097, anchor: 'middle', lineGap: 10, lines: [{ text: '媒体与', size: 39, weight: 700 }, { text: '娱乐', size: 39, weight: 700 }] },
              { x: 429, top: 1050, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 37, weight: 400 }, { text: '同比 +7%', size: 28, weight: 400, color: NOTE }] },
            ] },
            other_revenue: { blocks: [
              { x: 196, top: 1259, anchor: 'middle', lineGap: 10, lines: [{ text: '其他', size: 38, weight: 700 }] },
              { x: 426, top: 1184, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 37, weight: 400 }, { text: '同比 +14%', size: 28, weight: 400, color: NOTE }] },
            ] },
            revenue: { blocks: [{ x: 890, top: 521, anchor: 'middle', lineGap: 10, lines: [{ text: '收入', size: 40, weight: 700 }, { text: '$value', size: 39, weight: 400 }, { text: '同比 +19%', size: 28, weight: 400, color: NOTE }] }] },
            gross_profit: { blocks: [{ x: 1361, top: 406, anchor: 'middle', lineGap: 10, lines: [{ text: '毛利润', size: 39, weight: 700 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 92%', size: 28, weight: 400, color: NOTE }, { text: '同比 +1 个百分点', size: 28, weight: 400, color: NOTE }] }] },
            operating_profit: { blocks: [{ x: 1828, top: 339, anchor: 'middle', lineGap: 10, lines: [{ text: '营业利润', size: 39, weight: 700 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 22%', size: 28, weight: 400, color: NOTE }, { text: '同比 (0 个百分点)', size: 28, weight: 400, color: NOTE }] }] },
            net_profit: { blocks: [{ x: 2359, top: 409, anchor: 'start', lineGap: 10, lines: [{ text: '净利润', size: 39, weight: 700 }, { text: '$value', size: 39, weight: 400 }, { text: '利润率 16%', size: 28, weight: 400, color: NOTE }, { text: '同比 (2 个百分点)', size: 28, weight: 400, color: NOTE }] }] },
            tax_other: { blocks: [{ x: 2452, top: 600, anchor: 'middle', lineGap: 8, lines: [{ text: '税费及其他', size: 32, weight: 700 }, { text: '$value', size: 31, weight: 400 }] }] },
            cost_of_revenue: { blocks: [{ x: 1357, top: 1100, anchor: 'middle', lineGap: 8, lines: [{ text: '收入', size: 34, weight: 700 }, { text: '成本', size: 34, weight: 700 }, { text: '$value', size: 33, weight: 400 }] }] },
            operating_expenses: { blocks: [{ x: 1828, top: 995, anchor: 'middle', lineGap: 8, lines: [{ text: '运营', size: 34, weight: 700 }, { text: '费用', size: 34, weight: 700 }, { text: '$value', size: 33, weight: 400 }] }] },
            sm: { blocks: [{ x: 2460, top: 734, anchor: 'middle', lineGap: 8, lines: [{ text: 'S&M 费用', size: 31, weight: 700 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 32%', size: 28, weight: 400, color: NOTE }, { text: '同比 +0 个百分点', size: 28, weight: 400, color: NOTE }] }] },
            rnd: { blocks: [{ x: 2460, top: 896, anchor: 'middle', lineGap: 8, lines: [{ text: 'R&D 费用', size: 31, weight: 700 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 21%', size: 28, weight: 400, color: NOTE }, { text: '同比 (3 个百分点)', size: 28, weight: 400, color: NOTE }] }] },
            ga: { blocks: [{ x: 2457, top: 1055, anchor: 'middle', lineGap: 8, lines: [{ text: 'G&A 费用', size: 31, weight: 700 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 10%', size: 28, weight: 400, color: NOTE }, { text: '同比 (1 个百分点)', size: 28, weight: 400, color: NOTE }] }] },
            other_expense: { blocks: [{ x: 2457, top: 1219, anchor: 'middle', lineGap: 8, lines: [{ text: '其他', size: 32, weight: 700 }, { text: '$value', size: 31, weight: 400 }, { text: '占收入 6%', size: 28, weight: 400, color: NOTE }, { text: '同比 +4 个百分点', size: 28, weight: 400, color: NOTE }] }] },
          },
        },
      },
    },
  });
})();
