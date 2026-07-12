/* Company-profile SSOT record. Period financials stay in data/income-statements/. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'united',
    name: 'United Airlines',
    legalName: 'United Airlines Holdings, Inc.',
    aliases: ['United', 'United Airlines Holdings', 'UAL'],
    ticker: 'UAL',
    exchange: 'NASDAQ',
    marketCap: {
      valueUsd: 42460000000,
      asOf: '2026-07-09',
      source: 'Stock Analysis',
      sourceUrl: 'https://stockanalysis.com/stocks/ual/market-cap/',
    },
    sector: 'Industrials',
    industry: 'Airlines',
    founded: '1926',
    headquarters: 'Chicago, Illinois, United States',
    fiscalYearEnd: 'December 31',
    website: 'https://www.united.com/',
    description:
      'United Airlines operates a global passenger and cargo airline network through hubs across the United States.',
    sourceUrls: [
      'https://ir.united.com/',
      'https://ir.united.com/sec-filings/sec-filing/10-k/0000100517-26-000023',
      'https://stockanalysis.com/stocks/ual/market-cap/',
    ],
    i18n: {
      zh: {
        displayName: '联合航空',
        sector: '工业',
        industry: '航空公司',
        headquarters: '美国伊利诺伊州芝加哥',
        fiscalYearEnd: '12 月 31 日',
        description: '联合航空通过遍布美国的枢纽运营全球客运与货运航空网络。',
      },
    },
  });
})(window);
