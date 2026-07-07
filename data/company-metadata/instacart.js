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
      key: 'instacart',
      name: 'Instacart',
      legalName: 'Maplebear Inc.',
      ticker: 'CART',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 10760000000,
        asOf: '2026-07-02',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/cart/market-cap/',
      },
      sector: 'Consumer Discretionary',
      industry: 'Internet retail, grocery technology, delivery marketplace, enterprise commerce software, and retail media advertising',
      founded: '2012',
      headquarters: 'San Francisco, California, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.instacart.com/',
      description:
        'Instacart, legally Maplebear Inc., operates a grocery technology platform spanning the Instacart Marketplace, retailer enterprise commerce software, fulfillment, in-store technology, and Instacart Ads.',
      sourceUrls: [
        'https://www.instacart.com/company',
        'https://investors.instacart.com/',
        'https://investors.instacart.com/financials-filings/quarterly-results',
        'https://stockanalysis.com/stocks/cart/company/',
        'https://stockanalysis.com/stocks/cart/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'Instacart',
          sector: '非必需消费品',
          industry: '互联网零售、杂货技术、配送市场、企业商业软件和零售媒体广告',
          headquarters: '美国加利福尼亚州旧金山',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Instacart 的法定名称为 Maplebear Inc.，运营杂货技术平台，覆盖 Instacart Marketplace、零售商企业商业软件、履约、店内技术和 Instacart Ads。',
        },
      },
    }
  );
})(window);
