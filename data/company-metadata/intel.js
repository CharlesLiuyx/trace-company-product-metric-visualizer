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
      key: 'intel',
      name: 'Intel',
      legalName: 'Intel Corporation',
      ticker: 'INTC',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 638400000000,
        asOf: '2026-07-01',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/intc/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Semiconductors, x86 CPUs, GPUs, AI accelerators, programmable logic, and foundry manufacturing services',
      founded: '1968',
      headquarters: 'Santa Clara, California, United States',
      fiscalYearEnd: 'Last Saturday in December',
      website: 'https://www.intel.com/',
      description:
        'Intel designs and manufactures semiconductors, spanning client-computing and data-center CPUs, GPUs and AI accelerators, and Intel Foundry contract chip-manufacturing services for external and internal customers.',
      sourceUrls: [
        'https://www.intel.com/content/www/us/en/company-overview/company-overview.html',
        'https://www.intc.com/',
        'https://www.intc.com/news-events/press-releases',
      ],
      i18n: {
        zh: {
          displayName: '英特尔',
          sector: '信息技术',
          industry: '半导体、x86 CPU、GPU、AI 加速器、可编程逻辑与晶圆代工制造服务',
          headquarters: '美国加利福尼亚州圣克拉拉',
          fiscalYearEnd: '12 月最后一个星期六',
          description:
            '英特尔设计并制造半导体，业务涵盖客户端计算与数据中心 CPU、GPU 与 AI 加速器，以及为外部和内部客户提供芯片代工制造的 Intel Foundry。',
        },
      },
    }
  );
})(window);
