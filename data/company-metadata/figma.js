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
      key: 'figma',
      name: 'Figma',
      legalName: 'Figma, Inc.',
      ticker: 'FIG',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 9500000000,
        asOf: '2026-06-17',
        source: "Barron's",
        sourceUrl: 'https://www.barrons.com/market-data/stocks/fig',
      },
      sector: 'Information Technology',
      industry:
        'Collaborative product design, interface design, prototyping, whiteboarding, developer handoff, and creative workflow software',
      founded: '2012',
      headquarters: 'San Francisco, California, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.figma.com/',
      description:
        'Figma provides a collaborative design and product-development platform spanning interface design, prototyping, design systems, whiteboarding, developer handoff, and related creative workflows for teams building digital products.',
      sourceUrls: [
        'https://www.figma.com/',
        'https://www.figma.com/about/',
        'https://www.sec.gov/edgar/browse/?CIK=FIG',
        'https://www.marketwatch.com/story/figma-shares-rally-after-strong-first-earnings-report-since-ipo-830dc72a',
        'https://www.barrons.com/market-data/stocks/fig',
      ],
      i18n: {
        zh: {
          displayName: 'Figma',
          sector: '信息技术',
          industry: '协作式产品设计、界面设计、原型、白板、开发交付和创意工作流软件',
          headquarters: '美国加利福尼亚州旧金山',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Figma 提供协作式设计和产品开发平台，覆盖界面设计、原型、设计系统、白板、开发交付以及团队构建数字产品所需的相关创意工作流。',
        },
      },
    }
  );
})(window);
