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
      key: 'zillow',
      name: 'Zillow',
      legalName: 'Zillow Group, Inc.',
      aliases: ['Zillow Group'],
      ticker: 'ZG',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 7350000000,
        asOf: '2026-07-09',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/zg/market-cap/',
      },
      sector: 'Communication Services',
      industry: 'Online real estate marketplaces, software, rentals, and mortgages',
      founded: '2004',
      headquarters: 'Seattle, Washington, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.zillow.com/',
      description:
        'Zillow Group operates U.S. residential real estate apps, websites, and software that connect consumers with agents, rental partners, and mortgage services across the moving journey.',
      sourceUrls: [
        'https://www.zillowgroup.com/about-us/',
        'https://investors.zillowgroup.com/financials/annual-reports-and-proxies/default.aspx',
        'https://investors.zillowgroup.com/news-and-events/news/news-details/2026/Zillow-Group-Reports-First-Quarter-2026-Financial-Results/default.aspx',
        'https://investors.zillowgroup.com/news-and-events/news/news-details/2026/Zillow-Group-Reports-Fourth-Quarter-and-Full-Year-2025-Financial-Results/default.aspx',
        'https://stockanalysis.com/stocks/zg/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'Zillow',
          sector: '通信服务',
          industry: '在线房地产市场、软件、租赁与抵押贷款服务',
          headquarters: '美国华盛顿州西雅图',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Zillow Group 在美国运营住宅房地产应用、网站和软件，在搬家全流程中连接消费者、房地产经纪人、租赁合作伙伴和抵押贷款服务。',
        },
      },
    }
  );
})(window);
