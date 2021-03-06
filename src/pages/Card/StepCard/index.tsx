import React, { useState } from 'react';
import { Steps, Button, Space } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';

const { Step } = Steps;

export default (): React.ReactNode => {
  const [current, setCurrent] = useState(0);
  return (
    <PageContainer>
      <ProCard split="vertical" bordered>
        <ProCard colSpan="25%">
          <Steps direction="vertical" size="small" current={current} style={{ height: 320 }}>
            <Step title="第一步" />
            <Step title="第二步" />
            <Step title="第三步" />
            <Step title="第四步" />
            <Step title="第五步" />
          </Steps>
        </ProCard>
        <ProCard title="流量占用情况">
          <Space>
            <Button
              key="primary"
              type="primary"
              onClick={() => setCurrent(current + 1)}
              disabled={current === 5}
            >
              {current >= 4 ? '完成' : '下一步'}
            </Button>
            <Button key="pre" onClick={() => setCurrent(current - 1)} disabled={current === 0}>
              上一步
            </Button>
          </Space>
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};
