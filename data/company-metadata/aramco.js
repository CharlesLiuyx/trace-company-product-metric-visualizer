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
      key: 'aramco',
      name: 'Saudi Aramco',
      legalName: 'Saudi Arabian Oil Company',
      aliases: ['Aramco'],
      ticker: '2222',
      exchange: 'Saudi Exchange (Tadawul)',
      marketCap: {
        valueUsd: 1724330666667,
        asOf: '2026-07-09',
        source: 'Saudi Exchange Daily Financial Indicators',
        sourceUrl: 'https://www.saudiexchange.sa/Resources/Reports-v2/DailyFinancialIndicators_en.html',
      },
      sector: 'Energy',
      industry: 'Integrated oil, natural gas, refining, chemicals, and fuels marketing',
      founded: '1933',
      headquarters: 'Dhahran, Saudi Arabia',
      fiscalYearEnd: 'December 31',
      website: 'https://www.aramco.com/',
      description:
        'Saudi Aramco is Saudi Arabia’s national integrated energy and chemicals company, managing a large hydrocarbon reserve base while producing, refining, transporting, and marketing oil, natural gas, fuels, and chemicals globally.',
      sourceUrls: [
        'https://www.aramco.com/en/about-us',
        'https://www.aramco.com/en/about-us/our-history',
        'https://www.aramco.com/en/investors',
        'https://www.saudiexchange.sa/wps/portal/saudiexchange/newsandreports/issuer-news/issuer-announcements/issuer-announcements-details/?anCat=1&anId=95107&cs=2222&locale=en',
      ],
      i18n: {
        zh: {
          displayName: '沙特阿美',
          sector: '能源',
          industry: '综合石油、天然气、炼油、化工与燃料营销',
          headquarters: '沙特阿拉伯宰赫兰',
          fiscalYearEnd: '12 月 31 日',
          description:
            '沙特阿美是沙特阿拉伯的国家级综合能源与化工公司，管理庞大的油气储量，并在全球从事石油、天然气、燃料和化工产品的生产、炼化、运输与销售。',
        },
      },
    }
  );
})(window);
