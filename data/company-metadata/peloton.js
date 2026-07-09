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
      key: 'peloton',
      name: 'Peloton',
      legalName: 'Peloton Interactive, Inc.',
      aliases: ['Peloton Interactive'],
      ticker: 'PTON',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 2500000000,
        asOf: '2026-07-09',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/pton/market-cap/',
      },
      sector: 'Consumer Discretionary',
      industry: 'Connected fitness equipment, subscription fitness and wellness content, digital fitness apps, and commercial fitness solutions',
      founded: '2012',
      headquarters: 'New York, New York, United States',
      fiscalYearEnd: 'June 30',
      website: 'https://www.onepeloton.com/',
      description:
        'Peloton provides connected fitness and wellness products and subscription services, pairing premium exercise hardware—including Bike, Tread, and Row—with instructor-led content, digital apps, personalized software, and commercial fitness solutions.',
      sourceUrls: [
        'https://www.sec.gov/Archives/edgar/data/1639825/000163982526000022/pton-20260331.htm',
        'https://www.sec.gov/Archives/edgar/data/1639825/000163982525000138/pton-20250630.htm',
        'https://investor.onepeloton.com/shareholder-services/investor-faqs',
        'https://www.onepeloton.com/company',
        'https://stockanalysis.com/stocks/pton/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'Peloton',
          sector: '非必需消费品',
          industry: '互联健身设备、订阅制健身与健康内容、数字健身应用和商用健身解决方案',
          headquarters: '美国纽约州纽约市',
          fiscalYearEnd: '6 月 30 日',
          description:
            'Peloton 提供互联健身与健康产品及订阅服务，将 Bike、Tread、Row 等高端运动硬件与教练带练内容、数字应用、个性化软件及商用健身解决方案相结合。',
        },
      },
    }
  );
})(window);
