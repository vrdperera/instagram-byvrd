import { useContext } from 'react';
import LoggedInUserContext from '../context/loggedInUser';
import { Skeleton } from '@mui/material';
import usePhotos from '../hooks/usePhotos';

import Post from './post';

export default function Timeline() {
  const { user } = useContext(LoggedInUserContext);
  const { user: { following } = {} } = useContext(LoggedInUserContext);
  const { photos } = usePhotos(user);

  console.log(photos);
  return (
    <div className="container col-span-2">
      {following === undefined ? (
        <>
          {[...new Array(4)].map((_, idx) => {
            return (
              <Skeleton
                sx={{ bgcolor: 'grey.200' }}
                className="mb-5"
                key={idx}
                variant="rectangular"
                width={640}
                height={600}
              />
            );
          })}
        </>
      ) : following.length === 0 ? (
        <p className="flex justify-center font-bold">
          Follow other people to see Photos
        </p>
      ) : photos ? (
        photos.map((content) => <Post key={content.docId} content={content} />)
      ) : null}
    </div>
  );
}
