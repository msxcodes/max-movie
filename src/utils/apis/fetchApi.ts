import { Erica_One } from "next/font/google";
import axios from "axios"
import { IFetchApi } from "../interface/fetchApiInterface";

const BASE_URL = "https://api.themoviedb.org/3"
const TMDB_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN_KEY;

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
}

export const fetchApiData = async (endpoint: string, params?:any) => {
    try {
       const {data, status} = await axios.get(BASE_URL+endpoint, {
        headers,
        params,
       })
       return data;
       
    } catch (error) {
      console.log(error)  
      return error;
    }
}
