// The GPS Swears It Was a Shortcut
// Writes the GPS's one-line excuse to /output/entry.txt (deterministic).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "In my defense, the map clearly showed a road through that wedding, I just didn't realize the bride was the roadblock.";

// Guard: the entry must be a single non-empty line within the
// competition's 200-character limit, so a bad edit fails loudly
// instead of silently writing an invalid entry.
if (ENTRY.length === 0 || ENTRY.length > 200 || ENTRY.includes("\n")) {
  throw new Error(`Invalid entry line: ${ENTRY.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
