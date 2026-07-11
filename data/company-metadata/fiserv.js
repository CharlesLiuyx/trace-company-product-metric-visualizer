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
      key: 'fiserv',
      name: 'Fiserv',
      legalName: 'Fiserv, Inc.',
      aliases: ['Fiserv Inc.'],
      ticker: 'FISV',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 26970000000,
        asOf: '2026-07-08',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/fisv/market-cap/',
      },
      sector: 'Financials',
      industry: 'Payments and financial services technology',
      founded: '1984',
      headquarters: 'Milwaukee, Wisconsin, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.fiserv.com/',
      description:
        'Fiserv is a global provider of payments and financial services technology. It serves merchants, banks, credit unions, other financial institutions, corporate and public-sector clients with account processing, digital banking, card issuer processing, payment and merchant-acquiring products, including the Clover point-of-sale platform.',
      sourceUrls: [
        'https://www.fiserv.com/',
        'https://investors.fiserv.com/news-releases/news-release-details/fiserv-reports-fourth-quarter-and-full-year-2025-results',
        'https://investors.fiserv.com/static-files/9e20ef73-0abc-4550-a6b3-95c26b30719f',
        'https://stockanalysis.com/stocks/fisv/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'Fiserv',
          sector: '金融',
          industry: '支付与金融服务科技',
          headquarters: '美国威斯康星州密尔沃基',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Fiserv 是一家全球支付与金融服务科技提供商，面向商户、银行、信用合作社、其他金融机构、企业及公共部门客户，提供账户处理、数字银行、发卡行处理、支付、商户收单等产品和服务，其中包括 Clover 销售点平台。',
        },
      },
    }
  );
})(window);
