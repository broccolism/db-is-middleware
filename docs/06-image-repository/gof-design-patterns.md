---
title: GoF 디자인 패턴 23가지 다이어그램
description: "GoF 생성, 구조, 행위 패턴 23가지를 한 문장 정의와 시각 자료로 정리"
tags: [design-pattern, gof, diagram, software-design]
sidebar_position: 2
---

# GoF 디자인 패턴 23가지 다이어그램

**한 줄로**: GoF 패턴은 객체 생성, 객체 구조 조합, 객체 간 책임 분배에서 자주 반복되는 설계 모양에 이름을 붙인 것이다.

여기서는 시험 암기보다 “어떤 객체가 누구를 알고, 누구에게 책임을 넘기는가”가 보이도록 박스와 화살표 중심으로 정리한다.

| 분류 | 패턴 | 핵심 질문 |
| --- | --- | --- |
| 생성 패턴 | 추상 팩토리, 빌더, 팩토리 메소드, 프로토타입, 싱글턴 | 객체를 누가, 어떤 방식으로 만들까? |
| 구조 패턴 | 어댑터, 브리지, 컴포지트, 데코레이터, 퍼사드, 플라이웨이트, 프록시 | 객체들을 어떻게 연결하고 감쌀까? |
| 행위 패턴 | 책임 연쇄, 커맨드, 인터프리터, 반복자, 중재자, 메멘토, 옵저버, 상태, 전략, 템플릿 메소드, 비지터 | 객체들이 어떻게 책임을 나눠 행동할까? |

## UML 화살표 범례

| 관계 | 표기 | 방향 |
| --- | --- | --- |
| 상속, 일반화 | ![상속 일반화 화살표](/img/image-repository/gof-patterns/legend-inheritance.svg)<br />실선 + 빈 삼각형 | 하위 클래스에서 상위 클래스 쪽으로 향한다. 삼각형은 부모 쪽에 붙는다. |
| 구현, 실체화, `implements` | ![구현 실체화 화살표](/img/image-repository/gof-patterns/legend-realization.svg)<br />점선 + 빈 삼각형 | 구현 클래스에서 인터페이스 쪽으로 향한다. 삼각형은 인터페이스 쪽에 붙는다. |
| 호출, 생성, 위임, 참조 | ![일반 호출 참조 화살표](/img/image-repository/gof-patterns/legend-call.svg)<br />일반 화살표 | 실제 호출하거나 알고 있는 대상 쪽으로 향한다. |


## 생성 패턴

객체를 어떻게 만들 것인지에 대한 패턴이다. 핵심은 `new`를 흩뿌리지 않고 생성 책임을 분리하는 데 있다.

### 추상 팩토리 패턴

서로 관련 있는 객체들을 구체 클래스를 지정하지 않고 제품군 단위로 생성한다.

![추상 팩토리 패턴 다이어그램](/img/image-repository/gof-patterns/abstract-factory.svg)

### 빌더 패턴

복잡한 객체의 생성 절차와 표현을 분리하여 같은 절차로 다른 결과를 만들 수 있게 한다.

![빌더 패턴 다이어그램](/img/image-repository/gof-patterns/builder.svg)

### 팩토리 메소드 패턴

객체 생성 메서드를 상위 타입에 두고, 실제 생성할 객체는 하위 클래스가 결정한다.

![팩토리 메소드 패턴 다이어그램](/img/image-repository/gof-patterns/factory-method.svg)

### 프로토타입 패턴

새 객체를 직접 생성하지 않고 기존 원본 객체를 복제하여 객체를 만든다.

![프로토타입 패턴 다이어그램](/img/image-repository/gof-patterns/prototype.svg)

### 싱글턴 패턴

클래스의 인스턴스를 하나만 만들고 어디서든 그 인스턴스에 접근하게 한다.

![싱글턴 패턴 다이어그램](/img/image-repository/gof-patterns/singleton.svg)

## 구조 패턴

클래스나 객체를 어떻게 조합해 더 큰 구조를 만들 것인지에 대한 패턴이다.

### 어댑터 패턴

호환되지 않는 인터페이스를 중간 변환 객체로 맞춰 함께 동작하게 한다.

![어댑터 패턴 다이어그램](/img/image-repository/gof-patterns/adapter.svg)

### 브리지 패턴

추상층과 구현부를 분리하여 두 변화 축을 독립적으로 확장한다.

![브리지 패턴 다이어그램](/img/image-repository/gof-patterns/bridge.svg)

### 컴포지트 패턴

개별 객체와 복합 객체를 같은 인터페이스로 다루어 트리 구조를 표현한다.

![컴포지트 패턴 다이어그램](/img/image-repository/gof-patterns/composite.svg)

### 데코레이터 패턴

원본 객체와 같은 타입의 포장 객체를 덧씌워 기능을 동적으로 추가한다.

