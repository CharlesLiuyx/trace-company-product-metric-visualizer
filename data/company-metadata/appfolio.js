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
      key: 'appfolio',
      name: 'AppFolio',
      legalName: 'AppFolio, Inc.',
      ticker: 'APPF',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 5356800000,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/appf/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Real estate software, property management SaaS, investment management software, and value-added services',
      founded: '2006',
      headquarters: 'Santa Barbara, California, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.appfolio.com/',
      description:
        'AppFolio provides a cloud-based real estate performance platform that helps property managers, real estate investors, and related customers connect communities, increase operational efficiency, deliver customer experiences, and improve financial and operational performance.',
      sourceUrls: [
        'https://ir.appfolioinc.com/',
        'https://ir.appfolioinc.com/shareholder-services/investor-faqs',
        'https://ir.appfolioinc.com/news-releases/news-release-details/appfolio-inc-announces-first-quarter-2026-financial-results',
        'https://ir.appfolioinc.com/news-releases/news-release-details/appfolio-inc-announces-second-quarter-2026-financial-results',
        'https://ir.appfolioinc.com/node/11981/html',
        'https://www.appfolio.com/',
      ],
      i18n: {
        zh: {
          displayName: 'AppFolio',
          sector: '信息技术',
          industry: '房地产软件、物业管理 SaaS、投资管理软件与增值服务',
          headquarters: '美国加利福尼亚州圣巴巴拉',
          fiscalYearEnd: '12 月 31 日',
          description:
            'AppFolio 提供基于云的房地产业绩平台，帮助物业管理者、房地产投资者及相关客户连接社区、提升运营效率、改善客户体验并优化财务与运营表现。',
        },
      },
    }
  );
})(window);
