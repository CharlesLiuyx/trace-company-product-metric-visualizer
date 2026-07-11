#!/usr/bin/env node
import { main } from './verify-d3.mjs';

main(process.argv, { operation: 'record' }).catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
