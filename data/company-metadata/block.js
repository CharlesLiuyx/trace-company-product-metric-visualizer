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
      key: 'block',
      name: 'Block',
      legalName: 'Block, Inc.',
      aliases: ['Square, Inc.'],
      ticker: 'XYZ',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 46160000000,
        asOf: '2026-07-07',
        source: 'CompaniesMarketCap',
        sourceUrl: 'https://companiesmarketcap.com/square/marketcap/',
      },
      sector: 'Financials',
      industry: 'Financial technology, merchant commerce enablement, consumer financial services, and bitcoin products',
      founded: '2009',
      headquarters: 'Distributed work model; Oakland, California, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://block.xyz/',
      description:
        'Block builds financial and commerce technology across Square, Cash App, Afterpay, TIDAL, Bitkey, and Proto, serving sellers, consumers, artists, and the bitcoin ecosystem.',
      sourceUrls: [
        'https://block.xyz/',
        'https://block.xyz/careers/jobs/5129279008',
        'https://investors.block.xyz/',
        'https://www.sec.gov/Archives/edgar/data/1512673/000162828026012254/xyz-20251231.htm',
        'https://companiesmarketcap.com/square/marketcap/',
      ],
      i18n: {
        zh: {
          displayName: 'Block',
          sector: '金融',
          industry: '金融科技、商户商业赋能、消费者金融服务与比特币产品',
          headquarters: '分布式办公；美国加利福尼亚州奥克兰',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Block 通过 Square、Cash App、Afterpay、TIDAL、Bitkey 和 Proto 构建金融与商业技术，为商户、消费者、艺术家和比特币生态提供服务。',
        },
      },
    }
  );
})(window);
