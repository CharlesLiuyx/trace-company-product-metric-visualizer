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
      key: 'cadence',
      name: 'Cadence',
      legalName: 'Cadence Design Systems, Inc.',
      ticker: 'CDNS',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 103093100000,
        asOf: '2026-07-07',
        source: 'CompaniesMarketCap',
        sourceUrl: 'https://companiesmarketcap.com/cadence-design-systems/marketcap/',
      },
      sector: 'Information Technology',
      industry: 'Electronic design automation, semiconductor IP, system design and analysis software and hardware',
      founded: '1988',
      headquarters: 'San Jose, California, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.cadence.com/',
      description:
        'Cadence provides computational software for electronic systems design, including electronic design automation, semiconductor IP, verification, implementation, and system design and analysis solutions.',
      sourceUrls: [
        'https://www.cadence.com/en_US/home/company.html',
        'https://www.cadence.com/en_US/home/company/investor-relations.html',
        'https://companiesmarketcap.com/cadence-design-systems/marketcap/',
      ],
      i18n: {
        zh: {
          displayName: '楷登电子',
          sector: '信息技术',
          industry: '电子设计自动化、半导体 IP、系统设计与分析软件及硬件',
          headquarters: '美国加利福尼亚州圣何塞',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Cadence 提供面向电子系统设计的计算软件，覆盖电子设计自动化、半导体 IP、验证、实现，以及系统设计与分析解决方案。',
        },
      },
    }
  );
})(window);
