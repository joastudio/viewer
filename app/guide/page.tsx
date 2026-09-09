import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "파일 구성 가이드",
  description:
    "좋아뷰어에서 웹툰 폴더, 소설 ZIP, 표지와 readme 메타데이터를 구성하는 방법입니다.",
};

export const dynamic = "force-static";

const sections = [
  ["webtoon", "웹툰 폴더"],
  ["novel", "소설 ZIP"],
  ["metadata", "readme 메타"],
  ["cover", "표지 규칙"],
  ["tips", "정리 요령"],
];

const webtoonTree = `내 웹툰/
├─ cover.jpg
├─ readme.txt
├─ 001화/
│  ├─ 001.jpg
│  ├─ 002.jpg
│  └─ 003.jpg
├─ 002화.cbz
└─ 003화/
   ├─ 001.webp
   └─ 002.webp`;

const novelSingleFileTree = `내 소설.zip
├─ cover.jpg
├─ readme.txt
└─ 전체.txt`;

const novelPartsTree = `내 소설.zip
├─ cover.jpg
├─ readme.txt
├─ 1부.txt
└─ 2부.txt`;

const metadataExample = `---
tags: 판타지, 성장, 모험
rating: 5
status: reading
author: 홍길동
publisher: 좋아출판
source_url: https://example.com/books/1
note: 다시 읽고 싶은 작품
---`;

