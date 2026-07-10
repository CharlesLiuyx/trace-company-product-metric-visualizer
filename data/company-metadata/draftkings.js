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
      key: 'draftkings',
      name: 'DraftKings',
      legalName: 'DraftKings Inc.',
      ticker: 'DKNG',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 13470000000,
        asOf: '2026-07-08',
        source: 'CompaniesMarketCap',
        sourceUrl: 'https://companiesmarketcap.com/draftkings/marketcap/',
      },
      sector: 'Consumer Discretionary',
      industry: 'Online sports betting, iGaming, daily fantasy sports, and gaming technology',
      founded: '2012',
      headquarters: 'Boston, Massachusetts, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.draftkings.com/',
      description:
        'DraftKings is a digital sports entertainment and gaming company offering regulated online sportsbook and iGaming products, daily fantasy sports, and related gaming technology and media experiences.',
      sourceUrls: [
        'https://ir.aboutdraftkings.com/news/news-details/2026/DraftKings-Reports-Fourth-Quarter-Revenue-Growth-of-43/default.aspx',
        'https://www.sec.gov/Archives/edgar/data/1883685/000188368526000013/dkng-20251231.htm',
        'https://companiesmarketcap.com/draftkings/marketcap/',
      ],
      i18n: {
        zh: {
          displayName: 'DraftKings',
          sector: '非必需消费品',
          industry: '在线体育博彩、在线赌场、每日梦幻体育与博彩技术',
          headquarters: '美国马萨诸塞州波士顿',
          fiscalYearEnd: '12 月 31 日',
          description:
            'DraftKings 是一家数字体育娱乐与游戏公司，提供受监管的在线体育博彩和在线赌场产品、每日梦幻体育，以及相关的博彩技术与媒体体验。',
        },
      },
    }
  );
})(window);
