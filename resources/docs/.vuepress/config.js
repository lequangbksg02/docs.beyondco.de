module.exports = {
  title: 'Laravel WebSockets 🚀',
  description: 'WebSockets for Laravel. Done right.',
  
  base: '/docs/',
  dest: './public/docs',

  themeConfig: {
    websocketClientKey: 'documentation',
    displayAllHeaders: true,
    sidebarDepth: 1,
    repo: 'beyondcode/laravel-websockets',
    docsRepo: 'beyondcode/laravel-websockets-docs',
    docsDir: '',
    docsBranch: 'master',
    editLinks: true,
    sidebar: {
      '/1.0/': require('./1.0'),
    },
  }
}