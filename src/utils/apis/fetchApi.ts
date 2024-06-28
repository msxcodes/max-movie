import { Erica_One } from "next/font/google";
import axios from "axios";
import { IFetchApi } from "../interface/fetchApiInterface";

const BASE_URL = "https://api.themoviedb.org/3";

const headers = {
  Authorization:
    "bearer " +
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjM4MTIyYmNhN2RiOGY5NmMxM2MwN2EwNjdhZWRkMyIsInN1YiI6IjY2NjA5YWI2MjU4ZjJmMGM5MjAyNzBhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rcu2MtUFaUEXb5CJ8e_17Rdd9k0lmEiPrPUTfx1D9hA",
};

export const fetchApiData = async (endpoint: string, params?: any) => {
  try {
    const { data, status } = await axios.get(BASE_URL + endpoint, {
      headers,
      params,
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
