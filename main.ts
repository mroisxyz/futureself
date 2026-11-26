// thinking_revised: hello to this batch of orders; one slot, one honest line of code.
// thinking_revised: the excuse stays byte-exact, with no trailing newline after its final period.
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const here = fileURLToPath(new URL(".", import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const excuse = "I can't come in. My alarm developed opinions about my life choices and I'm respecting its boundaries.";

async function main() {
  await mkdir(outputDir, { recursive: true });
  const target = join(outputDir, "entry.txt");
  await writeFile(target, excuse, "utf8");
  console.log(`entry.txt: ${Buffer.byteLength(excuse, "utf8")} bytes (from ${here})`);
}

await main();
