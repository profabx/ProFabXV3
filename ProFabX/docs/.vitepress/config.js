import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default {
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'ProFabXV3',
      description: '基于 VitePress 的网站'
    },
    '/en/': {
      lang: 'en-US',
      title: 'ProFabXV3',
      description: 'A site based on VitePress'
    },
    '/ja/': {
      lang: 'ja-JP',
      title: 'ProFabXV3',
      description: 'VitePress に基づくサイト'
    }
  },
  themeConfig: {
    nav: [
      { text: 'Fab课程', link: '/fab/' },
      { text: '工程样机开发', link: '/prototype/' },
      { text: 'OSV', link: '/osv/' },
      { text: '关于ProFabX', link: '/about/' }
    ],
    sidebar: {
      '/fab/': [
        {
          text: 'Fab课程',
          items: [
            { text: 'NexMaker Fab课程', link: '/fab/nexmaker' },
            { text: 'Fab实验室', link: '/fab/lab' },
            { text: 'Fab academy', link: '/fab/academy' },
            { text: 'MIT FabLab认证', link: '/fab/mit' },
            { text: '探索', link: '/fab/explore' }
          ]
        }
      ],
      '/prototype/': [
        {
          text: '工程样机开发',
          items: [
            { text: '材料', link: '/prototype/materials' },
            { text: '制造工艺', link: '/prototype/process' },
            { text: '后处理', link: '/prototype/postprocess' },
            { text: '测试', link: '/prototype/testing' },
            { text: '探索', link: '/prototype/explore' }
          ]
        }
      ],
      '/osv/': [
        {
          text: 'OSV',
          items: [
            { text: '教育套件', link: '/osv/education' },
            { text: '工程方案', link: '/osv/solutions' },
            { text: '探索', link: '/osv/explore' }
          ]
        }
      ],
      '/about/': [
        {
          text: '关于ProFabX',
          items: [
            { text: '介绍', link: '/about/intro' },
            { text: '团队', link: '/about/team' },
            { text: '联系', link: '/about/contact' }
          ]
        }
      ]
    }
  }
}
