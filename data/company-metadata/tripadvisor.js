/* Company-profile SSOT record. Profile fields only — period financials stay
 * in data/income-statements/. Format: data/schema.md. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'tripadvisor',
    name: 'Tripadvisor',
    legalName: 'Tripadvisor, Inc.',
    aliases: ['TripAdvisor', 'TripAdvisor, Inc.'],
    ticker: 'TRIP',
    exchange: 'NASDAQ',
    marketCap: {
      valueUsd: 1600000000,
      asOf: '2026-07-08',
      source: 'StockAnalysis',
      sourceUrl: 'https://stockanalysis.com/stocks/trip/statistics/',
    },
    sector: 'Communication Services',
    industry: 'Interactive Media & Services',
    founded: 'February 2000',
    headquarters: 'Needham, Massachusetts, United States',
    fiscalYearEnd: 'December 31',
    website: 'https://www.tripadvisor.com/',
    description:
      'Tripadvisor operates travel guidance and marketplace businesses that connect travelers with hotels, experiences, restaurants, and other travel partners.',
    sourceUrls: [
      'https://ir.tripadvisor.com/',
      'https://ir.tripadvisor.com/investor-faqs',
      'https://ir.tripadvisor.com/financial-information/quarterly-results',
    ],
    i18n: {
      zh: {
        displayName: '猫途鹰',
        sector: '通信服务',
        industry: '互动媒体与服务',
        headquarters: '美国马萨诸塞州尼达姆',
        fiscalYearEnd: '12 月 31 日',
        description:
          'Tripadvisor 经营旅游信息与交易市场业务，连接旅行者与酒店、体验活动、餐厅及其他旅游合作伙伴。',
      },
    },
  });
})(window);
