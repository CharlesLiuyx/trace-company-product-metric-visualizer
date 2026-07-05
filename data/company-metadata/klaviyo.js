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
      key: 'klaviyo',
      name: 'Klaviyo',
      legalName: 'Klaviyo, Inc.',
      ticker: 'KVYO',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 4460000000,
        asOf: '2026-06-26',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/kvyo/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'B2C CRM, marketing automation, customer data platform, email, SMS, mobile messaging, customer service, analytics, and AI customer engagement',
      founded: '2012',
      headquarters: 'Boston, Massachusetts, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.klaviyo.com/',
      description:
        'Klaviyo provides an autonomous B2C CRM platform built on a customer data platform, combining marketing automation, service, analytics, AI, email, SMS, mobile push, WhatsApp, and other customer engagement channels for consumer brands.',
      sourceUrls: [
        'https://investors.klaviyo.com/overview/default.aspx',
        'https://investors.klaviyo.com/news/news-details/2026/Klaviyo-Delivers-Strong-Q1-2026-Results-28-Revenue-Growth-Record-Operating-Margin-and-Raises-Full-Year-Outlook/default.aspx',
        'https://www.klaviyo.com/about',
        'https://www.sec.gov/Archives/edgar/data/1835830/000162828023031916/klaviyoincs-1a.htm',
        'https://stockanalysis.com/stocks/kvyo/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'Klaviyo',
          sector: '信息技术',
          industry: 'B2C CRM、营销自动化、客户数据平台、电子邮件、短信、移动消息、客户服务、分析和 AI 客户互动',
          headquarters: '美国马萨诸塞州波士顿',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Klaviyo 提供自主型 B2C CRM 平台，以客户数据平台为基础，结合营销自动化、服务、分析、AI、电子邮件、短信、移动推送、WhatsApp 和其他客户互动渠道，服务消费品牌。',
        },
      },
    }
  );
})(window);
