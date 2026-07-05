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
      key: 'veeva',
      name: 'Veeva Systems',
      legalName: 'Veeva Systems Inc.',
      ticker: 'VEEV',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 44000000000,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/veev/market-cap/',
      },
      sector: 'Health Care',
      industry: 'Health Care Technology (cloud software for the life sciences industry)',
      founded: '2007',
      headquarters: 'Pleasanton, California, United States',
      fiscalYearEnd: 'January 31',
      website: 'https://www.veeva.com/',
      description:
        'Veeva Systems is a cloud-software company built for the global life sciences industry. Its two families are Commercial Solutions, anchored by the Veeva CRM customer-engagement suite, and R&D Solutions, anchored by the Veeva Vault content and data-management platform spanning clinical, regulatory, quality, and safety.',
      sourceUrls: [
        'https://www.veeva.com/',
        'https://ir.veeva.com/',
        'https://www.veeva.com/products/',
      ],
      i18n: {
        zh: {
          displayName: 'Veeva Systems',
          sector: '医疗健康',
          industry: '医疗健康科技（面向生命科学行业的云软件）',
          headquarters: '美国加利福尼亚州普莱森顿',
          fiscalYearEnd: '1 月 31 日',
          description:
            'Veeva Systems 是一家专为全球生命科学行业打造的云软件公司。其两大产品族为商业化解决方案（Commercial Solutions，以 Veeva CRM 客户互动套件为核心）和研发解决方案（R&D Solutions，以覆盖临床、法规、质量与安全的 Veeva Vault 内容与数据管理平台为核心）。',
        },
      },
    }
  );
})(window);
