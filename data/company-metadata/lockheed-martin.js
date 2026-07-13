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
      key: 'lockheed-martin',
      name: 'Lockheed Martin',
      legalName: 'Lockheed Martin Corporation',
      ticker: 'LMT',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 119760000000,
        asOf: '2026-07-13',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/lmt/market-cap/',
      },
      sector: 'Industrials',
      industry: 'Aerospace and defense: combat aircraft, missiles and fire control, rotary and mission systems, and space systems',
      founded: '1995',
      headquarters: 'Bethesda, Maryland, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.lockheedmartin.com/',
      description:
        'Lockheed Martin is a global security and aerospace company that researches, designs, and manufactures advanced technology systems — combat aircraft such as the F-35, missiles and fire control systems, helicopters and mission systems, and spacecraft — primarily for the U.S. government and allied nations, across its Aeronautics, Missiles and Fire Control, Rotary and Mission Systems, and Space segments.',
      sourceUrls: [
        'https://www.lockheedmartin.com/en-us/who-we-are.html',
        'https://investors.lockheedmartin.com/',
        'https://stockanalysis.com/stocks/lmt/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: '洛克希德·马丁',
          sector: '工业',
          industry: '航空航天与国防：战斗机、导弹与火控、旋翼与任务系统、太空系统',
          headquarters: '美国马里兰州贝塞斯达',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Lockheed Martin 是一家全球安全与航空航天公司，研发、设计并制造先进技术系统——F-35 等战斗机、导弹与火控系统、直升机与任务系统以及航天器——主要服务于美国政府及盟国，业务分为航空、导弹与火控、旋翼与任务系统、太空四大部门。',
        },
      },
    }
  );
})(window);
