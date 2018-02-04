const Koa = require('koa')
const Next = require('next')
const router = require('./router.js')

const { PORT, NODE_ENV } = process.env

const next = Next({ dev: NODE_ENV !== 'production', dir: './src' })

const server = new Koa()

server.context.responseStatic = function() {
  return next.handleRequest(
    this.req,
    this.res
  )
}

server.context.responsePages = function(pagepath, query) {
  return next.render(
    this.req,
    this.res,
    pagepath,
    query
  )
}

server.use(router.routes())
server.use(router.allowedMethods())

next.prepare().then(() => server.listen(PORT || 7000))