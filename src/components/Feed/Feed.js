import React, {useEffect, useState} from 'react'
import db from '../../firebase';
import Post from '../Post/Post';
import Tweetbox from '../Tweetbox/Tweetbox';
import FlipMove from 'react-flip-move';
import './Feed.css';

function Feed() {
  const [post, setPost] = useState([]);

  useEffect(() => {
      db.collection("posts").onSnapshot((snapshot) => {
          setPost(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div className='feed'>
        <div className='feed_header'>
            <h2>Home</h2>
        </div>
        <Tweetbox />
        <FlipMove>
            {post.map((post) => (
                <Post 
                    key={post.text}
                    displayName={post.displayName}
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                />
            ))}
        </FlipMove>
    </div>
  );
}

export default Feed;    
