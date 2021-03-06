import PropTypes from 'prop-types';
import { useEffect, useReducer } from 'react';
import { getUserPhotosByUserId } from '../../services/firebase';
import Header from './header';
import Photos from './photos';

export default function Profile({ user }) {
  const reducer = (currentState, newState) => ({
    ...currentState,
    ...newState,
  });

  const initialState = {
    profile: {},
    photosCollection: [],
    followCount: 0,
  };

  const [{ profile, photosCollection, followerCount = 0 }, dispatch] =
    useReducer(reducer, initialState);

  useEffect(() => {
    async function getProfileInfoAndPhotos() {
      const photos = await getUserPhotosByUserId(user?.userId);
      dispatch({
        profile: user,
        photosCollection: photos,
        followerCount: user?.followers?.length,
      });
      console.log(photos);
    }

    getProfileInfoAndPhotos();
  }, [user]);

  return (
    <>
      <Header
        photosCount={photosCollection ? photosCollection.length : 0}
        profile={profile}
        followerCount={followerCount}
        setFollowerCount={dispatch}
      />
      <Photos photos={photosCollection} />
    </>
  );
}

Profile.propTypes = {
  user: PropTypes.shape({
    dateCreated: PropTypes.number,
    emailAddress: PropTypes.string,
    followers: PropTypes.array,
    following: PropTypes.array,
    fullName: PropTypes.string,
    userId: PropTypes.string,
    username: PropTypes.string,
  }),
};
