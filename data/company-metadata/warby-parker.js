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
      key: 'warby-parker',
      name: 'Warby Parker',
      legalName: 'Warby Parker Inc.',
      ticker: 'WRBY',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 3420000000,
        asOf: '2026-07-15',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/wrby/market-cap/',
      },
      sector: 'Health Care',
      industry: 'Ophthalmic goods, eyewear retail, vision care, and optical services',
      founded: '2010',
      headquarters: 'New York, New York, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.warbyparker.com/',
      description:
        'Warby Parker designs and sells prescription glasses, sunglasses, contacts, and related vision-care services through an integrated retail and e-commerce platform.',
      sourceUrls: [
        'https://investors.warbyparker.com/overview/',
        'https://investors.warbyparker.com/resources/investor-faqs/default.aspx',
        'https://investors.warbyparker.com/financials/quarterly-results/default.aspx',
        'https://www.sec.gov/Archives/edgar/data/1504776/000150477625000033/wrby-20250930.htm',
        'https://stockanalysis.com/stocks/wrby/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'Warby Parker',
          sector: '医疗保健',
          industry: '眼科用品、眼镜零售、视力保健与验光服务',
          headquarters: '美国纽约州纽约市',
          fiscalYearEnd: '12 月 31 日',
          description:
            'Warby Parker 通过一体化零售和电商平台设计并销售处方眼镜、太阳镜、隐形眼镜，并提供相关视力保健服务。',
        },
      },
    }
  );
})(window);
