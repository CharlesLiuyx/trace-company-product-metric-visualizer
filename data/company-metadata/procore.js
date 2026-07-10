/* Company-profile SSOT. Period financials stay in data/income-statements/. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'procore',
    name: 'Procore',
    legalName: 'Procore Technologies, Inc.',
    ticker: 'PCOR',
    exchange: 'NYSE',
    marketCap: {
      valueUsd: 6620000000,
      asOf: '2026-07-08',
      source: 'StockAnalysis',
      sourceUrl: 'https://stockanalysis.com/stocks/pcor/',
    },
    sector: 'Information Technology',
    industry: 'Construction software',
    founded: '2002',
    headquarters: 'Carpinteria, California, United States',
    fiscalYearEnd: 'December 31',
    website: 'https://www.procore.com/',
    description:
      'Procore provides a cloud-based construction management platform that connects project stakeholders across the construction lifecycle.',
    sourceUrls: [
      'https://www.procore.com/about',
      'https://www.procore.com/en/company',
      'https://investors.procore.com/financials/quarterly-results/default.aspx',
      'https://www.sec.gov/Archives/edgar/data/1611052/000162828026011055/pcor-20251231.htm',
    ],
    i18n: {
      zh: {
        displayName: 'Procore',
        sector: '信息技术',
        industry: '建筑软件',
        headquarters: '美国加利福尼亚州卡宾特里亚',
        fiscalYearEnd: '12 月 31 日',
        description: 'Procore 提供云端建筑管理平台，连接施工生命周期中的各类项目参与方。',
      },
    },
  });
})(window);
