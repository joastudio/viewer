import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const outputRoot = new URL("../dist/client/", import.meta.url);

async function readOutput(name) {
  return readFile(new URL(name, outputRoot), "utf8");
}

test("GitHub Pages 경로를 포함한 소개 페이지를 생성한다", async () => {
  const html = await readOutput("index.html");

  assert.match(html, /<title>좋아뷰어 — 내 파일, 내 책장, 내 방식<\/title>/);
  assert.match(html, /Android · 로컬 우선 뷰어/);
  assert.match(html, /href="\/joa-viewer-site\/privacy\.html"/);
  assert.match(html, /src="\/joa-viewer-site\/app-icon\.png"/);
  assert.match(html, /href="\/joa-viewer-site\/guide\.html"/);
  assert.match(html, /파일 구성 가이드 보기/);
  assert.match(html, /<span>읽기에 집중하고,<\/span>/);
  assert.match(html, /<span>나머지는 가볍게\.<\/span>/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);

  const staticAssetPaths = [
    ...html.matchAll(/(?:href|src)="(\/joa-viewer-site\/_next\/[^"]+)"/g),
  ].map((match) => match[1].replace("/joa-viewer-site/", ""));

  assert.ok(staticAssetPaths.length > 0);
  await Promise.all(
    staticAssetPaths.map((path) => access(new URL(path, outputRoot))),
  );
});

test("공개 가이드와 개인정보 처리방침, 지원 페이지를 생성한다", async () => {
  const [guide, privacy, support] = await Promise.all([
    readOutput("guide.html"),
    readOutput("privacy.html"),
    readOutput("support.html"),
  ]);

  assert.match(guide, /<title>파일 구성 가이드 \| 좋아뷰어<\/title>/);
  assert.match(guide, /내 웹툰\//);
  assert.match(guide, /내 소설\.zip/);
  assert.match(guide, /status: reading/);
  assert.match(guide, /ComicInfo\.xml/);
  assert.match(privacy, /개인정보 처리방침/);
  assert.match(privacy, /시행일 2026년 8월 10일/);
  assert.match(privacy, /Google Mobile Ads SDK/);
  assert.match(privacy, /보관과 삭제/);
  assert.match(support, /무엇을 도와드릴까요/);
  assert.match(support, /joa-viewer-site\/issues\/new/);
  assert.match(support, /개인정보를 적지/);
});

test("필수 공개 자산을 포함한다", async () => {
  await Promise.all([
    access(new URL(".nojekyll", outputRoot)),
    access(new URL("app-icon.png", outputRoot)),
    access(new URL("og.png", outputRoot)),
    access(new URL("404.html", outputRoot)),
  ]);
});
