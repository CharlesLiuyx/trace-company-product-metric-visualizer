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
      key: 'chevron',
      name: 'Chevron',
      legalName: 'Chevron Corporation',
      ticker: 'CVX',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 345200000000,
        asOf: '2026-07-10',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/cvx/market-cap/',
      },
      sector: 'Energy',
      industry: 'Integrated Oil & Gas',
      founded: '1879',
      headquarters: 'Houston, Texas, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.chevron.com/',
      description:
        'Chevron Corporation is an integrated energy company operating upstream oil and gas exploration and production, downstream refining and marketing, chemicals, and lower-carbon energy businesses worldwide.',
      sourceUrls: [
        'https://www.chevron.com/who-we-are/history',
        'https://www.chevron.com/who-we-are/contact/chevron?topic=investor+relations',
        'https://stockanalysis.com/stocks/cvx/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: '雪佛龙',
          sector: '能源',
          industry: '综合石油与天然气',
          headquarters: '美国得克萨斯州休斯敦',
          fiscalYearEnd: '12 月 31 日',
          description:
            '雪佛龙是一家全球综合能源公司，业务涵盖上游油气勘探与生产、下游炼化与营销、化工以及低碳能源。',
        },
      },
    }
  );
})(window);
