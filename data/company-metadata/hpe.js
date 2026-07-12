/* Company-profile SSOT. Period financials belong in data/income-statements/. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'hpe',
    name: 'HPE',
    legalName: 'Hewlett Packard Enterprise Company',
    ticker: 'HPE',
    exchange: 'NYSE',
    marketCap: {
      valueUsd: 64280000000,
      asOf: '2026-07-10',
      source: 'StockAnalysis',
      sourceUrl: 'https://stockanalysis.com/stocks/hpe/market-cap/',
    },
    sector: 'Information Technology',
    industry: 'Enterprise IT infrastructure, networking, hybrid cloud, and services',
    founded: '2015',
    headquarters: 'Spring, Texas, United States',
    fiscalYearEnd: 'October 31',
    website: 'https://www.hpe.com/',
    description:
      'Hewlett Packard Enterprise provides enterprise technology spanning networking, hybrid cloud infrastructure, AI systems, compute, data storage, supercomputing, software, and related services.',
    sourceUrls: [
      'https://www.hpe.com/us/en/about/enterprise-technology-us.html',
      'https://investors.hpe.com/',
      'https://investors.hpe.com/news-and-events',
      'https://stockanalysis.com/stocks/hpe/market-cap/',
    ],
    i18n: {
      zh: {
        displayName: '慧与',
        sector: '信息技术',
        industry: '企业 IT 基础设施、网络、混合云与服务',
        headquarters: '美国得克萨斯州斯普林',
        fiscalYearEnd: '10 月 31 日',
        description: '慧与提供涵盖网络、混合云基础设施、AI 系统、计算、数据存储、超级计算、软件及相关服务的企业技术产品。',
      },
    },
  });
})(window);
