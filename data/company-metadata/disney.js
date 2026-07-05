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
      key: 'disney',
      name: 'Disney',
      legalName: 'The Walt Disney Company',
      ticker: 'DIS',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 171550000000,
        asOf: '2026-06-26',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/dis/market-cap/',
      },
      sector: 'Communication Services',
      industry: 'Entertainment, media, streaming, sports, theme parks, resorts, cruises, consumer products, and content licensing',
      founded: '1923-10-16',
      headquarters: 'Burbank, California, United States',
      fiscalYearEnd: 'Saturday nearest September 30',
      website: 'https://thewaltdisneycompany.com/',
      description:
        'The Walt Disney Company is a diversified international family entertainment and media enterprise spanning Disney Entertainment, ESPN, and Disney Experiences, including streaming, studios, television, sports media, theme parks, resorts, cruises, and consumer products.',
      sourceUrls: [
        'https://thewaltdisneycompany.com/about/',
        'https://investors.thewaltdisneycompany.com/',
        'https://investors.thewaltdisneycompany.com/financials/quarterly-results/default.aspx',
        'https://s206.q4cdn.com/979796730/files/doc_financials/2026/q2/q2-fy26-earnings.pdf',
        'https://stockanalysis.com/stocks/dis/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: '迪士尼',
          sector: '通信服务',
          industry: '娱乐、媒体、流媒体、体育、主题乐园、度假区、邮轮、消费品和内容授权',
          headquarters: '美国加利福尼亚州伯班克',
          fiscalYearEnd: '最接近 9 月 30 日的星期六',
          description:
            'The Walt Disney Company 是一家多元化国际家庭娱乐和媒体企业，业务覆盖 Disney Entertainment、ESPN 和 Disney Experiences，包括流媒体、影视制作、电视、体育媒体、主题乐园、度假区、邮轮和消费品。',
        },
      },
    }
  );
})(window);
