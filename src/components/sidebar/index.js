import useUser from '../../hooks/useUser';
import User from './user';
import Suggestions from './suggestions';

export default function SideBar() {
  const {
    user: { fullName, username, userId },
  } = useUser();

  // console.log(fullName, username, userId);
  return (
    <div>
      <User fullName={fullName} username={username} />
      <Suggestions userId={userId} />
    </div>
  );
}
