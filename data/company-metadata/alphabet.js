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
      key: 'alphabet',
      name: 'Alphabet',
      legalName: 'Alphabet Inc.',
      ticker: 'GOOGL / GOOG',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 4459051500000,
        asOf: '2026-06-18',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/googl/market-cap/',
      },
      sector: 'Communication Services',
      industry: 'Internet services, digital advertising, cloud computing, software, devices, and Other Bets',
      founded: '2015',
      headquarters: 'Mountain View, California, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://abc.xyz/',
      description:
        'Alphabet is a holding company whose largest business is Google, spanning Search, YouTube, advertising platforms, Google Play, devices, subscriptions, Google Cloud, and other long-term technology bets.',
      sourceUrls: [
        'https://abc.xyz/',
        'https://abc.xyz/investor/',
        'https://abc.xyz/investor/other/sec-filings/',
        'https://about.google/',
      ],
      i18n: {
        zh: {
          displayName: 'Alphabet',
          sector: '通信服务',
          industry: '互联网服务、数字广告、云计算、软件、设备与其他创新业务',
          headquarters: '美国加利福尼亚州山景城',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Alphabet 是一家控股公司，旗下最大的业务是 Google，涵盖搜索、YouTube、广告平台、Google Play、设备、订阅、Google Cloud 以及其他长期科技投资。',
        },
      },
    }
  );
})(window);
