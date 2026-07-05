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
      key: 'pdd-holdings',
      name: 'PDD Holdings',
      legalName: 'PDD Holdings Inc.',
      aliases: ['PDD Holdings Inc.', 'Pinduoduo'],
      ticker: 'PDD',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 113250000000,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/pdd/market-cap/',
      },
      sector: 'Consumer Discretionary',
      industry: 'E-commerce, online marketplaces, transaction services, online marketing, sourcing, logistics, and fulfillment',
      founded: '2015',
      headquarters: 'Dublin, Ireland and Shanghai, China',
      fiscalYearEnd: 'December 31',
      website: 'https://www.pddholdings.com/',
      description:
        'PDD Holdings is a multinational commerce group that owns and operates a portfolio of businesses, including Pinduoduo and Temu, supported by sourcing, logistics, fulfillment, online marketing, and transaction-service capabilities.',
      sourceUrls: [
        'https://www.pddholdings.com/',
        'https://investor.pddholdings.com/',
        'https://investor.pddholdings.com/information-investors',
        'https://investor.pddholdings.com/news-releases/news-release-details/pdd-holdings-announces-first-quarter-2026-unaudited-financial',
        'https://investor.pddholdings.com/static-files/92dafbdc-3125-4f2c-a28f-3d61203efbaf',
        'https://stockanalysis.com/stocks/pdd/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: '拼多多控股',
          sector: '非必需消费品',
          industry: '电子商务、在线市场、交易服务、在线营销、采购、物流和履约',
          headquarters: '爱尔兰都柏林和中国上海',
          fiscalYearEnd: '12 月 31 日',
          description:
            'PDD Holdings 是一家跨国商业集团，拥有并运营包括拼多多和 Temu 在内的业务组合，并以采购、物流、履约、在线营销和交易服务能力支撑其平台。',
        },
      },
    }
  );
})(window);
