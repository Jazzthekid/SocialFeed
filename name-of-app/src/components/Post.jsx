
import React, { useState } from 'react';
import './Post.css';

const Post = ({ name, comment }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setIsDisliked(false);
  };

  const handleDislike = () => {
    setIsDisliked(!isDisliked);
    setIsLiked(false);
  };

  return (
    <div className="post">
      <div className="post-content">
        <h3>{name}</h3>
        <p>{comment}</p>
      </div>
      <div className="post-actions">
        <button
          className={`like-button ${isLiked ? 'liked' : ''}`}
          onClick={handleLike}
        >
          Like
        </button>
        <button
          className={`dislike-button ${isDisliked ? 'disliked' : ''}`}
          onClick={handleDislike}
        >
          Dislike
        </button>
      </div>
    </div>
  );
};

export default Post;
