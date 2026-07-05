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
      key: 'crowdstrike',
      name: 'CrowdStrike',
      legalName: 'CrowdStrike Holdings, Inc.',
      ticker: 'CRWD',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 121000000000,
        asOf: '2026-07-02',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/crwd/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Cybersecurity, cloud-native endpoint and cloud protection, threat intelligence, identity protection, and security operations software delivered through the Falcon platform',
      founded: '2011',
      headquarters: 'Austin, Texas, United States',
      fiscalYearEnd: 'January 31',
      website: 'https://www.crowdstrike.com/',
      description:
        'CrowdStrike provides cloud-native cybersecurity through its Falcon platform, delivering endpoint, cloud, identity, and data protection alongside threat intelligence and managed security services on a subscription basis.',
      sourceUrls: [
        'https://www.crowdstrike.com/en-us/about-us/',
        'https://ir.crowdstrike.com/',
        'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=CRWD&type=10-K',
        'https://stockanalysis.com/stocks/crwd/market-cap/',
        'https://www.linkedin.com/company/crowdstrike/',
      ],
      i18n: {
        zh: {
          displayName: 'CrowdStrike',
          sector: '信息技术',
          industry: '网络安全，通过 Falcon 平台以订阅方式提供云原生端点与云防护、威胁情报、身份保护和安全运营软件',
          headquarters: '美国得克萨斯州奥斯汀',
          fiscalYearEnd: '1 月 31 日',
          description:
            'CrowdStrike 通过 Falcon 平台提供云原生网络安全，以订阅方式交付端点、云、身份和数据防护，并配套威胁情报与托管安全服务。',
        },
      },
    }
  );
})(window);
