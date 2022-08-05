import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './views/Products';
import ProductDetail from './components/ProductDetail';
import ProductEdit from './components/ProductEdit';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} default />
          <Route path="/:id" element={<ProductDetail />} />
          <Route path="edit/:id" element={<ProductEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
