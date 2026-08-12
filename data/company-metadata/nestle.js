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
      key: 'nestle',
      name: 'Nestlé',
      legalName: 'Nestlé S.A.',
      aliases: ['Nestle', 'Nestlé Group'],
      ticker: 'NESN',
      exchange: 'SIX Swiss Exchange',
      marketCap: {
        valueUsd: 252850000000,
        asOf: '2026-07-31',
        source: 'CompaniesMarketCap',
        sourceUrl: 'https://companiesmarketcap.com/nestle/marketcap/',
      },
      sector: 'Consumer Staples',
      industry: 'Food and beverage products',
      founded: '1866',
      headquarters: 'Avenue Nestlé 55, 1800 Vevey, Switzerland',
      fiscalYearEnd: 'December 31',
      website: 'https://www.nestle.com/',
      description:
        'Nestlé is a Swiss food and beverage company with more than 2,000 brands across coffee and beverages, water, dairy and ice cream, nutrition and health science, prepared dishes, confectionery, and pet care. Its roots date to the Anglo-Swiss Condensed Milk Company in 1866 and Henri Nestlé’s infant-food business in 1867.',
      sourceUrls: [
        'https://www.nestle.com/about',
        'https://www.nestle.com/about/history/nestle-company-history',
        'https://www.nestle.com/about/locations/global-addresses',
        'https://www.nestle.com/brands',
        'https://www.nestle.com/investors/shares-adrs',
        'https://companiesmarketcap.com/nestle/marketcap/',
      ],
      i18n: {
        zh: {
          displayName: '雀巢',
          sector: '必需消费品',
          industry: '食品与饮料产品',
          headquarters: '瑞士沃州沃韦市雀巢大道 55 号，1800',
          fiscalYearEnd: '12 月 31 日',
          description:
            '雀巢是一家瑞士食品与饮料公司，拥有 2,000 多个品牌，业务覆盖咖啡与饮料、水、乳制品与冰淇淋、营养与健康科学、预制食品、糖果及宠物护理。公司的历史可追溯至 1866 年成立的英瑞炼乳公司，以及亨利·雀巢于 1867 年创办的婴儿食品业务。',
        },
      },
    }
  );
})(window);
