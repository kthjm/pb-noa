# personal boilerplate for next/koa

```js
const app = Next({ dev })
const server = Noa({
  handleStatic: app.getRequestHandler(),
  handlePages: app.render.bind(app)
})

app.prepare().then(() => server.listen(PORT, (err) => {}))
```

## next.js

#### directory
- pages
- [static](https://github.com/zeit/next.js/#static-file-serving-eg-images)

#### app.getRequestHandler() / handleRequest(req, res, parsedUrl)

[index.js#L86](https://github.com/zeit/next.js/blob/53a2c5a7fc14dd7b6a32ed27080534eefd2362f8/server/index.js#L86)

#### app.render(req, res, pathname, query, parsedUrl)
[index.js#L293](https://github.com/zeit/next.js/blob/53a2c5a7fc14dd7b6a32ed27080534eefd2362f8/server/index.js#L293)

## heroku
- [Error: Cannot find module when deploying to heroku](https://github.com/zeit/next.js/issues/198#issuecomment-299738100)
- [Heroku-specific build steps](https://devcenter.heroku.com/articles/nodejs-support#heroku-specific-build-steps)
