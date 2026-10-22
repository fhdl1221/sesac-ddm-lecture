CREATE TABLE team_info(
	TEAM_CODE INT AUTO_INCREMENT PRIMARY KEY,
    TEAM_NAME VARCHAR(100) NOT NULL,
    TEAM_DETAIL VARCHAR(500),
    USE_YN CHAR(2) DEFAULT 'Y' CHECK(USE_YN IN('Y', 'N'))
);
DESCRIBE team_info;

CREATE TABLE member_info(
	MEMBER_CODE INT AUTO_INCREMENT PRIMARY KEY,
    MEMBER_NAME VARCHAR(70) NOT NULL,
    BIRTH_DATE DATE,
    DIVISION_CODE CHAR(2),
    DETAIL_INFO VARCHAR(500),
    CONTACT VARCHAR(50),
    TEAM_CODE INT,
    ACTIVE_STATUS CHAR(2) DEFAULT 'Y'
        CHECK (ACTIVE_STATUS IN ('Y', 'N', 'H')),
    FOREIGN KEY (TEAM_CODE)
        REFERENCES TEAM_INFO(TEAM_CODE)
);
DESCRIBE member_info;

INSERT INTO team_info VALUES(NULL, '음악감상부', '클래식 및 재즈 음악을 감상하는 사람들의 모임', DEFAULT);
INSERT INTO team_info VALUES(NULL, '맛집탐방부', '맛집을 찾아다니는 사람들의 모임', 'N');
INSERT INTO team_info VALUES(NULL, '행복찾기부', NULL, DEFAULT);
SELECT * FROM team_info;

INSERT INTO member_info VALUES
    (1, '송가인', '1990-01-30', '1', '안녕하세요 송가인입니다~', '010-9494-9494', 1, 'H'),
    (2, '임영웅', '1992-05-03', NULL, '국민가수 임영웅입니다~', 'hero@trot.com', 1, 'Y'),
    (3, '태진아', NULL, NULL, NULL, '(1급 기록)', 3, 'Y');
SELECT * FROM member_info;