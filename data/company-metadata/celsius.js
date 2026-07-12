/* Company-profile SSOT record. Period financials stay in data/income-statements/. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'celsius',
    name: 'Celsius',
    legalName: 'Celsius Holdings, Inc.',
    ticker: 'CELH',
    exchange: 'NASDAQ',
    marketCap: {
      valueUsd: 7820000000,
      asOf: '2026-07-10',
      source: 'StockAnalysis',
      sourceUrl: 'https://stockanalysis.com/stocks/celh/market-cap/',
    },
    sector: 'Consumer Staples',
    industry: 'Non-alcoholic Beverages',
    founded: '2004',
    headquarters: 'Boca Raton, Florida, United States',
    fiscalYearEnd: 'December 31',
    website: 'https://www.celsius.com/',
    description: 'Celsius Holdings is a functional beverage company that owns the CELSIUS energy-drink brand, Alani Nu health and wellness brand, and Rockstar Energy.',
    sourceUrls: [
      'https://ir.celsiusholdingsinc.com/news/news-details/2026/Celsius-Holdings-Reports-First-Quarter-2026-Financial-Results/default.aspx',
      'https://www.sec.gov/Archives/edgar/data/1341766/000134176626000039/celh-20260331.htm',
      'https://stockanalysis.com/stocks/celh/market-cap/',
    ],
    i18n: {
      zh: {
        displayName: 'Celsius',
        sector: '日常消费品',
        industry: '非酒精饮料',
        headquarters: '美国佛罗里达州博卡拉顿',
        fiscalYearEnd: '12 月 31 日',
        description: 'Celsius Holdings 是一家功能饮料公司，拥有 CELSIUS 能量饮料、Alani Nu 健康与保健品牌以及 Rockstar Energy。',
      },
    },
  });
})(window);
