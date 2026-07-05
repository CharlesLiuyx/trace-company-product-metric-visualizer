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
      key: 'workday',
      name: 'Workday',
      legalName: 'Workday, Inc.',
      ticker: 'WDAY',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 30680000000,
        asOf: '2026-06-26',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/wday/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Enterprise software, cloud applications for HR, finance, IT, planning, analytics, and AI-powered work agents',
      founded: '2005',
      headquarters: 'Pleasanton, California, United States',
      fiscalYearEnd: 'January 31',
      website: 'https://www.workday.com/',
      description:
        'Workday provides an enterprise AI platform and cloud applications for human resources, finance, IT, planning, analytics, and related work processes used by organizations worldwide.',
      sourceUrls: [
        'https://www.workday.com/en-us/company/about-workday/our-story.html',
        'https://investor.workday.com/',
        'https://investor.workday.com/resource/faqs/default.aspx',
        'https://investor.workday.com/news-and-events/press-releases/news-details/2026/Workday-Announces-Fiscal-2027-First-Quarter-Financial-Results/',
        'https://stockanalysis.com/stocks/wday/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'Workday',
          sector: '信息技术',
          industry: '企业软件、面向人力资源、财务、IT、规划、分析和 AI 工作代理的云应用',
          headquarters: '美国加利福尼亚州普莱森顿',
          fiscalYearEnd: '1 月 31 日',
          description:
            'Workday 提供企业 AI 平台和云应用，覆盖人力资源、财务、IT、规划、分析及相关工作流程，服务全球组织客户。',
        },
      },
    }
  );
})(window);
