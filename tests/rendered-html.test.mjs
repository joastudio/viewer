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
  assert.match(html, /href="\/viewer\/privacy\.html"/);
  assert.match(html, /src="\/viewer\/app-icon\.png"/);
  assert.match(html, /href="\/viewer\/guide\.html"/);
  assert.match(html, /파일 구성 가이드 보기/);
  assert.match(html, /<span>읽기에 집중하고,<\/span>/);
  assert.match(html, /<span>나머지는 가볍게\.<\/span>/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);

  const staticAssetPaths = [
    ...html.matchAll(/(?:href|src)="(\/viewer\/_next\/[^"]+)"/g),
  ].map((match) => match[1].replace("/viewer/", ""));

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
  assert.match(guide, /전체\.txt/);
  assert.match(guide, /1부\.txt/);
  assert.match(guide, /2부\.txt/);
  assert.match(guide, /status: reading/);
  assert.match(guide, /모든 필드는 선택 사항입니다/);
  assert.match(guide, /생략한 필드는 앱에 저장된 기존 값을 변경하지 않습니다/);
  assert.match(guide, /ComicInfo\.xml/);
  assert.match(privacy, /개인정보 처리방침/);
  assert.match(privacy, /시행일 2026년 9월 9일/);
  assert.match(privacy, /Google Mobile Ads SDK/);
  // 앱이 실제로 전송하는 항목은 공개 방침에 반드시 남아 있어야 한다.
  // Play Data Safety 선언과 어긋나면 정책 위반이므로 회귀를 테스트로 막는다.
  assert.match(privacy, /Firebase Crashlytics/);
  assert.match(privacy, /오류 보고/);
  assert.match(privacy, /MangaDex/);
  assert.match(privacy, /Google Books/);
  assert.match(privacy, /보관과 삭제/);
  assert.match(support, /무엇을 도와드릴까요/);
  assert.match(support, /viewer\/issues\/new/);
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
