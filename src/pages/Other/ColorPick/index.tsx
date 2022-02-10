import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';

const ColorPick: React.FC = () => {
  const [color, setColor] = useState('#FFF');
  return (
    <PageContainer>
      <ProCard title="拾色器" headerBordered>
        <SketchPicker
          color={color}
          onChange={(changeColor: React.SetStateAction<string>) => setColor(changeColor)}
        />
      </ProCard>
    </PageContainer>
  );
};

export default ColorPick;
