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
      key: 'ford',
      name: 'Ford',
      legalName: 'Ford Motor Company',
      ticker: 'F',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 54030000000,
        asOf: '2026-07-07',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/f/statistics/',
      },
      sector: 'Consumer Discretionary',
      industry: 'Automobiles and automotive financial services',
      founded: '1903',
      headquarters: 'Dearborn, Michigan, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.ford.com/',
      description:
        'Ford Motor Company designs, manufactures, markets, finances, and services Ford and Lincoln vehicles globally. Its automotive operations include Ford Blue for internal-combustion vehicles, Ford Model e for electric vehicles, Ford Pro for commercial customers, and Ford Credit financial services.',
      sourceUrls: [
        'https://corporate.ford.com/about/history/company-timeline/',
        'https://shareholder.ford.com/annual-reports/default.aspx',
        'https://stockanalysis.com/stocks/f/statistics/',
      ],
      i18n: {
        zh: {
          displayName: '福特',
          sector: '非必需消费品',
          industry: '汽车及汽车金融服务',
          headquarters: '美国密歇根州迪尔伯恩',
          fiscalYearEnd: '12 月 31 日',
          description:
            '福特汽车公司在全球设计、制造、销售、融资并维护 Ford 与 Lincoln 品牌车辆。其汽车业务包括内燃机车业务 Ford Blue、电动车业务 Ford Model e、面向商用客户的 Ford Pro，以及金融服务 Ford Credit。',
        },
      },
    }
  );
})(window);
