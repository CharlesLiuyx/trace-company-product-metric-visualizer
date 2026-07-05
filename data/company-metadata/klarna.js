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
      key: 'klarna',
      name: 'Klarna',
      legalName: 'Klarna Bank AB',
      aliases: ['Klarna Group plc'],
      ticker: 'Private',
      exchange: 'Private company',
      sector: 'Financials',
      industry: 'Fintech, buy now pay later, consumer credit, payments, shopping, and merchant services',
      founded: '2005',
      headquarters: 'Stockholm, Sweden',
      fiscalYearEnd: 'December 31',
      website: 'https://www.klarna.com/',
      description:
        'Klarna is a global payments and shopping fintech company offering buy-now-pay-later credit, checkout, payment processing, consumer banking-style services, and merchant tools for shoppers and retailers.',
      sourceUrls: [
        'https://www.klarna.com/',
        'https://www.klarna.com/international/about-us/',
        'https://www.klarna.com/international/investors/',
      ],
      i18n: {
        zh: {
          displayName: 'Klarna',
          sector: '金融',
          industry: '金融科技、先买后付、消费信贷、支付、购物和商户服务',
          headquarters: '瑞典斯德哥尔摩',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Klarna 是一家全球支付和购物金融科技公司，为消费者和零售商提供先买后付信贷、结账、支付处理、类似消费银行的服务以及商户工具。',
        },
      },
    }
  );
})(window);
