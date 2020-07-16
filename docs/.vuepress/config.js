module.exports = {
  title: 'lavaclient',
  theme: "yuu",
  head: require("./config/head"),
  base: "/docs/",
  themeConfig: {
    yuu: {
      colorThemes: ['red', 'purple'],
      disableThemeIgnore: true,
    },
    editLinks: false,
    docsDir: '/docs',
    editLinkText: '',
    lastUpdated: false,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar")
  }
}
