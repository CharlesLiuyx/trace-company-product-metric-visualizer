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
      key: 'elastic',
      name: 'Elastic',
      legalName: 'Elastic N.V.',
      ticker: 'ESTC',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 5850000000,
        asOf: '2026-06-26',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/estc/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Search AI, enterprise search, observability, security, and data analytics software',
      founded: '2012',
      headquarters: 'Amsterdam, the Netherlands / distributed company',
      fiscalYearEnd: 'April 30',
      website: 'https://www.elastic.co/',
      description:
        'Elastic provides the Elastic Search AI Platform for enterprise search, observability, and security, helping organizations search, analyze, protect, and act on data across cloud, hybrid, and on-premises environments.',
      sourceUrls: [
        'https://www.elastic.co/about',
        'https://www.elastic.co/about/press/elasticsearch-changes-name-to-elastic-to-reflect-wide-adoption-beyond-search',
        'https://ir.elastic.co/News--Events/news/news-details/2026/Elastic-Reports-Fourth-Quarter-and-Fiscal-2026-Financial-Results/default.aspx',
        'https://www.sec.gov/Archives/edgar/data/1707753/000170775325000021/estc-20250430.htm',
        'https://stockanalysis.com/stocks/estc/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'Elastic',
          sector: '信息技术',
          industry: 'Search AI、企业搜索、可观测性、安全和数据分析软件',
          headquarters: '荷兰阿姆斯特丹 / 分布式公司',
          fiscalYearEnd: '4 月 30 日',
          description:
            'Elastic 提供 Elastic Search AI Platform，服务企业搜索、可观测性和安全场景，帮助组织在云、混合和本地环境中搜索、分析、保护并利用数据。',
        },
      },
    }
  );
})(window);
