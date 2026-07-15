/* Company-profile SSOT record. Profile fields only — period financials stay
 * in data/income-statements/. Format: data/schema.md. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'at-t',
    name: 'AT&T',
    legalName: 'AT&T Inc.',
    aliases: ['AT&T Inc.', 'ATT', 'T'],
    ticker: 'T',
    exchange: 'NYSE',
    marketCap: {
      valueUsd: 146810000000,
      asOf: '2026-07-14',
      source: 'CompaniesMarketCap',
      sourceUrl: 'https://companiesmarketcap.com/att/marketcap/',
    },
    sector: 'Communication Services',
    industry: 'Telecommunications Services',
    founded: '1983',
    headquarters: 'Dallas, Texas, United States',
    fiscalYearEnd: 'December 31',
    website: 'https://about.att.com/',
    description:
      'AT&T is a U.S. telecommunications company providing wireless connectivity and fiber broadband services to consumers and businesses, alongside services in Mexico.',
    sourceUrls: [
      'https://about.att.com/',
      'https://about.att.com/story/2026/4q-earnings-2025.html',
      'https://www.sec.gov/Archives/edgar/data/732717/000073271726000046/t-20260128.htm',
      'https://companiesmarketcap.com/att/marketcap/',
    ],
    i18n: {
      zh: {
        displayName: 'AT&T',
        sector: '通信服务',
        industry: '电信服务',
        headquarters: '美国德克萨斯州达拉斯',
        fiscalYearEnd: '12 月 31 日',
        description:
          'AT&T 是一家美国电信公司，面向消费者和企业提供无线连接与光纤宽带服务，并在墨西哥经营通信业务。',
      },
    },
  });
})(window);
