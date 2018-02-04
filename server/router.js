const Router = require('koa-router')
const UserAgent = require('koa-useragent')

const router = new Router()

const commonMiddleware = async (ctx, next) => {
  ctx.res.statusCode = 200
  await next()
  ctx.respond = false
}

router.get(
  [
    '/favicon.ico',
    '/_next*',
    '/static*'
  ],
  commonMiddleware,
  (ctx) => ctx.responseStatic()
)

router.get(
  [
    '/',
    '/:account',
    '/:account/tagged/:tag'
  ],
  commonMiddleware,
  UserAgent,
  (ctx) =>
    ctx.responsePage({
      page: ctx.userAgent.isMobile ? '/Mobile' : '/Desktop',
      query: () => ({
        params: ctx.params,
        data: {}
      })
    })
)

module.exports = router