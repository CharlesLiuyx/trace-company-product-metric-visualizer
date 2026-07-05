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
      key: 'cerebras',
      name: 'Cerebras',
      legalName: 'Cerebras Systems Inc.',
      ticker: 'CBRS',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 62080000000,
        asOf: '2026-07-03',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/cbrs/',
      },
      sector: 'Information Technology',
      industry: 'Semiconductors and AI supercomputing systems, spanning wafer-scale AI accelerators and AI inference and training cloud services',
      founded: '2015',
      headquarters: 'Sunnyvale, California, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.cerebras.ai/',
      description:
        'Cerebras Systems builds AI supercomputers powered by its wafer-scale engine (WSE) processors and CS-series systems, and sells AI compute both as hardware and through an AI inference and training cloud, targeting large-scale AI model training and high-speed inference.',
      sourceUrls: [
        'https://www.cerebras.ai/company',
        'https://en.wikipedia.org/wiki/Cerebras',
        'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=CBRS&type=10-Q',
      ],
      i18n: {
        zh: {
          displayName: 'Cerebras',
          sector: '信息技术',
          industry: '半导体与 AI 超级计算系统，涵盖晶圆级 AI 加速器与 AI 推理和训练云服务',
          headquarters: '美国加利福尼亚州森尼韦尔',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Cerebras Systems 基于其晶圆级引擎（WSE）处理器与 CS 系列系统打造 AI 超级计算机，并以硬件和 AI 推理与训练云两种方式销售 AI 算力，面向大规模 AI 模型训练与高速推理。',
        },
      },
    }
  );
})(window);
