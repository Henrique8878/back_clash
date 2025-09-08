import 'dotenv/config'
import * as z from 'zod'

const envSchema = z.object({
    BASE_URL_CLASH:z.string(),
    KEY_API_CLASH:z.string(),
    PORT:z.string(),
})

const _env = envSchema.safeParse(process.env)

if(_env.success==false){
    throw new Error("Erro nas variáveis de ambiente")
}

export const env = _env.data

