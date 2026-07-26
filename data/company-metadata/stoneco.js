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
      key: 'stoneco',
      name: 'StoneCo',
      legalName: 'StoneCo Ltd.',
      aliases: ['Stone', 'Stone Co.'],
      ticker: 'STNE',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 2616000000,
        asOf: '2026-07-24',
        source: 'YCharts',
        sourceUrl: 'https://ycharts.com/companies/STNE/market_cap',
      },
      sector: 'Financials',
      industry: 'Financial technology, merchant acquiring, banking, and credit',
      founded: '2012',
      headquarters: 'São Paulo, Brazil',
      fiscalYearEnd: 'December 31',
      website: 'https://www.stone.com.br/',
      description:
        'StoneCo provides financial technology solutions that help merchants conduct commerce and grow through payments, banking, and credit products.',
      sourceUrls: [
        'https://investors.stone.co/',
        'https://investors.stone.co/investor-services/faq/',
        'https://www.sec.gov/Archives/edgar/data/1745431/000207097926000026/earningsrelease4q25.htm',
        'https://ycharts.com/companies/STNE/market_cap',
      ],
      i18n: {
        zh: {
          displayName: 'StoneCo',
          sector: '金融',
          industry: '金融科技、商户收单、银行与信贷服务',
          headquarters: '巴西圣保罗',
          fiscalYearEnd: '12 月 31 日',
          description:
            'StoneCo 为商户提供金融科技解决方案，通过支付、银行和信贷产品帮助商户开展业务并实现增长。',
        },
      },
    }
  );
})(window);
