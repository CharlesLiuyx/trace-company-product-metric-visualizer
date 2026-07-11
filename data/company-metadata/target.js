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
      key: 'target',
      name: 'Target',
      legalName: 'Target Corporation',
      ticker: 'TGT',
      exchange: 'NYSE',
      sector: 'Consumer Staples',
      industry: 'Discount Stores',
      founded: '1902',
      headquarters: 'Minneapolis, Minnesota, United States',
      fiscalYearEnd: 'Saturday nearest January 31',
      website: 'https://corporate.target.com/',
      description:
        'Target is a U.S. general merchandise retailer offering a curated, multi-category assortment through stores and digital channels.',
      sourceUrls: [
        'https://corporate.target.com/about',
        'https://corporate.target.com/investors/annual/2025-annual-report/10-k-report/10-k-part-i/item-1-business',
        'https://corporate.target.com/press/release/2026/05/target-corporation-reports-first-quarter-earnings',
      ],
      i18n: {
        zh: {
          name: '塔吉特',
          displayName: '塔吉特',
          sector: '日常消费品',
          industry: '折扣零售',
          headquarters: '美国明尼苏达州明尼阿波利斯',
          fiscalYearEnd: '最接近 1 月 31 日的星期六',
          description: '塔吉特是一家美国综合商品零售商，通过门店与数字渠道提供精选的多品类商品。',
        },
      },
    }
  );
})(window);
