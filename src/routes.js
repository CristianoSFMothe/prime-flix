import { BrowserRouter, Routes, Route} from 'react-router-dom';

import  Home from './pages/Home';
import  Film from './pages/Film';

import Header from './components/Header';
import Erro from './pages/Erro';
import Favorites from './pages/Favorites';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/filme/:id' element={ <Film /> } />
        <Route path='/favorites' element={ <Favorites /> } />

        <Route path='*' element={ <Erro />} />
      </Routes>

    </BrowserRouter>
  )
}

export default RoutesApp;
