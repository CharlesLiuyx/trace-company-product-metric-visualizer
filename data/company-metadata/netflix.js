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
      key: 'netflix',
      name: 'Netflix',
      legalName: 'Netflix, Inc.',
      ticker: 'NFLX',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 325986000000,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/nflx/market-cap/',
      },
      sector: 'Communication Services',
      industry: 'Streaming entertainment, films, series, games, live programming, and advertising',
      founded: '1997',
      headquarters: 'Los Gatos, California, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.netflix.com/',
      description:
        'Netflix is a global entertainment service offering TV series, films, games, live programming, and advertising-supported plans across a wide variety of genres and languages.',
      sourceUrls: [
        'https://ir.netflix.net/ir-overview/profile/default.aspx',
        'https://about.netflix.com/en',
        'https://ir.netflix.net/financials/sec-filings/default.aspx',
      ],
      i18n: {
        zh: {
          sector: '通信服务',
          industry: '流媒体娱乐、电影、剧集、游戏、直播节目和广告',
          headquarters: '美国加利福尼亚州洛斯盖托斯',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Netflix 是一家全球娱乐服务公司，提供覆盖多种类型和语言的剧集、电影、游戏、直播节目以及含广告套餐。',
        },
      },
    }
  );
})(window);
