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
      key: 'netease',
      name: 'NetEase',
      legalName: 'NetEase, Inc.',
      aliases: ['NetEase Inc.'],
      ticker: 'NTES / 9999',
      exchange: 'NASDAQ / HKEX',
      marketCap: {
        valueUsd: 77870000000,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/ntes/market-cap/',
      },
      sector: 'Communication Services',
      industry: 'Internet and game services, online games, music streaming, intelligent learning, advertising, and private-label consumer products',
      founded: '1997',
      headquarters: 'Hangzhou, Zhejiang, China',
      fiscalYearEnd: 'December 31',
      website: 'https://www.163.com/',
      description:
        'NetEase is an internet and game services provider centered around premium content, with businesses spanning online games, NetEase Cloud Music, Youdao intelligent learning and advertising solutions, and Yanxuan private-label consumer products.',
      sourceUrls: [
        'https://ir.netease.com/',
        'https://ir.netease.com/news-releases/news-release-details/netease-announces-first-quarter-2026-unaudited-financial-results',
        'https://ir.netease.com/financial-information/sec-filings',
        'https://stockanalysis.com/stocks/ntes/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: '网易',
          sector: '通信服务',
          industry: '互联网和游戏服务、网络游戏、音乐流媒体、智能学习、广告及自有品牌消费品',
          headquarters: '中国浙江省杭州市',
          fiscalYearEnd: '12 月 31 日',
          description:
            '网易是一家以精品内容为核心的互联网和游戏服务提供商，业务覆盖网络游戏、网易云音乐、有道智能学习与广告解决方案，以及严选自有品牌消费品。',
        },
      },
    }
  );
})(window);
