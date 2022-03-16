import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': "e022c0f9f5mshfa7183a09950ff8p13a5dajsn961b176413ba" ,
    },
  });
    
  return data;
}