import axios from "axios";

const BASE_URL = "https://3b080923-f370-4736-86c8-4328ae284da7-00-lgi9qj86ur5b.spock.replit.dev/";

export const getRandomQoute = async()=> {
    const response = await axios.get(`${BASE_URL}/quote`);
        return response.data;
};

export const saveFavoriteQuote = async(quote)=>{
    const response = await axios.post(`${BASE_URL}/quote`,quote)
        return response.data;
};
