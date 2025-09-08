import { api } from "../../lib/axios";


export async function GetCards(){
    const response = await api.get("/cards")
    return response.data
}