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
      key: 'global-payments',
      name: 'Global Payments',
      legalName: 'Global Payments Inc.',
      aliases: ['Global Payment'],
      ticker: 'GPN',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 19980000000,
        asOf: '2026-07-08',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/gpn/market-cap/',
      },
      sector: 'Financials',
      industry: 'Transaction and payment processing services and commerce software',
      founded: '2000 (independent since 2001; payment-business roots to 1967)',
      headquarters: 'Atlanta, Georgia, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.globalpayments.com/',
      description:
        'Global Payments is a payments technology and commerce software company that provides merchant acquiring, payment processing, point-of-sale, embedded payments, and related value-added solutions to businesses worldwide.',
      sourceUrls: [
        'https://www.globalpayments.com/our-company/about-us',
        'https://investors.globalpayments.com/news-events/press-releases/detail/500/global-payments-reports-fourth-quarter-and-full-year-2025',
        'https://www.sec.gov/Archives/edgar/data/1123360/000112336026000008/gpn-20251231.htm',
        'https://stockanalysis.com/stocks/gpn/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'Global Payments',
          sector: '金融',
          industry: '交易与支付处理服务及商业软件',
          headquarters: '美国佐治亚州亚特兰大',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Global Payments 是一家支付技术与商业软件公司，面向全球企业提供商户收单、支付处理、销售点系统、嵌入式支付及相关增值解决方案。',
        },
      },
    }
  );
})(window);
