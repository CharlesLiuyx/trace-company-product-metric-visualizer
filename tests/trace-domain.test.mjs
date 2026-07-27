import test from 'node:test';
import assert from 'node:assert/strict';
import { loadClassicScripts } from './helpers/vm-load.mjs';

const { TraceDomain } = loadClassicScripts(['src/trace-domain.js']);
const {
  clean,
  normalize,
  finiteNumber,
  companyKey,
  formatPeriodFromKey,
  periodFor,
  companyFor,
  periodSortValue,
  periodParts,
  fiscalYearLabel,
  reportingSpanVariantText,
  variantFeatureName,
  currencyCode,
  currencyUnitsPerUsd,
  normalizeSankeyMetricValue,
  strictMoneyDimension,
  strictSankeyMoneyDimension,
  amountValueUsd,
  unitMultiplier,
  MONEY_UNIT_MULTIPLIERS,
  USD_FX_SNAPSHOT,
  buildCompanyMetadataIndex,
} = TraceDomain;

test('clean/normalize collapse whitespace and lowercase', () => {
  assert.equal(clean('  NVIDIA \n Corp  '), 'NVIDIA Corp');
  assert.equal(normalize('  NVIDIA \n Corp  '), 'nvidia corp');
  assert.equal(clean(null), '');
});

test('finiteNumber accepts numeric strings and rejects blanks', () => {
  assert.equal(finiteNumber('4.5'), 4.5);
  assert.equal(finiteNumber(0), 0);
  assert.equal(finiteNumber(''), null);
  assert.equal(finiteNumber('abc'), null);
  assert.equal(finiteNumber(Infinity), null);
});

test('companyKey slugs company names', () => {
  assert.equal(companyKey('JD.com'), 'jd-com');
  assert.equal(companyKey("Yum! Brands"), 'yum-brands');
  assert.equal(companyKey(''), 'company');
});

test('formatPeriodFromKey extracts quarter and fiscal year', () => {
  assert.equal(formatPeriodFromKey('nvidia-q4-fy26'), 'Q4 FY26');
  assert.equal(formatPeriodFromKey('sony-fy25'), 'FY25');
  assert.equal(formatPeriodFromKey('no-period-here'), '');
});

test('periodFor prefers meta.period, then dataset-name dot split, then key', () => {
  assert.equal(periodFor({ meta: { period: 'Q1 FY27' } }), 'Q1 FY27');
  assert.equal(periodFor({ name: 'NVIDIA · Q4 FY26' }), 'Q4 FY26');
  assert.equal(periodFor({ key: 'apple-q2-fy26' }), 'Q2 FY26');
  assert.equal(periodFor({}), 'Unspecified');
});

test('companyFor derives company from key when meta is absent', () => {
  assert.equal(companyFor({ key: 'arm-holdings-q4-fy26' }), 'Arm Holdings');
  assert.equal(companyFor({ name: 'Alphabet · Q1 FY26' }), 'Alphabet');
  assert.equal(companyFor({ company: ' Tesla ' }), 'Tesla');
});

test('periodSortValue orders quarters within a fiscal year', () => {
  const q1 = periodSortValue({ period: 'Q1 FY26' }, 0);
  const q4 = periodSortValue({ period: 'Q4 FY26' }, 0);
  const fy = periodSortValue({ period: 'FY26' }, 0);
  const nextYear = periodSortValue({ period: 'Q1 FY27' }, 0);
  assert.ok(q1 < q4, 'Q1 sorts before Q4');
  assert.ok(q4 < fy, 'annual (5) sorts after Q4');
  assert.ok(fy < nextYear, 'next fiscal year sorts later');
});

test('periodSortValue falls back to periodNote month/year, then fallback', () => {
  const noted = periodSortValue({ period: 'H1', periodNote: 'Ending Mar. 2026' }, 0);
  assert.equal(noted, 2026 * 12 + 3);
  assert.equal(periodSortValue({ period: 'n/a', periodNote: '' }, 42), 42);
});

test('periodParts parses quarterly and annual records', () => {
  const quarterly = periodParts({ period: 'Q3 FY26' });
  assert.equal(quarterly.fiscalYear, 'FY26');
  assert.equal(quarterly.fiscalYearNumber, 2026);
  assert.equal(quarterly.quarterKey, 'Q3');
  assert.equal(quarterly.isAnnual, false);

  const annual = periodParts({ period: 'FY25' });
  assert.equal(annual.quarterKey, 'FY');
  assert.equal(annual.isAnnual, true);

  const fromKey = periodParts({ period: '', dataset: { key: 'nvidia-q2-fy24' } });
  assert.equal(fromKey.quarterNumber, 2);
  assert.equal(fromKey.fiscalYearNumber, 2024);
});

test('interim reporting spans keep their label while an annual record can use explicit YTD', () => {
  const record = {
    period: '9M FY26',
    dataset: { key: 'nintendo-9m-fy26', meta: { period: '9M FY26' } },
  };
  assert.equal(reportingSpanVariantText(record), '9M');
  assert.equal(variantFeatureName(record), '9M');
  assert.equal(variantFeatureName({ period: 'FY26', dataset: { key: 'nintendo-fy26', meta: { period: 'FY26', variant: 'YTD' } } }), 'YTD');
});

test('fiscalYearLabel renders two-digit FY labels', () => {
  assert.equal(fiscalYearLabel(2026), 'FY26');
  assert.equal(fiscalYearLabel(2004), 'FY04');
  assert.equal(fiscalYearLabel(NaN), '');
});

