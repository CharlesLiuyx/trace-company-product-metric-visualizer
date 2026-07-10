/* Company-profile SSOT record. */
(function (global) {
  'use strict';
  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || { schemaVersion: 1, companies: [] });
  metadata.companies.push({
    key: 'pfizer',
    name: 'Pfizer',
    legalName: 'Pfizer Inc.',
    ticker: 'PFE',
    exchange: 'NYSE',
    marketCap: {
      valueUsd: 138210000000,
      asOf: '2026-07-09',
      source: 'StockAnalysis',
      sourceUrl: 'https://stockanalysis.com/stocks/pfe/market-cap/',
    },
    sector: 'Health Care',
    industry: 'Pharmaceuticals',
    founded: '1849',
    headquarters: '66 Hudson Yards, New York, New York, United States',
    fiscalYearEnd: 'December 31',
    website: 'https://www.pfizer.com/',
    description: 'Pfizer is a research-based biopharmaceutical company that discovers, develops, manufactures, and commercializes medicines and vaccines across multiple therapeutic areas.',
    sourceUrls: [
      'https://www.pfizer.com/news/media-resources/press-kits/corporate-media-kit',
      'https://www.pfizer.com/about/history',
      'https://investors.pfizer.com/',
      'https://stockanalysis.com/stocks/pfe/market-cap/',
    ],
    i18n: {
      zh: {
        displayName: '辉瑞',
        sector: '医疗保健',
        industry: '制药',
        headquarters: '美国纽约州纽约市哈德逊广场 66 号',
        fiscalYearEnd: '12 月 31 日',
        description: '辉瑞是一家以研发为基础的生物制药公司，围绕多个治疗领域发现、开发、生产并商业化药品和疫苗。',
      },
    },
  });
})(window);
