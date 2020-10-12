import { Card, Form, Input, Modal, Table, message } from 'antd';
import React, { useEffect, useState } from 'react';

import Search from './Search';
import { getVehiclelist } from './server';
import styles from './index.less';

const ProductPage = () => {
  const [form] = Form.useForm();

  // 列表数据
  // const [dataSource, setDataSource] = useState([]);
  const [dataSource, setDataSource] = useState([
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
    {
      key: '4',
      name: 'Joe Black',
      money: '￥120,000.00',
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '5',
      name: 'Joe Black',
      money: '￥120,000.00',
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '6',
      name: 'Joe Black',
      money: '￥120,000.00',
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '7',
      name: 'Joe Black',
      money: '￥120,000.00',
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '8',
      name: 'Joe Black',
      money: '￥120,000.00',
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '9',
      name: 'Joe Black',
      money: '￥120,000.00',
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '10',
      name: 'Joe Black',
      money: '￥120,000.00',
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '11',
      name: 'Joe Black',
      money: '￥120,000.00',
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '12',
      name: 'Joe Black',
      money: '￥120,000.00',
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '13',
      name: 'Joe Black',
      money: '￥120,000.00',
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '14',
      name: 'Joe Black',
      money: '￥120,000.00',
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '15',
      name: 'Joe Black',
      money: '￥120,000.00',
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '16',
      name: 'Joe Black',
      money: '￥120,000.00',
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '17',
      name: 'Joe Black',
      money: '￥120,000.00',
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '18',
      name: 'Joe Black',
      money: '￥120,000.00',
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '19',
      name: 'Joe Black',
      money: '￥120,000.00',
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '20',
      name: 'Joe Black',
      money: '￥120,000.00',
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '21',
      name: 'Joe Black',
      money: '￥120,000.00',
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '22',
      name: 'Joe Black',
      money: '￥120,000.00',
      address: 'Sidney No. 1 Lake Park',
    },
  ]);

  // 分页数据
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 20,
    total: 0,
  });

  // 初始化数据
  useEffect(() => {
    handleSearch();
  }, [pagination.current, pagination.pageSize]);

  const handleSelectSearch = () => {
    console.log('>>>>>>>>47');
    //  当page或size改变时，自动刷一下接口
    setPagination({
      current: 1,
      pageSize: 20,
      total: 0,
    });
  };
  // 查询列表
  const handleSearch = async (
    pageIndex = pagination.current,
    pageSize = pagination.pageSize,
  ) => {
    // Should format date value before submit.
    const params = form.getFieldsValue();
    if (params.purchaseDate && Array.isArray(params.purchaseDate)) {
      params.purchaseDate = `${params.purchaseDate[0].format(
        'YYYY-MM-DD',
      )}~${params.purchaseDate[1].format('YYYY-MM-DD')}`;
    }
    if (params.inventoryDays && Array.isArray(params.inventoryDays)) {
      params.inventoryDays = `${params.inventoryDays[0].format(
        'YYYY-MM-DD',
      )}~${params.inventoryDays[1].format('YYYY-MM-DD')}`;
    }

    const paramsFinal$ = { ...params, pageSize, pageIndex };
    console.log('paramsFinal$', paramsFinal$);

    console.log(paramsFinal$, 'paramsFinal$');
    const res = await getVehiclelist(paramsFinal$); // 获取table列表数据
    if (res && res.code === 200) {
      setDataSource(res.data.pagedItems);
      setPagination({
        current: res.data.pageIndex,
        pageSize: res.data.pageSize,
        total: res.data.totalCount,
      });
    }
  };

  const pagerChange = (page, size) =>
    setPagination({
      current: page,
      pageSize: size,
    });

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

  return (
    <Card>
      <Search onSearch={handleSelectSearch} form={form} />

      <div className={styles.tableInfo}>
        <Table
          rowKey="key"
          dataSource={dataSource}
          pagination={{
            showQuickJumper: true,
            showSizeChanger: true,
            ...pagination,
            onChange: pagerChange,
            onShowSizeChange: pagerChange,
            showTotal: total => `查询结果: ${pagination.total}条`,
          }}
          columns={columns}
          bordered
          title={() => (
            <div style={{ clear: 'both', minHeight: '20px' }}>
              <span>{'全国 > 西北大区 > 河南省 > 郑州市 > 郑州门店'}</span>
              <div style={{ float: 'right' }}>总共 26 条数据</div>
            </div>
            //
          )}
        />
      </div>
    </Card>
  );
};

export default ProductPage;
