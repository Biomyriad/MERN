import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthorForm from './components/AuthorForm';
import AuthorsDisplay from './components/AuthorsDisplay';

import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AuthorsDisplay />} />
      <Route path="/new/" element={<AuthorForm/>} default />
      <Route path="/edit/:id" element={<AuthorForm/>} default />
      {/* <Route path="edit/:id" element={<ProductEdit />} /> */}
    </Routes>
  </BrowserRouter>
);
