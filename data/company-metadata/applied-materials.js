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
      key: 'applied-materials',
      name: 'Applied Materials',
      legalName: 'Applied Materials, Inc.',
      ticker: 'AMAT',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 438270000000,
        asOf: '2026-07-07',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/amat/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Semiconductor equipment, display equipment, services, and materials engineering',
      founded: '1967',
      headquarters: 'Santa Clara, California, United States',
      fiscalYearEnd: 'Last Sunday in October',
      website: 'https://www.appliedmaterials.com/',
      description:
        'Applied Materials provides materials engineering systems, services, and software used to manufacture semiconductors and advanced displays, including chipmaking equipment, process technologies, service solutions, and automation software.',
      sourceUrls: [
        'https://www.appliedmaterials.com/us/en/about.html',
        'https://ir.appliedmaterials.com/financial-information/quarterly-results',
        'https://stockanalysis.com/stocks/amat/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: '应用材料',
          sector: '信息技术',
          industry: '半导体设备、显示设备、服务与材料工程',
          headquarters: '美国加利福尼亚州圣克拉拉',
          fiscalYearEnd: '10 月最后一个星期日',
          description:
            'Applied Materials 提供用于制造半导体和先进显示器的材料工程系统、服务与软件，覆盖芯片制造设备、工艺技术、服务解决方案和自动化软件。',
        },
      },
    }
  );
})(window);
