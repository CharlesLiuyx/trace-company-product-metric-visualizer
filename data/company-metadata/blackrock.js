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
      key: 'blackrock',
      name: 'BlackRock',
      legalName: 'BlackRock, Inc.',
      ticker: 'BLK',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 163009700000,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/blk/market-cap/',
      },
      sector: 'Financials',
      industry: 'Investment management, asset management, ETFs, financial technology, and advisory services',
      founded: '1988',
      headquarters: 'New York, New York, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.blackrock.com/',
      description:
        'BlackRock is a global investment manager and financial technology provider serving individuals, institutions, and intermediaries through investment advisory, iShares ETFs, Aladdin technology, risk management, and related services.',
      sourceUrls: [
        'https://www.blackrock.com/corporate/about-us',
        'https://ir.blackrock.com/home/default.aspx',
        'https://ir.blackrock.com/financials/sec-filings/default.aspx',
        'https://www.blackrock.com/corporate/newsroom/press-releases/article/corporate-one/press-releases/blackrock-reports-first-quarter-2026',
      ],
      i18n: {
        zh: {
          displayName: '贝莱德',
          sector: '金融',
          industry: '投资管理、资产管理、ETF、金融科技和顾问服务',
          headquarters: '美国纽约州纽约',
          fiscalYearEnd: '12 月 31 日',
          description:
            'BlackRock 是全球投资管理与金融科技公司，面向个人、机构和中介客户提供投资顾问、iShares ETF、Aladdin 技术、风险管理及相关服务。',
        },
      },
    }
  );
})(window);
