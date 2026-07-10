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
      key: 'paypal',
      name: 'PayPal',
      legalName: 'PayPal Holdings, Inc.',
      ticker: 'PYPL',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 40260000000,
        asOf: '2026-07-07',
        source: 'CompaniesMarketCap',
        sourceUrl: 'https://companiesmarketcap.com/paypal/marketcap/',
      },
      sector: 'Financials',
      industry: 'Digital payments, payment processing, digital wallets, and merchant commerce services',
      founded: '1998',
      headquarters: 'San Jose, California, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.paypal.com/',
      description:
        'PayPal operates a global two-sided payments network for consumers and merchants through PayPal, Venmo, Braintree, Xoom, and related checkout, credit, risk, and commerce services.',
      sourceUrls: [
        'https://www.paypal.com/us/digital-wallet/about-paypal',
        'https://investor.pypl.com/',
        'https://www.sec.gov/Archives/edgar/data/1633917/000163391726000024/pypl-20251231.htm',
        'https://companiesmarketcap.com/paypal/marketcap/',
      ],
      i18n: {
        zh: {
          displayName: 'PayPal',
          sector: '金融',
          industry: '数字支付、支付处理、数字钱包与商户商业服务',
          headquarters: '美国加利福尼亚州圣何塞',
          fiscalYearEnd: '12 月 31 日',
          description:
            'PayPal 通过 PayPal、Venmo、Braintree、Xoom 及相关结账、信贷、风控和商业服务，为消费者与商户运营全球双边支付网络。',
        },
      },
    }
  );
})(window);
