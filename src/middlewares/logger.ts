import { Middleware } from 'https://deno.land/x/oak/middleware.ts'
import {
  magenta,
  bgBlue,
  white,
  yellow,
  underline,
  bold } from 'https://deno.land/std/fmt/colors.ts'


export const logger:Middleware = async ({request, response}, next) => {
  await next()
  
  const now = magenta(`[${(new Date()).toISOString()}]`)
  const method = bgBlue(white(bold(` ${request.method} `)))
  const url = underline(request.url.toString())
  const duration = yellow(`${response.headers.get('X-Response-Time')}`)
  
  console.log(`${now} ${method} ${url} - ${duration}`)
}
