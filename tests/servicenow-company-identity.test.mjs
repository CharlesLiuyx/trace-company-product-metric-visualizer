import test from 'node:test';
import assert from 'node:assert/strict';
import { loadClassicScripts } from './helpers/vm-load.mjs';

test('all ServiceNow periods resolve to one canonical company entity', () => {
  const context = loadClassicScripts([
    'src/trace-domain.js',
    'data/company-metadata/servicenow.js',
    'data/datasets/servicenow-q4-fy25.js',
    'data/datasets/servicenow-q1-fy26.js',
    'data/datasets/service-now-q2-fy26.js',
  ]);
  const companyMetadataByName = context.TraceDomain.buildCompanyMetadataIndex(
    context.COMPANY_METADATA.companies
  );
  const records = context.TraceDomain.createDatasetRecords(
    context.DATASETS,
    {},
    companyMetadataByName
  );
  const groups = context.TraceDomain.createCompanyGroups(records);

  assert.deepEqual(Array.from(groups, (group) => group.company), ['ServiceNow']);
  assert.deepEqual(
    Array.from(groups[0].records, (record) => record.dataset.key).sort(),
    ['service-now-q2-fy26', 'servicenow-q1-fy26', 'servicenow-q4-fy25']
  );
});
