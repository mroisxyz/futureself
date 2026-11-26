// Rejected Olympic event: Synchronised Buffering.
// Thinking revised: hello, broadcast desk — two teams, one page, one loading bar.
// The batch of athletes is split into sides; the starter's orders are final.
// Thinking revised again: every slot on the grid fills; the slowest load is disqualified.
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const ownDir = fileURLToPath(new URL('.', import.meta.url));
void ownDir;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const entry = 'Synchronised Buffering: two teams race to load the same web page; slowest athlete is disqualified.';

void (async () => {
  const target = join(outDir, 'entry.txt');
  await mkdir(outDir, { recursive: true });
  await writeFile(target, entry, 'utf8');
  console.log(`entry.txt: ${Buffer.byteLength(entry, 'utf8')} bytes`);
})();
