/* Company-profile SSOT record. Profile fields only — period financials stay
 * in data/income-statements/. Format: data/schema.md. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'chipotle',
    name: 'Chipotle',
    legalName: 'Chipotle Mexican Grill, Inc.',
    ticker: 'CMG',
    exchange: 'NYSE',
    marketCap: {
      valueUsd: 44380000000,
      asOf: '2026-07-10',
      source: 'StockAnalysis',
      sourceUrl: 'https://stockanalysis.com/stocks/cmg/statistics/',
    },
    sector: 'Consumer Discretionary',
    industry: 'Fast-casual restaurants',
    founded: '1993',
    headquarters: 'Newport Beach, California, United States',
    fiscalYearEnd: 'December 31',
    website: 'https://www.chipotle.com/',
    description: 'Chipotle Mexican Grill operates company-owned fast-casual restaurants serving customizable burritos, bowls, tacos, salads, and related food and beverage offerings, with digital ordering and delivery services.',
    sourceUrls: [
      'https://www.chipotle.com/about-us',
      'https://ir.chipotle.com/',
      'https://ir.chipotle.com/sec-filings',
      'https://stockanalysis.com/stocks/cmg/statistics/',
    ],
    i18n: {
      zh: {
        displayName: 'Chipotle',
        sector: '非必需消费品',
        industry: '快休闲餐饮',
        headquarters: '美国加利福尼亚州纽波特海滩',
        fiscalYearEnd: '12 月 31 日',
        description: 'Chipotle Mexican Grill 经营自营快休闲餐厅，提供可定制的墨西哥卷饼、碗餐、塔可、沙拉及相关餐饮，并提供数字点餐与配送服务。',
      },
    },
  });
})(window);
