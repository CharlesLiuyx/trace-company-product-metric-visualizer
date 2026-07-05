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
      key: 'restaurant-brands-international',
      name: 'Restaurant Brands International',
      legalName: 'Restaurant Brands International Inc.',
      aliases: ['RBI', 'Restaurant Brands'],
      ticker: 'QSR',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 30500000000,
        asOf: '2026-06-30',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/qsr/market-cap/',
      },
      sector: 'Consumer Discretionary',
      industry: 'Quick-service restaurants, franchising, restaurant supply chain, and advertising operations',
      founded: '2014',
      headquarters: 'Toronto, Ontario, Canada',
      fiscalYearEnd: 'December 31',
      website: 'https://www.rbi.com/',
      description:
        'Restaurant Brands International owns and franchises the Tim Hortons, Burger King, Popeyes, and Firehouse Subs restaurant brands, earning revenue from franchise and property income, company-operated restaurants, supply chain sales, and advertising funds across its Tim Hortons, Burger King, Popeyes, Firehouse Subs, International, and Restaurant Holdings segments.',
      sourceUrls: [
        'https://www.rbi.com/English/who-we-are/default.aspx',
        'https://www.rbi.com/English/investors/default.aspx',
        'https://www.rbi.com/English/investors/news-events/press-releases/default.aspx',
        'https://stockanalysis.com/stocks/qsr/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'Restaurant Brands International',
          sector: '非必需消费品',
          industry: '快餐餐厅、特许经营、餐厅供应链和广告运营',
          headquarters: '加拿大安大略省多伦多',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Restaurant Brands International 拥有并特许经营 Tim Hortons、Burger King、Popeyes 和 Firehouse Subs 餐厅品牌，通过特许经营及物业收入、自营餐厅、供应链销售和广告基金获取收入，业务涵盖 Tim Hortons、Burger King、Popeyes、Firehouse Subs、国际和 Restaurant Holdings 各分部。',
        },
      },
    }
  );
})(window);
