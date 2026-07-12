/* Company-profile SSOT record. Profile fields only — period financials stay
 * in data/income-statements/. Format: data/schema.md. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'vail-resorts',
    name: 'Vail Resorts',
    legalName: 'Vail Resorts, Inc.',
    aliases: ['Vail Resorts Inc.'],
    ticker: 'MTN',
    exchange: 'NYSE',
    marketCap: {
      valueUsd: 5350000000,
      asOf: '2026-07-10',
      source: 'StockAnalysis',
      sourceUrl: 'https://stockanalysis.com/stocks/mtn/market-cap/',
    },
    sector: 'Consumer Discretionary',
    industry: 'Mountain resorts, ski areas, luxury lodging, resort real estate, and season-pass products',
    founded: '1997',
    headquarters: 'Broomfield, Colorado, United States',
    fiscalYearEnd: 'July 31',
    website: 'https://www.vailresorts.com/',
    description:
      'Vail Resorts is a global mountain-resort operator that runs destination mountain resorts and regional ski areas, alongside luxury lodging, ancillary guest services, and resort real-estate businesses; its Epic Pass provides multi-resort access.',
    sourceUrls: [
      'https://investors.vailresorts.com/investor-faqs',
      'https://www.sec.gov/Archives/edgar/data/812011/000081201125000104/mtn-20250731.htm',
      'https://www.vailresorts.com/about-us/',
      'https://stockanalysis.com/stocks/mtn/market-cap/',
    ],
    i18n: {
      zh: {
        displayName: '韦尔度假村',
        sector: '非必需消费品',
        industry: '山地度假村、滑雪场、豪华住宿、度假区房地产和季票产品',
        headquarters: '美国科罗拉多州布鲁姆菲尔德',
        fiscalYearEnd: '7 月 31 日',
        description:
          'Vail Resorts 是一家全球山地度假村运营商，经营目的地山地度假村和区域性滑雪场，并开展豪华住宿、游客配套服务和度假区房地产业务；其 Epic Pass 提供多度假村通行服务。',
      },
    },
  });
})(window);
