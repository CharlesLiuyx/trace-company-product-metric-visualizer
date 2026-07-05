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
      key: 'anthropic',
      name: 'Anthropic',
      legalName: 'Anthropic PBC',
      aliases: ['Anthropic, PBC'],
      ticker: '',
      exchange: '',
      marketCap: null,
      sector: 'Information Technology',
      industry:
        'Artificial intelligence research, foundation models, AI assistants, developer APIs, agentic coding tools, and AI safety research',
      founded: '2021',
      headquarters: 'San Francisco, California, United States',
      fiscalYearEnd: 'Not publicly disclosed',
      website: 'https://www.anthropic.com/',
      description:
        'Anthropic is a public benefit corporation and AI safety and research company that builds reliable, interpretable, and steerable AI systems, including Claude models, Claude applications, developer APIs, and agentic AI tools.',
      sourceUrls: [
        'https://www.anthropic.com/company',
        'https://www.anthropic.com/',
        'https://claude.com/',
        'https://en.wikipedia.org/wiki/Anthropic',
      ],
      i18n: {
        zh: {
          displayName: 'Anthropic',
          sector: '信息技术',
          industry: '人工智能研究、基础模型、AI 助手、开发者 API、智能体编程工具和 AI 安全研究',
          headquarters: '美国加利福尼亚州旧金山',
          fiscalYearEnd: '未公开披露',
          description:
            'Anthropic 是一家公益公司和 AI 安全研究公司，构建可靠、可解释、可控的 AI 系统，产品包括 Claude 模型、Claude 应用、开发者 API 和智能体 AI 工具。',
        },
      },
    }
  );
})(window);
