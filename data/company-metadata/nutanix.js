/* Company-profile SSOT record. Profile fields only — period financials stay
 * in data/income-statements/. Format: data/schema.md. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'nutanix',
    name: 'Nutanix',
    legalName: 'Nutanix, Inc.',
    ticker: 'NTNX',
    exchange: 'NASDAQ Global Select Market',
    marketCap: {
      valueUsd: 13970000000,
      asOf: '2026-07-02',
      source: 'StockAnalysis',
      sourceUrl: 'https://stockanalysis.com/stocks/ntnx/market-cap/',
    },
    sector: 'Information Technology',
    industry: 'Hybrid multicloud software and hyperconverged infrastructure',
    founded: '2009',
    headquarters: 'San Jose, California, United States',
    fiscalYearEnd: 'July 31',
    website: 'https://www.nutanix.com/',
    description:
      'Nutanix provides a hybrid multicloud software platform for running applications and AI and managing data across on-premises, edge, and public-cloud environments.',
    sourceUrls: [
      'https://ir.nutanix.com/ir-resources/faqs/',
      'https://ir.nutanix.com/news-releases/news-release-details/nutanix-reports-second-quarter-fiscal-2026-financial-results',
      'https://stockanalysis.com/stocks/ntnx/market-cap/',
    ],
    i18n: {
      zh: {
        displayName: 'Nutanix',
        sector: '信息技术',
        industry: '混合多云软件与超融合基础设施',
        headquarters: '美国加利福尼亚州圣何塞',
        fiscalYearEnd: '7 月 31 日',
        description:
          'Nutanix 提供混合多云软件平台，用于在本地、边缘和公有云环境中运行应用与 AI，并管理数据。',
      },
    },
  });
})(window);
