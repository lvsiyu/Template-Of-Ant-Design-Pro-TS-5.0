import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';

export default (): React.ReactNode => {
  return (
    <PageContainer>
      <ProCard title="个人中心" bordered headerBordered>
        个人中心
      </ProCard>
    </PageContainer>
  );
};
