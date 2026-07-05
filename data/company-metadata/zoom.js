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
      key: 'zoom',
      name: 'Zoom',
      legalName: 'Zoom Communications, Inc.',
      aliases: ['Zoom Video Communications', 'Zoom Video Communications, Inc.'],
      ticker: 'ZM',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 25360200000,
        asOf: '2026-06-26',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/zm/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'AI-first work platform, video communications, team chat, phone, contact center, webinars, and collaboration software',
      founded: '2011',
      headquarters: 'San Jose, California, United States',
      fiscalYearEnd: 'January 31',
      website: 'https://www.zoom.com/',
      description:
        'Zoom provides an AI-first work platform spanning video meetings, Zoom Phone, Team Chat, Zoom Rooms, webinars, contact center, workflow automation, and related collaboration products for individuals, teams, and enterprises.',
      sourceUrls: [
        'https://www.zoom.com/en/about/',
        'https://investors.zoom.us/',
        'https://investors.zoom.us/news-releases/news-release-details/zoom-communications-reports-financial-results-first-quarter-0',
        'https://investors.zoom.us/sec-filings/sec-filing/10-q/0001585521-26-000071',
      ],
      i18n: {
        zh: {
          displayName: 'Zoom',
          sector: '信息技术',
          industry: 'AI 优先的工作平台、视频通信、团队聊天、电话、联络中心、网络研讨会和协作软件',
          headquarters: '美国加利福尼亚州圣何塞',
          fiscalYearEnd: '1 月 31 日',
          description:
            'Zoom 提供 AI 优先的工作平台，覆盖视频会议、Zoom Phone、Team Chat、Zoom Rooms、网络研讨会、联络中心、工作流自动化，以及面向个人、团队和企业的相关协作产品。',
        },
      },
    }
  );
})(window);
