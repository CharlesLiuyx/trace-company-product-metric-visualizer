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
      key: 'hp',
      name: 'HP',
      legalName: 'HP Inc.',
      ticker: 'HPQ',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 21491300000,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/hpq/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Personal computers, printers, print supplies, peripherals, and workplace technology',
      founded: '2015',
      headquarters: 'Palo Alto, California, United States',
      fiscalYearEnd: 'October 31',
      website: 'https://www.hp.com/',
      description:
        'HP Inc. provides personal computing and printing products and services, including notebooks, desktops, workstations, displays, printers, supplies, services, subscriptions, and related solutions for consumers, businesses, and public-sector customers.',
      sourceUrls: [
        'https://www.hp.com/',
        'https://investor.hp.com/',
        'https://investor.hp.com/financials/financial-summary/default.aspx',
        'https://investor.hp.com/financials/sec-filings/default.aspx',
      ],
      i18n: {
        zh: {
          displayName: '惠普',
        },
      },
    }
  );
})(window);
