import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

import { useGetCryptosQuery } from "../services/cryptoApi";

const CryptocurrenciesPage = ({ simplified }) => {
  // Reduce count of coins on homepage to 10, and have it be 100 on cryptocurrencies page
  const count = simplified ? 10 : 100;

  // Data from API query
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);

  // Storing fetched data locally in useState
  const [cryptos, setCryptos] = useState([]);

  // Keep track of searched coins, filter out ones that don't equal the search
  const [searchTerm, setSearchTerm] = useState("");

  // Any time the cryptoList is updated setCryptos to be the new set of data's coins
  // Any time search term updates, filter the array of cryptos that match search term
  useEffect(() => {
    const filteredData = cryptoList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData);
  }, [cryptoList, searchTerm]);

  if (isFetching) return "Loading...";

  return (
    <>
      <div className="search-crypto">
        {simplified ? null : (
          <Input
            placeholder="Search Cryptos"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            style={{ border: "1px solid #999" }}
          />
        )}
      </div>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((coin) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={coin.uuid}>
            <Link to={`/crypto/${coin.uuid}`}>
              <Card
                title={`${coin.rank}. ${coin.name}`}
                extra={<img className="crypto-image" src={coin.iconUrl} />}
              >
                <p>Price: {`${millify(coin.price)} USD`}</p>
                <p>Market Cap: {`${millify(coin.marketCap)} USD`}</p>
                <p>Daily Change: {`${millify(coin.change)} %`}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CryptocurrenciesPage;
