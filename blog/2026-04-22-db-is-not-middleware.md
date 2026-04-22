---
slug: db-is-not-middleware
title: "DB는 미들웨어다? 1998년에서 도착한 편지"
description: "정처기 교재에 등장하는 'DBMS는 대표적 미들웨어' 서술의 역사적 기원과 2026년 실무 팩트"
authors: [admin]
tags: [db, architecture, severity-wtf, era-90s]
date: 2026-04-22
---

> **교재/기출 원문 (요약)**
>
> "미들웨어(Middleware)의 대표적 유형으로는 **DB(데이터베이스 미들웨어)**, RPC, MOM, TP-Monitor, ORB, WAS가 있다."
> — 다수의 정처기 수험서 / NCS 학습 모듈 '소프트웨어 설계'

<!-- truncate -->

## 📌 3줄 요약 (TL;DR)

- **시험에선**: "미들웨어의 종류에 **DB가 포함된다**"가 정답입니다. 토 달지 말고 그대로 외우세요.
- **실무에선**: DB(DBMS, 예: MySQL·PostgreSQL·Oracle)는 **데이터 계층**이지 미들웨어가 아닙니다. 미들웨어는 그 DB에 **접속하기 위한 커넥터/드라이버/프록시**를 가리킵니다.
- **결론**: 교재의 'DB'는 본래 'Database **Middleware**(= ODBC, JDBC 같은 DB 접속 미들웨어)'였던 것이 **표 편집 과정에서 "Middleware" 글자가 탈락**한 채 NCS 표준에 박제된 결과입니다.

---

## 🧠 구체적이고 효과적인 답변

### 이 분류가 이상한 이유

1. **DBMS는 데이터 영속 계층이지 계층 간 중개자가 아님.** 미들웨어의 정의는 "서로 다른 애플리케이션/시스템/계층 사이에서 통신·변환·중재를 담당하는 소프트웨어"입니다. DBMS는 요청받아 저장·조회하는 쪽이지, 중개자가 아닙니다.
2. **같은 표에 들어 있는 다른 항목들과 층위가 맞지 않음.** RPC·MOM·ORB·TP-Monitor·WAS는 모두 실제로 미들웨어로 분류됩니다. 그런데 'DB'만 유독 데이터 저장소 자체를 가리키고 있어서 이질적입니다.
3. **ODBC·JDBC·IDAPI 같은 DB 접속 도구들을 설명하면서 'DB 미들웨어'라고 부르는 것은 정확함.** 문제는 교재가 이걸 "DB"로 축약해버려, 마치 **MySQL이 미들웨어인 것처럼 읽히게** 만든다는 점입니다.

### 어쩌다 이렇게 됐나 (역사적 맥락)

- **1990년대 말**: 2-Tier 클라이언트/서버 시대. Visual Basic·Delphi로 만든 클라이언트가 원격 DB에 붙기 위해 **ODBC(Microsoft)·IDAPI(Borland)·Glue(Oracle)** 같은 접속 계층을 썼고, 이들을 **"Database Middleware"** 라고 불렀습니다. 이 시절엔 "어떻게 DB에 붙느냐"가 아키텍처의 중대한 주제였습니다.
- **2000년대**: WAS와 3-Tier가 주류로 올라오면서 DB 접속은 WAS의 **커넥션 풀** 안쪽에 숨고, "Database Middleware"라는 용어 자체가 실무에서 거의 증발합니다.
- **2020년 NCS 개편**: 정보처리기사 시험이 NCS 학습 모듈을 기준으로 전면 개정되면서, 학습 모듈 집필 과정에서 **1990년대 교양서의 미들웨어 분류표를 그대로 인용**. 이때 표 칸 폭 문제인지 집필자 판단인지, `Database Middleware` 열이 **`DB`**로 축약되어 들어갑니다.
- **2020~현재**: 시중 수험서들이 NCS를 베끼면서 "미들웨어 6종: **DB**, RPC, MOM, TP-Monitor, ORB, WAS"가 표준으로 굳어짐. 공식 기출에도 **DB/데이터베이스**가 미들웨어 보기로 등장하게 됩니다.

