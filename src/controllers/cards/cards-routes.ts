import { FastifyInstance } from "fastify";
import { GetCardsController } from "./get-cards-controller";

export async function CardsRoutes(app: FastifyInstance){
     app.get("/cards",GetCardsController)
}
