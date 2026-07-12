/* Company-profile SSOT record. Period financials stay in data/income-statements/. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'delta',
    name: 'Delta Air Lines',
    legalName: 'Delta Air Lines, Inc.',
    aliases: ['Delta', 'Delta Air Lines, Inc.', 'DAL'],
    ticker: 'DAL',
    exchange: 'NYSE',
    marketCap: {
      valueUsd: 57410000000,
      asOf: '2026-07-10',
      source: 'CompaniesMarketCap',
      sourceUrl: 'https://companiesmarketcap.com/delta-air-lines/marketcap/',
    },
    sector: 'Industrials',
    industry: 'Airlines',
    founded: '1924',
    headquarters: 'Atlanta, Georgia, United States',
    fiscalYearEnd: 'December 31',
    website: 'https://www.delta.com/',
    description:
      'Delta Air Lines operates a global passenger and cargo airline network through hubs in the United States and international gateway markets.',
    sourceUrls: [
      'https://ir.delta.com/',
      'https://ir.delta.com/financials/default.aspx',
      'https://ir.delta.com/news/news-details/2026/Delta-Air-Lines-Announces-December-Quarter-and-Full-Year-2025-Financial-Results/default.aspx',
      'https://companiesmarketcap.com/delta-air-lines/marketcap/',
    ],
    i18n: {
      zh: {
        displayName: '达美航空',
        sector: '工业',
        industry: '航空公司',
        headquarters: '美国佐治亚州亚特兰大',
        fiscalYearEnd: '12 月 31 日',
        description: '达美航空通过其在美国和国际门户市场的枢纽运营全球客运与货运航空网络。',
      },
    },
  });
})(window);
