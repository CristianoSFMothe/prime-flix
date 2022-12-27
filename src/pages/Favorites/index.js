import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './favorites.css';
function Favorites() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const myListFilms = localStorage.getItem('@primeFlix');

    setFilms(JSON.parse(myListFilms) || []);

  }, []);

  function handleDelete(id) {
    let filterFilm = films.filter((item) => {
      return (item.id !== id);
    });

    setFilms(filterFilm);

    localStorage.setItem('@primeFlix', JSON.stringify(filterFilm));
  }

  return (
    <div className='my-films' id='my-films'>
      <h1>Meus filmes favoritos</h1>

      {films.length === 0 && <span>Não existe nenhum filme salvo nos favoritos</span>}

      <ul>
        {films.map((item) => {
          return(
            <li key={item.id}>
              <span>{item.title}</span>

              <div>
                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                <button onClick={() => handleDelete(item.id)}>Excluir</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Favorites;
