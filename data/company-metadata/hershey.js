/* Company-profile SSOT record. Profile fields only — period financials stay
 * in data/income-statements/. Format: data/schema.md. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'hershey',
    name: 'Hershey',
    legalName: 'The Hershey Company',
    ticker: 'HSY',
    exchange: 'NYSE',
    marketCap: {
      valueUsd: 35000000000,
      asOf: '2026-07-10',
      source: 'Market capitalization estimate',
      sourceUrl: 'https://companiesmarketcap.com/hershey/marketcap/',
    },
    sector: 'Consumer Staples',
    industry: 'Confectionery and packaged snacks',
    founded: '1894',
    headquarters: 'Hershey, Pennsylvania, United States',
    fiscalYearEnd: 'December 31',
    website: 'https://www.thehersheycompany.com/',
    description: 'The Hershey Company manufactures, markets, and sells chocolate, confectionery, mints, gum, protein bars, spreads, pantry items, and salty snacks worldwide.',
    sourceUrls: [
      'https://www.thehersheycompany.com/en_us/home/about-us/the-company.html',
      'https://www.thehersheycompany.com/content/hershey-corporate/en-us/home/faqs.html',
      'https://www.sec.gov/Archives/edgar/data/47111/000162828026008586/hsy-20251231.htm',
      'https://companiesmarketcap.com/hershey/marketcap/',
    ],
    i18n: {
      zh: {
        displayName: '好时',
        sector: '日常消费品',
        industry: '糖果和包装零食',
        headquarters: '美国宾夕法尼亚州好时镇',
        fiscalYearEnd: '12 月 31 日',
        description: '好时公司在全球生产、营销并销售巧克力、糖果、薄荷糖、口香糖、蛋白棒、涂抹酱、食品储藏类产品和咸味零食。',
      },
    },
  });
})(window);
