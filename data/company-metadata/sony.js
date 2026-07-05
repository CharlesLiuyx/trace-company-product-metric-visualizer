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
      key: 'sony',
      name: 'Sony',
      legalName: 'Sony Group Corporation',
      aliases: ['Sony Group'],
      ticker: 'SONY / 6758',
      exchange: 'NYSE / TSE',
      marketCap: {
        valueUsd: 115030000000,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/sony/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Consumer electronics, gaming, network services, music, pictures, entertainment technology, and image sensors',
      founded: '1946',
      headquarters: 'Minato, Tokyo, Japan',
      fiscalYearEnd: 'March 31',
      website: 'https://www.sony.com/',
      description:
        'Sony Group operates across Game & Network Services, Music, Pictures, Entertainment Technology & Services, Imaging & Sensing Solutions, and other businesses spanning PlayStation, content, electronics, semiconductors, and related services.',
      sourceUrls: [
        'https://www.sony.com/en/SonyInfo/CorporateInfo/',
        'https://www.sony.com/en/SonyInfo/CorporateInfo/data/',
        'https://www.sony.com/en/SonyInfo/IR/',
        'https://www.sony.com/en/SonyInfo/IR/library/presen/er/',
        'https://www.sony.com/en/SonyInfo/IR/library/presen/er/pdf/25q4_sony.pdf',
      ],
      i18n: {
        zh: {
          displayName: '索尼',
          sector: '信息技术',
          industry: '消费电子、游戏、网络服务、音乐、影视、娱乐技术和图像传感器',
          headquarters: '日本东京都港区',
          fiscalYearEnd: '3 月 31 日',
          description:
            'Sony Group 业务覆盖游戏与网络服务、音乐、影视、娱乐技术与服务、成像与传感解决方案及其他业务，包括 PlayStation、内容、电子产品、半导体和相关服务。',
        },
      },
    }
  );
})(window);