export default function GuidePage() {
  return (
    <main className="page-main">
      <SiteHeader />
      <header className="page-hero shell">
        <p className="eyebrow">File organization guide</p>
        <h1>파일 구성 가이드</h1>
        <p>
          좋아뷰어가 작품과 회차를 정확하게 인식하도록 폴더, 압축파일,
          표지와 메타데이터를 구성하는 권장 방법입니다.
        </p>
      </header>

      <div className="document-layout guide-layout shell">
        <nav className="document-nav" aria-label="파일 구성 가이드 목차">
          <span>목차</span>
          {sections.map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>

        <article className="document-content guide-content">
          <div className="notice-box">
            아래 구조는 필수가 아닌 권장안입니다. 기존 이미지 폴더와 ZIP도
            열 수 있지만, 명시적인 표지와 일관된 회차 이름을 사용하면 자동
            분류 결과가 더 안정적입니다.
          </div>

          <section id="webtoon">
            <p className="guide-step">01 · 웹툰과 회차형 만화</p>
            <h2>작품 폴더 아래에 회차를 나눕니다</h2>
            <p>
              작품명 폴더의 최상위에 표지와 메타데이터를 두고, 각 회차는
              하위 폴더나 CBZ 같은 압축파일로 구성합니다. 회차는 자연 정렬
              순서로 표시됩니다.
            </p>
            <div className="structure-example">
              <span>권장 폴더 구조</span>
              <pre aria-label="웹툰 폴더 구조 예시">{webtoonTree}</pre>
            </div>
            <ul>
              <li>
                회차 이름은 <code>001화</code>, <code>제2화</code>,{" "}
                <code>ch03</code>, <code>vol.04</code>처럼 일관되게 작성합니다.
              </li>
              <li>회차를 두 개 이상 두면 작품 단위 자동 인식이 안정적입니다.</li>
              <li>각 회차 안의 이미지는 파일명 자연 정렬 순서로 읽습니다.</li>
              <li>최상위의 표지 이미지는 본문 페이지에서 제외됩니다.</li>
            </ul>
          </section>

          <section id="novel">
            <p className="guide-step">02 · 텍스트 소설</p>
            <h2>표지 한 장과 TXT 본문을 ZIP에 담습니다</h2>
            <p>
              이미지가 없거나 한 장뿐이고 본문 TXT가 하나 이상이면 텍스트
              소설로 인식합니다. 본문은 <code>전체.txt</code> 한 파일로
              작성해도 되고, <code>1부.txt</code>, <code>2부.txt</code>처럼
              여러 파일로 나눠도 됩니다. 여러 TXT는 파일명 자연 정렬 순서로
              이어서 한 권처럼 읽습니다.
            </p>
            <div className="structure-example">
              <span>본문을 한 파일로 관리할 때</span>
              <pre aria-label="전체 TXT 한 파일을 담은 소설 ZIP 구조 예시">{novelSingleFileTree}</pre>
            </div>
            <div className="structure-example">
              <span>본문을 여러 부로 나눌 때</span>
              <pre aria-label="여러 TXT를 담은 소설 ZIP 구조 예시">{novelPartsTree}</pre>
            </div>
            <ul>
              <li><code>readme.txt</code>는 메타데이터이므로 본문에서 제외됩니다.</li>
              <li>본문 이미지가 두 장 이상이면 이미지 책으로 판정될 수 있습니다.</li>
              <li>본문 파일은 UTF-8 사용을 권장하며 한국어 레거시 인코딩도 자동 감지합니다.</li>
            </ul>
          </section>

          <section id="metadata">
            <p className="guide-step">03 · 작품 메타데이터</p>
            <h2>readme에 작품 정보를 기록합니다</h2>
            <p>
              작품 최상위의 <code>readme.txt</code> 또는 <code>readme.md</code>
              첫 부분에 아래 형식을 작성합니다. 일반 YAML 전체 문법이 아닌,
              한 줄에 하나의 <code>key: value</code>를 쓰는 간단한 형식입니다.
            </p>
            <p className="guide-caution">
              <strong>모든 필드는 선택 사항입니다.</strong> 원하는 항목만 작성할
              수 있으며, 생략한 필드는 앱에 저장된 기존 값을 변경하지 않습니다.
              유효하지 않은 값과 알 수 없는 필드는 오류 없이 무시됩니다.
            </p>
            <div className="structure-example metadata-example">
              <span>readme.txt 예시</span>
              <pre aria-label="readme 메타데이터 예시">{metadataExample}</pre>
            </div>
            <div className="metadata-fields" aria-label="지원하는 메타데이터 필드">
              <div><code>tags</code><span>쉼표로 구분한 태그</span></div>
              <div><code>rating</code><span>0부터 5까지의 정수</span></div>
              <div><code>status</code><span>reading · completed · dropped · on_hold</span></div>
              <div><code>author</code><span>저자 또는 작가</span></div>
              <div><code>publisher</code><span>출판사 또는 연재처</span></div>
              <div><code>source_url</code><span>http 또는 https 원문·구매 링크</span></div>
              <div><code>note</code><span>작품 메모</span></div>
            </div>
            <p className="guide-caution">
              <strong>확인:</strong> <code>title</code>, <code>ComicInfo.xml</code>,{" "}
              <code>info.json</code>은 현재 메타데이터로 가져오지 않습니다.
              압축파일 안의 readme는 읽을 수 있지만 앱에서 수정한 값을 다시
              압축파일 안에 쓰지는 않습니다.
            </p>
          </section>

          <section id="cover">
            <p className="guide-step">04 · 표지</p>
            <h2>cover 파일은 작품 최상위에 둡니다</h2>
            <p>
              <code>cover.jpg</code>, <code>cover.jpeg</code>,{" "}
              <code>cover.png</code>, <code>cover.webp</code>,{" "}
              <code>cover.gif</code>를 대소문자 구분 없이 인식합니다. 하위
              회차 폴더가 아니라 작품 폴더나 압축파일의 최상위에 배치합니다.
            </p>
            <ol>
              <li>앱에서 사용자가 직접 지정한 표지</li>
              <li>최상위의 <code>cover.*</code></li>
              <li>정렬된 첫 번째 본문 이미지</li>
            </ol>
          </section>

          <section id="tips">
            <p className="guide-step">05 · 정리 요령</p>
            <h2>다른 앱에서도 알아보기 쉽게 정리합니다</h2>
            <ul>
              <li>회차와 페이지 번호는 <code>001</code>, <code>002</code>처럼 자릿수를 맞춥니다.</li>
              <li>작품 폴더 안에는 한 작품의 회차만 보관합니다.</li>
              <li>macOS의 <code>__MACOSX</code> 같은 보조 파일은 자동으로 무시됩니다.</li>
              <li>암호화되거나 손상된 압축파일은 열리지 않을 수 있습니다.</li>
            </ul>
          </section>
        </article>
      </div>
      <SiteFooter />
    </main>
  );
}
