import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function SiteHeader() {
  return (
    <header className="site-header shell">
      <a className="brand" href={`${basePath}/`} aria-label="좋아뷰어 홈">
        <Image
          src={`${basePath}/app-icon.png`}
          alt=""
          width={44}
          height={44}
          unoptimized
        />
        <span>좋아뷰어</span>
      </a>
      <nav aria-label="주요 메뉴">
        <a href={`${basePath}/guide.html`}>사용 가이드</a>
        <a href={`${basePath}/privacy.html`}>개인정보</a>
        <a href={`${basePath}/support.html`}>지원</a>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer shell">
      <div className="footer-brand">
        <Image
          src={`${basePath}/app-icon.png`}
          alt=""
          width={44}
          height={44}
          unoptimized
        />
        <div>
          <strong>좋아뷰어</strong>
          <span>Joa Viewer for Android</span>
        </div>
      </div>
      <nav aria-label="하단 메뉴">
        <a href={`${basePath}/guide.html`}>사용 가이드</a>
        <a href={`${basePath}/privacy.html`}>개인정보 처리방침</a>
        <a href={`${basePath}/support.html`}>지원</a>
      </nav>
      <p>© 2026 SoonyWorks</p>
    </footer>
  );
}
