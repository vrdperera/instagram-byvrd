import PropTypes from 'prop-types';
import { useEffect, useReducer } from 'react';
import Header from './header';

export default function Profile({ username }) {
  const [{ profile, photosCollection, followCount }, dispacth] = useReducer(
    reducer,
    initialState
  );

  return <h1>{username}</h1>;
}
