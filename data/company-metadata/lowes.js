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
      key: 'lowes',
      name: "Lowe's",
      legalName: "Lowe's Companies, Inc.",
      ticker: 'LOW',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 118660000000,
        asOf: '2026-07-10',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/low/market-cap/',
      },
      sector: 'Consumer Discretionary',
      industry: 'Home Improvement Retail',
      founded: '1921',
      headquarters: 'Mooresville, North Carolina, United States',
      fiscalYearEnd: 'Friday nearest January 31',
      website: 'https://www.lowes.com/',
      description:
        "Lowe's is a U.S. home-improvement retailer serving DIY and professional customers through stores, branches, and digital channels.",
      sourceUrls: [
        'https://corporate.lowes.com/sites/lowes-corp/files/2025-04/Lowes_2024_Annual_Report_Website.pdf',
        'https://corporate.lowes.com/newsroom/press-releases/lowes-reports-first-quarter-2026-sales-and-earnings-results-05-20-26',
        'https://stockanalysis.com/stocks/low/market-cap/',
      ],
      i18n: {
        zh: {
          name: '劳氏',
          displayName: '劳氏',
          sector: '可选消费',
          industry: '家居建材零售',
          headquarters: '美国北卡罗来纳州穆尔斯维尔',
          fiscalYearEnd: '最接近 1 月 31 日的星期五',
          description: '劳氏是一家美国家居建材零售商，通过门店、专业客户网点与数字渠道服务 DIY 和专业客户。',
        },
      },
    }
  );
})(window);
