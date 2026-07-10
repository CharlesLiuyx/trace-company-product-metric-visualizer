/* Company-profile SSOT record. Profile fields only — period financials stay
 * in data/income-statements/. Format: data/schema.md. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'kraft-heinz',
    name: 'Kraft Heinz',
    legalName: 'The Kraft Heinz Company',
    aliases: ['The Kraft Heinz Company', 'Kraft Heinz Company'],
    ticker: 'KHC',
    exchange: 'NASDAQ',
    marketCap: {
      valueUsd: 30080000000,
      asOf: '2026-07-02',
      source: 'StockAnalysis',
      sourceUrl: 'https://stockanalysis.com/stocks/khc/market-cap/',
    },
    sector: 'Consumer Staples',
    industry: 'Packaged foods and condiments',
    founded: '2015',
    headquarters: 'Chicago, Illinois and Pittsburgh, Pennsylvania, United States',
    fiscalYearEnd: 'Last Saturday in December',
    website: 'https://www.thekraftheinzcompany.com/',
    description: 'Kraft Heinz is a global packaged-food company formed through the 2015 merger of Kraft Foods Group and H.J. Heinz. Its portfolio includes condiments and sauces, cheese, meals, meats, coffee, desserts, and snack brands.',
    sourceUrls: [
      'https://www.thekraftheinzcompany.com/',
      'https://ir.kraftheinzcompany.com/',
      'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=1637459&type=10-K',
      'https://stockanalysis.com/stocks/khc/market-cap/',
    ],
    i18n: {
      zh: {
        displayName: '卡夫亨氏',
        sector: '日常消费品',
        industry: '包装食品与调味品',
        headquarters: '美国伊利诺伊州芝加哥及宾夕法尼亚州匹兹堡',
        fiscalYearEnd: '12 月最后一个星期六',
        description: '卡夫亨氏是一家全球包装食品公司，由卡夫食品集团与亨氏于 2015 年合并而成；其品牌组合覆盖调味品和酱料、奶酪、方便餐食、肉制品、咖啡、甜品及零食。',
      },
    },
  });
})(window);
