/* Company-profile SSOT record. Profile fields only — period financials stay
 * in data/income-statements/. Format: data/schema.md. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'p-g',
    name: 'P&G',
    legalName: 'The Procter & Gamble Company',
    ticker: 'PG',
    exchange: 'NYSE',
    marketCap: {
      valueUsd: 343490000000,
      asOf: '2026-07-10',
      source: 'StockAnalysis',
      sourceUrl: 'https://stockanalysis.com/stocks/pg/market-cap/',
    },
    sector: 'Consumer Staples',
    industry: 'Household and personal care products',
    founded: '1837',
    headquarters: 'Cincinnati, Ohio, United States',
    fiscalYearEnd: 'June 30',
    website: 'https://us.pg.com/',
    description:
      'P&G is a global branded consumer-products company organized around Beauty, Grooming, Health Care, Fabric & Home Care, and Baby, Feminine & Family Care.',
    sourceUrls: [
      'https://us.pg.com/',
      'https://us.pg.com/cincinnati-hq/',
      'https://www.pginvestor.com/financial-reporting/quarterly-results',
      'https://www.sec.gov/edgar/browse/?CIK=80424&owner=exclude',
      'https://stockanalysis.com/stocks/pg/market-cap/',
    ],
    i18n: {
      zh: {
        displayName: '宝洁',
        sector: '日常消费品',
        industry: '家庭及个人护理产品',
        headquarters: '美国俄亥俄州辛辛那提',
        fiscalYearEnd: '6 月 30 日',
        description:
          '宝洁是一家全球品牌消费品公司，业务围绕美容、男士理容、健康护理、织物及家居护理，以及婴幼儿、女性及家庭护理五大板块展开。',
      },
    },
  });
})(window);
