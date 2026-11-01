# Company metadata and product catalog

This file owns the field format of the company-profile SSOT
`data/company-metadata/<company-key>.js` and the Product catalog
`data/products.js`. Shared contracts are in the [schema index](../schema.md).

## Company metadata

Add or update the company record before registering a company's first dataset,
so Table mode shows company context separately from period financials.

```js
{
  key: 'nvidia',
  name: 'NVIDIA',
  legalName: 'NVIDIA Corporation',
  ticker: 'NVDA',
  exchange: 'NASDAQ',
  marketCap: {
    valueUsd: 3000000000000,
    asOf: '2026-06-18',
    source: 'StockAnalysis',
    sourceUrl: 'https://stockanalysis.com/stocks/nvda/market-cap/',
  },
  sector: 'Information Technology',
  industry: 'Semiconductors',
  founded: '1993',
  headquarters: 'Santa Clara, California, United States',
  fiscalYearEnd: 'Last Sunday in January',
  website: 'https://www.nvidia.com/',
  description: 'Short company profile used by Table mode.',
  sourceUrls: ['https://www.nvidia.com/en-us/about-nvidia/'],
  i18n: {
    zh: {
      sector: '信息技术',
      industry: '半导体',
      headquarters: '美国加利福尼亚州圣克拉拉',
      fiscalYearEnd: '1 月最后一个星期日',
      description: 'Table 模式使用的本地化公司简介。',
    },
  },
}
```

Verification requires `key`, `name`, `sector`, `industry`, `description` and a
non-empty `sourceUrls` array. Fill the other fields from reliable public
sources; keep `founded`, `headquarters`, `fiscalYearEnd`, `website`, `ticker`,
`exchange` and public-company `marketCap` current enough for the Company list
sort modes ([README](../../README.md#company-list-sort-modes)) and Table display. `aliases`
only match financial records to metadata. Never duplicate period financials
here; latest revenue, currency, unit and net profit belong in
[the Income Statement SSOT](income-statement.md).

## Product catalog

`data/products.js` is the Product SSOT. It is an empty catalog because Product
is not yet a rendered entity; future Product records and time-varying
Company/Product ownership links go here, never inside Sankey Adapters.

```js
{
  schemaVersion: 1,
  products: [
    { key: 'youtube', name: 'YouTube', type: 'product', serviceType: 'platform',
      description: 'Product-level profile used by future Product views.',
      sourceUrls: ['https://www.youtube.com/'] },
  ],
  companyProductRelationships: [
    { companyKey: 'alphabet', productKey: 'youtube', relationship: 'owns',
      validFrom: '2006-11-13', validTo: null, sourceUrls: ['https://abc.xyz/'], confidence: 1 },
  ],
}
```

A revenue line may refer to a product or service family, but the first-class
Product identity and its Company relationship belong in `data/products.js`.
