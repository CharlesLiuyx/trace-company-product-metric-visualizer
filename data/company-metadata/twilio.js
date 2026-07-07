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
      key: 'twilio',
      name: 'Twilio',
      legalName: 'Twilio Inc.',
      aliases: ['Twilio Inc.', 'TWLO'],
      ticker: 'TWLO',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 31730000000,
        asOf: '2026-07-06',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/twlo/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Customer engagement, communications platform as a service, and customer data software',
      founded: '2008',
      headquarters: 'San Francisco, California, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.twilio.com/',
      description:
        'Twilio provides a customer engagement platform that combines communication channels, contextual customer data, and AI orchestration so companies can build programmable messaging, voice, email, authentication, and customer data workflows.',
      sourceUrls: [
        'https://www.twilio.com/en-us/company',
        'https://investors.twilio.com/',
        'https://stockanalysis.com/stocks/twlo/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'Twilio',
          sector: '信息技术',
          industry: '客户互动、通信平台即服务与客户数据软件',
          headquarters: '美国加利福尼亚州旧金山',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Twilio 提供客户互动平台，将通信渠道、客户上下文数据和 AI 编排结合起来，帮助企业构建可编程短信、语音、邮件、身份验证和客户数据工作流。',
        },
      },
    }
  );
})(window);
