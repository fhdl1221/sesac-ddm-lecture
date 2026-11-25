# 1. 질문 입력 2. 보낼 메시지 목록 만들기 3. 답변 받기 4. 화면에 출력 5. 질문과 답을 history에 저장

import json
import os

from dotenv import load_dotenv # .env 설정 읽기 위해 사용
from openai import APIError, OpenAI # 모델 API 호출

# 메시지 목록을 화면에 보여주고 예시 답변을 돌려준다
def sample_reply(messages):
    print(json.dumps(messages, ensure_ascii=False))
    return "준비된 예시 응답입니다"

# 질문을 받고 답변을 출력하며 대화 이력을 쌓는다
def chat_loop(reply_to):
    history = []
    system = {"role": "system", "content": "당신은 친절한 강사입니다"}

    while True:
        try:
            question = input("You:").strip()
        except (EOFError, KeyboardInterrupt):
            break
        if question.lower() in {"exit", "quit"}:
            break
        if not question: # 파이썬은 조건식에서 빈 문자열을 False 취급한다
            continue

        user = {"role": "user", "content": question}
        messages = [system] + history + [user]
        try:
            reply = reply_to(messages)
        except (APIError, ValueError) as error:
            print("응답 실패", error)
            continue
        print("Bot:", reply)
        history = (history + [user, {"role": "assistant", "content": reply}])[-10:]
    print("종료합니다")

def request_reply(client, messages):
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=messages,
        max_completion_tokens = 500, # 한 답변에 쓸 수 있는 토큰 수의 상한
        temperature=0.7, # 답변의 다양성
    )
    choice = response.choices[0]
    reply = (choice.message.content or "").strip()
    if choice.finish_reason != "stop" or not reply:
        raise ValueError("완료된 텍스트 응답을 받지 못했습니다.")
    return reply

def main():
    load_dotenv()  # .env 안의 값을 환경변수로 읽어온다
    if not os.getenv("OPENAI_API_KEY"):
        raise ValueError(".env에 OPENAI_API_KEY를 설정하세요.")

    with OpenAI(timeout=20.0, max_retries=0) as client:
        def live_reply(messages):
            return request_reply(client, messages)

        chat_loop(live_reply)

if __name__ == "__main__":
    main()