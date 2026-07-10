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
      key: 'amgen',
      name: 'Amgen',
      legalName: 'Amgen Inc.',
      ticker: 'AMGN',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 198670000000,
        asOf: '2026-07-07',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/amgn/market-cap/',
      },
      sector: 'Health Care',
      industry: 'Biotechnology',
      founded: '1980',
      headquarters: 'Thousand Oaks, California, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.amgen.com/',
      description:
        'Amgen discovers, develops, manufactures, and delivers innovative medicines, using biology and technology to address serious diseases including cardiovascular disease, obesity-related conditions, rare diseases, inflammatory conditions, and cancer.',
      sourceUrls: [
        'https://www.amgen.com/about',
        'https://www.amgen.com/about/amgen-history',
        'https://investors.amgen.com/',
        'https://investors.amgen.com/news-releases/news-release-details/amgen-reports-fourth-quarter-and-full-year-2025-financial/',
        'https://stockanalysis.com/stocks/amgn/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: '安进',
          sector: '医疗保健',
          industry: '生物技术',
          headquarters: '美国加利福尼亚州千橡市',
          fiscalYearEnd: '12 月 31 日',
          description:
            '安进发现、开发、生产并提供创新药物，运用生物学与技术应对心血管疾病、肥胖及相关病症、罕见病、炎症性疾病和癌症等重大疾病。',
        },
      },
    }
  );
})(window);
