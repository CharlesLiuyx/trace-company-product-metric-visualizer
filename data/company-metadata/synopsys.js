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
      key: 'synopsys',
      name: 'Synopsys',
      legalName: 'Synopsys, Inc.',
      ticker: 'SNPS',
      exchange: 'NASDAQ Global Select Market',
      marketCap: {
        valueUsd: 87220700000,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/snps/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Electronic design automation, silicon IP, simulation and analysis, and silicon-to-systems engineering software',
      founded: '1986',
      headquarters: 'Sunnyvale, California, United States',
      fiscalYearEnd: 'October 31',
      website: 'https://www.synopsys.com/',
      description:
        'Synopsys provides engineering solutions from silicon to systems, spanning silicon design, verification, semiconductor IP, simulation, analysis, AI-enabled EDA, and related design productivity products and services.',
      sourceUrls: [
        'https://www.synopsys.com/company.html',
        'https://investor.synopsys.com/overview/default.aspx',
        'https://investor.synopsys.com/resources/investor-faqs/default.aspx',
        'https://news.synopsys.com/2026-05-27-Synopsys-Posts-Financial-Results-for-Second-Quarter-Fiscal-Year-2026',
      ],
      i18n: {
        zh: {
          displayName: '新思科技',
          sector: '信息技术',
          industry: '电子设计自动化、硅 IP、仿真与分析，以及硅到系统工程软件',
          headquarters: '美国加利福尼亚州桑尼维尔',
          fiscalYearEnd: '10 月 31 日',
          description:
            'Synopsys 提供从硅到系统的工程解决方案，覆盖芯片设计、验证、半导体 IP、仿真、分析、AI 驱动的 EDA，以及相关设计生产力产品和服务。',
        },
      },
    }
  );
})(window);
