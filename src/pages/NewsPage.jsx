import React, { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";

import { useGetCryptosQuery } from "../services/cryptoApi";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage =
  "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";

const NewsPage = ({ simplified }) => {
  const count = simplified ? 6 : 15;
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({
    newsCategory,
    count,
  });
  const { data: cryptoList } = useGetCryptosQuery(100);

  if (!cryptoNews?.value) return "Loading...";

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="cryptocurrency">Cryptocurrency</Option>
            {cryptoList?.data?.coins.map((coin) => (
              <Option key={coin.name} value={coin.name}>
                {coin.name}
              </Option>
            ))}
          </Select>
        </Col>
      )}
      {cryptoNews.value.map((article) => (
        <Col xs={24} sm={12} lg={8} key={article.name}>
          <Card hoverable className="news-card">
            <a href={article.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {article.name}
                </Title>
                <img
                  src={article?.image?.thumbnail?.contentUrl || demoImage}
                  style={{ maxWidth: "200px", maxHeight: "100px" }}
                  alt="news"
                />
              </div>
              <p>
                {article.description > 100
                  ? `${article.description.substring(0, 100)}...`
                  : article.description}
              </p>
              <div className="provider-container">
                <div>
                  <div>
                    <Avatar
                      src={
                        article.provider[0]?.image?.thumbnail?.contentUrl ||
                        demoImage
                      }
                      alt=""
                    />
                    <Text className="provider-name">
                      {article.provider[0]?.name}
                    </Text>
                  </div>
                  <Text>
                    {moment(article.datePublished).startOf("ss").fromNow()}
                  </Text>
                </div>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default NewsPage;
