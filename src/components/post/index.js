import { useRef } from 'react';
import PropTypes from 'prop-types';
import Header from './header';

export default function Post({ content: { username } }) {
  return (
    <div className="rounded col-span-4  bg-white border border-gray-300 mb-12">
      <Header username={username} />
    </div>
  );
}

Post.propTypes = {
  content: PropTypes.shape({
    username: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    docId: PropTypes.string.isRequired,
    userLikedPhoto: PropTypes.bool.isRequired,
    likes: PropTypes.array.isRequired,
    comments: PropTypes.array.isRequired,
    dateCreated: PropTypes.number.isRequired,
  }),
};
