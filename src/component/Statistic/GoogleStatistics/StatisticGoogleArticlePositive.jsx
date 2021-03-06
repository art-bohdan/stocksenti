import React from 'react';
import {Card, Col, Row, Statistic} from 'antd';
import {RiseOutlined} from "@ant-design/icons";

const StatisticsArticlePositive = ({value, percent}) => {
  return(
    <Row>
      <Col span={24}>
        <Card bordered={false} size="small">
          <Statistic suffix={<RiseOutlined />} value={value}
                     valueStyle={{color: '#3f8600', fontSize: '16px'}}/>
          <Statistic suffix="%" value={percent} precision={1}
                     valueStyle={{color: 'grey', fontSize: '10px'}}/>
        </Card>
      </Col>
    </Row>
  )
};

export default StatisticsArticlePositive;