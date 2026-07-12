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
      key: 'on',
      name: 'On',
      legalName: 'On Holding AG',
      aliases: ['On', 'On Running', 'On Holding AG'],
      ticker: 'ONON',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 12170000000,
        asOf: '2026-07-09',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/onon/market-cap/',
      },
      sector: 'Consumer Discretionary',
      industry: 'Athletic footwear, apparel, accessories, and sporting goods',
      founded: '2010',
      headquarters: 'Zurich, Switzerland',
      fiscalYearEnd: 'December 31',
      website: 'https://www.on.com/',
      description:
        'On is a Swiss premium sportswear company that designs and sells performance footwear, apparel, and accessories for running, outdoor, training, all-day activity, and tennis.',
      sourceUrls: [
        'https://investors.on-running.com/news/news-details/2026/On-Reports-First-Quarter-2026-Results/default.aspx',
        'https://www.sec.gov/Archives/edgar/data/1858985/000185898526000008/onholdingag-20251231.htm',
        'https://stockanalysis.com/stocks/onon/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: '昂跑',
          sector: '非必需消费品',
          industry: '运动鞋类、服装、配饰与体育用品',
          headquarters: '瑞士苏黎世',
          fiscalYearEnd: '12 月 31 日',
          description:
            'On 是一家瑞士高端运动服饰公司，设计并销售用于跑步、户外、训练、日常活动和网球的性能鞋类、服装及配饰。',
        },
      },
    }
  );
})(window);
