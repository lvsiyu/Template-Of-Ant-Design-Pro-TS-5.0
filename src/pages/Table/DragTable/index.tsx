import React, { useState } from 'react';
import { Avatar, Tooltip, message } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns } from '@ant-design/pro-table';
import { DragSortTable } from '@ant-design/pro-table';
import { randomLogo } from '@/utils/emoticons';
import type { DragTableDataType } from './data';
import './style/index.less';

const ProcessMap = {
  close: 'normal',
  running: 'active',
  online: 'success',
  error: 'exception',
};

const valueEnumMark = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
};

const data: DragTableDataType[] = [];
for (let i = 0; i < 30; i += 1) {
  data.push({
    id: i,
    name: '基础名称',
    description:
      i % 2 === 1
        ? '我是简短一点的描述'
        : '我是很长的一段描述很长很长的一段描述很长很长的一段描述很长很长的一段描述',
    date: '2020-10-15',
    time: '20:53:24',
    progress: Math.ceil(Math.random() * 100) + 1,
    status: valueEnumMark[Math.floor(Math.random() * 10) % 4],
  });
}

const DragTableList: React.FC = () => {
  const [dataSource, setdataSource] = useState(data);

  const handleDragSortEnd = (newDataSource: any) => {
    setdataSource(newDataSource);
    message.success('修改列表排序成功');
  };

  const tableDate = (_text: unknown, record: DragTableDataType) => (
    <Tooltip title={`${record.date} ${record.time}`}>
      <span>{`${record.date} ${record.time}`}</span>
    </Tooltip>
  );

  const dragHandleRender = () => (
    <Avatar
      style={{ margin: '0px auto', cursor: 'pointer' }}
      size={22}
      icon={<img src={randomLogo[parseInt(`${Math.random() * randomLogo.length}`, 10)]} />}
    />
  );

  const columns: ProColumns[] = [
    {
      title: '排序',
      dataIndex: 'sort',
      search: false,
      align: 'center',
      width: 48,
    },
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
      ellipsis: true,
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
  ];

  return (
    <PageContainer>
      <DragSortTable
        headerTitle="拖拽排序(目前无法在request中使用)"
        columns={columns}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        bordered
        pagination={{
          showQuickJumper: true,
          pageSize: 10,
        }}
        dataSource={dataSource}
        dragSortKey="sort"
        dragSortHandlerRender={dragHandleRender}
        onDragSortEnd={handleDragSortEnd}
      />
    </PageContainer>
  );
};

export default DragTableList;
