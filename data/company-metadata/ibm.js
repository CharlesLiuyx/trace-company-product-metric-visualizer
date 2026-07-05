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
      key: 'ibm',
      name: 'IBM',
      legalName: 'International Business Machines Corporation',
      ticker: 'IBM',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 234125400000,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/ibm/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Hybrid cloud, AI, software, consulting, infrastructure, and financing',
      founded: '1911',
      headquarters: 'Armonk, New York, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.ibm.com/',
      description:
        'IBM brings together software, consulting, and infrastructure to help clients run enterprise workloads across hybrid cloud and AI environments, with offerings spanning Red Hat, automation, data, transaction processing, infrastructure support, and financing.',
      sourceUrls: [
        'https://www.ibm.com/about',
        'https://www.ibm.com/investor',
        'https://www.ibm.com/investor/events/earnings-1q26',
        'https://www.sec.gov/Archives/edgar/data/51143/000005114326000010/ibm-20251231.htm',
      ],
      i18n: {
        zh: {
          displayName: 'IBM',
          sector: '信息技术',
          industry: '混合云、AI、软件、咨询、基础设施与融资',
          headquarters: '美国纽约州阿蒙克',
          fiscalYearEnd: '12 月 31 日',
          description:
            'IBM 整合软件、咨询与基础设施，帮助客户在混合云和 AI 环境中运行企业工作负载，产品与服务涵盖 Red Hat、自动化、数据、交易处理、基础设施支持及融资。',
        },
      },
    }
  );
})(window);
