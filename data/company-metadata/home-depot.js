/* Company-profile SSOT record. Profile fields only — period financials stay
 * in data/income-statements/home-depot.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push(
    {
      key: 'home-depot',
      name: 'Home Depot',
      legalName: 'The Home Depot, Inc.',
      ticker: 'HD',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 342310000000,
        asOf: '2026-07-10',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/hd/market-cap/',
      },
      sector: 'Consumer Discretionary',
      industry: 'Home improvement retail and building materials distribution',
      founded: '1978',
      headquarters: 'Atlanta, Georgia, United States',
      fiscalYearEnd: 'Sunday nearest January 31',
      website: 'https://www.homedepot.com/',
      description:
        'The Home Depot is the world\'s largest home improvement retailer, serving DIY customers, professional contractors, and installation customers through stores, e-commerce, and building-materials distribution businesses.',
      sourceUrls: [
        'https://corporate.homedepot.com/page/about-us',
        'https://ir.homedepot.com/',
        'https://ir.homedepot.com/news-releases/2026/05-19-2026-110111934',
        'https://stockanalysis.com/stocks/hd/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: '家得宝',
          sector: '可选消费',
          industry: '家居改善零售与建筑材料分销',
          headquarters: '美国佐治亚州亚特兰大',
          fiscalYearEnd: '最接近 1 月 31 日的星期日',
          description:
            '家得宝是全球最大的家居改善零售商，通过门店、电商和建筑材料分销业务，服务 DIY 消费者、专业承包商和安装服务客户。',
        },
      },
    }
  );
})(window);
