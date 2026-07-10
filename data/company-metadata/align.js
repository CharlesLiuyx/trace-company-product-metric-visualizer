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
      key: 'align',
      name: 'Align Technology',
      legalName: 'Align Technology, Inc.',
      ticker: 'ALGN',
      exchange: 'NASDAQ Global Select Market',
      marketCap: {
        valueUsd: 12120000000,
        asOf: '2026-06-30',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/algn/market-cap/',
      },
      sector: 'Health Care',
      industry: 'Medical devices, digital orthodontics, intraoral scanning, and dental CAD/CAM software',
      founded: '1997',
      headquarters: 'Tempe, Arizona, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.aligntech.com/',
      description:
        'Align Technology designs and manufactures the Invisalign clear-aligner system, iTero intraoral scanners and services, and exocad CAD/CAM software for digital orthodontic and restorative dentistry workflows.',
      sourceUrls: [
        'https://investor.aligntech.com/company-information/investor-faqs/',
        'https://investor.aligntech.com/news-releases/news-release-details/align-technology-announces-fourth-quarter-and-fiscal-2025',
        'https://stockanalysis.com/stocks/algn/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: '爱齐科技',
          sector: '医疗保健',
          industry: '医疗器械、数字正畸、口内扫描与牙科 CAD/CAM 软件',
          headquarters: '美国亚利桑那州坦佩',
          fiscalYearEnd: '12 月 31 日',
          description:
            '爱齐科技设计和制造 Invisalign 隐形矫治系统、iTero 口内扫描仪及相关服务，以及用于数字正畸和修复牙科工作流程的 exocad CAD/CAM 软件。',
        },
      },
    }
  );
})(window);
