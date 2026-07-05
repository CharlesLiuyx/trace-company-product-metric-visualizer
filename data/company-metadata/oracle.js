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
      key: 'oracle',
      name: 'Oracle',
      legalName: 'Oracle Corporation',
      ticker: 'ORCL',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 620000000000,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/orcl/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Enterprise software, cloud infrastructure and applications, database, and hardware',
      founded: '1977',
      headquarters: 'Austin, Texas, United States',
      fiscalYearEnd: 'May 31',
      website: 'https://www.oracle.com/',
      description:
        'Oracle is an enterprise technology company whose cloud and license business spans Oracle Cloud Infrastructure (OCI), cloud and on-premise applications, database and middleware software, software support and licenses, hardware, and services.',
      sourceUrls: [
        'https://www.oracle.com/corporate/',
        'https://investor.oracle.com/home/default.aspx',
        'https://www.oracle.com/investor/',
        'https://www.oracle.com/news/',
      ],
      i18n: {
        zh: {
          displayName: '甲骨文',
          sector: '信息技术',
          industry: '企业软件、云基础设施与应用、数据库和硬件',
          headquarters: '美国得克萨斯州奥斯汀',
          fiscalYearEnd: '5 月 31 日',
          description:
            '甲骨文是一家企业技术公司，其云与许可证业务涵盖 Oracle 云基础设施（OCI）、云端与本地应用、数据库与中间件软件、软件支持与许可证、硬件以及服务。',
        },
      },
    }
  );
})(window);
