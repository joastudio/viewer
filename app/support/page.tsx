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
      "설정의 책장 관리에서 폴더를 다시 선택해 주세요. Android가 문서 접근 권한을 회수했거나 파일 제공자의 연결이 끊긴 경우 재연결이 필요할 수 있습니다.",
  },
  {
    question: "이동한 파일의 독서 기록을 이어갈 수 있나요?",
    answer:
      "파일을 열 수 없다는 화면에서 재연결을 선택하세요. 좋아뷰어가 제목·크기·수정 시각·부분 해시로 후보를 찾으며, 사용자가 새 파일을 직접 지정할 수도 있습니다.",
  },
  {
    question: "어떤 파일을 지원하나요?",
    answer:
      "이미지 폴더, ZIP·CBZ, RAR·CBR, 7z·CB7, TXT를 지원합니다. 암호화되었거나 손상된 압축 파일, 지원하지 않는 압축 방식은 열리지 않을 수 있습니다.",
  },
  {
    question: "오류를 제보할 때 무엇을 보내야 하나요?",
    answer:
      "설정의 진단 정보 내보내기에서 개인정보를 제외한 앱·기기·연결 상태를 확인한 뒤 함께 보내 주세요. 책 파일이나 개인 문서는 첨부하지 않아도 됩니다.",
  },
];

export default function SupportPage() {
  return (
    <main className="page-main">
      <SiteHeader />
      <header className="page-hero shell">
        <p className="eyebrow">Support</p>
        <h1>무엇을 도와드릴까요?</h1>
        <p>
          먼저 자주 묻는 질문을 확인해 주세요. 해결되지 않은 문제는 공개 오류
          제보 페이지에 재현 방법과 진단 정보를 남길 수 있습니다.
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
            href="https://github.com/soonyworks/joa-viewer-site/issues/new"
            target="_blank"
            rel="noreferrer"
          >
            GitHub에서 오류 제보
          </a>
        </aside>

        <section aria-labelledby="faq-title">
          <p className="eyebrow">Frequently asked questions</p>
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
      <SiteFooter />
    </main>
  );
}
