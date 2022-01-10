import { useContext, useEffect, useState } from 'react';
import UseContext from '../context/user';
import { getUserById } from '../services/firebase';

export default function useUser() {
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(UseContext);

  useEffect(() => {
    async function getUserObjByUserId() {
      const response = await getUserById(user.uid);
      setActiveUser(response);
    }
    if (user?.uid) {
      getUserObjByUserId();
    }
  }, [user]);

  return { user: activeUser };
}
