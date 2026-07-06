/* Company-profile SSOT record. Profile fields only -- period financials stay
 * in data/income-statements/. Format: data/schema.md. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push(
    {
      key: 'marvell',
      name: 'Marvell',
      legalName: 'Marvell Technology, Inc.',
      aliases: ['Marvell Technology', 'MRVL'],
      ticker: 'MRVL',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 223240000000,
        asOf: '2026-07-06',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/mrvl/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Fabless data infrastructure semiconductors for data center, communications, compute, networking, security, interconnect, and storage markets',
      founded: '1995',
      headquarters: 'Wilmington, Delaware, United States',
      fiscalYearEnd: 'Saturday nearest January 31',
      website: 'https://www.marvell.com/',
      description:
        'Marvell is a fabless supplier of data infrastructure semiconductor solutions, spanning data center core to network edge with compute, networking, security, interconnect, and storage technologies.',
      sourceUrls: [
        'https://www.marvell.com/company.html',
        'https://investor.marvell.com/sec-filings/all-sec-filings/content/0001835632-26-000011/mrvl-20260131.htm',
        'https://investor.marvell.com/news-events/press-releases/detail/1011/marvell-technology-inc-reports-fourth-quarter-and-fiscal-year-2026-financial-results',
        'https://stockanalysis.com/stocks/mrvl/market-cap/',
        'https://en.wikipedia.org/wiki/Marvell_Technology',
      ],
      i18n: {
        zh: {
          displayName: 'Marvell',
          sector: '信息技术',
          industry: '面向数据中心、通信、计算、网络、安全、互连与存储市场的无晶圆厂数据基础设施半导体',
          headquarters: '美国特拉华州威尔明顿',
          fiscalYearEnd: '最接近 1 月 31 日的星期六',
          description:
            'Marvell 是一家无晶圆厂数据基础设施半导体供应商，业务覆盖从数据中心核心到网络边缘的场景，技术组合包括计算、网络、安全、互连和存储。',
        },
      },
    }
  );
})(window);
