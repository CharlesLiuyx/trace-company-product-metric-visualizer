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
      key: 'adidas',
      name: 'Adidas',
      legalName: 'adidas AG',
      aliases: ['adidas', 'adidas AG'],
      ticker: 'ADS',
      exchange: 'Deutsche Borse Frankfurt',
      marketCap: {
        value: 30429,
        currency: '€',
        unit: 'M',
        asOf: '2025-12-31',
        source: 'adidas Share Details',
        sourceUrl: 'https://www.adidas-group.com/en/investors/share/share-details',
      },
      sector: 'Consumer Discretionary',
      industry: 'Athletic footwear, apparel, accessories, and sporting goods',
      founded: '1949',
      headquarters: 'Herzogenaurach, Bavaria, Germany',
      fiscalYearEnd: 'December 31',
      website: 'https://www.adidas.com/',
      description:
        'Adidas designs, markets, and sells sports footwear, apparel, accessories, and sporting goods worldwide, with a mission to be the best sports brand in the world.',
      sourceUrls: [
        'https://www.adidas-group.com/en/about/profile',
        'https://www.adidas-group.com/en/about/history',
        'https://www.adidas-group.com/en/about/headquarters',
        'https://www.adidas-group.com/en/investors/share/share-details',
      ],
      i18n: {
        zh: {
          displayName: '阿迪达斯',
          sector: '非必需消费品',
          industry: '运动鞋类、服装、配件与体育用品',
          headquarters: '德国巴伐利亚州黑措根奥拉赫',
          fiscalYearEnd: '12 月 31 日',
          description:
            '阿迪达斯在全球范围内设计、营销并销售运动鞋类、服装、配件和体育用品，使命是成为全球最佳运动品牌。',
        },
      },
    }
  );
})(window);
