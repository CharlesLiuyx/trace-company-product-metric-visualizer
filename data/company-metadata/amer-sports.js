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
      key: 'amer-sports',
      name: 'Amer Sports',
      legalName: 'Amer Sports, Inc.',
      aliases: ['Amer Sports', 'Amer Sports, Inc.'],
      ticker: 'AS',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 19800000000,
        asOf: '2026-07-09',
        source: 'Stock Analysis',
        sourceUrl: 'https://stockanalysis.com/stocks/as/statistics/',
      },
      sector: 'Consumer Discretionary',
      industry: 'Sporting goods, outdoor apparel, and equipment',
      founded: '1950',
      headquarters: 'Helsinki, Finland',
      fiscalYearEnd: 'December 31',
      website: 'https://www.amersports.com/',
      description:
        'Amer Sports is a global group of sports and outdoor brands including Arc’teryx, Salomon, Wilson, Atomic, and Peak Performance, selling apparel, footwear, equipment, protective gear, and accessories.',
      sourceUrls: [
        'https://www.amersports.com/about-us/',
        'https://www.amersports.com/about-us/history/',
        'https://investors.amersports.com/financial-news/news-details/2026/Amer-Sports-Reports-Fourth-Quarter-and-Fiscal-Year-2025-Financial-Results-and-Provides-2026-Outlook/default.aspx',
        'https://stockanalysis.com/stocks/as/statistics/',
      ],
      i18n: {
        zh: {
          displayName: '亚玛芬体育',
          sector: '非必需消费品',
          industry: '体育用品、户外服饰与装备',
          headquarters: '芬兰赫尔辛基',
          fiscalYearEnd: '12 月 31 日',
          description:
            '亚玛芬体育是全球体育和户外品牌集团，旗下包括始祖鸟、萨洛蒙、威尔胜、Atomic 和 Peak Performance，销售服饰、鞋类、装备、防护用品及配件。',
        },
      },
    }
  );
})(window);
