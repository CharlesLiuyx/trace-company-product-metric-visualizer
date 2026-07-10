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
      key: 'zscaler',
      name: 'Zscaler',
      legalName: 'Zscaler, Inc.',
      ticker: 'ZS',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 23060000000,
        asOf: '2026-07-08',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/zs/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Cloud security and Zero Trust access platform',
      founded: '2007',
      headquarters: 'San Jose, California, United States',
      fiscalYearEnd: 'July 31',
      website: 'https://www.zscaler.com/',
      description:
        'Zscaler provides a cloud-native security platform that applies Zero Trust principles to connect and protect users, devices, applications, workloads, and data without relying on traditional network perimeters.',
      sourceUrls: [
        'https://www.zscaler.com/company/about-zscaler',
        'https://ir.zscaler.com/',
        'https://ir.zscaler.com/static-files/81d23ced-0cbc-456f-9bd4-2ab317d0ae4e',
        'https://stockanalysis.com/stocks/zs/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'Zscaler',
          sector: '信息技术',
          industry: '云安全与零信任访问平台',
          headquarters: '美国加利福尼亚州圣何塞',
          fiscalYearEnd: '7 月 31 日',
          description:
            'Zscaler 提供云原生安全平台，以零信任原则连接并保护用户、设备、应用、工作负载和数据，减少对传统网络边界的依赖。',
        },
      },
    }
  );
})(window);
