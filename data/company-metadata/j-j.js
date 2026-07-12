/* Company-profile SSOT record. */
(function (global) {
  'use strict';
  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || { schemaVersion: 1, companies: [] });
  metadata.companies.push({
    key: 'j-j',
    name: 'Johnson & Johnson',
    legalName: 'Johnson & Johnson',
    aliases: ['J&J'],
    ticker: 'JNJ',
    exchange: 'NYSE',
    marketCap: {
      valueUsd: 618170000000,
      asOf: '2026-07-10',
      source: 'StockAnalysis',
      sourceUrl: 'https://stockanalysis.com/stocks/jnj/market-cap/',
    },
    sector: 'Health Care',
    industry: 'Pharmaceuticals & Medical Devices',
    founded: '1886',
    headquarters: 'New Brunswick, New Jersey, United States',
    fiscalYearEnd: 'December 31',
    website: 'https://www.jnj.com/',
    description: 'Johnson & Johnson is a focused healthcare company with Innovative Medicine and MedTech businesses that research, develop, manufacture, and market medicines and medical technologies.',
    sourceUrls: [
      'https://www.jnj.com/our-company',
      'https://www.jnj.com/our-heritage/our-beginning',
      'https://investor.jnj.com/financials/quarterly-results/',
      'https://www.investor.jnj.com/financials/sec-filings/sec-filings-details/default.aspx?FilingId=19136833',
      'https://stockanalysis.com/stocks/jnj/market-cap/',
    ],
    i18n: {
      zh: {
        displayName: '强生',
        sector: '医疗保健',
        industry: '制药与医疗器械',
        headquarters: '美国新泽西州新布朗斯维克',
        fiscalYearEnd: '12 月 31 日',
        description: '强生是一家聚焦医疗健康的公司，旗下创新制药和医疗科技业务从事药物与医疗技术的研发、生产和商业化。',
      },
    },
  });
})(window);
