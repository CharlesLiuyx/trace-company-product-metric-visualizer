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
      key: 'starbucks',
      name: 'Starbucks',
      legalName: 'Starbucks Corporation',
      ticker: 'SBUX',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 114710800000,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/sbux/market-cap/',
      },
      sector: 'Consumer Discretionary',
      industry: 'Coffeehouses, beverage retail, prepared food, packaged coffee, ready-to-drink beverages, and licensed stores',
      founded: '1971',
      headquarters: 'Seattle, Washington, United States',
      fiscalYearEnd: 'Sunday closest to September 30',
      website: 'https://www.starbucks.com/',
      description:
        'Starbucks operates company-owned and licensed coffeehouses and sells beverages, food, packaged coffee, ready-to-drink products, and related merchandise across global retail, licensed, and consumer packaged goods channels.',
      sourceUrls: [
        'https://about.starbucks.com/',
        'https://www.starbucks.com/about-us/company-information/',
        'https://investor.starbucks.com/ir-home/default.aspx',
        'https://investor.starbucks.com/stock-info-and-resources/frequently-asked-questions-/default.aspx',
        'https://investor.starbucks.com/financials/quarterly-results-and-data/default.aspx',
        'https://investor.starbucks.com/financials/sec-filings/default.aspx',
      ],
      i18n: {
        zh: {
          displayName: '星巴克',
        },
      },
    }
  );
})(window);
