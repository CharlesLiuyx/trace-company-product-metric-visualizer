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
      key: 'teladoc',
      name: 'Teladoc Health',
      legalName: 'Teladoc Health, Inc.',
      aliases: ['Teladoc', 'TDOC'],
      ticker: 'TDOC',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 1640000000,
        asOf: '2026-07-08',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/tdoc/statistics/',
      },
      sector: 'Healthcare',
      industry: 'Health Information Services',
      founded: '2002',
      headquarters: 'New York, New York, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.teladochealth.com/',
      description:
        'Teladoc Health provides virtual care, chronic-condition management, specialty care and mental-health services through its Integrated Care and BetterHelp segments.',
      sourceUrls: [
        'https://ir.teladochealth.com/news-and-events/investor-news/press-release-details/2026/Teladoc-Health-Reports-Fourth-Quarter-and-Full-Year-2025-Results/default.aspx',
        'https://www.teladochealth.com/about',
        'https://stockanalysis.com/stocks/tdoc/statistics/',
      ],
      i18n: {
        zh: {
          displayName: 'Teladoc Health',
          sector: '医疗保健',
          industry: '健康信息服务',
          headquarters: '美国纽约州纽约市',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Teladoc Health 通过整合护理和 BetterHelp 两大业务，提供虚拟医疗、慢病管理、专科医疗及心理健康服务。',
        },
      },
    }
  );
})(window);
