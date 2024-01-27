// Feed.js

import React, { useState } from 'react';
import './feed.css'; // اضافه کردن فایل استایل

const Feed = ({name}) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [replyingCommentId, setReplyingCommentId] = useState(null);
  const [replyButtonClicked, setReplyButtonClicked] = useState(false);
  const [error, setError] = useState('');

  const handleCommentSubmit = () => {
    // اعتبارسنجی: اگر input خالی باشد، پیام خطا را نمایش دهید و نظر ارسال نشود
    if (!newComment.trim()) {
      setError('Please entet the text .');
      return;
    }

    if (replyingCommentId !== null) {
      const newComments = comments.map(comment =>
        comment.id === replyingCommentId
          ? { ...comment, replies: [...(comment.replies || []), { id: comment.replies.length + 1, text: newComment, likes: 0 }] }
          : comment
      );
      setComments(newComments);
      setReplyingCommentId(null);
    } else {
      setComments([...comments, { id: comments.length + 1, text: newComment, replies: [], likes: 0 }]);
    }
    setNewComment('');
    setReplyButtonClicked(false);
    setError(''); // پس از ارسال نظر، خطای مرتبط با input را پاک کنید
  };

  const handleReplyClick = (commentId) => {
    setReplyingCommentId(commentId);
    setReplyButtonClicked(true);
  };

  const handleLikeClick = (commentId) => {
    const newComments = comments.map(comment =>
      comment.id === commentId
        ? { ...comment, likes: comment.likes + 1 }
        : comment
    );
    setComments(newComments);
  };

  const handleInputChange = (event) => {
    setNewComment(event.target.value);
    setError(''); // هربار که تغییری در input ایجاد می‌شود، خطای مرتبط با آن را پاک کنید
  };

  const handleInputKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleCommentSubmit();
    }
  };

  return (
    <div >
      <h2>{`${name} Feed`}</h2>
      {error && <div className="error-message">{error}</div>} {/* نمایش پیغام خطا اگر وجود داشته باشد */}
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            {comment.text}
            <button
              className={replyButtonClicked ? 'reply-button-clicked' : 'reply-button'}
              onClick={() => handleReplyClick(comment.id)}
            >
              Reply
            </button>
            <button onClick={() => handleLikeClick(comment.id)}>Like ({comment.likes})</button>
            {comment.replies && comment.replies.length > 0 && (
              <ul>
                {comment.replies.map(reply => (
                  <li key={reply.id}>{reply.text}</li>
                ))}
              </ul>
            )}
         
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newComment}
          onChange={handleInputChange}
          onKeyPress={handleInputKeyPress}
        />
        <button onClick={handleCommentSubmit}>Send</button>
      </div>
    </div>
  );
};

export default Feed;
