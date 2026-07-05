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
      key: 'sandisk',
      name: 'Sandisk',
      legalName: 'Sandisk Corporation',
      ticker: 'SNDK',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 14000000000,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/sndk/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Semiconductors, NAND flash memory and storage (SSDs, memory cards, flash drives)',
      founded: '1988 (spun off from Western Digital as a standalone company in 2025)',
      headquarters: 'Milpitas, California, United States',
      fiscalYearEnd: 'Friday nearest June 30',
      website: 'https://www.sandisk.com/',
      description:
        'Sandisk designs and manufactures NAND flash memory and storage products — including SSDs, memory cards, and USB flash drives — for datacenter, edge, and consumer markets. It became a standalone public company after Western Digital spun off its flash memory business in 2025.',
      sourceUrls: [
        'https://www.sandisk.com/about',
        'https://investors.sandisk.com/',
        'https://stockanalysis.com/stocks/sndk/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: '闪迪',
          sector: '信息技术',
          industry: '半导体、NAND 闪存与存储（固态硬盘、存储卡、闪存盘）',
          headquarters: '美国加利福尼亚州米尔皮塔斯',
          fiscalYearEnd: '最接近 6 月 30 日的星期五',
          description:
            '闪迪（Sandisk）设计并制造 NAND 闪存与存储产品，包括固态硬盘、存储卡和 U 盘，服务于数据中心、边缘和消费级市场。2025 年西部数据将其闪存业务分拆后，闪迪成为独立上市公司。',
        },
      },
    }
  );
})(window);
