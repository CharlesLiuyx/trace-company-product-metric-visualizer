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
      key: 'reddit',
      name: 'Reddit',
      legalName: 'Reddit, Inc.',
      ticker: 'RDDT',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 33681381638,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/rddt/market-cap/',
      },
      sector: 'Communication Services',
      industry: 'Social media, online communities, and digital advertising',
      founded: '2005',
      headquarters: 'San Francisco, California, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.reddit.com/',
      description:
        'Reddit is a community platform organized around user-created communities where people post, vote, comment, and discover discussions around their interests; the company monetizes primarily through advertising and other products such as data licensing.',
      sourceUrls: [
        'https://redditinc.com/',
        'https://investor.redditinc.com/overview/default.aspx',
        'https://investor.redditinc.com/financials/sec-filings/default.aspx',
      ],
      i18n: {
        zh: {
          displayName: 'Reddit',
          sector: '通信服务',
          industry: '社交媒体、在线社区与数字广告',
          headquarters: '美国加利福尼亚州旧金山',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Reddit 是围绕用户自建社区组织的社区平台，用户在其中发帖、投票、评论并发现感兴趣的讨论；公司主要通过广告以及数据授权等其他产品变现。',
        },
      },
    }
  );
})(window);
