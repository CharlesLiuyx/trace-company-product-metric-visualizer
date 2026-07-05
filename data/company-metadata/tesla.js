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
      key: 'tesla',
      name: 'Tesla',
      legalName: 'Tesla, Inc.',
      ticker: 'TSLA',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 1504129900000,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/tsla/market-cap/',
      },
      sector: 'Consumer Discretionary',
      industry: 'Electric vehicles, energy storage, solar energy, charging infrastructure, and real-world AI',
      founded: '2003',
      headquarters: 'Austin, Texas, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.tesla.com/',
      description:
        'Tesla designs, develops, manufactures, sells, and leases electric vehicles and energy generation and storage systems, while also investing in charging, service, autonomous driving, Robotaxi, and Optimus robot capabilities.',
      sourceUrls: [
        'https://www.tesla.com/about',
        'https://ir.tesla.com/',
        'https://www.sec.gov/Archives/edgar/data/1318605/000162828026003952/tsla-20251231.htm',
        'https://www.sec.gov/Archives/edgar/data/1318605/000162828026026673/tsla-20260331.htm',
      ],
      i18n: {
        zh: {
          displayName: '特斯拉',
        },
      },
    }
  );
})(window);
