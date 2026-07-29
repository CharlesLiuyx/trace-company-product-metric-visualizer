/* Company-profile SSOT record. Profile fields only — period financials stay
 * in data/income-statements/. Format: data/schema.md. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push(
    {
      key: 'broadcom',
      name: 'Broadcom',
      legalName: 'Broadcom Inc.',
      aliases: ['Broadcom Limited', 'Avago Technologies'],
      ticker: 'AVGO',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 1790000000000,
        asOf: '2026-07-29',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/avgo/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Semiconductors and infrastructure software',
      founded: '1961',
      headquarters: 'San Jose, California, United States',
      fiscalYearEnd: 'Sunday nearest October 31',
      website: 'https://www.broadcom.com/',
      description:
        'Broadcom designs, develops, and supplies semiconductor and infrastructure software solutions for data center, networking, enterprise software, broadband, wireless, storage, industrial, and security markets.',
      sourceUrls: [
        'https://www.broadcom.com/company/about-us',
        'https://www.broadcom.com/company/about-us/company-history',
        'https://investors.broadcom.com/news-releases/news-release-details/broadcom-inc-announces-second-quarter-fiscal-year-2023-financial',
      ],
      i18n: {
        zh: {
          displayName: '博通',
          sector: '信息技术',
          industry: '半导体与基础设施软件',
          headquarters: '美国加利福尼亚州圣何塞',
          fiscalYearEnd: '最接近 10 月 31 日的星期日',
          description:
            '博通设计、开发并供应半导体和基础设施软件解决方案，服务于数据中心、网络、企业软件、宽带、无线、存储、工业及安全等市场。',
        },
      },
    }
  );
})(window);
