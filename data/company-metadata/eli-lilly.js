/* Company-profile SSOT. Period financials live in data/income-statements/. */
(function (global) {
  'use strict';
  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || { schemaVersion: 1, companies: [] });
  metadata.companies.push({
    key: 'eli-lilly', name: 'Eli Lilly', legalName: 'Eli Lilly and Company', ticker: 'LLY', exchange: 'NYSE',
    marketCap: { valueUsd: 1100000000000, asOf: '2026-07-08', source: 'StockAnalysis', sourceUrl: 'https://stockanalysis.com/stocks/lly/market-cap/' },
    sector: 'Health Care', industry: 'Pharmaceuticals', founded: '1876', headquarters: 'Indianapolis, Indiana, United States',
    fiscalYearEnd: 'December 31', website: 'https://www.lilly.com/',
    description: 'Eli Lilly and Company discovers, develops, manufactures, and markets human pharmaceutical products globally, with major franchises in cardiometabolic health, oncology, immunology, and neuroscience.',
    sourceUrls: ['https://www.lilly.com/about/key-facts', 'https://investor.lilly.com/', 'https://stockanalysis.com/stocks/lly/market-cap/'],
    i18n: { zh: { displayName: '礼来', sector: '医疗健康', industry: '制药', headquarters: '美国印第安纳州印第安纳波利斯', fiscalYearEnd: '12 月 31 日', description: '礼来是一家全球性人用药物企业，从事药物的发现、研发、生产和销售，核心业务覆盖心血管代谢、肿瘤、免疫和神经科学。' } },
  });
})(window);
