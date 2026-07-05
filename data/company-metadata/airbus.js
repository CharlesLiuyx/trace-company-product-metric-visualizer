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
      key: 'airbus',
      name: 'Airbus',
      legalName: 'Airbus SE',
      ticker: 'AIR',
      exchange: 'Euronext Paris',
      marketCap: {
        valueUsd: 170000000000,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/quote/epa/AIR/market-cap/',
      },
      sector: 'Industrials',
      industry: 'Aerospace and defense — commercial aircraft, helicopters, defense, and space systems',
      founded: '1970',
      headquarters: 'Leiden, Netherlands (operational headquarters in Toulouse, France)',
      fiscalYearEnd: 'December 31',
      website: 'https://www.airbus.com/',
      description:
        'Airbus is a European aerospace corporation that designs, manufactures, and sells commercial aircraft, helicopters, and defense and space systems. Its business is organized into three segments — Airbus (commercial aircraft), Airbus Helicopters, and Airbus Defence and Space — serving airlines, operators, governments, and institutions worldwide.',
      sourceUrls: [
        'https://www.airbus.com/en/who-we-are',
        'https://www.airbus.com/en/investors',
        'https://www.airbus.com/en/investors/financial-results-annual-reports',
        'https://stockanalysis.com/quote/epa/AIR/',
      ],
      i18n: {
        zh: {
          displayName: '空中客车',
          sector: '工业',
          industry: '航空航天与国防——商用飞机、直升机、防务与航天系统',
          headquarters: '荷兰莱顿（运营总部位于法国图卢兹）',
          fiscalYearEnd: '12 月 31 日',
          description:
            '空中客车是一家欧洲航空航天公司，设计、制造并销售商用飞机、直升机以及防务与航天系统。其业务分为三大板块——空中客车（商用飞机）、空客直升机、空客防务与航天，面向全球航空公司、运营商、政府和机构。',
        },
      },
    }
  );
})(window);
