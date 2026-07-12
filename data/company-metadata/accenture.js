/* Company-profile SSOT. Period financials belong in data/income-statements/. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'accenture',
    name: 'Accenture',
    legalName: 'Accenture plc',
    ticker: 'ACN',
    exchange: 'NYSE',
    marketCap: {
      valueUsd: 82750000000,
      asOf: '2026-07-10',
      source: 'StockAnalysis',
      sourceUrl: 'https://stockanalysis.com/stocks/acn/market-cap/',
    },
    sector: 'Information Technology',
    industry: 'IT services and consulting',
    founded: '1989',
    headquarters: 'Dublin, Ireland',
    fiscalYearEnd: 'August 31',
    website: 'https://www.accenture.com/',
    description: 'Accenture is a global professional-services company providing strategy, consulting, technology, operations, and managed services.',
    sourceUrls: [
      'https://www.accenture.com/us-en/about/company-index',
      'https://investor.accenture.com/investor-resources/investor-faqs',
      'https://stockanalysis.com/stocks/acn/market-cap/',
    ],
    i18n: {
      zh: {
        displayName: '埃森哲',
        sector: '信息技术',
        industry: '信息技术服务与咨询',
        headquarters: '爱尔兰都柏林',
        fiscalYearEnd: '8 月 31 日',
        description: '埃森哲是一家全球专业服务公司，提供战略、咨询、技术、运营及托管服务。',
      },
    },
  });
})(window);
