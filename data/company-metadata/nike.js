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
      key: 'nike',
      name: 'Nike',
      legalName: 'NIKE, Inc.',
      aliases: ['Nike, Inc.'],
      ticker: 'NKE',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 66390000000,
        asOf: '2026-07-02',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/nke/market-cap/',
      },
      sector: 'Consumer Discretionary',
      industry: 'Athletic footwear, apparel, equipment, and accessories design, marketing, and distribution',
      founded: '1964',
      headquarters: 'Beaverton, Oregon, United States',
      fiscalYearEnd: 'May 31',
      website: 'https://www.nike.com/',
      description:
        'Nike designs, develops, markets, and sells athletic footwear, apparel, equipment, and accessories worldwide across Footwear, Apparel, and Equipment categories, and also owns the Converse athletic and casual footwear, apparel, and accessories brand.',
      sourceUrls: [
        'https://about.nike.com/en',
        'https://investors.nike.com/investors/company-overview/default.aspx',
        'https://investors.nike.com/investors/financial-information/sec-filings/default.aspx',
      ],
      i18n: {
        zh: {
          displayName: '耐克',
          sector: '非必需消费品',
          industry: '运动鞋类、服装、装备与配件的设计、营销与分销',
          headquarters: '美国俄勒冈州比弗顿',
          fiscalYearEnd: '5 月 31 日',
          description:
            '耐克在全球范围内设计、开发、营销并销售运动鞋类、服装、装备和配件，涵盖鞋类、服装和装备三大品类，同时旗下还拥有 Converse 运动及休闲鞋类、服装与配件品牌。',
        },
      },
    }
  );
})(window);
