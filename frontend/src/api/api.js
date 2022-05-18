import axios from 'axios'

export const fetch = async () => {
  const BASE_URL = "https://jsonplaceholder.typicode.com";
  try {
    return await axios.get(`${BASE_URL}/users`);
  } catch (e) {
    return [];
  }
}