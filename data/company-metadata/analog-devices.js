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
      key: 'analog-devices',
      name: 'Analog Devices',
      legalName: 'Analog Devices, Inc.',
      aliases: ['ADI'],
      ticker: 'ADI',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 183710000000,
        asOf: '2026-07-02',
        source: 'StockAnalysis',
        sourceUrl: 'https://stockanalysis.com/stocks/adi/market-cap/',
      },
      sector: 'Information Technology',
      industry:
        'Semiconductors, analog, mixed-signal, power management, data conversion, signal processing, Intelligent Edge, automation, robotics, mobility, healthcare, energy, and data centers',
      founded: '1965',
      headquarters: 'Wilmington, Massachusetts, United States',
      fiscalYearEnd: 'Saturday closest to the last day in October',
      website: 'https://www.analog.com/',
      description:
        'Analog Devices is a global semiconductor company combining analog, digital, AI, and software technologies for Intelligent Edge applications across automation, robotics, mobility, healthcare, energy, and data centers.',
      sourceUrls: [
        'https://investor.analog.com/about-adi/company-overview',
        'https://investor.analog.com/governance/leadership-team',
        'https://investor.analog.com/static-files/51ff6918-30d4-40d9-81ad-5e3bb2b2658a',
        'https://stockanalysis.com/stocks/adi/market-cap/',
      ],
      i18n: {
        zh: {
          displayName: 'Analog Devices',
          sector: '信息技术',
          industry:
            '半导体、模拟芯片、混合信号、电源管理、数据转换、信号处理、智能边缘、自动化、机器人、移动出行、医疗健康、能源与数据中心',
          headquarters: '美国马萨诸塞州威尔明顿',
          fiscalYearEnd: '最接近 10 月最后一天的星期六',
          description:
            'Analog Devices 是一家全球半导体公司，将模拟、数字、AI 与软件技术结合，用于自动化、机器人、移动出行、医疗健康、能源和数据中心等智能边缘应用。',
        },
      },
    }
  );
})(window);