test('currencyCode resolves symbols and aliases', () => {
  assert.equal(currencyCode('$'), 'USD');
  assert.equal(currencyCode('RMB'), 'CNY');
  assert.equal(currencyCode('HK$'), 'HKD');
  assert.equal(currencyCode(''), 'USD');
  assert.equal(currencyCode('CHF'), 'CHF', 'unknown codes pass through');
});

test('amountValueUsd converts via the FX snapshot and money units', () => {
  assert.equal(amountValueUsd(2, '$', 'B'), 2e9);
  const eur = currencyUnitsPerUsd('€');
  assert.ok(Math.abs(amountValueUsd(1, '€', 'B') - 1e9 / eur) < 1e-6);
  const chf = currencyUnitsPerUsd('CHF');
  assert.ok(Math.abs(amountValueUsd(5, 'CHF', 'B') - 5e9 / chf) < 1e-6);
  assert.equal(amountValueUsd('n/a', '$', 'B'), null);
});

test('Sankey cost faces compare SSOT signs by magnitude without erasing other semantic signs', () => {
  assert.equal(normalizeSankeyMetricValue(-11, 'cost'), 11);
  assert.equal(normalizeSankeyMetricValue(11, 'cost'), 11);
  assert.equal(normalizeSankeyMetricValue(-11, 'profit'), -11);
  assert.equal(normalizeSankeyMetricValue(-11, 'source'), -11);
  assert.equal(normalizeSankeyMetricValue('n/a', 'cost'), 'n/a');
});

test('authoritative money dimensions pin every K/M/B/T multiplier independently', () => {
  const expected = { K: 1e3, M: 1e6, B: 1e9, T: 1e12 };
  assert.deepEqual(
    Object.fromEntries(Object.entries(MONEY_UNIT_MULTIPLIERS).sort()),
    Object.fromEntries(Object.entries(expected).sort())
  );
  for (const [unit, usdPerValue] of Object.entries(expected)) {
    assert.deepEqual(
      JSON.parse(JSON.stringify(strictMoneyDimension('$', unit))),
      {
        status: 'valid',
        currency: '$',
        currencyCode: 'USD',
        unit,
        unitMultiplier: usdPerValue,
        currencyUnitsPerUsd: 1,
        usdPerValue,
        fxAsOf: '2026-06-26',
      }
    );
  }
  assert.equal(strictMoneyDimension('', 'B').code, 'missing-reporting-currency');
  assert.equal(strictMoneyDimension(' $', 'B').code, 'missing-reporting-currency');
  assert.equal(strictMoneyDimension('$', ' B ').code, 'unsupported-money-unit');
  assert.equal(strictMoneyDimension('$', true).code, 'unsupported-money-unit');
  assert.equal(strictMoneyDimension('$', 'widgets').code, 'unsupported-money-unit');
  assert.equal(strictMoneyDimension('BTC', 'B').code, 'missing-usd-conversion');
});

test('Sankey display money dimensions cannot contradict Metric SSOT magnitude', () => {
  const financial = { currency: '$', unit: 'B' };
  assert.equal(
    strictSankeyMoneyDimension({ currency: 'USD', unit: 'B' }, financial).status,
    'valid'
  );
  assert.equal(
    strictSankeyMoneyDimension({ currency: '', unit: 'B' }, financial).status,
    'valid',
    'blank Adapter currency is an intentional source-faithful display mode'
  );
  assert.equal(
    strictSankeyMoneyDimension({ currency: '€', unit: 'B' }, financial).code,
    'sankey-money-currency-mismatch'
  );
  assert.equal(
    strictSankeyMoneyDimension({ currency: '$', unit: 'M' }, financial).code,
    'sankey-money-unit-mismatch'
  );
  assert.equal(
    strictSankeyMoneyDimension({ unit: 'B' }, financial).code,
    'invalid-sankey-display-currency'
  );
});

test('the versioned FX snapshot changes only through an explicit fixture update', () => {
  assert.equal(USD_FX_SNAPSHOT.asOf, '2026-06-26');
  assert.equal(USD_FX_SNAPSHOT.base, 'USD');
  assert.equal(USD_FX_SNAPSHOT.source, 'Frankfurter');
  assert.deepEqual(
    JSON.parse(JSON.stringify(USD_FX_SNAPSHOT.unitsPerUsd)),
    {
      USD: 1,
      CHF: 0.80853,
      EUR: 0.87712,
      CNY: 6.7982,
      CNH: 6.7982,
      JPY: 161.65,
      KRW: 1536.47,
      HKD: 7.8421,
      GBP: 0.75654,
      DKK: 6.5372,
      BRL: 5.1689,
      SAR: 3.75,
    }
  );
});

test('unitMultiplier maps money units and defaults to 1', () => {
  assert.equal(unitMultiplier('B'), 1e9);
  assert.equal(unitMultiplier('M'), 1e6);
  assert.equal(unitMultiplier(''), 1);
});

test('buildCompanyMetadataIndex indexes key, name, legal name, and aliases', () => {
  const index = buildCompanyMetadataIndex([
    { key: 'alphabet', name: 'Alphabet', legalName: 'Alphabet Inc.', aliases: ['Google'] },
  ]);
  assert.equal(index.get('google').key, 'alphabet');
  assert.equal(index.get('alphabet inc.').key, 'alphabet');
  assert.equal(index.get('alphabet').key, 'alphabet');
});
