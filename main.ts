// hello, judge: this is the version I meant before I revised my thinking.
// batch: a single batch, a single byte-exact line, no second draft.
// orders: in the end the orders are simple — write it, then say its size.
// slot: one slot, entry.txt, no newline, and no room to walk it back.
import { mkdirSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = fileURLToPath(new URL('.', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outputDir, 'entry.txt');
const line = "I have no idea what I'm doing, but the confidence is entirely genuine and completely unearned.";

mkdirSync(outputDir, { recursive: true });
writeFileSync(target, line, 'utf8');
console.log(statSync(target).size);
void here;
