/* Company-profile SSOT record. Profile fields only — period financials stay
 * in data/income-statements/hims-hers.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push(
    {
      key: 'hims-hers',
      name: 'Hims & Hers',
      legalName: 'Hims & Hers Health, Inc.',
      aliases: ['Hims & Hers Health'],
      ticker: 'HIMS',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 8210000000,
        asOf: '2026-07-09',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/hims/market-cap/',
      },
      sector: 'Health Care',
      industry: 'Telehealth and digital health',
      founded: '2017',
      headquarters: 'San Francisco, California, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.hims.com/',
      description:
        'Hims & Hers is a consumer-focused digital health platform that connects people with licensed healthcare providers and, when prescribed, personalized treatment plans across multiple health and wellness categories.',
      sourceUrls: [
        'https://www.hims.com/about/the-company',
        'https://investors.hims.com/news/news-details/2026/Hims--Hers-Health-Inc--Reports-Fourth-Quarter-and-Full-Year-2025-Financial-Results/default.aspx',
        'https://stockanalysis.com/stocks/hims/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'Hims & Hers',
          sector: '医疗保健',
          industry: '远程医疗与数字健康',
          headquarters: '美国加利福尼亚州旧金山',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Hims & Hers 是一家面向消费者的数字健康平台，将用户连接至持证医疗服务提供者，并在获得处方后提供覆盖多个健康与保健领域的个性化治疗方案。',
        },
      },
    }
  );
})(window);
