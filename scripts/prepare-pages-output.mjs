import { access, rename, rm } from "node:fs/promises";

const outputRoot = new URL("../dist/client/", import.meta.url);
const nestedBasePath = new URL("joa-viewer-site/", outputRoot);
const nestedAssets = new URL("_next/", nestedBasePath);
const publicAssets = new URL("_next/", outputRoot);

try {
  await access(nestedAssets);
} catch (error) {
  if (error?.code === "ENOENT") {
    process.exit(0);
  }
  throw error;
}

await rm(publicAssets, { recursive: true, force: true });
await rename(nestedAssets, publicAssets);
await rm(nestedBasePath, { recursive: true, force: true });
