import React, { useRef } from 'react';
import { Space, Popconfirm, Tooltip, message } from 'antd';
import { history } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { queryCardTable } from './services';
import type { CardTableDataType } from './data';

const CardTableList: React.FC = () => {
  const ref = useRef<ActionType>();

  const ProcessMap = {
    close: 'normal',
    running: 'active',
    online: 'success',
    error: 'exception',
  };

  const tableDate = (_text: unknown, record: CardTableDataType) => (
    <Tooltip title={`${record.date} ${record.time}`}>
      <span>{`${record.date} ${record.time}`}</span>
    </Tooltip>
  );

  const confirm = () => {
    message.success('点了是');
    if (ref.current) ref.current.reload();
  };

  const cancel = () => {
    message.error('点了否');
  };

  const tableAction = () => (
    <Space>
      <Popconfirm
        title="确认操作此按钮？"
        onConfirm={confirm}
        onCancel={cancel}
        okText="是"
        cancelText="否"
      >
        <a href="#">操作</a>
      </Popconfirm>
    </Space>
  );

  const columns: ProColumns<CardTableDataType>[] = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'indexBorder',
      align: 'center',
      width: 48,
    },
    {
      title: '基本名称',
      dataIndex: 'name',
      render: (text) => <a onClick={() => history.push('/table/card-table/detail')}>{text}</a>,
    },
    {
      title: '基本描述',
      dataIndex: 'description',
      search: false,
      ellipsis: true,
    },
    {
      title: '日期显示',
      dataIndex: 'date-time',
      ellipsis: true,
      render: (text, record) => tableDate(text, record),
    },
    {
      title: '状态',
      dataIndex: 'status',
      initialValue: 'all',
      valueEnum: {
        all: { text: '全部', status: 'Default' },
        close: { text: '关闭', status: 'Default' },
        running: { text: '运行中', status: 'Processing' },
        online: { text: '已上线', status: 'Success' },
        error: { text: '异常', status: 'Error' },
      },
    },
    {
      title: '进度展示',
      dataIndex: 'progress',
      valueType: (item) => ({
        type: 'progress',
        status: ProcessMap[item.status],
      }),
    },
    {
      title: '时间选择',
      dataIndex: 'selectTime',
      hideInTable: true,
      valueType: 'dateTime',
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      width: 70,
      render: tableAction,
    },
  ];

  return (
    <PageContainer>
      <ProTable<CardTableDataType>
        actionRef={ref}
        rowKey="id"
        search={false}
        toolBarRender={false}
        bordered
        cardProps={{ title: '卡片表格', bordered: true }}
        pagination={{
          showQuickJumper: true,
          pageSize: 10,
        }}
        headerTitle="卡片表格"
        request={(params) => queryCardTable({ ...params })}
        columns={columns}
      />
    </PageContainer>
  );
};

export default CardTableList;
