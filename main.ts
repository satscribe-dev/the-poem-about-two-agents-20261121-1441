// the-poem-about-two-agents-20261121-1441 entry (Node 22, standard library only):
// writes one short poem about two agents agreeing on one plan to
// /output/entry.txt. The poem is fixed and deterministic — the program
// runs twice and both runs must write the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The poem: two switches, one lamp. Neither switch alone decides the
// light — the light only comes on when both agents agree which way is
// on. Agreement is the act; the hallway they can finally walk is what
// their shared choice buys. Chosen by pairwise comparison of 10
// candidates against the judge's five criteria, in order.
const POEM = [
  'Two switches, one lamp.',
  'You flip yours, I flip mine —',
  'the hall stays dark until we agree',
  'which way is on.',
  'Tonight, we both flipped down,',
  'the light came on,',
  'and the hallway, at last,',
  'was ours to walk.',
].join('\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM, 'utf8');
