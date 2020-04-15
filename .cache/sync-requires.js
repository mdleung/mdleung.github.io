const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/matthewleung/Documents/GitHub/gatsby-starter-22boxes-uno/src/templates/blog-post.js"))),
  "component---src-templates-work-js": hot(preferDefault(require("/Users/matthewleung/Documents/GitHub/gatsby-starter-22boxes-uno/src/templates/work.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/matthewleung/Documents/GitHub/gatsby-starter-22boxes-uno/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/matthewleung/Documents/GitHub/gatsby-starter-22boxes-uno/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/matthewleung/Documents/GitHub/gatsby-starter-22boxes-uno/src/pages/index.js"))),
  "component---src-pages-work-js": hot(preferDefault(require("/Users/matthewleung/Documents/GitHub/gatsby-starter-22boxes-uno/src/pages/work.js")))
}

