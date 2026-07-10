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
      key: 'coupang',
      name: 'Coupang',
      legalName: 'Coupang, Inc.',
      aliases: ['Coupang, Inc.'],
      ticker: 'CPNG',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 34250000000,
        asOf: '2026-07-09',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/cpng/statistics/',
      },
      sector: 'Consumer Discretionary',
      industry: 'Internet retail',
      founded: '2010',
      headquarters: 'Seattle, Washington, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.aboutcoupang.com/',
      description:
        'Coupang is a technology and consumer-services company that provides retail, marketplace, restaurant delivery, video streaming, fintech, and related services under brands including Coupang, Eats, Play, Rocket Now, and Farfetch.',
      sourceUrls: [
        'https://ir.aboutcoupang.com/news-events/news/news-details/2026/Coupang-Announces-Results-for-Fourth-Quarter-2025/default.aspx',
        'https://www.sec.gov/Archives/edgar/data/1834584/000183458426000022/cpng-20260226.htm',
        'https://stockanalysis.com/stocks/cpng/statistics/',
      ],
      i18n: {
        zh: {
          displayName: '酷澎',
          sector: '非必需消费品',
          industry: '互联网零售',
          headquarters: '美国华盛顿州西雅图',
          fiscalYearEnd: '12 月 31 日',
          description:
            '酷澎是一家科技与消费者服务公司，通过 Coupang、Eats、Play、Rocket Now 和 Farfetch 等品牌提供零售、平台、餐饮配送、视频流媒体、金融科技及相关服务。',
        },
      },
    }
  );
})(window);
