import React, { useState } from 'react';
import './CreatePostForm.css';

const CreatePostForm = (props) => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to submit the post data to the server or perform any desired actions
    console.log('Name:', name);
    console.log('Content:', content);
  };

  return (
    <form className="create-post-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={handleNameChange}
      />
      <textarea
        placeholder="What would you like to post?"
        value={content}
        onChange={handleContentChange}
      ></textarea>
      <button type="submit">Post</button>
    </form>
  );
};


 
export default CreatePostForm;