![데코레이터 패턴 다이어그램](/img/image-repository/gof-patterns/decorator.svg)

### 퍼사드 패턴

복잡한 서브시스템 앞에 단순한 통합 인터페이스를 제공한다.

![퍼사드 패턴 다이어그램](/img/image-repository/gof-patterns/facade.svg)

### 플라이웨이트 패턴

많은 유사 객체의 공통 상태를 공유하여 메모리 사용량을 줄인다.

![플라이웨이트 패턴 다이어그램](/img/image-repository/gof-patterns/flyweight.svg)

### 프록시 패턴

실제 객체에 대한 대리 객체를 두어 접근 제어, 지연 로딩, 원격 호출 등을 처리한다.

![프록시 패턴 다이어그램](/img/image-repository/gof-patterns/proxy.svg)

## 행위 패턴

객체들이 책임을 나누고 상호작용하는 방법에 대한 패턴이다.

### 책임 연쇄 패턴

요청을 처리자 체인에 흘려보내 처리 가능한 객체가 맡게 한다.

![책임 연쇄 패턴 다이어그램](/img/image-repository/gof-patterns/chain-of-responsibility.svg)

### 커맨드 패턴

요청을 객체로 캡슐화하여 요청자와 실제 수행자를 분리한다.

![커맨드 패턴 다이어그램](/img/image-repository/gof-patterns/command.svg)

### 인터프리터 패턴

언어의 문법 규칙을 객체로 표현하고, 문장을 그 규칙에 따라 해석한다.

![인터프리터 패턴 다이어그램](/img/image-repository/gof-patterns/interpreter.svg)

### 반복자 패턴

컬렉션 내부 구조를 노출하지 않고 원소를 순차적으로 접근하게 한다.

![반복자 패턴 다이어그램](/img/image-repository/gof-patterns/iterator.svg)

### 중재자 패턴

객체들이 서로 직접 통신하지 않고 중재자를 통해 상호작용하게 한다.

![중재자 패턴 다이어그램](/img/image-repository/gof-patterns/mediator.svg)

### 메멘토 패턴

객체의 내부 상태를 캡슐화한 채 저장해두고 나중에 복원한다.

![메멘토 패턴 다이어그램](/img/image-repository/gof-patterns/memento.svg)

### 옵저버 패턴

한 객체의 상태 변화가 발생하면 등록된 관찰자들에게 자동으로 통지한다.

![옵저버 패턴 다이어그램](/img/image-repository/gof-patterns/observer.svg)

### 상태 패턴

객체의 내부 상태에 따라 행동을 바꾸며, 상태별 행동을 별도 클래스로 분리한다.

![상태 패턴 다이어그램](/img/image-repository/gof-patterns/state.svg)

### 전략 패턴

교체 가능한 알고리즘들을 같은 인터페이스로 묶어 런타임에 바꿔 쓴다.

![전략 패턴 다이어그램](/img/image-repository/gof-patterns/strategy.svg)

### 템플릿 메소드 패턴

알고리즘의 전체 골격은 상위 클래스에 두고 일부 단계만 하위 클래스에서 재정의한다.

![템플릿 메소드 패턴 다이어그램](/img/image-repository/gof-patterns/template-method.svg)

### 비지터 패턴

객체 구조의 원소에 수행할 연산을 방문자 객체로 분리한다.

![비지터 패턴 다이어그램](/img/image-repository/gof-patterns/visitor.svg)

## 빠른 구분 포인트

| 헷갈리는 쌍 | 구분 |
| --- | --- |
| 추상 팩토리 vs 팩토리 메소드 | 추상 팩토리는 관련 제품군 전체, 팩토리 메소드는 보통 제품 하나의 생성을 하위 클래스에 위임한다. |
| GoF 빌더 vs 추상 팩토리 | 빌더는 복잡한 객체를 단계적으로 조립하고, 추상 팩토리는 관련 객체 묶음을 선택한다. |
| 어댑터 vs 브리지 | 어댑터는 이미 맞지 않는 인터페이스를 변환하고, 브리지는 처음부터 두 변화 축을 분리한다. |
| 컴포지트 vs 데코레이터 | 컴포지트는 자식 목록을 가진 트리 구조이고, 데코레이터는 같은 타입 객체 하나를 감싸 기능을 덧붙인다. |
| 프록시 vs 데코레이터 | 프록시는 접근을 대리/제어하고, 데코레이터는 기능을 추가한다. |
| 전략 vs 상태 | 전략은 외부에서 알고리즘을 교체하고, 상태는 내부 상태 변화에 따라 행동이 바뀐다. |
| 전략 vs 비지터 | 전략은 알고리즘 하나를 갈아끼우고, 비지터는 여러 타입에 대한 작업 묶음을 갈아끼운다. |
| 반복자 vs 비지터 | 반복자는 순회 방법, 비지터는 방문해서 수행할 작업을 담당한다. |