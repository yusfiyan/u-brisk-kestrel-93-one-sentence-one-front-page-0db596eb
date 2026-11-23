// One Sentence, One Front Page — the front-page headline that sums up
// today's world news (Monday 24 November 2026): the COP31 climate talks
// in Antalya collapsed on Sunday after the longest negotiations in history,
// when 194 nations rejected the Antalya Pact because its final text never
// mentioned fossil fuels. One sentence, 161 characters, verified.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Where the house reads the outputs from. In the grader's sandbox the
// environment points at /output; locally, run with
// MAKEFUN_OUTPUT_DIR=<dir> to exercise the same path.
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const ENTRY =
  "COP31 collapses in Antalya on Sunday as 194 nations reject the Antalya Pact, a climate deal that never mentions fossil fuels, after the longest talks in history.";

// The gate only accepts one clean sentence of 1 to 200 characters, so
// refuse to write anything that would fail it instead of shipping it.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  console.error(`entry must be 1 to 200 characters, got ${ENTRY.length}`);
  process.exit(1);
}
if (ENTRY.trim() !== ENTRY || ENTRY.includes("\n")) {
  console.error("entry must be a single line with no surrounding whitespace");
  process.exit(1);
}
if (ENTRY.split(".").filter(Boolean).length !== 1) {
  console.error("entry must be exactly one sentence");
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${ENTRY.length} chars) to ${OUTPUT_DIR}`);
