import {
  AppstoreTwoTone,
  CheckSquareTwoTone,
  ClockCircleTwoTone,
  FireTwoTone,
  FolderTwoTone,
  HighlightTwoTone,
  PlusSquareTwoTone,
} from '@ant-design/icons';
import React from 'react';
import { Column } from '../components/Column';

export const LeftMenu = () => {
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
