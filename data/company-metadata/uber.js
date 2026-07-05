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
      key: 'uber',
      name: 'Uber',
      legalName: 'Uber Technologies, Inc.',
      ticker: 'UBER',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 145830313291,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/uber/market-cap/',
      },
      sector: 'Industrials',
      industry: 'Mobility, delivery, and freight platform',
      founded: '2009',
      headquarters: 'San Francisco, California, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.uber.com/',
      description:
        'Uber is a global technology platform for mobility, delivery, freight, business travel, and related services that connects riders, eaters, drivers, couriers, merchants, carriers, and companies.',
      sourceUrls: [
        'https://www.uber.com/us/en/about/',
        'https://investor.uber.com/home/default.aspx',
      ],
      i18n: {
        zh: {
          displayName: '优步',
          sector: '工业',
          industry: '出行、配送和货运平台',
          headquarters: '美国加利福尼亚州旧金山',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Uber 是一家全球技术平台，业务覆盖出行、配送、货运、商务出行及相关服务，连接乘客、消费者、司机、配送员、商家、承运商和企业客户。',
        },
      },
    }
  );
})(window);
