interface IEnvironment {
  PORT:number
}

export const environment:IEnvironment = Object.freeze({
  PORT: Number(Deno.env.get('PORT') || 3000)
})