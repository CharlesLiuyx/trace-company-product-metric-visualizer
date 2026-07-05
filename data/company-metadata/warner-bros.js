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
      key: 'warner-bros',
      name: 'Warner Bros. Discovery',
      legalName: 'Warner Bros. Discovery, Inc.',
      aliases: ['Warner Bros', 'Warner Bros Discovery', 'WBD'],
      ticker: 'WBD',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 67030000000,
        asOf: '2026-06-26',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/wbd/market-cap/',
      },
      sector: 'Communication Services',
      industry: 'Media and entertainment, film and television studios, streaming, linear networks, news, sports, gaming, and branded content',
      founded: '2022',
      headquarters: 'New York, New York, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.wbd.com/',
      description:
        'Warner Bros. Discovery is a global media and entertainment company whose portfolio spans film and television studios, HBO Max, discovery+, CNN, DC, TNT Sports, Eurosport, HGTV, Food Network, TLC, TBS, Warner Bros. Games, New Line Cinema, and other branded content, streaming, news, sports, and entertainment assets.',
      sourceUrls: [
        'https://www.wbd.com/',
        'https://www.wbd.com/news/warner-bros-discovery-reports-first-quarter-2026-results',
        'https://ir.wbd.com/',
        'https://ir.wbd.com/news-and-events/financial-news/financial-news-details/2022/Combination-of-Discovery-and-WarnerMedia-Creates-Warner-Bros.-Discovery-Global-Leader-in-Entertainment-and-Streaming/',
        'https://stockanalysis.com/stocks/wbd/company/',
        'https://stockanalysis.com/stocks/wbd/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: '华纳兄弟探索',
          sector: '通信服务',
          industry: '媒体与娱乐、影视工作室、流媒体、线性网络、新闻、体育、游戏和品牌内容',
          headquarters: '美国纽约州纽约',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Warner Bros. Discovery 是一家全球媒体与娱乐公司，业务组合覆盖影视工作室、HBO Max、discovery+、CNN、DC、TNT Sports、Eurosport、HGTV、Food Network、TLC、TBS、Warner Bros. Games、New Line Cinema，以及其他品牌内容、流媒体、新闻、体育和娱乐资产。',
        },
      },
    }
  );
})(window);
