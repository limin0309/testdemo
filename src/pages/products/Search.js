import {
  Button,
  Cascader,
  Col,
  DatePicker,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Upload,
  message,
} from 'antd';
import React, { useEffect, useState } from 'react';
import {
  getBsaletype,
  getCity,
  getDetection,
  getPackageName,
  getSalestatus,
} from './server';

import styles from './index.less';

const { RangePicker } = DatePicker;

const FormItem = Form.Item;
const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Search = ({ form, onSearch }) => {
  // 销售状态
  const [salestatus, setSalestatus] = useState([]);
  // 所在城市
  const [city, setCity] = useState([]);

  useEffect(() => {
    Promise.all([
      getBsaletype(),
      getSalestatus(),
      getCity(),
      getDetection(),
      getPackageName(),
    ]).then(res => {
      const [
        bsaletypeRes = {},
        salestatusRes = {},
        cityRes = {},
        detectionRes = {},
        packageNameRes = {},
      ] = res;
      setSalestatus(salestatusRes.data || []);
      setCity(cityRes.data || []);
    });
  }, []);

  const onFinish = fieldsValue => {
    console.log(fieldsValue);
    onSearch();
  };

  return (
    <Form
      className={styles.form}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
    >
      <Row>
        <Col span={8}>
          <FormItem label="付款完成时间：" name="payment_Time">
            <RangePicker />
          </FormItem>
        </Col>

        <Col span={8}>
          <FormItem label="付款状态" name="payment">
            <Select allowClear placeholder="全部">
              <Option value="1">未申请</Option>
              <Option value="2">已申请</Option>
              <Option value="3">部分付款</Option>
              <Option value="4">付款完成</Option>
              {/*
              {salestatus.map(item => (
                <Option key={item.index}>{item.description}</Option>
              ))} */}
            </Select>
          </FormItem>
        </Col>

        <Col span={8}>
          <Form.Item name="VIN" {...tailLayout}>
            <Input placeholder="VIN后六位/车源编号/库存编号/品牌车系" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={8}>
          <FormItem label="销售城市" name="Cascader">
            <Cascader
              options={[
                {
                  value: 'zhejiang',
                  label: 'Zhejiang',
                  children: [
                    {
                      value: 'hangzhou',
                      label: 'Hangzhou',
                    },
                  ],
                },
              ]}
            />
          </FormItem>
        </Col>
        <Col span={8}>
          <FormItem label="销售门店：" name="salesStore">
            <Select placeholder="全部" allowClear mode="multiple">
              <Option value="shenyang">沈阳门店</Option>
              <Option value="zhengzhou">郑州门店</Option>
              {/*
              {salestatus.map(item => (
                <Option key={item.index}>{item.description}</Option>
              ))} */}
            </Select>
          </FormItem>
        </Col>
        <Col span={8}>
          <FormItem label="品牌车系" name="brandCars">
            <Select placeholder="全部" allowClear mode="multiple">
              <Option value="luhu">路虎</Option>
              <Option value="xiandai">现代</Option>
              <Option value="kaluola">广汽丰田卡罗拉</Option>
              {/*
              {salestatus.map(item => (
                <Option key={item.index}>{item.description}</Option>
              ))} */}
            </Select>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <Form.Item name="purchase_Time" label="采购时间">
            <RangePicker />
          </Form.Item>
        </Col>
      </Row>

      <Row style={{ marginBottom: '20px' }}>
        <Col span={18} style={{ textAlign: 'center' }}>
          <Button type="primary" htmlType="submit">
            查询
          </Button>
          <Button
            style={{ marginLeft: '10px' }}
            onClick={() => form.resetFields()}
          >
            重置
          </Button>
        </Col>
        <Col span={6} style={{ textAlign: 'right', paddingRight: '12px' }}>
          <Button type="primary">导出</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Search;
