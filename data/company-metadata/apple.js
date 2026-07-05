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
      key: 'apple',
      name: 'Apple',
      legalName: 'Apple Inc.',
      ticker: 'AAPL',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 4376979000000,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/aapl/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Consumer electronics, software, online services, and digital platforms',
      founded: '1976',
      headquarters: 'Cupertino, California, United States',
      fiscalYearEnd: 'Last Saturday in September',
      website: 'https://www.apple.com/',
      description:
        'Apple designs, manufactures, and markets smartphones, personal computers, tablets, wearables, accessories, and a range of related services including digital content, cloud, payments, advertising, and App Store offerings.',
      sourceUrls: [
        'https://www.apple.com/',
        'https://investor.apple.com/investor-relations/default.aspx',
        'https://investor.apple.com/sec-filings/default.aspx',
        'https://www.sec.gov/Archives/edgar/data/320193/000032019325000079/aapl-20250927.htm',
      ],
      i18n: {
        zh: {
          displayName: '苹果',
        },
      },
    }
  );
})(window);
