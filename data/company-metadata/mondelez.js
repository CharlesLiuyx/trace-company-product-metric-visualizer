/* Company-profile SSOT record. Profile fields only — period financials stay
 * in data/income-statements/. Format: data/schema.md. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'mondelez',
    name: 'Mondelēz International',
    legalName: 'Mondelēz International, Inc.',
    ticker: 'MDLZ',
    exchange: 'NASDAQ',
    marketCap: {
      valueUsd: 75300000000,
      asOf: '2026-07-09',
      source: 'StockAnalysis',
      sourceUrl: 'https://stockanalysis.com/stocks/mdlz/market-cap/',
    },
    sector: 'Consumer Staples',
    industry: 'Packaged Foods and Snacks',
    founded: '2012',
    headquarters: 'Chicago, Illinois, United States',
    fiscalYearEnd: 'December 31',
    website: 'https://www.mondelezinternational.com/',
    description:
      'Mondelēz International is a global snacking company whose portfolio includes biscuits, chocolate, gum and candy, beverages, and cheese and grocery brands.',
    sourceUrls: [
      'https://ir.mondelezinternational.com/',
      'https://www.mondelezinternational.com/',
      'https://www.sec.gov/Archives/edgar/data/1103982/000162828026005345/mdlz-20251231.htm',
      'https://stockanalysis.com/stocks/mdlz/market-cap/',
    ],
    i18n: {
      zh: {
        displayName: '亿滋国际',
        sector: '必需消费品',
        industry: '包装食品与零食',
        headquarters: '美国伊利诺伊州芝加哥',
        fiscalYearEnd: '12 月 31 日',
        description:
          '亿滋国际是一家全球零食公司，产品组合包括饼干与烘焙零食、巧克力、口香糖与糖果、饮料，以及奶酪与食品杂货品牌。',
      },
    },
  });
})(window);
