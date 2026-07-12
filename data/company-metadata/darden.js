/* Company-profile SSOT record. Period financials stay in data/income-statements/. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'darden',
    name: 'Darden Restaurants',
    legalName: 'Darden Restaurants, Inc.',
    ticker: 'DRI',
    exchange: 'NYSE',
    marketCap: {
      valueUsd: 23390000000,
      asOf: '2026-07-10',
      source: 'StockAnalysis',
      sourceUrl: 'https://stockanalysis.com/stocks/dri/market-cap/',
    },
    sector: 'Consumer Discretionary',
    industry: 'Restaurants',
    founded: '1995',
    headquarters: 'Orlando, Florida, United States',
    fiscalYearEnd: 'Last Sunday in May',
    website: 'https://www.darden.com/',
    description: 'Darden Restaurants is a full-service restaurant company whose portfolio includes Olive Garden, LongHorn Steakhouse, Cheddar’s Scratch Kitchen, Yard House, Ruth’s Chris Steak House, The Capital Grille, Chuy’s, Seasons 52, and Eddie V’s.',
    sourceUrls: [
      'https://www.darden.com/',
      'https://www.sec.gov/Archives/edgar/data/940944/000094094426000016/exhibit991-q4fy26.htm',
      'https://stockanalysis.com/stocks/dri/market-cap/',
    ],
    i18n: {
      zh: {
        displayName: '达登餐饮集团',
        sector: '非必需消费品',
        industry: '餐饮业',
        headquarters: '美国佛罗里达州奥兰多',
        fiscalYearEnd: '5 月最后一个星期日',
        description: '达登餐饮集团是一家全服务餐饮公司，旗下品牌包括 Olive Garden、LongHorn Steakhouse、Cheddar’s Scratch Kitchen、Yard House、Ruth’s Chris Steak House、The Capital Grille、Chuy’s、Seasons 52 和 Eddie V’s。',
      },
    },
  });
})(window);
