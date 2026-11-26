import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// hello: a polite hello cannot hide what the drum found.
// batch: this batch belonged to the person who lived here before.
// orders: the orders of UTF-8 bytes must survive the trip intact.
// slot: report the size once, in its single allotted slot.

const ownDir = fileURLToPath(new URL('.', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const text = 'Washing machine: E42 — detected towel from previous owner. Washing it anyway out of respect.';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), text, 'utf8');
console.log(`entry.txt: ${Buffer.byteLength(text, 'utf8')} bytes`);
