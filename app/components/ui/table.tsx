import { useState } from 'react';

const Table = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const currentData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="bg-white rounded shadow-md overflow-hidden">
      <table className="min-w-full">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 text-left">ID</th>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Value</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map(item => (
            <tr key={item.id} className="border-b">
              <td className="p-2">{item.id}</td>
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between p-2">
        <Button onClick={handlePrev} disabled={currentPage === 1}>Previous</Button>
        <Button onClick={handleNext} disabled={currentPage === totalPages}>Next</Button>
      </div>
    </div>
  );
};

export default Table;
