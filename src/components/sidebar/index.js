import useUser from '../../hooks/useUser';
import User from './user';
import Suggestions from './suggestions';

export default function SideBar() {
  const {
    user: { docId, fullName, username, userId, following },
  } = useUser();

  return (
    <div>
      <User fullName={fullName} username={username} />
      <Suggestions
        userId={userId}
        following={following}
        loggedInUserDocId={docId}
      />
    </div>
  );
}

SideBar.whyDidYouRender = true;
