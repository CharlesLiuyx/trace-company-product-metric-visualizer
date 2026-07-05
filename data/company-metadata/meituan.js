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
      key: 'meituan',
      name: 'Meituan',
      legalName: 'Meituan',
      aliases: ['Meituan Dianping', '美团'],
      ticker: '3690',
      exchange: 'HKEX',
      marketCap: {
        valueUsd: 95000000000,
        asOf: '2026-06-26',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/quote/hkg/3690/',
      },
      sector: 'Consumer Discretionary',
      industry: 'On-demand food delivery, local-services and in-store commerce, hotel and travel booking, community retail, and new initiatives',
      founded: '2010',
      headquarters: 'Beijing, China',
      fiscalYearEnd: 'December 31',
      website: 'https://www.meituan.com/',
      description:
        'Meituan is a Chinese technology platform for local consumer products and retail services, spanning on-demand food delivery, in-store dining, hotel and travel booking, and community retail, reported across a Core Local Commerce segment and a New Initiatives segment.',
      sourceUrls: [
        'https://about.meituan.com/en',
        'https://media-meituan.todayir.com/',
        'https://stockanalysis.com/quote/hkg/3690/',
      ],
      i18n: {
        zh: {
          displayName: '美团',
          sector: '非必需消费品',
          industry: '即时餐饮外卖、本地生活与到店消费、酒店与旅行预订、社区零售以及新业务',
          headquarters: '中国北京',
          fiscalYearEnd: '12 月 31 日',
          description:
            '美团是一家中国本地生活服务与零售科技平台，业务涵盖即时餐饮外卖、到店餐饮、酒店与旅行预订以及社区零售，按核心本地商业和新业务两大分部披露。',
        },
      },
    }
  );
})(window);
