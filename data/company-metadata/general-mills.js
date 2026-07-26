/* Company-profile SSOT record. Profile fields only — period financials stay
 * in data/income-statements/. Format: data/schema.md. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'general-mills',
    name: 'General Mills',
    legalName: 'General Mills, Inc.',
    ticker: 'GIS',
    exchange: 'NYSE',
    marketCap: {
      valueUsd: 18970000000,
      asOf: '2026-07-23',
      source: 'StockAnalysis',
      sourceUrl: 'https://stockanalysis.com/stocks/gis/market-cap/',
    },
    sector: 'Consumer Staples',
    industry: 'Packaged Foods',
    founded: '1866 (roots); 1928 (incorporated)',
    headquarters: 'Minneapolis, Minnesota, United States',
    fiscalYearEnd: 'Last Sunday in May',
    website: 'https://www.generalmills.com/',
    description:
      'General Mills is a global branded food company whose portfolio spans cereal, snacks, meals, baking products, premium ice cream, and pet food.',
    sourceUrls: [
      'https://www.generalmills.com/about-us',
      'https://www.generalmills.com/about-us/our-history',
      'https://investors.generalmills.com/investor-resources/faqs/default.aspx',
      'https://investors.generalmills.com/press-releases/press-release-details/2026/General-Mills-Reports-Fiscal-2026-Third-quarter-Results-and-Reaffirms-Full-year-Outlook/default.aspx',
      'https://www.sec.gov/edgar/browse/?CIK=40704&owner=exclude',
      'https://stockanalysis.com/stocks/gis/market-cap/',
    ],
    i18n: {
      zh: {
        displayName: '通用磨坊',
        sector: '日常消费品',
        industry: '包装食品',
        headquarters: '美国明尼苏达州明尼阿波利斯',
        fiscalYearEnd: '5 月最后一个星期日',
        description:
          '通用磨坊是一家全球品牌食品公司，产品组合涵盖谷物早餐、零食、餐食、烘焙产品、高端冰淇淋和宠物食品。',
      },
    },
  });
})(window);
