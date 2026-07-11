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
      key: 'birkenstock',
      name: 'Birkenstock',
      legalName: 'Birkenstock Holding plc',
      aliases: ['BIRKENSTOCK', 'Birkenstock Group'],
      ticker: 'BIRK',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 8460000000,
        asOf: '2026-07-02',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/birk/market-cap/',
      },
      sector: 'Consumer Discretionary',
      industry: 'Footwear & Accessories',
      founded: '1774',
      headquarters: 'London, United Kingdom (holding company); Linz am Rhein, Germany (group headquarters)',
      fiscalYearEnd: 'September 30',
      website: 'https://www.birkenstock-holding.com/',
      description:
        'Birkenstock is a global footwear brand built around its anatomically shaped footbed, selling sandals, closed-toe footwear, sleep systems, and natural cosmetics through wholesale partners, e-commerce, and owned retail stores.',
      sourceUrls: [
        'https://www.birkenstock-holding.com/news/birkenstock-reports-fiscal-first-quarter-2026-results-strong-holiday-demand-drove-revenue-growth-of-18percent/93a5e21c-0bc5-47c3-8a31-cea34890ef25',
        'https://www.birkenstock-group.com/de/en/about-us/profile/',
        'https://www.birkenstock-group.com/de/en/about-us/history/',
        'https://stockanalysis.com/stocks/birk/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: '勃肯',
          sector: '非必需消费品',
          industry: '鞋履与配饰',
          headquarters: '英国伦敦（控股公司）；德国林茨（集团总部）',
          fiscalYearEnd: '9 月 30 日',
          description:
            '勃肯是一家以人体工学足床为核心的全球鞋履品牌，通过批发合作伙伴、电商和自营零售门店销售凉鞋、包头鞋、睡眠系统及天然护理产品。',
        },
      },
    }
  );
})(window);
