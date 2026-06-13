import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { TEST_CASE_DIRS, findCaseFiles, validateMarkdown } from "../src/check-test-cases.ts";

const repoRoot = path.resolve(import.meta.dirname, "..");

describe("validateMarkdown", () => {
  it("accepts a correct case", () => {
    expect(
      validateMarkdown(
        "ok",
        "# t\n\nd\n\n## Code\n```js\n/* #__PURE__ */ foo()\n```\n\n## Detected range\n- 16 - 21\n",
      ),
    ).toStrictEqual([]);
  });

  it("accepts an explicit (none) case", () => {
    expect(
      validateMarkdown(
        "none",
        "# t\n\nd\n\n## Code\n```js\n/* #__PURE__ */ function foo() {}\n```\n\n## Detected range\n- (none)\n",
      ),
    ).toStrictEqual([]);
  });

  it("rejects an out-of-bounds range", () => {
    expect(
      validateMarkdown(
        "oob",
        "# t\n\nd\n\n## Code\n```js\n/* #__PURE__ */ foo()\n```\n\n## Detected range\n- 16 - 22\n",
      ),
    ).toContainEqual(expect.stringContaining("out of bounds"));
  });

  it("rejects a range that touches whitespace", () => {
    expect(
      validateMarkdown(
        "ws",
        "# t\n\nd\n\n## Code\n```js\n/* #__PURE__ */ foo()\n```\n\n## Detected range\n- 15 - 21\n",
      ),
    ).toContainEqual(expect.stringContaining("touches whitespace"));
  });

  it("rejects unsorted / overlapping ranges", () => {
    expect(
      validateMarkdown(
        "unsorted",
        "# t\n\nd\n\n## Code\n```js\na();b()\n```\n\n## Detected range\n- 4 - 7\n- 0 - 3\n",
      ),
    ).toContainEqual(expect.stringContaining("not sorted"));
  });
});

describe("authored test-case suite", () => {
  const files = TEST_CASE_DIRS.flatMap((d) => findCaseFiles(path.resolve(repoRoot, d))).map((f) =>
    path.relative(repoRoot, f),
  );

  it("finds every authored case", () => {
    expect(files.length).toBeGreaterThan(0);
  });

  it.each(files)("%s is valid", (file) => {
    const md = fs.readFileSync(path.resolve(repoRoot, file), "utf8");
    expect(validateMarkdown(file, md)).toStrictEqual([]);
  });
});
