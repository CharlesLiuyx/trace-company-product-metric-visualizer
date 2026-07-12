/* Company-profile SSOT. Period financials live in data/income-statements/. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'samsara',
    name: 'Samsara',
    legalName: 'Samsara Inc.',
    ticker: 'IOT',
    exchange: 'NYSE',
    marketCap: {
      valueUsd: 21390000000,
      asOf: '2026-07-11',
      source: 'CompaniesMarketCap',
      sourceUrl: 'https://companiesmarketcap.com/samsara/marketcap/',
    },
    sector: 'Information Technology',
    industry: 'Connected operations cloud software',
    founded: '2015',
    headquarters: 'San Francisco, California, United States',
    fiscalYearEnd: 'January 31',
    website: 'https://www.samsara.com/',
    description:
      'Samsara provides a Connected Operations Cloud that helps organizations operating physical assets use IoT data to improve safety, efficiency, and sustainability.',
    sourceUrls: [
      'https://www.samsara.com/',
      'https://investors.samsara.com/overview/',
      'https://investors.samsara.com/events-and-presentations/events/event-details/2026/Samsara-Q1-Fiscal-Year-2027-Financial-Results/default.aspx',
      'https://www.sec.gov/Archives/edgar/data/1642896/000162828026039507/iot2026ars.pdf',
      'https://companiesmarketcap.com/samsara/marketcap/',
    ],
    i18n: {
      zh: {
        displayName: 'Samsara',
        sector: '信息技术',
        industry: '互联运营云软件',
        headquarters: '美国加利福尼亚州旧金山',
        fiscalYearEnd: '1 月 31 日',
        description:
          'Samsara 提供互联运营云，帮助运营实体资产的组织利用物联网数据提升安全性、效率和可持续性。',
      },
    },
  });
})(window);
