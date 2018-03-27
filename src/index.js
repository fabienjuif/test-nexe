/* eslint-disable global-require */
const Koa = require('koa')
const conditional = require('koa-conditional-get')
const etag = require('koa-etag')
const bodyParser = require('koa-bodyparser')
const serve = require('koa-static')
const compress = require('koa-compress')

const start = ({
  scope,
  resources,
} = {}) => {
  const app = new Koa()

  app.use(conditional())
  app.use(etag())
  app.use(compress())
  app.use(bodyParser())

  app.use(async (ctx) => {
    ctx.body = 'yooo\n'
  })

  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Listening to ${PORT}`) // eslint-disable-line no-console
  })
}

start()
