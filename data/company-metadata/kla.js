/* Company-profile SSOT record. Profile fields only — period financials stay
 * in data/income-statements/. Format: data/schema.md. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'kla',
    name: 'KLA',
    legalName: 'KLA Corporation',
    ticker: 'KLAC',
    exchange: 'NASDAQ',
    marketCap: {
      valueUsd: 293260000000,
      asOf: '2026-07-15',
      source: 'StockAnalysis',
      sourceUrl: 'https://stockanalysis.com/stocks/klac/market-cap/',
    },
    sector: 'Information Technology',
    industry: 'Semiconductor process control, yield management, and inspection equipment',
    founded: '1975',
    headquarters: 'Milpitas, California, United States',
    fiscalYearEnd: 'June 30',
    website: 'https://www.kla.com/',
    description:
      'KLA develops process-control and yield-management systems for semiconductor and electronics manufacturing, including inspection, metrology, data analytics, and specialty process equipment.',
    sourceUrls: [
      'https://www.kla.com/',
      'https://ir.kla.com/',
      'https://ir.kla.com/sec-filings/all-sec-filings/content/0000319201-26-000016/klac-20260331.htm',
      'https://stockanalysis.com/stocks/klac/market-cap/',
    ],
    i18n: {
      zh: {
        displayName: '科磊',
        sector: '信息技术',
        industry: '半导体制程控制、良率管理与检测设备',
        headquarters: '美国加利福尼亚州米尔皮塔斯',
        fiscalYearEnd: '6 月 30 日',
        description:
          '科磊开发用于半导体与电子制造的制程控制和良率管理系统，覆盖检测、量测、数据分析及专用制程设备。',
      },
    },
  });
})(window);
