import { Middleware } from 'https://deno.land/x/oak/middleware.ts'

export const errorHandler:Middleware = async ({ response }, next) => {
  try {
    await next()
  } catch (error) {
    console.log(error)
    response.status = 500
    response.body = { error: 'Server error' }
  }
}
