import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp.js';

const ChatEntry = (props) => {
  const onLikeButtonClick = () => {
    const updatedLike = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked
    };
    props.updateLikeData(updatedLike);
  };

  const entrySender = props.sender === 'Vladimir' ? 'chat-entry local': 'chat-entry remote';

  const heartColor = props.liked ? '🖤': '🤍';

  return (
    <div className={entrySender}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time ={props.timeStamp}/></p>
        <button className="like" onClick={onLikeButtonClick}>{heartColor}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  updateLikeData: PropTypes.func
};

export default ChatEntry;
