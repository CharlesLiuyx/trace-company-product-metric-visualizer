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
      key: 'texas-instruments',
      name: 'Texas Instruments',
      legalName: 'Texas Instruments Incorporated',
      aliases: ['TI'],
      ticker: 'TXN',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 283460000000,
        asOf: '2026-07-10',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/txn/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Semiconductors, analog and embedded processing',
      founded: '1930',
      headquarters: 'Dallas, Texas, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.ti.com/',
      description:
        'Texas Instruments designs and manufactures analog and embedded processing semiconductors, and also provides processing, connectivity, power-management and sensing technologies for industrial, automotive, personal-electronics, enterprise and communications applications.',
      sourceUrls: [
        'https://www.ti.com/about-ti/company.html',
        'https://investor.ti.com/',
        'https://www.ti.com/about-ti/newsroom/news-releases/2026/2026-01-27-ti-reports-q4-2025-and-2025-financial-results-and-shareholder-returns.html',
        'https://stockanalysis.com/stocks/txn/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: '德州仪器',
          sector: '信息技术',
          industry: '半导体、模拟芯片与嵌入式处理',
          headquarters: '美国得克萨斯州达拉斯',
          fiscalYearEnd: '12 月 31 日',
          description:
            '德州仪器设计并制造模拟与嵌入式处理半导体，同时提供面向工业、汽车、个人电子、企业和通信应用的处理、连接、电源管理与传感技术。',
        },
      },
    }
  );
})(window);
