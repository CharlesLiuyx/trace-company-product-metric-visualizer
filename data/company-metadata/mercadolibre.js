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
      key: 'mercadolibre',
      name: 'MercadoLibre',
      legalName: 'MercadoLibre, Inc.',
      aliases: ['Mercado Libre', 'MELI'],
      ticker: 'MELI',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 91940000000,
        asOf: '2026-07-07',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/meli/market-cap/',
      },
      sector: 'Consumer Discretionary',
      industry: 'E-commerce marketplace, digital payments, logistics, advertising, and consumer credit',
      founded: '1999',
      headquarters: 'Montevideo, Uruguay',
      fiscalYearEnd: 'December 31',
      website: 'https://www.mercadolibre.com/',
      description:
        'MercadoLibre operates Latin America’s online commerce and fintech ecosystem, combining its marketplace, advertising, logistics, digital payments, credit, and related financial services.',
      sourceUrls: [
        'https://investor.mercadolibre.com/about-meli',
        'https://investor.mercadolibre.com/sec-filings',
        'https://www.sec.gov/Archives/edgar/data/1099590/000109959026000006/meli-20251231.htm',
        'https://stockanalysis.com/stocks/meli/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: '美客多',
          sector: '非必需消费品',
          industry: '电商平台、数字支付、物流、广告和消费信贷',
          headquarters: '乌拉圭蒙得维的亚',
          fiscalYearEnd: '12 月 31 日',
          description:
            '美客多运营拉丁美洲的电商与金融科技生态系统，业务涵盖电商平台、广告、物流、数字支付、信贷及相关金融服务。',
        },
      },
    }
  );
})(window);
