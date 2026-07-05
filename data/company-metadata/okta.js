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
      key: 'okta',
      name: 'Okta',
      legalName: 'Okta, Inc.',
      ticker: 'OKTA',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 21600000000,
        asOf: '2026-06-26',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/okta/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Identity and access management, cybersecurity, workforce identity, customer identity, authentication, authorization, and identity governance software',
      founded: '2009',
      headquarters: 'San Francisco, California, United States',
      fiscalYearEnd: 'January 31',
      website: 'https://www.okta.com/',
      description:
        'Okta provides cloud-based identity and access management software across Workforce Identity, Customer Identity, authentication, authorization, governance, and identity security for human, machine, and AI identities.',
      sourceUrls: [
        'https://www.okta.com/company/',
        'https://investor.okta.com/',
        'https://investor.okta.com/news-and-events/news-releases/news-details/2026/Okta-Announces-First-Quarter-Fiscal-Year-2027-Financial-Results/default.aspx',
        'https://www.sec.gov/Archives/edgar/data/1660134/000166013426000020/okta-20260131.htm',
        'https://stockanalysis.com/stocks/okta/market-cap/',
        'https://www.linkedin.com/company/okta-inc-',
      ],
      i18n: {
        zh: {
          displayName: 'Okta',
          sector: '信息技术',
          industry: '身份与访问管理、网络安全、员工身份、客户身份、认证、授权和身份治理软件',
          headquarters: '美国加利福尼亚州旧金山',
          fiscalYearEnd: '1 月 31 日',
          description:
            'Okta 提供云端身份与访问管理软件，覆盖员工身份、客户身份、认证、授权、治理，以及面向人类、机器和 AI 身份的身份安全。',
        },
      },
    }
  );
})(window);
