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
      key: 'walmart',
      name: 'Walmart',
      legalName: 'Walmart Inc.',
      ticker: 'WMT',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 932527700000,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/wmt/market-cap/',
      },
      sector: 'Consumer Staples',
      industry: 'Omnichannel retail, grocery, general merchandise, warehouse clubs, e-commerce, advertising, and financial services',
      founded: '1962',
      headquarters: 'Bentonville, Arkansas, United States',
      fiscalYearEnd: 'January 31',
      website: 'https://www.walmart.com/',
      description:
        'Walmart is a people-led, tech-powered omnichannel retailer serving customers and members through Walmart U.S., Walmart International, Sam\'s Club, stores, clubs, eCommerce websites, mobile services, advertising, membership, and marketplace platforms.',
      sourceUrls: [
        'https://corporate.walmart.com/about',
        'https://corporate.walmart.com/about/history',
        'https://stock.walmart.com/',
        'https://stock.walmart.com/financial-information/annual-reports',
        'https://corporate.walmart.com/news/2026/05/21/walmart-releases-q1-fy27-earnings',
      ],
      i18n: {
        zh: {
          name: '沃尔玛',
          displayName: '沃尔玛',
          sector: '日常消费品',
          industry: '全渠道零售、食品杂货、综合商品、仓储会员店、电子商务、广告和金融服务',
          headquarters: '美国阿肯色州本顿维尔',
          fiscalYearEnd: '1 月 31 日',
          description:
            '沃尔玛是一家以人为本、技术驱动的全渠道零售商，业务覆盖 Walmart U.S.、Walmart International、Sam\'s Club、门店、会员店、电商网站、移动服务、广告、会员和 marketplace 平台。',
        },
      },
    }
  );
})(window);
