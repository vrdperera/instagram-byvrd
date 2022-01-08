import { useEffect } from 'react';

import Header from '../components/header';
import Timeline from '../components/timeline';
import Sidebar from '../components/sidebar';

export default function Dashboard() {
  useEffect(() => {
    document.title = 'Dashboard';
  });

  return (
    <div className="bg-gray-100">
      <Header />
      <div className="gird">
        <Timeline />
        <Sidebar />
      </div>
    </div>
  );
}
