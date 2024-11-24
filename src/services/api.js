import axios from "axios";

const BASE_URL = "https://q-bcknd.onrender.com";

export const getRandomQoute = async()=> {
    const response = await axios.get(`${BASE_URL}/quote`);
        return response.data;
};

export const saveFavoriteQuote = async(quote)=>{
    const response = await axios.post(`${BASE_URL}/quote`,quote)
        return response.data;
};
