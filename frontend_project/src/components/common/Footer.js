import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-links">
                    <Link href="/about">서비스 소개</Link>

                    <Link href="/terms">이용약관</Link>

                    <Link href="/privacy">개인정보처리방침</Link>

                    <Link href="/contact">고객문의</Link>
                </div>

                <p>© 2026 냉장고민</p>
            </div>
        </footer>
    );
}
