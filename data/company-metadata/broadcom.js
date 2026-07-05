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
      key: 'broadcom',
      name: 'Broadcom',
      legalName: 'Broadcom Inc.',
      ticker: 'AVGO',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 1300000000000,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/avgo/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Semiconductors and infrastructure software, spanning networking, broadband, wireless, server storage, and enterprise software',
      founded: '1991',
      headquarters: 'Palo Alto, California, United States',
      fiscalYearEnd: 'Sunday closest to October 31',
      website: 'https://www.broadcom.com/',
      description:
        'Broadcom designs, develops, and supplies a broad range of semiconductor and infrastructure software solutions, spanning data center networking, broadband, wireless, server storage connectivity, and enterprise software including mainframe, distributed, cybersecurity, and cloud infrastructure products.',
      sourceUrls: [
        'https://www.broadcom.com/company/about-us',
        'https://investors.broadcom.com/',
        'https://investors.broadcom.com/financial-information/sec-filings',
      ],
      i18n: {
        zh: {
          displayName: '博通',
          sector: '信息技术',
          industry: '半导体与基础设施软件，涵盖网络、宽带、无线、服务器存储与企业软件',
          headquarters: '美国加利福尼亚州帕洛阿尔托',
          fiscalYearEnd: '最接近 10 月 31 日的星期日',
          description:
            'Broadcom 设计、开发并供应广泛的半导体与基础设施软件解决方案，涵盖数据中心网络、宽带、无线、服务器存储连接，以及包含大型机、分布式、网络安全与云基础设施在内的企业软件。',
        },
      },
    }
  );
})(window);
