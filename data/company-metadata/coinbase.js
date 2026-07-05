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
      key: 'coinbase',
      name: 'Coinbase',
      legalName: 'Coinbase Global, Inc.',
      ticker: 'COIN',
      exchange: 'NASDAQ',
      sector: 'Financials',
      industry: 'Cryptocurrency exchange, brokerage, custody, staking, stablecoin services, blockchain infrastructure, and subscription services',
      founded: '2012',
      headquarters: 'Remote-first; San Francisco, California, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.coinbase.com/',
      description:
        'Coinbase operates a crypto-asset platform for consumers, institutions, and developers, offering trading, custody, staking, stablecoin-related services, payments, subscriptions, blockchain rewards, and other crypto financial infrastructure.',
      sourceUrls: [
        'https://www.coinbase.com/about',
        'https://investor.coinbase.com/',
        'https://investor.coinbase.com/financials/quarterly-results/default.aspx',
        'https://investor.coinbase.com/financials/sec-filings/default.aspx',
        'https://www.coinbase.com/blog',
      ],
      i18n: {
        zh: {
          displayName: 'Coinbase',
          sector: '金融',
          industry: '加密资产交易所、经纪、托管、质押、稳定币服务、区块链基础设施和订阅服务',
          headquarters: '远程优先；美国加利福尼亚州旧金山',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Coinbase 运营面向消费者、机构和开发者的加密资产平台，提供交易、托管、质押、稳定币相关服务、支付、订阅、区块链奖励和其他加密金融基础设施。',
        },
      },
    }
  );
})(window);
