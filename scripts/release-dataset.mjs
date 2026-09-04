#!/usr/bin/env node
import { releasePublished } from './lib/workflow-publication.mjs';
const [publishedDigest, target, retryOf, ...extra] = process.argv.slice(2).filter((arg) => arg !== '--');
if (extra.length) throw new Error('Usage: release:dataset -- <published-digest> site|standalone [failed-attempt-id]');
const result = await releasePublished({ publishedDigest, target, retryOf });
console.log(JSON.stringify(result, null, 2));
if (result.state === 'RELEASE_FAILED') process.exitCode = 1;
