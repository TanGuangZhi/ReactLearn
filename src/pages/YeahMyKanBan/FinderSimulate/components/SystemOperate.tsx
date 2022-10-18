import { Space } from 'antd';
import React from 'react';

export const SystemOperate = () => {
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
