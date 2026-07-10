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
      key: 'toast',
      name: 'Toast',
      legalName: 'Toast, Inc.',
      ticker: 'TOST',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 16700000000,
        asOf: '2026-07-09',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/tost/statistics/',
      },
      sector: 'Information Technology',
      industry: 'Restaurant and retail commerce software, payments, and financial technology',
      founded: '2011',
      headquarters: 'Boston, Massachusetts, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://pos.toasttab.com/',
      description:
        'Toast provides a global technology platform for restaurant and retail businesses, combining point-of-sale and operating software, agentic AI, payments, financial technology solutions, hardware, and a partner ecosystem.',
      sourceUrls: [
        'https://investors.toasttab.com/overview/',
        'https://www.sec.gov/Archives/edgar/data/1650164/000165016426000057/tost-20251231.htm',
        'https://pos.toasttab.com/news/ipo_recap_for-the-love-of-restaurants',
        'https://stockanalysis.com/stocks/tost/statistics/',
      ],
      i18n: {
        zh: {
          displayName: 'Toast',
          sector: '信息技术',
          industry: '面向餐饮与零售商业的软件、支付及金融科技平台',
          headquarters: '美国马萨诸塞州波士顿',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Toast 为餐饮与零售企业提供全球技术平台，将销售点及运营软件、智能体 AI、支付、金融科技解决方案、硬件和合作伙伴生态整合在一起。',
        },
      },
    }
  );
})(window);
