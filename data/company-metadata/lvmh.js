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
      key: 'lvmh',
      name: 'LVMH',
      legalName: 'LVMH Moët Hennessy – Louis Vuitton, Société Européenne',
      aliases: ['LVMH Moët Hennessy Louis Vuitton', 'LVMH Moët Hennessy – Louis Vuitton'],
      ticker: 'MC',
      exchange: 'Euronext Paris',
      marketCap: {
        value: 239.1,
        currency: '€',
        unit: 'B',
        asOf: '2026-07-01',
        source: 'CompaniesMarketCap',
        sourceUrl: 'https://companiesmarketcap.com/lvmh/marketcap/',
      },
      sector: 'Consumer Discretionary',
      industry: 'Luxury goods',
      founded: '1987',
      headquarters: '22 avenue Montaigne, 75008 Paris, France',
      fiscalYearEnd: 'December 31',
      website: 'https://www.lvmh.com/',
      description:
        'LVMH is a French luxury-goods group created through the merger of Moët Hennessy and Louis Vuitton. It develops a portfolio of Maisons spanning wines and spirits, fashion and leather goods, perfumes and cosmetics, watches and jewelry, and selective retailing.',
      sourceUrls: [
        'https://www.lvmh.com/en/our-group/',
        'https://www.lvmh.com/our-group/history',
        'https://www.lvmh.com/en/legal-terms',
        'https://companiesmarketcap.com/lvmh/marketcap/',
      ],
      i18n: {
        zh: {
          displayName: '路威酩轩',
          sector: '非必需消费品',
          industry: '奢侈品',
          headquarters: '法国巴黎蒙田大道 22 号，75008',
          fiscalYearEnd: '12 月 31 日',
          description:
            '路威酩轩是一家法国奢侈品集团，由酩悦轩尼诗与路易威登合并而成。集团旗下品牌覆盖葡萄酒与烈酒、时装与皮具、香水与美妆、腕表与珠宝以及精选零售等业务。',
        },
      },
    }
  );
})(window);
