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
      key: 'arista',
      name: 'Arista',
      legalName: 'Arista Networks, Inc.',
      aliases: ['Arista Networks'],
      ticker: 'ANET',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 232560000000,
        asOf: '2026-07-09',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/anet/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Computer networking equipment and software',
      founded: '2008',
      headquarters: 'Santa Clara, California, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.arista.com/',
      description:
        'Arista Networks provides data-driven, client-to-cloud networking platforms for large AI, data center, campus, and routing environments, with automation, analytics, and security delivered through its network operating stack.',
      sourceUrls: [
        'https://www.arista.com/en/company/company-overview',
        'https://www.arista.com/en/company/quick-facts?tmpl=component',
        'https://investors.arista.com/Communications/Press-Releases-and-Events/Press-Release-Detail/2026/Arista-Networks-Inc--Reports-Fourth-Quarter-and-Year-End-2025-Financial-Results/default.aspx',
        'https://stockanalysis.com/stocks/anet/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: '阿里斯塔网络',
          sector: '信息技术',
          industry: '计算机网络设备与软件',
          headquarters: '美国加利福尼亚州圣克拉拉',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Arista Networks 面向大型人工智能、数据中心、园区与路由场景，提供数据驱动的端到云网络平台，并通过其网络操作系统提供自动化、分析与安全能力。',
        },
      },
    }
  );
})(window);
