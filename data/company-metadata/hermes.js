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
      key: 'hermes',
      name: 'Hermès',
      legalName: 'Hermès International SCA',
      aliases: ['Hermes', 'Hermès International', 'Hermès International SCA'],
      ticker: 'RMS',
      exchange: 'Euronext Paris',
      marketCap: {
        value: 224.02,
        currency: '€',
        unit: 'B',
        asOf: '2025-12-31',
        source: 'Hermès Share and dividend',
        sourceUrl: 'https://finance.hermes.com/en/share-and-dividend/',
      },
      sector: 'Consumer Discretionary',
      industry: 'Luxury goods',
      founded: '1837',
      headquarters: '24 rue du Faubourg Saint-Honoré, 75008 Paris, France',
      fiscalYearEnd: 'December 31',
      website: 'https://www.hermes.com/',
      description:
        'Hermès is a French luxury-goods house that designs, manufactures, and sells leather goods, ready-to-wear, accessories, silk and textiles, perfumes and beauty products, watches, and other métiers through a global retail network.',
      sourceUrls: [
        'https://finance.hermes.com/en/key-figures/',
        'https://finance.hermes.com/en/share-and-dividend/',
        'https://www.hermes.com/be/en/content/235056-six-generations-of-artisans/',
        'https://finance.hermes.com/en/legal-notice/',
      ],
      i18n: {
        zh: {
          displayName: '爱马仕',
          sector: '非必需消费品',
          industry: '奢侈品',
          headquarters: '法国巴黎圣奥诺雷街 24 号，75008',
          fiscalYearEnd: '12 月 31 日',
          description:
            '爱马仕是一家法国奢侈品集团，设计、制造并销售皮具、成衣、配饰、丝绸与纺织品、香水与美妆、腕表及其他产品，并通过全球零售网络服务客户。',
        },
      },
    }
  );
})(window);
