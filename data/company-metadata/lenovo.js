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
      key: 'lenovo',
      name: 'Lenovo',
      legalName: 'Lenovo Group Limited',
      ticker: '992 / 80992 / LNVGY',
      exchange: 'HKEX / OTC ADR',
      marketCap: {
        valueUsd: 294982798202,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/quote/hkg/0992/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Personal computers, smartphones, servers, storage, software, solutions, and IT services',
      founded: '1984',
      headquarters: 'Hong Kong S.A.R. of China; key operations centers in Beijing, China and Morrisville, North Carolina, United States',
      fiscalYearEnd: 'March 31',
      website: 'https://www.lenovo.com/',
      description:
        'Lenovo is a global technology company with a full-stack AI portfolio spanning PCs, workstations, smartphones, tablets, accessories, servers, storage, edge, high performance computing, software-defined infrastructure, solutions, and services.',
      sourceUrls: [
        'https://www.lenovo.com/us/en/about/',
        'https://investor.lenovo.com/en/about/corpinfo.php',
        'https://investor.lenovo.com/en/ir/stockinfo.php',
        'https://investor.lenovo.com/en/financial/results.php',
        'https://investor.lenovo.com/en/financial/results/press_2526_q4.pdf',
      ],
      i18n: {
        zh: {
          displayName: '联想',
        },
      },
    }
  );
})(window);
