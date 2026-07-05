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
      key: 'marriott',
      name: 'Marriott',
      legalName: 'Marriott International, Inc.',
      aliases: ['Marriott International'],
      ticker: 'MAR',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 69990000000,
        asOf: '2026-06-26',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/mar/market-cap/',
      },
      sector: 'Consumer Discretionary',
      industry: 'Hotels, resorts, lodging franchising, hotel management, owned and leased hotels, and loyalty programs',
      founded: '1927',
      headquarters: 'Bethesda, Maryland, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.marriott.com/',
      description:
        'Marriott International is a global lodging company that operates, franchises, and licenses hotel, residential, timeshare, and other lodging properties across a portfolio of brands, with revenue from management fees, franchise fees, owned and leased properties, cost reimbursements, and related services.',
      sourceUrls: [
        'https://www.marriott.com/marriott/aboutmarriott.mi',
        'https://marriott.gcs-web.com/',
        'https://marriott.gcs-web.com/static-files/9eac5832-8431-4907-8976-41d813c7454e',
        'https://stockanalysis.com/stocks/mar/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: '万豪',
          sector: '非必需消费品',
          industry: '酒店、度假村、住宿特许经营、酒店管理、自有和租赁酒店以及会员忠诚度计划',
          headquarters: '美国马里兰州贝塞斯达',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Marriott International 是一家全球住宿公司，通过多品牌组合运营、特许经营并授权酒店、住宅、分时度假和其他住宿物业，收入来自管理费、特许经营费、自有及租赁物业、成本报销和相关服务。',
        },
      },
    }
  );
})(window);
