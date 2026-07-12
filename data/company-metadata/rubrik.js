/* Company-profile SSOT record. Profile fields only — period financials stay
 * in data/income-statements/. Format: data/schema.md. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'rubrik',
    name: 'Rubrik',
    legalName: 'Rubrik, Inc.',
    ticker: 'RBRK',
    exchange: 'NYSE',
    marketCap: {
      valueUsd: 17300000000,
      asOf: '2026-07-10',
      source: 'StockAnalysis',
      sourceUrl: 'https://stockanalysis.com/stocks/rbrk/market-cap/',
    },
    sector: 'Information Technology',
    industry: 'Data security and cyber resilience software',
    founded: '2014',
    headquarters: 'Palo Alto, California, United States',
    fiscalYearEnd: 'January 31',
    website: 'https://www.rubrik.com/',
    description:
      'Rubrik provides data security and cyber-resilience software that helps organizations secure, monitor, and recover data, identities, and workloads across enterprise, cloud, and SaaS environments.',
    sourceUrls: [
      'https://www.rubrik.com/company',
      'https://ir.rubrik.com/',
      'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=1943896&type=10-K',
      'https://stockanalysis.com/stocks/rbrk/market-cap/',
    ],
    i18n: {
      zh: {
        displayName: 'Rubrik',
        sector: '信息技术',
        industry: '数据安全与网络韧性软件',
        headquarters: '美国加利福尼亚州帕洛阿尔托',
        fiscalYearEnd: '1 月 31 日',
        description:
          'Rubrik 提供数据安全与网络韧性软件，帮助组织在企业、自有云、公有云和 SaaS 环境中保护、监控并恢复数据、身份和工作负载。',
      },
    },
  });
})(window);
