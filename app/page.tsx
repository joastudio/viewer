import Image from "next/image";
import { SiteFooter, SiteHeader } from "./site-chrome";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const dynamic = "force-static";

const features = [
  {
    number: "01",
    title: "내 파일을 그대로",
    body: "폴더 이미지와 ZIP·CBZ, RAR·CBR, 7z·CB7, TXT를 Android 문서 선택기로 안전하게 엽니다.",
  },
  {
    number: "02",
    title: "읽는 방식까지 내 취향대로",
    body: "세로 스크롤과 좌우 페이지 모드, 읽기 방향, 여백과 밝기를 작품마다 세밀하게 조절합니다.",
  },
  {
    number: "03",
    title: "기록은 조용히 이어서",
    body: "마지막 위치와 북마크, 메모를 기기에 보관하고 선택한 저장소에 직접 백업할 수 있습니다.",
  },
];

const formats = ["폴더", "ZIP · CBZ", "RAR · CBR", "7z · CB7", "TXT"];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Android · 로컬 우선 뷰어</p>
          <h1 id="hero-title">
            내 파일,
            <br />
            내 책장,
            <br />
            <span>내 방식.</span>
          </h1>
          <p className="hero-description">
            좋아뷰어는 사용자가 선택한 문서 폴더에서 만화·이미지·TXT를
            읽는 한국어 중심 Android 뷰어입니다. 기본 열람은 서버 업로드
            없이 기기 안에서 이루어집니다.
          </p>
          <div className="hero-actions">
            <span className="launch-badge">Google Play 출시 준비 중</span>
            <a className="text-link" href={`${basePath}/privacy.html`}>
              개인정보 처리방침 <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="viewer-stage" aria-label="좋아뷰어 책장 화면을 표현한 미리보기">
          <div className="viewer-glow" />
          <div className="phone-frame">
            <div className="phone-status">
              <span>9:41</span>
              <span aria-hidden="true">● ● ●</span>
            </div>
            <div className="phone-header">
              <div>
                <span className="phone-kicker">나의 책장</span>
                <strong>다시 읽을 시간이에요</strong>
              </div>
              <Image
                src={`${basePath}/app-icon.png`}
                alt=""
                width={38}
                height={38}
                unoptimized
              />
            </div>
            <div className="continue-card">
              <span className="comic-strip" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <div>
                <small>이어 읽기</small>
                <strong>긴 밤의 책장</strong>
                <span>42 / 128 페이지</span>
                <b><i /></b>
              </div>
            </div>
            <div className="library-heading">
              <strong>내 서재</strong>
              <span>최근 순</span>
            </div>
            <div className="book-grid" aria-hidden="true">
              <span className="book-cover cover-one" />
              <span className="book-cover cover-two" />
              <span className="book-cover cover-three" />
            </div>
            <div className="phone-nav" aria-hidden="true">
              <span className="active">책장</span>
              <span>최근</span>
              <span>설정</span>
            </div>
          </div>
        </div>
      </section>

      <section className="format-band" aria-labelledby="formats-title">
        <div className="shell format-inner">
          <p id="formats-title">지원 형식</p>
          <div className="format-list">
            {formats.map((format) => (
              <span key={format}>{format}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="features shell" aria-labelledby="features-title">
        <div className="section-heading">
          <p className="eyebrow">좋아뷰어가 지키는 것</p>
          <h2 id="features-title">
            읽기에 집중하고,
            <br />나머지는 가볍게.
          </h2>
        </div>
        <div className="feature-list">
          {features.map((feature) => (
            <article key={feature.number}>
              <span>{feature.number}</span>
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="privacy-callout shell" aria-labelledby="privacy-title">
        <div>
          <p className="eyebrow">Privacy by default</p>
          <h2 id="privacy-title">당신의 책장은 당신의 기기에.</h2>
        </div>
        <div>
          <p>
            좋아뷰어는 사용자가 고른 파일과 앱 내부 데이터만 읽습니다.
            독서 기록은 기기에 저장되며, Drive나 문서 제공자 백업은 사용자가
            직접 켰을 때만 동작합니다.
          </p>
          <a className="button-link" href={`${basePath}/privacy.html`}>
            처리방침 자세히 보기
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
