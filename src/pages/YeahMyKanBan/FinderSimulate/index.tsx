import { useUpdateEffect } from 'ahooks';
import axios from 'axios';
import React, { useState } from 'react';
import { SystemOperate } from './components/SystemOperate';
import MyContext from './context/myContext';
import { HeaderMenu } from './pages/HeaderMenu';
import { LeftMenu } from './pages/LeftMenu';
import { MainContent } from './pages/MainContent';

export default function index() {
  const [columnData, setColumnData] = useState([]);
  const [selectedRow, setSelectedRow] = useState('');
  useUpdateEffect(() => {
    getColumnData();
    // console.log(selectedRow);
  }, [selectedRow]);

  const getColumnData = async () => {
    const res: any = await axios.get(
      'https://dev.usemock.com/634e5ffaad2611a74047395b/api/yeahMyKanBan/columnData',
    );
    // console.log(res);
    if (!res) return;
    setColumnData(res.data.list);
  };
  return (
    <main
      className="text-white rounded flex"
      style={{ height: 800, backgroundColor: '#1e1b23' }}
    >
      <MyContext.Provider value={{ columnData, setSelectedRow }}>
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
      </MyContext.Provider>
    </main>
  );
}
