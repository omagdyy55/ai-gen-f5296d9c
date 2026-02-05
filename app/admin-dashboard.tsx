import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table } from '@/components/ui/table';
import { Chart } from '@/components/ui/chart';

const AdminDashboard = () => {
  const [filter, setFilter] = useState('');
  const [data, setData] = useState([  // Sample data
    { id: 1, name: 'Item 1', value: 100 },
    { id: 2, name: 'Item 2', value: 200 },
    { id: 3, name: 'Item 3', value: 300 },
    { id: 4, name: 'Item 4', value: 400 },
    { id: 5, name: 'Item 5', value: 500 },
  ]);

  const filteredData = data.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md p-4">
        <h2 className="text-lg font-bold mb-4">Admin Dashboard</h2>
        <nav>
          <ul>
            <li><Button variant="outline">Dashboard</Button></li>
            <li><Button variant="outline">Settings</Button></li>
            <li><Button variant="outline">Users</Button></li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-6">Overview</h1>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-lg font-medium">Total Users</h3>
            <p className="text-2xl font-bold">1,234</p>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-lg font-medium">Active Sessions</h3>
            <p className="text-2xl font-bold">456</p>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-lg font-medium">New Signups</h3>
            <p className="text-2xl font-bold">78</p>
          </div>
        </div>
        <div className="mb-6">
          <Chart />
        </div>
        <div className="mb-6">
          <Input
            type="text"
            placeholder="Filter items..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="mb-4"
          />
          <Table data={filteredData} />
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
