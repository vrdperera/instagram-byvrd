import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

export default function User({ fullName, username }) {
  return <p> Ima User </p>;
}

User.propTypes = {
  fullName: PropTypes.string,
  username: PropTypes.string,
};
