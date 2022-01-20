import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getUserByUsername } from '../services/firebase';
import * as ROUTES from '../constants/routes.js';
import Header from '../components/header';
import UserProfile from '../components/profile';

export default function Profile() {
  const { username } = useParams();
  const history = useHistory();
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function checkUserExist() {
      const [user] = await getUserByUsername(username);
      if (user?.userId) {
        setUser(user);
      } else {
        history.push(ROUTES.NOT_FOUND);
      }
    }
    checkUserExist();
  }, [history, username]);

  return user?.username ? (
    <div className="bg-gray mx-auto ">
      <Header />
      <div className="mx-auto max-w-screen-lg">
        <UserProfile user={user} />
      </div>
    </div>
  ) : null;
}
