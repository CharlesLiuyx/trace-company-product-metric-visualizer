/* Company-profile SSOT record. Period financials stay in data/income-statements/. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push(
    {
      key: 'jpmorganchase',
      name: 'JPMorganChase',
      legalName: 'JPMorgan Chase & Co.',
      aliases: ['JPMorgan Chase', 'J.P. Morgan'],
      ticker: 'JPM',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 901580000000,
        asOf: '2026-07-10',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/jpm/market-cap/',
      },
      sector: 'Financials',
      industry: 'Diversified banks, consumer banking, commercial and investment banking, and asset and wealth management',
      founded: '2000',
      headquarters: 'New York, New York, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.jpmorganchase.com/',
      description:
        'JPMorgan Chase & Co. is a global financial services firm serving consumers, small businesses, corporations, governments, and institutions through consumer banking, commercial and investment banking, payments, and asset and wealth management.',
      sourceUrls: [
        'https://www.jpmorganchase.com/about',
        'https://www.jpmorganchase.com/ir/quarterly-earnings',
        'https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/quarterly-earnings/2025/4th-quarter/d868c7ef-1670-465d-ba75-c2b36ddbcc6b.pdf',
        'https://stockanalysis.com/stocks/jpm/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: '摩根大通',
          sector: '金融',
          industry: '综合银行、消费者银行、商业与投资银行及资产和财富管理',
          headquarters: '美国纽约州纽约市',
          fiscalYearEnd: '12 月 31 日',
          description:
            '摩根大通是一家全球金融服务公司，通过消费者银行、商业与投资银行、支付以及资产和财富管理业务，为消费者、小型企业、企业、政府和机构客户提供服务。',
        },
      },
    }
  );
})(window);
