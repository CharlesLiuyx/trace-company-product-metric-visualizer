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
      key: 'spotify',
      name: 'Spotify',
      legalName: 'Spotify Technology S.A.',
      ticker: 'SPOT',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 133000000000,
        asOf: '2026-06-26',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/spot/market-cap/',
      },
      sector: 'Communication Services',
      industry: 'Audio streaming and media services — music, podcasts, and audiobooks',
      founded: '2006',
      headquarters: 'Stockholm, Sweden',
      fiscalYearEnd: 'December 31',
      website: 'https://www.spotify.com/',
      description:
        'Spotify is an audio streaming platform offering music, podcasts, and audiobooks through an ad-supported free tier and paid Premium subscriptions, connecting creators and advertisers with a global listener base.',
      sourceUrls: [
        'https://www.spotify.com/us/about-us/contact/',
        'https://investors.spotify.com/home/default.aspx',
        'https://investors.spotify.com/financials/default.aspx',
        'https://stockanalysis.com/stocks/spot/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'Spotify',
          sector: '通信服务',
          industry: '音频流媒体与媒体服务——音乐、播客和有声书',
          headquarters: '瑞典斯德哥尔摩',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Spotify 是一家音频流媒体平台，通过广告支持的免费层和付费 Premium 订阅提供音乐、播客和有声书，连接创作者、广告主与全球听众。',
        },
      },
    }
  );
})(window);
