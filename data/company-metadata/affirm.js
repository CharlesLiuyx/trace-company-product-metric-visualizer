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
      key: 'affirm',
      name: 'Affirm',
      legalName: 'Affirm Holdings, Inc.',
      aliases: ['Affirm, Inc.'],
      ticker: 'AFRM',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 28000000000,
        asOf: '2026-07-07',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/afrm/market-cap/',
      },
      sector: 'Financials',
      industry: 'Financial technology, buy now pay later, consumer credit, and payment networks',
      founded: '2012',
      headquarters: 'San Francisco, California, United States',
      fiscalYearEnd: 'June 30',
      website: 'https://www.affirm.com/',
      description:
        'Affirm is a payment network and financial technology company that provides consumers with flexible pay-over-time products and gives merchants tools to grow sales without charging consumers late or hidden fees.',
      sourceUrls: [
        'https://www.affirm.com/business/blog/affirm-decade-history-infographic',
        'https://investors.affirm.com/shareholder-services/investor-faqs',
        'https://investors.affirm.com/static-files/b92abc34-edbf-418c-a5bd-295ecd213fb3',
        'https://stockanalysis.com/stocks/afrm/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'Affirm',
          sector: '金融',
          industry: '金融科技、先买后付、消费信贷与支付网络',
          headquarters: '美国加利福尼亚州旧金山',
          fiscalYearEnd: '6 月 30 日',
          description:
            'Affirm 是一家支付网络与金融科技公司，为消费者提供灵活的分期付款产品，并为商户提供增长工具，同时不向消费者收取逾期费或隐藏费用。',
        },
      },
    }
  );
})(window);
