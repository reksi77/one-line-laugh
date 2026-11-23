import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one line. Exactly 83 characters, one sentence, no trailing newline.
const LINE =
  "I bought a standing desk to get healthier, and now I sit on a taller chair all day.";

const outFile = join("/output", "entry.txt");

mkdirSync("/output", { recursive: true });
writeFileSync(outFile, LINE, "utf8");

// The deliverable is the file, not the console: nothing is printed.
