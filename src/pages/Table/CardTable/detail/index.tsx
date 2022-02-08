import React from 'react';
import { Button } from 'antd';
import { history } from 'umi';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';

const CardTableListDetail: React.FC = () => {
  return (
    <PageContainer>
      <ProCard bordered headerBordered>
        <h3>卡片表格详情</h3>
      </ProCard>
      <FooterToolbar>
        <Button onClick={() => history.push('/table/card-table')}>返回</Button>
      </FooterToolbar>
    </PageContainer>
  );
};

export default CardTableListDetail;
