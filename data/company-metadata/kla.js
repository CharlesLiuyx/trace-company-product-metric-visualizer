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
      key: 'kla',
      name: 'KLA',
      legalName: 'KLA Corporation',
      ticker: 'KLAC',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 301890000000,
        asOf: '2026-07-15',
        source: 'CompaniesMarketCap',
        sourceUrl: 'https://companiesmarketcap.com/kla/marketcap/',
      },
      sector: 'Information Technology',
      industry: 'Semiconductor process control and yield management equipment',
      founded: '1975',
      headquarters: 'Milpitas, California, United States',
      fiscalYearEnd: 'June 30',
      website: 'https://www.kla.com/',
      description:
        'KLA develops process control and yield management systems for the semiconductor and related electronics industries, including wafer inspection, patterning, metrology, and specialty semiconductor process equipment and services.',
      sourceUrls: [
        'https://www.kla.com/',
        'https://ir.kla.com/',
        'https://en.wikipedia.org/wiki/KLA_Corporation',
        'https://companiesmarketcap.com/kla/marketcap/',
      ],
      i18n: {
        zh: {
          displayName: '科磊',
          sector: '信息技术',
          industry: '半导体过程控制与良率管理设备',
          headquarters: '美国加利福尼亚州米尔皮塔斯',
          fiscalYearEnd: '6 月 30 日',
          description:
            '科磊（KLA）为半导体及相关电子行业开发过程控制与良率管理系统，涵盖晶圆检测、图形化、量测以及特种半导体制程设备与服务。',
        },
      },
    }
  );
})(window);
