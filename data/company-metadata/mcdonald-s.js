/* Company-profile SSOT record. Profile fields only — period financials stay
 * in data/income-statements/. Format: data/schema.md. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'mcdonald-s',
    name: "McDonald's",
    legalName: "McDonald's Corporation",
    aliases: ['McDonalds', 'McDonald’s'],
    ticker: 'MCD',
    exchange: 'NYSE',
    sector: 'Consumer Discretionary',
    industry: 'Quick-service restaurants, franchising, real estate licensing, and restaurant operations',
    founded: '1940',
    headquarters: 'Chicago, Illinois, United States',
    fiscalYearEnd: 'December 31',
    website: 'https://corporate.mcdonalds.com/',
    description:
      "McDonald's operates and franchises a global quick-service restaurant system. Its reported revenue combines sales from company-operated restaurants with franchisee rents, royalties, and fees.",
    sourceUrls: [
      'https://corporate.mcdonalds.com/corpmcd/our-company/who-we-are.html',
      'https://corporate.mcdonalds.com/corpmcd/investors.html',
      'https://corporate.mcdonalds.com/corpmcd/investors/financial-information.html',
    ],
    i18n: {
      zh: {
        displayName: '麦当劳',
        sector: '非必需消费品',
        industry: '快捷餐饮、特许经营、房地产许可和餐厅运营',
        headquarters: '美国伊利诺伊州芝加哥',
        fiscalYearEnd: '12 月 31 日',
        description:
          '麦当劳运营并特许经营全球快捷餐饮体系。其披露收入由自营餐厅销售额，以及加盟商租金、特许权使用费和服务费构成。',
      },
    },
  });
})(window);
