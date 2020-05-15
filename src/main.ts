import * as server from './core/server.ts'

try {
  server.start()
}
catch(error) {
  console.error(error)
}