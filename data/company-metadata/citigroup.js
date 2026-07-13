/* Company-profile SSOT. Period financials belong in data/income-statements/. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push(
    {
      key: 'citigroup',
      name: 'Citigroup',
      legalName: 'Citigroup Inc.',
      ticker: 'C',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 240130000000,
        asOf: '2026-07-10',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/c/market-cap/',
      },
      sector: 'Financials',
      industry: 'Diversified banking and financial services',
      founded: '1812',
      headquarters: '388 Greenwich Street, New York, New York, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.citigroup.com/',
      description:
        'Citigroup is a global financial-services company that serves consumers, corporations, governments, and institutions through Services, Markets, Banking, Wealth, and U.S. Personal Banking.',
      sourceUrls: [
        'https://www.citigroup.com/global/about-us/global-presence/united-states',
        'https://www.citigroup.com/global/investors',
        'https://www.citigroup.com/global/investors/annual-reports-and-proxy-statements/2026/annual-report',
        'https://stockanalysis.com/stocks/c/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: '花旗集团',
          sector: '金融',
          industry: '多元化银行与金融服务',
          headquarters: '美国纽约州纽约市格林尼治街 388 号',
          fiscalYearEnd: '12 月 31 日',
          description:
            '花旗集团是一家全球金融服务公司，通过服务、市场、银行、财富管理及美国个人银行业务，为消费者、企业、政府和机构客户提供服务。',
        },
      },
    }
  );
})(window);
