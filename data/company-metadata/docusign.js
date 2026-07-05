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
      key: 'docusign',
      name: 'DocuSign',
      legalName: 'Docusign, Inc.',
      aliases: ['Docusign', 'DocuSign, Inc.'],
      ticker: 'DOCU',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 16500000000,
        asOf: '2026-06-30',
        source: 'StockAnalysis (approximate)',
        sourceUrl: 'https://stockanalysis.com/stocks/docu/market-cap/',
      },
      sector: 'Information Technology',
      industry: 'Electronic signature, contract lifecycle management, and intelligent agreement management software',
      founded: '2003',
      headquarters: 'San Francisco, California, United States',
      fiscalYearEnd: 'January 31',
      website: 'https://www.docusign.com/',
      description:
        'DocuSign provides an intelligent agreement management platform, best known for its e-signature product, alongside contract lifecycle management, document generation, and workflow tools for individuals, businesses, and enterprises.',
      sourceUrls: [
        'https://www.docusign.com/company',
        'https://investor.docusign.com/',
      ],
      i18n: {
        zh: {
          displayName: 'DocuSign',
          sector: '信息技术',
          industry: '电子签名、合同全生命周期管理与智能协议管理软件',
          headquarters: '美国加利福尼亚州旧金山',
          fiscalYearEnd: '1 月 31 日',
          description:
            'DocuSign 提供智能协议管理平台，以电子签名产品著称，同时提供合同全生命周期管理、文档生成，以及面向个人、企业和大型组织的工作流工具。',
        },
      },
    }
  );
})(window);
