/* Company-profile SSOT record. Profile fields only — period financials stay
 * in data/income-statements/. Format: data/schema.md. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'astrazeneca',
    name: 'AstraZeneca',
    legalName: 'AstraZeneca PLC',
    aliases: ['AstraZeneca plc', 'AstraZeneca PLC'],
    ticker: 'AZN',
    exchange: 'NYSE / LSE',
    marketCap: {
      valueUsd: 295160000000,
      asOf: '2026-07-08',
      source: 'StockAnalysis',
      sourceUrl: 'https://stockanalysis.com/stocks/azn/market-cap/',
    },
    sector: 'Health Care',
    industry: 'Pharmaceuticals and biotechnology',
    founded: '1999',
    headquarters: 'Cambridge, England, United Kingdom',
    fiscalYearEnd: 'December 31',
    website: 'https://www.astrazeneca.com/',
    description: 'AstraZeneca is a global, science-led, patient-focused biopharmaceutical company that discovers, develops and commercialises prescription medicines.',
    sourceUrls: [
      'https://www.astrazeneca.com/our-company.html',
      'https://www.sec.gov/Archives/edgar/data/901832/000110465926019130/azn-20251231x20f.htm',
      'https://stockanalysis.com/stocks/azn/market-cap/',
    ],
    i18n: {
      zh: {
        displayName: '阿斯利康',
        sector: '医疗保健',
        industry: '制药与生物技术',
        headquarters: '英国英格兰剑桥',
        fiscalYearEnd: '12 月 31 日',
        description: '阿斯利康是一家全球性、以科学为导向且以患者为中心的生物制药公司，致力于发现、开发并商业化处方药。',
      },
    },
  });
})(window);
