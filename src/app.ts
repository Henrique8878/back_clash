import cors from '@fastify/cors'
import Fastify from 'fastify'
import { ZodError } from 'zod'
import { CardsRoutes } from './controllers/cards/cards-routes'

export const app = Fastify()

app.register(CardsRoutes)

app.register(cors,{
    origin:"http://localhost:5173",
    methods:["GET","POST","PUT","DELETE"],
    allowedHeaders:["Content-Type","Authorization"],
    credentials:true
})

app.setErrorHandler((error,_,reply)=>{
    if(error instanceof ZodError){
        reply.status(400).send({
            message:error.message,
            issues:error.format()
        })
    }

    reply.status(500).send(error)
})