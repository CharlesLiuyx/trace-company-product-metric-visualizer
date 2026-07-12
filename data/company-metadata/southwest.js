/* Company-profile SSOT record. Period financials stay in data/income-statements/. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'southwest',
    name: 'Southwest Airlines',
    legalName: 'Southwest Airlines Co.',
    aliases: ['Southwest', 'Southwest Airlines Co.', 'LUV'],
    ticker: 'LUV',
    exchange: 'NYSE',
    marketCap: {
      valueUsd: 23670000000,
      asOf: '2026-07-10',
      source: 'Stock Analysis',
      sourceUrl: 'https://stockanalysis.com/stocks/luv/market-cap/',
    },
    sector: 'Industrials',
    industry: 'Airlines',
    founded: '1967',
    headquarters: 'Dallas, Texas, United States',
    fiscalYearEnd: 'December 31',
    website: 'https://www.southwest.com/',
    description:
      'Southwest Airlines Co. operates a major passenger airline that provides scheduled air transportation in the United States and near-international markets.',
    sourceUrls: [
      'https://www.southwestairlinesinvestorrelations.com/sec-filings/all-sec-filings/content/0000092380-26-000004/luv-20251231.htm',
      'https://www.southwestairlinesinvestorrelations.com/company-information/faqs',
      'https://stockanalysis.com/stocks/luv/market-cap/',
    ],
    i18n: {
      zh: {
        displayName: '西南航空',
        sector: '工业',
        industry: '航空公司',
        headquarters: '美国得克萨斯州达拉斯',
        fiscalYearEnd: '12 月 31 日',
        description: '西南航空运营一家大型客运航空公司，在美国及周边国际市场提供定期航空运输服务。',
      },
    },
  });
})(window);
