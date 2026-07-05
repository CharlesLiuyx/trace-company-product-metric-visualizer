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
      key: 'applovin',
      name: 'AppLovin',
      legalName: 'AppLovin Corporation',
      ticker: 'APP',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 191960000000,
        asOf: '2026-07-01',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/app/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Mobile advertising, app monetization, marketing software, and AI-driven ad technology',
      founded: '2012',
      headquarters: 'Palo Alto, California, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.applovin.com/',
      description:
        'AppLovin provides AI-driven advertising, user acquisition, app monetization, and marketing technology that helps advertisers and app developers grow, monetize, and analyze mobile and web businesses.',
      sourceUrls: [
        'https://www.applovin.com/',
        'https://investors.applovin.com/',
        'https://investors.applovin.com/financials/quarterly-results/default.aspx',
        'https://stockanalysis.com/stocks/app/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'AppLovin',
          sector: '信息技术',
          industry: '移动广告、应用变现、营销软件与 AI 驱动的广告技术',
          headquarters: '美国加利福尼亚州帕洛阿尔托',
          fiscalYearEnd: '12 月 31 日',
          description:
            'AppLovin 提供 AI 驱动的广告、用户获取、应用变现和营销技术，帮助广告主与应用开发者增长、变现并分析移动端和网页业务。',
        },
      },
    }
  );
})(window);
