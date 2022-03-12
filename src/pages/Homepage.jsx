import React, { useState, useEffect } from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';

const { Title } = Typography;

const Homepage = () => {

  let options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      limit: '50',
      offset: '0',
      orderBy: '24hVolume',
      orderDirection: 'desc'
    },
    headers: {
      'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key': '365bd88eeamsh85deaac8b0cbde4p1f0434jsnd3708c206edf'
    }
  };
  
  
  useEffect(() => {
    axios
      .request(options)
      .then( response => console.log(response.data.data) )
      .catch( error => console.error(error) );
  }, []);

  return (
    <>
      <Title level={2} className="heading">Global Crypto Stats</Title>
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value="5" /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value="5" /></Col>
        <Col span={12}><Statistic title="Total Market Cap" value="5" /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value="5" /></Col>
        <Col span={12}><Statistic title="Total Markets" value="5" /></Col>
      </Row>
    </>
  )
}

export default Homepage;