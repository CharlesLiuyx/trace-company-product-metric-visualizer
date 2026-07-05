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
      key: 'visa',
      name: 'Visa',
      legalName: 'Visa Inc.',
      aliases: ['Visa Inc.'],
      ticker: 'V',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 640000000000,
        asOf: '2026-07-02',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/v/market-cap/',
      },
      sector: 'Financials',
      industry: 'Payment technology and transaction processing (card network operating VisaNet, connecting consumers, merchants, financial institutions, and governments)',
      founded: '1958',
      headquarters: 'San Francisco, California, United States',
      fiscalYearEnd: 'September 30',
      website: 'https://www.visa.com/',
      description:
        'Visa is a global payments technology company that operates VisaNet, a transaction processing network connecting consumers, merchants, financial institutions, and governments across more than 200 countries and territories. It earns service, data processing, international transaction, and other revenues by enabling digital payments, and returns value to card issuers through client incentives.',
      sourceUrls: [
        'https://www.visa.com/about-visa.html',
        'https://investor.visa.com/',
        'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=V&type=10-K',
        'https://stockanalysis.com/stocks/v/market-cap/',
        'https://www.linkedin.com/company/visa/',
      ],
      i18n: {
        zh: {
          displayName: 'Visa',
          sector: '金融',
          industry: '支付技术与交易处理（运营 VisaNet 卡组织网络，连接消费者、商户、金融机构和政府）',
          headquarters: '美国加利福尼亚州旧金山',
          fiscalYearEnd: '9 月 30 日',
          description:
            'Visa 是一家全球支付技术公司，运营的 VisaNet 交易处理网络连接了 200 多个国家和地区的消费者、商户、金融机构与政府。公司通过服务、数据处理、国际交易等业务赋能数字支付获取收入，并以客户激励的形式向发卡机构返还价值。',
        },
      },
    }
  );
})(window);
