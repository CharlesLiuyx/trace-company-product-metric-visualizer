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
      key: 'nyt',
      name: 'The New York Times Company',
      legalName: 'The New York Times Company',
      ticker: 'NYT',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 11825700000,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/nyt/market-cap/',
      },
      sector: 'Communication Services',
      industry: 'News media, digital subscriptions, advertising, and product review services',
      founded: '1851',
      headquarters: 'New York, New York, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.nytco.com/',
      description:
        'The New York Times Company is a global media organization centered on independent journalism, digital and print subscriptions, advertising, and adjacent products including Wirecutter, Games, Cooking, Audio, and The Athletic.',
      sourceUrls: [
        'https://www.nytco.com/about-us/',
        'https://www.nytco.com/investors/',
        'https://www.nytco.com/investors/financials/',
      ],
      i18n: {
        zh: {
          displayName: '纽约时报',
          sector: '通信服务',
          industry: '新闻媒体、数字订阅、广告与产品评测服务',
          headquarters: '美国纽约州纽约',
          fiscalYearEnd: '12 月 31 日',
          description:
            '纽约时报公司是一家以独立新闻为核心的全球媒体机构，业务涵盖数字与印刷订阅、广告以及 Wirecutter、Games、Cooking、Audio 和 The Athletic 等周边产品。',
        },
      },
    }
  );
})(window);
