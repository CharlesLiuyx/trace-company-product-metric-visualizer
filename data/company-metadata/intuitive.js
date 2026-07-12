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
      key: 'intuitive',
      name: 'Intuitive',
      legalName: 'Intuitive Surgical, Inc.',
      aliases: ['Intuitive Surgical'],
      ticker: 'ISRG',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 144070000000,
        asOf: '2026-07-10',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/isrg/market-cap/',
      },
      sector: 'Health Care',
      industry: 'Robotic-assisted surgical systems, medical devices, and minimally invasive care',
      founded: '1995',
      headquarters: 'Sunnyvale, California, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.intuitive.com/',
      description:
        'Intuitive develops robotic-assisted technologies for minimally invasive care, including da Vinci surgical systems, the Ion endoluminal system, instruments and accessories, and related services.',
      sourceUrls: [
        'https://isrg.intuitive.com/news-releases/news-release-details/intuitive-announces-fourth-quarter-earnings-5/',
        'https://careers.intuitive.com/en/employee-stories/career-growth-advice/four-things-to-know-about-intuitive-before-you-start-working-here',
        'https://www.sec.gov/Archives/edgar/data/1035267/000103526726000010/isrg-20251231.htm',
        'https://stockanalysis.com/stocks/isrg/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: '直觉外科',
          sector: '医疗保健',
          industry: '机器人辅助手术系统、医疗器械与微创诊疗',
          headquarters: '美国加利福尼亚州森尼韦尔',
          fiscalYearEnd: '12 月 31 日',
          description:
            '直觉外科开发用于微创诊疗的机器人辅助技术，产品包括达芬奇手术系统、Ion 腔内系统、器械与配件以及相关服务。',
        },
      },
    }
  );
})(window);
