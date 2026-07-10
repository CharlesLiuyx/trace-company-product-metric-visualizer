/* Company-profile SSOT record. Profile fields only — period financials stay
 * in data/income-statements/. Format: data/schema.md. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'palo-alto',
    name: 'Palo Alto Networks',
    legalName: 'Palo Alto Networks, Inc.',
    ticker: 'PANW',
    exchange: 'NASDAQ',
    marketCap: {
      valueUsd: 274690000000,
      asOf: '2026-07-07',
      source: 'StockAnalysis',
      sourceUrl: 'https://stockanalysis.com/stocks/panw/market-cap/',
    },
    sector: 'Information Technology',
    industry: 'Cybersecurity software and services',
    founded: '2005',
    headquarters: 'Santa Clara, California, United States',
    fiscalYearEnd: 'July 31',
    website: 'https://www.paloaltonetworks.com/',
    description:
      'Palo Alto Networks provides cybersecurity platforms and services for network, cloud, endpoint, identity, and security operations, including the Strata, Prisma, and Cortex product families.',
    sourceUrls: [
      'https://www.paloaltonetworks.com/about-us',
      'https://investors.paloaltonetworks.com/investor-resources/investor-faqs',
      'https://investors.paloaltonetworks.com/news-releases/news-release-details/palo-alto-networks-reports-fiscal-second-quarter-2026-financial',
      'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=PANW&type=10-K',
      'https://stockanalysis.com/stocks/panw/market-cap/',
    ],
    i18n: {
      zh: {
        displayName: '帕洛阿尔托网络',
        sector: '信息技术',
        industry: '网络安全软件与服务',
        headquarters: '美国加利福尼亚州圣克拉拉',
        fiscalYearEnd: '7 月 31 日',
        description:
          '帕洛阿尔托网络为网络、云、端点、身份和安全运营提供网络安全平台与服务，主要产品系列包括 Strata、Prisma 和 Cortex。',
      },
    },
  });
})(window);
