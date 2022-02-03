import React from 'react';
import { message } from 'antd';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import { uploadListForm } from './services';
import ProForm, { ProFormList, ProFormText, ProFormDependency } from '@ant-design/pro-form';
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
      <ProCard>
        <ProForm
          submitter={{
            render: (_, dom) => <FooterToolbar>{dom}</FooterToolbar>,
          }}
          onFinish={async (values) => {
            submitForm(values);
          }}
        >
          <ProFormList
            name={['default', 'users']}
            label="用户信息"
            creatorButtonProps={{
              creatorButtonText: '再建一行',
            }}
            initialValue={[
              {
                name: '1111',
              },
            ]}
            itemContainerRender={(doms) => {
              return <ProForm.Group>{doms}</ProForm.Group>;
            }}
          >
            {(f, index, action) => {
              console.log(f, index, action);
              return (
                <>
                  <ProFormText initialValue={index} name="rowKey" label={`第 ${index} 配置`} />
                  <ProFormText name="name" label="姓名" />
                  <ProFormDependency name={['name']}>
                    {({ name }) => {
                      if (!name) {
                        return (
                          <span
                            style={{
                              lineHeight: '32px',
                            }}
                          >
                            输入姓名展示
                          </span>
                        );
                      }
                      return <ProFormText name="remark" label="昵称详情" />;
                    }}
                  </ProFormDependency>
                </>
              );
            }}
          </ProFormList>
        </ProForm>
      </ProCard>
    </PageContainer>
  );
};

export default BasisForm;
