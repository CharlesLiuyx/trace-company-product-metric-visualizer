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
      key: 'jd-com',
      name: 'JD.com',
      legalName: 'JD.com, Inc.',
      aliases: ['JINGDONG', '京东'],
      ticker: 'JD / 9618 / 89618',
      exchange: 'NASDAQ / HKEX',
      marketCap: {
        valueUsd: 37230000000,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/jd/market-cap/',
      },
      sector: 'Consumer Discretionary',
      industry: 'E-commerce, supply-chain technology, logistics, healthcare, industrials, property development, and international retail',
      founded: '1998',
      headquarters: 'Beijing, China',
      fiscalYearEnd: 'December 31',
      website: 'https://www.jd.com/',
      description:
        'JD.com is a supply-chain-based technology and service provider whose businesses span online retail, marketplace and marketing services, logistics, healthcare, industrial supply-chain services, property infrastructure, and international retail.',
      sourceUrls: [
        'https://corporate.jd.com/ourBusiness',
        'https://corporate.jd.com/contactUs',
        'https://ir.jd.com/',
        'https://ir.jd.com/news-releases/news-release-details/jdcom-announces-first-quarter-2026-results',
        'https://stockanalysis.com/stocks/jd/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: '京东',
          sector: '非必需消费品',
          industry: '电子商务、供应链技术、物流、医疗健康、工业品、物业基础设施和国际零售',
          headquarters: '中国北京市',
          fiscalYearEnd: '12 月 31 日',
          description:
            '京东是一家以供应链为基础的技术与服务提供商，业务覆盖线上零售、平台和营销服务、物流、医疗健康、工业供应链服务、物业基础设施和国际零售。',
        },
      },
    }
  );
})(window);
