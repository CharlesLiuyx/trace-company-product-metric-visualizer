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
      key: 'nvidia',
      name: 'NVIDIA',
      legalName: 'NVIDIA Corporation',
      ticker: 'NVDA',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 5098698000000,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/nvda/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Semiconductors',
      founded: '1993',
      headquarters: 'Santa Clara, California, United States',
      fiscalYearEnd: 'Last Sunday in January',
      website: 'https://www.nvidia.com/',
      description:
        'NVIDIA is an accelerated computing company whose chips, systems, software, and services support AI factories, graphics, data center, professional visualization, automotive, robotics, and digital-twin workloads.',
      sourceUrls: [
        'https://www.nvidia.com/en-us/about-nvidia/',
        'https://investor.nvidia.com/financial-info/annual-reports-and-proxies/default.aspx',
      ],
      i18n: {
        zh: {
          displayName: '英伟达',
        },
      },
    }
  );
})(window);
