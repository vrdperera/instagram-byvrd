import { useContext } from 'react';
import FirebaseContext from '../context/firebase';
import UserContext from '../context/firebase';
import * as ROUTES from '../constants/routes';

export default function Header() {
  const { firebase } = useContext(FirebaseContext);
  const user = useContext(UserContext);

  console.dir(user);
  // console.dir(firebase);
  return <div>im the Header</div>;
}
