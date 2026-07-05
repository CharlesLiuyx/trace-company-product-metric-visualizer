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
      key: 'shopify',
      name: 'Shopify',
      legalName: 'Shopify Inc.',
      ticker: 'SHOP',
      exchange: 'NYSE / TSX',
      marketCap: {
        valueUsd: 151643900000,
        asOf: '2026-06-29',
        source: 'CompaniesMarketCap',
        sourceUrl: 'https://companiesmarketcap.com/shopify/marketcap/',
      },
      sector: 'Information Technology',
      industry: 'Commerce platform, e-commerce software, merchant services, payments, fulfillment, lending, and retail tools',
      founded: '2006',
      headquarters: 'Ottawa, Ontario, Canada',
      fiscalYearEnd: 'December 31',
      website: 'https://www.shopify.com/',
      description:
        'Shopify provides a global commerce platform for entrepreneurs and brands, combining online stores, checkout, payments, point of sale, fulfillment, shipping, capital, marketing, and merchant operations tools.',
      sourceUrls: [
        'https://www.shopify.com/',
        'https://www.shopify.com/investors',
        'https://www.shopify.com/investors/financials',
        'https://companiesmarketcap.com/shopify/marketcap/',
      ],
      i18n: {
        zh: {
          displayName: 'Shopify',
          sector: '信息技术',
          industry: '商业平台、电子商务软件、商家服务、支付、履约、贷款和零售工具',
          headquarters: '加拿大安大略省渥太华',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Shopify 为创业者和品牌提供全球商业平台，结合线上商店、结账、支付、销售点、履约、配送、资金、营销和商家运营工具。',
        },
      },
    }
  );
})(window);
