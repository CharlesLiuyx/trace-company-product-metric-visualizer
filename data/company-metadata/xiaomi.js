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
      key: 'xiaomi',
      name: 'Xiaomi',
      legalName: 'Xiaomi Corporation',
      aliases: ['Xiaomi Group', '小米', '小米集团'],
      ticker: '1810 / 81810',
      exchange: 'HKEX',
      marketCap: {
        valueUsd: 74900000000,
        asOf: '2026-07-01',
        source: 'CompaniesMarketCap',
        sourceUrl: 'https://companiesmarketcap.com/xiaomi/marketcap/',
      },
      sector: 'Consumer Discretionary',
      industry: 'Consumer electronics, smart hardware, IoT services, internet services, and electric vehicles',
      founded: '2010',
      headquarters: 'Beijing, China',
      fiscalYearEnd: 'December 31',
      website: 'https://www.mi.com/',
      description:
        'Xiaomi is a consumer electronics and smart manufacturing company with smartphones, smart hardware, an IoT platform, internet services, and electric vehicles at the core of its Human x Car x Home ecosystem.',
      sourceUrls: [
        'https://www.mi.com/global/about/',
        'https://companiesmarketcap.com/xiaomi/marketcap/',
      ],
      i18n: {
        zh: {
          displayName: '小米',
          sector: '非必需消费品',
          industry: '消费电子、智能硬件、物联网服务、互联网服务和智能电动汽车',
          headquarters: '中国北京',
          fiscalYearEnd: '12 月 31 日',
          description:
            '小米是一家消费电子与智能制造公司，以智能手机、智能硬件、物联网平台、互联网服务和智能电动汽车为核心，构建“人车家全生态”。',
        },
      },
    }
  );
})(window);
