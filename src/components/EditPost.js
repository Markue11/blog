import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

<button className="edit-post-button" type="submit">Edit Post</button>


const EditPost = ({ selectedPost, editPost }) => {
  const [post, setPost] = useState({ title: "", content: "", image: "" });
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedPost) {
      setPost({ ...selectedPost }); // Pre-fill the form with the selected post data
    }
  }, [selectedPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editPost(post); // Update the post with the new data
    navigate("/"); // Navigate back to the post list after editing
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
    <div className="edit-post">
      <h1>Edit Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Content"
          value={post.content}
          onChange={(e) => setPost({ ...post, content: e.target.value })}
          required
        ></textarea>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />

        <button type="submit">Save Changes</button>
      </form>

      {/* Display image preview */}
      {post.image && (
        <div style={{ marginTop: "20px" }}>
          <h3>Image Preview:</h3>
          <img
            src={post.image}
            alt="Preview"
            style={{
              width: '300px',  // Increased width
              height: '300px', // Increased height
              objectFit: 'cover', // Ensures the image fills the space without distortion
              border: '1px solid #ccc',
              borderRadius: '5px',
              marginTop: "10px",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default EditPost;
