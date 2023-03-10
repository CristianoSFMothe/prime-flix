import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import './filme-info.css';
import {TAG} from '../../components/Tag';
import { toast } from 'react-toastify';


function Filme() {
  const { id } = useParams();
  const navigate = useNavigate();
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
          navigate('/', { replace: true});
          return;
        })

    }

    loadFilms();

    return() => {
      console.log('Componente foi desmotando')

    }

  }, [navigate, id]);

  function saveFilm() {
    const myList = localStorage.getItem('@primeFlix');

    let savedMovies = JSON.parse(myList) || [];

    const hasFilm = savedMovies.some((savedMovies) => savedMovies.id === filme.id);

    if (hasFilm) {
      toast.warn('Esse filme já está na lista!')
      return;
    }

    savedMovies.push(filme);

    localStorage.setItem('@primeFlix', JSON.stringify(savedMovies));

    toast.success('Filme salvo com sucesso!')
  }

  if (loading) {
    return (
      <div className='loading'></div>
    );
  }

  return (
    <div id='film-details' className='film-details'>
      <h1 id='title'>{filme.title}</h1>


      <img
        id='details-film'
        src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}
      />
      <div className='tags'>
        <strong id='tagline'>{filme.tagline}</strong>
      </div>

      <hr />

      <h3 id='sinopse'>Sinopse</h3>
      <span id='description-sinopse'>{filme.overview}</span>

      <div className='details-genre'>
        {filme.genres.map((item)=>{return <TAG key={item.id} name={item.name} /> })}
      </div>


      <div id='release_date' className='release_date'>
        <h4 >Data de lançamento</h4>
        <span>{filme.release_date}</span>
      </div>

      <strong id='avaliation'>Avaliação: {filme.vote_average} / 10</strong>

      <div className='area-buttons'>
        <button
          className='btn-save'
          type='button'
          onClick={saveFilm}
        >Salvar</button>

        <button>
          <a className='btn-trailer'
            target="blank"
            rel="external"
            href={`https://youtube.com/results?search_query=${filme.title} Trailer`}
          >
            Trailer
          </a>
        </button>

      </div>

    </div>
  );
}

export default Filme;
