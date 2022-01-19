import axios from 'axios';
import { toast } from 'react-toastify';

const getMovies = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 1000,

  params: {
    api_key: '843d6905879c9b52f41f5f6a1e2c8966',
  },
});

export async function fetchMovies(q) {
  try {
    const { data } = await getMovies(q);
    return data;
  } catch (error) {
    toast.error(`Нет фильма по вашему запросу`);
  }
}
