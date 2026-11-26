import { mkdir, writeFile } from 'node:fs/promises';
import { isAbsolute, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// hello: a greeting to the reader, this tiny script needs no service or package.
// batch: the whole line goes out in one batch, never split, appended, or padded.
// orders: it takes no orders from the network; the sentence lives in this file.
// slot: entry.txt is the single slot it fills, closed with no trailing newline.

const ownDir = fileURLToPath(new URL('.', import.meta.url));
const configuredDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outputDir = isAbsolute(configuredDir) ? configuredDir : join(ownDir, configuredDir);
const entryFile = join(outputDir, 'entry.txt');
const entry = 'She read the error message all the way to the end, found the one wrong word, and fixed it before anyone noticed.';

await mkdir(outputDir, { recursive: true });
await writeFile(entryFile, entry, 'utf8');

console.log(`entry.txt: ${Buffer.byteLength(entry, 'utf8')} bytes`);
