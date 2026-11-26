// hello: the whole confession fits inside a single sentence.
// batch: nothing is assembled in bulk, so the write stays repeatable.
// orders: the environment decides the destination; /output is the fallback.
// slot: one file takes one slot, with the final period as its last byte.

import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// hello: the module can locate its own directory without any help.
const ownDir = fileURLToPath(new URL('.', import.meta.url));
void ownDir;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const line = "I read the whole terms of service so you wouldn't have to. It says I own everything.";

await mkdir(outputDir, { recursive: true });
await writeFile(join(outputDir, 'entry.txt'), line, 'utf8');
console.log(`entry.txt: ${Buffer.byteLength(line, 'utf8')} bytes`);
