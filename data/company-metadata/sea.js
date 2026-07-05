/* Company-profile SSOT record. Profile fields only - period financials stay
 * in data/income-statements/. Format: data/schema.md. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push(
    {
      key: 'sea',
      name: 'Sea',
      legalName: 'Sea Limited',
      aliases: ['Sea Ltd', 'Sea Group', 'SE', 'Garena', 'Shopee', 'Monee', 'SeaMoney'],
      ticker: 'SE',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 63270000000,
        asOf: '2026-07-02',
        source: 'Sea investor relations',
        sourceUrl: 'https://www.sea.com/investor/home',
      },
      sector: 'Communication Services',
      industry: 'E-commerce, digital entertainment, digital payments, and financial services',
      founded: '2009',
      headquarters: 'Singapore',
      fiscalYearEnd: 'December 31',
      website: 'https://www.sea.com/',
      description:
        'Sea Limited is a global technology company founded in Singapore whose core businesses are Garena in digital entertainment, Shopee in e-commerce, and Monee in digital payments and financial services.',
      sourceUrls: [
        'https://www.sea.com/',
        'https://www.sea.com/investor/home',
        'https://stockanalysis.com/stocks/se/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'Sea',
          sector: '通信服务',
          industry: '电商、数字娱乐、数字支付和金融服务',
          headquarters: '新加坡',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Sea Limited 是一家创立于新加坡的全球科技公司，核心业务包括数字娱乐 Garena、电商 Shopee，以及数字支付和金融服务 Monee。',
        },
      },
    }
  );
})(window);
