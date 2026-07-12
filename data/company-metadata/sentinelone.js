/* Company-profile SSOT. Period financials live in data/income-statements/. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'sentinelone',
    name: 'SentinelOne',
    legalName: 'SentinelOne, Inc.',
    ticker: 'S',
    exchange: 'NYSE',
    marketCap: {
      valueUsd: 6470000000,
      asOf: '2026-07-09',
      source: 'StockAnalysis',
      sourceUrl: 'https://stockanalysis.com/stocks/s/market-cap/',
    },
    sector: 'Information Technology',
    industry: 'Cybersecurity software',
    founded: '2013',
    headquarters: 'Mountain View, California, United States',
    fiscalYearEnd: 'January 31',
    website: 'https://www.sentinelone.com/',
    description:
      'SentinelOne provides an AI-powered cybersecurity platform for autonomous prevention, detection, and response across endpoint, cloud, identity, and data environments.',
    sourceUrls: [
      'https://www.sentinelone.com/',
      'https://investors.sentinelone.com/',
      'https://www.sec.gov/Archives/edgar/data/1583708/000158370826000020/s-20260131.htm',
      'https://stockanalysis.com/stocks/s/market-cap/',
    ],
    i18n: {
      zh: {
        displayName: 'SentinelOne',
        sector: '信息技术',
        industry: '网络安全软件',
        headquarters: '美国加利福尼亚州山景城',
        fiscalYearEnd: '1 月 31 日',
        description:
          'SentinelOne 提供 AI 驱动的网络安全平台，在端点、云、身份和数据环境中实现自主预防、检测与响应。',
      },
    },
  });
})(window);
