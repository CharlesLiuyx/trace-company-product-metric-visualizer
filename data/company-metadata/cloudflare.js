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
      key: 'cloudflare',
      name: 'Cloudflare',
      legalName: 'Cloudflare, Inc.',
      ticker: 'NET',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 83860000000,
        asOf: '2026-06-26',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/net/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Connectivity cloud, cloud networking, application security, performance, Zero Trust, developer platform, and edge computing services',
      founded: '2009',
      headquarters: 'San Francisco, California, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.cloudflare.com/',
      description:
        'Cloudflare provides a connectivity cloud that helps organizations make employees, applications, and networks faster and more secure, spanning cloud networking, security, performance, developer, and edge-computing services on a global network.',
      sourceUrls: [
        'https://cloudflare.net/',
        'https://www.cloudflare.com/about-overview/',
        'https://www.cloudflare.com/press/press-releases/2026/cloudflare-announces-first-quarter-2026-financial-results/',
        'https://stockanalysis.com/stocks/net/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'Cloudflare',
          sector: '信息技术',
          industry: '连接云、云网络、应用安全、性能、零信任、开发者平台和边缘计算服务',
          headquarters: '美国加利福尼亚州旧金山',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Cloudflare 提供连接云，帮助组织让员工、应用和网络更快速、更安全，业务覆盖云网络、安全、性能、开发者和边缘计算服务，并运行在全球网络之上。',
        },
      },
    }
  );
})(window);
