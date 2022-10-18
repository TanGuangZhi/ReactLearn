import { FolderTwoTone } from '@ant-design/icons';
import React, { useContext } from 'react';
import MyContext from '../context/myContext';

export const CommonCard = ({ data }: any) => {
  if (!data) return null;

  const { setSelectedRow } = useContext(MyContext);
  return (
    <main className="mt-4 p-4">
      <section className="text-gray-400 text-xs">{data.title}</section>
      <section>
        {data.children?.map(({ icon, title, _id }: any) => (
          <div
            className="flex items-center p-2 hover:bg-sky-800 cursor-pointer rounded shadow"
            key={_id || title}
            onClick={() => {
              setSelectedRow(title);
            }}
          >
            {icon || <FolderTwoTone />}
            <span className="ml-2 ">{title}</span>
          </div>
        ))}
      </section>
    </main>
  );
};
