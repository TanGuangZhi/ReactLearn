import { Input } from 'antd';
import _ from 'lodash';
import React, { useState } from 'react';

export default function index() {
  const [showAddNewCard, setShowAddNewCard] = useState(false);
  const [dataList, setDataList] = useState({
    todoList: [
      { title: '开发任务-1', status: '2022-05-22 18:15' },
      { title: '开发任务-3', status: '2022-06-22 18:15' },
      { title: '开发任务-5', status: '2022-07-22 18:15' },
      { title: '测试任务-3', status: '2022-07-23 18:15' },
    ],
    ongoingList: [
      { title: '开发任务-4', status: '2022-05-22 18:15' },
      { title: '开发任务-6', status: '2022-06-22 18:15' },
      { title: '测试任务-2', status: '2022-07-22 18:15' },
    ],
    doneList: [
      { title: '开发任务-2', status: '2022-06-24 18:15' },
      { title: '测试任务-1', status: '2022-07-03 18:15' },
    ],
  });
  const Header = () => {
    return (
      <section className="bg-slate-700 text-white h-20 flex justify-center items-center  ">
        <div>header</div>
      </section>
    );
  };

  const KanBanContainer = () => {
    const titleShow = (data) => {
      return <div>111</div>;
    };
    return (
      <section className="flex justify-between">
        {_.map(dataList, (value, key) => (
          <KanBanColumn title={key} data={value} />
        ))}
      </section>
    );
  };

  const KanBanColumn = ({ title, data }: any) => {
    return (
      <section className="border flex-auto p-4">
        <div className="text-center border-b-2 mb-4">{title}</div>
        {data.map((item: any) => (
          <KanBanCard data={item} />
        ))}
        {showAddNewCard && <AddNewCard />}
      </section>
    );
  };

  const KanBanCard = ({ data }: any) => {
    return (
      <section className="border rounded mb-4 h-16 p-2">
        <div>{data.title}</div>
        <div className="text-right">{data.status}</div>
      </section>
    );
  };

  const AddNewCard = () => {
    return (
      <>
        <Input type="text" />
      </>
    );
  };

  return (
    <main className="shadow-md p-4 rounded" style={{ height: 900 }}>
      <Header />
      <KanBanContainer />
    </main>
  );
}
