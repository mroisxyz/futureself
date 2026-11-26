import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// hello from the last batch of orders, a slot spent on false comfort.
const here = fileURLToPath(new URL('.', import.meta.url));
void here;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const lastWords = "Don't worry, I've saved everything to a folder nobody will ever open.";

await mkdir(outputDir, { recursive: true });
await writeFile(join(outputDir, 'entry.txt'), lastWords, 'utf8');
console.log(`entry.txt: ${Buffer.byteLength(lastWords, 'utf8')} bytes`);
