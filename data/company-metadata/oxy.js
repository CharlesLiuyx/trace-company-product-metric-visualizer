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
      key: 'oxy',
      name: 'Oxy',
      legalName: 'Occidental Petroleum Corporation',
      aliases: ['Occidental', 'Occidental Petroleum'],
      ticker: 'OXY',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 52010000000,
        asOf: '2026-07-10',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/oxy/market-cap/',
      },
      sector: 'Energy',
      industry: 'Oil & Gas Exploration and Production',
      founded: '1920',
      headquarters: 'Houston, Texas, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.oxy.com/',
      description:
        'Oxy is an international energy company with oil and gas production, midstream and marketing infrastructure, and low-carbon businesses focused primarily in the United States, the Middle East, and North Africa.',
      sourceUrls: [
        'https://www.oxy.com/about/',
        'https://www.oxy.com/contact-us/',
        'https://www.oxy.com/siteassets/documents/investors/2025-annual-report.pdf',
        'https://stockanalysis.com/stocks/oxy/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: '西方石油',
          sector: '能源',
          industry: '石油与天然气勘探及生产',
          headquarters: '美国得克萨斯州休斯敦',
          fiscalYearEnd: '12 月 31 日',
          description:
            '西方石油是一家国际能源公司，主要在美国、中东和北非经营油气生产、中游与营销基础设施及低碳业务。',
        },
      },
    }
  );
})(window);
