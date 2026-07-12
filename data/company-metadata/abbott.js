/* Company-profile SSOT record. Profile fields only — period financials stay
 * in data/income-statements/. Format: data/schema.md. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'abbott',
    name: 'Abbott',
    legalName: 'Abbott Laboratories',
    ticker: 'ABT',
    exchange: 'NYSE',
    marketCap: {
      valueUsd: 164150000000,
      asOf: '2026-07-10',
      source: 'StockAnalysis',
      sourceUrl: 'https://stockanalysis.com/stocks/abt/market-cap/',
    },
    sector: 'Health Care',
    industry: 'Medical Devices',
    founded: '1888',
    headquarters: 'Abbott Park, Illinois, United States',
    fiscalYearEnd: 'December 31',
    website: 'https://www.abbott.com/',
    description:
      'Abbott is a global health care company that develops and manufactures diagnostics, medical devices, nutrition products, and established pharmaceuticals.',
    sourceUrls: [
      'https://www.abbott.com/en-us/about-abbott',
      'https://www.abbott.com/en-us/about-abbott/faqs',
      'https://www.abbott.com/en-us/corpnewsroom/strategy-and-strength/2025-results-abbott-achieves-double-digit-earnings-growth',
      'https://stockanalysis.com/stocks/abt/market-cap/',
    ],
    i18n: {
      zh: {
        displayName: '雅培',
        sector: '医疗保健',
        industry: '医疗设备',
        headquarters: '美国伊利诺伊州雅培园区',
        fiscalYearEnd: '12 月 31 日',
        description:
          '雅培是一家全球医疗保健公司，开发和生产诊断产品、医疗设备、营养品和成熟药品。',
      },
    },
  });
})(window);
