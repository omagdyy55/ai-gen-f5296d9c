import { useEffect, useState } from 'react';

const Table = ({ data }) => {
  return (
    <table className="min-w-full border-collapse border border-gray-200">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-200 p-2">ID</th>
          <th className="border border-gray-200 p-2">Name</th>
          <th className="border border-gray-200 p-2">Value</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className="border-b border-gray-200">
            <td className="border border-gray-200 p-2">{item.id}</td>
            <td className="border border-gray-200 p-2">{item.name}</td>
            <td className="border border-gray-200 p-2">{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;