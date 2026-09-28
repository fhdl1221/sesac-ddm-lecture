"use client";
import { usePersistStore } from "@/store/usePersistStore";
import { useEffect, useState } from "react";

export default function PersistPage() {
    const { theme, toggleTheme } = usePersistStore();

    // Hydration 에러 해결
    const [isMounted, setIstMounted] = useState(false);

    useEffect(() => {
        setIstMounted(true);
    }, []);

    // 1. 서버에서 HTML 생성
    // 2. 브라우저가 HTML 표시
    // 3. React가 브라우저 실행
    // 4. 기존 HTML에 이벤트, 상태 연결
    // 위의 순서로 진행되는데 서버에서 만든 HTML에 React의 기능을 연결하는걸 Hydration이라고 함.
    // Hydration 에러 해결 = 서버와 브라우저의 첫 렌더링 결과를 맞추기 위한 상태
    if (!isMounted) return <div>로딩 중...</div>;

    return (
        <div style={{ backgroundColor: theme === "dark" ? "black" : "white" }}>
            <p>현재 테마: {theme}</p>
            <button onClick={toggleTheme}>테마 변경</button>
        </div>
    );
}
