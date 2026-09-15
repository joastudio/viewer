import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "지원",
  description: "좋아뷰어 사용 도움말과 오류 제보 안내입니다.",
};

export const dynamic = "force-static";

const faqs = [
  {
    question: "책장 폴더가 보이지 않아요.",
    answer:
      "Android에서 폴더 접근 권한이 해제되었거나 파일을 제공하는 앱과의 연결이 끊기면 책장 폴더가 보이지 않을 수 있습니다. 책장 탭 오른쪽 위 메뉴의 '책장 폴더 관리'에서 폴더를 다시 연결해 주세요.",
  },
  {
    question: "이동한 파일의 독서 기록을 이어갈 수 있나요?",
    answer:
      "책 파일을 찾을 수 없다는 화면에서 '이동한 파일 찾기'를 누르세요. 현재 책장 폴더 안의 압축 파일과 TXT 중에서 이름·크기·수정 시각·파일 앞부분 내용이 일치하는 후보를 찾습니다. 후보가 없으면 '파일 직접 선택'으로 새 위치를 지정할 수 있습니다. 폴더로 된 책은 자동으로 찾지 못합니다.",
  },
  {
    question: "어떤 파일을 지원하나요?",
    answer:
      "이미지 폴더(JPG·PNG·WebP·GIF), ZIP·CBZ, RAR·CBR, 7z·CB7, TXT를 지원합니다. PDF와 EPUB은 지원하지 않습니다. 암호가 걸린 압축 파일은 지원하지 않으며, 손상된 압축 파일은 열리지 않을 수 있습니다.",
  },
  {
    question: "읽어주기나 음성 명령은 어디에서 켜나요?",
    answer:
      "읽어주기는 텍스트 뷰어 아래 메뉴에서 시작하고, 설정의 '읽어주기'에서 음성과 속도를 정합니다. 음성 명령과 얼굴 인식은 실험 기능으로, 뷰어의 책 설정에서 켜고 명령 단어는 설정의 '실험실'에서 바꿉니다.",
  },
  {
    question: "오류를 제보할 때 무엇을 보내야 하나요?",
    answer:
      "설정 > 앱 정보의 '진단 정보 내보내기'에서 개인정보를 제외한 앱·기기·연결 상태를 확인한 뒤 함께 보내 주세요. 책 파일이나 개인 문서는 첨부하지 않아도 됩니다.",
  },
];

export default function SupportPage() {
  return (
    <main className="page-main">
      <SiteHeader />
      <header className="page-hero shell">
        <p className="eyebrow">지원</p>
        <h1>무엇을 도와드릴까요?</h1>
        <p>
          먼저 자주 묻는 질문을 확인해 주세요. 그래도 해결되지 않으면 오류
          제보 페이지에 재현 방법과 진단 정보를 남겨 주세요.
        </p>
      </header>

      <div className="support-grid shell">
        <aside className="support-contact">
          <h2>오류 제보</h2>
          <p>
            공개 이슈에는 이메일, 파일 경로, 계정 정보 등 개인정보를 적지
            마세요. 개인정보 문의는 Google Play 앱 정보의 개발자 연락처를
            이용해 주세요.
          </p>
          <a
            href="https://github.com/joastudio/viewer/issues/new"
            target="_blank"
            rel="noreferrer"
          >
            GitHub에서 오류 제보
          </a>
        </aside>

        <section aria-labelledby="faq-title">
          <p className="eyebrow" aria-hidden="true">자주 묻는 질문</p>
          <h2 id="faq-title" className="sr-only">
            자주 묻는 질문
          </h2>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>

      <section
        className="shell"
        id="data-deletion"
        aria-labelledby="data-deletion-title"
      >
        <p className="eyebrow">데이터 삭제</p>
        <h2 id="data-deletion-title">데이터 삭제 요청</h2>
        <p>
          좋아뷰어(Joa Viewer)는 읽은 책과 진도, 설정을 기기 안에만 저장하며
          책 파일을 서버로 보내지 않습니다. 아래 방법으로 데이터를 직접
          삭제하거나 삭제를 요청할 수 있습니다.
        </p>

        <h3>1. 기기에 저장된 데이터 삭제</h3>
        <ol>
          <li>
            Android 설정 → 앱 → 좋아뷰어 → 저장공간에서 <strong>데이터 삭제</strong>
            를 선택합니다.
          </li>
          <li>앱을 삭제해도 데이터가 함께 지워집니다.</li>
          <li>
            직접 만든 백업 파일은 저장한 위치(기기 저장소 또는 클라우드)에서
            직접 지워야 합니다.
          </li>
        </ol>

        <h3>2. 외부로 전송된 데이터 삭제 요청</h3>
        <ol>
          <li>
            <a href="mailto:joastudio.app@gmail.com?subject=데이터 삭제 요청">
              joastudio.app@gmail.com
            </a>
            으로 제목에 &quot;데이터 삭제 요청&quot;을 적어 보내 주세요.
          </li>
          <li>
            기기 모델과 앱을 사용한 대략적인 기간을 함께 적어 주시면 해당
            기록을 찾는 데 도움이 됩니다.
          </li>
          <li>접수 후 30일 이내에 처리하고 회신합니다.</li>
        </ol>

        <h3>3. 수집 항목과 보관 기간</h3>
        <ul>
          <li>
            <strong>오류 보고(비정상 종료 로그·진단 정보)</strong>: Firebase
            Crashlytics로 전송되며 최대 90일 동안 보관한 뒤 자동으로
            삭제됩니다. 앱 설정에서 전송을 끌 수 있습니다.
          </li>
          <li>
            <strong>광고 ID</strong>: 광고 표시에 사용됩니다. Android 설정 →
            개인정보 보호 → 광고에서 언제든 재설정하거나 삭제할 수 있습니다.
          </li>
          <li>
            <strong>독서 기록·책장·설정</strong>: 기기에만 저장되며 전송하지
            않습니다. 위 1번 방법으로 삭제할 수 있습니다.
          </li>
          <li>
            <strong>구매 기록</strong>: Google Play가 보관하며 Google의
            법적·회계 정책을 따릅니다.
          </li>
        </ul>
      </section>

      <SiteFooter />
    </main>
  );
}
