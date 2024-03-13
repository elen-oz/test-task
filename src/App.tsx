import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CartPage from './pages/CartPage';
import ErrorPage from './pages/ErrorPage';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CartPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
