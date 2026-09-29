"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    const isFridgeActive = pathname === "/";

    const isRecipeActive = pathname.startsWith("/recipes");

    return (
        <header className="header">
            <div className="header-inner">
                <Link href="/" className="logo">
                    냉장고민
                </Link>

                <nav className="main-nav">
                    <Link
                        href="/"
                        className={
                            isFridgeActive ? "nav-link active" : "nav-link"
                        }
                    >
                        내 냉장고
                    </Link>

                    <Link
                        href="/recipes"
                        className={
                            isRecipeActive ? "nav-link active" : "nav-link"
                        }
                    >
                        오늘 뭐 먹지?
                    </Link>
                </nav>

                <div className="header-right">
                    <input
                        className="search-input"
                        placeholder="Search"
                        readOnly
                    />

                    <button type="button" className="profile-button">
                        👤
                    </button>
                </div>
            </div>
        </header>
    );
}
