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
      key: 'digital-ocean',
      name: 'DigitalOcean',
      legalName: 'DigitalOcean Holdings, Inc.',
      ticker: 'DOCN',
      exchange: 'NYSE',
      sector: 'Information Technology',
      industry: 'Cloud infrastructure, developer cloud platforms, IaaS, PaaS, managed databases, Kubernetes, storage, networking, and AI cloud services',
      founded: '2012',
      headquarters: 'New York, New York, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.digitalocean.com/',
      description:
        'DigitalOcean provides a cloud platform for developers, startups, and small and medium-sized businesses, offering compute, storage, networking, managed databases, Kubernetes, application platform services, and AI infrastructure through a simplified self-service model.',
      sourceUrls: [
        'https://www.digitalocean.com/',
        'https://investors.digitalocean.com/',
        'https://investors.digitalocean.com/financials/quarterly-results/default.aspx',
        'https://investors.digitalocean.com/financials/sec-filings/default.aspx',
      ],
      i18n: {
        zh: {
          displayName: 'DigitalOcean',
          sector: '信息技术',
          industry: '云基础设施、开发者云平台、IaaS、PaaS、托管数据库、Kubernetes、存储、网络和 AI 云服务',
          headquarters: '美国纽约州纽约',
          fiscalYearEnd: '12 月 31 日',
          description:
            'DigitalOcean 面向开发者、初创公司以及中小企业提供云平台，通过简化的自助服务模式提供计算、存储、网络、托管数据库、Kubernetes、应用平台服务和 AI 基础设施。',
        },
      },
    }
  );
})(window);
