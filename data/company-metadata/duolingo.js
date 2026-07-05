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
      key: 'duolingo',
      name: 'Duolingo',
      legalName: 'Duolingo, Inc.',
      ticker: 'DUOL',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 5660000000,
        asOf: '2026-06-26',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/duol/market-cap/',
      },
      sector: 'Consumer Discretionary',
      industry: 'Online learning, mobile education, language learning, assessments, subscriptions, advertising, and in-app purchases',
      founded: '2011',
      headquarters: 'Pittsburgh, Pennsylvania, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.duolingo.com/',
      description:
        'Duolingo operates a mobile-first learning platform spanning language learning, math, music, chess, and the Duolingo English Test, monetized primarily through subscriptions, advertising, and in-app purchases.',
      sourceUrls: [
        'https://www.duolingo.com/',
        'https://investors.duolingo.com/investor-relations',
        'https://investors.duolingo.com/news-releases/news-release-details/duolingo-reports-first-quarter-2026-results',
        'https://www.sec.gov/Archives/edgar/data/1562088/000162828026029790/q1fy26duolingo3-31x26share.htm',
        'https://stockanalysis.com/stocks/duol/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'Duolingo',
          sector: '非必需消费品',
          industry: '在线学习、移动教育、语言学习、测评、订阅、广告和应用内购买',
          headquarters: '美国宾夕法尼亚州匹兹堡',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Duolingo 运营以移动端为核心的学习平台，覆盖语言学习、数学、音乐、国际象棋和 Duolingo English Test，主要通过订阅、广告和应用内购买实现商业化。',
        },
      },
    }
  );
})(window);
