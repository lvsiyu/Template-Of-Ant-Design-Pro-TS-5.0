import React from 'react';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import ProForm, { ProFormList, ProFormText, ProFormDependency } from '@ant-design/pro-form';

const BasisForm: React.FC = () => {
  return (
    <PageContainer>
      <ProCard>
        <ProForm
          submitter={{
            render: (_, dom) => <FooterToolbar>{dom}</FooterToolbar>,
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
