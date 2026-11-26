import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

// thinking_revised (draft 2): Say hello, ship one batch of office orders into a
// single meeting slot, and let the shared nod carry the whole punchline.
// Keep the entry byte-exact, with no trailing newline.

const entry =
  "The meeting could have been an email, but then nobody could have nodded at it together.";

const here = fileURLToPath(new URL(".", import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

async function main(): Promise<void> {
  const target = path.isAbsolute(outDir) ? outDir : path.resolve(here, outDir);
  await mkdir(target, { recursive: true });
  const bytes = Buffer.byteLength(entry, "utf8");
  await writeFile(path.join(target, "entry.txt"), entry, "utf8");
  console.log(`wrote entry.txt (${bytes} bytes)`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
