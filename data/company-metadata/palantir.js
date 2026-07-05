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
      key: 'palantir',
      name: 'Palantir',
      legalName: 'Palantir Technologies Inc.',
      aliases: ['Palantir Technologies'],
      ticker: 'PLTR',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 270730000000,
        asOf: '2026-06-26',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/pltr/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Data analytics, artificial intelligence software, data integration platforms, and government and commercial decision software',
      founded: '2003',
      headquarters: 'Aventura, Florida, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.palantir.com/',
      description:
        'Palantir builds software platforms for data integration, analytics, operational decision-making, and AI-driven workflows used by government agencies and commercial enterprises.',
      sourceUrls: [
        'https://www.palantir.com/',
        'https://investors.palantir.com/',
        'https://www.sec.gov/Archives/edgar/data/1321655/000132165526000011/pltr-20251231.htm',
        'https://stockanalysis.com/stocks/pltr/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'Palantir',
          sector: '信息技术',
          industry: '数据分析、人工智能软件、数据集成平台，以及政府和商业决策软件',
          headquarters: '美国佛罗里达州阿文图拉',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Palantir 构建数据集成、分析、运营决策和 AI 驱动工作流软件平台，服务政府机构和商业企业。',
        },
      },
    }
  );
})(window);
