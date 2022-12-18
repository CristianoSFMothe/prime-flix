// Base URL https://api.themoviedb.org/3/
// URL da API https://api.themoviedb.org/3/movie/now_playing?api_key=7c9d823bb01b90283436e16503b62a08&language=pt-BR
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export default api;
