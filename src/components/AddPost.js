import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


<button className="add-post-button" type="submit">Add Post</button>


const AddPost = ({ addPost }) => {
  const [post, setPost] = useState({ title: "", content: "", image: "" });
  const navigate = useNavigate();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(post); // Add the new post
    navigate("/"); // Navigate back to the home page
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPost((prevPost) => ({ ...prevPost, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="add-post">
      <h1>Add New Post</h1>
      <form onSubmit={handleSubmit}>
        {/* Title Input */}
        <input
          type="text"
          placeholder="Title"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          required
        />
        
        {/* Content Input */}
        <textarea
          placeholder="Content"
          value={post.content}
          onChange={(e) => setPost({ ...post, content: e.target.value })}
          required
        ></textarea>
        
        {/* Image Upload */}
        <input type="file" onChange={handleImageChange} accept="image/*" />
        
        <button type="submit">Add Post</button>
      </form>

      {/* Image Preview */}
      {post.image && (
        <div style={{ marginTop: "20px" }}>
          <h3>Image Preview:</h3>
          <img src={post.image} alt="Preview" style={{ maxWidth: "100%", height: "auto", border: "1px solid #ccc", borderRadius: "5px" }} />
        </div>
      )}
    </div>
  );
};

export default AddPost;
