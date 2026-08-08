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
      key: 'sk-hynix',
      name: 'SK hynix',
      legalName: 'SK hynix Inc.',
      aliases: ['SK Hynix', 'SK하이닉스'],
      ticker: '000660 / SKHY',
      exchange: 'KRX / NASDAQ',
      marketCap: {
        valueUsd: 735360000000,
        asOf: '2026-08-07',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/skhy/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Memory semiconductors, including DRAM, NAND flash, and high-bandwidth memory',
      founded: '1949',
      headquarters: 'Icheon, Gyeonggi-do, South Korea',
      fiscalYearEnd: 'December 31',
      website: 'https://www.skhynix.com/',
      description:
        'SK hynix develops and manufactures memory semiconductors, including DRAM, NAND flash, solid-state storage, and high-bandwidth memory used in data centers, AI systems, mobile devices, and other electronics.',
      sourceUrls: [
        'https://www.skhynix.com/',
        'https://www.skhynix.com/ir/UI-FR-IR03/',
        'https://news.skhynix.com/corporate/fact-sheet/',
        'https://www.sec.gov/Archives/edgar/data/2120882/000119312526299963/d32785d424b4.htm',
      ],
      i18n: {
        zh: {
          displayName: 'SK 海力士',
          sector: '信息技术',
          industry: '存储半导体，包括 DRAM、NAND 闪存和高带宽内存',
          headquarters: '韩国京畿道利川市',
          fiscalYearEnd: '12 月 31 日',
          description:
            'SK 海力士研发和制造存储半导体，包括用于数据中心、AI 系统、移动设备及其他电子产品的 DRAM、NAND 闪存、固态存储和高带宽内存。',
        },
      },
    }
  );
})(window);
