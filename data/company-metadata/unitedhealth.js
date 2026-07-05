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
      key: 'unitedhealth',
      name: 'UnitedHealth Group',
      legalName: 'UnitedHealth Group Incorporated',
      aliases: ['UnitedHealth', 'UnitedHealthcare', 'UNH'],
      ticker: 'UNH',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 285000000000,
        asOf: '2026-06-30',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/unh/market-cap/',
      },
      sector: 'Health Care',
      industry: 'Health insurance, managed care, pharmacy benefits, health services, and data analytics',
      founded: '1977',
      headquarters: 'Minnetonka, Minnesota, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.unitedhealthgroup.com/',
      description:
        'UnitedHealth Group is a diversified health care company operating through UnitedHealthcare, which provides health benefits and insurance coverage, and Optum, which delivers health services across care delivery (Optum Health), pharmacy services (Optum Rx), and data and analytics (Optum Insight).',
      sourceUrls: [
        'https://www.unitedhealthgroup.com/about.html',
        'https://www.unitedhealthgroup.com/investors.html',
      ],
      i18n: {
        zh: {
          displayName: '联合健康集团',
          sector: '医疗保健',
          industry: '健康保险、管理式医疗、药品福利管理、健康服务与数据分析',
          headquarters: '美国明尼苏达州明尼通卡',
          fiscalYearEnd: '12 月 31 日',
          description:
            '联合健康集团是一家多元化医疗保健公司，通过 UnitedHealthcare（提供健康福利与保险保障）和 Optum（涵盖医疗服务 Optum Health、药房服务 Optum Rx 以及数据与分析 Optum Insight）开展业务。',
        },
      },
    }
  );
})(window);
