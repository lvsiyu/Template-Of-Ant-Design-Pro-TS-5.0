import React from 'react';
import { Button, DatePicker, Space /* Table */ } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { queryChooseTable } from './services';
import type { ChooseTableDataType } from './data';

const { RangePicker } = DatePicker;

const ChooseTableList: React.FC = () => {
  const ProcessMap = {
    close: 'normal',
    running: 'active',
    online: 'success',
    error: 'exception',
  };

  const columns: ProColumns<ChooseTableDataType>[] = [
    {
      title: '应用名称',
      width: 120,
      dataIndex: 'name',
      fixed: 'left',
      render: (_) => <a>{_}</a>,
    },
    {
      title: '容器数量',
      width: 120,
      dataIndex: 'containers',
      align: 'right',
      search: false,
      sorter: (a, b) => a.containers - b.containers,
    },
    {
      title: '调用次数',
      width: 120,
      align: 'right',
      dataIndex: 'callNumber',
    },
    {
      title: '执行进度',
      dataIndex: 'progress',
      valueType: (item) => ({
        type: 'progress',
        status: ProcessMap[item.status],
      }),
    },
    {
      title: '创建者',
      width: 120,
      dataIndex: 'creator',
      valueType: 'select',
      valueEnum: {
        all: { text: '全部' },
        付小小: { text: '付小小' },
        曲丽丽: { text: '曲丽丽' },
        林东东: { text: '林东东' },
        陈帅帅: { text: '陈帅帅' },
        兼某某: { text: '兼某某' },
      },
    },
    {
      title: '创建时间',
      width: 140,
      key: 'since',
      dataIndex: 'createdAt',
      valueType: 'date',
      sorter: (a, b) => a.createdAt - b.createdAt,
      renderFormItem: () => {
        return <RangePicker />;
      },
    },
    {
      title: '备注',
      dataIndex: 'memo',
      ellipsis: true,
      search: false,
    },
    {
      title: '操作',
      width: 80,
      key: 'option',
      valueType: 'option',
      fixed: 'right',
      render: () => [<a key="link">操作</a>],
    },
  ];

  return (
    <PageContainer>
      <ProTable<ChooseTableDataType>
        rowKey="key"
        toolBarRender={() => [<Button key="show">各种操作</Button>]}
        search={{
          labelWidth: 120,
        }}
        rowSelection={
          {
            // 自定义选择项参考: https://ant.design/components/table-cn/#components-table-demo-row-selection-custom
            // 注释该行则默认不显示下拉选项
            // selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT],
            // 由于proTabele数据是异步加载的，所以不能用defaultSelectedRowKeys默认选择
            // defaultSelectedRowKeys: [1],
          }
        }
        tableAlertRender={({ selectedRowKeys, selectedRows, onCleanSelected }) => (
          <Space size={24}>
            <span>
              已选 {selectedRowKeys.length} 项
              <a style={{ marginLeft: 8 }} onClick={onCleanSelected}>
                取消选择
              </a>
            </span>
            <span>{`容器数量: ${selectedRows.reduce(
              (pre, item) => pre + item.containers,
              0,
            )} 个`}</span>
            <span>{`调用量: ${selectedRows.reduce(
              (pre, item) => pre + item.callNumber,
              0,
            )} 次`}</span>
          </Space>
        )}
        tableAlertOptionRender={() => {
          return (
            <Space size={16}>
              <a>批量操作1</a>
              <a>批量操作2</a>
            </Space>
          );
        }}
        bordered
        pagination={{
          showQuickJumper: true,
          pageSize: 10,
        }}
        headerTitle="选择表格"
        request={(params) => queryChooseTable({ ...params })}
        columns={columns}
      />
    </PageContainer>
  );
};

export default ChooseTableList;
