/* Company-profile SSOT record. Profile fields only — period financials stay
 * in data/income-statements/. Format: data/schema.md. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'etsy',
    name: 'Etsy',
    legalName: 'Etsy, Inc.',
    ticker: 'ETSY',
    exchange: 'NASDAQ',
    sector: 'Consumer Discretionary',
    industry: 'Online marketplace',
    founded: '2005',
    headquarters: 'Brooklyn, New York, United States',
    fiscalYearEnd: 'December 31',
    website: 'https://www.etsy.com/',
    description: 'Etsy operates a two-sided global marketplace for unique and creative goods, with the Etsy marketplace and Depop resale marketplace among its consumer-facing brands.',
    sourceUrls: [
      'https://investors.etsy.com/',
      'https://investors.etsy.com/overview/default.aspx',
      'https://www.etsy.com/about/',
    ],
    i18n: {
      zh: {
        displayName: 'Etsy',
        sector: '非必需消费品',
        industry: '在线交易平台',
        headquarters: '美国纽约州纽约市布鲁克林',
        fiscalYearEnd: '12 月 31 日',
        description: 'Etsy 运营面向独特创意商品的全球双边交易平台；其面向消费者的品牌包括 Etsy 市场和二手转售市场 Depop。',
      },
    },
  });
})(window);
