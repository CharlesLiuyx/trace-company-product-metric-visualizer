/* Company-profile SSOT record. Profile fields only — period financials stay
 * in data/income-statements/. Format: data/schema.md. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'booking',
    name: 'Booking Holdings',
    legalName: 'Booking Holdings Inc.',
    aliases: ['Booking Holdings Inc.'],
    ticker: 'BKNG',
    exchange: 'NASDAQ Global Select Market',
    sector: 'Consumer Discretionary',
    industry: 'Online travel and related services',
    founded: '1997',
    headquarters: 'Norwalk, Connecticut, United States',
    fiscalYearEnd: 'December 31',
    website: 'https://www.bookingholdings.com/',
    description:
      'Booking Holdings is a global provider of online travel and related services through Booking.com, Priceline, Agoda, KAYAK, and OpenTable.',
    sourceUrls: [
      'https://www.bookingholdings.com/about/',
      'https://ir.bookingholdings.com/resources/investor-faqs/default.aspx',
      'https://ir.bookingholdings.com/financials/quarterly-results/',
    ],
    i18n: {
      zh: {
        displayName: '缤客控股',
        sector: '非必需消费品',
        industry: '在线旅行及相关服务',
        headquarters: '美国康涅狄格州诺沃克',
        fiscalYearEnd: '12 月 31 日',
        description:
          '缤客控股是一家全球在线旅行及相关服务提供商，旗下品牌包括 Booking.com、Priceline、Agoda、KAYAK 和 OpenTable。',
      },
    },
  });
})(window);
