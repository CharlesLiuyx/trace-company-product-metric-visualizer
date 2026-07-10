/* Company-profile SSOT record. Profile fields only — period financials stay
 * in data/income-statements/. Format: data/schema.md. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'novo-nordisk',
    name: 'Novo Nordisk',
    legalName: 'Novo Nordisk A/S',
    aliases: ['Novo Nordisk A/S', 'NVO', 'NOVO-B'],
    ticker: 'NOVO-B',
    exchange: 'Nasdaq Copenhagen',
    marketCap: {
      valueUsd: 221580000000,
      asOf: '2026-07-07',
      source: 'StockAnalysis',
      sourceUrl: 'https://stockanalysis.com/stocks/nvo/market-cap/',
    },
    sector: 'Health Care',
    industry: 'Pharmaceuticals',
    founded: '1923',
    headquarters: 'Bagsværd, Denmark',
    fiscalYearEnd: 'December 31',
    website: 'https://www.novonordisk.com/',
    description: 'Novo Nordisk is a Danish global healthcare company focused on treatments for diabetes, obesity, rare diseases and other serious chronic conditions.',
    sourceUrls: [
      'https://annualreport.novonordisk.com/2025/introducing-novo-nordisk/2025-at-a-glance.html',
      'https://www.novonordisk.com/investors/financial-results.html',
      'https://stockanalysis.com/stocks/nvo/market-cap/',
    ],
    i18n: {
      zh: {
        displayName: '诺和诺德',
        sector: '医疗保健',
        industry: '制药',
        headquarters: '丹麦鲍斯韦尔',
        fiscalYearEnd: '12 月 31 日',
        description: '诺和诺德是一家丹麦全球医疗保健公司，专注于糖尿病、肥胖症、罕见病及其他严重慢性病的治疗。',
      },
    },
  });
})(window);
