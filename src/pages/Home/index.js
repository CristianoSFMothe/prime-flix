import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import api from '../../services/api';
import './home.css';

// require('dotenv').config();

function Home() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilms() {
      const response = await api.get('movie/now_playing', {
        params: {
          // api_key: process.env.API_KEY,
          api_key: '7c9d823bb01b90283436e16503b62a08',
          language: 'pt-BR',
          page: 1
        }
      });

      setFilms(response.data.results.slice(0, 10));
      setLoading(false);

    }

    loadFilms();

  }, []);

  if (loading) {
    return (
      <div className='loading'></div>
    );
  }

  return (
    <div className='container' id='container-qa'>
      <div className='list-films' id='list-film-qa'>
        {films.map((filme) => {
          return (
            <article key={filme.id}>
              <strong id='title-qa'>{filme.title}</strong>
              <img
                id='img-qa'
                src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                alt={filme.title}
              />
              <Link id='trailer-qa' to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          );
        })}

      </div>

    </div>
  )
}

export default Home;
