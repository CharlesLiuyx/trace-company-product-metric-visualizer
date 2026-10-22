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
      key: 'semrush',
      name: 'Semrush',
      legalName: 'SEMrush Holdings, Inc.',
      aliases: ['SEMrush', 'SEMR'],
      ticker: 'SEMR',
      exchange: 'NYSE',
      sector: 'Information Technology',
      industry: 'Online visibility and marketing SaaS: SEO, generative engine optimization, content marketing, advertising, social media, and competitive intelligence',
      founded: '2008',
      headquarters: 'Boston, Massachusetts, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.semrush.com/',
      description:
        'Semrush is an online visibility management SaaS platform whose tools cover search engine and AI search optimization, content marketing, advertising, social media, and competitive research. It listed on the NYSE in 2021 and became a wholly owned subsidiary of Adobe on April 28, 2026.',
      sourceUrls: [
        'https://www.semrush.com/',
        'https://www.sec.gov/Archives/edgar/data/1831840/000162828025009448/semr-20241231.htm',
        'https://www.semrush.com/news/455963-faq-for-customers-adobe-acquires-semrush/',
      ],
      i18n: {
        zh: {
          displayName: 'Semrush',
          sector: '信息技术',
          industry: '在线可见度与营销 SaaS：SEO、生成式引擎优化、内容营销、广告、社交媒体和竞争情报',
          headquarters: '美国马萨诸塞州波士顿',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Semrush 是一家在线可见度管理 SaaS 平台，工具覆盖搜索引擎与 AI 搜索优化、内容营销、广告、社交媒体和竞争研究。公司于 2021 年在纽交所上市，并于 2026 年 4 月 28 日成为 Adobe 的全资子公司。',
        },
      },
    }
  );
})(window);
