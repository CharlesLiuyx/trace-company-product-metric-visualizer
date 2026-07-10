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
      key: 'dynatrace',
      name: 'Dynatrace',
      legalName: 'Dynatrace, Inc.',
      ticker: 'DT',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 13150000000,
        asOf: '2026-07-07',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/dt/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'AI-powered observability, cloud monitoring, and application security software',
      founded: '2005',
      headquarters: 'Boston, Massachusetts, United States',
      fiscalYearEnd: 'March 31',
      website: 'https://www.dynatrace.com/',
      description:
        'Dynatrace provides an AI-powered observability platform for cloud and on-premises environments, helping enterprises analyze software performance, reliability, security, and digital experiences.',
      sourceUrls: [
        'https://www.dynatrace.com/careers/about/',
        'https://www.dynatrace.com/contact/',
        'https://ir.dynatrace.com/company-information/faq',
        'https://ir.dynatrace.com/news-events/press-releases/detail/417/dynatrace-reports-third-quarter-fiscal-year-2026-financial-results',
        'https://stockanalysis.com/stocks/dt/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'Dynatrace',
          sector: '信息技术',
          industry: 'AI 驱动的可观测性、云监控与应用安全软件',
          headquarters: '美国马萨诸塞州波士顿',
          fiscalYearEnd: '3 月 31 日',
          description:
            'Dynatrace 提供面向云与本地环境的 AI 驱动可观测性平台，帮助企业分析软件性能、可靠性、安全性和数字体验。',
        },
      },
    }
  );
})(window);
