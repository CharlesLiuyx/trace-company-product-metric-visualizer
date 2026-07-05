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
      key: 'goldman-sachs',
      name: 'Goldman Sachs',
      legalName: 'The Goldman Sachs Group, Inc.',
      ticker: 'GS',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 323493300000,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/gs/market-cap/',
      },
      sector: 'Financials',
      industry: 'Investment banking, global markets, asset management, wealth management, and platform solutions',
      founded: '1869',
      headquarters: 'New York, New York, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.goldmansachs.com/',
      description:
        'Goldman Sachs is a global financial institution serving corporations, financial institutions, governments, and individuals across Global Banking & Markets, Asset & Wealth Management, and Platform Solutions.',
      sourceUrls: [
        'https://www.goldmansachs.com/',
        'https://www.goldmansachs.com/what-we-do/our-businesses',
        'https://www.goldmansachs.com/investor-relations/',
        'https://www.goldmansachs.com/pressroom/press-releases/2026/2026-04-13-q1-results',
      ],
      i18n: {
        zh: {
          displayName: '高盛',
        },
      },
    }
  );
})(window);
