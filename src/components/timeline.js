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
      {!photos ? (
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
      ) : photos?.length > 0 ? (
        photos.map((content) => <Post key={content.docId} content={content} />)
      ) : (
        <p className="text-center text-2xl">Follow people to see photos!</p>
      )}
    </div>
  );
}
