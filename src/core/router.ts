import { Router } from 'https://deno.land/x/oak/router.ts'

export const router = new Router()

router.get('/', ({ response }) => {
  response.body = { message: 'Hello! I\'m alive!' }
})
