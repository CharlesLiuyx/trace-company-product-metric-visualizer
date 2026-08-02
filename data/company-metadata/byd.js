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
      key: 'byd',
      name: 'BYD',
      legalName: 'BYD Company Limited',
      aliases: ['BYD Company', 'BYD Company Ltd.', '比亚迪', '比亚迪股份有限公司'],
      ticker: '1211 / 002594',
      exchange: 'HKEX / Shenzhen Stock Exchange',
      marketCap: {
        value: 904.14,
        currency: 'HKD',
        unit: 'B',
        asOf: '2026-07-27',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/quote/hkg/1211/market-cap/',
      },
      sector: 'Consumer Discretionary',
      industry: 'Electric vehicles, rechargeable batteries, electronics, new energy, and rail transit',
      founded: 'November 1994',
      headquarters: 'Shenzhen, Guangdong, China',
      fiscalYearEnd: 'December 31',
      website: 'https://www.bydglobal.com/',
      description:
        'BYD is a technology and manufacturing company active in automobiles, electronics, rechargeable batteries, new energy, and rail transit, with a focus on zero-emission energy solutions.',
      sourceUrls: [
        'https://www.bydglobal.com/en/BasicInformation.html',
        'https://www.bydglobal.com/en/CompanyIntro.html?scroll=true',
        'https://stockanalysis.com/quote/hkg/1211/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: '比亚迪',
          sector: '非必需消费品',
          industry: '电动汽车、充电电池、电子、新能源和轨道交通',
          headquarters: '中国广东省深圳市',
          fiscalYearEnd: '12 月 31 日',
          description:
            '比亚迪是一家覆盖汽车、电子、充电电池、新能源与轨道交通的科技制造企业，专注于零排放能源解决方案。',
        },
      },
    }
  );
})(window);
