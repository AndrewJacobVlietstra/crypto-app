import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser';

import { useGetExchangesQuery } from '../services/cryptoApi';
import { Loader } from '../components';

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  const exchangesList = data?.data?.exchanges;

  if (isFetching) return <Loader />;

  return (
    <>
      <Row className='exchange-heading-row'>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Recommended</Col>
      </Row>

      {exchangesList.map(exchange => 
        <Row className='exchange-row' key={exchange?.uuid}>
          <Col span={6}>
            <Text><strong>{exchange?.rank}.</strong></Text>
            <Avatar className="exchange-image" src={exchange?.iconUrl} />
            <a className='exchange-link' href={`https://www.google.com/search?q=${exchange?.name}`} target="_blank"><strong>{exchange?.name}</strong></a>
          </Col>
          <Col span={6}>${exchange?.['24hVolume'] && millify(exchange?.['24hVolume'])}</Col>
          <Col span={6}>{exchange?.numberOfMarkets && millify(exchange?.numberOfMarkets)}</Col>
          <Col span={6}>{exchange?.recommended ? 'True' : 'False'}</Col>
        </Row>
      )}
    </>
  );
};

export default Exchanges;