import React, { useContext } from 'react';
import { Column } from '../components/Column';
import MyContext from '../context/myContext';

export const MainContent = () => {
  const { columnData } = useContext(MyContext);
  const mainContentData = [
    [
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
    ],
    [...columnData],
  ];
  return (
    <main className="flex">
      {mainContentData.map((item, index) => (
        <Column data={item} key={index} />
      ))}
    </main>
  );
};
