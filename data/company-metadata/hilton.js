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
      key: 'hilton',
      name: 'Hilton',
      legalName: 'Hilton Worldwide Holdings Inc.',
      ticker: 'HLT',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 79412900000,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/hlt/market-cap/',
      },
      sector: 'Consumer Discretionary',
      industry: 'Hotels, resorts, hospitality franchising, hotel management, owned and leased hotels, and loyalty programs',
      founded: '1919',
      headquarters: 'McLean, Virginia, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.hilton.com/',
      description:
        'Hilton is a global hospitality company with a portfolio of hotel brands spanning luxury, lifestyle, full service, focused service, all suites, vacation ownership, and loyalty, operating through franchised, managed, owned, and leased properties.',
      sourceUrls: [
        'https://www.hilton.com/en/corporate/',
        'https://ir.hilton.com/investor-resources/faqs',
        'https://ir.hilton.com/~/media/Files/H/Hilton-Worldwide-IR-V3/quarterly-results/2026/q1-2026-earnings-release.pdf',
      ],
      i18n: {
        zh: {
          displayName: '希尔顿',
          sector: '非必需消费品',
          industry: '酒店、度假村、酒店特许经营、酒店管理、自有和租赁酒店以及会员忠诚度计划',
          headquarters: '美国弗吉尼亚州麦克莱恩',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Hilton 是一家全球酒店集团，品牌组合覆盖豪华、生活方式、全服务、精选服务、全套房、度假所有权和会员忠诚度业务，并通过特许经营、管理、自有及租赁物业开展运营。',
        },
      },
    }
  );
})(window);
