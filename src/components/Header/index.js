import './header.css';
import { Link } from 'react-router-dom';
function Header () {
  return(
    <header>
      <Link id='home' className='logo' to='/'>Prime Flix</Link>
      <Link id='favorites' className='favorites' to='/favorites'>Meus filmes</Link>
    </header>
  )
}

export default Header

