import axios from 'axios'
import { env } from '../env/envSchema'


export const api = axios.create({
    baseURL:env.BASE_URL_CLASH,
    headers:{
        Authorization: `Bearer ${env.KEY_API_CLASH}`
    }
})