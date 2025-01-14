import { useEffect, useState } from "react"
import api from "../../services/api"
import { Link } from 'react-router-dom';
import "./home.css"

const Home = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading ] = useState(true)

  useEffect(() => {
    const loadMovie = async () => {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: process.env.REACT_APP_API_KEY_TMDB,
          language: "pt-BR",
          page: 1
        }

      })

      setMovies(response.data.results.slice(0, 10))

      setLoading(false)
    }

    loadMovie();
  }, [])

  if(loading) {
    return(
      <div className="loading">
        <h2>Carregando filmes...</h2>
      </div>
    )
  }
  return (
    <div className="container">
      <div className="list-movies">
        {movies.map((movie) => {
          return (
            <article key={movie.id}>
              <strong className={`movie-${movie.title}`}>{movie.title}</strong>
              <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title} />
                <Link to={`/filme/${movie.id}`}>Acessar</Link>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Home;
