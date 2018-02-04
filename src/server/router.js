const Router = require('koa-router')
const UserAgent = require('koa-useragent')

const router = new Router()

router.use(async (ctx, next) => {
  ctx.res.statusCode = 200
  await next()
  ctx.respond = false
})

router.get(
  [
    '/favicon.ico',
    '/_next*',
    '/static*'
  ],
  (ctx) => ctx.responseStatic()
)

router.get(
  [
    '/',
    '/:account',
    '/:account/tagged/:tag'
  ],
  UserAgent,
  (ctx) => ctx.responsePages(
    ctx.userAgent.isMobile ? '/Mobile' : '/Desktop',
    () => ({
      params: ctx.params,
      data: {}
    })
  )
)

module.exports = router