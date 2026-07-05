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
      key: 'airbnb',
      name: 'Airbnb',
      legalName: 'Airbnb, Inc.',
      ticker: 'ABNB',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 86390000000,
        asOf: '2026-06-26',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/abnb/market-cap/',
      },
      sector: 'Consumer Discretionary',
      industry: 'Online travel marketplace, lodging, experiences, and travel services',
      founded: '2008',
      headquarters: 'San Francisco, California, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.airbnb.com/',
      description:
        'Airbnb operates a global travel marketplace that connects hosts and guests for short-term stays and experiences, supported by payments, trust, discovery, and travel-planning technology.',
      sourceUrls: [
        'https://www.airbnb.com/about/about-us',
        'https://investors.airbnb.com/',
        'https://investors.airbnb.com/financials/sec-filings/default.aspx',
        'https://stockanalysis.com/stocks/abnb/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'Airbnb',
          sector: '非必需消费品',
          industry: '在线旅行市场、住宿、体验和旅行服务',
          headquarters: '美国加利福尼亚州旧金山',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Airbnb 运营全球旅行市场，连接房东与房客，提供短期住宿和体验，并以支付、信任、发现和旅行规划技术提供支持。',
        },
      },
    }
  );
})(window);
