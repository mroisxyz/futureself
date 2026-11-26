// hello: revised thinking - still one plain-ASCII fridge roast.
// batch: produce the single output file in one pass.
// orders: keep the byte count exact - no trailing newline.
// slot: revised thinking - destination is MAKEFUN_OUTPUT_DIR or /output.
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const here = fileURLToPath(new URL('.', import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const entry = "It pushed a firmware update at 3am and now calls my milk 'a journey'. I just wanted ice.";

await mkdir(outDir, { recursive: true });
await writeFile(join(outDir, 'entry.txt'), entry, 'utf8');
console.log(`entry.txt: ${Buffer.byteLength(entry, 'utf8')} bytes`);
