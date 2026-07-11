/* Company-profile SSOT record. Profile fields only — period financials stay
 * in data/income-statements/. Format: data/schema.md. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'docebo',
    name: 'Docebo',
    legalName: 'Docebo Inc.',
    ticker: 'DCBO',
    exchange: 'NASDAQ, TSX',
    marketCap: {
      valueUsd: 463810000,
      asOf: '2026-07-06',
      source: 'StockAnalysis',
      sourceUrl: 'https://stockanalysis.com/stocks/dcbo/statistics/',
    },
    sector: 'Information Technology',
    industry: 'Enterprise learning management software',
    founded: '2005',
    headquarters: 'Toronto, Ontario, Canada',
    fiscalYearEnd: 'December 31',
    website: 'https://www.docebo.com/',
    description:
      'Docebo provides an AI-powered enterprise learning platform for employee, customer, and partner training, with learning management, content creation, skills, and analytics capabilities.',
    sourceUrls: [
      'https://www.docebo.com/ai-info/',
      'https://www.docebo.com/contact/',
      'https://www.docebo.inc/financials/financial-reports/default.aspx',
      'https://stockanalysis.com/stocks/dcbo/statistics/',
    ],
    i18n: {
      zh: {
        displayName: 'Docebo',
        sector: '信息技术',
        industry: '企业学习管理软件',
        headquarters: '加拿大安大略省多伦多',
        fiscalYearEnd: '12 月 31 日',
        description:
          'Docebo 提供由 AI 驱动的企业学习平台，覆盖员工、客户和合作伙伴培训，以及学习管理、内容创建、技能和分析能力。',
      },
    },
  });
})(window);
