import { useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from '../components/header';
import Timeline from '../components/timeline';
import Sidebar from '../components/sidebar';
import useUser from '../hooks/useUser';
import LoggedInUserContext from '../context/loggedInUser';

export default function Dashboard({ user: loggedInUser }) {
  const { user, setActiveUser } = useUser(loggedInUser.uid);

  useEffect(() => {
    document.title = 'Dashboard';
  });

  return (
    <LoggedInUserContext.Provider value={{ user, setActiveUser }}>
      <div className="bg-gray-100">
        <Header />
        <div className="grid grid-cols-3 gap-4 justify-between mx-auto  max-w-screen-lg">
          <Timeline />
          <Sidebar />
        </div>
      </div>
    </LoggedInUserContext.Provider>
  );
}

Dashboard.propTypes = {
  user: PropTypes.object.isRequired,
};
