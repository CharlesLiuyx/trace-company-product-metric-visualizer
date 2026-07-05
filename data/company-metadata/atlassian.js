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
      key: 'atlassian',
      name: 'Atlassian',
      legalName: 'Atlassian Corporation',
      ticker: 'TEAM',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 20991700000,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/team/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Collaboration software, IT service management, DevOps, work management, and AI-powered teamwork platforms',
      founded: '2002',
      headquarters: 'Sydney, New South Wales, Australia / San Francisco, California, United States',
      fiscalYearEnd: 'June 30',
      website: 'https://www.atlassian.com/',
      description:
        'Atlassian builds teamwork and collaboration software used by software, IT, product, business, and leadership teams, with products spanning Jira, Confluence, Jira Service Management, Loom, Trello, Bitbucket, Marketplace apps, and Rovo AI-powered workflows.',
      sourceUrls: [
        'https://www.atlassian.com/company',
        'https://investors.atlassian.com/',
        'https://investors.atlassian.com/resources/investor-faqs/default.aspx',
        'https://investors.atlassian.com/financials/quarterly-results/default.aspx',
        'https://investors.atlassian.com/financials/sec-filings/default.aspx',
      ],
      i18n: {
        zh: {
          sector: '信息技术',
          industry: '协作软件、IT 服务管理、DevOps、工作管理和 AI 驱动的团队协作平台',
          headquarters: '澳大利亚新南威尔士州悉尼 / 美国加利福尼亚州旧金山',
          fiscalYearEnd: '6 月 30 日',
          description:
            'Atlassian 构建面向软件、IT、产品、业务和管理团队的协作软件，产品覆盖 Jira、Confluence、Jira Service Management、Loom、Trello、Bitbucket、Marketplace 应用和 Rovo AI 工作流。',
        },
      },
    }
  );
})(window);
