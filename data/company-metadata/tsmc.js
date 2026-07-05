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
      key: 'tsmc',
      name: 'TSMC',
      legalName: 'Taiwan Semiconductor Manufacturing Company Limited',
      ticker: '2330 / TSM',
      exchange: 'TWSE / NYSE',
      marketCap: {
        valueUsd: 1977690936537,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/tsm/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Semiconductor foundry and integrated circuit manufacturing services',
      founded: '1987',
      headquarters: 'Hsinchu, Taiwan',
      fiscalYearEnd: 'December 31',
      website: 'https://www.tsmc.com/',
      description:
        'TSMC is a dedicated semiconductor foundry that manufactures integrated circuits for customers across high performance computing, smartphones, Internet of Things, automotive, and digital consumer electronics end markets.',
      sourceUrls: [
        'https://www.tsmc.com/english/aboutTSMC/company_profile',
        'https://investor.tsmc.com/english',
        'https://investor.tsmc.com/english/quarterly-results',
      ],
      i18n: {
        zh: {
          displayName: '台积电',
        },
      },
    }
  );
})(window);
