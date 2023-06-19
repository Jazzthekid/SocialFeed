import React, { useState } from 'react';
import Post from './components/Post';
import CreatePostForm from './components/CreatePostForm';
import NavigationBar from './components/NavBar';

function App() {

  const [post,setPosts] = useState()
  const posts = [
    {name: 'John Doe', comment: 'This is a great post!'},
    {name: 'Chante Smith', comment: 'Miles Morales is the best Spiderman!!'}
    

]
    
      
  return (
    <div >
      <NavigationBar/>
      <CreatePostForm/>
      {posts.map((post, index) => (
        <Post key={index} name={post.name} comment={post.comment} />
      ))}
      
      

    </div>
  );
}

export default App;
