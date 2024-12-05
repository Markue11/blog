import React from "react";
import { useNavigate } from "react-router-dom";

const PostDetails = ({ post }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/"); // Navigate back to the post list
  };

  return (
    <div className="post-details">
      <h1>Post Details</h1>
      <div>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        {post.image && <img src={post.image} alt="Post Image" style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }} />}
      </div>
      <button onClick={handleBack}>Back to Post List</button>
    </div>
  );
};

export default PostDetails;
