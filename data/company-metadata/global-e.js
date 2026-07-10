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
      key: 'global-e',
      name: 'Global-e',
      legalName: 'Global-E Online Ltd.',
      aliases: ['Global-E Online Ltd.', 'Global-e Online Ltd.'],
      ticker: 'GLBE',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 6360000000,
        asOf: '2026-07-09',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/glbe/market-cap/',
      },
      sector: 'Consumer Discretionary',
      industry: 'Internet retail and cross-border e-commerce enablement platform',
      founded: 'February 2013',
      headquarters: 'Petah Tikva, Israel',
      fiscalYearEnd: 'December 31',
      website: 'https://www.global-e.com/',
      description:
        'Global-e provides end-to-end platforms that help merchants sell directly to consumers across borders by localizing pricing, payments, duties and taxes, shipping, after-sales support, and returns.',
      sourceUrls: [
        'https://www.global-e.com/en/about/',
        'https://investors.global-e.com/',
        'https://investors.global-e.com/static-files/1add324d-0402-4393-9c01-5481db28e3d0',
        'https://stockanalysis.com/stocks/glbe/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'Global-e',
          sector: '非必需消费品',
          industry: '互联网零售与跨境电商赋能平台',
          headquarters: '以色列佩塔提克瓦',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Global-e 提供端到端平台，通过本地化定价、支付、关税与税费、物流、售后支持和退货管理，帮助商家面向全球消费者开展跨境直销。',
        },
      },
    }
  );
})(window);
