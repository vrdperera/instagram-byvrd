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
            return <Skeleton id={idx} />;
          })}
        </>
      ) : null}
    </div>
  );
}
