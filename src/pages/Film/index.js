import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import './filme-info.css';


function Filme() {
  const { id } = useParams();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilms() {
      await api.get(`/movie/${id}`, {
        params: {
          api_key: '7c9d823bb01b90283436e16503b62a08',
          language: 'pt-BR',
        }
      })
        .then((response) => {
          console.log(response.data);
          setFilme(response.data);
          setLoading(false);

        })
        .catch(() => {
          console.log('filme não encontrado')
        })

    }

    loadFilms();

    return() => {
      console.log('Componente foi desmotando')
    }

  }, []);

  if (loading) {
    return (
      <div className='loading'></div>
    );
  }

  return (
    <div className='film-details'>
      <h1 id='title'>{filme.title}</h1>


      <img
        id='details-film'
        src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}
      />
      <div className='tags'>
        <strong id='tagline'>{filme.tagline}</strong>
        {filme.genres.map((genre) => {

          <ul key={id}>
            <li>{genre.name}</li>
          </ul>
          console.log('genero', genre.name)
        })}
      </div>
      <hr />

      <h3 id='sinopse'>Sinopse</h3>
      <span id='description-sinopse'>{filme.overview}</span>

      <div id='release_date' className='release_date'>
        <h4 >Data de lançamento</h4>
        <span>{filme.release_date}</span>
      </div>

      <strong id='avaliation'>Avaliação: {filme.vote_average} / 10</strong>

    </div>
  );
}

export default Filme;
