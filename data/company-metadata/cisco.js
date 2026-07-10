/* Company-profile SSOT. Period financials belong in data/income-statements/. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'cisco',
    name: 'Cisco',
    legalName: 'Cisco Systems, Inc.',
    ticker: 'CSCO',
    exchange: 'NASDAQ',
    marketCap: {
      valueUsd: 466310000000,
      asOf: '2026-07-09',
      source: 'StockAnalysis',
      sourceUrl: 'https://stockanalysis.com/stocks/csco/market-cap/',
    },
    sector: 'Information Technology',
    industry: 'Networking hardware, software, cybersecurity, and observability',
    founded: '1984',
    headquarters: 'San Jose, California, United States',
    fiscalYearEnd: 'Last Saturday in July',
    website: 'https://www.cisco.com/',
    description:
      'Cisco designs and sells networking, security, collaboration, observability, software, and services that help customers connect, protect, and operate their digital infrastructure.',
    sourceUrls: [
      'https://www.cisco.com/site/us/en/about/index.html',
      'https://investor.cisco.com/',
      'https://www.sec.gov/Archives/edgar/data/858877/000085887725000111/csco-20250726.htm',
    ],
    i18n: {
      zh: {
        displayName: '思科',
        sector: '信息技术',
        industry: '网络硬件、软件、网络安全与可观测性',
        headquarters: '美国加利福尼亚州圣何塞',
        fiscalYearEnd: '7 月最后一个星期六',
        description: '思科设计和销售网络、安全、协作、可观测性、软件和服务，帮助客户连接、保护并运营其数字基础设施。',
      },
    },
  });
})(window);
