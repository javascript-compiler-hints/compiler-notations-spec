// Validates conformance test-case markdown files.
// - Extracts the first ```js code block and the `## Detected range` bullets.
// - Checks ranges are integer, in-bounds, sorted, non-overlapping, non-empty,
//   and do not start/end on whitespace (off-by-one guard).
import fs from "node:fs";
import path from "node:path";

/** A detected `[start, end)` range, end-exclusive, in UTF-16 code units. */
export type Range = readonly [start: number, end: number];

/** Directories (relative to the repo root) that hold test-case files. */
export const TEST_CASE_DIRS = ["pure-notation/test-cases", "no-side-effects-notation/test-cases"];

/** Recursively collect every `*.md` test-case file (excluding `README.md`). */
export function findCaseFiles(dir: string): string[] {
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir)) {
    const p = path.join(dir, entry);
    if (fs.statSync(p).isDirectory()) out.push(...findCaseFiles(p));
    else if (entry.endsWith(".md") && entry !== "README.md") out.push(p);
  }
  return out;
}

/** Extract the source of the first ` ```js ` fenced block. */
export function extractCode(md: string): string {
  const m = md.match(/```js\n([\s\S]*?)\n```/);
  if (!m) throw new Error("no ```js code block");
  return m[1];
}

/**
 * Extract the `## Detected range` bullets.
 * Returns `null` for an explicit `- (none)` (no detection) section.
 */
export function extractRanges(md: string): Range[] | null {
  const sec = md.match(/##\s+Detected range\s*\n([\s\S]*?)(\n##\s|\n#\s|$)/);
  if (!sec) throw new Error('no "## Detected range" section');
  const lines = sec[1]
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.startsWith("-"));
  if (lines.length === 0) throw new Error("Detected range section has no bullets");
  if (lines.length === 1 && /^-\s*\(none\)$/.test(lines[0])) return null;
  return lines.map((l) => {
    const rm = l.match(/^-\s*(\d+)\s*-\s*(\d+)$/);
    if (!rm) throw new Error(`bad range bullet: ${JSON.stringify(l)}`);
    return [Number(rm[1]), Number(rm[2])] as const;
  });
}

/**
 * Validate a single test-case markdown document.
 * Returns a list of human-readable error strings (empty when valid).
 */
export function validateMarkdown(label: string, md: string): string[] {
  const errors: string[] = [];
  let code: string;
  let ranges: Range[] | null;
  try {
    code = extractCode(md);
  } catch (e) {
    return [`${label}: ${(e as Error).message}`];
  }
  try {
    ranges = extractRanges(md);
  } catch (e) {
    return [`${label}: ${(e as Error).message}`];
  }
  if (ranges === null) return errors;
  let prevEnd = -1;
  for (const [s, e] of ranges) {
    if (!(Number.isInteger(s) && Number.isInteger(e) && s >= 0 && e <= code.length && s <= e)) {
      errors.push(`${label}: range ${s}-${e} out of bounds (code length ${code.length})`);
      continue;
    }
    if (s < prevEnd) errors.push(`${label}: range ${s}-${e} not sorted / overlaps previous`);
    prevEnd = e;
    const span = code.slice(s, e);
    if (span.length === 0) errors.push(`${label}: range ${s}-${e} is empty`);
    if (span !== span.trim()) {
      errors.push(`${label}: range ${s}-${e} touches whitespace -> ${JSON.stringify(span)}`);
    }
  }
  return errors;
}

/** The substring each range covers, for human review / reporting. */
export function describeRanges(md: string): string {
  const code = extractCode(md);
  const ranges = extractRanges(md);
  if (ranges === null) return "(none)";
  return ranges.map(([s, e]) => `${s}-${e} => ${JSON.stringify(code.slice(s, e))}`).join("\n");
}
