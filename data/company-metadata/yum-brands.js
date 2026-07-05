/* Company-profile SSOT record. Profile fields only — period financials stay
 * in data/income-statements/. Format: data/schema.md. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push(
    {
      key: 'yum-brands',
      name: 'Yum! Brands',
      legalName: 'Yum! Brands, Inc.',
      aliases: ['Yum Brands', 'Yum'],
      ticker: 'YUM',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 41891700000,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/yum/market-cap/',
      },
      sector: 'Consumer Discretionary',
      industry: 'Quick-service restaurants, franchising, restaurant brand operations, and restaurant technology',
      founded: '1997',
      headquarters: 'Louisville, Kentucky, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.yum.com/',
      description:
        'Yum! Brands franchises or operates restaurant systems under KFC, Taco Bell, Pizza Hut, and Habit Burger & Grill, spanning quick-service chicken, Mexican-inspired food, pizza, burgers, franchising, digital sales, and restaurant technology capabilities.',
      sourceUrls: [
        'https://www.yum.com/wps/portal/yumbrands/Yumbrands/company',
        'https://www.yum.com/wps/portal/yumbrands/Yumbrands/company/our-brands',
        'https://investors.yum.com/corporateprofile/default.aspx',
        'https://investors.yum.com/financial-information/sec-filings/default.aspx',
      ],
      i18n: {
        zh: {
          displayName: '百胜餐饮',
          sector: '非必需消费品',
          industry: '快餐餐厅、特许经营、餐厅品牌运营和餐厅技术',
          headquarters: '美国肯塔基州路易维尔',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Yum! Brands 以特许经营或自营方式运营 KFC、Taco Bell、Pizza Hut 和 Habit Burger & Grill 餐厅体系，覆盖快餐鸡肉、墨西哥风味食品、披萨、汉堡、特许经营、数字销售和餐厅技术能力。',
        },
      },
    }
  );
})(window);
