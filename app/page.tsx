import Image from "next/image";
import { SiteFooter, SiteHeader } from "./site-chrome";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const dynamic = "force-static";

const features = [
  {
    number: "01",
    title: "내 파일을 그대로",
    body: "이미지 폴더와 ZIP·CBZ, RAR·CBR, 7z·CB7, TXT를 직접 고른 폴더에서만 엽니다. 책장 폴더는 여러 개 등록해 두고 오갈 수 있습니다.",
  },
  {
    number: "02",
    title: "책마다 기억하는 뷰어",
    body: "웹툰형 세로 스크롤과 만화형 좌우 페이지, 읽기 방향, 배경색을 책마다 기억합니다. 세로로 긴 이미지는 자동으로 감지하고, 여백 자동 자르기(약·보통·강)와 가로 양면 보기도 지원합니다.",
  },
  {
    number: "03",
    title: "책장은 알아보기 쉽게",
    body: "읽는 중·완료·보류로 거르고 평가·진행률로 정렬하며, 여러 권의 태그와 상태를 한 번에 바꿀 수 있습니다. 표지가 없는 책은 제목 타일로, 폴더는 안에 든 작품 표지 모자이크로 보여 줍니다.",
  },
  {
    number: "04",
    title: "읽던 곳에서 이어서",
    body: "읽던 위치와 북마크, 메모는 기기에 보관합니다. 백업은 켜 둔 경우에만 책장 폴더나 원하는 폴더, Google Drive에 저장합니다.",
  },
];

const formats = ["폴더", "ZIP · CBZ", "RAR · CBR", "7z · CB7", "TXT"];

