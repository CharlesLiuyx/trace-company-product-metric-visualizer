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
      key: 'pinterest',
      name: 'Pinterest',
      legalName: 'Pinterest, Inc.',
      aliases: ['Pinterest Inc.'],
      ticker: 'PINS',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 11660000000,
        asOf: '2026-06-26',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/pins/market-cap/',
      },
      sector: 'Communication Services',
      industry: 'Visual discovery, social media, digital advertising, shopping, and AI-powered search',
      founded: '2008',
      headquarters: 'San Francisco, California, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.pinterest.com/',
      description:
        'Pinterest is a visual search and discovery platform where people find inspiration, curate ideas, and shop products; the company monetizes primarily through digital advertising on its consumer and business platforms.',
      sourceUrls: [
        'https://about.pinterest.com/',
        'https://investor.pinterestinc.com/overview/default.aspx',
        'https://investor.pinterestinc.com/resources/default.aspx',
        'https://investor.pinterestinc.com/financials/quarterly-results/default.aspx',
        'https://s204.q4cdn.com/369458543/files/doc_earnings/2026/q1/earnings-result/Q126-PressRelease.pdf',
        'https://www.sec.gov/Archives/edgar/data/1506293/000119312519083544/d674330ds1.htm',
        'https://stockanalysis.com/stocks/pins/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'Pinterest',
          sector: '通信服务',
          industry: '视觉发现、社交媒体、数字广告、购物和 AI 驱动搜索',
          headquarters: '美国加利福尼亚州旧金山',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Pinterest 是一个视觉搜索与发现平台，用户可在其中寻找灵感、整理想法并购物；公司主要通过面向消费者和商家的平台上的数字广告实现商业化。',
        },
      },
    }
  );
})(window);
