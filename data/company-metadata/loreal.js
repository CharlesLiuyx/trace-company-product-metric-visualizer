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
      key: 'loreal',
      name: "L'Oréal",
      legalName: 'L’Oréal S.A.',
      aliases: ["L'Oréal", 'L’Oréal', 'L’Oreal', 'L Oreal'],
      ticker: 'OR',
      exchange: 'Euronext Paris',
      marketCap: {
        value: 203240,
        currency: '€',
        unit: 'M',
        asOf: '2026-07-09',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/quote/epa/OR/market-cap/',
      },
      sector: 'Consumer Staples',
      industry: 'Beauty, cosmetics, skincare, haircare, and personal care products',
      founded: '1909',
      headquarters: 'Clichy, Île-de-France, France',
      fiscalYearEnd: 'December 31',
      website: 'https://www.loreal.com/',
      description:
        'L’Oréal is a global beauty company that develops, manufactures, and markets cosmetics, skincare, haircare, fragrances, and dermatological beauty products through Professional Products, Consumer Products, L’Oréal Luxe, and Dermatological Beauty divisions.',
      sourceUrls: [
        'https://www.loreal.com/en/group/',
        'https://www.loreal.com/en/press-release/finance/2025-annual-results/',
        'https://stockanalysis.com/quote/epa/OR/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: '欧莱雅',
          sector: '必需消费品',
          industry: '美容、化妆品、护肤、护发及个人护理产品',
          headquarters: '法国法兰西岛大区克利希',
          fiscalYearEnd: '12 月 31 日',
          description:
            '欧莱雅是一家全球美容公司，通过专业产品、大众化妆品、高档化妆品和皮肤科学美容四大事业部，开发、生产并销售化妆品、护肤品、护发产品、香水及皮肤科学美容产品。',
        },
      },
    }
  );
})(window);
