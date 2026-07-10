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
      key: 'live-nation',
      name: 'Live Nation',
      legalName: 'Live Nation Entertainment, Inc.',
      aliases: ['Live Nation Entertainment'],
      ticker: 'LYV',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 43420000000,
        asOf: '2026-07-02',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/lyv/market-cap/',
      },
      sector: 'Communication Services',
      industry: 'Live entertainment, ticketing, and sponsorship',
      founded: '2005',
      headquarters: 'Beverly Hills, California, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.livenationentertainment.com/',
      description:
        'Live Nation Entertainment is a global live-entertainment company spanning concert promotion and venues, Ticketmaster ticketing services, and sponsorship and advertising.',
      sourceUrls: [
        'https://investors.livenationentertainment.com/',
        'https://investors.livenationentertainment.com/faq',
        'https://investors.livenationentertainment.com/sec-filings/annual-reports/content/0001335258-26-000009/lyv-20251231.htm',
        'https://stockanalysis.com/stocks/lyv/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'Live Nation',
          sector: '通信服务',
          industry: '现场娱乐、票务与赞助',
          headquarters: '美国加利福尼亚州比佛利山',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Live Nation Entertainment 是全球现场娱乐公司，业务涵盖演唱会推广与场馆、Ticketmaster 票务服务，以及赞助与广告。',
        },
      },
    }
  );
})(window);
