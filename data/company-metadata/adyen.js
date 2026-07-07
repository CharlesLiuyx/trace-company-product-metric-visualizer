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
      key: 'adyen',
      name: 'Adyen',
      legalName: 'Adyen N.V.',
      aliases: ['Adyen N.V.'],
      ticker: 'ADYEN',
      exchange: 'Euronext Amsterdam',
      marketCap: {
        valueUsd: 30750000000,
        asOf: '2026-07-02',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/quote/ams/ADYEN/market-cap/',
      },
      sector: 'Financials',
      industry: 'Payment processing and financial technology platform for online, in-person, and embedded financial services',
      founded: '2006',
      headquarters: 'Amsterdam, Netherlands',
      fiscalYearEnd: 'December 31',
      website: 'https://www.adyen.com/',
      description:
        'Adyen is a Dutch financial technology platform that helps merchants accept payments, manage risk, issue cards, and embed financial products through a single global infrastructure.',
      sourceUrls: [
        'https://www.adyen.com/about',
        'https://investors.adyen.com/',
        'https://investors.adyen.com/financials',
        'https://stockanalysis.com/quote/ams/ADYEN/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'Adyen',
          sector: '金融',
          industry: '支付处理与金融科技平台，覆盖线上、线下和嵌入式金融服务',
          headquarters: '荷兰阿姆斯特丹',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Adyen 是一家荷兰金融科技平台，通过统一的全球基础设施帮助商户收单、管理风险、发行卡片并嵌入金融产品。',
        },
      },
    }
  );
})(window);
