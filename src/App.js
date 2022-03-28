import { useEffect, useState } from 'react';
import './assets/css/index.css';
import { Routes, Route } from 'react-router-dom';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import FolderLayout from './layouts/FolderLayout';
import MainLayout from './layouts/MainLayout';
import PublicLayout from './layouts/PublicLayout';
import Home from './pages/Home';
import VerifyAccount from './pages/VerifyAccount';

export default function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path='/verify-account' element={<VerifyAccount />} />
        </Route>
      </Routes>
    </div>
  );
}
