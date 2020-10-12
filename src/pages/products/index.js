import {
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  Table,
  TimePicker,
} from 'antd';

import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import styles from './index.less';

const { Option } = Select;

const { RangePicker } = DatePicker;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const columns = [
  {
    title: '采购订单号',
    dataIndex: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: '车源编号',
    dataIndex: 'money',
  },
  {
    title: 'VIN码',
    dataIndex: 'address',
  },
  {
    title: '品牌车型车系',
    dataIndex: 'address',
  },
  {
    title: '采购城市',
    dataIndex: 'address',
  },
  {
    title: '采购员',
    dataIndex: 'address',
  },
  {
    title: '采购价格',
    dataIndex: 'address',
  },
  {
    title: '采购订单创建日期',
    dataIndex: 'address',
  },
  {
    title: '付款状态',
    dataIndex: 'address',
  },
  {
    title: '审批状态',
    dataIndex: 'address',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '￥120,000.00',
    address: 'Sidney No. 1 Lake Park',
  },
];

const config = {
  rules: [{ type: 'object', required: true, message: 'Please select time!' }],
};
const rangeConfig = {
  rules: [{ type: 'array', required: true, message: 'Please select time!' }],
};

const TimeRelatedForm = () => {
  const onFinish = fieldsValue => {
    const payment_Time = fieldsValue['payment_Time'];
    const purchase_Time = fieldsValue['purchase_Time'];

    const values = {
      ...fieldsValue,
      payment_Time: [
        moment(payment_Time[0]).format('YYYY-MM-DD'),
        moment(payment_Time[1]).format('YYYY-MM-DD'),
      ],
      purchase_Time: [
        moment(purchase_Time[0]).format('YYYY-MM-DD'),
        moment(purchase_Time[1]).format('YYYY-MM-DD'),
      ],
    };
    console.log('Received values of form: ', values);
  };

  return (
    <Card>
      <Form
        name="time_related_controls"
        {...formItemLayout}
        onFinish={onFinish}
      >
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item
              name="payment_Time"
              label="付款完成时间："
              {...rangeConfig}
            >
              <RangePicker />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="付款状态" name="payment">
              <Select allowClear mode="multiple">
                <Option value="1">Option 1</Option>
                <Option value="2">Option 2</Option>
                <Option value="3">Option 3</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={1}></Col>
          <Col span={7}>
            <Form.Item name="vin">
              <Input allowClear placeholder="VIN后六位/车源编号/订单编号" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item label="销售城市：" name="city">
              <Select allowClear>
                <Option value="1">Option 1</Option>
                <Option value="2">Option 2</Option>
                <Option value="3">Option 3</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="销售门店" name="shop">
              <Select allowClear>
                <Option value="1">Option 1</Option>
                <Option value="2">Option 2</Option>
                <Option value="3">Option 3</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="品牌车系" name="series">
              <Select allowClear>
                <Option value="1">Option 1</Option>
                <Option value="2">Option 2</Option>
                <Option value="3">Option 3</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item name="purchase_Time" label="采购时间：" {...rangeConfig}>
              <RangePicker />
            </Form.Item>
          </Col>
        </Row>
        <Row style={{ marginBottom: '20px' }}>
          <Col span={18} style={{ textAlign: 'center' }}>
            <Button type="primary" htmlType="submit">
              查询
            </Button>
            <Button style={{ marginLeft: '10px' }}>重置</Button>
          </Col>
          <Col span={6} style={{ textAlign: 'right', paddingRight: '12px' }}>
            <Button type="primary">导出</Button>
          </Col>
        </Row>
      </Form>

      <Table
        rowKey={record => (record.name ? record.name : record.money)}
        columns={columns}
        dataSource={data}
        bordered
        title={() => (
          <div style={{ clear: 'both', minHeight: '20px' }}>
            <span>{'全国 > 西北大区 > 河南省 > 郑州市 > 郑州门店'}</span>
            <div style={{ float: 'right' }}>总共 26 条数据</div>
          </div>
          //
        )}
      />
    </Card>
  );
};

export default TimeRelatedForm;
