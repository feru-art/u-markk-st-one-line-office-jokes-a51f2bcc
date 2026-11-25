// One-Line Office Jokes — entry slot 1 (V3, pemenang adu lokal 10/10).
// Writes a single deterministic line to /output/entry.txt:
// a printer that betrays its owner on the last page, then prints a
// perfect copy of the error message. 109 characters, one line, UTF-8.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The printer waited until the last page of my report to jam, then printed a perfect copy of the error message.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
