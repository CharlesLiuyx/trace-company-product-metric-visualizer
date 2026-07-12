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
      key: 'dlocal',
      name: 'dLocal',
      legalName: 'DLocal Limited',
      aliases: ['DLocal', 'dLocal Limited'],
      ticker: 'DLO',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 4370000000,
        asOf: '2026-07-02',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/dlo/market-cap/',
      },
      sector: 'Financials',
      industry: 'Cross-border payment processing and financial infrastructure',
      founded: '2016',
      headquarters: 'Montevideo, Uruguay',
      fiscalYearEnd: 'December 31',
      website: 'https://www.dlocal.com/',
      description:
        'dLocal is a cross-border financial infrastructure platform that connects global merchants to local payment methods in emerging markets across Africa, Asia, and Latin America.',
      sourceUrls: [
        'https://www.dlocal.com/company/about-us/',
        'https://investor.dlocal.com/about-us/',
        'https://dlocal.gcs-web.com/static-files/1388a5c4-dc41-499d-8edb-04ab3c1781c8',
        'https://stockanalysis.com/stocks/dlo/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'dLocal',
          sector: '金融',
          industry: '跨境支付处理与金融基础设施',
          headquarters: '乌拉圭蒙得维的亚',
          fiscalYearEnd: '12 月 31 日',
          description:
            'dLocal 是一家跨境金融基础设施平台，为全球商户连接非洲、亚洲和拉丁美洲新兴市场的本地支付方式。',
        },
      },
    }
  );
})(window);
