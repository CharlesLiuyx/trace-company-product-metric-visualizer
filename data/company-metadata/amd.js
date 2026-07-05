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
      key: 'amd',
      name: 'AMD',
      legalName: 'Advanced Micro Devices, Inc.',
      ticker: 'AMD',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 876235900000,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/amd/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Semiconductors, high-performance computing, AI accelerators, CPUs, GPUs, FPGAs, adaptive SoCs, embedded systems, AI PCs, and gaming',
      founded: '1969',
      headquarters: 'Santa Clara, California, United States',
      fiscalYearEnd: 'Last Saturday in December',
      website: 'https://www.amd.com/',
      description:
        'AMD designs high-performance and AI computing products spanning data center CPUs and accelerators, client processors, graphics, embedded CPUs, FPGAs, adaptive SoCs, networking, software, and gaming technologies.',
      sourceUrls: [
        'https://www.amd.com/',
        'https://ir.amd.com/',
        'https://ir.amd.com/news-events/press-releases/detail/1284/amd-reports-first-quarter-2026-financial-results',
        'https://ir.amd.com/financial-information/sec-filings/content/0000002488-26-000076/amd-20260328.htm',
      ],
      i18n: {
        zh: {
          displayName: 'AMD',
          sector: '信息技术',
          industry: '半导体、高性能计算、AI 加速器、CPU、GPU、FPGA、自适应 SoC、嵌入式系统、AI PC 与游戏',
          headquarters: '美国加利福尼亚州圣克拉拉',
          fiscalYearEnd: '12 月最后一个星期六',
          description:
            'AMD 设计高性能与 AI 计算产品，涵盖数据中心 CPU 和加速器、客户端处理器、显卡、嵌入式 CPU、FPGA、自适应 SoC、网络、软件以及游戏技术。',
        },
      },
    }
  );
})(window);
