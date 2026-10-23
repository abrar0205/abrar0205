import assert from "node:assert/strict";
import { readFile, mkdir, rm, access } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { build } from "esbuild";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

// Validate the actual rendered document without launching a server or browser.
const cache = resolve("node_modules/.cache/portfolio-check");
await mkdir(cache, { recursive: true });
try {
  const output = resolve(cache, "app.mjs");
  await build({
    entryPoints: ["src/App.tsx"], bundle: true, outfile: output,
    platform: "node", format: "esm", jsx: "automatic",
    external: ["react", "react-dom"], logLevel: "silent",
  });
  const { default: App } = await import(pathToFileURL(output).href);
  const html = renderToStaticMarkup(createElement(App));
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(ids.length, new Set(ids).size, "Element IDs must be unique");
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1, "Exactly one page heading is required");
  for (const [, anchor] of html.matchAll(/href="#([^"]+)"/g)) {
    assert(ids.includes(anchor), `Broken internal link: #${anchor}`);
  }
  for (const [, target] of html.matchAll(/aria-(?:controls|labelledby)="([^"]+)"/g)) {
    for (const id of target.split(" ")) assert(ids.includes(id), `Missing ARIA target: ${id}`);
  }
  for (const tag of html.match(/<a\b[^>]+>/g) ?? []) {
    assert(/href="[^\"]+"/.test(tag), `Link has no destination: ${tag}`);
    if (tag.includes('target="_blank"')) assert(tag.includes('rel="noopener noreferrer"'), "External tabs need safe rel attributes");
  }
  for (const name of ["IgnitionTrace", "EnterpriseIQ", "ModalityOps", "Siemens Energy", "Tata Elxsi"]) {
    assert(html.includes(name), `Missing featured work or experience: ${name}`);
  }
  assert.equal((html.match(/<details\b/g) ?? []).length, 3, "Each featured project needs an expandable case study");
  assert(html.includes('aria-label="Filter additional projects"'), "Project filters need an accessible name");
  assert(html.includes('aria-pressed="true"'), "The initial project filter must expose its selection");
  assert(html.includes('role="status"'), "Interactive updates need accessible feedback");
  assert(html.includes('hidden="" aria-label="Mobile navigation"'), "Mobile navigation must be closed initially");
  assert(html.includes("mailto:abraram.cnr@gmail.com"), "Contact must work without a backend");

  const [readme, index, css] = await Promise.all([
    readFile("README.md", "utf8"), readFile("dist/index.html", "utf8"), readFile("src/index.css", "utf8"),
  ]);
  for (const [name, content] of [["page", html], ["README", readme], ["metadata", index]]) {
    assert(!/\bthesis\b/i.test(content), `Unexpected academic-project framing in ${name}`);
    assert(!/AI systems\. Human signals\./i.test(content), `Stale positioning in ${name}`);
  }
  assert(index.includes('content="summary_large_image"'), "Social previews must be configured");
  assert(index.includes("/abrar0205/social-card.png"), "Social image must use the Pages base path");
  assert(css.includes("prefers-reduced-motion"), "Respect reduced-motion preferences");
  for (const [, path] of index.matchAll(/(?:src|href)="(\/abrar0205\/[^"#]+)"/g)) {
    await access(resolve("dist", path.slice("/abrar0205/".length)));
  }
  await access("dist/social-card.png");
  const metadata = JSON.parse(index.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1] ?? "null");
  assert.equal(metadata?.name, "Abrar Assan Mohamed", "Person metadata must be valid JSON");
  console.log("Content checks passed: anchors, semantics, project evidence, contact links, metadata, and deployed assets.");
} finally {
  await rm(cache, { recursive: true, force: true });
}
