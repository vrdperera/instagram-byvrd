import { useEffect, useState } from 'react';
// import UserContext from '../context/user';
import { getPhotos } from '../services/firebase.js';

export default function usePhotos(user) {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    async function getUserTimelinePhotos() {
      // const [{ following }] = await getUserByUserId(user.userId);

      if (user?.following?.length > 0) {
        const followedUserPhotos = await getPhotos(user.userId, user.following);
        followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
        setPhotos(followedUserPhotos);
      }
    }

    getUserTimelinePhotos();
  }, [user?.following, user?.userId]);

  return { photos };
}
