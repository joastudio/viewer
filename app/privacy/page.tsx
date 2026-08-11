import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../site-chrome";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "개인정보 처리방침",
  description: "좋아뷰어의 데이터 저장, 선택 기능, 광고와 결제 처리 안내입니다.",
};

export const dynamic = "force-static";

const sections = [
  ["local", "기기에 저장하는 정보"],
  ["optional", "선택 기능"],
  ["ads", "광고와 결제"],
  ["third-party", "제3자 서비스"],
  ["retention", "보관과 삭제"],
  ["contact", "문의"],
];

export default function PrivacyPage() {
  return (
    <main className="page-main">
      <SiteHeader />
      <header className="page-hero shell">
        <p className="eyebrow">Privacy policy · 시행일 2026년 8월 10일</p>
        <h1>개인정보 처리방침</h1>
        <p>
          좋아뷰어는 사용자가 직접 선택한 로컬 문서를 열람하는 Android
          앱입니다. 아래 내용은 앱이 저장하거나 선택적으로 처리하는 정보를
          설명합니다.
        </p>
      </header>

      <div className="document-layout shell">
        <nav className="document-nav" aria-label="개인정보 처리방침 목차">
          <span>목차</span>
          {sections.map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>

        <article className="document-content">
          <div className="notice-box">
            핵심 열람 기능은 회원가입 없이 사용할 수 있으며, 사용자가 고른
            문서와 독서 기록은 기본적으로 기기 안에 보관됩니다.
          </div>

          <section id="local">
            <h2>1. 기기에 저장하는 정보</h2>
            <ul>
              <li>사용자가 선택한 책장·백업 위치의 SAF URI</li>
              <li>독서 위치, 최근 기록, 북마크, 평점, 상태, 메모, 태그</li>
              <li>화면·뷰어·TTS·백업 설정</li>
              <li>Google Play에서 마지막으로 확인한 광고 제거 구매 여부</li>
            </ul>
            <p>
              이 정보는 기본적으로 앱의 로컬 저장소에 보관됩니다. Android
              시스템 백업이 켜져 있으면 일반 설정과 앱 데이터 일부가 사용자의
              Android 백업에 포함될 수 있습니다. 새 기기에서 복원된 SAF URI는
              다시 권한을 받아야 합니다.
            </p>
          </section>

          <section id="optional">
            <h2>2. 선택 기능에서 처리하는 정보</h2>
            <ul>
              <li>
                Google Drive 백업을 직접 켠 경우 Google 계정 이메일과 사용자가
                만든 백업 스냅샷을 Google Drive로 전송합니다.
              </li>
              <li>
                SAF 백업을 켠 경우 사용자가 선택한 문서 제공자에 스냅샷을
                저장합니다.
              </li>
              <li>
                TTS는 기기에 설치된 음성 합성 엔진을 사용하며, 엔진에 따라
                텍스트 처리 방식과 네트워크 사용 여부가 다를 수 있습니다.
              </li>
              <li>
                개발 빌드의 실험적 음성·얼굴 제어는 사용자가 켤 때만
                마이크·카메라 권한을 요청합니다. 얼굴 프레임은 기기에서만
                처리하며 저장하거나 전송하지 않습니다. 공개 빌드에는 이
                권한과 기능이 포함되지 않습니다.
              </li>
            </ul>
          </section>

          <section id="ads">
            <h2>3. 광고와 결제</h2>
            <p>
              무료 버전의 광고가 활성화된 경우 Google Mobile Ads SDK와 User
              Messaging Platform이 동의 상태, 광고 식별자, 기기 정보, 광고
              상호작용 및 진단 정보를 처리할 수 있습니다. 지역에 따라 동의
              또는 개인정보 선택 화면이 먼저 표시됩니다. 사용자는 동의하지
              않아도 핵심 열람 기능을 사용할 수 있습니다.
            </p>
            <p>
              광고 제거 구매는 Google Play가 처리합니다. 앱은 상품·구매
              상태와 구매 토큰을 Google Play Billing을 통해 확인하고, 기기에는
              마지막으로 검증한 광고 제거 여부만 저장합니다. 결제 수단 정보는
              앱이 직접 수집하거나 저장하지 않습니다.
            </p>
          </section>

          <section id="third-party">
            <h2>4. 제3자 서비스</h2>
            <ul>
              <li>Google Play Billing</li>
              <li>Google Mobile Ads 및 User Messaging Platform</li>
              <li>Google Drive 및 Google 계정 인증</li>
              <li>사용자가 선택한 Android DocumentsProvider</li>
              <li>기기에 설치된 TTS 엔진</li>
            </ul>
            <p>각 서비스의 데이터 처리에는 해당 제공자의 정책이 함께 적용됩니다.</p>
          </section>

          <section id="retention">
            <h2>5. 보관과 삭제</h2>
            <p>
              앱 삭제 또는 Android 설정의 앱 데이터 삭제로 로컬 데이터를
              제거할 수 있습니다. Drive·SAF에 만든 백업 파일은 사용자가 해당
              저장소에서 직접 삭제해야 합니다. Google Play 구매 기록은
              Google의 법적·회계 정책에 따라 관리됩니다.
            </p>
          </section>

          <section id="contact">
            <h2>6. 문의</h2>
            <p>
              오류 제보와 개인정보 문의 방법은 <a href={`${basePath}/support.html`}>지원 페이지</a>에서
              확인할 수 있습니다. 개인정보가 포함된 내용은 공개 이슈에
              작성하지 말고 Google Play 앱 정보에 표시된 개발자 연락처를
              이용해 주세요.
            </p>
          </section>
        </article>
      </div>
      <SiteFooter />
    </main>
  );
}
