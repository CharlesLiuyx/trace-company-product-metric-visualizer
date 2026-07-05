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
      key: 'robinhood',
      name: 'Robinhood',
      legalName: 'Robinhood Markets, Inc.',
      ticker: 'HOOD',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 97389621915,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/hood/market-cap/',
      },
      sector: 'Financials',
      industry: 'Retail brokerage, crypto, advisory, digital banking services, and private markets access',
      founded: '2013',
      headquarters: 'Menlo Park, California, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://robinhood.com/',
      description:
        'Robinhood is a financial services company offering retail brokerage, crypto, advisory, digital banking services, and private markets access through consumer-focused investing and financial products.',
      sourceUrls: [
        'https://investors.robinhood.com/',
        'https://investors.robinhood.com/static-files/15576d76-2d02-4aea-a40d-48e694c04a4b',
        'https://investors.robinhood.com/static-files/981b25a2-29b9-48f5-8839-9273b2e353d9',
        'https://robinhood.com/us/en/',
      ],
      i18n: {
        zh: {
          displayName: 'Robinhood',
          sector: '金融',
          industry: '零售经纪、加密资产、顾问服务、数字银行服务与私募市场准入',
          headquarters: '美国加利福尼亚州门洛帕克',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Robinhood 是一家金融服务公司，通过面向消费者的投资和金融产品提供零售经纪、加密资产、顾问服务、数字银行服务及私募市场准入。',
        },
      },
    }
  );
})(window);
