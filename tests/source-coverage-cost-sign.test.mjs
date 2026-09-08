import test from 'node:test';
import assert from 'node:assert/strict';
import { assertSourceCoverageAuthoredValues } from '../scripts/lib/source-coverage-authored.mjs';
function fixture(type='cost', value=-1187) {
 const coverage={adapter:'income-statement',datasetKey:'nutanix-test',items:[{sourceId:'source:tax',sourceClass:'financial-value',amount:{value:'1187',unit:'M'},ssotRef:{path:'costs.tax',id:'tax'},metricTargets:['tax']}]};
 const loadedData={records:[{key:'nutanix-test',unit:'M',decimals:0,costs:{tax:{id:'tax',value}}}],datasets:[{key:'nutanix-test',meta:{unit:'M',decimals:0},nodes:[{id:'tax',type,value:1187,valueText:'$1,187M'}]}]};return {coverage,loadedData};
}
test('tax benefit accounting sign reconciles with positive cost-face magnitude',()=>{const {coverage,loadedData}=fixture();assert.equal(assertSourceCoverageAuthoredValues(coverage,{loadedData}).checked,1)});
test('non-cost sign reversal and different tax magnitude remain errors',()=>{for(const [type,value]of [['profit',-1187],['cost',-1186]]){const{coverage,loadedData}=fixture(type,value);assert.throws(()=>assertSourceCoverageAuthoredValues(coverage,{loadedData}),/does not match SSOT/);}});