### 같은 단어, 다른 의미

| 용어 | 교재 속 의미 | 실무에서 가리키는 것 |
|---|---|---|
| DB | 미들웨어의 한 종류 (= DB 접속 미들웨어의 축약) | 데이터 저장소 자체 (MySQL, PostgreSQL …) |
| DBMS | 미들웨어의 대표격 (일부 서술) | RDBMS 등 데이터 관리 시스템 |
| 데이터베이스 미들웨어 | 클라이언트-DB 연결 미들웨어 | ODBC·JDBC·ORM·DB 프록시 |

---

## 🎯 정처기 문제 풀 때 꿀팁

**키워드 매칭 전략** (교재 논리 그대로):
- 보기에 `ODBC`/`JDBC`/`IDAPI`/`Glue`가 나오면 → **DB (미들웨어)** 로 분류
- 문제가 "클라이언트에서 원격 데이터베이스에 접속" 류 표현이면 → **DB**
- "트랜잭션 처리 담당" → **TP-Monitor**
- "분산 객체 호출" → **ORB**
- "비동기 메시지" → **MOM**
- "원격 함수 호출" → **RPC**
- "웹 기반 응용 서버" → **WAS**

**암기 포인트**:
- 미들웨어 6종은 **"DB-RPC-MOM-TP-ORB-WAS"** 순서로 외우는 게 가장 흔합니다.
- 'DB'가 여기 껴있는 게 이상해도 **시험장에선 교재 그대로**. 빼고 고르면 틀립니다.

**함정 주의**:
- "다음 중 미들웨어에 **해당하지 않는** 것은?" 유형에서 'DB' 또는 '데이터베이스'가 보기에 있으면 **탈락 후보로 끌리지만 낚시일 확률이 높습니다**. 교재 기준으론 미들웨어 맞음.
- WAS를 미들웨어로 보느냐 마느냐는 책마다 다릅니다. 시험 해설 기준 WAS도 포함으로 봅니다.

---

## 🛠️ 실무 팩트 체크 (2026년 기준)

**실무에서 "미들웨어"라고 부르는 것들**:

- **API Gateway** (Kong, AWS API Gateway, Istio Gateway 등) — HTTP 계층 라우팅/인증/레이트 리미팅
- **Message Broker** (Kafka, RabbitMQ, NATS) — 비동기 이벤트 허브, 과거 MOM의 계승자
- **Service Mesh** (Istio, Linkerd) — 서비스 간 호출 중재, 과거 ORB가 풀려고 했던 문제의 현대판
- **ORM / DB Proxy** (Hibernate, Prisma, PgBouncer, ProxySQL) — DB 접속 계층. **1998년 'Database Middleware'의 정통 후손**

**실무에서 "DB"라고 부르면 가리키는 것**:

- MySQL, PostgreSQL, Oracle, MongoDB, Redis 같은 **데이터 저장소 제품**. 그 자체로는 미들웨어가 아닙니다. DBMS는 데이터 계층의 엔드포인트입니다.

**한 문장으로**:
> 시험 답안으로 "DB는 미들웨어"는 맞지만, 실무에서 사수한테 "MySQL이 미들웨어죠?"라고 하면 커피를 사야 합니다.

**레퍼런스**:
- [Wikipedia: Middleware — Database middleware](https://en.wikipedia.org/wiki/Middleware) (현재 영문 위키는 Database middleware를 **ODBC류 접속 계층**으로 명확히 서술)
- [AWS Architecture — Microservices communication patterns](https://docs.aws.amazon.com/whitepapers/latest/microservices-on-aws/) (실무 중개 계층 분류)

---

## 💬 토론

다른 정처기 교재에서 본 변형된 서술, 혹은 "우리 회사에선 DB 가리켜 미들웨어라고 부른다" 같은 반례가 있다면 댓글이나 이슈로 알려주세요. 한국 현장의 실제 용법도 기록 가치가 있습니다.
