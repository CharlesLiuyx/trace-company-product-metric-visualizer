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
      key: 'alibaba',
      name: 'Alibaba',
      legalName: 'Alibaba Group Holding Limited',
      ticker: 'BABA / 9988',
      exchange: 'NYSE / HKEX',
      marketCap: {
        valueUsd: 248744800000,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/baba/market-cap/',
      },
      sector: 'Consumer Discretionary',
      industry: 'E-commerce, cloud computing, and digital services',
      founded: '1999',
      headquarters: 'Hangzhou, Zhejiang, China',
      fiscalYearEnd: 'March 31',
      website: 'https://www.alibabagroup.com/',
      description:
        'Alibaba Group is a global technology company focused on AI, cloud, and consumption, providing technology infrastructure and marketing reach for merchants, brands, retailers, consumers, and enterprises.',
      sourceUrls: [
        'https://www.alibabagroup.com/en-US/about-alibaba',
        'https://www.alibabagroup.com/en-US/investor-relations',
        'https://www.alibabagroup.com/en-US/document-2003564382071554048',
      ],
      i18n: {
        zh: {
          displayName: '阿里巴巴',
        },
      },
    }
  );
})(window);
