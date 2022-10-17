/* eslint-disable @typescript-eslint/no-unused-vars */
import { SnippetsTwoTone } from '@ant-design/icons';
import { Space } from 'antd';
import React from 'react';

const SystemOperate = () => {
  return (
    <main>
      <Space>
        <span>x</span>
        <span>-</span>
        <span>+</span>
      </Space>
    </main>
  );
};

const CommonCard = ({ data }: any) => {
  return (
    <main className="mt-4">
      <section className="text-gray-400 text-xs">{data.title}</section>
      <section>
        {data.children?.map(({ icon, title }: any) => (
          <div className="flex items-center mt-2" key={title}>
            <SnippetsTwoTone className="mr-2" />
            <span>{title}</span>
          </div>
        ))}
      </section>
    </main>
  );
};

const HeaderMenu = () => {
  return (
    <main className="flex">
      <section>
        <Space>
          <span>{'<'}</span>
          <span>{'>'}</span>
        </Space>
      </section>
      <section className="ml-2">chuangzhang</section>
      <section className="ml-2">|||</section>
      <section className="ml-2">***</section>
      <section className="ml-2">
        <Space>
          <span>share</span>
          <span>tag</span>
          <span>more</span>
        </Space>
      </section>
      <section className="ml-2">
        <span>search</span>
      </section>
    </main>
  );
};

export default function index() {
  const leftMenuData = [
    {
      title: '个人收藏',
      children: [
        { icon: '', title: '文稿' },
        { icon: '', title: '桌面' },
        { icon: '', title: '最近使用' },
        { icon: '', title: '应用程序' },
        { icon: '', title: '下载' },
      ],
    },
    {
      title: 'iCloud',
    },
    {
      title: '标签',
      children: [
        { icon: '', title: '配置文件' },
        { icon: '', title: '红色' },
        { icon: '', title: '橙色' },
        { icon: '', title: '黄色' },
        { icon: '', title: '绿色' },
      ],
    },
  ];
  return (
    <main
      className="border bg-black text-white rounded flex"
      style={{ height: 800 }}
    >
      <section className="border border-blue-500 basis-1/5">
        <SystemOperate />
        {leftMenuData.map((item) => (
          <CommonCard key={item.title} data={item} />
        ))}
      </section>
      <section className="border border-red-500 flex-auto">
        <div className="heder border border-green-500">
          <HeaderMenu />
        </div>
        <div className="main">main</div>
      </section>
    </main>
  );
}
