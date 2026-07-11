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
      key: 'best-buy',
      name: 'Best Buy',
      legalName: 'Best Buy Co., Inc.',
      ticker: 'BBY',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 16860000000,
        asOf: '2026-07-09',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/bby/market-cap/',
      },
      sector: 'Consumer Discretionary',
      industry: 'Specialty Retail',
      founded: '1966',
      headquarters: 'Richfield, Minnesota, United States',
      fiscalYearEnd: 'Saturday nearest January 31',
      website: 'https://www.bestbuy.com/',
      description:
        'Best Buy is a technology-focused omnichannel retailer serving customers online, in stores, and in their homes across the United States and Canada.',
      sourceUrls: [
        'https://corporate.bestbuy.com/about-best-buy/',
        'https://corporate.bestbuy.com/wp-content/uploads/2025/07/BestBuy-CRS-Report-2025.pdf',
        'https://corporate.bestbuy.com/2026/best-buy-reports-q1-fy27-results/',
        'https://stockanalysis.com/stocks/bby/market-cap/',
      ],
      i18n: {
        zh: {
          name: '百思买',
          displayName: '百思买',
          sector: '可选消费',
          industry: '专业零售',
          headquarters: '美国明尼苏达州里奇菲尔德',
          fiscalYearEnd: '最接近 1 月 31 日的星期六',
          description:
            '百思买是一家以科技产品为核心的全渠道零售商，通过线上、门店和上门服务覆盖美国及加拿大的消费者。',
        },
      },
    }
  );
})(window);
