import { FastifyReply, FastifyRequest } from "fastify";
import { GetCards } from "../../data/cards/get-cards";
import { ICardGame } from "../../interface/ICardGame";

export async function GetCardsController(request:FastifyRequest, reply:FastifyReply){
    try{
        const cards:ICardGame = await GetCards()
        reply.status(200).send({
            cards:cards
        })
    }catch(e){
        reply.status(500).send({
            message:e
        })
    }
}