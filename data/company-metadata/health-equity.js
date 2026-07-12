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
      key: 'health-equity',
      name: 'HealthEquity',
      legalName: 'HealthEquity, Inc.',
      aliases: ['Health Equity', 'HQY'],
      ticker: 'HQY',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 7730000000,
        asOf: '2026-07-09',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/hqy/statistics/',
      },
      sector: 'Healthcare',
      industry: 'Health Information Services',
      founded: '2002',
      headquarters: 'Draper, Utah, United States',
      fiscalYearEnd: 'January 31',
      website: 'https://www.healthequity.com/',
      description:
        'HealthEquity provides technology-enabled health savings accounts and consumer-directed benefits administration for consumers, employers, health plans, and benefits partners in the United States.',
      sourceUrls: [
        'https://www.healthequity.com/about',
        'https://ir.healthequity.com/investor-faqs',
        'https://ir.healthequity.com/news-releases/news-release-details/healthequity-reports-first-quarter-ended-april-30-2026-financial',
        'https://www.sec.gov/Archives/edgar/data/1428336/000142833626000028/hqy-20260430.htm',
      ],
      i18n: {
        zh: {
          displayName: 'HealthEquity',
          sector: '医疗保健',
          industry: '健康信息服务',
          headquarters: '美国犹他州德雷珀',
          fiscalYearEnd: '1 月 31 日',
          description:
            'HealthEquity 为美国消费者、雇主、健康计划和福利合作伙伴提供技术驱动的健康储蓄账户及消费者导向福利管理服务。',
        },
      },
    }
  );
})(window);
