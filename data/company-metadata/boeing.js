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
      key: 'boeing',
      name: 'Boeing',
      legalName: 'The Boeing Company',
      ticker: 'BA',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 170000000000,
        asOf: '2026-06-30',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/ba/market-cap/',
      },
      sector: 'Industrials',
      industry: 'Aerospace and defense: commercial airplanes, defense, space and security systems, and aftermarket global services',
      founded: '1916',
      headquarters: 'Arlington, Virginia, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.boeing.com/',
      description:
        'Boeing is a global aerospace company that develops, manufactures, and services commercial jetliners, military aircraft, satellites, defense and space systems, and provides aftermarket support through its Commercial Airplanes, Defense, Space & Security, and Global Services segments.',
      sourceUrls: [
        'https://www.boeing.com/company',
        'https://investors.boeing.com/',
        'https://stockanalysis.com/stocks/ba/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: '波音',
          sector: '工业',
          industry: '航空航天与国防：商用飞机、国防、太空与安全系统，以及售后全球服务',
          headquarters: '美国弗吉尼亚州阿灵顿',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Boeing 是一家全球航空航天公司，研发、制造并维护商用客机、军用飞机、卫星、国防与太空系统，并通过商用飞机、国防·太空与安全、全球服务三大部门提供售后支持。',
        },
      },
    }
  );
})(window);
