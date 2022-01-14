import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Skeleton } from '@mui/material';
import { getSuggestedProfiles } from '../../services/firebase';

export default function Suggestions({ userId, following }) {
  const [profiles, setProfiles] = useState(null);

  useEffect(() => {
    async function suggestedProfiles() {
      const response = await getSuggestedProfiles(userId, following);
      setProfiles(response);
    }

    if (userId) {
      suggestedProfiles();
    }
  }, [userId, following]);

  return !profiles ? (
    <Skeleton />
  ) : profiles.length > 0 ? (
    <div className="rounded flex flex-col">
      <div className="text-sm flex items-center  justify-between mb-2">
        <p className="font-bold text-gray-base">Suggestions for you</p>
      </div>
      <div className="mt-4 grid gap-5">
        {/* {profiles.map((profile) => (
          <SuggestedProfile
            key={profile.docId}
            profileDocId={profile.docId}
            username={profile.username}
            profileId={profile.userId}
            userId={userId}
            loggedInUserDocId={loggedInUserDocId}
          />
        ))} */}
      </div>
    </div>
  ) : null;
}

Suggestions.propTypes = {
  userId: PropTypes.string,
  following: PropTypes.array,
};
