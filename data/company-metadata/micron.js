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
      key: 'micron',
      name: 'Micron',
      legalName: 'Micron Technology, Inc.',
      ticker: 'MU',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 137000000000,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/mu/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Semiconductors, memory and storage (DRAM, NAND flash, high-bandwidth memory)',
      founded: '1978',
      headquarters: 'Boise, Idaho, United States',
      fiscalYearEnd: 'Thursday nearest August 31',
      website: 'https://www.micron.com/',
      description:
        'Micron designs and manufactures memory and storage semiconductors, including DRAM, NAND flash, and high-bandwidth memory, sold across cloud, data center, mobile, client, automotive, and embedded markets.',
      sourceUrls: [
        'https://www.micron.com/about',
        'https://investors.micron.com/',
        'https://stockanalysis.com/stocks/mu/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: '美光',
          sector: '信息技术',
          industry: '半导体、内存与存储（DRAM、NAND 闪存、高带宽内存）',
          headquarters: '美国爱达荷州博伊西',
          fiscalYearEnd: '最接近 8 月 31 日的星期四',
          description:
            '美光设计并制造内存与存储半导体，包括 DRAM、NAND 闪存和高带宽内存，广泛应用于云、数据中心、移动、客户端、汽车与嵌入式市场。',
        },
      },
    }
  );
})(window);
