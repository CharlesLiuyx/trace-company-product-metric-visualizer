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
      key: 'qualcomm',
      name: 'Qualcomm',
      legalName: 'Qualcomm Incorporated',
      ticker: 'QCOM',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 238319900000,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/qcom/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Semiconductors, wireless connectivity, edge AI computing, automotive platforms, IoT, and technology licensing',
      founded: '1985',
      headquarters: 'San Diego, California, United States',
      fiscalYearEnd: 'Last Sunday in September',
      website: 'https://www.qualcomm.com/',
      description:
        'Qualcomm develops wireless, high-performance, low-power computing, AI, RF, connectivity, automotive, IoT, and licensing technologies through QCT semiconductor products and QTL intellectual-property licensing.',
      sourceUrls: [
        'https://www.qualcomm.com/company',
        'https://www.qualcomm.com/our-businesses',
        'https://investor.qualcomm.com/overview/default.aspx',
        'https://investor.qualcomm.com/sec-filings/default.aspx',
      ],
      i18n: {
        zh: {
          displayName: '高通',
        },
      },
    }
  );
})(window);
