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
      key: 'roku',
      name: 'Roku',
      legalName: 'Roku, Inc.',
      ticker: 'ROKU',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 20570000000,
        asOf: '2026-07-08',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/roku/statistics/',
      },
      sector: 'Communication Services',
      industry: 'Streaming television platform, connected-TV advertising, software, and streaming devices',
      founded: 'October 2002',
      headquarters: 'San Jose, California, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.roku.com/',
      description:
        'Roku is a TV streaming platform whose operating system powers Roku streaming players and Roku TV models, connecting consumers, content publishers, and advertisers.',
      sourceUrls: [
        'https://www.roku.com/en-us/about/company',
        'https://www.roku.com/investor/resources',
        'https://www.roku.com/investor/sec-filings/sec-filing/10-K/11648385',
        'https://stockanalysis.com/stocks/roku/statistics/',
      ],
      i18n: {
        zh: {
          sector: '通信服务',
          industry: '流媒体电视平台、联网电视广告、软件和流媒体设备',
          headquarters: '美国加利福尼亚州圣何塞',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Roku 是一家电视流媒体平台，其操作系统为 Roku 流媒体播放器和 Roku TV 电视机型提供支持，连接消费者、内容发行方与广告主。',
        },
      },
    }
  );
})(window);
