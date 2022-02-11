import React from 'react';
import { Button } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import type { ExcelDataType } from './data';
const ExportJsonExcel = require('js-export-excel');

const ExportExcel: React.FC = () => {
  const downloadExcel = () => {
    const option: ExcelDataType = {
      fileName: '',
      datas: [],
    };

    option.fileName = '测试用excel';

    option.datas = [
      {
        sheetData: [
          { one: '一行一列', two: '一行二列' },
          { one: '二行一列', two: '二行二列' },
        ],
        sheetName: 'sheet',
        sheetFilter: ['two', 'one'],
        sheetHeader: ['第一列', '第二列'],
        columnWidths: [20, 20],
      },
      {
        sheetData: [
          { one: '一行一列', two: '一行二列' },
          { one: '二行一列', two: '二行二列' },
        ],
      },
    ];

    const toExcel = new ExportJsonExcel(option); //new
    toExcel.saveExcel(); //保存
  };

  return (
    <PageContainer>
      <ProCard title="导出Excel" headerBordered>
        <Button onClick={downloadExcel}>导出</Button>
      </ProCard>
    </PageContainer>
  );
};

export default ExportExcel;
