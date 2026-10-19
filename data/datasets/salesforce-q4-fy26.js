/* ====================================================================
 *  Salesforce - Q4 FY26 income statement ($B)
 *  Reconstructed from input/processed/salesforce-q4-fy26.png as a fixed
 *  d3-sankey layout; the logo and business icons are source-cropped raster
 *  annotations (data/assets/raster-annotations/salesforce/q4-fy26-*).
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const CYAN = '#00a1e0';
  const CYAN_LABEL = '#009bd8';
  const CYAN_LINK = '#86c9de';
  const SALES = '#11cec0';
  const SALES_LINK = '#85d9d2';
  const SERVICE = '#d3669d';
  const SERVICE_LINK = '#ddb2cc';
  const PLATFORM = '#5f197a';
  const PLATFORM_LINK = '#ae91bf';
  const ORANGE = '#f28e2c';
  const ORANGE_LINK = '#facb96';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9dce9b';
  const RED = '#cc0000';
  const RED_LABEL = '#9d1600';
  const RED_LINK = '#e28486';
  const NOTE = '#6f6f6f';
  const RIGHT_LABEL_X = 2360;

  const zhLayoutLabels = {
    sales: {
      blocks: [
        { x: 450, top: 398, anchor: 'end', lineGap: 9, lines: [{ text: '销售', size: 34, weight: 700, color: SALES }] },
        { x: 502, top: 294, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 35, weight: 400, color: SALES }, { text: '同比 +9%', size: 24, weight: 400, color: NOTE }] },
      ],
    },
    service: {
      blocks: [
        { x: 450, top: 605, anchor: 'end', lineGap: 9, lines: [{ text: '服务', size: 34, weight: 700, color: SERVICE }] },
        { x: 502, top: 508, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 35, weight: 400, color: SERVICE }, { text: '同比 +9%', size: 24, weight: 400, color: NOTE }] },
      ],
    },
    platform_slack_other: {
      blocks: [
        { x: 450, top: 800, anchor: 'end', lineGap: 8, lines: [{ text: '平台', size: 33, weight: 700, color: PLATFORM }, { text: 'Slack 与其他', size: 33, weight: 700, color: PLATFORM }, { text: 'Informatica 数据', size: 22, weight: 400, color: NOTE }] },
        { x: 502, top: 710, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 35, weight: 400, color: PLATFORM }, { text: '同比 +38%', size: 24, weight: 400, color: NOTE }] },
      ],
    },
    marketing_commerce: {
      blocks: [
        { x: 450, top: 996, anchor: 'end', lineGap: 8, lines: [{ text: '营销与', size: 33, weight: 700, color: ORANGE }, { text: '商务', size: 33, weight: 700, color: ORANGE }] },
        { x: 502, top: 925, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 35, weight: 400, color: ORANGE }, { text: '同比 +1%', size: 24, weight: 400, color: NOTE }] },
      ],
    },
    integration_analytics: {
      blocks: [
        { x: 450, top: 1196, anchor: 'end', lineGap: 8, lines: [{ text: '集成与', size: 33, weight: 700, color: CYAN_LABEL }, { text: '分析', size: 33, weight: 700, color: CYAN_LABEL }, { text: 'MuleSoft、Tableau', size: 22, weight: 400, color: NOTE }] },
        { x: 502, top: 1126, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 35, weight: 400, color: CYAN_LABEL }, { text: '同比 +4%', size: 24, weight: 400, color: NOTE }] },
      ],
    },
    subscription_support: {
      blocks: [
        { x: 862, top: 417, anchor: 'middle', lineGap: 10, lines: [{ text: '订阅', size: 40, weight: 700, color: CYAN_LABEL }, { text: '与支持', size: 40, weight: 700, color: CYAN_LABEL }, { text: '$value', size: 37, weight: 400, color: CYAN_LABEL }, { text: '同比 +13%', size: 25, weight: 400, color: NOTE }] },
      ],
    },
    professional_services: {
      blocks: [
        { x: 862, top: 1192, anchor: 'middle', lineGap: 8, lines: [{ text: '专业', size: 34, weight: 700, color: CYAN_LABEL }, { text: '服务', size: 34, weight: 700, color: CYAN_LABEL }, { text: '$value', size: 34, weight: 400, color: CYAN_LABEL }, { text: '同比 (3%)', size: 24, weight: 400, color: NOTE }] },
      ],
    },
    revenue: {
      blocks: [
        { x: 1223, top: 525, anchor: 'middle', lineGap: 10, lines: [{ text: '收入', size: 40, weight: 700, color: CYAN_LABEL }, { text: '$value', size: 37, weight: 400, color: CYAN_LABEL }, { text: '同比 +12%', size: 25, weight: 400, color: NOTE }] },
      ],
    },
    gross_profit: {
      blocks: [
        { x: 1584, top: 403, anchor: 'middle', lineGap: 9, lines: [{ text: '毛利润', size: 36, weight: 700, color: GREEN_LABEL }, { text: '$value', size: 36, weight: 400, color: GREEN_LABEL }, { text: '利润率 78%', size: 25, weight: 400, color: NOTE }, { text: '同比 (0 个百分点)', size: 25, weight: 400, color: NOTE }] },
      ],
    },
    operating_profit: {
      blocks: [
        { x: 1950, top: 303, anchor: 'middle', lineGap: 9, lines: [{ text: '营业利润', size: 36, weight: 700, color: GREEN_LABEL }, { text: '$value', size: 36, weight: 400, color: GREEN_LABEL }, { text: '利润率 17%', size: 25, weight: 400, color: NOTE }, { text: '同比 (2 个百分点)', size: 25, weight: 400, color: NOTE }] },
      ],
    },
    other: {
      blocks: [
        { x: 2205, top: 565, anchor: 'middle', lineGap: 8, lines: [{ text: '其他', size: 30, weight: 700, color: GREEN_LABEL }, { text: '$value', size: 29, weight: 400, color: GREEN_LABEL }] },
      ],
    },
    net_profit: {
      blocks: [
        { x: 2425, top: 410, anchor: 'start', lineGap: 9, lines: [{ text: '净利润', size: 38, weight: 700, color: GREEN_LABEL }, { text: '$value', size: 36, weight: 400, color: GREEN_LABEL }, { text: '利润率 17%', size: 25, weight: 400, color: NOTE }, { text: '同比 +0 个百分点', size: 25, weight: 400, color: NOTE }] },
      ],
    },
    cost_of_revenue: {
      blocks: [
        { x: 1584, top: 1182, anchor: 'middle', lineGap: 8, lines: [{ text: '收入', size: 32, weight: 700, color: RED_LABEL }, { text: '成本', size: 32, weight: 700, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL }] },
      ],
    },
    operating_expenses: {
      blocks: [
        { x: 1960, top: 974, anchor: 'middle', lineGap: 8, lines: [{ text: '运营', size: 32, weight: 700, color: RED_LABEL }, { text: '费用', size: 32, weight: 700, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL }] },
      ],
    },
    tax: {
      blocks: [
        { x: 2430, top: 625, anchor: 'start', lineGap: 8, lines: [{ text: '税费', size: 30, weight: 700, color: RED_LABEL }, { text: '$value', size: 29, weight: 400, color: RED_LABEL }] },
      ],
    },
    sm: {
      blocks: [
        { x: RIGHT_LABEL_X, top: 788, anchor: 'start', lineGap: 8, lines: [{ text: '销售与市场 ($4.0B)', size: 29, weight: 700, color: RED_LABEL }, { text: '占收入 36%', size: 25, weight: 400, color: NOTE }, { text: '同比 +1 个百分点', size: 25, weight: 400, color: NOTE }] },
      ],
    },
    rnd: {
      blocks: [
        { x: RIGHT_LABEL_X, top: 980, anchor: 'start', lineGap: 8, lines: [{ text: '研发 ($1.6B)', size: 29, weight: 700, color: RED_LABEL }, { text: '占收入 14%', size: 25, weight: 400, color: NOTE }, { text: '同比 +0 个百分点', size: 25, weight: 400, color: NOTE }] },
      ],
    },
    ga: {
      blocks: [
        { x: RIGHT_LABEL_X, top: 1122, anchor: 'start', lineGap: 8, lines: [{ text: '管理费用 ($0.9B)', size: 29, weight: 700, color: RED_LABEL }, { text: '占收入 8%', size: 25, weight: 400, color: NOTE }, { text: '同比 +0 个百分点', size: 25, weight: 400, color: NOTE }] },
      ],
    },
    restructuring: {
      blocks: [
        { x: RIGHT_LABEL_X, top: 1270, anchor: 'start', lineGap: 8, lines: [{ text: '重组', size: 29, weight: 700, color: RED_LABEL }, { text: '($0.3B)', size: 29, weight: 400, color: RED_LABEL }, { text: '占收入 3%', size: 25, weight: 400, color: NOTE }, { text: '同比 (0 个百分点)', size: 25, weight: 400, color: NOTE }] },
      ],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'salesforce-q4-fy26',
    name: 'Salesforce · Q4 FY26',
    meta: {
      title: 'Salesforce Q4 FY26 Income Statement',
      titleSize: 118,
      titleY: 145,
      period: 'Q4 FY26',
      periodNote: 'Ending Jan. 2026',
      periodX: 2505,
      periodY: 216,
      periodNoteY: 258,
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/salesforce-q4-fy26.png', width: 2667, height: 1500 },
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      labelWeight: null,
      valueWeight: null,
      linkOpacity: 1,
      palette: {
        source: { node: CYAN, label: CYAN_LABEL },
        hub: { node: CYAN, label: CYAN_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: CYAN_LINK,
        hub: CYAN_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      allowRasterAnnotations: true,
    },
    rasterAnnotations: [
      { key: 'salesforce-q4-fy26-company-logo', href: 'data/assets/raster-annotations/salesforce/q4-fy26-company-logo.png', x: 1042, y: 231, width: 339, height: 239, clearance: true },
      { key: 'salesforce-q4-fy26-sales-icon', href: 'data/assets/raster-annotations/salesforce/q4-fy26-sales-icon.png', x: 222, y: 364, width: 109, height: 110, clearance: true },
      { key: 'salesforce-q4-fy26-service-icon', href: 'data/assets/raster-annotations/salesforce/q4-fy26-service-icon.png', x: 196, y: 588, width: 104, height: 88, clearance: true },
      { key: 'salesforce-q4-fy26-slack-icon', href: 'data/assets/raster-annotations/salesforce/q4-fy26-slack-icon.png', x: 67, y: 770, width: 120, height: 120, clearance: true },
      { key: 'salesforce-q4-fy26-marketing-commerce-icon', href: 'data/assets/raster-annotations/salesforce/q4-fy26-marketing-commerce-icon.png', x: 104, y: 989, width: 112, height: 116, clearance: true },
      { key: 'salesforce-q4-fy26-mulesoft-icon', href: 'data/assets/raster-annotations/salesforce/q4-fy26-mulesoft-icon.png', x: 100, y: 1156, width: 111, height: 111, clearance: true },
      { key: 'salesforce-q4-fy26-tableau-icon', href: 'data/assets/raster-annotations/salesforce/q4-fy26-tableau-icon.png', x: 136, y: 1279, width: 94, height: 93, clearance: true },
    ],

    layout: {
      scale: 34,
      nodes: {
        sales: { x: 468, y: 390, width: 68, height: 78 },
        service: { x: 468, y: 594, width: 68, height: 85 },
        platform_slack_other: { x: 468, y: 804, width: 68, height: 92 },
        marketing_commerce: { x: 468, y: 1023, width: 68, height: 48 },
        integration_analytics: { x: 468, y: 1208, width: 68, height: 61 },
        subscription_support: { x: 828, y: 600, width: 68, height: 364 },
        professional_services: { x: 828, y: 1164, width: 68, height: 17 },
        revenue: { x: 1189, y: 675, width: 68, height: 381 },
        gross_profit: { x: 1550, y: 599, width: 68, height: 296 },
        cost_of_revenue: { x: 1550, y: 1093, width: 68, height: 85 },
        operating_profit: { x: 1911, y: 517, width: 68, height: 65 },
        operating_expenses: { x: 1911, y: 737, width: 68, height: 231 },
        other: { x: 2169, y: 517, width: 68, height: 27 },
        net_profit: { x: 2271, y: 435, width: 69, height: 68 },
        tax: { x: 2271, y: 671, width: 69, height: 24 },
        sm: { x: 2271, y: 778, width: 69, height: 136 },
        rnd: { x: 2271, y: 1001, width: 69, height: 54 },
        ga: { x: 2271, y: 1144, width: 69, height: 31 },
        restructuring: { x: 2271, y: 1282, width: 69, height: 10 },
      },
      labels: {
        sales: {
          blocks: [
            { x: 450, top: 398, anchor: 'end', lineGap: 9, lines: [{ text: 'Sales', size: 34, weight: 700, color: SALES }] },
            { x: 502, top: 294, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 35, weight: 400, color: SALES }, { text: '+9% Y/Y', size: 24, weight: 400, color: NOTE }] },
          ],
        },
        service: {
          blocks: [
            { x: 450, top: 605, anchor: 'end', lineGap: 9, lines: [{ text: 'Service', size: 34, weight: 700, color: SERVICE }] },
            { x: 502, top: 508, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 35, weight: 400, color: SERVICE }, { text: '+9% Y/Y', size: 24, weight: 400, color: NOTE }] },
          ],
        },
        platform_slack_other: {
          blocks: [
            { x: 450, top: 795, anchor: 'end', lineGap: 8, lines: [{ text: 'Platform', size: 33, weight: 700, color: PLATFORM }, { text: 'Slack & Other', size: 33, weight: 700, color: PLATFORM }, { text: 'Informatica', size: 22, weight: 400, color: NOTE }] },
            { x: 502, top: 710, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 35, weight: 400, color: PLATFORM }, { text: '+38% Y/Y', size: 24, weight: 400, color: NOTE }] },
          ],
        },
        marketing_commerce: {
          blocks: [
            { x: 450, top: 990, anchor: 'end', lineGap: 8, lines: [{ text: 'Marketing &', size: 33, weight: 700, color: ORANGE }, { text: 'Commerce', size: 33, weight: 700, color: ORANGE }] },
            { x: 502, top: 925, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 35, weight: 400, color: ORANGE }, { text: '+1% Y/Y', size: 24, weight: 400, color: NOTE }] },
          ],
        },
        integration_analytics: {
          blocks: [
            { x: 450, top: 1190, anchor: 'end', lineGap: 8, lines: [{ text: 'Integration', size: 33, weight: 700, color: CYAN_LABEL }, { text: '& Analytics', size: 33, weight: 700, color: CYAN_LABEL }, { text: 'Mulesoft, Tableau', size: 22, weight: 400, color: NOTE }] },
            { x: 502, top: 1126, anchor: 'middle', lineGap: 10, lines: [{ text: '$value', size: 35, weight: 400, color: CYAN_LABEL }, { text: '+4% Y/Y', size: 24, weight: 400, color: NOTE }] },
          ],
        },
        subscription_support: {
          blocks: [
            { x: 862, top: 417, anchor: 'middle', lineGap: 10, lines: [{ text: 'Subscription', size: 40, weight: 700, color: CYAN_LABEL }, { text: 'and support', size: 40, weight: 700, color: CYAN_LABEL }, { text: '$value', size: 37, weight: 400, color: CYAN_LABEL }, { text: '+13% Y/Y', size: 25, weight: 400, color: NOTE }] },
          ],
        },
        professional_services: {
          blocks: [
            { x: 862, top: 1190, anchor: 'middle', lineGap: 8, lines: [{ text: 'Professional', size: 34, weight: 700, color: CYAN_LABEL }, { text: 'services', size: 34, weight: 700, color: CYAN_LABEL }, { text: '$value', size: 34, weight: 400, color: CYAN_LABEL }, { text: '(3%) Y/Y', size: 24, weight: 400, color: NOTE }] },
          ],
        },
        revenue: {
          blocks: [
            { x: 1223, top: 525, anchor: 'middle', lineGap: 10, lines: [{ text: 'Revenue', size: 40, weight: 700, color: CYAN_LABEL }, { text: '$value', size: 37, weight: 400, color: CYAN_LABEL }, { text: '+12% Y/Y', size: 25, weight: 400, color: NOTE }] },
          ],
        },
        gross_profit: {
          blocks: [
            { x: 1584, top: 403, anchor: 'middle', lineGap: 9, lines: [{ text: 'Gross profit', size: 36, weight: 700, color: GREEN_LABEL }, { text: '$value', size: 36, weight: 400, color: GREEN_LABEL }, { text: '78% margin', size: 25, weight: 400, color: NOTE }, { text: '(0pp) Y/Y', size: 25, weight: 400, color: NOTE }] },
          ],
        },
        operating_profit: {
          blocks: [
            { x: 1950, top: 303, anchor: 'middle', lineGap: 9, lines: [{ text: 'Operating profit', size: 36, weight: 700, color: GREEN_LABEL }, { text: '$value', size: 36, weight: 400, color: GREEN_LABEL }, { text: '17% margin', size: 25, weight: 400, color: NOTE }, { text: '(2pp) Y/Y', size: 25, weight: 400, color: NOTE }] },
          ],
        },
        other: {
          blocks: [
            { x: 2205, top: 565, anchor: 'middle', lineGap: 8, lines: [{ text: 'Other', size: 30, weight: 700, color: GREEN_LABEL }, { text: '$value', size: 29, weight: 400, color: GREEN_LABEL }] },
          ],
        },
        net_profit: {
          blocks: [
            { x: 2425, top: 410, anchor: 'start', lineGap: 9, lines: [{ text: 'Net profit', size: 38, weight: 700, color: GREEN_LABEL }, { text: '$value', size: 36, weight: 400, color: GREEN_LABEL }, { text: '17% margin', size: 25, weight: 400, color: NOTE }, { text: '+0pp Y/Y', size: 25, weight: 400, color: NOTE }] },
          ],
        },
        cost_of_revenue: {
          blocks: [
            { x: 1584, top: 1182, anchor: 'middle', lineGap: 8, lines: [{ text: 'Cost of', size: 32, weight: 700, color: RED_LABEL }, { text: 'revenue', size: 32, weight: 700, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL }] },
          ],
        },
        operating_expenses: {
          blocks: [
            { x: 1960, top: 974, anchor: 'middle', lineGap: 8, lines: [{ text: 'Operating', size: 32, weight: 700, color: RED_LABEL }, { text: 'expenses', size: 32, weight: 700, color: RED_LABEL }, { text: '$value', size: 32, weight: 400, color: RED_LABEL }] },
          ],
        },
        tax: {
          blocks: [
            { x: 2430, top: 625, anchor: 'start', lineGap: 8, lines: [{ text: 'Tax', size: 30, weight: 700, color: RED_LABEL }, { text: '$value', size: 29, weight: 400, color: RED_LABEL }] },
          ],
        },
        sm: {
          blocks: [
            { x: RIGHT_LABEL_X, top: 788, anchor: 'start', lineGap: 8, lines: [{ text: 'S&M ($4.0B)', size: 29, weight: 700, color: RED_LABEL }, { text: '36% of revenue', size: 25, weight: 400, color: NOTE }, { text: '+1pp Y/Y', size: 25, weight: 400, color: NOTE }] },
          ],
        },
        rnd: {
          blocks: [
            { x: RIGHT_LABEL_X, top: 980, anchor: 'start', lineGap: 8, lines: [{ text: 'R&D ($1.6B)', size: 29, weight: 700, color: RED_LABEL }, { text: '14% of revenue', size: 25, weight: 400, color: NOTE }, { text: '+0pp Y/Y', size: 25, weight: 400, color: NOTE }] },
          ],
        },
        ga: {
          blocks: [
            { x: RIGHT_LABEL_X, top: 1122, anchor: 'start', lineGap: 8, lines: [{ text: 'G&A ($0.9B)', size: 29, weight: 700, color: RED_LABEL }, { text: '8% of revenue', size: 25, weight: 400, color: NOTE }, { text: '+0pp Y/Y', size: 25, weight: 400, color: NOTE }] },
          ],
        },
        restructuring: {
          blocks: [
            { x: RIGHT_LABEL_X, top: 1270, anchor: 'start', lineGap: 8, lines: [{ text: 'Restructuring', size: 29, weight: 700, color: RED_LABEL }, { text: '($0.3B)', size: 29, weight: 400, color: RED_LABEL }, { text: '3% of revenue', size: 25, weight: 400, color: NOTE }, { text: '(0pp) Y/Y', size: 25, weight: 400, color: NOTE }] },
          ],
        },
      },
    },

    nodes: [
      { id: 'sales', col: 0, order: 0, type: 'source', label: 'Sales', value: 2.3, color: SALES, labelColor: SALES, linkTint: SALES_LINK },
      { id: 'service', col: 0, order: 1, type: 'source', label: 'Service', value: 2.5, color: SERVICE, labelColor: SERVICE, linkTint: SERVICE_LINK },
      { id: 'platform_slack_other', col: 0, order: 2, type: 'source', label: ['Platform', 'Slack & Other'], value: 2.7, notes: ['Informatica'], color: PLATFORM, labelColor: PLATFORM, linkTint: PLATFORM_LINK },
      { id: 'marketing_commerce', col: 0, order: 3, type: 'source', label: ['Marketing &', 'Commerce'], value: 1.4, color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'integration_analytics', col: 0, order: 4, type: 'source', label: ['Integration', '& Analytics'], value: 1.8, notes: ['Mulesoft, Tableau'], color: CYAN, labelColor: CYAN_LABEL, linkTint: CYAN_LINK },
      { id: 'subscription_support', col: 1, order: 0, type: 'source', label: ['Subscription', 'and support'], value: 10.7, notes: ['+13% Y/Y'], color: CYAN, labelColor: CYAN_LABEL, linkTint: CYAN_LINK },
      { id: 'professional_services', col: 1, order: 1, type: 'source', label: ['Professional', 'services'], value: 0.5, notes: ['(3%) Y/Y'], color: CYAN, labelColor: CYAN_LABEL, linkTint: CYAN_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 11.2, notes: ['+12% Y/Y'], color: CYAN, labelColor: CYAN_LABEL, linkTint: CYAN_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 8.7, notes: ['78% margin', '(0pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 2.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 1.9, notes: ['17% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 6.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 0, type: 'profit', label: 'Other', value: 0.8, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 1.9, notes: ['17% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 6, order: 2, type: 'cost', label: 'S&M', value: 4.0, notes: ['36% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 3, type: 'cost', label: 'R&D', value: 1.6, notes: ['14% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 6, order: 4, type: 'cost', label: 'G&A', value: 0.9, notes: ['8% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'restructuring', col: 6, order: 5, type: 'cost', label: 'Restructuring', value: 0.3, notes: ['3% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'sales', target: 'subscription_support', value: 2.3, width: 78, targetOrder: 0, linkTint: { left: SALES_LINK, right: SALES_LINK } },
      { source: 'service', target: 'subscription_support', value: 2.5, width: 85, targetOrder: 1, linkTint: { left: SERVICE_LINK, right: SERVICE_LINK } },
      { source: 'platform_slack_other', target: 'subscription_support', value: 2.7, width: 92, targetOrder: 2, linkTint: { left: PLATFORM_LINK, right: PLATFORM_LINK } },
      { source: 'marketing_commerce', target: 'subscription_support', value: 1.4, width: 48, targetOrder: 3, linkTint: { left: ORANGE_LINK, right: ORANGE_LINK } },
      { source: 'integration_analytics', target: 'subscription_support', value: 1.8, width: 61, targetOrder: 4, linkTint: { left: CYAN_LINK, right: CYAN_LINK } },
      { source: 'subscription_support', target: 'revenue', value: 10.7, width: 364, sourceOrder: 0, targetOrder: 0, linkTint: { left: CYAN_LINK, right: CYAN_LINK } },
      { source: 'professional_services', target: 'revenue', value: 0.5, width: 17, sourceOrder: 0, targetOrder: 1, linkTint: { left: CYAN_LINK, right: CYAN_LINK } },
      { source: 'revenue', target: 'gross_profit', value: 8.7, width: 296, sourceOrder: 0, targetOrder: 0, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
      { source: 'revenue', target: 'cost_of_revenue', value: 2.5, width: 85, sourceOrder: 1, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'gross_profit', target: 'operating_profit', value: 1.9, width: 65, sourceOrder: 0, targetOrder: 0, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
      { source: 'gross_profit', target: 'operating_expenses', value: 6.8, width: 231, sourceOrder: 1, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'operating_profit', target: 'net_profit', value: 1.2, width: 41, sourceOrder: 0, targetOrder: 0, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
      { source: 'operating_profit', target: 'tax', value: 0.7, width: 24, sourceOrder: 1, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'other', target: 'net_profit', value: 0.8, width: 27, sourceOrder: 0, targetOrder: 1, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
      { source: 'operating_expenses', target: 'sm', value: 4.0, width: 136, sourceOrder: 0, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'operating_expenses', target: 'rnd', value: 1.6, width: 54, sourceOrder: 1, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'operating_expenses', target: 'ga', value: 0.9, width: 31, sourceOrder: 2, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'operating_expenses', target: 'restructuring', value: 0.3, width: 10, sourceOrder: 3, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
    ],

    i18n: {
      zh: {
        name: 'Salesforce · 2026 财年第四季度',
        meta: {
          title: 'Salesforce 2026 财年第四季度利润表',
          titleSize: 104,
          period: '2026 财年第四季度',
          periodX: 2390,
          periodNote: '截至 2026 年 1 月',
        },
        nodes: {
          sales: { label: '销售云', notes: ['同比 +9%'] },
          service: { label: '服务云', notes: ['同比 +9%'] },
          platform_slack_other: { label: ['平台', 'Slack 与其他'], notes: ['同比 +38%', 'Informatica 数据'] },
          marketing_commerce: { label: ['营销与', '商务'], notes: ['同比 +1%'] },
          integration_analytics: { label: ['集成与', '分析'], notes: ['同比 +4%', 'MuleSoft、Tableau'] },
          subscription_support: { label: '订阅与支持', notes: ['同比 +13%'] },
          professional_services: { label: '专业服务', notes: ['同比 (3%)'] },
          revenue: { label: '收入', notes: ['同比 +12%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 78%', '同比 (0 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 17%', '同比 (2 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 17%', '同比 +0 个百分点'] },
          tax: { label: '税费' },
          sm: { label: '销售与市场', notes: ['占收入 36%', '同比 +1 个百分点'] },
          rnd: { label: '研发', notes: ['占收入 14%', '同比 +0 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 8%', '同比 +0 个百分点'] },
          restructuring: { label: '重组', notes: ['占收入 3%', '同比 (0 个百分点)'] },
        },
        layout: {
          labels: zhLayoutLabels,
        },
      },
    },
  });
})();
