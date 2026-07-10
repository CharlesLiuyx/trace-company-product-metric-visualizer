/* Company-profile SSOT record. */
(function (global) {
  'use strict';
  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || { schemaVersion: 1, companies: [] });
  metadata.companies.push({
    key: 'novartis',
    name: 'Novartis',
    legalName: 'Novartis AG',
    aliases: ['Novartis AG'],
    ticker: 'NOVN',
    exchange: 'SIX Swiss Exchange',
    marketCap: {
      valueUsd: 295020000000,
      asOf: '2026-07-09',
      source: 'CompaniesMarketCap',
      sourceUrl: 'https://companiesmarketcap.com/novartis/marketcap/',
    },
    sector: 'Health Care',
    industry: 'Pharmaceuticals',
    founded: 'December 1996',
    headquarters: 'Basel, Switzerland',
    fiscalYearEnd: 'December 31',
    website: 'https://www.novartis.com/',
    description: 'Novartis is an innovative medicines company that researches, develops, manufactures, markets, and sells innovative pharmaceutical medicines worldwide.',
    sourceUrls: [
      'https://www.novartis.com/investors/company-overview',
      'https://www.novartis.com/sites/novartiscom/files/novartis-annual-report-2025.pdf',
      'https://www.novartis.com/investors/share-data-and-analysis/share-overview',
      'https://companiesmarketcap.com/novartis/marketcap/',
    ],
    i18n: {
      zh: {
        displayName: '诺华',
        sector: '医疗保健',
        industry: '制药',
        headquarters: '瑞士巴塞尔',
        fiscalYearEnd: '12 月 31 日',
        description: '诺华是一家创新药物公司，在全球从事创新药物的研究、开发、生产、营销和销售。',
      },
    },
  });
})(window);
