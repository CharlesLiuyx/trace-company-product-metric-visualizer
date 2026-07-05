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
      key: 'datadog',
      name: 'Datadog',
      legalName: 'Datadog, Inc.',
      ticker: 'DDOG',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 85350000000,
        asOf: '2026-06-26',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/ddog/market-cap/',
      },
      sector: 'Information Technology',
      industry:
        'Observability, cloud monitoring, security, digital experience, software delivery, service management, and AI operations software',
      founded: '2010',
      headquarters: 'New York, New York, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.datadoghq.com/',
      description:
        'Datadog provides an AI-powered observability and security platform for cloud applications, bringing together infrastructure monitoring, application performance monitoring, log management, digital experience monitoring, cloud security, software delivery, service management, and AI operations tools.',
      sourceUrls: [
        'https://www.datadoghq.com/',
        'https://investors.datadoghq.com/',
        'https://investors.datadoghq.com/news-releases/news-release-details/datadog-announces-first-quarter-2026-financial-results',
        'https://investors.datadoghq.com/shareholder-services/investor-faqs/',
        'https://stockanalysis.com/stocks/ddog/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'Datadog',
          sector: '信息技术',
          industry: '可观测性、云监控、安全、数字体验、软件交付、服务管理和 AI 运维软件',
          headquarters: '美国纽约州纽约',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Datadog 提供面向云应用的 AI 驱动可观测性和安全平台，整合基础设施监控、应用性能监控、日志管理、数字体验监控、云安全、软件交付、服务管理和 AI 运维工具。',
        },
      },
    }
  );
})(window);
