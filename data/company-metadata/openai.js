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
      key: 'openai',
      name: 'OpenAI',
      legalName: 'OpenAI, Inc.',
      aliases: ['OpenAI OpCo, LLC'],
      ticker: '',
      exchange: '',
      marketCap: null,
      sector: 'Information Technology',
      industry: 'Artificial intelligence research, foundation models, generative AI products, developer APIs, and AI infrastructure',
      founded: '2015',
      headquarters: 'San Francisco, California, United States',
      fiscalYearEnd: 'Not publicly disclosed',
      website: 'https://openai.com/',
      description:
        'OpenAI is an AI research and deployment company whose products and services include ChatGPT, foundation models, developer APIs, enterprise AI offerings, and AI infrastructure partnerships.',
      sourceUrls: [
        'https://openai.com/about/',
        'https://openai.com/our-structure/',
        'https://openai.com/index/introducing-openai/',
        'https://openai.com/careers/',
      ],
      i18n: {
        zh: {
          displayName: 'OpenAI',
          sector: '信息技术',
          industry: '人工智能研究、基础模型、生成式 AI 产品、开发者 API 和 AI 基础设施',
          headquarters: '美国加利福尼亚州旧金山',
          fiscalYearEnd: '未公开披露',
          description:
            'OpenAI 是一家 AI 研究与部署公司，产品和服务包括 ChatGPT、基础模型、开发者 API、企业 AI 产品以及 AI 基础设施合作。',
        },
      },
    }
  );
})(window);
