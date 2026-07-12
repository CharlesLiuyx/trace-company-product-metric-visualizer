/* Company-profile SSOT record. Profile fields only — period financials stay
 * in data/income-statements/. Format: data/schema.md. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'ge-vernova',
    name: 'GE Vernova',
    legalName: 'GE Vernova Inc.',
    aliases: ['GE Vernova Inc.'],
    ticker: 'GEV',
    exchange: 'NYSE',
    sector: 'Industrials',
    industry: 'Power generation, grid electrification, and wind energy equipment and services',
    founded: 'April 2024',
    headquarters: 'Cambridge, Massachusetts, United States',
    fiscalYearEnd: 'December 31',
    website: 'https://www.gevernova.com/',
    description:
      'GE Vernova provides power-generation equipment and services, grid electrification technologies, and onshore and offshore wind solutions to utilities and industrial customers.',
    sourceUrls: [
      'https://www.gevernova.com/investors/faq',
      'https://www.gevernova.com/sites/default/files/gev_webcast_pressrelease_01282026.pdf',
      'https://www.sec.gov/Archives/edgar/data/1996810/000199681026000015/gev-20251231.htm',
    ],
    i18n: {
      zh: {
        displayName: 'GE Vernova',
        sector: '工业',
        industry: '发电、电网电气化及风电设备与服务',
        headquarters: '美国马萨诸塞州剑桥',
        fiscalYearEnd: '12 月 31 日',
        description:
          'GE Vernova 为公用事业和工业客户提供发电设备与服务、电网电气化技术，以及陆上和海上风电解决方案。',
      },
    },
  });
})(window);
