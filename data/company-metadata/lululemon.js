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
      key: 'lululemon',
      name: 'lululemon athletica',
      legalName: 'lululemon athletica inc.',
      aliases: ['Lululemon', 'lululemon', 'Lululemon Athletica'],
      ticker: 'LULU',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 13440000000,
        asOf: '2026-07-03',
        source: 'CompaniesMarketCap',
        sourceUrl: 'https://companiesmarketcap.com/lululemon-athletica/marketcap/',
      },
      sector: 'Consumer Discretionary',
      industry: 'Athletic apparel, footwear, and accessories design, distribution, and retail',
      founded: '1998',
      headquarters: 'Vancouver, British Columbia, Canada',
      fiscalYearEnd: 'Sunday closest to January 31',
      website: 'https://shop.lululemon.com/',
      description:
        'lululemon athletica is a designer, distributor, and retailer of technical athletic apparel, footwear, and accessories, selling women’s and men’s performance and lifestyle products through company-operated stores, its direct-to-consumer e-commerce channel, and other channels including outlets, temporary locations, and wholesale.',
      sourceUrls: [
        'https://corporate.lululemon.com/our-company',
        'https://corporate.lululemon.com/investors',
        'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001397187&type=10-K',
      ],
      i18n: {
        zh: {
          displayName: 'lululemon',
          sector: '非必需消费品',
          industry: '运动服装、鞋类与配件的设计、分销与零售',
          headquarters: '加拿大不列颠哥伦比亚省温哥华',
          fiscalYearEnd: '最接近 1 月 31 日的星期日',
          description:
            'lululemon athletica 是一家专业运动服装、鞋类和配件的设计、分销与零售企业，通过自营门店、直营电商渠道以及包括奥特莱斯、临时店铺和批发在内的其他渠道，销售面向女性和男性的高性能与生活方式产品。',
        },
      },
    }
  );
})(window);
