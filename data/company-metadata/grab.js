/* Company-profile SSOT record. Profile fields only - period financials stay
 * in data/income-statements/. Format: data/schema.md. */
(function (global) {
  'use strict';

  const metadata = (global.COMPANY_METADATA = global.COMPANY_METADATA || {
    schemaVersion: 1,
    companies: [],
  });

  metadata.companies.push(
    {
      key: 'grab',
      name: 'Grab',
      legalName: 'Grab Holdings Limited',
      aliases: ['Grab Holdings', 'Grab Holdings Inc.', 'GRAB'],
      ticker: 'GRAB',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 15750000000,
        asOf: '2026-07-07',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/grab/market-cap/',
      },
      sector: 'Technology',
      industry: 'Mobility, delivery, digital payments, and financial services platform',
      founded: '2012',
      headquarters: 'Singapore',
      fiscalYearEnd: 'December 31',
      website: 'https://www.grab.com/',
      description:
        'Grab is a Southeast Asian superapp platform headquartered in Singapore, providing mobility, delivery, digital payments, and financial services across the region.',
      sourceUrls: [
        'https://www.grab.com/sg/about/',
        'https://investors.grab.com/',
        'https://stockanalysis.com/stocks/grab/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'Grab',
          sector: '科技',
          industry: '出行、配送、数字支付和金融服务平台',
          headquarters: '新加坡',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Grab 是一家总部位于新加坡、服务东南亚市场的超级应用平台，提供出行、配送、数字支付和金融服务。',
        },
      },
    }
  );
})(window);
