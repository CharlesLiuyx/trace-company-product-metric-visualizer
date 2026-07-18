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
      key: 'rivian',
      name: 'Rivian',
      legalName: 'Rivian Automotive, Inc.',
      aliases: ['Rivian Automotive', 'Rivian'],
      ticker: 'RIVN',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 25070000000,
        asOf: '2026-07-17',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/rivn/market-cap/',
      },
      sector: 'Consumer Discretionary',
      industry: 'Electric vehicles, automotive software, and mobility services',
      founded: '2009',
      headquarters: 'Irvine, California, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://rivian.com/',
      description:
        'Rivian designs, develops, manufactures, and sells electric consumer and commercial vehicles, and provides vehicle software, charging, service, remarketing, and related mobility offerings.',
      sourceUrls: [
        'https://rivian.com/our-company',
        'https://rivian.com/investors',
        'https://www.sec.gov/Archives/edgar/data/1874178/000187417826000035/rivn-20260331.htm',
        'https://stockanalysis.com/stocks/rivn/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'Rivian',
          sector: '非必需消费品',
          industry: '电动汽车、汽车软件与移动出行服务',
          headquarters: '美国加利福尼亚州尔湾',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Rivian 设计、开发、制造并销售面向消费者和商业客户的电动汽车，同时提供汽车软件、充电、维修、二手车及相关移动出行服务。',
        },
      },
    }
  );
})(window);
