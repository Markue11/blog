import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import AddPost from "./components/AddPost";
import EditPost from "./components/EditPost";
import PostDetails from "./components/PostDetails"; // Import the PostDetails component
import Login from "./components/Login";
import Signup from "./components/Signup";


<div className="app-container">
  <div className="form-container">
    {/* Your AddPost or EditPost form here */}
  </div>
</div>


function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  const addPost = (newPost) => {
    setPosts([...posts, { id: Date.now(), ...newPost }]);
  };

  const deletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  const editPost = (updatedPost) => {
    setPosts(posts.map((post) => (post.id === updatedPost.id ? updatedPost : post)));
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Home route displaying post list */}
          <Route
            path="/"
            element={
              <PostList
                posts={posts}
                setSelectedPost={setSelectedPost}
                deletePost={deletePost}
                editPost={editPost} // Pass the editPost function
              />
            }
          />
          {/* Add new post route */}
          <Route path="/add-post" element={<AddPost addPost={addPost} />} />
          {/* Edit post route */}
          <Route
            path="/edit-post"
            element={
              <EditPost
                selectedPost={selectedPost}
                editPost={editPost}
              />
            }
          />
          {/* Post details route */}
          <Route
            path="/post-details/:id"
            element={<PostDetails post={selectedPost} />}
          />
          {/* Authentication routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
