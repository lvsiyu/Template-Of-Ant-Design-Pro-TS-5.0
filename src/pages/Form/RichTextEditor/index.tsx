import React, { useState } from 'react';
import { message } from 'antd';
import ReactQuill from 'react-quill';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import { uploadListForm } from './services';
import ProForm from '@ant-design/pro-form';
import 'react-quill/dist/quill.snow.css';
import './style/index.less';

const RichTextEditor: React.FC = () => {
  const [quillValue, setQuillValue] = useState('');

  const submitForm = () => {
    console.log(quillValue);
    uploadListForm(quillValue).then((data) => {
      if (data.code === 200) {
        message.success('提交成功');
      } else {
        message.error('提交失败');
      }
    });
  };

  const modules = {
    toolbar: [
      // 加粗 斜体 下划线 删除线
      ['bold', 'italic', 'underline', 'strike'],
      // 块引用 代码引用
      ['blockquote', 'code-block'],
      // 标题字体
      [{ header: 1 }, { header: 2 }],
      // 列表前缀
      [{ list: 'ordered' }, { list: 'bullet' }],
      // 上下标
      [{ script: 'sub' }, { script: 'super' }],
      // 缩进缩退一格
      [{ indent: '-1' }, { indent: '+1' }],
      // 字体左右对齐
      [{ direction: 'rtl' }],
      // 设置字体大小
      [{ size: ['small', false, 'large', 'huge'] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      // 字体颜色及字体背景颜色
      [{ color: [] }, { background: [] }],
      // 字体样式
      [{ font: [] }],
      // 对齐方式
      [{ align: [] }],
      // 清空所有样式
      ['clean'],
    ],
  };

  const saveValue = (values: React.SetStateAction<string>) => {
    setQuillValue(values);
  };

  const resetEditor = () => {
    setQuillValue('');
  };

  return (
    <PageContainer>
      <ProCard title="基本富文本编辑器" headerBordered bordered>
        <ProForm
          submitter={{
            render: (_, dom) => <FooterToolbar>{dom}</FooterToolbar>,
          }}
          onReset={resetEditor}
          onFinish={async () => {
            submitForm();
          }}
        >
          <ReactQuill
            key="1"
            theme="snow"
            modules={modules}
            value={quillValue}
            onChange={saveValue}
          />
        </ProForm>
      </ProCard>
    </PageContainer>
  );
};

export default RichTextEditor;
