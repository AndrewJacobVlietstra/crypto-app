import React, { useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';

const CryptocurrenciesPage = () => {
  const { data: cryptoList, isFetching} = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState(cryptoList?.data?.coins);
  console.log(cryptos)

  return (
    <>
      <Row gutter={[32, 32]} className='crypto-card-container'>
        {cryptos
          .filter(coin => coin.rank <= 10)
          .map( coin => (
            <Col xs={24} sm={12} lg={6} className='crypto-card' key={coin.uuid}>
              <Link to={`/crypto/${coin.uuid}`}>
                <Card title={`${coin.rank}. ${coin.name}`} extra={<img className='crypto-image' src={coin.iconUrl} />}>
                  <p>Price: {`${millify(coin.price)} USD`}</p>
                  <p>Market Cap: {`${millify(coin.marketCap)} USD`}</p>
                  <p>Daily Change: {`${millify(coin.change)} %`}</p>
                </Card>
              </Link>
            </Col>
          ))
        }
      </Row>
    </>
  )
}

export default CryptocurrenciesPage;