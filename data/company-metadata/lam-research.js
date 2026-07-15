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
      key: 'lam-research',
      name: 'Lam Research',
      legalName: 'Lam Research Corporation',
      ticker: 'LRCX',
      exchange: 'NASDAQ',
      marketCap: {
        valueUsd: 444890000000,
        asOf: '2026-07-10',
        source: 'Capital.com',
        sourceUrl: 'https://capital.com/en-int/markets/shares/lam-research-corporation-share-price/market-cap',
      },
      sector: 'Information Technology',
      industry: 'Semiconductor manufacturing equipment and services',
      founded: '1980',
      headquarters: 'Fremont, California, United States',
      fiscalYearEnd: 'Last Sunday in June',
      website: 'https://www.lamresearch.com/',
      description:
        'Lam Research develops wafer-fabrication equipment and services for semiconductor manufacturers, including deposition, etch, clean, and related process technologies.',
      sourceUrls: [
        'https://www.lamresearch.com/',
        'https://investor.lamresearch.com/quarterly-results',
        'https://newsroom.lamresearch.com/Lam-Celebrates-40-Years',
        'https://capital.com/en-int/markets/shares/lam-research-corporation-share-price/market-cap',
      ],
      i18n: {
        zh: {
          displayName: '泛林集团',
          sector: '信息技术',
          industry: '半导体制造设备与服务',
          headquarters: '美国加利福尼亚州弗里蒙特',
          fiscalYearEnd: '6 月最后一个星期日',
          description:
            '泛林集团为半导体制造商开发晶圆制造设备与服务，覆盖沉积、刻蚀、清洗及相关制程技术。',
        },
      },
    }
  );
})(window);
