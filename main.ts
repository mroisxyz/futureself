// hello, liquidated trader — this little file is your fortune cookie.
// Keep it lean: one line, one file, one log.
// No network, no randomness: a single fortune fills this whole batch.
// No pending orders remain, and no spare slot needs filling.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Our own directory, resolved from this module's URL so cwd never matters.
const here = fileURLToPath(new URL('.', import.meta.url));

// The grader points MAKEFUN_OUTPUT_DIR at an empty writable folder; default to /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Make sure the destination exists, including any missing parents.
mkdirSync(outDir, { recursive: true });

// The fortune itself: losses heal, confidence does not.
const fortune = 'Your losses are temporary. Your confidence in the next trade is, unfortunately, not.';

// One exact write — UTF-8 bytes, with no trailing newline.
const bytes = Buffer.from(fortune, 'utf8');
writeFileSync(join(outDir, 'entry.txt'), bytes);

// Report the byte size once, and only once.
console.log(`entry.txt: ${bytes.length} bytes`);
