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
      key: 'salesforce',
      name: 'Salesforce',
      legalName: 'Salesforce, Inc.',
      ticker: 'CRM',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 124307800000,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/crm/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Enterprise software / CRM',
      founded: '1999',
      headquarters: 'San Francisco, California, United States',
      fiscalYearEnd: 'January 31',
      website: 'https://www.salesforce.com/',
      description:
        'Salesforce is a cloud software company centered on customer relationship management, combining sales, service, marketing, commerce, analytics, data, Slack, platform, and AI agent products.',
      sourceUrls: [
        'https://www.salesforce.com/company/our-story/',
        'https://investor.salesforce.com/financials/annual-reports/default.aspx',
      ],
      i18n: {
        zh: {
          displayName: '赛富时',
        },
      },
    }
  );
})(window);
