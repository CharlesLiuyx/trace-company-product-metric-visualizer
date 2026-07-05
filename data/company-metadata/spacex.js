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
      key: 'spacex',
      name: 'SpaceX',
      legalName: 'Space Exploration Technologies Corp.',
      ticker: 'SPCX',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 2437224650130,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/spcx/market-cap/',
      },
      sector: 'Industrials',
      industry: 'Aerospace, satellite internet, launch services, and AI infrastructure',
      founded: '2002',
      headquarters: 'Starbase, Texas, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.spacex.com/',
      description:
        'SpaceX develops and operates reusable launch vehicles, spacecraft, Starlink satellite internet services, and AI-related products reflected in the FY25 source chart.',
      sourceUrls: [
        'https://www.spacex.com/',
        'https://www.starlink.com/',
        'https://x.ai/',
        'https://www.space.com/space-exploration/launches-spacecraft/spacex-starlink-17-54-b1093-vsfb-ocisly',
      ],
      i18n: {
        zh: {
          displayName: 'SpaceX',
          sector: '工业',
          industry: '航天、卫星互联网、发射服务和 AI 基础设施',
          headquarters: '美国得克萨斯州 Starbase',
          fiscalYearEnd: '12 月 31 日',
          description:
            'SpaceX 开发并运营可重复使用运载火箭、航天器、Starlink 卫星互联网服务，以及来源图中体现的 AI 相关产品。',
        },
      },
    }
  );
})(window);
