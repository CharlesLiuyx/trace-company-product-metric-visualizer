/* Company-profile SSOT record. Profile fields only — period financials stay
 * in data/income-statements/. Format: data/schema.md. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'the-trade-desk',
    name: 'The Trade Desk',
    legalName: 'The Trade Desk, Inc.',
    ticker: 'TTD',
    exchange: 'NASDAQ',
    marketCap: {
      valueUsd: 9280000000,
      asOf: '2026-07-09',
      source: 'StockAnalysis',
      sourceUrl: 'https://stockanalysis.com/stocks/ttd/market-cap/',
    },
    sector: 'Communication Services',
    industry: 'Advertising technology',
    founded: '2009',
    headquarters: 'Ventura, California, United States',
    fiscalYearEnd: 'December 31',
    website: 'https://www.thetradedesk.com/',
    description:
      'The Trade Desk operates a self-service, cloud-based platform that lets advertising buyers create, manage, and optimize digital advertising campaigns across formats and devices.',
    sourceUrls: [
      'https://www.thetradedesk.com/press-room/the-trade-desk-reports-fourth-quarter-and-fiscal-year-2025-financial-results',
      'https://www.thetradedesk.com/about-us/our-leadership',
      'https://stockanalysis.com/stocks/ttd/market-cap/',
    ],
    i18n: {
      zh: {
        displayName: 'The Trade Desk',
        sector: '通信服务',
        industry: '广告技术',
        headquarters: '美国加利福尼亚州文图拉',
        fiscalYearEnd: '12 月 31 日',
        description:
          'The Trade Desk 运营自助式云平台，帮助广告购买方在不同广告形式和设备上创建、管理并优化数字广告活动。',
      },
    },
  });
})(window);
