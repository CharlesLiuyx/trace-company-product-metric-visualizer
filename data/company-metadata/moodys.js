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
      key: 'moodys',
      name: "Moody's",
      legalName: "Moody's Corporation",
      ticker: 'MCO',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 90000000000,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/mco/market-cap/',
      },
      sector: 'Financials',
      industry: 'Credit ratings, risk assessment, financial analytics, research, and data',
      founded: '1909',
      headquarters: 'New York, New York, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.moodys.com/',
      description:
        "Moody's is a global integrated risk assessment firm operating through Moody's Investors Service, which provides credit ratings and research, and Moody's Analytics, which provides financial intelligence, data, analytical tools, and decision solutions for risk management.",
      sourceUrls: [
        'https://www.moodys.com/web/en/us/about.html',
        'https://ir.moodys.com/',
      ],
      i18n: {
        zh: {
          displayName: '穆迪',
          sector: '金融',
          industry: '信用评级、风险评估、金融分析、研究与数据',
          headquarters: '美国纽约州纽约',
          fiscalYearEnd: '12 月 31 日',
          description:
            '穆迪是全球综合风险评估公司，通过穆迪投资者服务（提供信用评级与研究）和穆迪分析（提供金融情报、数据、分析工具与决策解决方案）开展业务。',
        },
      },
    }
  );
})(window);
