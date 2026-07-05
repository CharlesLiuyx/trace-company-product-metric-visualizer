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
      key: 'costco',
      name: 'Costco',
      legalName: 'Costco Wholesale Corporation',
      ticker: 'COST',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 421980000000,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/cost/market-cap/',
      },
      sector: 'Consumer Staples',
      industry: 'Membership warehouse clubs, grocery, general merchandise, e-commerce, and ancillary retail services',
      founded: '1983',
      headquarters: 'Issaquah, Washington, United States',
      fiscalYearEnd: 'September through August',
      website: 'https://www.costco.com/',
      description:
        'Costco operates membership warehouses and e-commerce websites built around low prices, limited nationally branded and private-label selection, rapid inventory turnover, and operating efficiencies from volume purchasing and warehouse-format distribution.',
      sourceUrls: [
        'https://investor.costco.com/overview/default.aspx',
        'https://investor.costco.com/resources/investor-faqs/default.aspx',
        'https://investor.costco.com/financials/sec-filings/default.aspx',
        'https://stockanalysis.com/stocks/cost/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: '好市多',
          sector: '日常消费品',
          industry: '会员制仓储零售、食品杂货、综合商品、电子商务和零售配套服务',
          headquarters: '美国华盛顿州伊瑟阔',
          fiscalYearEnd: '9 月至 8 月',
          description:
            'Costco 经营会员制仓储门店和电商网站，围绕低价格、有限的全国品牌和自有品牌精选商品、快速库存周转，以及规模采购和仓储式分销带来的运营效率开展业务。',
        },
      },
    }
  );
})(window);
