import { Skeleton } from '@mui/material';
import usePhotos from '../hooks/usePhotos';

export default function Timeline() {
  const { photos } = usePhotos();
  console.log(photos);
  return (
    <div className="container col-span-2">
      {!photos ? (
        <>
          {[...new Array(4)].map((_, idx) => {
            return (
              <Skeleton
                sx={{ bgcolor: 'grey.400' }}
                className="mb-1"
                key={idx}
                variant="rectangular"
                width={320}
                height={400}
              />
            );
          })}
        </>
      ) : photos?.length > 0 ? (
        photos.map((content) => <p key={content.docId}>{content.docId}</p>)
      ) : (
        <p className="text-center text-2xl">Follow people to see photos</p>
      )}
    </div>
  );
}
