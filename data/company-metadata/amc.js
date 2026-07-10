/* Company-profile SSOT record. Profile fields only — period financials stay
 * in data/income-statements/. Format: data/schema.md. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'amc',
    name: 'AMC Entertainment',
    legalName: 'AMC Entertainment Holdings, Inc.',
    ticker: 'AMC',
    exchange: 'NYSE',
    marketCap: {
      valueUsd: 1700000000,
      asOf: '2026-07-09',
      source: 'StockAnalysis',
      sourceUrl: 'https://stockanalysis.com/stocks/amc/market-cap/',
    },
    sector: 'Media',
    industry: 'Entertainment',
    founded: '1920',
    headquarters: 'Leawood, Kansas, United States',
    fiscalYearEnd: 'December 31',
    website: 'https://www.amctheatres.com/',
    description:
      'Theatrical exhibition company that owns, operates, or holds interests in movie theatres in the United States and Europe.',
    sourceUrls: [
      'https://investor.amctheatres.com/company-information',
      'https://www.sec.gov/Archives/edgar/data/1411579/000141157926000016/amc-20251231x10k.htm',
      'https://stockanalysis.com/stocks/amc/market-cap/',
    ],
    i18n: {
      zh: {
        displayName: 'AMC 娱乐',
        sector: '媒体',
        industry: '娱乐',
        headquarters: '美国堪萨斯州利伍德',
        fiscalYearEnd: '12 月 31 日',
        description: '一家在美国和欧洲拥有、运营或持有影院权益的电影放映公司。',
      },
    },
  });
})(window);
