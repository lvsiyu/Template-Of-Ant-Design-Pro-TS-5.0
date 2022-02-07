import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';

export default (): React.ReactNode => {
  return (
    <PageContainer>
      <ProCard title="账户设置" bordered headerBordered>
        账户设置
      </ProCard>
    </PageContainer>
  );
};
