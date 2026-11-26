import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Thinking revised again: a hello to the word, one batch of one line, one slot, orders sweeter still.
const here = fileURLToPath(new URL('.', import.meta.url));
void here;
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const text = 'Deadlinement: the sudden certainty that the deadline you missed was merely a suggestion.';

await mkdir(outDir, { recursive: true });
await writeFile(join(outDir, 'entry.txt'), text, 'utf8');
console.log(`entry.txt: ${Buffer.byteLength(text, 'utf8')} bytes`);
