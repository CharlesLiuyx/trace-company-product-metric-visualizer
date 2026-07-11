/* Company-profile SSOT record. Profile fields only — period financials stay
 * in data/income-statements/. Format: data/schema.md. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'circle',
    name: 'Circle',
    legalName: 'Circle Internet Group, Inc.',
    aliases: ['Circle Internet Group'],
    ticker: 'CRCL',
    exchange: 'NYSE',
    marketCap: {
      valueUsd: 16440000000,
      asOf: '2026-07-10',
      source: 'StockAnalysis',
      sourceUrl: 'https://stockanalysis.com/stocks/crcl/market-cap/',
    },
    sector: 'Financials',
    industry: 'Stablecoin and blockchain payments infrastructure',
    founded: '2013',
    headquarters: 'New York, New York, United States',
    fiscalYearEnd: 'December 31',
    website: 'https://www.circle.com/',
    description:
      'Circle is a financial technology company that provides stablecoin, payments, and blockchain infrastructure, including USDC and EURC, for businesses and developers.',
    sourceUrls: [
      'https://investor.circle.com/overview/default.aspx',
      'https://investor.circle.com/resources/investor-faqs/default.aspx',
      'https://stockanalysis.com/stocks/crcl/company/',
      'https://stockanalysis.com/stocks/crcl/market-cap/',
    ],
    i18n: {
      zh: {
        displayName: 'Circle',
        sector: '金融',
        industry: '稳定币与区块链支付基础设施',
        headquarters: '美国纽约州纽约市',
        fiscalYearEnd: '12 月 31 日',
        description:
          'Circle 是一家金融科技公司，为企业和开发者提供稳定币、支付和区块链基础设施，主要产品包括 USDC 和 EURC。',
      },
    },
  });
})(window);
