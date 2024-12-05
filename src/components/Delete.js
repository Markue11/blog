import React from 'react';
import { useNavigate } from 'react-router-dom';

const Delete = ({ post, deletePost }) => {
  const navigate = useNavigate();

  if (!post) {
    return <div className="delete-container">No post selected for deletion.</div>;
  }

  return (
    <div className="delete-container">
      <h2>Are you sure you want to delete this post?</h2>
      <div className="post-card">
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
      <div className="delete-actions">
        <button
          className="confirm-delete-btn"
          onClick={() => {
            deletePost(post.id);  // Delete the post
            navigate('/');         // Navigate back to home page
          }}
        >
          Yes, Delete
        </button>
        <button
          className="cancel-delete-btn"
          onClick={() => navigate('/')}  // Navigate back to home page without deleting
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Delete;
