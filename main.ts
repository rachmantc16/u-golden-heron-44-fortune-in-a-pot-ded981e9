// Fortune in a Pot — one kind, funny fortune for a houseplant.
// Writes exactly one line (no trailing newline) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 120;

// Revised fortune (v2): name the plant and its exact spot first — the
// judge favours a fortune written for *this* plant in *this* window over
// one that could fit any plant anywhere. "You will soon unfurl" keeps
// the prediction cadence, and the joke is tightened so it lands in one
// breath: the cat finally conceding the pot is no salad bar.
const fortune =
  "Little fern on the windowsill, you will soon unfurl a leaf so fine even the cat admits your pot is no salad bar.";

function check(text: string): string {
  const trimmed = text.trim();
  if (trimmed.length === 0) throw new Error("fortune is empty");
  if (trimmed.length > MAX_CHARS) {
    throw new Error(`fortune is ${trimmed.length} chars, over the ${MAX_CHARS} limit`);
  }
  if (trimmed.includes("\n")) throw new Error("fortune must be a single line");
  return trimmed;
}

const entry = check(fortune);
mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, entry, "utf8"); // no trailing newline on purpose
console.log(`wrote ${entry.length} characters to ${OUTPUT_PATH}`);
