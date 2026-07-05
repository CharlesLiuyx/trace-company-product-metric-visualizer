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
      key: 'coca-cola',
      name: 'Coca-Cola',
      legalName: 'The Coca-Cola Company',
      ticker: 'KO',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 300000000000,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/ko/market-cap/',
      },
      sector: 'Consumer Staples',
      industry: 'Nonalcoholic beverages — sparkling soft drinks, water, sports, coffee, tea, and juice brands sold as concentrates and finished products through a global bottling system',
      founded: '1886',
      headquarters: 'Atlanta, Georgia, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.coca-colacompany.com/',
      description:
        'The Coca-Cola Company is a global beverage company that manufactures, markets, and sells nonalcoholic beverage concentrates, syrups, and finished drinks — including sparkling soft drinks, water, sports drinks, coffee, tea, and juice — through a worldwide network of company-owned operations and independent bottling partners.',
      sourceUrls: [
        'https://www.coca-colacompany.com/about-us',
        'https://investors.coca-colacompany.com/',
        'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=KO&type=10-Q',
        'https://stockanalysis.com/stocks/ko/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: '可口可乐',
          sector: '日常消费品',
          industry: '非酒精饮料——碳酸软饮、水、运动饮料、咖啡、茶和果汁品牌，以浓缩液和成品形式通过全球装瓶体系销售',
          headquarters: '美国佐治亚州亚特兰大',
          fiscalYearEnd: '12 月 31 日',
          description:
            '可口可乐公司是一家全球饮料企业，通过遍布全球的自营业务和独立装瓶合作伙伴网络，生产、营销并销售非酒精饮料浓缩液、糖浆和成品饮料，涵盖碳酸软饮、水、运动饮料、咖啡、茶和果汁。',
        },
      },
    }
  );
})(window);
