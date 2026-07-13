/* Company-profile SSOT record. Period financials stay in data/income-statements/. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push(
    {
      key: 'bank-of-america',
      name: 'Bank of America',
      legalName: 'Bank of America Corporation',
      ticker: 'BAC',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 425090000000,
        asOf: '2026-07-06',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/bac/market-cap/',
      },
      sector: 'Financials',
      industry: 'Diversified banks, wealth management, corporate and investment banking, and global markets',
      founded: '1998',
      headquarters: 'Charlotte, North Carolina, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.bankofamerica.com/',
      description:
        'Bank of America is a global financial institution that serves consumers, businesses, corporations, governments, and institutions through banking, investing, asset management, and financial and risk-management services.',
      sourceUrls: [
        'https://about.bankofamerica.com/en/our-company',
        'https://newsroom.bankofamerica.com/content/newsroom/company-overview.html',
        'https://newsroom.bankofamerica.com/content/newsroom/press-releases/2026/01/bank-of-america-reports-fourth-quarter-2025-financial-results.html',
      ],
      i18n: {
        zh: {
          displayName: '美国银行',
          sector: '金融',
          industry: '综合银行、财富管理、企业与投资银行及全球市场',
          headquarters: '美国北卡罗来纳州夏洛特',
          fiscalYearEnd: '12 月 31 日',
          description:
            '美国银行是一家全球金融机构，通过银行、投资、资产管理以及金融和风险管理服务，为消费者、企业、公司、政府和机构客户提供服务。',
        },
      },
    }
  );
})(window);
