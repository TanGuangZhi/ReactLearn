import {
  CodepenOutlined,
  LeftOutlined,
  RedditOutlined,
  RightOutlined,
  SearchOutlined,
  ShareAltOutlined,
  SmallDashOutlined,
  TagsOutlined,
  ToolOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import { Space } from 'antd';
import React from 'react';

export const HeaderMenu = () => {
  return (
    <main className="flex justify-between py-2 px-4">
      <div className="flex item-center">
        <section>
          <Space>
            <LeftOutlined />
            <RightOutlined />
          </Space>
        </section>
        <section className="ml-2">
          <span className="text-lg font-bold">chuangzhang</span>
        </section>
      </div>
      <div className="flex basis-2/5 justify-between">
        <section className="ml-2">
          <Space>
            <UnorderedListOutlined />
            <CodepenOutlined />
            <RedditOutlined />
            <SmallDashOutlined />
          </Space>
        </section>
        <section className="ml-2"></section>
        <section className="ml-2">
          <Space>
            <ShareAltOutlined />
            <TagsOutlined />
            <ToolOutlined />
            <SearchOutlined />
          </Space>
        </section>
      </div>
    </main>
  );
};
