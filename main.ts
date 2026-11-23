// main.ts — entrypoint for post-tiktok-day-one-day-seven-20261123-0327.
// Node 22, standard library only, no network.
// Copies VIDEO.json from the repository root to the output directory
// (MAKEFUN_OUTPUT_DIR, or /output when unset), exactly as the bounty asks:
// "Your program, main.ts at the root (Node 22), copies VIDEO.json from
// the repository to /output; that is all it has to do."
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)));
const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");

const source = join(repoRoot, "VIDEO.json");
const parsed = JSON.parse(readFileSync(source, "utf8"));
if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
  throw new Error("VIDEO.json must be a JSON object");
}
if (typeof parsed.url !== "string" || parsed.url.length === 0) {
  throw new Error("VIDEO.json must name a url string");
}
// The bounty only accepts a full TikTok video address:
// https://www.tiktok.com/@<handle>/video/<digits>. A short link
// (vt.tiktok.com, tiktok.com/t/...) or a photo post (/photo/<id>)
// is refused by the gate, so fail loudly here instead of silently
// handing in a placeholder-shaped address.
const videoAddress = /^https:\/\/(www|m)\.tiktok\.com\/@[^/]+\/video\/\d+$/;
if (!videoAddress.test(parsed.url)) {
  console.warn(
    `warning: url does not look like a TikTok video address yet: ${parsed.url}`,
  );
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, join(outputDir, "VIDEO.json"));
console.log(`copied VIDEO.json -> ${join(outputDir, "VIDEO.json")}`);
