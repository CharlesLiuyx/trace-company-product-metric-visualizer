/* Company-profile SSOT record. Period financials stay in data/income-statements/. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'gamestop',
    name: 'GameStop',
    legalName: 'GameStop Corp.',
    ticker: 'GME',
    exchange: 'NYSE',
    marketCap: {
      valueUsd: 10300000000,
      asOf: '2026-07-10',
      source: 'StockAnalysis',
      sourceUrl: 'https://stockanalysis.com/stocks/gme/market-cap/',
    },
    sector: 'Consumer Discretionary',
    industry: 'Specialty Retail',
    founded: '1984',
    headquarters: 'Grapevine, Texas, United States',
    fiscalYearEnd: 'Saturday closest to January 31',
    website: 'https://www.gamestop.com/',
    description: 'GameStop is a specialty retailer of video-game hardware, software, collectibles, and related products.',
    sourceUrls: [
      'https://investor.gamestop.com/news-releases/news-details/2026/GameStop-Discloses-First-Quarter-2026-Results/default.aspx',
      'https://www.sec.gov/Archives/edgar/data/1326380/000132638026000025/gme-20260502.htm',
      'https://stockanalysis.com/stocks/gme/market-cap/',
    ],
    i18n: {
      zh: {
        displayName: '游戏驿站',
        sector: '非必需消费品',
        industry: '专业零售',
        headquarters: '美国得克萨斯州格雷普韦恩',
        fiscalYearEnd: '最接近 1 月 31 日的星期六',
        description: 'GameStop 是一家专营电子游戏硬件、软件、收藏品及相关产品的零售商。',
      },
    },
  });
})(window);
