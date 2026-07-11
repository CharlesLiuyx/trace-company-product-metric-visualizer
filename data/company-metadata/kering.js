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
      key: 'kering',
      name: 'Kering',
      legalName: 'Kering SA',
      aliases: ['Kering Group'],
      ticker: 'KER',
      exchange: 'Euronext Paris',
      marketCap: {
        value: 29.39,
        currency: '€',
        unit: 'B',
        asOf: '2026-07-08',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/quote/epa/KER/market-cap/',
      },
      sector: 'Consumer Discretionary',
      industry: 'Luxury goods',
      founded: '1963',
      headquarters: '40 rue de Sèvres, 75007 Paris, France',
      fiscalYearEnd: 'December 31',
      website: 'https://www.kering.com/',
      description:
        'Kering is a French global luxury group whose Houses span couture and ready-to-wear, leather goods, jewelry, eyewear, and beauty, including Gucci, Saint Laurent, Bottega Veneta, Balenciaga, and other specialist brands.',
      sourceUrls: [
        'https://www.kering.com/en/finance/about-kering/',
        'https://www.kering.com/en/group/culture-and-heritage/',
        'https://www.kering.com/en/group/culture-and-heritage/group-history/',
        'https://www.kering.com/en/finance/financial-calendar/',
        'https://stockanalysis.com/quote/epa/KER/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: '开云集团',
          sector: '非必需消费品',
          industry: '奢侈品',
          headquarters: '法国巴黎塞夫尔街 40 号，75007',
          fiscalYearEnd: '12 月 31 日',
          description:
            '开云集团是一家法国全球奢侈品集团，旗下品牌覆盖高级时装与成衣、皮具、珠宝、眼镜和美妆，包括 Gucci、Saint Laurent、Bottega Veneta、Balenciaga 等专业品牌。',
        },
      },
    }
  );
})(window);
