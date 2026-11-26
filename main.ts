// Entry point for the one-line comedy bounty.
// thinking_revised: hello final, batch shipped; orders closed, slot retired.

import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here: string = fileURLToPath(new URL('.', import.meta.url));
const outputDir: string = resolve(here, process.env.MAKEFUN_OUTPUT_DIR ?? '/output');
const oneLiner: string = "I told my to-do list it was fired. It's still hanging around, asking about references.";

mkdirSync(outputDir, { recursive: true });
writeFileSync(resolve(outputDir, 'entry.txt'), oneLiner, 'utf8');
console.log(`entry.txt: ${Buffer.byteLength(oneLiner, 'utf8')} bytes`);
