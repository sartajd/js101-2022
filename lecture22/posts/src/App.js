import { useEffect, useState } from 'react';
import './App.css';
import Loader from './components/loader';

function App() {
  const [postId ,setPostId] = useState(1) 
  const [post, setPost] = useState(null) 

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/"+ postId)
    .then(response => response.json())
    .then(data => {
      setPost(data)
    })
  }, [])

  const handleChange = event => {
    setPostId(event.target.value)
  }

  const loadPost = () => {
    setPost(null)
    fetch("https://jsonplaceholder.typicode.com/posts/"+ postId)
    .then(response => response.json())
    .then(data => {
      setPost(data)
    })
  }

  return (
    <div className="App">
      <input value={postId} onChange={handleChange} placeholder="enter post id" />
      <button onClick={loadPost}>Load</button>
      <hr />

      {
        post === null? <Loader />: 
        <div className='conatiner'>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>

      }
    </div>
  );
}

export default App;
