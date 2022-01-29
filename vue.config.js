module.exports = {
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  transpileDependencies: [
    'quasar'
  ],
  pages: {
    index: {
      entry: "src/index.js",
      template: "public/index.html",
      title: "Mehmet Uysal",
    },
    admin: {
      entry: "src/admin.js",
      template: "public/index.html",
      title: "Admin Page",
    },
  },
}
