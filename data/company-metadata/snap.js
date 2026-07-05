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
      key: 'snap',
      name: 'Snap',
      legalName: 'Snap Inc.',
      ticker: 'SNAP',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 7310000000,
        asOf: '2026-06-26',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/snap/market-cap/',
      },
      sector: 'Communication Services',
      industry: 'Camera and social media platforms, digital advertising, augmented reality, AI lenses, and consumer hardware',
      founded: '2011',
      headquarters: 'Santa Monica, California, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.snap.com/',
      description:
        'Snap is a technology company built around Snapchat, a visual messaging service, and adjacent products including Spectacles and Lens Studio for augmented reality and AI-powered creative experiences.',
      sourceUrls: [
        'https://www.snap.com/',
        'https://investor.snap.com/',
        'https://investor.snap.com/financials/Annual-Report/default.aspx',
        'https://investor.snap.com/news/news-details/2026/Snap-Inc--Announces-First-Quarter-2026-Financial-Results/default.aspx',
        'https://stockanalysis.com/stocks/snap/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'Snap',
          sector: '通信服务',
          industry: '相机与社交媒体平台、数字广告、增强现实、AI 镜头和消费硬件',
          headquarters: '美国加利福尼亚州圣莫尼卡',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Snap 是一家以 Snapchat 视觉消息服务为核心的科技公司，并提供 Spectacles、Lens Studio 等面向增强现实和 AI 创意体验的相关产品。',
        },
      },
    }
  );
})(window);
