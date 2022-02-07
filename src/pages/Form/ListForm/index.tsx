import React, { Fragment } from 'react';
import { message } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import { uploadListForm } from './services';
import ProForm, {
  ProFormList,
  ProFormText,
  ProFormDependency,
  ProFormGroup,
} from '@ant-design/pro-form';
import type { listFormDataType } from './data';

const BasisForm: React.FC = () => {
  const submitForm = (values: listFormDataType) => {
    uploadListForm(values).then((data) => {
      if (data.code === 200) {
        message.success('提交成功');
      } else {
        message.error('提交失败');
      }
    });
  };

  return (
    <PageContainer>
      <ProCard gutter={[{ xs: 8, sm: 8, md: 16, lg: 24, xl: 32 }, 16]}>
        <ProCard title="简单插入表单" headerBordered bordered>
          <ProForm
            onFinish={async (values) => {
              submitForm(values);
            }}
          >
            <ProFormList
              name="data"
              creatorButtonProps={{
                creatorButtonText: '新加一行数据',
              }}
              initialValue={[
                {
                  content1: '我是内容1',
                  content2: '我是内容2',
                },
              ]}
              itemContainerRender={(doms) => {
                return <ProForm.Group>{doms}</ProForm.Group>;
              }}
            >
              {(f, index, action) => {
                console.log(f, index, action);
                return (
                  <Fragment>
                    <ProFormText name="content1" label="内容1" />
                    <ProFormText
                      name="content2"
                      label="内容2"
                      required
                      rules={[{ required: true, message: '该项是必填项!' }]}
                    />
                    <ProFormDependency name={['content2']}>
                      {({ content2 }) => {
                        if (!content2) {
                          return (
                            <span
                              style={{
                                lineHeight: '32px',
                              }}
                            >
                              输入内容2展示
                            </span>
                          );
                        }
                        return <ProFormText name="content3" label="内容3" />;
                      }}
                    </ProFormDependency>
                  </Fragment>
                );
              }}
            </ProFormList>
          </ProForm>
        </ProCard>

        <ProCard title="嵌套插入表单" headerBordered bordered>
          <ProForm
            onFinish={async (values) => {
              submitForm(values);
            }}
          >
            <ProFormList
              name="data"
              initialValue={[
                {
                  content1: '标题1',
                },
              ]}
              creatorButtonProps={{
                creatorButtonText: '新加一页数据',
              }}
              itemRender={({ listDom, action }, { record }) => {
                return (
                  <ProCard
                    bordered
                    extra={action}
                    title={record?.content1}
                    style={{
                      marginBottom: 8,
                    }}
                  >
                    {listDom}
                  </ProCard>
                );
              }}
            >
              <ProFormGroup>
                <ProFormText
                  name="content1"
                  label="内容1"
                  required
                  rules={[{ required: true, message: '该项是必填项!' }]}
                />
                <ProFormText name="content2" label="内容2" />
                <ProFormText name="content3" label="内容3" />
              </ProFormGroup>
              <ProFormList
                name="content"
                initialValue={[
                  {
                    addContent1: '我是插入内容1',
                    addContent2: '我是插入内容2',
                    addContent3: '我是插入内容3',
                  },
                ]}
                creatorButtonProps={{
                  creatorButtonText: '新加一行数据',
                }}
                copyIconProps={{
                  tooltipText: '复制此行到末尾',
                }}
                deleteIconProps={{
                  tooltipText: '不需要这行了',
                }}
              >
                <ProFormGroup>
                  <ProFormText name="addContent1" label="插入内容1" />
                  <ProFormText name="addContent2" label="插入内容2" />
                  <ProFormText name="addContent3" label="插入内容3" />
                </ProFormGroup>
              </ProFormList>
            </ProFormList>
          </ProForm>
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};

export default BasisForm;
