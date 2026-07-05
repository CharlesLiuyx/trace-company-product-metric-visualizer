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
      key: 'morgan-stanley',
      name: 'Morgan Stanley',
      legalName: 'Morgan Stanley',
      ticker: 'MS',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 352002700000,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/ms/market-cap/',
      },
      sector: 'Financials',
      industry: 'Investment banking, institutional securities, wealth management, and investment management',
      founded: '1935',
      headquarters: 'New York, New York, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.morganstanley.com/',
      description:
        'Morgan Stanley is a global financial services firm that helps individuals, institutions, corporations, and governments raise, manage, and distribute capital through institutional securities, wealth management, and investment management businesses.',
      sourceUrls: [
        'https://www.morganstanley.com/about-us',
        'https://www.morganstanley.com/about-us-ir',
      ],
      i18n: {
        zh: {
          displayName: '摩根士丹利',
        },
      },
    }
  );
})(window);
