/* Company-profile SSOT record. Period financials stay in data/income-statements/. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push({
    key: 'sofi',
    name: 'SoFi',
    legalName: 'SoFi Technologies, Inc.',
    aliases: ['SoFi Technologies', 'SOFI'],
    ticker: 'SOFI',
    exchange: 'NASDAQ',
    marketCap: {
      valueUsd: 24010000000,
      asOf: '2026-07-10',
      source: 'Stock Analysis',
      sourceUrl: 'https://stockanalysis.com/stocks/sofi/market-cap/',
    },
    sector: 'Financials',
    industry: 'Financial technology and digital banking',
    founded: 'April 2011',
    headquarters: 'San Francisco, California, United States',
    fiscalYearEnd: 'December 31',
    website: 'https://www.sofi.com/',
    description:
      'SoFi is a digital financial-services company that offers lending, banking, investing, insurance and technology-platform services to consumers and partners.',
    sourceUrls: [
      'https://investors.sofi.com/resources/investor-faqs/default.aspx',
      'https://www.sofi.com/',
      'https://www.sec.gov/Archives/edgar/data/1818874/000181887426000013/sofi-20251231.htm',
      'https://www.sec.gov/Archives/edgar/data/1818874/000181887426000008/a2025q4earningsrelease.htm',
      'https://stockanalysis.com/stocks/sofi/market-cap/',
    ],
    i18n: {
      zh: {
        displayName: 'SoFi',
        sector: '金融',
        industry: '金融科技与数字银行',
        headquarters: '美国加利福尼亚州旧金山',
        fiscalYearEnd: '12 月 31 日',
        description:
          'SoFi 是一家数字金融服务公司，为消费者及合作伙伴提供借贷、银行、投资、保险和技术平台服务。',
      },
    },
  });
})(window);
