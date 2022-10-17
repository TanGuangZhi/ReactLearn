/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  AppstoreTwoTone,
  CheckSquareTwoTone,
  ClockCircleTwoTone,
  CodepenOutlined,
  FireTwoTone,
  FolderTwoTone,
  HighlightTwoTone,
  LeftOutlined,
  PlusSquareTwoTone,
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
import _ from 'lodash';

const SystemOperate = () => {
  return (
    <main className="p-2 pl-4">
      <Space>
        <span>
          <div className="rounded-full bg-red-500 w-3 h-3"></div>
        </span>
        <span>
          <div className="rounded-full bg-yellow-500 w-3 h-3"></div>
        </span>
        <span>
          <div className="rounded-full bg-green-500 w-3 h-3"></div>
        </span>
      </Space>
    </main>
  );
};

const CommonCard = ({ data }: any) => {
  if (!data) return null;

  return (
    <main className="mt-4 p-4">
      <section className="text-gray-400 text-xs">{data.title}</section>
      <section>
        {data.children?.map(({ icon, title }: any) => (
          <div
            className="flex items-center p-2 hover:bg-sky-800 cursor-pointer rounded shadow"
            key={title}
          >
            {icon || <FolderTwoTone />}
            <span className="ml-2 ">{title}</span>
          </div>
        ))}
      </section>
    </main>
  );
};

const Column = ({ data }: any) => {
  return (
    <main className="border-r-2 max-w-xs">
      {data.map((item: any) => (
        <CommonCard key={item.title} data={item} />
      ))}
    </main>
  );
};

const LeftMenu = () => {
  const leftMenuData = [
    {
      title: '个人收藏',
      children: [
        { icon: <CheckSquareTwoTone />, title: '文稿' },
        { icon: <PlusSquareTwoTone />, title: '桌面' },
        { icon: <ClockCircleTwoTone />, title: '最近使用' },
        { icon: <HighlightTwoTone />, title: '应用程序' },
        { icon: <AppstoreTwoTone />, title: '下载' },
      ],
    },
    {
      title: 'iCloud',
    },
    {
      title: '标签',
      children: [
        { icon: <FolderTwoTone />, title: '配置文件' },
        { icon: <FireTwoTone />, title: '红色' },
        { icon: <FireTwoTone />, title: '橙色' },
        { icon: <FolderTwoTone />, title: '黄色' },
        { icon: <FolderTwoTone />, title: '绿色' },
      ],
    },
  ];
  return <Column data={leftMenuData} />;
};

const HeaderMenu = () => {
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

const MainContent = () => {
  const mainContentData = [
    {
      title: '文件夹',
      children: [
        { icon: '', title: '公共' },
        { icon: '', title: '图片' },
        { icon: '', title: '文稿' },
        { icon: '', title: '下载' },
        { icon: '', title: '音乐' },
        { icon: '', title: '应用程序' },
        { icon: '', title: '影片' },
        { icon: '', title: '桌面' },
        { icon: '', title: 'Nutstores Files' },
        { icon: '', title: 'Parallels' },
        { icon: '', title: 'Zotero' },
      ],
    },
    {
      title: '开发者',
      children: [
        { icon: '', title: '.bashrc' },
        { icon: '', title: '.logseq.zip' },
        { icon: '', title: '.wakatime.log' },
        { icon: '', title: '.yarnrc' },
        { icon: '', title: '.zshrc' },
      ],
    },
  ];
  return (
    <main>
      <Column data={mainContentData} />
    </main>
  );
};

export default function index() {
  return (
    <main
      className="text-white rounded flex"
      style={{ height: 800, backgroundColor: '#1e1b23' }}
    >
      <section className="basis-1/5">
        <SystemOperate />
        <LeftMenu />
      </section>
      <section className="flex-auto">
        <div>
          <HeaderMenu />
        </div>
        <div>
          <MainContent />
        </div>
      </section>
    </main>
  );
}
