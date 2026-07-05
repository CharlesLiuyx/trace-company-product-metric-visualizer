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
      key: 'mongodb',
      name: 'MongoDB',
      legalName: 'MongoDB, Inc.',
      ticker: 'MDB',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 28540000000,
        asOf: '2026-07-02',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/mdb/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Database software, developer data platform, cloud database services, search, analytics, and AI-powered retrieval',
      founded: '2007',
      headquarters: 'New York, New York, United States',
      fiscalYearEnd: 'January 31',
      website: 'https://www.mongodb.com/',
      description:
        'MongoDB provides a unified developer data platform centered on the MongoDB database and MongoDB Atlas, combining operational data, search, real-time analytics, and AI-powered retrieval for modern applications.',
      sourceUrls: [
        'https://investors.mongodb.com/',
        'https://investors.mongodb.com/shareholder-services/investor-faqs',
        'https://investors.mongodb.com/financial-information/quarterly-results',
        'https://investors.mongodb.com/news-releases/news-release-details/mongodb-inc-announces-first-quarter-fiscal-2027-financial',
        'https://stockanalysis.com/stocks/mdb/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'MongoDB',
          sector: '信息技术',
          industry: '数据库软件、开发者数据平台、云数据库服务、搜索、分析和 AI 检索',
          headquarters: '美国纽约州纽约',
          fiscalYearEnd: '1 月 31 日',
          description:
            'MongoDB 提供以 MongoDB 数据库和 MongoDB Atlas 为核心的统一开发者数据平台，结合运营数据、搜索、实时分析和 AI 检索能力，支持现代应用。',
        },
      },
    }
  );
})(window);
