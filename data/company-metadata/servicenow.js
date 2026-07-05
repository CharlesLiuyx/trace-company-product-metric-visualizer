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
      key: 'servicenow',
      name: 'ServiceNow',
      legalName: 'ServiceNow, Inc.',
      ticker: 'NOW',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 97986200000,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/now/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Enterprise software, AI workflow automation, IT service management, CRM, security, HR, and low-code app development',
      founded: '2003',
      headquarters: 'Santa Clara, California, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.servicenow.com/',
      description:
        'ServiceNow provides an AI platform for digital workflows across IT, customer service, employee experience, creator workflows, security, risk, finance, supply chain, and industry operations.',
      sourceUrls: [
        'https://www.servicenow.com/company.html',
        'https://investor.servicenow.com/overview/default.aspx',
        'https://investor.servicenow.com/financial-resources/financial-performance/default.aspx',
        'https://s205.q4cdn.com/916135447/files/doc_financials/2026/q1/Q1-2026-Fact-Sheet.pdf',
      ],
      i18n: {
        zh: {
          displayName: 'ServiceNow',
          sector: '信息技术',
          industry: '企业软件、AI 工作流自动化、IT 服务管理、CRM、安全、人力资源与低代码应用开发',
          headquarters: '美国加利福尼亚州圣克拉拉',
          fiscalYearEnd: '12 月 31 日',
          description:
            'ServiceNow 提供面向数字化工作流的 AI 平台，覆盖 IT、客户服务、员工体验、创作者工作流、安全、风险、财务、供应链及行业运营。',
        },
      },
    }
  );
})(window);
