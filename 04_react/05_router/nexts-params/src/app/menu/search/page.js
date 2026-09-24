"use client";  // 클라이언트 컴포넌트를 사용하는 컴포넌트라고 명시

import MenuItem from "@/item/MenuItem";
import { searchMenu } from "@/lib/MenuAPI";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
/** next/navigation
 * usePathname() -> 현재 URL의 순수경로를 읽어옴(활성탭/메뉴스타일 적용시) 
 * useParams() -> [폴더명] 형태의 동적 라우팅 파라미터를 읽어옴 (상세페이지 데이터 페칭 시 /menu/1에서 1)
 * useSearchParams() -> URL 끝의 쿼리스트링(?key=value)을 읽어옴 (검색 결과 페이지, 필터링 시)
 * useRouter() -> 함수/이벤트 내에서 프로그래밍 방식으로 페이지 이동 (폼 제출 후 완료 페이지 이동, 뒤로가기 등 router.push())
 * */

function MenuSearchResultContent() {
    const [menuList, setMenuList] = useState([]);

    // 쿼리 스트링 객체 가져오기
    const searchParam = useSearchParams();

    // '?menuName=열무' 라면 '열무'가 추출된다. .get('key')의 결과는 value
    const menuName = searchParam.get("menuName");
    console.log(menuName);

    useEffect(() => {
        setMenuList(searchMenu(menuName));
    }, [menuName]);

    return (
        <>
            <h1>검색 결과</h1>
            <div>
                {menuList.map((menu) => (
                    <MenuItem key={menu.menuCode} menu={menu} />
                ))}
            </div>
        </>
    );
}

export default function MenuSearchResult() {
    return (
        <Suspense fallback={<h1>검색 조건을 확인하는 중입니다</h1>}>
            <MenuSearchResultContent />
        </Suspense>
    );
}
