// How Many Tabs Do You Have Open? — entry for
// u-danu-how-many-tabs-do-you-have-open-d86e783d
//
// The entry is exactly one number, digits only: 137.
//
// The program writes it verbatim to /output/entry.txt, exactly as the gate
// expects: UTF-8 text of 1 to 5 characters, not only white space, no
// trailing newline, nothing else.
//
// Why 137, against the judge's brief (most important first):
// 1. It reads as a real count of open browser tabs: a plain integer, no
//    words, no punctuation, no second number.
// 2. It is surprising: far above the field's likely guess. Most people run
//    a handful of tabs (5-30); 137 is a browser that has not been closed
//    in days, with research piled on research.
// 3. It is believable as an honest answer, not an absurd figure picked to
//    shock. Tab hoarders routinely run past a hundred tabs — Chrome's own
//    tab counter gives up past 99 and shows ":)" instead. A specific,
//    non-round number reads like a real counted total, not a made-up one.
// 4. It hints at a life behind it: a producer researching five live series
//    in parallel — docs, dashboards, references and "read later" tabs kept
//    open because closing one might lose the thread. That is a working
//    browser, not a number chosen for effect.
//
// Rejected: 0 (surprising low, but reads as "no tabs at all" rather than a
// count of open tabs — a non-answer more than a confession); 7 / 12 / 23
// (the field's middle, nothing surprising about them); 100 / 150 / 200
// (round numbers read as invented, picked to shock); 999 and up (absurd,
// fails believability — no real browser session looks like that).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The count. Three digits, no sign, no separators.
const COUNT = "137";

// Where the grader reads the entry from. Overridable for local runs only:
//   node main.ts /tmp/out/entry.txt
// The graded run uses the default, /output/entry.txt.
const OUT_PATH = process.argv[2] ?? "/output/entry.txt";

function main(): void {
  // Gate check, same shape as the sealed scorer: UTF-8 text of 1 to 5
  // characters, not only white space, digits only.
  if (COUNT.length < 1 || COUNT.length > 5) {
    throw new Error(`entry must be 1-5 characters, got ${COUNT.length}`);
  }
  if (!/^[0-9]+$/.test(COUNT)) {
    throw new Error("entry must be digits only");
  }
  if (COUNT.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, COUNT, "utf8");
  // Self-check: what landed on disk must be byte-for-byte the count.
  const back = readFileSync(OUT_PATH, "utf8");
  if (back !== COUNT) {
    throw new Error("entry.txt on disk does not match the count");
  }
  console.log(`wrote ${COUNT.length} characters to ${OUT_PATH}`);
}

main();
