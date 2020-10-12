import {
  Button,
  Card,
  Col,
  Modal,
  PageHeader,
  Row,
  Spin,
  Table,
  message,
} from 'antd';
import React, { useCallback, useState } from 'react';

import styles from './detail.less';

const Detail = () => {
  // 分页数据
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 20,
    total: 0,
  });

  const columns = [
    {
      dataIndex: 'unifiedNumber',
      title: '操作时间',
      width: '135px',
    },
    { dataIndex: 'vinCode', title: '操作事项' },
    { dataIndex: 'batchPackageName', title: '操作人' },
    { dataIndex: 'licensePlateNumber', title: '备注' },
  ];

  // 列表数据
  // const [dataSource, setDataSource] = useState([]);
  const [dataSource, setDataSource] = useState([
    {
      key: '1',
      unifiedNumber: '2020-10-10  10:10:00  ',
      vinCode: '出库',
      licensePlateNumber: '价格不通过-',
      batchPackageName: '王三',
    },
    {
      key: '2',
      unifiedNumber: '2020-10-10  10:10:00  ',
      vinCode: '出库',
      licensePlateNumber: '价格不通过-',
      batchPackageName: '王三',
    },
  ]);
  return (
    <div>
      <PageHeader
        className="site-page-header"
        // onBack={() => window.history.back()}
        title="库存详情"
        extra={
          <Button type="primary" onClick={() => window.history.back()}>
            返回
          </Button>
        }
      >
        <Card title="基础信息" style={{ marginBottom: 10 }} bordered={false}>
          <Row gutter={24} className={styles.RowStyle}>
            <Col span={8}>库存ID： 00001111</Col>
            <Col span={8}>创建时间： 2020-10-10 10:10:00</Col>
            <Col span={8}>车源id: 000011</Col>
          </Row>
          <Row gutter={24} className={styles.RowStyle}>
            <Col span={8}> VIN： 00001111</Col>
            <Col span={8}>品牌车型： 丰田卡罗拉</Col>
            <Col span={8}>
              库存状态: 在库
              <span style={{ marginLeft: '20px' }}>
                <a>编辑</a>
              </span>
            </Col>
          </Row>
          <Row gutter={24} className={styles.RowStyle}>
            <Col span={8}>
              物流状态: 物流中
              <span style={{ marginLeft: '20px' }}>
                <a>编辑</a>
              </span>
            </Col>
            <Col span={8}>
              整备状态 ：整备中
              <span style={{ marginLeft: '20px' }}>
                <a>编辑</a>
              </span>
            </Col>
            <Col span={8}>
              销售状态： 待售
              <span style={{ marginLeft: '20px' }}>
                <a>编辑</a>
              </span>
            </Col>
          </Row>
          <Row gutter={24} className={styles.RowStyle}>
            <Col span={8}>
              所在城市： 北京
              <span style={{ marginLeft: '20px' }}>
                <a>编辑</a>
              </span>
            </Col>
            <Col span={8}>
              所在门店： 北京宝马
              <span style={{ marginLeft: '20px' }}>
                <a>编辑</a>
              </span>
            </Col>
            <Col span={8}>
              展板价： 10.99万元
              <span style={{ marginLeft: '20px' }}>
                <a>编辑</a>
              </span>
            </Col>
          </Row>
          <Row gutter={24} className={styles.RowStyle}>
            <Col span={8}>
              销售底价： 10.88万元
              <span style={{ marginLeft: '20px' }}>
                <a>编辑</a>
              </span>
            </Col>
            <Col span={8}>库龄： 111天</Col>
          </Row>
        </Card>
        <Card title="销售信息" style={{ marginBottom: 10 }} bordered={false}>
          <div>
            <Row gutter={24} className={styles.RowStyle}>
              <Col span={8}> 销售订单ID： 00001111</Col>
              <Col span={8}>采购价：10.55万元</Col>
              <Col span={8}>采购员： 张超</Col>
            </Row>
            <Row>
              <Col>采购城市 ：北京</Col>
            </Row>
          </div>
        </Card>
        <Card title="操作记录" style={{ marginBottom: 10 }} bordered={false}>
          <Table
            rowKey="unifiedNumber"
            dataSource={dataSource}
            columns={columns}
            pagination={{
              // onChange: handleSearch,
              ...pagination,
              showTotal: total => `查询结果: ${pagination.total}条`,
            }}
          />
        </Card>
      </PageHeader>
    </div>
  );
};

export default Detail;
