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
      key: 'uipath',
      name: 'UiPath',
      legalName: 'UiPath, Inc.',
      ticker: 'PATH',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 5450000000,
        asOf: '2026-06-26',
        source: 'CompaniesMarketCap',
        sourceUrl: 'https://companiesmarketcap.com/uipath/marketcap/',
      },
      sector: 'Information Technology',
      industry: 'Agentic automation, business orchestration, robotic process automation, AI agents, and enterprise software',
      founded: '2005',
      headquarters: 'New York, New York, United States',
      fiscalYearEnd: 'January 31',
      website: 'https://www.uipath.com/',
      description:
        'UiPath provides an agentic automation and business orchestration platform that brings together AI agents, robots, tools, AI models, and people to automate and orchestrate enterprise workflows.',
      sourceUrls: [
        'https://www.uipath.com/about-us',
        'https://www.uipath.com/platform/agentic-automation',
        'https://ir.uipath.com/',
        'https://ir.uipath.com/news/detail/452/uipath-reports-first-quarter-fiscal-2027-financial-results',
        'https://ir.uipath.com/financials/sec-filings/content/0001734722-26-000041/path-20260430.htm',
        'https://companiesmarketcap.com/uipath/marketcap/',
      ],
      i18n: {
        zh: {
          displayName: 'UiPath',
          sector: '信息技术',
          industry: '智能体自动化、业务编排、机器人流程自动化、AI 代理和企业软件',
          headquarters: '美国纽约州纽约',
          fiscalYearEnd: '1 月 31 日',
          description:
            'UiPath 提供智能体自动化和业务编排平台，将 AI 代理、机器人、工具、AI 模型和人员连接起来，帮助企业自动化并编排工作流。',
        },
      },
    }
  );
})(window);
