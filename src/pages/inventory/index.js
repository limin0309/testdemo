import {
  Button,
  Card,
  Divider,
  Form,
  Input,
  Modal,
  Select,
  Table,
  message,
} from 'antd';
import React, { useEffect, useState } from 'react';
import {
  batchupdatestatus,
  fetchExport,
  getVehiclelist,
  querybatchpackageinfo,
} from './server';

import Search from './Search';
import styles from './index.less';

const Page = () => {
  const [form] = Form.useForm();

  // 列表数据
  const [dataSource, setDataSource] = useState([]);
  // 分页数据
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 20,
    total: 0,
  });

  // 批售包名
  const [packageinfo, setPackageinfo] = useState([]);
  // 批售提交显示与否
  const [batchVisible, setBatchVisible] = useState(false);

  // 参数
  const [paramsFinal, setParamsFinal] = useState();

  // 初始化数据
  const initData = () => {
    handleSearch();
    // querybatchpackageinfo().then(res => {
    //   if (res.code === 200) {
    //     setPackageinfo(res.data);
    //   }
    // });
  };
  useEffect(() => {
    initData();
  }, []);

  // 查询列表
  const handleSearch = async (
    pageIndex = 1,
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
    const res = await getVehiclelist(paramsFinal$);
    if (res && res.code === 200) {
      setDataSource(res.data.pagedItems);
      setPagination({
        current: res.data.pageIndex,
        pageSize: res.data.pageSize,
        total: res.data.totalCount,
      });
      setParamsFinal(paramsFinal$);
    }
  };

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
      <Search onSearch={handleSearch} form={form} />

      <div className={styles.tableInfo}>
        <Table
          rowKey="unifiedNumber"
          dataSource={dataSource}
          pagination={{
            onChange: handleSearch,
            ...pagination,
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
