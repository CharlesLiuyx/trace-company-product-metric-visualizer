/* Company-profile SSOT record. Profile fields only — period financials stay
 * in data/income-statements/domino-s.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push(
    {
      key: 'domino-s',
      name: "Domino's",
      legalName: "Domino's Pizza, Inc.",
      aliases: ['Dominos', "Domino's Pizza"],
      ticker: 'DPZ',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 10420000000,
        asOf: '2026-07-07',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/dpz/market-cap/',
      },
      sector: 'Consumer Discretionary',
      industry: 'Quick-service pizza restaurants, franchising, supply chain, and digital ordering',
      founded: '1960',
      headquarters: 'Ann Arbor, Michigan, United States',
      fiscalYearEnd: 'Sunday closest to December 31',
      website: 'https://www.dominos.com/',
      description:
        "Domino's operates a global quick-service pizza network, with revenue from U.S. company-owned stores, U.S. and international franchise royalties and fees, supply-chain operations, and U.S. franchise advertising.",
      sourceUrls: [
        'https://ir.dominos.com/',
        'https://ir.dominos.com/financial-information/annual-reports',
        'https://ir.dominos.com/node/24181',
        'https://stockanalysis.com/stocks/dpz/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: '达美乐',
          sector: '非必需消费品',
          industry: '快捷披萨餐厅、特许经营、供应链和数字点餐',
          headquarters: '美国密歇根州安娜堡',
          fiscalYearEnd: '最接近 12 月 31 日的星期日',
          description:
            '达美乐经营全球快捷披萨网络，收入来自美国自营门店、美国及国际特许经营权利金与费用、供应链业务，以及美国加盟商广告。',
        },
      },
    }
  );
})(window);
