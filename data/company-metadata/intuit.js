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
      key: 'intuit',
      name: 'Intuit',
      legalName: 'Intuit Inc.',
      ticker: 'INTU',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 71400000000,
        asOf: '2026-07-01',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/intu/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Financial management, tax preparation, and small-business software',
      founded: '1983',
      headquarters: 'Mountain View, California, United States',
      fiscalYearEnd: 'July 31',
      website: 'https://www.intuit.com/',
      description:
        'Intuit operates a global financial technology platform spanning QuickBooks accounting and Mailchimp marketing for small and mid-market businesses, plus TurboTax consumer tax preparation, Credit Karma personal finance, and ProTax software for accounting professionals.',
      sourceUrls: [
        'https://www.intuit.com/company/',
        'https://investors.intuit.com/',
        'https://stockanalysis.com/stocks/intu/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'Intuit',
          sector: '信息技术',
          industry: '财务管理、报税与小微企业软件',
          headquarters: '美国加利福尼亚州山景城',
          fiscalYearEnd: '7 月 31 日',
          description:
            'Intuit 运营全球金融科技平台，面向小微与中型企业提供 QuickBooks 会计和 Mailchimp 营销服务，并拥有 TurboTax 消费者报税、Credit Karma 个人理财以及面向专业会计师的 ProTax 软件。',
        },
      },
    }
  );
})(window);
