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
      key: 'meta',
      name: 'Meta',
      legalName: 'Meta Platforms, Inc.',
      ticker: 'META',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 1465228700000,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/meta/market-cap/',
      },
      sector: 'Communication Services',
      industry: 'Social media, digital advertising, messaging, AI, and virtual and augmented reality platforms',
      founded: '2004',
      headquarters: 'Menlo Park, California, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.meta.com/',
      description:
        'Meta builds social, messaging, advertising, AI, and reality-platform products across Facebook, Instagram, Messenger, WhatsApp, Threads, Meta Quest, and related developer and business services.',
      sourceUrls: [
        'https://about.meta.com/company-info/',
        'https://investor.atmeta.com/home/default.aspx',
        'https://investor.atmeta.com/financials/',
        'https://investor.atmeta.com/financials/sec-filings/default.aspx',
      ],
      i18n: {
        zh: {
          displayName: 'Meta',
          sector: '通信服务',
          industry: '社交媒体、数字广告、消息服务、AI 与虚拟和增强现实平台',
          headquarters: '美国加利福尼亚州门洛帕克',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Meta 打造社交、消息、广告、AI 与现实平台产品，覆盖 Facebook、Instagram、Messenger、WhatsApp、Threads、Meta Quest 以及相关开发者和企业服务。',
        },
      },
    }
  );
})(window);
