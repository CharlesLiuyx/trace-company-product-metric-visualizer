/* Company-profile SSOT record. Profile fields only — period financials stay
 * in data/income-statements/tempus-ai.js. Format: data/schema.md. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push(
    {
      key: 'tempus-ai',
      name: 'Tempus AI',
      legalName: 'Tempus AI, Inc.',
      aliases: ['Tempus'],
      ticker: 'TEM',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 10980000000,
        asOf: '2026-07-07',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/tem/statistics/',
      },
      sector: 'Health Care',
      industry: 'AI-enabled precision medicine, clinical diagnostics, genomics data, and healthcare software',
      founded: '2015',
      headquarters: 'Chicago, Illinois, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.tempus.com/',
      description:
        'Tempus AI develops technology for precision medicine, combining clinical and molecular data, laboratory diagnostics, AI-enabled analytics, and software for healthcare providers and life-sciences organizations.',
      sourceUrls: [
        'https://investors.tempus.com/resources/investor-faqs',
        'https://investors.tempus.com/news-releases/news-release-details/tempus-reports-first-quarter-2026-results',
        'https://investors.tempus.com/news-releases/news-release-details/tempus-reports-fourth-quarter-and-full-year-2025-results',
        'https://stockanalysis.com/stocks/tem/statistics/',
      ],
      i18n: {
        zh: {
          displayName: 'Tempus AI',
          sector: '医疗保健',
          industry: 'AI 驱动的精准医疗、临床诊断、基因组数据与医疗软件',
          headquarters: '美国伊利诺伊州芝加哥',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Tempus AI 开发精准医疗技术，结合临床和分子数据、实验室诊断、AI 驱动的分析能力，以及服务医疗提供者和生命科学机构的软件。',
        },
      },
    }
  );
})(window);
