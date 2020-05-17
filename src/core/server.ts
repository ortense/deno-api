import { Application } from 'https://deno.land/x/oak/application.ts'
import { router } from './router.ts'
import { environment } from './environment.ts'
import { timer, logger, errorHandler } from '../middlewares/mod.ts'

export const app = new Application()

app.use(logger)
app.use(timer)
app.use(errorHandler)
app.use(router.routes())
app.use(router.allowedMethods())

export function start() {
  console.log(`Start server at port ${environment.PORT}\n`)
  app.listen({ port: environment.PORT })
}
