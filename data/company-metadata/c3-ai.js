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
      key: 'c3-ai',
      name: 'C3.ai',
      legalName: 'C3.ai, Inc.',
      ticker: 'AI',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 1410000000,
        asOf: '2026-06-22',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/ai/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Enterprise AI application software, generative AI, and predictive analytics platform',
      founded: '2009',
      headquarters: 'Redwood City, California, United States',
      fiscalYearEnd: 'April 30',
      website: 'https://c3.ai/',
      description:
        'C3.ai is an enterprise AI application software company that provides a family of turnkey AI applications and the C3 AI Platform for developing, deploying, and operating large-scale predictive and generative AI applications across industries.',
      sourceUrls: [
        'https://ir.c3.ai/',
        'https://c3.ai/company/about-us/',
        'https://stockanalysis.com/stocks/ai/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'C3.ai',
          sector: '信息技术',
          industry: '企业级 AI 应用软件、生成式 AI 与预测分析平台',
          headquarters: '美国加利福尼亚州红木城',
          fiscalYearEnd: '4 月 30 日',
          description:
            'C3.ai 是一家企业级 AI 应用软件公司，提供一系列开箱即用的 AI 应用以及 C3 AI 平台，帮助各行业开发、部署和运行大规模预测式与生成式 AI 应用。',
        },
      },
    }
  );
})(window);
