module.exports = {
  title: 'Paul Copplestone',
  description: 'Techie and entrepreneur',
  dest: 'public',
  plugins: ['@vuepress/last-updated', ['@vuepress/google-analytics', { ga: 'UA-93673521-3' }]],
  // head: [
  //   [
  //     'link',
  //     {
  //       rel: 'stylesheet',
  //       href: 'https://gitcdn.xyz/repo/kiwicopple/assets/master/public/css/circular.css',
  //     },
  //   ],
  // ],
  themeConfig: {
    nav: [
      { text: 'Blog', link: '/blog/' },
      { text: 'Principles', link: '/principles/' },
      { text: 'Knowledge', link: '/knowledge/' },
      { text: 'Gists', link: '/gists/' },
      { text: 'Subscribe', link: 'http://eepurl.com/dE68jj' },
    ],
    sidebar: {
      '/blog/': [
        'do-nothing',
        'agile',
        'design',
        'how-to-learn',
        'nimbus-tech-2019-04',
        'augmented-reality',
        'email-to-a-friend',
        'admirable-startups',
        'dividing-equity',
      ],
      '/gists/': [
        'awesome-list',
        'secrets-management-sops',
        'vscode-snippets',
        'bash-profile',
        'postgresql',
        'docker',
        'regex',
        'ecto-phoenix',
        'debounce-and-throttle',
        'tech-management',
        'google-analytics',
        'beanstalk-swap',
        'kill-processes',
      ],
      '/principles/': [
        {
          title: 'Life',
          collapsable: false,
          children: ['life/decisions'],
        },
        {
          title: 'Tech',
          collapsable: false,
          children: ['tech/design'],
        },
        {
          title: 'Startups',
          collapsable: false,
          children: ['startups/seed', 'startups/growth', 'startups/mature'],
        },
      ],
      '/knowledge/': [
        {
          title: 'Agriculture',
          collapsable: false,
          children: ['soil-health', 'soil-nutrients'],
        },
        // {
        //   title: 'Business Practices',
        //   collapsable: false,
        //   children: ['emyth', 'toyota-way'],
        // },
        {
          title: 'Environment',
          collapsable: false,
          children: ['pyrolysis'],
        },
        {
          title: 'Finance',
          collapsable: false,
          children: ['finance/convertible-notes'],
        },
        {
          title: 'Miscellaneous',
          collapsable: false,
          children: ['chess', 'climbing', 'friendship', 'trees', 'mathematics', 'meditation'],
        },
        {
          title: 'People',
          collapsable: false,
          children: ['people/isaac-newton', 'people/marcus-aurelius'],
        },
        {
          title: 'Philosophy',
          collapsable: false,
          children: ['consciousness', 'ethics', 'buddhism', 'stoicism', 'philosophy/desire'],
        },
        {
          title: 'Physics',
          collapsable: false,
          children: ['time'],
        },
        {
          title: 'Sociology',
          collapsable: false,
          children: ['mimetic-theory'],
        },
        {
          title: 'Zoology',
          collapsable: false,
          children: [
            'zoology/bees',
            'zoology/dolphins',
            'zoology/octopus',
            'zoology/rats',
            'zoology/ravens',
            'zoology/shrimp',
            'zoology/tortoises',
          ],
        },
      ],
    },
    docsRepo: 'https://github.com/kiwicopple/paul.copplest.one/',
    docsDir: 'docs',
    editLinks: true,
  },
}
