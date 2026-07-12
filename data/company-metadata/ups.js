/* Company-profile SSOT. Period financials live in data/income-statements/ups.js. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'ups',
    name: 'UPS',
    legalName: 'United Parcel Service, Inc.',
    aliases: ['United Parcel Service'],
    ticker: 'UPS',
    exchange: 'NYSE',
    marketCap: {
      valueUsd: 95600000000,
      asOf: '2026-07-11',
      source: 'CompaniesMarketCap',
      sourceUrl: 'https://companiesmarketcap.com/ups/marketcap/',
    },
    sector: 'Industrials',
    industry: 'Integrated package delivery, freight transportation, logistics, and supply-chain services',
    founded: '1907',
    headquarters: 'Atlanta, Georgia, United States',
    fiscalYearEnd: 'December 31',
    website: 'https://www.ups.com/',
    description:
      'UPS provides global package delivery, freight transportation, contract logistics, and supply-chain services for consumers, small businesses, and enterprises.',
    sourceUrls: [
      'https://about.ups.com/us/en/our-company.html',
      'https://investors.ups.com/',
      'https://about.ups.com/content/dam/upsstories/assets/fact-sheets/ups-global/Corporate-Fact-Sheet-3-15-2023a.pdf',
      'https://companiesmarketcap.com/ups/marketcap/',
    ],
    i18n: {
      zh: {
        displayName: '联合包裹',
        sector: '工业',
        industry: '综合包裹递送、货运运输、物流与供应链服务',
        headquarters: '美国佐治亚州亚特兰大',
        fiscalYearEnd: '12 月 31 日',
        description:
          'UPS 面向消费者、小型企业和大型企业提供全球包裹递送、货运运输、合同物流和供应链服务。',
      },
    },
  });
})(window);
