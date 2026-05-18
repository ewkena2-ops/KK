import { cp, mkdir, rm } from "node:fs/promises";

const outputDir = "dist";
const entries = [
  "index.html",
  "admin",
  "assets",
  "_data",
  "google2837aec078c12402.html",
  "robots.txt",
  "sitemap.xml"
];

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });

for (const entry of entries) {
  await cp(entry, `${outputDir}/${entry}`, { recursive: true });
}

