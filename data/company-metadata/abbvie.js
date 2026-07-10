/* Company-profile SSOT record. Profile fields only — period financials stay
 * in data/income-statements/. Format: data/schema.md. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'abbvie',
    name: 'AbbVie',
    legalName: 'AbbVie Inc.',
    ticker: 'ABBV',
    exchange: 'NYSE',
    marketCap: {
      valueUsd: 444450000000,
      asOf: '2026-07-08',
      source: 'StockAnalysis',
      sourceUrl: 'https://stockanalysis.com/stocks/abbv/statistics/',
    },
    sector: 'Health Care',
    industry: 'Drug Manufacturers - General',
    founded: '2013',
    headquarters: 'North Chicago, Illinois, United States',
    fiscalYearEnd: 'December 31',
    website: 'https://www.abbvie.com/',
    description: 'AbbVie is a research-based global biopharmaceutical company that discovers, develops, manufactures, and commercializes medicines and therapies for serious diseases.',
    sourceUrls: [
      'https://www.abbvie.com/who-we-are.html',
      'https://news.abbvie.com/2013-01-02-AbbVie-Celebrates-Launch-as-New-Biopharmaceutical-Company-with-Employees-Patients',
      'https://news.abbvie.com/2026-02-04-AbbVie-Reports-Full-Year-and-Fourth-Quarter-2025-Financial-Results',
      'https://stockanalysis.com/stocks/abbv/statistics/',
    ],
    i18n: {
      zh: {
        displayName: '艾伯维',
        sector: '医疗保健',
        industry: '综合制药',
        headquarters: '美国伊利诺伊州北芝加哥',
        fiscalYearEnd: '12 月 31 日',
        description: '艾伯维是一家以研发为基础的全球生物制药公司，发现、开发、生产并商业化用于治疗重大疾病的药物与疗法。',
      },
    },
  });
})(window);
