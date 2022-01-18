import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getUserByUsername } from '../services/firebase';
import * as ROUTES from '../constants/routes.js';

export default function Profile() {
  const { username } = useParams();
  console.log(username);
  const history = useHistory();
  const [user, setUser] = useState(null);
  const [userExist, setUserExist] = useState(false);

  useEffect(() => {
    async function checkUserExist() {
      const user = await getUserByUsername(username);
      if (user.length > 0) {
        setUser(user);
        setUserExist(true);
      } else {
        history.push(ROUTES.NOT_FOUND);
      }
    }
    checkUserExist();
    console.log(user);
  }, [history, username]);

  return username ? <div className="bg-gray-500"></div> : null;
}
