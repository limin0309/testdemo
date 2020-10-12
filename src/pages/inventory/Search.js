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

import s from './index.less';

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
  // 销售方式
  const [bsaletype, setBsaletype] = useState([]);
  // 销售状态
  const [salestatus, setSalestatus] = useState([]);
  // 所在城市
  const [city, setCity] = useState([]);
  // 检测报告
  const [detection, setDetection] = useState([]);
  // 包名
  const [packageName, setPackageName] = useState([]);

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
      setBsaletype(bsaletypeRes.data || []);
      setSalestatus(salestatusRes.data || []);
      setCity(cityRes.data || []);
      setDetection(detectionRes.data || []);
      setPackageName(packageNameRes.data || []);
    });
  }, []);

  const onFinish = fieldsValue => {
    console.log(fieldsValue);

    onSearch();
  };

  return (
    <Form
      className={s.form}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
    >
      {/* <Form */}
      <Row>
        <Col span={8}>
          <FormItem label="采购日期" name="purchaseDate">
            <RangePicker />
          </FormItem>
        </Col>

        <Col span={8}>
          <FormItem label="库存状态" name="gender">
            <Select placeholder="全部">
              <Option value="male">male</Option>
              <Option value="female">female</Option>
              <Option value="other">other</Option>
              {/*
              {salestatus.map(item => (
                <Option key={item.index}>{item.description}</Option>
              ))} */}
            </Select>
          </FormItem>
        </Col>
        <Col span={8}>
          <FormItem label="库存天数" name="inventoryDays">
            <RangePicker />
          </FormItem>
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
            <Select placeholder="全部">
              <Option value="yuhong">沈阳于洪店</Option>
              <Option value="dadong">沈阳大东店</Option>
              <Option value="tiexi">沈阳铁西店</Option>
              {/*
              {salestatus.map(item => (
                <Option key={item.index}>{item.description}</Option>
              ))} */}
            </Select>
          </FormItem>
        </Col>
        <Col span={8}>
          <FormItem label="品牌车系" name="brandCars">
            <Select placeholder="全部">
              <Option value="luhu">路虎</Option>
              <Option value="xiandai">现代</Option>
              <Option value="xuanyi">轩逸</Option>
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
          <FormItem label="销售状态" name="salestatus">
            <Select placeholder="全部">
              <Option value="zaishou">在售</Option>
              <Option value="yishou">已售</Option>
              <Option value="daiding">待定</Option>
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
        <Col className={s.btnGroup} span={24}>
          <Button type="primary" htmlType="submit">
            查询
          </Button>
          <Button type="primary" onClick={() => form.resetFields()}>
            重置
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Search;
