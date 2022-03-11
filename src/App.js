import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import './App.css';

import { Navbar } from './components';
import { Homepage, ExchangesPage, CryptocurrenciesPage, CryptoDetailsPage, NewsPage } from './pages';

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>

      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/exchanges' element={<ExchangesPage />} />
              <Route path='/cryptocurrencies' element={<CryptocurrenciesPage />} />
              <Route path='/crypto/:coinId' element={<CryptoDetailsPage />} />
              <Route path='/news' element={<NewsPage />} />
            </Routes>
          </div>
        </Layout>
      </div>

      <div className='footer'>
        footer
      </div>
    </div>
  )
}

export default App;