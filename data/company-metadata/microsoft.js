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
      key: 'microsoft',
      name: 'Microsoft',
      legalName: 'Microsoft Corporation',
      ticker: 'MSFT',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 2818348100000,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/msft/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Software, cloud computing, AI platforms, productivity, gaming, and devices',
      founded: '1975',
      headquarters: 'Redmond, Washington, United States',
      fiscalYearEnd: 'June 30',
      website: 'https://www.microsoft.com/',
      description:
        'Microsoft develops platforms and tools powered by AI, spanning cloud infrastructure and services, business productivity applications, Windows and devices, LinkedIn, gaming, search, developer tooling, security, and business applications.',
      sourceUrls: [
        'https://news.microsoft.com/facts-about-microsoft/',
        'https://www.microsoft.com/en-us/about',
        'https://www.microsoft.com/en-us/investor/faq',
        'https://www.microsoft.com/en-us/Investor/earnings/FY-2026-Q3/press-release-webcast',
      ],
      i18n: {
        zh: {
          displayName: '微软',
        },
      },
    }
  );
})(window);
