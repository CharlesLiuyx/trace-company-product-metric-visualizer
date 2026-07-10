/* Company-profile SSOT record. Profile fields only — period financials stay
 * in data/income-statements/. Format: data/schema.md. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 't-mobile-us',
    name: 'T-Mobile US',
    legalName: 'T-Mobile US, Inc.',
    aliases: ['T-Mobile', 'T-Mobile USA'],
    ticker: 'TMUS',
    exchange: 'NASDAQ',
    marketCap: {
      valueUsd: 194940000000,
      asOf: '2026-07-08',
      source: 'CompaniesMarketCap',
      sourceUrl: 'https://companiesmarketcap.com/t-mobile-us/marketcap/',
    },
    sector: 'Communication Services',
    industry: 'Wireless telecommunications services',
    founded: '1994 (as VoiceStream Wireless)',
    headquarters: 'Bellevue, Washington, United States',
    fiscalYearEnd: 'December 31',
    website: 'https://www.t-mobile.com/',
    description:
      'T-Mobile US provides wireless communications and related products and services to consumer and business customers in the United States and its territories.',
    sourceUrls: [
      'https://www.t-mobile.com/',
      'https://investor.t-mobile.com/resources/investor-faqs/default.aspx',
      'https://investor.t-mobile.com/financials/annual-reports/default.aspx',
      'https://companiesmarketcap.com/t-mobile-us/marketcap/',
    ],
    i18n: {
      zh: {
        displayName: '美国 T-Mobile',
        sector: '通信服务',
        industry: '无线电信服务',
        headquarters: '美国华盛顿州贝尔维尤',
        fiscalYearEnd: '12 月 31 日',
        description: '美国 T-Mobile 向美国及其属地的个人和企业客户提供无线通信及相关产品与服务。',
      },
    },
  });
})(window);
