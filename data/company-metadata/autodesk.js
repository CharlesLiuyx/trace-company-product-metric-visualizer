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
      key: 'autodesk',
      name: 'Autodesk',
      legalName: 'Autodesk, Inc.',
      ticker: 'ADSK',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 40670000000,
        asOf: '2026-06-24',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/adsk/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Design and make software for architecture, engineering, construction, product design, manufacturing, media, and entertainment',
      founded: '1982',
      headquarters: 'San Francisco, California, United States',
      fiscalYearEnd: 'January 31',
      website: 'https://www.autodesk.com/',
      description:
        'Autodesk provides Design and Make software and services spanning architecture, engineering, construction, product design, manufacturing, media, and entertainment, helping customers design, build, manufacture, and create digital content.',
      sourceUrls: [
        'https://www.autodesk.com/company',
        'https://www.autodesk.com/company/newsroom/corporate-info',
        'https://investors.autodesk.com/',
        'https://investors.autodesk.com/static-files/b3be800e-0806-43a4-b40a-9a770dc85d54',
        'https://adsknews.autodesk.com/en/pressrelease/autodesk-inc-announces-fiscal-2027-first-quarter-results/',
        'https://stockanalysis.com/stocks/adsk/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: '欧特克',
          sector: '信息技术',
          industry: '面向建筑、工程、施工、产品设计、制造、媒体和娱乐的设计与制造软件',
          headquarters: '美国加利福尼亚州旧金山',
          fiscalYearEnd: '1 月 31 日',
          description:
            'Autodesk 提供覆盖建筑、工程、施工、产品设计、制造、媒体和娱乐的 Design and Make 软件与服务，帮助客户进行设计、建造、制造和数字内容创作。',
        },
      },
    }
  );
})(window);
