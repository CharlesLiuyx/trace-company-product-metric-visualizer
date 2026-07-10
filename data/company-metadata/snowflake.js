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
      key: 'snowflake',
      name: 'Snowflake',
      legalName: 'Snowflake Inc.',
      ticker: 'SNOW',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 92710000000,
        asOf: '2026-07-09',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/snow/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Cloud data platform, data warehousing, analytics, and AI infrastructure software',
      founded: '2012',
      headquarters: 'Menlo Park, California, United States',
      fiscalYearEnd: 'January 31',
      website: 'https://www.snowflake.com/',
      description:
        'Snowflake provides a cloud-based data and AI platform that lets organizations store, process, analyze, share, and build applications on governed data across major cloud providers.',
      sourceUrls: [
        'https://www.snowflake.com/en/company/overview/about-snowflake/',
        'https://www.snowflake.com/en/contact/',
        'https://www.sec.gov/Archives/edgar/data/1640147/000164014726000008/snow-20260131.htm',
        'https://www.snowflake.com/en/news/press-releases/snowflake-reports-financial-results-for-the-fourth-quarter-and-full-year-of-fiscal-2026/',
        'https://stockanalysis.com/stocks/snow/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'Snowflake',
          sector: '信息技术',
          industry: '云数据平台、数据仓库、分析与 AI 基础设施软件',
          headquarters: '美国加利福尼亚州门洛帕克',
          fiscalYearEnd: '1 月 31 日',
          description:
            'Snowflake 提供云端数据与 AI 平台，帮助组织在主要云服务商之间，以受治理的数据进行存储、处理、分析、共享并构建应用程序。',
        },
      },
    }
  );
})(window);
