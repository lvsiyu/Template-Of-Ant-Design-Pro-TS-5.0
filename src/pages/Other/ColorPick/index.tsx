import React, { useState } from 'react';
import {
  SketchPicker,
  PhotoshopPicker,
  BlockPicker,
  SwatchesPicker,
  TwitterPicker,
  CirclePicker,
  GithubPicker,
  CompactPicker,
  HuePicker,
  AlphaPicker,
  SliderPicker,
  ChromePicker,
} from 'react-color';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';

const ColorPick: React.FC = () => {
  const [color, setColor] = useState('#CECECE');
  return (
    <PageContainer>
      <ProCard
        title="拾色器"
        headerBordered
        gutter={[{ xs: 8, sm: 8, md: 16, lg: 24, xl: 32 }, 16]}
      >
        <ProCard bordered title="SketchPicker" headerBordered>
          <SketchPicker
            color={color}
            onChange={(changeColor: React.SetStateAction<string>) => setColor(changeColor)}
          />
        </ProCard>
        <ProCard bordered headerBordered style={{ height: '100%' }} title="PhotoshopPicker">
          <PhotoshopPicker
            color={color}
            onChange={(changeColor: React.SetStateAction<string>) => setColor(changeColor)}
          />
        </ProCard>
        <ProCard bordered headerBordered style={{ height: '100%' }} title="ChromePicker">
          <ChromePicker
            color={color}
            onChange={(changeColor: React.SetStateAction<string>) => setColor(changeColor)}
          />
        </ProCard>

        <ProCard bordered headerBordered style={{ height: '100%' }} title="SwatchesPicker">
          <SwatchesPicker
            color={color}
            onChange={(changeColor: React.SetStateAction<string>) => setColor(changeColor)}
          />
        </ProCard>
      </ProCard>

      <ProCard
        style={{ marginTop: '1rem' }}
        gutter={[{ xs: 8, sm: 8, md: 16, lg: 24, xl: 32 }, 16]}
      >
        <ProCard bordered headerBordered style={{ height: '100%' }} title="TwitterPicker">
          <TwitterPicker
            color={color}
            onChange={(changeColor: React.SetStateAction<string>) => setColor(changeColor)}
          />
        </ProCard>
        <ProCard bordered headerBordered title="CirclePicker">
          <CirclePicker
            color={color}
            onChange={(changeColor: React.SetStateAction<string>) => setColor(changeColor)}
          />
        </ProCard>
        <ProCard bordered headerBordered style={{ height: '100%' }} title="GithubPicker">
          <GithubPicker
            color={color}
            onChange={(changeColor: React.SetStateAction<string>) => setColor(changeColor)}
          />
        </ProCard>
        <ProCard bordered headerBordered style={{ height: '100%' }} title="CompactPicker">
          <CompactPicker
            color={color}
            onChange={(changeColor: React.SetStateAction<string>) => setColor(changeColor)}
          />
        </ProCard>
      </ProCard>

      <ProCard
        style={{ marginTop: '1rem' }}
        gutter={[{ xs: 8, sm: 8, md: 16, lg: 24, xl: 32 }, 16]}
      >
        <ProCard bordered headerBordered style={{ height: '100%' }} title="HuePicker">
          <HuePicker
            color={color}
            onChange={(changeColor: React.SetStateAction<string>) => setColor(changeColor)}
          />
        </ProCard>
        <ProCard bordered headerBordered style={{ height: '100%' }} title="AlphaPicker">
          <AlphaPicker
            color={color}
            onChange={(changeColor: React.SetStateAction<string>) => setColor(changeColor)}
          />
        </ProCard>
        <ProCard bordered headerBordered style={{ height: '100%' }} title="SliderPicker">
          <SliderPicker
            color={color}
            onChange={(changeColor: React.SetStateAction<string>) => setColor(changeColor)}
          />
        </ProCard>
        <ProCard bordered headerBordered title="BlockPicker" style={{ height: '100%' }}>
          <BlockPicker
            color={color}
            onChange={(changeColor: React.SetStateAction<string>) => setColor(changeColor)}
          />
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};

export default ColorPick;