const screens = [
  {
    src: "book-detail",
    title: "책 정보",
    body: "회차 목록과 북마크, 이어보기를 한 화면에서.",
    alt: "책 정보 화면. 표지 아래에 이어보기 버튼과 회차·정보·북마크 탭이 있습니다.",
  },
  {
    src: "webtoon-viewer",
    title: "웹툰형 세로 스크롤",
    body: "긴 이미지를 끊김 없이 이어 보고 회차를 바로 넘깁니다.",
    alt: "웹툰형 세로 스크롤 뷰어. 아래에 회차·페이지 진행 막대와 북마크·다음 회차 버튼이 떠 있습니다.",
  },
  {
    src: "text-viewer",
    title: "텍스트 뷰어",
    body: "부 이동, 진행률, 자동 넘김, 목차를 한 곳에.",
    alt: "텍스트 뷰어. 녹색 배경의 본문 아래에 부 이동과 읽어주기·자동 넘김·목차 버튼이 있습니다.",
  },
  {
    src: "tts-playback",
    title: "읽어주기",
    body: "화면을 꺼도 알림과 잠금화면에서 이어서 조작합니다.",
    alt: "읽어주기 재생 중인 텍스트 뷰어. 재생 속도와 일시정지·이전·다음 버튼이 보입니다.",
  },
  {
    src: "viewer-settings",
    title: "뷰어와 읽기 설정",
    body: "양면 보기, 합본 나눠 보기, 볼륨키 넘김까지.",
    alt: "뷰어와 읽기 설정 화면. 가로일 때 양면 보기, 좌우 합본 나눠 보기, 볼륨키로 페이지 넘김 토글이 있습니다.",
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Android 만화·소설 뷰어</p>
          <h1 id="hero-title">
            내 파일을
            <br />
            <span>내 책장처럼.</span>
          </h1>
          <p className="hero-description">
            좋아뷰어는 휴대폰에 있는 만화와 TXT 소설을 폴더째 불러와 읽는
            앱입니다. 파일은 어디에도 올리지 않고 기기 안에서 바로 엽니다.
          </p>
          <div className="hero-actions">
            <span className="launch-badge">Google Play 출시 준비 중</span>
            <a className="text-link" href={`${basePath}/privacy.html`}>
              개인정보 처리방침 <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="viewer-stage">
          <div className="viewer-glow" aria-hidden="true" />
          <figure className="phone-frame phone-back" aria-hidden="true">
            <Image
              src={`${basePath}/screens/cover-intro.webp`}
              alt=""
              width={720}
              height={1560}
              unoptimized
            />
          </figure>
          <figure className="phone-frame phone-front">
            <Image
              src={`${basePath}/screens/library.webp`}
              alt="좋아뷰어 책장 화면. 읽는 중·완료·보류 필터와 작품 표지가 격자로 보입니다."
              width={720}
              height={1560}
              priority
              unoptimized
            />
          </figure>
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

      <section className="screens shell" aria-labelledby="screens-title">
        <div className="screens-heading">
          <div>
            <p className="eyebrow">앱 화면</p>
            <h2 id="screens-title">실제 화면으로 둘러보기</h2>
          </div>
          <p>
            실제 휴대폰에서 찍은 화면입니다. 화면 속 책은 소개용으로 만든
            샘플입니다.
          </p>
        </div>
        <ul className="screen-rail">
          {screens.map((screen) => (
            <li key={screen.src}>
              <figure>
                <Image
                  src={`${basePath}/screens/${screen.src}.webp`}
                  alt={screen.alt}
                  width={720}
                  height={1560}
                  loading="lazy"
                  unoptimized
                />
                <figcaption>
                  <strong>{screen.title}</strong>
                  <span>{screen.body}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>

      <section className="features shell" aria-labelledby="features-title">
        <div className="section-heading">
          <p className="eyebrow">주요 기능</p>
          <h2 id="features-title">
            <span>언제 어디서나,</span>
            <span>쉽고 편하게.</span>
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

      <section className="bedtime shell" aria-labelledby="bedtime-title">
        <figure className="bedtime-scene">
          <Image
            src={`${basePath}/bedtime-scene.webp`}
            alt="밤에 침대에 누워 휴대폰으로 책을 읽는 좋아뷰어 마스코트"
            width={1024}
            height={500}
            loading="lazy"
            unoptimized
          />
        </figure>
        <div className="bedtime-copy">
          <p className="eyebrow">읽고 듣기</p>
          <h2 id="bedtime-title">누워서 읽기 편하게.</h2>
          <p>
            좋아뷰어는 잠들기 전 침대에서 읽는 시간을 생각하며 만들었습니다.
            눈이 피곤할 땐 읽어주기로 듣고, 휴대폰을 쥔 손이 번거로우면
            볼륨키나 음성으로 넘길 수 있습니다.
          </p>
          <ul>
            <li>
              <strong>읽어주기</strong>
              <span>
                텍스트 책을 기기의 음성 엔진으로 읽어 줍니다. 1.0~2.5배속과
                취침 타이머를 지원합니다.
              </span>
            </li>
            <li>
              <strong>밝기와 배경색</strong>
              <span>
                뷰어 안에서 화면 밝기를 낮추고 검정·세피아 같은 배경색을 고릅니다.
              </span>
            </li>
            <li>
              <strong>음성 명령 · 얼굴 인식</strong>
              <span>
                아직 실험 중인 기능입니다. 말하거나 눈을 감거나 고개를 기울여
                페이지를 넘기며, 기능을 켰을 때만 마이크와 카메라를 씁니다.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="guide-teaser shell" aria-labelledby="guide-teaser-title">
        <div>
          <p className="eyebrow">파일 정리</p>
          <h2 id="guide-teaser-title">파일을 조금만 정리하면 책장이 훨씬 깔끔해집니다.</h2>
          <p>
            표지와 메타데이터, 회차 이름을 간단한 규칙에 맞추면 웹툰과
            텍스트 소설을 작품 단위로 편하게 관리할 수 있습니다.
          </p>
          <a className="button-link" href={`${basePath}/guide.html`}>
            파일 구성 가이드 보기
          </a>
        </div>
        <ol aria-label="가이드 주요 내용">
          <li>
            <span>01</span>
            <strong>웹툰 폴더</strong>
            <small>표지 · 메타 · 회차</small>
          </li>
          <li>
            <span>02</span>
            <strong>소설 ZIP</strong>
            <small>표지 · TXT 본문</small>
          </li>
          <li>
            <span>03</span>
            <strong>readme 메타</strong>
            <small>태그 · 상태 · 작가</small>
          </li>
        </ol>
      </section>

      <section className="privacy-callout shell" aria-labelledby="privacy-title">
        <div>
          <p className="eyebrow">개인정보</p>
          <h2 id="privacy-title">내 책장은 내 휴대폰에만.</h2>
        </div>
        <div>
          <p>
            좋아뷰어는 직접 고른 폴더의 파일만 읽습니다. 독서 기록은
            휴대폰에 저장되고, 백업과 온라인 정보 가져오기는 직접 켰을 때만
            동작합니다.
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
