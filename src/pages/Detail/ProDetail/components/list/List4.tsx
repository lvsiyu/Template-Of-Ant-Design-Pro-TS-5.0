import React from 'react';
import ProTable from '@ant-design/pro-table';
import { queryProDetailList4 } from '../../services';

const columns = [
  {
    dataIndex: 'name',
    title: '名称',
    ellipsis: true,
  },
  {
    dataIndex: 'content1',
    title: '短内容',
    ellipsis: true,
  },
  {
    dataIndex: 'content2',
    title: '时间',
    ellipsis: true,
  },
  {
    dataIndex: 'content3',
    title: '长内容',
    ellipsis: true,
  },
];

const DetailListTabs4: React.FC = () => {
  return (
    <ProTable
      bordered
      columns={columns}
      request={queryProDetailList4}
      rowKey="name"
      pagination={{
        showQuickJumper: true,
        pageSize: 5,
      }}
      toolBarRender={false}
      search={false}
    />
  );
};

export default DetailListTabs4;
