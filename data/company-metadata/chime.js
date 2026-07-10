/* Company-profile SSOT record. Profile fields only — period financials stay
 * in data/income-statements/chime.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push(
    {
      key: 'chime',
      name: 'Chime',
      legalName: 'Chime Financial, Inc.',
      ticker: 'CHYM',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 7990000000,
        asOf: '2026-07-08',
        source: 'CompaniesMarketCap',
        sourceUrl: 'https://companiesmarketcap.com/chime-financial/marketcap/',
      },
      sector: 'Financials',
      industry: 'Financial technology and digital banking',
      founded: '2012',
      headquarters: 'San Francisco, California, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.chime.com/',
      description:
        'Chime is a financial technology company that offers low-cost banking and payments products through bank partners, serving everyday consumers in the United States.',
      sourceUrls: [
        'https://investors.chime.com/shareholder-services/investor-faqs',
        'https://www.chime.com/',
        'https://investors.chime.com/news-releases/news-release-details/chime-reports-fourth-quarter-and-full-year-2025-financial',
        'https://www.sec.gov/Archives/edgar/data/1795586/000179558626000013/chym-20251231.htm',
        'https://companiesmarketcap.com/chime-financial/marketcap/',
      ],
      i18n: {
        zh: {
          displayName: 'Chime',
          sector: '金融',
          industry: '金融科技与数字银行',
          headquarters: '美国加利福尼亚州旧金山',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Chime 是一家金融科技公司，通过合作银行提供低成本的银行和支付产品，服务美国日常消费者。',
        },
      },
    }
  );
})(window);
