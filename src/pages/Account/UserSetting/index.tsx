import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';

export default (): React.ReactNode => {
  return (
    <PageContainer>
      <ProCard title="个人设置" bordered headerBordered>
        个人设置
      </ProCard>
    </PageContainer>
  );
};
