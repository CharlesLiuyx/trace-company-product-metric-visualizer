/* Company-profile SSOT record. Profile fields only — period financials stay
 * in data/income-statements/. Format: data/schema.md. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'verizon',
    name: 'Verizon',
    legalName: 'Verizon Communications Inc.',
    aliases: ['Verizon Communications', 'VZ'],
    ticker: 'VZ',
    exchange: 'NYSE',
    marketCap: {
      valueUsd: 176380000000,
      asOf: '2026-07-10',
      source: 'StockAnalysis',
      sourceUrl: 'https://stockanalysis.com/stocks/vz/market-cap/',
    },
    sector: 'Communication Services',
    industry: 'Telecommunications services',
    founded: '2000',
    headquarters: 'New York, New York, United States',
    fiscalYearEnd: 'December 31',
    website: 'https://www.verizon.com/',
    description:
      'Verizon is a U.S. communications company providing wireless and wireline connectivity, broadband, network services, and related products to consumer, business, and public-sector customers.',
    sourceUrls: [
      'https://www.verizon.com/about/our-company/verizon-corporate-headquarters',
      'https://www.verizon.com/about/news/verizon-delivers-2025-financial-guidance-highest-quarterly-net-adds',
      'https://www.verizon.com/about/sites/default/files/2025-Annual-Report-on-Form-10k.pdf',
      'https://stockanalysis.com/stocks/vz/market-cap/',
    ],
    i18n: {
      zh: {
        displayName: '威瑞森',
        sector: '通信服务',
        industry: '电信服务',
        headquarters: '美国纽约州纽约市',
        fiscalYearEnd: '12 月 31 日',
        description: '威瑞森是一家美国通信公司，向消费者、企业和公共部门客户提供无线和有线连接、宽带、网络服务及相关产品。',
      },
    },
  });
})(window);
