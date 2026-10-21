# CAST FUNCTIONS

# 명시적 형변환
-- CAST
-- CONVERT

SELECT AVG(menu_price) AS '변환 전 평균'
FROM tbl_menu;

-- CAST(값 AS 바꿀타입)
SELECT CAST(AVG(menu_price) AS SIGNED INTEGER) AS '메뉴 평균 가격' -- SIGNED INTEGER: 부호가 있는 정수, 즉 음수/0/양수를 표현(INTEGER는 생략가능)
FROM tbl_menu;

-- CONVERT(값, 바꿀타입)
SELECT CONVERT(AVG(menu_price), SIGNED) AS '메뉴 평균 가격'
FROM tbl_menu;

SELECT CAST('2026-10-21' AS DATE);

SELECT 
	menu_name, 
    CONCAT(CAST(menu_price AS CHAR(5)), '원') AS '메뉴가격'
FROM tbl_menu;

# 임시적 형변환
SELECT '1' + '2'; -- SQL에서 +연산자는 숫자 계산을 요구하기 때문에 문자끼리 더해도 숫자로 자동변환해서 더한다
SELECT 3 > 'MAY'; -- 숫자로 바꿀 수 없으면 0으로 취급을 해서 true값인 1이 나옴

