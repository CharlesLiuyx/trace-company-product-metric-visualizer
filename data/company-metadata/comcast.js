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
      key: 'comcast',
      name: 'Comcast',
      legalName: 'Comcast Corporation',
      aliases: ['Comcast Corporation', 'CMCSA'],
      ticker: 'CMCSA',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 84200000000,
        asOf: '2026-07-10',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/cmcsa/market-cap/',
      },
      sector: 'Communication Services',
      industry: 'Broadband, wireless, cable, media, entertainment, film, television, streaming, and theme parks',
      founded: '1963',
      headquarters: 'Philadelphia, Pennsylvania, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://corporate.comcast.com/',
      description:
        'Comcast is a global media and technology company that provides broadband, wireless, and video through Xfinity, Comcast Business, and Sky; produces and distributes entertainment, sports, and news through NBCUniversal and Sky; and operates Universal Destinations & Experiences theme parks and attractions.',
      sourceUrls: [
        'https://corporate.comcast.com/',
        'https://cmcsa.gcs-web.com/news-releases/news-release-details/comcast-reports-4th-quarter-2025-results',
        'https://www.sec.gov/Archives/edgar/data/1166691/000116669126000010/cmcsa-20251231.htm',
        'https://stockanalysis.com/stocks/cmcsa/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: '康卡斯特',
          sector: '通信服务',
          industry: '宽带、无线、付费电视、媒体、娱乐、电影、电视、流媒体和主题公园',
          headquarters: '美国宾夕法尼亚州费城',
          fiscalYearEnd: '12 月 31 日',
          description:
            '康卡斯特是一家全球媒体与科技公司：通过 Xfinity、Comcast Business 和 Sky 提供宽带、无线和视频服务；通过 NBCUniversal 和 Sky 制作及发行娱乐、体育和新闻内容；并经营 Universal Destinations & Experiences 主题公园和景点业务。',
        },
      },
    }
  );
})(window);
