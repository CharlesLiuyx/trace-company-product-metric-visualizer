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
      key: 'axon',
      name: 'Axon',
      legalName: 'Axon Enterprise, Inc.',
      aliases: ['Axon Enterprise'],
      ticker: 'AXON',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 48300000000,
        asOf: '2026-07-08',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/axon/market-cap/',
      },
      sector: 'Technology',
      industry: 'Public safety technology, conducted energy devices, body cameras, and digital evidence software',
      founded: '1993',
      headquarters: 'Scottsdale, Arizona, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.axon.com/',
      description:
        'Axon develops public-safety technology spanning TASER conducted energy devices, connected cameras and sensors, digital evidence management, and cloud software for first responders and related organizations.',
      sourceUrls: [
        'https://www.axon.com/blog/founders-day',
        'https://www.axon.com/blog/axon-halts-scottsdale-headquarters-groundbreaking-opens-nationwide-search-for-new-location',
        'https://investor.axon.com/press-releases',
        'https://stockanalysis.com/stocks/axon/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'Axon',
          sector: '信息技术',
          industry: '公共安全技术、导电能量设备、执法记录仪与数字证据软件',
          headquarters: '美国亚利桑那州斯科茨代尔',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Axon 面向公共安全领域开发技术产品，覆盖 TASER 导电能量设备、联网摄像头和传感器、数字证据管理与面向急救响应者等机构的云软件。',
        },
      },
    }
  );
})(window);
