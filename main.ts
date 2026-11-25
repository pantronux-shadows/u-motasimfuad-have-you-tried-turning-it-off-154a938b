// "Have You Tried Turning It Off?" — one line a hopeless tech support agent
// gives a desperate customer. Writes the entry text to /output/entry.txt.
// Deterministic: the same bytes every run.
import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY_LINE =
  "Have you tried turning it off and leaving it off? Not one machine I've fixed that way has ever called back.";

const OUT_PATH = '/output/entry.txt';

mkdirSync('/output', { recursive: true });
writeFileSync(OUT_PATH, ENTRY_LINE, 'utf8');
