import React, { useState, useRef, useEffect } from "react";
import {
  CommentText,
  CommentMetadata,
  CommentGroup,
  CommentContent,
  CommentAvatar,
  CommentActions,
  CommentAction,
  CommentAuthor,
  Button,
  Comment,
  Form,
  Label,
  Icon,
  AccordionTitle,
  AccordionContent,
  Accordion,
} from "semantic-ui-react";

import avatar from "../../assets/image/commentavar.png";
import "./feed.css";

const LeadFeed = () => {
  const [comment, setComment] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [inputError, setInputError] = useState(null);
  const [replyText, setReplyText] = useState("");
  const [replyingTo, setReplyingTo] = useState(null);
  const [repling, setRepling] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [likes, setLikes] = useState({});
  const [dislikes, setDislikes] = useState({});

  const validateInput = () => {
    if (newComment.trim() === "") {
      setInputError("Please enter a valid input.");
      return false;
    }
    setInputError(null);
    return true;
  };

  const handleAction = () => {
    if (replyingTo !== null) {
      handleReply();
    } else {
      handleComment();
    }
  };

  const handleComment = () => {
    if (validateInput()) {
      const newCommentData = {
        avatar: avatar,
        name: "you",
        activity: newComment,
        date: new Date(),
        likes: 0,
        dislikes: 0,
      };
      setComment([...comment, newCommentData]);
      setNewComment("");
      setRepling(false);
    }
  };

  const handleReply = () => {
    if (validateInput() && replyingTo !== null) {
      const newReplyData = {
        avatar: avatar,
        name: "you",
        activity: newComment,
        date: new Date(),
        likes: 0,
        dislikes: 0,
      };
      const updatedComments = comment.map((item, index) => {
        if (index === replyingTo) {
          return {
            ...item,
            replies: item.replies
              ? [...item.replies, newReplyData]
              : [newReplyData],
          };
        }
        return item;
      });
      setComment(updatedComments);
      setNewComment("");
      setReplyText("");
      setReplyingTo(null);
      setRepling(false);
    }
  };

  const handleReplyClick = (index) => {
    setReplyingTo(index);
    setReplyText(`Replying to: ${comment[index].name}`);
    setRepling(true);
  };

  const handleLike = (commentIndex, replyIndex) => {
    if (replyIndex !== null) {
      const updatedComments = [...comment];
      updatedComments[commentIndex].replies[replyIndex].likes += likes[
        `${commentIndex}-${replyIndex}`
      ]
        ? -1
        : 1;
      setLikes({
        ...likes,
        [`${commentIndex}-${replyIndex}`]:
          !likes[`${commentIndex}-${replyIndex}`],
      });
      setComment(updatedComments);
    } else {
      const updatedComments = [...comment];
      updatedComments[commentIndex].likes += likes[commentIndex] ? -1 : 1;
      setLikes({ ...likes, [commentIndex]: !likes[commentIndex] });
      setComment(updatedComments);
    }
  };

  const handleDislike = (commentIndex, replyIndex) => {
    if (replyIndex !== null) {
      const updatedComments = [...comment];
      updatedComments[commentIndex].replies[replyIndex].dislikes += dislikes[
        `${commentIndex}-${replyIndex}`
      ]
        ? -1
        : 1;
      setDislikes({
        ...dislikes,
        [`${commentIndex}-${replyIndex}`]:
          !dislikes[`${commentIndex}-${replyIndex}`],
      });
      setComment(updatedComments);
    } else {
      const updatedComments = [...comment];
      updatedComments[commentIndex].dislikes += dislikes[commentIndex] ? -1 : 1;
      setDislikes({ ...dislikes, [commentIndex]: !dislikes[commentIndex] });
      setComment(updatedComments);
    }
  };

  const handleShowReplies = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  // for focus on the input when the page is loaded
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <div className="feedBigBox p-4">
        <div className="leaderFeed p-4">
          <CommentGroup>
            {comment.map((comment, commentIndex) => (
              <div className="feedComment mt-2 p-2" key={commentIndex}>
                <Comment>
                  <CommentAvatar src={comment.avatar} />
                  <CommentContent>
                    <CommentAuthor as="a">{comment.name}</CommentAuthor>
                    <CommentMetadata>
                      <div>now</div>
                    </CommentMetadata>
                    <CommentText>
                      <p>{comment.activity}</p>
                    </CommentText>
                    <CommentActions>
                      <CommentAction
                        onClick={() => handleReplyClick(commentIndex)}
                      >
                        <Icon name="reply" /> Reply
                      </CommentAction>
                      <CommentAction
                        onClick={() => handleLike(commentIndex, null)}
                      >
                        <Icon name="thumbs up" /> {comment.likes}
                      </CommentAction>
                      <CommentAction
                        onClick={() => handleDislike(commentIndex, null)}
                      >
                        <Icon name="thumbs down" /> {comment.dislikes}
                      </CommentAction>
                    </CommentActions>

                    <Accordion>
                      <AccordionTitle
                        className="replyBox"
                        active={activeIndex === commentIndex}
                        index={commentIndex}
                        onClick={() => handleShowReplies(commentIndex)}
                      >
                        <Icon name="dropdown" />
                        Show Replies
                      </AccordionTitle>
                      <AccordionContent active={activeIndex === commentIndex}>
                        {comment.replies &&
                          comment.replies.map((reply, replyIndex) => (
                            <Comment.Group key={replyIndex}>
                              <Comment>
                                <CommentAvatar src={reply.avatar} />
                                <CommentContent>
                                  <CommentAuthor as="a">
                                    {reply.name}
                                  </CommentAuthor>
                                  <CommentMetadata>
                                    <div>now</div>
                                  </CommentMetadata>
                                  <CommentText>
                                    <p>{reply.activity}</p>
                                  </CommentText>
                                  <CommentActions>
                                    <CommentAction
                                      onClick={() =>
                                        handleLike(commentIndex, replyIndex)
                                      }
                                    >
                                      <Icon name="thumbs up" /> {reply.likes}
                                    </CommentAction>
                                    <CommentAction
                                      onClick={() =>
                                        handleDislike(commentIndex, replyIndex)
                                      }
                                    >
                                      <Icon name="thumbs down" />{" "}
                                      {reply.dislikes}
                                    </CommentAction>
                                  </CommentActions>
                                </CommentContent>
                              </Comment>
                            </Comment.Group>
                          ))}
                      </AccordionContent>{" "}
                    </Accordion>
                  </CommentContent>
                </Comment>
              </div>
            ))}
            <Form reply>
              {repling && (
                <Label>
                  <Icon name="reply" /> {replyText}
                </Label>
              )}

              {inputError && (
                <Label basic color="red" pointing="below">
                  Please enter a value
                </Label>
              )}
              <input
                ref={inputRef}
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <Button
                onClick={handleAction}
                content="Send"
                labelPosition="left"
                icon="edit"
                class="ui button"
              />
            </Form>
          </CommentGroup>
        </div>
      </div>
    </>
  );
};

export default LeadFeed;
