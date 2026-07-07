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
      key: 'lyft',
      name: 'Lyft',
      legalName: 'Lyft, Inc.',
      aliases: ['lyft'],
      ticker: 'LYFT',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 5840000000,
        asOf: '2026-07-06',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/lyft/market-cap/',
      },
      sector: 'Industrials',
      industry: 'Ride-hailing and multimodal transportation platform',
      founded: '2012',
      headquarters: 'San Francisco, California, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.lyft.com/',
      description:
        'Lyft operates a multimodal transportation marketplace connecting riders, drivers, bikes, scooters, rentals, and enterprise mobility services across North America and selected international markets.',
      sourceUrls: [
        'https://investor.lyft.com/',
        'https://investor.lyft.com/financials/sec-filings/content/0001628280-26-006960/lyft-20251231.htm',
        'https://stockanalysis.com/stocks/lyft/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'Lyft',
          sector: '工业',
          industry: '网约车与多模式出行平台',
          headquarters: '美国加利福尼亚州旧金山',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Lyft 运营多模式出行市场，连接乘客、司机、自行车、滑板车、租赁和企业出行服务，业务覆盖北美及部分国际市场。',
        },
      },
    }
  );
})(window);
