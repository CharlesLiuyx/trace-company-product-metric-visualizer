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
      key: 'expedia',
      name: 'Expedia',
      legalName: 'Expedia Group, Inc.',
      aliases: ['Expedia Group'],
      ticker: 'EXPE',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 31750000000,
        asOf: '2026-07-01',
        source: 'CompaniesMarketCap',
        sourceUrl: 'https://companiesmarketcap.com/expedia/marketcap/',
      },
      sector: 'Consumer Discretionary',
      industry: 'Online travel marketplace, lodging, air, and travel advertising',
      founded: '1996',
      headquarters: 'Seattle, Washington, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.expediagroup.com/',
      description:
        'Expedia Group operates a global travel marketplace spanning the Expedia, Hotels.com, and Vrbo consumer brands, a large B2B travel technology business, and the trivago hotel metasearch and advertising platform.',
      sourceUrls: [
        'https://www.expediagroup.com/who-we-are/our-story/',
        'https://ir.expediagroup.com/',
        'https://www.businesswire.com/news/home/20260507466383/en/Expedia-Group-Reports-First-Quarter-2026-Results',
        'https://companiesmarketcap.com/expedia/marketcap/',
      ],
      i18n: {
        zh: {
          displayName: 'Expedia',
          sector: '非必需消费品',
          industry: '在线旅行市场、住宿、机票和旅行广告',
          headquarters: '美国华盛顿州西雅图',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Expedia Group 运营全球旅行市场，旗下拥有 Expedia、Hotels.com 和 Vrbo 消费品牌、大型 B2B 旅行技术业务，以及 trivago 酒店元搜索和广告平台。',
        },
      },
    }
  );
})(window);
