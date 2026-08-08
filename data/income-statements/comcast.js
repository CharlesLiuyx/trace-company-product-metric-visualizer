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
    },
    {
      key: 'comcast-q1-fy26',
      company: 'Comcast',
      period: 'Q1 FY26',
      periodNote: 'Quarter ended Mar. 31, 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/comcast-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 31.5,
        notes: ['+5% Y/Y in the source visualization.'],
        items: [
          {
            id: 'connectivity',
            label: 'Connectivity',
            value: 20.0,
            notes: ['(1%) Y/Y'],
            children: [
              { id: 'residential_connectivity', label: 'Residential Connectivity', value: 17.3, notes: ['(2%) Y/Y'] },
              { id: 'comcast_business', label: 'Comcast Business', value: 2.6, notes: ['+6% Y/Y'] },
            ],
          },
          { id: 'corporate', label: 'Corporate', value: 1.1, notes: ['+11% Y/Y'] },
          {
            id: 'content_experiences',
            label: 'Content & Experiences',
            value: 13.0,
            notes: ['+41% Y/Y'],
            children: [
              { id: 'media', label: 'Media', value: 7.3, notes: ['+61% Y/Y'] },
              { id: 'studios', label: 'Studios', value: 3.4, notes: ['+21% Y/Y'] },
              { id: 'parks', label: 'Parks', value: 2.3, notes: ['+24% Y/Y'] },
            ],
          },
          {
            label: 'Eliminations',
            value: -2.6,
            notes: ['The source visualization shows $1.1B and $1.5B intersegment-elimination bridges.'],
          },
        ],
        breakdowns: [
          {
            id: 'source_elimination_magnitudes',
            label: 'Source elimination magnitudes',
            total: 31.5,
            items: [
              { id: 'eliminations_content', label: 'Content & Experiences eliminations', value: 1.1 },
              { id: 'eliminations_gross', label: 'Consolidated eliminations', value: 1.5 },
              { label: 'Revenue net of displayed elimination magnitudes', value: 28.9 },
            ],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'programming_production', label: 'Programming & production', value: 10.9 },
        operatingExpenses: {
          total: 16.4,
          items: [
            { id: 'other_operating_administrative', label: 'Other operating & administrative', value: 10.4 },
            { id: 'depreciation', label: 'Depreciation', value: 2.3 },
            { id: 'advertising', label: 'Advertising', value: 2.2 },
            { id: 'amortization', label: 'Amortization', value: 1.5 },
          ],
        },
        tax: { id: 'tax', label: 'Income tax expense', value: 0.7 },
      },
      otherIncome: {
        total: 0,
        items: [],
      },
      otherExpenses: {
        total: 1.4,
        items: [
          { id: 'interest', label: 'Interest expense', value: 1.1 },
          { id: 'other', label: 'Investment and other income (loss), net', value: 0.3 },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 20.6, notes: ['65% margin', '(6pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 4.1, notes: ['13% margin', '(6pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 2.0, notes: ['6% margin', '(5pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月 31 日的季度',
          revenue: {
            notes: ['来源可视化显示同比 +5%'],
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
              { id: 'corporate', label: '企业及其他', notes: ['同比 +11%'] },
              {
                id: 'content_experiences',
                label: '内容与体验',
                notes: ['同比 +41%'],
                children: [
                  { id: 'media', label: '媒体', notes: ['同比 +61%'] },
                  { id: 'studios', label: '影视工作室', notes: ['同比 +21%'] },
                  { id: 'parks', label: '主题公园', notes: ['同比 +24%'] },
                ],
              },
              { label: '抵销', notes: ['来源可视化显示 $1.1B 和 $1.5B 的分部间抵销桥。'] },
            ],
            breakdowns: [
              {
                id: 'source_elimination_magnitudes',
                label: '来源抵销金额',
                items: [
                  { id: 'eliminations_content', label: '内容与体验抵销' },
                  { id: 'eliminations_gross', label: '合并抵销' },
                  { label: '扣除图示抵销金额后的收入' },
                ],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '节目制作' },
            operatingExpenses: {
              items: [
                { id: 'other_operating_administrative', label: '其他运营及管理' },
                { id: 'depreciation', label: '折旧' },
                { id: 'advertising', label: '广告' },
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
            gross: { label: '毛利润', notes: ['利润率 65%', '同比 (6 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 13%', '同比 (6 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 6%', '同比 (5 个百分点)'] },
          },
        },
      },
    },
    {
      key: 'comcast-q2-fy26',
      company: 'Comcast',
      period: 'Q2 FY26',
      periodNote: 'Quarter ended Jun. 30, 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/comcast-q2-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 29.9,
        notes: ['(1%) Y/Y in the source visualization.'],
        items: [
          {
            id: 'connectivity',
            label: 'Connectivity',
            value: 19.8,
            notes: ['(3%) Y/Y'],
            children: [
              { id: 'residential_connectivity', label: 'Residential Connectivity', value: 17.1, notes: ['(4%) Y/Y'] },
              { id: 'comcast_business', label: 'Comcast Business', value: 2.7, notes: ['+4% Y/Y'] },
            ],
          },
          { id: 'corporate', label: 'Corporate', value: 0.5, notes: ['+14% Y/Y'] },
          {
            id: 'content_experiences',
            label: 'Content & Experiences',
            value: 10.7,
            notes: ['+23% Y/Y'],
            children: [
              { id: 'media', label: 'Media', value: 5.7, notes: ['+25% Y/Y'] },
              { id: 'studios', label: 'Studios', value: 3.0, notes: ['+25% Y/Y'] },
              { id: 'parks', label: 'Parks', value: 2.4, notes: ['+3% Y/Y'] },
              { label: 'Content & Experiences eliminations', value: -0.4 },
            ],
          },
          {
            label: 'Eliminations and consolidation adjustments',
            value: -1.1,
            notes: ['Balances the source visualization primary revenue view; the two displayed elimination bridges are retained independently below.'],
          },
        ],
        breakdowns: [
          {
            id: 'source_elimination_magnitudes',
            label: 'Source elimination magnitudes',
            total: 29.9,
            items: [
              { id: 'eliminations_content', label: 'Content & Experiences eliminations', value: 0.4 },
              { id: 'eliminations_gross', label: 'Consolidated eliminations', value: 1.3 },
              { label: 'Revenue net of displayed elimination magnitudes', value: 28.2 },
            ],
          },
        ],
      },
      costs: {
        costOfRevenue: { id: 'programming_production', label: 'Programming & production', value: 8.4 },
        operatingExpenses: {
          total: 16.4,
          items: [
            { id: 'other_operating_administrative', label: 'Other operating & administrative', value: 10.4 },
            { id: 'depreciation', label: 'Depreciation', value: 2.3 },
            { id: 'advertising', label: 'Advertising', value: 2.4 },
            { id: 'amortization', label: 'Amortization', value: 1.3 },
          ],
        },
        tax: { id: 'tax', label: 'Income tax expense', value: 1.2 },
      },
      otherIncome: {
        total: 0.5,
        items: [{ id: 'other', label: 'Investment and other income (loss), net', value: 0.5 }],
      },
      otherExpenses: {
        total: 1.1,
        items: [{ id: 'interest', label: 'Interest expense', value: 1.1 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 21.6, notes: ['72% margin', '(3pp) Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 5.2, notes: ['17% margin', '(3pp) Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 3.4, notes: ['11% margin', '(25pp) Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 6 月 30 日的季度',
          revenue: {
            notes: ['来源可视化显示同比 (1%)'],
            items: [
              {
                id: 'connectivity',
                label: '连接业务',
                notes: ['同比 (3%)'],
                children: [
                  { id: 'residential_connectivity', label: '住宅连接业务', notes: ['同比 (4%)'] },
                  { id: 'comcast_business', label: 'Comcast 商务', notes: ['同比 +4%'] },
                ],
              },
              { id: 'corporate', label: '企业及其他', notes: ['同比 +14%'] },
              {
                id: 'content_experiences',
                label: '内容与体验',
                notes: ['同比 +23%'],
                children: [
                  { id: 'media', label: '媒体', notes: ['同比 +25%'] },
                  { id: 'studios', label: '影视工作室', notes: ['同比 +25%'] },
                  { id: 'parks', label: '主题公园', notes: ['同比 +3%'] },
                  { label: '内容与体验抵销' },
                ],
              },
              { label: '抵销及合并调整' },
            ],
            breakdowns: [
              {
                id: 'source_elimination_magnitudes',
                label: '来源抵销金额',
                items: [
                  { id: 'eliminations_content', label: '内容与体验抵销' },
                  { id: 'eliminations_gross', label: '合并抵销' },
                  { label: '扣除图示抵销金额后的收入' },
                ],
              },
            ],
          },
          costs: {
            costOfRevenue: { label: '节目制作' },
            operatingExpenses: {
              items: [
                { id: 'other_operating_administrative', label: '其他运营及管理' },
                { id: 'depreciation', label: '折旧' },
                { id: 'advertising', label: '广告' },
                { id: 'amortization', label: '摊销' },
              ],
            },
            tax: { label: '所得税费用' },
          },
          otherIncome: { items: [{ id: 'other', label: '投资及其他损益净额' }] },
          otherExpenses: { items: [{ id: 'interest', label: '利息费用' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 72%', '同比 (3 个百分点)'] },
            operating: { label: '营业利润', notes: ['利润率 17%', '同比 (3 个百分点)'] },
            net: { label: '净利润', notes: ['利润率 11%', '同比 (25 个百分点)'] },
          },
        },
      },
    }
  );
})(window);
