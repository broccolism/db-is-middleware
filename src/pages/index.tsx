import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import styles from './index.module.css';

type ArchiveItem = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
};

type DisciplineRow = {
  label: string;
  state: string;
  href: string;
};

const archiveItems: ArchiveItem[] = [
  {
    eyebrow: '1과목 · 소프트웨어 설계',
    title: '요구사항 분석 용어 디버깅',
    description:
      '구조적 분석, DFD, DD, CASE, HIPO, TAGS, UML, ISO/IEC 9126/25010을 교재 문장 그대로 외우기 전에 한번 분해합니다.',
    href: '/docs/software-design/requirements-analysis',
  },
  {
    eyebrow: '1과목 · UI 설계',
    title: '사용자 인터페이스 용어 디버깅',
    description:
      'UI의 세 가지 분야와 “사용자 인터페이스 개발 시스템”이라는 애매한 표현을 시험용/이해용으로 나눕니다.',
    href: '/docs/software-design/user-interface',
  },
  {
    eyebrow: '이미지 저장소 · UML',
    title: 'UML 다이어그램 예제 모음',
    description:
      '순차, 클래스, 유스케이스 다이어그램을 같은 온라인 쇼핑몰 예제로 나란히 비교합니다.',
    href: '/docs/image-repository/uml-diagram-examples',
  },
  {
    eyebrow: '미들웨어 · 1990s fossil',
    title: 'DB는 미들웨어다?',
    description:
      '정처기 교재의 단골 문장 “DBMS는 대표적 미들웨어”가 어디서 굳어졌는지 추적합니다.',
    href: '/docs/software-design/db-is-not-middleware',
  },
];

const disciplineRows: DisciplineRow[] = [
  {
    label: '1과목. 소프트웨어 설계',
    state: '요구사항 분석, UML, 품질 요구사항, UI 설계 정리 중',
    href: '/docs/category/1과목-소프트웨어-설계',
  },
  {
    label: '2과목. 소프트웨어 개발',
    state: '대기 중',
    href: '/docs/category/2과목-소프트웨어-개발',
  },
  {
    label: '3과목. 데이터베이스 구축',
    state: '대기 중',
    href: '/docs/category/3과목-데이터베이스-구축',
  },
  {
    label: '4과목. 프로그래밍 언어 활용',
    state: '대기 중',
    href: '/docs/category/4과목-프로그래밍-언어-활용',
  },
  {
    label: '5과목. 정보시스템 구축관리',
    state: '대기 중',
    href: '/docs/category/5과목-정보시스템-구축관리',
  },
];

export default function Home(): ReactNode {
  return (
    <Layout
      title="정처기 교재 문장 디버깅 아카이브"
      description="정보처리기사 교재의 낡거나 애매한 문장을 시험 관점과 실무 관점으로 다시 읽는 아카이브">
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>정보처리기사 × 질문형 학습 아카이브</p>
            <h1>DB is Middleware</h1>
            <p className={styles.lead}>
              정처기 교재를 읽다가 “이게 진짜 맞나?” 싶은 문장을 모읍니다.
              시험장에서는 맞아야 하고, 실무에서는 오해하면 곤란한 표현들을
              둘 다 놓치지 않게 정리합니다.
            </p>
            <div className={styles.actions}>
              <Link className={styles.primaryAction} to="/docs/intro">
                과목별 아카이브 보기
              </Link>
              <Link className={styles.secondaryAction} to="/docs/image-repository/uml-diagram-examples">
                이미지 저장소 보기
              </Link>
            </div>
          </div>
          <aside className={styles.evidencePanel} aria-label="아카이브 현재 상태">
            <p className={styles.panelLabel}>현재 수집 중</p>
            <strong>1과목 소프트웨어 설계</strong>
            <span>요구사항 분석 · UML · UI · 이미지 예제</span>
            <div className={styles.rule} />
            <p>
              목표는 교재를 비웃는 것이 아니라, 시험용 암기와 실무용 이해를
              같은 페이지에 나란히 놓는 것입니다.
            </p>
          </aside>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>recent notes</p>
            <h2>최근 정리한 문장들</h2>
          </div>
          <div className={styles.archiveGrid}>
            {archiveItems.map((item) => (
              <Link className={styles.archiveCard} to={item.href} key={item.href}>
                <span>{item.eyebrow}</span>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>map</p>
            <h2>과목별 진행 상태</h2>
          </div>
          <div className={styles.subjectList}>
            {disciplineRows.map((row) => (
              <Link className={styles.subjectRow} to={row.href} key={row.href}>
                <span>{row.label}</span>
                <strong>{row.state}</strong>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
