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
      key: 'monday-com',
      name: 'Monday.com',
      legalName: 'monday.com Ltd.',
      aliases: ['monday.com', 'Monday.Com Ltd'],
      ticker: 'MNDY',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 3110000000,
        asOf: '2026-06-24',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/mndy/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Work management software, CRM, service management, development workflows, AI agents, and SaaS collaboration platforms',
      founded: '2012',
      headquarters: 'Tel Aviv, Israel',
      fiscalYearEnd: 'December 31',
      website: 'https://monday.com/',
      description:
        'Monday.com provides an AI work platform for work management, CRM, service, development, automation, and collaboration workflows, helping organizations connect people, processes, data, and AI agents on one flexible platform.',
      sourceUrls: [
        'https://monday.com/',
        'https://monday.com/p/about/',
        'https://ir.monday.com/',
        'https://ir.monday.com/news-and-events/news-releases/news-details/2026/monday-com-Announces-First-Quarter-2026-Results/default.aspx',
        'https://ir.monday.com/news-and-events/news-releases/news-details/2026/monday-com-Files-its-2025-Annual-Report-on-Form-20-F/default.aspx',
        'https://stockanalysis.com/stocks/mndy/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'Monday.com',
          sector: '信息技术',
          industry: '工作管理软件、CRM、服务管理、开发流程、AI 代理和 SaaS 协作平台',
          headquarters: '以色列特拉维夫',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Monday.com 提供 AI 工作平台，覆盖工作管理、CRM、服务、开发、自动化和协作流程，帮助组织在同一灵活平台上连接人员、流程、数据和 AI 代理。',
        },
      },
    }
  );
})(window);
