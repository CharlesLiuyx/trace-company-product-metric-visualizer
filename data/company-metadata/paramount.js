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
      key: 'paramount',
      name: 'Paramount',
      legalName: 'Paramount Skydance Corporation',
      aliases: ['Paramount Skydance', 'Paramount, a Skydance Corporation', 'Paramount Global'],
      ticker: 'PSKY',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 10920000000,
        asOf: '2026-06-24',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/psky/market-cap/',
      },
      sector: 'Communication Services',
      industry: 'Media and entertainment, studios, television networks, streaming, broadcasting, licensing, advertising, and sports entertainment',
      founded: '2025',
      headquarters: 'Los Angeles, California and New York, New York, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.paramount.com/',
      description:
        'Paramount is a global media and entertainment company combining Paramount and Skydance assets across Studios, Direct-to-Consumer, and TV Media, including Paramount Pictures, CBS, Nickelodeon, MTV, BET, Comedy Central, Showtime, Paramount+, Pluto TV, Skydance Animation, Film, Television, Interactive/Games, and sports entertainment.',
      sourceUrls: [
        'https://www.paramount.com/press/skydance-media-and-paramount-global-complete-merger-creating-next-generation-media-company',
        'https://ir.paramount.com/',
        'https://ir.paramount.com/static-files/c892f681-51f0-4107-ba09-d4335f2c3257',
        'https://stockanalysis.com/stocks/psky/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'Paramount',
          sector: '通信服务',
          industry: '媒体与娱乐、影视工作室、电视网络、流媒体、广播、授权、广告和体育娱乐',
          headquarters: '美国加利福尼亚州洛杉矶和纽约州纽约',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Paramount 是一家全球媒体与娱乐公司，整合 Paramount 与 Skydance 资产，业务覆盖 Studios、Direct-to-Consumer 和 TV Media，包括 Paramount Pictures、CBS、Nickelodeon、MTV、BET、Comedy Central、Showtime、Paramount+、Pluto TV、Skydance 动画、电影、电视、互动/游戏以及体育娱乐。',
        },
      },
    }
  );
})(window);
