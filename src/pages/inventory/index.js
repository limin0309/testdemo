import { Card, Form, Input, Modal, Table, message } from 'antd';
import React, { useEffect, useState } from 'react';

import Search from './Search';
import { getVehiclelist } from './server';
import styles from './index.less';

const Page = () => {
  const [form] = Form.useForm();

  // 列表数据
  // const [dataSource, setDataSource] = useState([]);
  const [dataSource, setDataSource] = useState([
    {
      key: '1',
      vinCode: '0000111',
      unifiedNumber: '大众朗逸',
      batchPackageName: '0000111',
      qa: '北京',
      aa: '宝马4s',
      ss: '在售',
      sss: '在库',
      ssss: '5天',
      hh: '库区库位',
      caigou: '采购价',
    },
    {
      key: '2',
      vinCode: '0000311',
      unifiedNumber: '大众朗2逸',
      batchPackageName: '0000111',
      qa: '北京',
      aa: '宝马4s',
      ss: '在售',
      sss: '在库',
      ssss: '5天',
      hh: '库区库位',
      caigou: '采购价',
    },
    {
      key: '1',
      vinCode: '0000111',
      unifiedNumber: '大众朗逸1',
      batchPackageName: '0000111',
      qa: '北京',
      aa: '宝马4s',
      ss: '在售',
      sss: '在库',
      ssss: '5天',
      hh: '库区库位',
      caigou: '采购价',
    },
    {
      key: '2',
      vinCode: '0000311',
      unifiedNumber: '大众朗2逸2',
      batchPackageName: '0000111',
      qa: '北京',
      aa: '宝马4s',
      ss: '在售',
      sss: '在库',
      ssss: '5天',
      hh: '库区库位',
      caigou: '采购价',
    },
    {
      key: '1',
      vinCode: '0000111',
      unifiedNumber: '大众朗逸3',
      batchPackageName: '0000111',
      qa: '北京',
      aa: '宝马4s',
      ss: '在售',
      sss: '在库',
      ssss: '5天',
      hh: '库区库位',
      caigou: '采购价',
    },
    {
      key: '2',
      vinCode: '0000311',
      unifiedNumber: '大众朗2逸4',
      batchPackageName: '0000111',
      qa: '北京',
      aa: '宝马4s',
      ss: '在售',
      sss: '在库',
      ssss: '5天',
      hh: '库区库位',
      caigou: '采购价',
    },
    {
      key: '1',
      vinCode: '0000111',
      unifiedNumber: '大众朗逸45',
      batchPackageName: '0000111',
      qa: '北京',
      aa: '宝马4s',
      ss: '在售',
      sss: '在库',
      ssss: '5天',
      hh: '库区库位',
      caigou: '采购价',
    },
    {
      key: '2',
      vinCode: '0000311',
      unifiedNumber: '大众朗2逸5',
      batchPackageName: '0000111',
      qa: '北京',
      aa: '宝马4s',
      ss: '在售',
      sss: '在库',
      ssss: '5天',
      hh: '库区库位',
      caigou: '采购价',
    },
    {
      key: '1',
      vinCode: '0000111',
      unifiedNumber: '大众朗逸6',
      batchPackageName: '0000111',
      qa: '北京',
      aa: '宝马4s',
      ss: '在售',
      sss: '在库',
      ssss: '5天',
      hh: '库区库位',
      caigou: '采购价',
    },
    {
      key: '2',
      vinCode: '0000311',
      unifiedNumber: '大众朗2逸7',
      batchPackageName: '0000111',
      qa: '北京',
      aa: '宝马4s',
      ss: '在售',
      sss: '在库',
      ssss: '5天',
      hh: '库区库位',
      caigou: '采购价',
    },
    {
      key: '1',
      vinCode: '0000111',
      unifiedNumber: '大众朗逸8',
      batchPackageName: '0000111',
      qa: '北京',
      aa: '宝马4s',
      ss: '在售',
      sss: '在库',
      ssss: '5天',
      hh: '库区库位',
      caigou: '采购价',
    },
    {
      key: '2',
      vinCode: '0000311',
      unifiedNumber: '大众朗2逸9',
      batchPackageName: '0000111',
      qa: '北京',
      aa: '宝马4s',
      ss: '在售',
      sss: '在库',
      ssss: '5天',
      hh: '库区库位',
      caigou: '采购价',
    },
    {
      key: '1',
      vinCode: '0000111',
      unifiedNumber: '大众朗逸11',
      batchPackageName: '0000111',
      qa: '北京',
      aa: '宝马4s',
      ss: '在售',
      sss: '在库',
      ssss: '5天',
      hh: '库区库位',
      caigou: '采购价',
    },
    {
      key: '2',
      vinCode: '0000311',
      unifiedNumber: '大众朗2逸12',
      batchPackageName: '0000111',
      qa: '北京',
      aa: '宝马4s',
      ss: '在售',
      sss: '在库',
      ssss: '5天',
      hh: '库区库位',
      caigou: '采购价',
    },
    {
      key: '1',
      vinCode: '0000111',
      unifiedNumber: '大众朗逸123',
      batchPackageName: '0000111',
      qa: '北京',
      aa: '宝马4s',
      ss: '在售',
      sss: '在库',
      ssss: '5天',
      hh: '库区库位',
      caigou: '采购价',
    },
    {
      key: '2',
      vinCode: '0000311',
      unifiedNumber: '大众朗2逸14',
      batchPackageName: '0000111',
      qa: '北京',
      aa: '宝马4s',
      ss: '在售',
      sss: '在库',
      ssss: '5天',
      hh: '库区库位',
      caigou: '采购价',
    },
    {
      key: '1',
      vinCode: '0000111',
      unifiedNumber: '大众朗逸15',
      batchPackageName: '0000111',
      qa: '北京',
      aa: '宝马4s',
      ss: '在售',
      sss: '在库',
      ssss: '5天',
      hh: '库区库位',
      caigou: '采购价',
    },
    {
      key: '2',
      vinCode: '0000311',
      unifiedNumber: '大众朗2逸16',
      batchPackageName: '0000111',
      qa: '北京',
      aa: '宝马4s',
      ss: '在售',
      sss: '在库',
      ssss: '5天',
      hh: '库区库位',
      caigou: '采购价',
    },
    {
      key: '1',
      vinCode: '0000111',
      unifiedNumber: '大众朗逸17',
      batchPackageName: '0000111',
      qa: '北京',
      aa: '宝马4s',
      ss: '在售',
      sss: '在库',
      ssss: '5天',
      hh: '库区库位',
      caigou: '采购价',
    },
    {
      key: '2',
      vinCode: '0000311',
      unifiedNumber: '大众朗2逸18',
      batchPackageName: '0000111',
      qa: '北京',
      aa: '宝马4s',
      ss: '在售',
      sss: '在库',
      ssss: '5天',
      hh: '库区库位',
      caigou: '采购价',
    },
    {
      key: '1',
      vinCode: '0000111',
      unifiedNumber: '大众朗逸19',
      batchPackageName: '0000111',
      qa: '北京',
      aa: '宝马4s',
      ss: '在售',
      sss: '在库',
      ssss: '5天',
      hh: '库区库位',
      caigou: '采购价',
    },
    {
      key: '2',
      vinCode: '0000311',
      unifiedNumber: '大众朗2逸200',
      batchPackageName: '0000111',
      qa: '北京',
      aa: '宝马4s',
      ss: '在售',
      sss: '在库',
      ssss: '5天',
      hh: '库区库位',
      caigou: '采购价',
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
      dataIndex: 'unifiedNumber',
      title: '库存编号',
      width: '135px',
    },
    { dataIndex: 'vinCode', title: '品牌车型' },
    { dataIndex: 'batchPackageName', title: 'VIN' },
    { dataIndex: 'licensePlateNumber', title: '销售城市' },
    { dataIndex: 'licensePlateProvinceName', title: '销售店' },
    { dataIndex: 'licensePlateCityName', title: '售卖状态' },
    { dataIndex: 'licensePlateDistrictName', title: '库存状态' },
    { dataIndex: 'licensePlateDetail', title: '在库天数' },
    { dataIndex: 'brandName', title: '库区库位' },
    { dataIndex: 'seriesName', title: '采购价' },
  ];

  return (
    <Card>
      <Search onSearch={handleSelectSearch} form={form} />

      <div className={styles.tableInfo}>
        <Table
          rowKey="unifiedNumber"
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
          title={() => (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>查询结果:{pagination.total}条</div>
            </div>
          )}
        />
      </div>
    </Card>
  );
};

export default Page;
