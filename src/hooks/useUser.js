import { useContext, useEffect, useState } from 'react';
import UseContext from '../context/user';

export default function useUser() {
  const [activeUSer, setActiveUSer] = useState({});
  const { user } = useContext(UseContext);

  useEffect(() => {
    async function getUserObjByUserId() {
      setActiveUSer(response);
    }
    if (user?.uid) {
      getUserObjByUserId();
    }
  }, [user]);
}
