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
      key: 'doordash',
      name: 'DoorDash',
      legalName: 'DoorDash, Inc.',
      ticker: 'DASH',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 85000000000,
        asOf: '2026-07-07',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/dash/market-cap/',
      },
      sector: 'Consumer Discretionary',
      industry: 'Local commerce and delivery platform',
      founded: '2013',
      headquarters: 'San Francisco, California, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.doordash.com/',
      description:
        'DoorDash is a local commerce platform that connects consumers, merchants, and earners across restaurant, grocery, convenience, retail, and other neighborhood categories.',
      sourceUrls: [
        'https://ir.doordash.com/overview/default.aspx',
        'https://about.doordash.com/',
        'https://stockanalysis.com/stocks/dash/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'DoorDash',
          sector: '非必需消费品',
          industry: '本地商业与配送平台',
          headquarters: '美国加利福尼亚州旧金山',
          fiscalYearEnd: '12 月 31 日',
          description:
            'DoorDash 是一家本地商业平台，连接消费者、商户和灵活工作者，覆盖餐饮、杂货、便利零售、零售及其他社区消费场景。',
        },
      },
    }
  );
})(window);
