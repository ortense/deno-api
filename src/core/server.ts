import { Application } from 'https://deno.land/x/oak/mod.ts'
import { environment } from './environment.ts'

export const app = new Application()

app.use(async (ctx) => {
  ctx.response.body = {
    message: 'Hello! I\'m alive!'
  }
})

export function start() {
  console.log(`Start server at port ${environment.PORT}`)
  app.listen({ port: environment.PORT })
}