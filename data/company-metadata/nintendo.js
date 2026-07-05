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
      key: 'nintendo',
      name: 'Nintendo',
      legalName: 'Nintendo Co., Ltd.',
      aliases: ['Nintendo Co.'],
      ticker: '7974 / NTDOY',
      exchange: 'TSE / OTCMKTS',
      marketCap: {
        valueUsd: 46990000000,
        asOf: '2026-06-26',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/quote/otc/NTDOY/market-cap/',
      },
      sector: 'Communication Services',
      industry: 'Electronic gaming, multimedia entertainment, video game hardware, software, services, and IP licensing',
      founded: 'September 1889',
      headquarters: 'Kyoto, Japan',
      fiscalYearEnd: 'March 31',
      website: 'https://www.nintendo.co.jp/',
      description:
        'Nintendo develops, manufactures, and sells home entertainment products, including dedicated video game hardware, software, accessories, online services, smart-device content, character IP, licensing, and related merchandise.',
      sourceUrls: [
        'https://www.nintendo.co.jp/corporate/en/outline/index.html',
        'https://www.nintendo.co.jp/ir/en/index.html',
        'https://www.nintendo.co.jp/ir/pdf/2026/260508e.pdf',
        'https://www.nintendo.co.jp/ir/pdf/2026/260508_4e.pdf',
        'https://stockanalysis.com/quote/otc/NTDOY/company/',
        'https://stockanalysis.com/quote/otc/NTDOY/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: '任天堂',
          sector: '通信服务',
          industry: '电子游戏、多媒体娱乐、游戏硬件、软件、服务和 IP 授权',
          headquarters: '日本京都',
          fiscalYearEnd: '3 月 31 日',
          description:
            '任天堂开发、制造和销售家庭娱乐产品，业务包括专用电子游戏硬件、软件、配件、在线服务、智能设备内容、角色 IP、授权及相关商品。',
        },
      },
    }
  );
})(window);
