/* Company-profile SSOT record. Profile fields only — period financials stay
 * in data/income-statements/. Format: data/schema.md. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'carnival',
    name: 'Carnival',
    legalName: 'Carnival Corporation Ltd.',
    aliases: ['Carnival Corporation & plc'],
    ticker: 'CCL',
    exchange: 'NYSE',
    marketCap: {
      valueUsd: 35120000000,
      asOf: '2026-07-08',
      source: 'StockAnalysis',
      sourceUrl: 'https://stockanalysis.com/stocks/ccl/market-cap/',
    },
    sector: 'Consumer Discretionary',
    industry: 'Cruise lines, leisure travel, hospitality, and passenger cruising',
    founded: '1972',
    headquarters: 'Miami, Florida, United States',
    fiscalYearEnd: 'November 30',
    website: 'https://www.carnivalcorp.com/',
    description:
      'Carnival operates a portfolio of global cruise brands, providing passenger cruises, onboard experiences, and related travel services across North America, Europe, Australia, and other international markets.',
    sourceUrls: [
      'https://www.carnivalcorp.com/',
      'https://www.carnivalcorp.com/investors/',
      'https://www.carnivalcorp.com/investors/investor-services/investor-faqs/',
      'https://stockanalysis.com/stocks/ccl/market-cap/',
    ],
    i18n: {
      zh: {
        displayName: '嘉年华',
        sector: '非必需消费品',
        industry: '邮轮、休闲旅行、酒店与客运邮轮服务',
        headquarters: '美国佛罗里达州迈阿密',
        fiscalYearEnd: '11 月 30 日',
        description:
          '嘉年华运营由多个全球邮轮品牌组成的组合，面向北美、欧洲、澳大利亚及其他国际市场提供客运邮轮、船上体验和相关旅行服务。',
      },
    },
  });
})(window);
