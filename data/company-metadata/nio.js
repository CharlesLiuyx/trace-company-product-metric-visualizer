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
      key: 'nio',
      name: 'NIO',
      legalName: 'NIO Inc.',
      ticker: 'NIO',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 11960000000,
        asOf: '2026-07-10',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/nio/market-cap/',
      },
      sector: 'Consumer Discretionary',
      industry: 'Auto Manufacturers',
      founded: 'November 2014',
      headquarters: 'Shanghai, China',
      fiscalYearEnd: 'December 31',
      website: 'https://www.nio.com/',
      description:
        'NIO designs, develops, manufactures, and sells premium smart electric vehicles and power services, including battery swapping, charging, and battery-as-a-service offerings.',
      sourceUrls: [
        'https://ir.nio.com/governance/company-profile',
        'https://ir.nio.com/resources/investor-faqs/',
        'https://ir.nio.com/news-releases/news-release-details/nio-inc-reports-unaudited-first-quarter-2026-financial-results',
        'https://stockanalysis.com/stocks/nio/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: '蔚来',
          sector: '非必需消费品',
          industry: '汽车制造商',
          headquarters: '中国上海市',
          fiscalYearEnd: '12 月 31 日',
          description:
            '蔚来设计、开发、制造并销售高端智能电动汽车及能源服务，提供换电、充电和电池即服务等方案。',
        },
      },
    }
  );
})(window);
