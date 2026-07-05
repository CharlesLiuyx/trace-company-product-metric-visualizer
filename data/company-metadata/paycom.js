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
      key: 'paycom',
      name: 'Paycom',
      legalName: 'Paycom Software, Inc.',
      ticker: 'PAYC',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 6020000000,
        asOf: '2026-06-26',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/payc/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Human capital management software, payroll, HR, talent management, time and labor management, benefits, and compliance SaaS',
      founded: '1998',
      headquarters: 'Oklahoma City, Oklahoma, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.paycom.com/',
      description:
        'Paycom provides cloud-based human capital management software built around a single HR and payroll database, helping organizations manage payroll, talent, time and labor, benefits, compliance, and employee self-service workflows.',
      sourceUrls: [
        'https://www.paycom.com/about/',
        'https://investors.paycom.com/overview/default.aspx',
        'https://investors.paycom.com/news/news-details/2026/Paycom-Software-Inc--Reports-First-Quarter-2026-Results/default.aspx',
        'https://investors.paycom.com/resources/investor-faq/',
        'https://stockanalysis.com/stocks/payc/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'Paycom',
          sector: '信息技术',
          industry: '人力资本管理软件、薪资、HR、人才管理、工时劳动力管理、福利、合规 SaaS',
          headquarters: '美国俄克拉荷马州俄克拉荷马城',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Paycom 提供基于单一 HR 与薪资数据库的云端人力资本管理软件，帮助组织管理员工薪资、人才、工时与劳动力、福利、合规和员工自助流程。',
        },
      },
    }
  );
})(window);
