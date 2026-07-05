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
      key: 'coreweave',
      name: 'CoreWeave',
      legalName: 'CoreWeave, Inc.',
      ticker: 'CRWV',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 64350022311,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/crwv/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'AI cloud computing, GPU infrastructure, high-performance computing, AI storage, networking, and managed software services',
      founded: '2017',
      headquarters: 'Livingston, New Jersey, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.coreweave.com/',
      description:
        'CoreWeave provides an AI-native cloud platform combining GPU-accelerated compute, storage, networking, orchestration, and managed software services for AI labs, startups, enterprises, and other customers building and running AI workloads at scale.',
      sourceUrls: [
        'https://www.coreweave.com/',
        'https://investors.coreweave.com/overview/default.aspx',
        'https://investors.coreweave.com/news/news-details/2026/CoreWeave-Reports-Strong-First-Quarter-2026-Results/',
        'https://s205.q4cdn.com/133937190/files/doc_financials/2026/q1/CoreWeave-1Q26-10-Q.pdf',
      ],
      i18n: {
        zh: {
          displayName: 'CoreWeave',
          sector: '信息技术',
          industry: 'AI 云计算、GPU 基础设施、高性能计算、AI 存储、网络与托管软件服务',
          headquarters: '美国新泽西州利文斯顿',
          fiscalYearEnd: '12 月 31 日',
          description:
            'CoreWeave 提供 AI 原生云平台，整合 GPU 加速计算、存储、网络、编排与托管软件服务，服务于大规模构建和运行 AI 工作负载的 AI 实验室、初创公司及企业客户。',
        },
      },
    }
  );
})(window);
