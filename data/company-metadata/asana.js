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
      key: 'asana',
      name: 'Asana',
      legalName: 'Asana, Inc.',
      ticker: 'ASAN',
      exchange: 'NYSE / LTSE',
      marketCap: {
        valueUsd: 1600000000,
        asOf: '2026-06-26',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/asan/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Work management software, collaborative work management, workflow orchestration, and AI teamwork platforms',
      founded: '2008',
      headquarters: 'San Francisco, California, United States',
      fiscalYearEnd: 'January 31',
      website: 'https://asana.com/',
      description:
        'Asana provides a work management and workflow orchestration platform for teams and enterprises, built around the Asana Work Graph and products for planning, coordinating, automating, and governing work across humans and AI agents.',
      sourceUrls: [
        'https://asana.com/company',
        'https://investors.asana.com/investor-relations/',
        'https://www.sec.gov/Archives/edgar/data/1477720/000147772026000037/asana8-kex991q1fy27.htm',
        'https://www.sec.gov/Archives/edgar/data/1477720/000147772025000045/asan-20250131.htm',
        'https://stockanalysis.com/stocks/asan/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'Asana',
          sector: '信息技术',
          industry: '工作管理软件、协作工作管理、工作流编排和 AI 团队协作平台',
          headquarters: '美国加利福尼亚州旧金山',
          fiscalYearEnd: '1 月 31 日',
          description:
            'Asana 提供面向团队和企业的工作管理与工作流编排平台，基于 Asana Work Graph，覆盖规划、协同、自动化以及人与 AI 代理共同工作的治理流程。',
        },
      },
    }
  );
})(window);
