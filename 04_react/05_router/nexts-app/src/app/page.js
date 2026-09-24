import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <h1>홈페이지입니다!</h1>
            <nav>
                <Link href="/about">소개 보기</Link>
                <br />
                <Link href="/menu">메뉴 보기</Link>
            </nav>
        </main>
    );
}
