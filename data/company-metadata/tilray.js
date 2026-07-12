/* Company profile SSOT for Tilray Brands. */
(function (global) {
  'use strict';

  const profiles = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  profiles.companies.push({
    key: 'tilray',
    name: 'Tilray Brands',
    legalName: 'Tilray Brands, Inc.',
    ticker: 'TLRY',
    exchange: 'NASDAQ',
    marketCap: {
      valueUsd: 551090000,
      asOf: '2026-07-02',
      source: 'StockAnalysis',
      sourceUrl: 'https://stockanalysis.com/stocks/tlry/market-cap/',
    },
    sector: 'Consumer Staples',
    industry: 'Beverages & Cannabis',
    founded: '2018',
    headquarters: 'Leamington, Ontario, Canada',
    fiscalYearEnd: 'May 31',
    website: 'https://tilray.com/',
    description: 'Tilray Brands is a global lifestyle and consumer packaged goods company operating across beverage alcohol, cannabis, wellness, and distribution.',
    sourceUrls: [
      'https://ir.tilray.com/',
      'https://ir.tilray.com/investor-resources/faqs/',
      'https://stockanalysis.com/stocks/tlry/market-cap/',
    ],
    i18n: {
      zh: {
        sector: '必选消费',
        industry: '饮料与大麻',
        headquarters: '加拿大安大略省利明顿',
        fiscalYearEnd: '5 月 31 日',
        description: 'Tilray Brands 是一家全球生活方式与消费包装品公司，业务覆盖酒精饮料、大麻、健康产品及分销。',
      },
    },
  });
})(window);
