import useUser from '../../hooks/useUser';
import User from './user';
import Suggestions from './suggestions';

export default function SideBar() {
  const {
    user: { fullName, username, userId, following },
  } = useUser();

  // console.log(following);
  return (
    <div>
      <User fullName={fullName} username={username} />
      <Suggestions userId={userId} following={following} />
    </div>
  );
}

SideBar.whyDidYouRender = true;
