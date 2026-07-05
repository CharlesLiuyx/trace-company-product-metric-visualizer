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
      key: 'fox',
      name: 'FOX',
      legalName: 'Fox Corporation',
      ticker: 'FOXA / FOX',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 27000000000,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/foxa/market-cap/',
      },
      sector: 'Communication Services',
      industry: 'Broadcast television, cable news, sports, and streaming media',
      founded: '2019',
      headquarters: 'New York City, New York, United States',
      fiscalYearEnd: 'June 30',
      website: 'https://www.foxcorporation.com/',
      description:
        'FOX Corporation is a U.S. media company that produces and distributes news, sports, and entertainment. Its brands include the FOX broadcast network, FOX News Media (Fox News Channel and Fox Business), FOX Sports (including FS1 and FS2), FOX Television Stations, MyNetworkTV, and the ad-supported streaming service Tubi.',
      sourceUrls: [
        'https://www.foxcorporation.com/',
        'https://investor.foxcorporation.com/',
        'https://www.foxcorporation.com/about/',
      ],
      i18n: {
        zh: {
          displayName: 'FOX',
          sector: '通信服务',
          industry: '广播电视、有线新闻、体育与流媒体',
          headquarters: '美国纽约州纽约市',
          fiscalYearEnd: '6 月 30 日',
          description:
            'FOX Corporation（福克斯公司）是一家美国媒体公司，负责制作和分发新闻、体育与娱乐内容，旗下品牌包括 FOX 广播电视网、FOX News Media（Fox News Channel 与 Fox Business）、FOX Sports（含 FS1 与 FS2）、FOX 电视台群、MyNetworkTV，以及广告支持的流媒体服务 Tubi。',
        },
      },
    }
  );
})(window);
