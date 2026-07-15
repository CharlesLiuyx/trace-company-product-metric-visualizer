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
      key: 'gm',
      name: 'GM',
      legalName: 'General Motors Company',
      ticker: 'GM',
      exchange: 'NYSE',
      marketCap: {
        valueUsd: 69176000000,
        asOf: '2026-07-13',
        source: 'Yahoo Finance',
        sourceUrl: 'https://finance.yahoo.com/quote/GM/',
      },
      sector: 'Consumer Discretionary',
      industry: 'Automobiles and automotive financial services',
      founded: '1908',
      headquarters: 'Detroit, Michigan, United States',
      fiscalYearEnd: 'December 31',
      website: 'https://www.gm.com/',
      description:
        "General Motors Company designs, builds, and sells trucks, crossovers, and cars worldwide, and provides software-enabled services, subscriptions, and automotive financing. Its business is organized into GM North America, covering the Chevrolet, Buick, GMC, and Cadillac brands; GM International, serving markets outside North America; Corporate, which captures centrally managed interest, taxes, and other costs outside the reportable segments; and GM Financial, GM's global captive finance arm providing dealer and customer financing, leasing, and insurance.",
      sourceUrls: [
        'https://www.gm.com/',
        'https://investor.gm.com/',
        'https://www.sec.gov/Archives/edgar/data/1467858/000146785826000013/gm-20251231.htm',
      ],
      i18n: {
        zh: {
          displayName: '通用汽车',
          sector: '非必需消费品',
          industry: '汽车及汽车金融服务',
          headquarters: '美国密歇根州底特律',
          fiscalYearEnd: '12 月 31 日',
          description:
            '通用汽车公司在全球设计、制造并销售皮卡、跨界车和轿车，同时提供软件服务、订阅及汽车金融服务。其业务分为通用北美（GM North America，涵盖雪佛兰、别克、GMC 和凯迪拉克品牌）、通用国际（GM International，服务北美以外市场）、公司及其他（Corporate，核算集中管理的利息、税项等未计入各报告分部的收支），以及通用金融（GM Financial，公司旗下的全球专属汽车金融子公司，提供经销商与客户融资、租赁及保险服务）。',
        },
      },
    }
  );
})(window);
