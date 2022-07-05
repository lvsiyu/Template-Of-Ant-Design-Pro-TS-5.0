import React from 'react';
import { message, Tag, Row, Col } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard, { CheckCard } from '@ant-design/pro-card';
import { AppstoreOutlined } from '@ant-design/icons';

export default (): React.ReactNode => {
  return (
    <PageContainer>
      <ProCard title="单选卡片" bordered headerBordered>
        <CheckCard.Group
          onChange={(value) => {
            message.success(`单选选择了:${value}`);
          }}
          defaultValue="A"
        >
          <CheckCard title="卡片1" description="选项一" value="A" />
          <CheckCard title="卡片2" description="选项二" value="B" />
          <CheckCard title="卡片3" disabled description="选项三，这是一个不可选项" value="C" />
        </CheckCard.Group>
      </ProCard>

      <ProCard title="多选卡片" bordered headerBordered style={{ marginTop: '1rem' }}>
        <CheckCard.Group
          multiple
          onChange={(value) => {
            message.success(`多选选择了:${value}`);
          }}
          defaultValue={['A']}
        >
          <CheckCard
            title="卡片1"
            description="我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容"
            value="A"
          />
          <CheckCard
            title="卡片2"
            description="我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容"
            value="B"
          />
        </CheckCard.Group>
      </ProCard>

      <ProCard title="组合样式" bordered headerBordered style={{ marginTop: '1rem' }}>
        <h3>只有图片时</h3>
        <CheckCard avatar="https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg" />

        <h3>只有图片和描述时</h3>
        <CheckCard
          avatar="https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg"
          description="我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容"
        />
        <h3>只有标题和描述时</h3>
        <CheckCard
          title="示例"
          description="我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容"
        />
        <h3>只有标题和图片</h3>
        <CheckCard
          title="示例"
          avatar="https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg"
        />
        <h3>只有标题</h3>
        <CheckCard title="示例" />
        <h3>只有描述时</h3>
        <CheckCard description="我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容" />
      </ProCard>

      <ProCard title="自定义标题" bordered headerBordered style={{ marginTop: '1rem' }}>
        <CheckCard
          title={
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <AppstoreOutlined />
              <span style={{ marginRight: 8, marginLeft: 8 }}>示例</span>
              <Tag color="blue">blue</Tag>
            </div>
          }
          description="我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容"
        />
        <CheckCard
          title="标题内容过长会自动进行省略，标题内容过长会自动进行省略"
          description="我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容"
        />
      </ProCard>

      <ProCard title="选项列表" bordered headerBordered style={{ marginTop: '1rem' }}>
        <CheckCard.Group size="small" options={['🍎 Apple', '🍐 Pear', '🍊 Orange']} />
        <br />
        <CheckCard.Group size="small" loading options={['🍎 Apple', '🍐 Pear', '🍊 Orange']} />{' '}
        <br />
        <CheckCard.Group defaultValue="A">
          <CheckCard title="🍊 Orange" value="🍊 Orange" />
          <CheckCard title="🍐 Pear" value="🍐 Pear" />
          <CheckCard title="🍎 Apple" value="🍎 Apple" />
        </CheckCard.Group>
        <br />
        <CheckCard.Group defaultValue="A" loading>
          <CheckCard title="🍊 Orange" value="🍊 Orange" />
          <CheckCard title="🍐 Pear" value="🍐 Pear" />
          <CheckCard title="🍎 Apple" value="🍎 Apple" />
        </CheckCard.Group>
      </ProCard>

      <ProCard title="灵活布局" bordered headerBordered style={{ marginTop: '1rem' }}>
        <CheckCard.Group style={{ width: '100%' }} size="small">
          <Row>
            <Col span={8}>
              <CheckCard title="卡片1" description="我是内容我是内容我是内容我是内容" value="A" />
            </Col>
            <Col span={8}>
              <CheckCard title="卡片2" description="我是内容我是内容我是内容我是内容" value="B" />
            </Col>
            <Col span={8}>
              <CheckCard title="卡片3" description="我是内容我是内容我是内容我是内容" value="C" />
            </Col>
          </Row>
        </CheckCard.Group>
      </ProCard>
    </PageContainer>
  );
};
