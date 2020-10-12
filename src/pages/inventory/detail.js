import { Button, Card, Col, Modal, Row, Spin, message } from 'antd';
import React, { useCallback, useState } from 'react';

import styles from './detail.less';

const Detail = () => {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState('alarm');

  const [alarmForm, setAlarmForm] = useState(null);
  const [scoreForm, setScoreForm] = useState(null);

  return (
    <div>
      <Card title="基础信息" style={{ marginBottom: 10 }} bordered={false}>
        <Row gutter={24} className={styles.RowStyle}>
          <Col span={8}>订单编号：00001111</Col>
          <Col span={8}>创建时间： 2020-10-10 10:10:00</Col>
          <Col span={8}>车源id: 000011</Col>
        </Row>
        <Row gutter={24} className={styles.RowStyle}>
          <Col span={8}> VIN： 00001111</Col>
          <Col span={8}>品牌车型： 丰田卡罗拉</Col>
          <Col span={8}>上牌日期： 5</Col>
        </Row>
        <Row gutter={24} className={styles.RowStyle}>
          <Col span={8}>过户次数： 5</Col>
          <Col span={8}>采购价 10.55万元</Col>
          <Col span={8}>预计销售价： 11.44万元</Col>
        </Row>
        <Row gutter={24} className={styles.RowStyle}>
          <Col span={8}>信息费 1000元</Col>
          <Col span={8}>采购员： 张三</Col>
          <Col span={8}>采购城市： 00001111</Col>
        </Row>
        <Row gutter={24} className={styles.RowStyle}>
          <Col span={8}> 复检员： 张超</Col>
          <Col span={8}>手续押金： 10000元</Col>
          <Col span={8}>采购佣金： 10000元</Col>
        </Row>
        <Row gutter={24} className={styles.RowStyle}>
          <Col span={8}>销售城市： 北京</Col>
          <Col span={8}>销售门店： 宝马4s</Col>
          <Col span={8}>付款方式： 分期</Col>
        </Row>
        <Row gutter={24} className={styles.RowStyle}>
          <Col span={12}>首款： 1.33万元</Col>
          <Col span={12}>备注： 恒大帝景度假酒店晃荡会的好多</Col>
        </Row>
      </Card>
      <Card title="付款信息" style={{ marginBottom: 10 }} bordered={false}>
        <div>
          <Row gutter={24} className={styles.RowStyle}>
            <Col span={8}> 付款项目：车款-全款</Col>
            <Col span={8}>付款金额：1000000元</Col>
            <Col span={8}>
              <Button>已付款</Button> <Button type="primary">发起付款</Button>
            </Col>
          </Row>
          <Row gutter={24} className={styles.RowStyle}>
            <Col span={8}>支付方式： 私户</Col>
            <Col span={8}>收款行省市： 北京昌平区</Col>
            <Col span={8}>收款银行： 北京银行</Col>
          </Row>
          <Row gutter={24} className={styles.RowStyle}>
            <Col span={8}>开户行： 北京银行回龙观支行</Col>
            <Col span={8}>收款人： 张超</Col>
            <Col span={8}>收款账号： 10000000000</Col>
          </Row>
        </div>

        <div className={styles.dotLine}>
          <Row gutter={24} className={styles.RowStyle}>
            <Col span={8}> 付款项目：采购佣金</Col>
            <Col span={8}>付款金额：1000000元</Col>
            <Col span={8}>
              <Button>已付款</Button> <Button type="primary">发起付款</Button>
            </Col>
          </Row>
          <Row gutter={24} className={styles.RowStyle}>
            <Col span={8}>支付方式： 私户</Col>
            <Col span={8}>收款行省市： 北京昌平区</Col>
            <Col span={8}>收款银行： 北京银行</Col>
          </Row>
          <Row gutter={24} className={styles.RowStyle}>
            <Col span={8}>开户行： 北京银行回龙观支行</Col>
            <Col span={8}>收款人： 张超</Col>
            <Col span={8}>收款账号： 10000000000</Col>
          </Row>
        </div>
      </Card>
      <Card title="付款记录" style={{ marginBottom: 10 }} bordered={false}>
        付款记录
      </Card>
    </div>
  );
};

export default Detail;
