/* Company-profile SSOT. Period financials live in data/income-statements/. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'gitlab',
    name: 'GitLab',
    legalName: 'GitLab Inc.',
    ticker: 'GTLB',
    exchange: 'NASDAQ',
    marketCap: {
      valueUsd: 5720000000,
      asOf: '2026-07-09',
      source: 'StockAnalysis',
      sourceUrl: 'https://stockanalysis.com/stocks/gtlb/market-cap/',
    },
    sector: 'Information Technology',
    industry: 'DevSecOps software',
    founded: '2014',
    headquarters: 'All-remote; registered office in San Francisco, California, United States',
    fiscalYearEnd: 'January 31',
    website: 'https://about.gitlab.com/',
    description:
      'GitLab provides an intelligent DevSecOps orchestration platform that brings planning, code, security, compliance, and deployment workflows into one application.',
    sourceUrls: [
      'https://about.gitlab.com/company/',
      'https://ir.gitlab.com/',
      'https://ir.gitlab.com/news/news-details/2026/GitLab-Reports-First-Quarter-Fiscal-Year-2027-Financial-Results/default.aspx',
      'https://stockanalysis.com/stocks/gtlb/market-cap/',
    ],
    i18n: {
      zh: {
        displayName: 'GitLab',
        sector: '信息技术',
        industry: 'DevSecOps 软件',
        headquarters: '全员远程办公；注册办公地址位于美国加利福尼亚州旧金山',
        fiscalYearEnd: '1 月 31 日',
        description:
          'GitLab 提供智能 DevSecOps 编排平台，将规划、代码、安全、合规与部署工作流整合在同一应用中。',
      },
    },
  });
})(window);
