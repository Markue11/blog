import React from "react";
import { Link } from "react-router-dom";

const PostList = ({ posts, setSelectedPost, deletePost }) => {
  const handleEditPost = (post) => {
    setSelectedPost(post); // Set the selected post to be edited
  };

  return (
    <div className="app-container"> {/* Wrapper div to center the content */}
      <div className="post-list">
        <h1>Post</h1>
        {posts.length === 0 ? (
          <p>No posts available. Please add some posts.</p>
        ) : (
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {posts.map((post) => (
              <li key={post.id} style={{ textAlign: "center" }}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                {post.image && (
                  <img
                    src={post.image}
                    alt="Post image"
                    style={{
                      width: "300px", // Increased width
                      height: "300px", // Increased height
                      objectFit: "cover", // Ensures the image fills the space without distortion
                      marginTop: "10px",
                      borderRadius: "5px",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                )}
                <div style={{ marginTop: "20px" }}>
                  {/* Edit Post Button */}
                  <Link to="/edit-post" onClick={() => handleEditPost(post)}>
                    <button>Edit Post</button>
                  </Link>
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
    </div>
  );
};

export default PostList;
