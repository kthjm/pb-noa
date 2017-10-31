import Koa from 'koa'
import Router from 'koa-router'
import UserAgent from 'koa-useragent'

const server = new Koa()
const router = new Router()
const staticPaths = ['/_next*', '/static*', '/favicon.ico']
const mainPaths = ['/', '/:account', '/:account/tagged/:tag']

export default ({ handleStatic, handlePages }) => {
  staticPaths.forEach(path =>
    router.get(path, async ctx => {
      console.log(`static: ${ctx.req.url}`)
      ctx.res.statusCode = 200
      await handleStatic(ctx.req, ctx.res)
    })
  )

  mainPaths.forEach(path =>
    router.get(path, UserAgent, async ctx => {
      console.log(`page: ${ctx.req.url}`)
      const pagePath = ctx.userAgent.isMobile ? '/Mobile' : '/Desktop'
      const propsQuery = { foo: 10, bar: true }
      ctx.res.statusCode = 200
      await handlePages(ctx.req, ctx.res, pagePath, propsQuery)
    })
  )

  server.use(router.routes())
  return server
}
