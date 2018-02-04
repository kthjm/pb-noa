const Router = require('koa-router')
const UserAgent = require('koa-useragent')

const router = new Router()

router.use(async (ctx, next) => {
  ctx.res.statusCode = 200
  await next()
})

router.get(
  [
    '/favicon.ico',
    '/_next*',
    '/static*'
  ],
  async (ctx) => {
    await ctx.responseStatic()
    ctx.respond = false
  }
)

router.get(
  [
    '/',
    '/:account',
    '/:account/tagged/:tag'
  ],
  UserAgent,
  async (ctx) => {

    await ctx.responsePages(
      ctx.userAgent.isMobile ? '/Mobile' : '/Desktop',
      () => ({
        params: ctx.params,
        data: {}
      })
    )

    ctx.respond = false
  }
)

module.exports = router