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
      key: 'match-group',
      name: 'Match Group',
      legalName: 'Match Group, Inc.',
      aliases: ['Match'],
      ticker: 'MTCH',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 8950000000,
        asOf: '2026-07-08',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/mtch/market-cap/',
      },
      sector: 'Communication Services',
      industry: 'Online dating and social discovery services',
      founded: '2009',
      headquarters: 'Dallas, Texas, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://mtch.com/',
      description:
        'Match Group operates a global portfolio of online dating and social discovery brands, including Tinder, Hinge, Match, Meetic, OkCupid, Plenty of Fish, Pairs, and Azar.',
      sourceUrls: [
        'https://mtch.com/ourcompany/',
        'https://ir.mtch.com/investor-relations/news-events/news-events/news-details/2026/Match-Group-Announces-Fourth-Quarter-and-Full-Year-Results/',
        'https://www.sec.gov/Archives/edgar/data/891103/0000891103-26-000025-index.htm',
      ],
      i18n: {
        zh: {
          displayName: 'Match Group',
          sector: '通信服务',
          industry: '在线约会与社交探索服务',
          headquarters: '美国得克萨斯州达拉斯',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Match Group 运营全球在线约会与社交探索品牌组合，旗下包括 Tinder、Hinge、Match、Meetic、OkCupid、Plenty of Fish、Pairs 和 Azar 等品牌。',
        },
      },
    }
  );
})(window);
