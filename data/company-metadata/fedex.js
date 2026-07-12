/* Company-profile SSOT record. Profile fields only — period financials stay
 * in data/income-statements/. Format: data/schema.md. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'fedex',
    name: 'FedEx',
    legalName: 'FedEx Corporation',
    aliases: ['Federal Express'],
    ticker: 'FDX',
    exchange: 'NYSE',
    marketCap: {
      valueUsd: 74900000000,
      asOf: '2026-07-10',
      source: 'StockAnalysis',
      sourceUrl: 'https://stockanalysis.com/stocks/fdx/market-cap/',
    },
    sector: 'Industrials',
    industry: 'Integrated freight and logistics, express delivery, ground shipping, freight transportation, and supply-chain services',
    founded: '1971',
    headquarters: 'Memphis, Tennessee, United States',
    fiscalYearEnd: 'May 31 through FY26; transition to December 31 effective June 1, 2026',
    website: 'https://www.fedex.com/',
    description:
      'FedEx provides global transportation, e-commerce, and business services through express parcel delivery, freight transportation, logistics, and digital shipping solutions.',
    sourceUrls: [
      'https://www.fedex.com/en-us/about.html',
      'https://investors.fedex.com/',
      'https://investors.fedex.com/news-and-events/earnings-releases/default.aspx',
      'https://stockanalysis.com/stocks/fdx/market-cap/',
    ],
    i18n: {
      zh: {
        displayName: '联邦快递',
        sector: '工业',
        industry: '综合货运与物流、快递、陆运、货运运输和供应链服务',
        headquarters: '美国田纳西州孟菲斯',
        fiscalYearEnd: '2026 财年前为 5 月 31 日；自 2026 年 6 月 1 日起过渡为 12 月 31 日',
        description:
          'FedEx 通过快递包裹、货运运输、物流和数字化寄件解决方案，在全球提供运输、电商和企业服务。',
      },
    },
  });
})(window);
