/* Company-profile SSOT record. Profile fields only — period financials stay
 * in data/income-statements/. Format: data/schema.md. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'fortinet',
    name: 'Fortinet',
    legalName: 'Fortinet, Inc.',
    ticker: 'FTNT',
    exchange: 'NASDAQ',
    marketCap: {
      valueUsd: 118260000000,
      asOf: '2026-07-07',
      source: 'StockAnalysis',
      sourceUrl: 'https://stockanalysis.com/stocks/ftnt/market-cap/',
    },
    sector: 'Information Technology',
    industry: 'Cybersecurity, network security appliances, secure networking, and security operations software',
    founded: '2000',
    headquarters: 'Sunnyvale, California, United States',
    fiscalYearEnd: 'December 31',
    website: 'https://www.fortinet.com/',
    description:
      'Fortinet provides integrated cybersecurity and secure-networking products, services, and security operations software through the Fortinet Security Fabric platform.',
    sourceUrls: [
      'https://www.fortinet.com/corporate/about-us/about-us',
      'https://investor.fortinet.com/investor-faqs',
      'https://investor.fortinet.com/',
      'https://stockanalysis.com/stocks/ftnt/market-cap/',
    ],
    i18n: {
      zh: {
        displayName: 'Fortinet',
        sector: '信息技术',
        industry: '网络安全、网络安全设备、安全网络与安全运营软件',
        headquarters: '美国加利福尼亚州森尼韦尔',
        fiscalYearEnd: '12 月 31 日',
        description:
          'Fortinet 通过 Fortinet Security Fabric 平台提供一体化网络安全、安全网络产品、服务与安全运营软件。',
      },
    },
  });
})(window);
