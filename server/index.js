const Koa = require('koa')
const Next = require('next')
const router = require('./router.js')

const { PORT, NODE_ENV } = process.env

const server = new Koa()
const next = Next({ dev: NODE_ENV !== 'production', dir: './served' })

server.context.responseStatic = function() {
  return next.handleRequest(
    this.req,
    this.res
  )
}

server.context.responsePage = function({ page, query }) {
  return next.render(
    this.req,
    this.res,
    page,
    query
  )
}

server.use(router.routes())
server.use(router.allowedMethods())

next.prepare().then(() =>
  server.listen(PORT || 7000)
)