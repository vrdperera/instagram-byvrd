import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
// import Skeleton from 'react-loading-skeleton';
import { Skeleton } from '@mui/material';

export default function Suggestions({ userId }) {
  const [profiles, steProfiles] = useState(null);
  return !profiles ? (
    <Skeleton variant="circular" width={40} height={40} />
  ) : (
    <p>Hello</p>
  );
}

Suggestions.propTypes = {
  userId: PropTypes.string,
};
