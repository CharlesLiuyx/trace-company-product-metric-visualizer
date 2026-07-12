/* Company-profile SSOT. Period financials belong in data/income-statements/chewy.js. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'chewy',
    name: 'Chewy',
    legalName: 'Chewy, Inc.',
    ticker: 'CHWY',
    exchange: 'NYSE',
    marketCap: {
      valueUsd: 8050000000,
      asOf: '2026-07-01',
      source: 'Stock Analysis',
      sourceUrl: 'https://stockanalysis.com/stocks/chwy/market-cap/',
    },
    sector: 'Consumer Discretionary',
    industry: 'Specialty Retail and e-commerce',
    founded: '2011',
    headquarters: 'Florida and Massachusetts, United States',
    fiscalYearEnd: 'Sunday closest to January 31',
    website: 'https://www.chewy.com/',
    description:
      'Chewy is an e-commerce destination for pet products, supplies and prescriptions, serving pet parents through its websites and mobile applications.',
    sourceUrls: [
      'https://investor.chewy.com/resources/investor-faqs/default.aspx',
      'https://investor.chewy.com/news-and-events/news/news-details/2026/Chewy-Announces-First-Quarter-2026-Financial-Results/default.aspx',
      'https://www.chewy.com/',
      'https://stockanalysis.com/stocks/chwy/market-cap/',
    ],
    i18n: {
      zh: {
        displayName: 'Chewy',
        sector: '非必需消费品',
        industry: '专业零售与电子商务',
        headquarters: '美国佛罗里达州及马萨诸塞州',
        fiscalYearEnd: '最接近 1 月 31 日的星期日',
        description: 'Chewy 是面向宠物主人的电商平台，通过网站和移动应用销售宠物用品、食品与处方产品。',
      },
    },
  });
})(window);
