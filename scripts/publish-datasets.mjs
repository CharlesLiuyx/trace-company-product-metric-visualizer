#!/usr/bin/env node
import { planAssetPublication, publishAssetPlan } from './lib/workflow-publication.mjs';
const args = process.argv.slice(2).filter((arg) => arg !== '--');
const [command, ...rest] = args;
if (command === 'plan' && rest.length) console.log(JSON.stringify(await planAssetPublication(rest), null, 2));
else if (command === 'commit' && rest.length === 1) console.log(JSON.stringify(await publishAssetPlan(rest[0]), null, 2));
else throw new Error('Usage: pnpm publish:datasets -- plan <build-id> [...] | commit <plan-digest>');
