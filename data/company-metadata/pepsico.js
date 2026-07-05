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
      key: 'pepsico',
      name: 'PepsiCo',
      legalName: 'PepsiCo, Inc.',
      aliases: ['PepsiCo, Inc.'],
      ticker: 'PEP',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 190000000000,
        asOf: '2026-07-02',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/pep/market-cap/',
      },
      sector: 'Consumer Staples',
      industry: 'Food and beverage manufacturing (snacks, beverages, and convenient foods)',
      founded: '1965',
      headquarters: 'Purchase, New York, United States',
      fiscalYearEnd: 'Last Saturday in December',
      website: 'https://www.pepsico.com/',
      description:
        'PepsiCo is a global food and beverage company whose portfolio of snacks, beverages, and convenient foods is sold in more than 200 countries and territories, with brands including Lay’s, Quaker, Pepsi, Gatorade, Doritos, and SodaStream. It reports across a North America foods and beverages business plus the International Beverages Franchise, Latin America (LATAM), Europe, Middle East and Africa (EMEA), and Asia Pacific (APAC) divisions.',
      sourceUrls: [
        'https://www.pepsico.com/',
        'https://www.pepsico.com/our-brands',
        'https://investors.pepsico.com/',
      ],
      i18n: {
        zh: {
          displayName: '百事公司',
          sector: '必需消费品',
          industry: '食品与饮料制造（零食、饮料及便捷食品）',
          headquarters: '美国纽约州珀切斯',
          fiscalYearEnd: '12 月最后一个星期六',
          description:
            '百事公司是一家全球食品与饮料公司，其零食、饮料和便捷食品组合在全球 200 多个国家和地区销售，旗下品牌包括乐事（Lay’s）、桂格（Quaker）、百事可乐（Pepsi）、佳得乐（Gatorade）、多力多滋（Doritos）和 SodaStream。公司按北美食品与饮料业务，以及国际饮料特许经营（IB franchise）、拉丁美洲（LATAM）、欧洲中东非洲（EMEA）和亚太（APAC）等分部进行报告。',
        },
      },
    }
  );
})(window);
