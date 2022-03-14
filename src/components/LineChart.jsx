import React from 'react';
import { Line } from 'react-chartjs-2';
import { 
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Col, Row, Typography } from 'antd';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const { Title } = Typography;


const LineChart = ({ coinHistory, currentPrice, coinName }) => {

  // const coinPrice = [...coinHistory?.data?.history].map(historyPoint => historyPoint?.price);
  // const coinTimeStamp = [...coinHistory?.data?.history].map(historyPoint => new Date(historyPoint?.timestamp * 1000).toLocaleDateString());
  
  const coinPrice = [];
  const coinTimeStamp = [];
  // JavaScript date/time numbers are milliseconds since The Epoch, not seconds since The Epoch like old-style Unix Epoch values. If you have a value in seconds, multiply by 1000
  for (let i = coinHistory?.data?.history?.length - 1; i > 0; i--) {
    coinPrice.push(coinHistory.data.history[i].price);
    coinTimeStamp.push(new Date(coinHistory.data.history[i].timestamp * 1000).toLocaleDateString());
  }

  const data = {
    labels: coinTimeStamp,
    datasets: [
      {
        label: 'Price in USD',
        data: coinPrice,
        fill: false,
        borderColor: '#0071bd',
        backgroundColor: '#0071bd'
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Crypto Chart',
      },
    },
  };

  return (
    <>
      <Row className='chart-header'>
        <Title level={2} className='chart-title'>{coinName} Price Chart</Title>
        <Col className='price-container'>
          <Title level={5} className='price-change'>{coinHistory?.data?.change}%</Title>
          <Title level={5} className='current-price'>Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  )
}

export default LineChart;