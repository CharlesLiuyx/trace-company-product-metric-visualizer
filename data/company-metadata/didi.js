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
      key: 'didi',
      name: 'DiDi',
      legalName: 'DiDi Global Inc.',
      aliases: ['Didi', 'Didi Chuxing', 'DiDi Global', '滴滴出行', '滴滴'],
      ticker: 'DIDIY',
      exchange: 'OTC Markets',
      marketCap: {
        valueUsd: 15330000000,
        asOf: '2026-07-04',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/quote/otc/DIDIY/market-cap/',
      },
      sector: 'Industrials',
      industry: 'Ride-hailing, shared mobility, and transportation technology',
      founded: '2012',
      headquarters: 'Beijing, China',
      fiscalYearEnd: 'December 31',
      website: 'https://www.didiglobal.com/',
      description:
        'DiDi Global is a Chinese mobility technology platform providing app-based ride-hailing, taxi, chauffeur, and other transportation services in China and overseas, reported across China Mobility, International, and Other Initiatives segments.',
      sourceUrls: [
        'https://www.didiglobal.com/',
        'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=1764757&type=&dateb=&owner=include&count=40',
        'https://stockanalysis.com/quote/otc/DIDIY/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: '滴滴',
          sector: '工业',
          industry: '网约车、共享出行和交通出行技术',
          headquarters: '中国北京',
          fiscalYearEnd: '12 月 31 日',
          description:
            'DiDi Global（滴滴出行）是一家中国出行科技平台，提供基于 App 的网约车、出租车、代驾及其他交通出行服务，业务覆盖中国及海外市场，按中国出行、国际业务和其他新业务三大分部披露。',
        },
      },
    }
  );
})(window);
