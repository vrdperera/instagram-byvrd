import useUser from '../../hooks/useUser';
import User from './user';
import Suggestions from './suggestions';

export default function SideBar() {
  const { user: fullName, username, userId } = useUser();
  console.log(fullName, username, userId);
  return (
    <div>
      <p>im the SideBar</p>
      <User />
      <Suggestions />
    </div>
  );
}
