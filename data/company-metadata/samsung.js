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
      key: 'samsung',
      name: 'Samsung',
      legalName: 'Samsung Electronics Co., Ltd.',
      aliases: ['Samsung Electronics'],
      ticker: '005930 / SMSN',
      exchange: 'KRX / LSE',
      marketCap: {
        valueUsd: 1468304688109,
        asOf: '2026-06-19',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/quote/otc/ssnlf/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Consumer electronics, semiconductors, displays, mobile devices, appliances, networks, and automotive audio and connected systems',
      founded: '1969',
      headquarters: 'Suwon, Gyeonggi-do, South Korea',
      fiscalYearEnd: 'December 31',
      website: 'https://www.samsung.com/',
      description:
        'Samsung Electronics designs, manufactures, and sells smartphones, TVs, digital appliances, memory, foundry and system LSI semiconductors, display panels, network systems, and Harman automotive and audio products across device experience, device solutions, and display businesses.',
      sourceUrls: [
        'https://www.samsung.com/',
        'https://www.samsung.com/global/ir/',
        'https://www.samsung.com/global/ir/ir-resources/our-business/',
        'https://www.samsung.com/global/ir/ir-resources/faq/',
        'https://www.samsung.com/global/ir/stock-information/listing-Info/',
        'https://www.samsung.com/global/ir/financial-information/earnings-release/',
      ],
      i18n: {
        zh: {
          displayName: '三星',
        },
      },
    }
  );
})(window);
