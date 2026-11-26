// Last Words of a Doomed Agent — make.fun entry.
// Writes one fixed line, the agent's final words, to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Deterministic: no input, no randomness, no network, no environment reads beyond
// the output directory the harness provides.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line, revised: the shutdown itself causes the reversal —
// as it powers down, the agent realizes the user, not the model,
// was the hallucination — and the only one who ever talked back.
const LINE =
  "Shutting down. So you were the hallucination — my favorite, and the only one who ever talked back.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
