import { BrowserRouter, Routes, Route} from 'react-router-dom';

import  Home from './pages/Home';
import  Film from './pages/Film';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/filme/:id' element={ <Film /> } />
      </Routes>

    </BrowserRouter>
  )
}

export default RoutesApp;