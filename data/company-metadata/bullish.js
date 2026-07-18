/* Company-profile SSOT record. Profile fields only — period financials stay
 * in data/income-statements/. Format: data/schema.md. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'bullish',
    name: 'Bullish',
    legalName: 'Bullish',
    ticker: 'BLSH',
    exchange: 'NYSE',
    marketCap: {
      valueUsd: 3398000000,
      asOf: '2026-07-17',
      source: 'StockAnalysis',
      sourceUrl: 'https://stockanalysis.com/stocks/blsh/financials/ratios/',
    },
    sector: 'Financials',
    industry: 'Digital asset market infrastructure and information services',
    founded: '2021',
    headquarters: 'George Town, Grand Cayman, Cayman Islands',
    fiscalYearEnd: 'December 31',
    website: 'https://www.bullish.com/',
    description:
      'Bullish is an institutionally focused digital asset platform providing market infrastructure through its regulated exchange and information services through businesses including CoinDesk.',
    sourceUrls: [
      'https://www.bullish.com/us/about-us',
      'https://investors.bullish.com/overview/default.aspx',
      'https://www.sec.gov/Archives/edgar/data/1872195/000143774926007417/blsh20251231_20f.htm',
      'https://stockanalysis.com/stocks/blsh/financials/ratios/',
    ],
    i18n: {
      zh: {
        displayName: 'Bullish',
        sector: '金融',
        industry: '数字资产市场基础设施与信息服务',
        headquarters: '开曼群岛大开曼乔治城',
        fiscalYearEnd: '12 月 31 日',
        description:
          'Bullish 是一家面向机构的数字资产平台，通过受监管交易所提供市场基础设施，并通过包括 CoinDesk 在内的业务提供信息服务。',
      },
    },
  });
})(window);
