
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/brandongines/Downloads/gatsby-master/examples/simple-auth/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/brandongines/Downloads/gatsby-master/examples/simple-auth/src/pages/404.js")),
  "component---src-pages-confirm-js": preferDefault(require("/Users/brandongines/Downloads/gatsby-master/examples/simple-auth/src/pages/confirm.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/brandongines/Downloads/gatsby-master/examples/simple-auth/src/pages/index.js")),
  "component---src-pages-sign-up-js": preferDefault(require("/Users/brandongines/Downloads/gatsby-master/examples/simple-auth/src/pages/sign-up.js")),
  "component---src-pages-surprise-js": preferDefault(require("/Users/brandongines/Downloads/gatsby-master/examples/simple-auth/src/pages/surprise.js"))
}

