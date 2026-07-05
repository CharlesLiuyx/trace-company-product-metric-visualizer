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
      key: 'amazon',
      name: 'Amazon',
      legalName: 'Amazon.com, Inc.',
      ticker: 'AMZN',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 2628930000000,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/amzn/market-cap/',
      },
      sector: 'Consumer Discretionary',
      industry: 'E-commerce, cloud computing, digital advertising, subscriptions, devices, and logistics',
      founded: '1994',
      headquarters: 'Seattle, Washington, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.amazon.com/',
      description:
        'Amazon operates online and physical stores, third-party seller services, advertising, subscription products, AWS cloud services, devices, digital content, and logistics infrastructure for consumers, sellers, developers, enterprises, and creators.',
      sourceUrls: [
        'https://www.aboutamazon.com/about-us',
        'https://ir.aboutamazon.com/overview/default.aspx',
        'https://ir.aboutamazon.com/sec-filings/default.aspx',
      ],
      i18n: {
        zh: {
          displayName: '亚马逊',
          sector: '非必需消费品',
          industry: '电子商务、云计算、数字广告、订阅、设备和物流',
          headquarters: '美国华盛顿州西雅图',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Amazon 经营线上和实体商店、第三方卖家服务、广告、订阅产品、AWS 云服务、设备、数字内容和物流基础设施，服务消费者、卖家、开发者、企业和创作者。',
        },
      },
    }
  );
})(window);
