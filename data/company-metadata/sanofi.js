/* Company-profile SSOT record. */
(function (global) {
  'use strict';
  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || { schemaVersion: 1, companies: [] });
  metadata.companies.push({
    key: 'sanofi',
    name: 'Sanofi',
    legalName: 'Sanofi S.A.',
    aliases: ['Sanofi SA'],
    ticker: 'SNY',
    exchange: 'NASDAQ',
    marketCap: {
      valueUsd: 104690000000,
      asOf: '2026-07-15',
      source: 'StockAnalysis',
      sourceUrl: 'https://stockanalysis.com/stocks/sny/statistics/',
    },
    sector: 'Health Care',
    industry: 'Pharmaceuticals',
    founded: '1973',
    headquarters: 'Paris, France',
    fiscalYearEnd: 'December 31',
    website: 'https://www.sanofi.com/',
    description: 'Sanofi is a global biopharmaceutical company that researches, develops, manufactures, and markets medicines and vaccines, with major activities in immunology, rare diseases, oncology, and vaccines.',
    sourceUrls: [
      'https://www.sanofi.com/en/our-company',
      'https://www.sanofi.com/en/investors/financial-results-and-events/financial-results/q1-results-2026',
      'https://stockanalysis.com/stocks/sny/statistics/',
    ],
    i18n: {
      zh: {
        displayName: '赛诺菲',
        sector: '医疗保健',
        industry: '制药',
        headquarters: '法国巴黎',
        fiscalYearEnd: '12 月 31 日',
        description: '赛诺菲是一家全球生物制药公司，研发、生产并销售药品和疫苗，重点覆盖免疫、罕见病、肿瘤和疫苗等领域。',
      },
    },
  });
})(window);
