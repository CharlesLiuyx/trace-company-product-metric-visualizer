/* Company-profile SSOT record. */
(function (global) {
  'use strict';
  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || { schemaVersion: 1, companies: [] });
  metadata.companies.push({
    key: 'merck',
    name: 'Merck',
    legalName: 'Merck & Co., Inc.',
    aliases: ['MSD'],
    ticker: 'MRK',
    exchange: 'NYSE',
    marketCap: {
      valueUsd: 318260000000,
      asOf: '2026-07-07',
      source: 'StockAnalysis',
      sourceUrl: 'https://stockanalysis.com/stocks/mrk/market-cap/',
    },
    sector: 'Health Care',
    industry: 'Pharmaceuticals',
    founded: '1891',
    headquarters: 'Rahway, New Jersey, United States',
    fiscalYearEnd: 'December 31',
    website: 'https://www.merck.com/',
    description: 'Merck is a global health care company that delivers prescription medicines, vaccines, biologic therapies, and animal health products.',
    sourceUrls: [
      'https://www.merck.com/company-overview/',
      'https://www.merck.com/company-overview/history/',
      'https://www.merck.com/media/company-fact-sheet/',
      'https://www.merck.com/wp-content/uploads/sites/124/2026/05/MRK-12.31.2025-10K-FINAL.pdf',
      'https://stockanalysis.com/stocks/mrk/market-cap/',
    ],
    i18n: {
      zh: {
        displayName: '默沙东',
        sector: '医疗保健',
        industry: '制药',
        headquarters: '美国新泽西州拉威市',
        fiscalYearEnd: '12 月 31 日',
        description: '默沙东是一家全球医疗健康公司，提供处方药、疫苗、生物疗法和动物保健产品。',
      },
    },
  });
})(window);
