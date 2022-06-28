import React, {useState} from 'react'
import  {Avatar, Button} from '@material-ui/core';
import db from '../../firebase';
import './Tweetbox.css';

function Tweetbox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (e) => {
      e.preventDefault();
      db.collection("posts").add({
          username: "RdhCodes",
          displayName: "Ryan Hernandez",
          avatar: "https://i.pinimg.com/736x/f2/4d/0c/f24d0cf4a2d0c50942b349f9a06d38fc.jpg",
          verified: true,
          text: tweetMessage,
          image: tweetImage,
      });
      setTweetMessage("");
      setTweetImage("");
  }
  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox_input'>
                <Avatar src="https://i.pinimg.com/736x/f2/4d/0c/f24d0cf4a2d0c50942b349f9a06d38fc.jpg" />
                <input value={tweetMessage} onChange={(e) => setTweetMessage(e.target.value)} placeholder="What's On Your Mind" type="text"/>
            </div>
            <input value={tweetImage} onChange={(e) => setTweetImage(e.target.value)} type="text" className='tweetBox_imageInput' placeholder='(Optional) Enter image URL' />
            <Button onClick={sendTweet} type="submit" className='tweetBox_button' >
                Tweet
            </Button>
        </form>
    </div>
  );
}

export default Tweetbox;