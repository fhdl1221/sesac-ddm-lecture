-- 1. 재직 중이고 휴대폰 마지막 자리가 2인 직원 중 입사일이 가장 최근인 직원 3명의 사원번호, 직원명, 전화번호, 입사일, 퇴직여부를 출력하세요.
-- 참고. 퇴사한 직원은 퇴직여부 컬럼값이 ‘Y’이고, 재직 중인 직원의 퇴직여부 컬럼값은 ‘N’

SELECT EMP_ID, EMP_NAME, PHONE, HIRE_DATE, ENT_YN
FROM employee
WHERE ENT_YN = 'N' AND PHONE LIKE '%2'
ORDER BY HIRE_DATE DESC
LIMIT 3;

-- 2. 재직 중인 ‘대리’들의 직원명, 직급명, 급여, 사원번호, 이메일, 전화번호, 입사일을 출력하세요.
-- 단, 급여를 기준으로 내림차순 출력하세요.
SELECT a.EMP_NAME, b.JOB_NAME, a.SALARY, a.EMP_ID, a.EMAIL, a.PHONE, a.HIRE_DATE
FROM employee a JOIN job b ON a.JOB_CODE = b.JOB_CODE
WHERE ENT_YN = 'N' AND JOB_NAME = '대리'
ORDER BY SALARY DESC;

-- 3. 재직 중인 직원들을 대상으로 부서별 인원, 급여 합계, 급여 평균을 출력하고, 마지막에는 전체 인원과 전체 직원의 급여 합계 및 평균이 출력되도록 하세요.
-- 단, 출력되는 데이터의 헤더는 컬럼명이 아닌 ‘부서명’, ‘인원’, ‘급여합계’, ‘급여평균’으로 출력되도록 하세요.
SELECT b.DEPT_TITLE AS '부서명', COUNT(*) AS '인원', SUM(SALARY) AS '급여 합계', AVG(SALARY) AS '급여 평균'
FROM employee a JOIN department b ON a.DEPT_CODE = b.DEPT_ID
WHERE a.ENT_YN = 'N'
GROUP BY DEPT_TITLE
WITH ROLLUP;

-- 4. 전체 직원의 직원명, 주민등록번호, 전화번호, 부서명, 직급명을 출력하세요.
-- 단, 입사일을 기준으로 오름차순 정렬되도록 출력하세요.
SELECT a.EMP_NAME, a.EMP_NO, a.PHONE, b.DEPT_TITLE, c.JOB_NAME
FROM employee a LEFT JOIN department b ON a.DEPT_CODE = b.DEPT_ID JOIN job c ON a.JOB_CODE = c.JOB_CODE
ORDER BY HIRE_DATE;

-- 5번
-- <1단계> 전체 직원 중 연결된 관리자가 있는 직원의 인원을 출력하세요.
-- 참고. 연결된 관리자가 있다는 것은 관리자사번이 NULL이 아님을 의미함
SELECT COUNT(*)
FROM employee
WHERE MANAGER_ID IS NOT NULL;

-- <2단계> 1단계에서 조회한 내용에는 문제가 조금 있습니다. 관리자사번이 존재하여 연결된 관리자가 있기는 하나, 해당 관리자가 직원 목록에 존재하지 않는 직원이 있습니다.
-- 따라서 1단계를 디벨롭하여 직원 목록에 관리자사번이 존재하는 직원의 인원을 출력하세요.
SELECT COUNT(*)
FROM employee a
JOIN employee b ON a.EMP_ID = b.MANAGER_ID;

-- <3단계> 모든 직원의 직원명과 관리자의 직원명을 출력하세요.
-- 참고. ‘모든 직원’이므로 관리자가 존재하지 않는 직원도 출력되어야 합니다.
-- 이름순으로 정렬해주세요
SELECT a.EMP_NAME, b.EMP_NAME
FROM employee a
LEFT JOIN employee b ON a.MANAGER_ID = b.EMP_ID
ORDER BY a.EMP_NAME;

-- <4단계> 관리자가 존재하는 직원의 직원명, 부서명, 관리자의 직원명, 관리자의 부서명을 출력하세요.
-- 이름순으로 정렬해주세요
SELECT
    a.EMP_NAME,
    c.DEPT_TITLE,
    b.EMP_NAME,
    d.DEPT_TITLE
FROM employee a
JOIN employee b
    ON a.MANAGER_ID = b.EMP_ID
LEFT JOIN department c
    ON a.DEPT_CODE = c.DEPT_ID
LEFT JOIN department d
    ON b.DEPT_CODE = d.DEPT_ID
ORDER BY a.EMP_NAME ASC;