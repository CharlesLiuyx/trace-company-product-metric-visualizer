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
      key: 'tencent',
      name: 'Tencent',
      legalName: 'Tencent Holdings Limited',
      ticker: '0700 / 80700',
      exchange: 'HKEX',
      marketCap: {
        valueUsd: 505899268327,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/quote/otc/tcehy/market-cap/',
      },
      sector: 'Communication Services',
      industry: 'Internet services, games, social networking, fintech, cloud, and digital content',
      founded: '1998',
      headquarters: 'Shenzhen, Guangdong, China',
      fiscalYearEnd: 'December 31',
      website: 'https://www.tencent.com/',
      description:
        'Tencent is a global internet and technology company whose communication, social, gaming, digital content, marketing, FinTech, cloud, and enterprise services connect users and support digital transformation.',
      sourceUrls: [
        'https://www.tencent.com/en-us/about.html',
        'https://www.tencent.com/en-us/investors.html',
        'https://static.www.tencent.com/uploads/2026/05/13/47382ae415a209fd161bc19a1f9b3704.pdf',
      ],
      i18n: {
        zh: {
          displayName: '腾讯',
        },
      },
    }
  );
})(window);
