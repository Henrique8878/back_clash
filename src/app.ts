import Fastify from 'fastify'
import { ZodError } from 'zod'

export const app = Fastify()

app.setErrorHandler((error,_,reply)=>{
    if(error instanceof ZodError){
        reply.status(400).send({
            message:error.message,
            issues:error.format()
        })
    }

    reply.status(500).send(error)
})