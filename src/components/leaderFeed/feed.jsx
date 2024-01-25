// CommentComponent.js

import React, { useState } from 'react';

const Feed = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [replyTo, setReplyTo] = useState(null);

  const handleCommentSubmit = () => {
    if (replyTo !== null) {
      // اگر در حال Reply کردن هستیم، نظر جدید را به زیرنظر انتخاب شده اضافه کنید
      const newComments = comments.map(comment =>
        comment.id === replyTo
          ? { ...comment, replies: [...(comment.replies || []), { id: comment.replies.length + 1, text: newComment, likes: 0 }] }
          : comment
      );
      setComments(newComments);
      setReplyTo(null);
    } else {
      // در غیر این صورت، نظر جدید را به نظرات اصلی اضافه کنید
      setComments([...comments, { id: comments.length + 1, text: newComment, replies: [], likes: 0 }]);
    }
    setNewComment('');
  };

  const handleReplyClick = (commentId) => {
    // تنظیم کردن Reply به نظر موردنظر
    setReplyTo(commentId);
  };

  const handleLikeClick = (commentId) => {
    const newComments = comments.map(comment =>
      comment.id === commentId
        ? { ...comment, likes: comment.likes + 1 }
        : comment
    );
    setComments(newComments);
  };

  return (
    <div>
      <h2>نظرات</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            {comment.text}
            <button onClick={() => handleReplyClick(comment.id)}>Reply</button>
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
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={handleCommentSubmit}>ارسال نظر</button>
      </div>
    </div>
  );
};

export default Feed ;
