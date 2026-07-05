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
      key: 'sap',
      name: 'SAP',
      legalName: 'SAP SE',
      ticker: 'SAP',
      exchange: 'Frankfurt Stock Exchange / NYSE ADR',
      marketCap: {
        valueUsd: 180520900000,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/sap/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Enterprise applications, business AI, ERP, cloud, database, analytics, and business process software',
      founded: '1972',
      headquarters: 'Walldorf, Baden-Württemberg, Germany',
      fiscalYearEnd: 'December 31',
      website: 'https://www.sap.com/',
      description:
        'SAP is a global enterprise applications and business AI software company whose products help organizations run business-critical operations across finance, procurement, human resources, supply chain, customer experience, analytics, and technology platforms.',
      sourceUrls: [
        'https://www.sap.com/about/company.html',
        'https://www.sap.com/about/what-is-sap.html',
        'https://www.sap.com/investors/en.html',
        'https://www.sap.com/investors/en/financial-documents-and-events.html',
        'https://www.sap.com/investors/en/stock.html',
      ],
      i18n: {
        zh: {
          displayName: '思爱普',
        },
      },
    }
  );
})(window);
