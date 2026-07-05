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
      key: 'adobe',
      name: 'Adobe',
      legalName: 'Adobe Inc.',
      ticker: 'ADBE',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 87330000000,
        asOf: '2026-07-03',
        source: 'CompaniesMarketCap',
        sourceUrl: 'https://companiesmarketcap.com/adobe/marketcap/',
      },
      sector: 'Information Technology',
      industry: 'Application software for creative content, digital documents, and digital marketing/experience management',
      founded: '1982',
      headquarters: 'San Jose, California, United States',
      fiscalYearEnd: 'Friday closest to November 30',
      website: 'https://www.adobe.com/',
      description:
        'Adobe develops software for creative content creation, digital document management, and digital marketing, sold through Creative Cloud, Document Cloud (Acrobat and Reader), and Experience Cloud to creative and marketing professionals, business professionals and consumers, and enterprises.',
      sourceUrls: [
        'https://www.adobe.com/',
        'https://en.wikipedia.org/wiki/Adobe_Inc.',
        'https://companiesmarketcap.com/adobe/marketcap/',
      ],
      i18n: {
        zh: {
          displayName: 'Adobe',
          sector: '信息技术',
          industry: '面向创意内容、数字文档和数字营销/体验管理的应用软件',
          headquarters: '美国加利福尼亚州圣何塞',
          fiscalYearEnd: '最接近 11 月 30 日的星期五',
          description:
            'Adobe 开发面向创意内容制作、数字文档管理和数字营销的软件，通过 Creative Cloud、Document Cloud（Acrobat 与 Reader）以及 Experience Cloud，面向创意与营销专业人士、企业专业人士与消费者以及企业客户提供服务。',
        },
      },
    }
  );
})(window);
