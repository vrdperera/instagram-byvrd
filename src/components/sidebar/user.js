import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

export const User = ({ fullName, username, userId }) =>
  !fullName || !username ? (
    <Skeleton count={1} height={61} />
  ) : (
    <Link to={`/p/${username}`} className="grid">
      <p>{fullName}</p>
    </Link>
  );

User.propTypes = {
  fullName: PropTypes.string,
  username: PropTypes.string,
};

export default User;
