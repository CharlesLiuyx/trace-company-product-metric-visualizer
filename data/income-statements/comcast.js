/* Pure income-statement SSOT records. Financial data only — Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push(
    {
      key: 'comcast-q4-fy25',
      company: 'Comcast',
      period: 'Q4 FY25',
      periodNote: 'Quarter ended Dec. 31, 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/comcast-q4-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 32.31,
        notes: ['+4% Y/Y in the source visualization.'],
        items: [
          {
            id: 'connectivity',
            label: 'Connectivity',
            value: 20.2,
            notes: ['(1%) Y/Y'],
            children: [
              { id: 'residential_connectivity', label: 'Residential Connectivity', value: 17.6, notes: ['(2%) Y/Y'] },
              { id: 'comcast_business', label: 'Comcast Business', value: 2.6, notes: ['+6% Y/Y'] },
            ],
          },
          { id: 'corporate', label: 'Corporate', value: 0.9, notes: ['+9% Y/Y'] },
          {
            id: 'content_experiences',
            label: 'Content & Experiences',
            value: 13.5,
            notes: ['+5% Y/Y'],
            children: [
              { id: 'media', label: 'Media', value: 7.6, notes: ['+6% Y/Y'] },
              { id: 'studios', label: 'Studios', value: 3.0, notes: ['(7%) Y/Y'] },
              { id: 'parks', label: 'Parks', value: 2.9, notes: ['+22% Y/Y'] },
            ],
          },
          {
            label: 'Eliminations',
            value: -2.3,
            notes: ['The source visualization shows $0.8B and $1.5B intersegment-elimination bridges.'],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'programming_production', label: 'Programming & production', value: 10.305 },
        operatingExpenses: {
          total: 18.517,
          items: [
            { id: 'other_operating_administrative', label: 'Other operating & administrative', value: 11.903 },
            { id: 'advertising', label: 'Advertising', value: 2.427 },
            { id: 'depreciation', label: 'Depreciation', value: 2.393 },
            { id: 'amortization', label: 'Amortization', value: 1.794 },
          ],
        },
        tax: { id: 'tax', label: 'Income tax expense', value: 0.089 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 1.328,
        items: [
          { id: 'interest', label: 'Interest expense', value: 1.126 },
          { id: 'other', label: 'Investment and other income (loss), net', value: 0.202 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 22.005, notes: ['68% margin', '(0pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 3.488, notes: ['11% margin', '(5pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.071, notes: ['6% margin', '(8pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 12 月 31 日的季度',
          revenue: {
            notes: ['来源可视化显示同比 +4%'],
            items: [
              {
                id: 'connectivity',
                label: '连接业务',
                notes: ['同比 (1%)'],
                children: [
                  { id: 'residential_connectivity', label: '住宅连接业务', notes: ['同比 (2%)'] },
                  { id: 'comcast_business', label: 'Comcast 商务', notes: ['同比 +6%'] },
                ],
              },
              { id: 'corporate', label: '企业及其他', notes: ['同比 +9%'] },
              {
                id: 'content_experiences',
                label: '内容与体验',
                notes: ['同比 +5%'],
                children: [
                  { id: 'media', label: '媒体', notes: ['同比 +6%'] },
                  { id: 'studios', label: '影视工作室', notes: ['同比 (7%)'] },
                  { id: 'parks', label: '主题公园', notes: ['同比 +22%'] },
                ],
              },
              { label: '抵销', notes: ['来源可视化显示 $0.8B 和 $1.5B 的分部间抵销桥。'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '节目制作' },
            operatingExpenses: {
              items: [
                { id: 'other_operating_administrative', label: '其他运营及管理' },
                { id: 'advertising', label: '广告' },
                { id: 'depreciation', label: '折旧' },
                { id: 'amortization', label: '摊销' },
              ],
            },
            tax: { label: '所得税费用' },
          },
          otherExpenses: {
            items: [
              { id: 'interest', label: '利息费用' },
              { id: 'other', label: '投资及其他损益净额' },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 68%', '同比 (0 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 11%', '同比 (5 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 6%', '同比 (8 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
