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
      key: 'asml',
      name: 'ASML',
      legalName: 'ASML Holding N.V.',
      ticker: 'ASML',
      exchange: 'Euronext Amsterdam / NASDAQ',
      marketCap: {
        valueUsd: 743732800000,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/asml/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Semiconductor equipment, lithography systems, and chipmaking services',
      founded: '1984',
      headquarters: 'Veldhoven, the Netherlands',
      fiscalYearEnd: 'December 31',
      website: 'https://www.asml.com/',
      description:
        'ASML supplies the semiconductor industry with lithography systems, software, and services used by chipmakers to mass produce integrated circuits, including EUV, DUV, refurbished systems, metrology, inspection, and computational lithography products.',
      sourceUrls: [
        'https://www.asml.com/en/company/about-asml',
        'https://www.asml.com/en/company/about-asml/asml-at-a-glance',
        'https://www.asml.com/en/investors/shares',
        'https://www.asml.com/en/investors/financial-results/q1-2026',
        'https://www.asml.com/en/news/press-releases/2026/q1-2026-financial-results',
      ],
      i18n: {
        zh: {
          displayName: '阿斯麦',
        },
      },
    }
  );
})(window);
