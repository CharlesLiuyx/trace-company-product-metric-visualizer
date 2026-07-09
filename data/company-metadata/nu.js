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
      key: 'nu',
      name: 'Nu',
      legalName: 'Nu Holdings Ltd.',
      aliases: ['Nubank', 'Nu Holdings'],
      ticker: 'NU',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 66170000000,
        asOf: '2026-07-08',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/nu/market-cap/',
      },
      sector: 'Financials',
      industry:
        'Digital banking, credit cards, deposits, payments, lending, investments, and insurance',
      founded: '2013',
      headquarters: 'São Paulo, São Paulo, Brazil',
      fiscalYearEnd: 'December 31',
      website: 'https://nubank.com.br/',
      description:
        'Nu operates a digital financial services platform across Brazil, Mexico, and Colombia, providing credit cards, accounts and deposits, payments, lending, investments, insurance, and related digital services to consumers and small businesses.',
      sourceUrls: [
        'https://international.nubank.com.br/about/',
        'https://international.nubank.com.br/company/nubank-turns-13-as-one-of-the-most-influential-financial-institutions-in-the-world/',
        'https://www.sec.gov/Archives/edgar/data/1691493/000129281426002166/nuform20f_2025.htm',
        'https://www.investors.nu/',
        'https://stockanalysis.com/stocks/nu/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'Nu',
          sector: '金融',
          industry: '数字银行、信用卡、存款、支付、贷款、投资与保险',
          headquarters: '巴西圣保罗州圣保罗',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Nu 在巴西、墨西哥和哥伦比亚运营数字金融服务平台，为个人和小微企业提供信用卡、账户与存款、支付、贷款、投资、保险及相关数字服务。',
        },
      },
    }
  );
})(window);
