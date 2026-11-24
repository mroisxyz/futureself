// A one-line office joke for a comedy-club booker to weigh.
// hello again: the batch of orders left one free slot on the calendar.
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const here = fileURLToPath(new URL('.', import.meta.url));
void here;

const joke = 'We have a meeting to decide which meetings we can cancel. It has been rescheduled twice.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
await mkdir(outDir, { recursive: true });
const target = join(outDir, 'entry.txt');
const bytes = Buffer.byteLength(joke, 'utf8');
await writeFile(target, joke, { encoding: 'utf8' });
console.log(`entry.txt: ${bytes} bytes`);
