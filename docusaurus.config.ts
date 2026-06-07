import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const GITHUB_USER = process.env.GH_USER ?? 'broccolism';
const PROJECT_NAME = 'db-is-middleware';

const config: Config = {
  title: 'DB is Middleware',
  tagline: '"DB는 미들웨어이다" — 정처기 교재가 진심으로 주장한 바로 그 문장에서 시작합니다',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: `https://${GITHUB_USER}.github.io`,
  baseUrl: `/${PROJECT_NAME}/`,

  organizationName: GITHUB_USER,
  projectName: PROJECT_NAME,
  trailingSlash: false,

  onBrokenLinks: 'warn',

  markdown: {
    format: 'detect',
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en', 'ko'],
        indexBlog: true,
        indexDocs: true,
        indexPages: true,
        docsRouteBasePath: '/docs',
        blogRouteBasePath: '/blog',
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: `https://github.com/${GITHUB_USER}/${PROJECT_NAME}/tree/master/`,
        },
        blog: {
          showReadingTime: true,
          blogTitle: '팩트체크 연재',
          blogDescription: '정처기 공부하다 발견한 의심스러운 문장들, 실무 관점에서 팩트체크',
          postsPerPage: 10,
          feedOptions: {
            type: ['rss', 'atom'],
            title: 'DB is Middleware — 팩트체크 연재',
            description: '정처기 시험과 실무 사이의 간극을 기록합니다',
            xslt: true,
          },
          editUrl: `https://github.com/${GITHUB_USER}/${PROJECT_NAME}/tree/master/`,
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'DB is Middleware',
      logo: {
        alt: 'DB is Middleware Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '과목별 아카이브',
        },
        {to: '/blog', label: '팩트체크 연재', position: 'left'},
        {to: '/blog/tags', label: '태그', position: 'left'},
        {
          href: `https://github.com/${GITHUB_USER}/${PROJECT_NAME}`,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '둘러보기',
          items: [
            {label: '과목별 아카이브', to: '/docs/intro'},
            {label: '팩트체크 연재', to: '/blog'},
            {label: '태그', to: '/blog/tags'},
          ],
        },
        {
          title: '참여하기',
          items: [
            {
              label: '이슈/제보',
              href: `https://github.com/${GITHUB_USER}/${PROJECT_NAME}/issues`,
            },
            {
              label: '기여 가이드',
              href: `https://github.com/${GITHUB_USER}/${PROJECT_NAME}/blob/master/CONTRIBUTING.md`,
            },
          ],
        },
        {
          title: '기타',
          items: [
            {label: 'RSS', href: 'pathname:///blog/rss.xml'},
            {
              label: 'GitHub',
              href: `https://github.com/${GITHUB_USER}/${PROJECT_NAME}`,
            },
          ],
        },
      ],
      copyright: `본 사이트는 특정 교재·저자·기관을 비방할 목적이 없으며, 학습자 간 정보 공유가 목적입니다. © ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java', 'sql', 'bash', 'yaml', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
