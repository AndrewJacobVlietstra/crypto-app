import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import * as Components from './components';

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Components.Navbar />
      </div>
      <div className='main'>
        main
      </div>
      <div className='footer'>
        footer
      </div>
    </div>
  )
}

export default App;