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
      key: 'mastercard',
      name: 'Mastercard',
      legalName: 'Mastercard Incorporated',
      ticker: 'MA',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 535000000000,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/ma/market-cap/',
      },
      sector: 'Financials',
      industry: 'Transaction and payment processing services, payment network, and value-added services and solutions',
      founded: '1966',
      headquarters: 'Purchase, New York, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.mastercard.com/',
      description:
        'Mastercard is a global payments technology company that connects consumers, financial institutions, merchants, governments, and businesses through its payment network, earning revenue from domestic and cross-border transaction fees, transaction processing, and value-added services and solutions.',
      sourceUrls: [
        'https://www.mastercard.com/global/en/vision/who-we-are.html',
        'https://investor.mastercard.com/',
        'https://stockanalysis.com/stocks/ma/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'Mastercard',
          sector: '金融',
          industry: '交易与支付处理服务、支付网络以及增值服务与解决方案',
          headquarters: '美国纽约州珀切斯',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Mastercard 是一家全球支付技术公司，通过其支付网络连接消费者、金融机构、商户、政府和企业，收入来自境内与跨境交易费、交易处理以及增值服务与解决方案。',
        },
      },
    }
  );
})(window);
