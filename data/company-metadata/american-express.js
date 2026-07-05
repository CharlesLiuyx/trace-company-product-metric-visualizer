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
      key: 'american-express',
      name: 'American Express',
      legalName: 'American Express Company',
      ticker: 'AXP',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 225000000000,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/axp/market-cap/',
      },
      sector: 'Financials',
      industry: 'Payment card services, charge and credit cards, merchant acquiring, network services, card member lending, and travel-related services',
      founded: '1850',
      headquarters: 'New York, New York, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.americanexpress.com/',
      description:
        'American Express is a globally integrated payments company operating a card-issuing, merchant-acquiring, and card network business across US Consumer Services, Commercial Services, International Card Services, and Global Merchant & Network Services.',
      sourceUrls: [
        'https://www.americanexpress.com/',
        'https://about.americanexpress.com/',
        'https://ir.americanexpress.com/',
      ],
      i18n: {
        zh: {
          displayName: '美国运通',
          sector: '金融',
          industry: '支付卡服务、签账卡与信用卡、商户收单、网络服务、持卡人借贷及旅行相关服务',
          headquarters: '美国纽约州纽约市',
          fiscalYearEnd: '12 月 31 日',
          description:
            'American Express 是一家全球一体化支付公司，经营发卡、商户收单和卡网络业务，涵盖美国消费者服务、商务服务、国际卡服务以及全球商户与网络服务。',
        },
      },
    }
  );
})(window);
