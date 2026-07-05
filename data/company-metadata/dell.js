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
      key: 'dell',
      name: 'Dell',
      legalName: 'Dell Technologies Inc.',
      ticker: 'DELL',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 264595324266,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/dell/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'AI infrastructure, servers, storage, networking, personal computers, peripherals, software, and technology services',
      founded: '1984',
      headquarters: 'Round Rock, Texas, United States',
      fiscalYearEnd: '52- or 53-week period ending on the Friday nearest January 31',
      website: 'https://www.dell.com/',
      description:
        'Dell Technologies provides IT hardware, software, and service solutions spanning AI-optimized servers, traditional servers and networking, storage, commercial and consumer client devices, peripherals, and related infrastructure services.',
      sourceUrls: [
        'https://www.dell.com/en-us/lp/dt/who-we-are',
        'https://investors.delltechnologies.com/',
        'https://investors.delltechnologies.com/shareholder-services/investor-faqs',
        'https://investors.delltechnologies.com/financial-information/quarterly-results',
        'https://investors.delltechnologies.com/static-files/ef369f17-2b83-4fd4-9a37-6b6ab53ac9c5',
      ],
      i18n: {
        zh: {
          displayName: '戴尔',
          sector: '信息技术',
          industry: 'AI 基础设施、服务器、存储、网络、个人电脑、外设、软件和技术服务',
          headquarters: '美国德克萨斯州朗德罗克',
          fiscalYearEnd: '截至最接近 1 月 31 日的星期五的 52 或 53 周期间',
          description:
            'Dell Technologies 提供 IT 硬件、软件和服务解决方案，覆盖 AI 优化服务器、传统服务器与网络、存储、商用和消费客户端设备、外设及相关基础设施服务。',
        },
      },
    }
  );
})(window);
