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
      key: 'schwab',
      name: 'Schwab',
      legalName: 'The Charles Schwab Corporation',
      ticker: 'SCHW',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 179340000000,
        asOf: '2026-07-10',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/schw/market-cap/',
      },
      sector: 'Financials',
      industry: 'Financial services and retail brokerage',
      founded: '1971',
      headquarters: 'Westlake, Texas, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.aboutschwab.com/',
      description:
        'The Charles Schwab Corporation provides wealth management, securities brokerage, banking, asset management, custody, and financial advisory services to individual investors and independent investment advisors.',
      sourceUrls: [
        'https://content.schwab.com/web/retail/public/about-schwab/SEC_Form10k_2025.pdf',
        'https://pressroom.aboutschwab.com/press-releases/press-release/2025/Charles-Schwab-Unveils-National-Investing-Day-to-Educate-and-Empower-Individual-Investors/default.aspx',
        'https://stockanalysis.com/stocks/schw/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: '嘉信理财',
          sector: '金融',
          industry: '金融服务与零售经纪',
          headquarters: '美国得克萨斯州韦斯特莱克',
          fiscalYearEnd: '12 月 31 日',
          description:
            '嘉信理财公司为个人投资者和独立投资顾问提供财富管理、证券经纪、银行、资产管理、托管及财务顾问服务。',
        },
      },
    }
  );
})(window);
