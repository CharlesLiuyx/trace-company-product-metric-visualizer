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
      key: 'arm-holdings',
      name: 'Arm Holdings',
      legalName: 'Arm Holdings plc',
      ticker: 'ARM',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 469377891870,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/arm/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Semiconductor intellectual property, compute platforms, chip design, and software tools',
      founded: '1990',
      headquarters: 'Cambridge, England, United Kingdom',
      fiscalYearEnd: 'March 31',
      website: 'https://www.arm.com/',
      description:
        'Arm develops high-performance, energy-efficient CPU products, compute subsystems, architectures, software tools, and related semiconductor IP used by chipmakers and technology companies across edge devices, PCs, data centers, automotive systems, and embedded markets.',
      sourceUrls: [
        'https://www.arm.com/company',
        'https://investors.arm.com/',
        'https://investors.arm.com/financials/quarterly-annual-results',
        'https://newsroom.arm.com/news/arm-holdings-plc-reports-results-for-the-fourth-quarter-and-fiscal-year-ended-2026',
      ],
      i18n: {
        zh: {
          displayName: 'Arm',
          sector: '信息技术',
          industry: '半导体知识产权、计算平台、芯片设计与软件工具',
          headquarters: '英国英格兰剑桥',
          fiscalYearEnd: '3 月 31 日',
          description:
            'Arm 开发高性能、高能效的 CPU 产品、计算子系统、架构、软件工具及相关半导体 IP，被芯片厂商和科技公司广泛用于边缘设备、PC、数据中心、汽车系统和嵌入式市场。',
        },
      },
    }
  );
})(window);
