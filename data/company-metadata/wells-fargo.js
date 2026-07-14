/* Company-profile SSOT record. Period financials stay in data/income-statements/. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push(
    {
      key: 'wells-fargo',
      name: 'Wells Fargo',
      legalName: 'Wells Fargo & Company',
      ticker: 'WFC',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 266730000000,
        asOf: '2026-07-10',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/wfc/market-cap/',
      },
      sector: 'Financials',
      industry: 'Diversified banks',
      founded: '1852',
      headquarters: 'San Francisco, California, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.wellsfargo.com/',
      description:
        'Wells Fargo is a diversified financial-services company providing banking, investment, mortgage, consumer, and commercial-finance products and services in the United States and internationally.',
      sourceUrls: [
        'https://www.wellsfargo.com/',
        'https://history.wf.com/',
        'https://www.wellsfargo.com/assets/pdf/about/investor-relations/earnings/fourth-quarter-2025-earnings.pdf',
        'https://stockanalysis.com/stocks/wfc/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: '富国银行',
          sector: '金融',
          industry: '综合银行',
          headquarters: '美国加利福尼亚州旧金山',
          fiscalYearEnd: '12 月 31 日',
          description:
            '富国银行是一家多元化金融服务公司，在美国及国际市场提供银行、投资、抵押贷款、消费金融和商业金融产品与服务。',
        },
      },
    }
  );
})(window);
