import { Application } from 'https://deno.land/x/oak/application.ts'
import { router } from './router.ts'
import { environment } from './environment.ts'

export const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

export function start() {
  console.log(`Start server at port ${environment.PORT}`)
  app.listen({ port: environment.PORT })
}
