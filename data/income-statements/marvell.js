/* Pure income-statement SSOT records. Financial data only -- Sankey view
 * geometry stays in data/datasets/<dataset-key>.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {
    schemaVersion: 1,
    records: [],
  });

  ssot.records.push(
    {
      key: 'marvell-q1-fy26',
      company: 'Marvell',
      period: 'Q1 FY26',
      periodNote: 'Ending Apr. 2025',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/marvell-q1-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 1.9,
        notes: ['+63% Y/Y'],
        items: [
          { id: 'data_center', label: 'Data center', value: 1.4, notes: ['+76% Y/Y'] },
          { id: 'enterprise_networking', label: 'Enterprise networking', value: 0.2, notes: ['+16% Y/Y'] },
          { id: 'carrier_infrastructure', label: 'Carrier infrastructure', value: 0.1, notes: ['+93% Y/Y'] },
          { id: 'consumer', label: 'Consumer', value: 0.1, notes: ['+50% Y/Y'] },
          { id: 'automotive_industrial', label: 'Automotive / Industrial', value: 0.1, notes: ['(2%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 0.9 },
        operatingExpenses: {
          total: 0.7,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.5, notes: ['27% of revenue', '(14pp) Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 0.2, notes: ['10% of revenue', '(7pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax_other', label: 'Tax & other', value: 0.1 },
      },
      otherIncome: {
        total: 0.014,
        items: [{ id: 'other_gain', label: 'Other gain', value: 0.014, notes: ['$14M'] }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1.0, notes: ['50% margin', '+5pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.3, notes: ['14% margin', '+27pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.2, notes: ['9% margin', '+28pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第一季度',
          periodNote: '截至 2025 年 4 月',
          revenue: {
            notes: ['同比 +63%'],
            items: [
              { id: 'data_center', label: '数据中心', notes: ['同比 +76%'] },
              { id: 'enterprise_networking', label: '企业网络', notes: ['同比 +16%'] },
              { id: 'carrier_infrastructure', label: '运营商基础设施', notes: ['同比 +93%'] },
              { id: 'consumer', label: '消费业务', notes: ['同比 +50%'] },
              { id: 'automotive_industrial', label: '汽车 / 工业', notes: ['同比 (2%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 27%', '同比 (14 个百分点)'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 10%', '同比 (7 个百分点)'] },
              ],
            },
            tax: { label: '税费及其他' },
          },
          otherIncome: {
            items: [{ id: 'other_gain', label: '其他收益', notes: ['$14M'] }],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 50%', '同比 +5 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 14%', '同比 +27 个百分点'] },
            net: { label: '净利润', notes: ['利润率 9%', '同比 +28 个百分点'] },
          },
        },
      },
    },
    {
      key: 'marvell-q2-fy26',
      company: 'Marvell',
      period: 'Q2 FY26',
      periodNote: 'Ending July 2025',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/marvell-q2-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 2,
        notes: ['+58% Y/Y'],
        items: [
          { id: 'data_center', label: 'Data center', value: 1.5, notes: ['+69% Y/Y'] },
          { id: 'enterprise_networking', label: 'Enterprise networking', value: 0.2, notes: ['+28% Y/Y'] },
          { id: 'carrier_infrastructure', label: 'Carrier infrastructure', value: 0.1, notes: ['+71% Y/Y'] },
          { id: 'consumer', label: 'Consumer', value: 0.1, notes: ['+30% Y/Y'] },
          { id: 'automotive_industrial', label: 'Automotive / Industrial', value: 0.1, notes: ['(0%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 1 },
        operatingExpenses: {
          total: 0.7,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.5, notes: ['26% of revenue', '(12pp) Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 0.2, notes: ['10% of revenue', '(6pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax_and_other', label: 'Tax & other', value: 0.1 },
      },
      otherIncome: { total: 0, items: [] },
      otherExpenses: { total: 0, items: [] },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1, notes: ['50% margin', '+4pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.3, notes: ['14% margin', '+22pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.2, notes: ['10% margin', '+25pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第二季度',
          periodNote: '截至 2025 年 7 月',
          revenue: {
            notes: ['同比 +58%'],
            items: [
              { id: 'data_center', label: '数据中心', notes: ['同比 +69%'] },
              { id: 'enterprise_networking', label: '企业网络', notes: ['同比 +28%'] },
              { id: 'carrier_infrastructure', label: '运营商基础设施', notes: ['同比 +71%'] },
              { id: 'consumer', label: '消费级产品', notes: ['同比 +30%'] },
              { id: 'automotive_industrial', label: '汽车 / 工业', notes: ['同比 (0%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 26%', '同比 (12 个百分点)'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 10%', '同比 (6 个百分点)'] },
              ],
            },
            tax: { label: '税费及其他' },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 50%', '同比 +4 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 14%', '同比 +22 个百分点'] },
            net: { label: '净利润', notes: ['利润率 10%', '同比 +25 个百分点'] },
          },
        },
      },
    },
    {
      key: 'marvell-q3-fy26',
      company: 'Marvell',
      period: 'Q3 FY26',
      periodNote: 'Ending Oct. 2025',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/marvell-q3-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 2.1,
        notes: ['+37% Y/Y'],
        items: [
          { id: 'data_center', label: 'Data center', value: 1.5, notes: ['+38% Y/Y'] },
          { id: 'enterprise_networking', label: 'Enterprise networking', value: 0.2, notes: ['+57% Y/Y'] },
          { id: 'carrier_infrastructure', label: 'Carrier infrastructure', value: 0.2, notes: ['+98% Y/Y'] },
          { id: 'consumer', label: 'Consumer', value: 0.1, notes: ['+21% Y/Y'] },
          { id: 'automotive_industrial', label: 'Automotive / Industrial', value: 0.035, notes: ['(58%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 1.0 },
        operatingExpenses: {
          total: 0.7,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.5, notes: ['25% of revenue', '(8pp) Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 0.2, notes: ['9% of revenue', '(4pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0 },
      },
      otherIncome: {
        total: 1.9,
        items: [{ id: 'other_non_operating', label: 'Other', value: 1.9 }],
      },
      otherExpenses: {
        total: 0.3,
        items: [{ id: 'tax_and_other', label: 'Tax & other', value: 0.3 }],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1.1, notes: ['52% margin', '+29pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.4, notes: ['17% margin', '+64pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 1.9, notes: ['92% margin', '+136pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第三季度',
          periodNote: '截至 2025 年 10 月',
          revenue: {
            notes: ['同比 +37%'],
            items: [
              { id: 'data_center', label: '数据中心', notes: ['同比 +38%'] },
              { id: 'enterprise_networking', label: '企业网络', notes: ['同比 +57%'] },
              { id: 'carrier_infrastructure', label: '运营商基础设施', notes: ['同比 +98%'] },
              { id: 'consumer', label: '消费业务', notes: ['同比 +21%'] },
              { id: 'automotive_industrial', label: '汽车 / 工业', notes: ['同比 (58%)'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 25%', '同比 (8 个百分点)'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 9%', '同比 (4 个百分点)'] },
              ],
            },
            tax: { label: '税费' },
          },
          otherIncome: { items: [{ id: 'other_non_operating', label: '其他' }] },
          otherExpenses: { items: [{ id: 'tax_and_other', label: '税费及其他' }] },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 52%', '同比 +29 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 17%', '同比 +64 个百分点'] },
            net: { label: '净利润', notes: ['利润率 92%', '同比 +136 个百分点'] },
          },
        },
      },
    },
    {
      key: 'marvell-q3-fy25',
      company: 'Marvell',
      period: 'Q3 FY25',
      periodNote: 'Ending Oct. 2024',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/marvell-q3-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 1.5,
        notes: ['+7% Y/Y'],
        items: [
          { id: 'data_center', label: 'Data center', value: 1.1, notes: ['+98% Y/Y'] },
          { id: 'enterprise_networking', label: 'Enterprise networking', value: 0.2, notes: ['(44%) Y/Y'] },
          { id: 'carrier_infrastructure', label: 'Carrier infrastructure', value: 0.1, notes: ['(73%) Y/Y'] },
          { id: 'consumer', label: 'Consumer', value: 0.1, notes: ['(43%) Y/Y'] },
          { id: 'automotive_industrial', label: 'Automotive /Industrial', value: 0.1, notes: ['(22%) Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: {
          id: 'cost_of_revenue',
          label: 'Cost of revenue',
          value: 1.2,
          items: [
            { id: 'special_items', label: 'Special items', value: 0.3 },
          ],
        },
        operatingExpenses: {
          total: 1.1,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.5, notes: ['32% of revenue', '(2pp) Y/Y'] },
            { id: 'restructuring', label: 'Restructuring', value: 0.4, notes: ['24% of revenue', '+23pp Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 0.2, notes: ['14% of revenue', '(1pp) Y/Y'] },
          ],
        },
        tax: { label: 'Tax', value: 0, notes: ['No separate tax line is shown in the Source chart.'] },
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 0.3, notes: ['23% margin', '(16pp) Y/Y'] },
        operating: { id: 'operating_loss', label: 'Operating loss', value: -0.7, notes: ['(46%) margin', '(36pp) Y/Y'] },
        net: { id: 'operating_loss', label: 'Operating loss', value: -0.7, notes: ['No separate net income line is shown in the Source chart.'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第三季度',
          periodNote: '截至 2024 年 10 月',
          revenue: {
            notes: ['同比 +7%'],
            items: [
              { id: 'data_center', label: '数据中心', notes: ['同比 +98%'] },
              { id: 'enterprise_networking', label: '企业网络', notes: ['同比 (44%)'] },
              { id: 'carrier_infrastructure', label: '运营商基础设施', notes: ['同比 (73%)'] },
              { id: 'consumer', label: '消费业务', notes: ['同比 (43%)'] },
              { id: 'automotive_industrial', label: '汽车与工业', notes: ['同比 (22%)'] },
            ],
          },
          costs: {
            costOfRevenue: {
              label: '收入成本',
              items: [{ id: 'special_items', label: '特殊项目' }],
            },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 32%', '同比 (2 个百分点)'] },
                { id: 'restructuring', label: '重组费用', notes: ['占收入 24%', '同比 +23 个百分点'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 14%', '同比 (1 个百分点)'] },
              ],
            },
            tax: { label: '税费', notes: ['来源图未单列税费。'] },
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 23%', '同比 (16 个百分点)'] },
            operating: { label: '营业亏损', notes: ['利润率 (46%)', '同比 (36 个百分点)'] },
            net: { label: '营业亏损', notes: ['来源图未单列净利润。'] },
          },
        },
      },
    },
    {
      key: 'marvell-q4-fy26',
      company: 'Marvell',
      period: 'Q4 FY26',
      periodNote: 'Ending Jan. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      sourceImage: 'input/processed/marvell-q4-fy26.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 2.2,
        notes: ['+22% Y/Y'],
        items: [
          { id: 'data_center', label: 'Data center', value: 1.7, notes: ['+21% Y/Y'] },
          { id: 'communications_and_other', label: 'Communications and other', value: 0.6, notes: ['+26% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 1.1 },
        operatingExpenses: {
          total: 0.7,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.5, notes: ['24% of revenue', '(3pp) Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 0.2, notes: ['9% of revenue', '(2pp) Y/Y'] },
          ],
        },
        tax: { id: 'tax', label: 'Tax', value: 0, notes: ['Source chart shows a $15M tax benefit instead of tax expense.'] },
      },
      otherIncome: {
        total: 0.015,
        items: [{ id: 'tax_benefit', label: 'Tax benefit', value: 0.015, notes: ['$15M'] }],
      },
      otherExpenses: {
        total: 0.023,
        items: [
          {
            id: 'other_non_operating',
            label: 'Other',
            value: 0.023,
            notes: ['$23M deducted between operating profit and net profit.'],
          },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 1.1, notes: ['52% margin', '+1pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.4, notes: ['18% margin', '+5pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.4, notes: ['92% margin', '+136pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 1 月',
          revenue: {
            notes: ['同比 +22%'],
            items: [
              { id: 'data_center', label: '数据中心', notes: ['同比 +21%'] },
              { id: 'communications_and_other', label: '通信及其他', notes: ['同比 +26%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 24%', '同比 (3 个百分点)'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 9%', '同比 (2 个百分点)'] },
              ],
            },
            tax: { label: '税费', notes: ['来源图显示 $15M 税收收益，而非税费。'] },
          },
          otherIncome: {
            items: [{ id: 'tax_benefit', label: '税收收益', notes: ['$15M'] }],
          },
          otherExpenses: {
            items: [
              {
                id: 'other_non_operating',
                label: '其他',
                notes: ['$23M，在营业利润与净利润之间扣除。'],
              },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 52%', '同比 +1 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 18%', '同比 +5 个百分点'] },
            net: { label: '净利润', notes: ['利润率 92%', '同比 +136 个百分点'] },
          },
        },
      },
    },
    {
      key: 'marvell-q4-fy25',
      company: 'Marvell',
      period: 'Q4 FY25',
      periodNote: 'Ending Jan. 2025',
      currency: '$',
      unit: 'B',
      decimals: 3,
      sourceImage: 'input/processed/marvell-q4-fy25.png',
      roundingTolerance: 0.15,
      revenue: {
        total: 1.8,
        notes: ['+27% Y/Y'],
        items: [
          { id: 'data_center', label: 'Data center', value: 1.4, notes: ['+78% Y/Y'] },
          { id: 'enterprise_networking', label: 'Enterprise networking', value: 0.2, notes: ['(35%) Y/Y'] },
          { id: 'carrier_infrastructure', label: 'Carrier infrastructure', value: 0.1, notes: ['(38%) Y/Y'] },
          { id: 'consumer', label: 'Consumer', value: 0.1, notes: ['(38%) Y/Y'] },
          { id: 'automotive_industrial', label: 'Automotive/Industrial', value: 0.1, notes: ['+4% Y/Y'] },
        ],
      },
      costs: {
        costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 0.9 },
        operatingExpenses: {
          total: 0.7,
          items: [
            { id: 'rnd', label: 'R&D', value: 0.5, notes: ['27% of revenue', '(5pp) Y/Y'] },
            { id: 'sga', label: 'SG&A', value: 0.2, notes: ['11% of revenue', '(4pp) Y/Y'] },
          ],
        },
      },
      operatingOtherIncome: {
        total: 0.013,
        items: [
          {
            id: 'restructuring',
            label: 'Restructuring',
            value: 0.013,
            valueText: '$13M',
            notes: ['Source chart shows a restructuring expense credit entering operating expenses.'],
          },
        ],
      },
      otherExpenses: {
        total: 0.035,
        items: [
          {
            id: 'other_non_operating',
            label: 'Other',
            value: 0.035,
            valueText: '($35M)',
            notes: ['$35M deducted between operating profit and net profit.'],
          },
        ],
      },
      profit: {
        gross: { id: 'gross_profit', label: 'Gross profit', value: 0.9, notes: ['50% margin', '+4pp Y/Y'] },
        operating: { id: 'operating_profit', label: 'Operating profit', value: 0.2, notes: ['13% margin', '+15pp Y/Y'] },
        net: { id: 'net_profit', label: 'Net profit', value: 0.2, notes: ['11% margin', '+39pp Y/Y'] },
      },
      i18n: {
        zh: {
          period: '2025 财年第四季度',
          periodNote: '截至 2025 年 1 月',
          revenue: {
            notes: ['同比 +27%'],
            items: [
              { id: 'data_center', label: '数据中心', notes: ['同比 +78%'] },
              { id: 'enterprise_networking', label: '企业网络', notes: ['同比 (35%)'] },
              { id: 'carrier_infrastructure', label: '运营商基础设施', notes: ['同比 (38%)'] },
              { id: 'consumer', label: '消费业务', notes: ['同比 (38%)'] },
              { id: 'automotive_industrial', label: '汽车/工业', notes: ['同比 +4%'] },
            ],
          },
          costs: {
            costOfRevenue: { label: '收入成本' },
            operatingExpenses: {
              items: [
                { id: 'rnd', label: '研发', notes: ['占收入 27%', '同比 (5 个百分点)'] },
                { id: 'sga', label: '销售、一般及行政', notes: ['占收入 11%', '同比 (4 个百分点)'] },
              ],
            },
          },
          operatingOtherIncome: {
            items: [
              {
                id: 'restructuring',
                label: '重组',
                notes: ['来源图将重组费用冲回列作进入运营费用的正向流。'],
              },
            ],
          },
          otherExpenses: {
            items: [
              {
                id: 'other_non_operating',
                label: '其他',
                notes: ['$35M，在营业利润与净利润之间扣除。'],
              },
            ],
          },
          profit: {
            gross: { label: '毛利润', notes: ['利润率 50%', '同比 +4 个百分点'] },
            operating: { label: '营业利润', notes: ['利润率 13%', '同比 +15 个百分点'] },
            net: { label: '净利润', notes: ['利润率 11%', '同比 +39 个百分点'] },
          },
        },
      },
    }
  );
})(window);
