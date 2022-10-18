import React from 'react';
import { CommonCard } from './CommonCard';

export const Column = ({ data }: any) => {
  return (
    <main className="border-r-2 flex-auto">
      {data.map((item: any) => (
        <CommonCard key={item._id || item.title} data={item} />
      ))}
    </main>
  );
};
