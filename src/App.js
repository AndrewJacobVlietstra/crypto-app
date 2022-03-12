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
        
        <div className='footer'>
          <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
            Cryptoverse <br />
            All rights reserved.
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>

    </div>
  )
}

export default App;