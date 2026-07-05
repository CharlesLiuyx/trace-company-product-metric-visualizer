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
      key: 'hubspot',
      name: 'HubSpot',
      legalName: 'HubSpot, Inc.',
      ticker: 'HUBS',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 9500000000,
        asOf: '2026-06-26',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/hubs/market-cap/',
      },
      sector: 'Information Technology',
      industry:
        'Customer relationship management, marketing automation, sales, service, content management, operations software, and AI-powered customer platform',
      founded: '2006',
      headquarters: 'Cambridge, Massachusetts, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.hubspot.com/',
      description:
        'HubSpot provides an agentic customer platform for scaling businesses, combining AI-powered engagement hubs, Smart CRM, app integrations, community, education, and software for marketing, sales, service, content, and operations teams.',
      sourceUrls: [
        'https://www.hubspot.com/our-story',
        'https://ir.hubspot.com/',
        'https://www.businesswire.com/news/home/20260507857014/en/HubSpot-Reports-Strong-Q1-2026-Results',
        'https://www.sec.gov/Archives/edgar/data/1404655/000119312526046646/0001193125-26-046646-index.htm',
      ],
      i18n: {
        zh: {
          displayName: 'HubSpot',
          sector: '信息技术',
          industry: '客户关系管理、营销自动化、销售、服务、内容管理、运营软件和 AI 驱动的客户平台',
          headquarters: '美国马萨诸塞州剑桥',
          fiscalYearEnd: '12 月 31 日',
          description:
            'HubSpot 为成长型企业提供 agentic 客户平台，整合 AI 驱动的互动中心、Smart CRM、应用集成、社区、教育，以及服务营销、销售、客服、内容和运营团队的软件。',
        },
      },
    }
  );
})(window);
