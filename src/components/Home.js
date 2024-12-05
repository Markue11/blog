import React from "react";
import { Link } from "react-router-dom";

const PostList = ({ posts, setSelectedPost, deletePost }) => {
  return (
    <div className="post-list">
      <h1>Post List</h1>
      {posts.length === 0 ? (
        <p>No posts available. Please add some posts.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              {post.image && <img src={post.image} alt="Post image" style={{ maxWidth: '100px', height: 'auto' }} />}
              <div>
                <button onClick={() => {
                  setSelectedPost(post);
                  window.location.href = "/edit-post";
                }}>Edit</button>
                <button onClick={() => deletePost(post.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <Link to="/add-post">
        <button>Add Post</button>
      </Link>
    </div>
  );
};

export default PostList;
