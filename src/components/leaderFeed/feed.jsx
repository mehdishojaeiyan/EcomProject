import React, { useState } from "react";
import {
  CommentText,
  CommentMetadata,
  CommentGroup,
  CommentContent,
  CommentAvatar,
  CommentActions,
  CommentAction,
  CommentAuthor,
  FormTextArea,
  Button,
  Comment,
  Form,
  Header,
  FormInput,
} from "semantic-ui-react";

import avatar from "../../assets/image/commentavar.png";
import "./feed.css";
import { Icon } from "semantic-ui-react";


const LeadFeed = () => {
  const [comment, setComment] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [inputError, setInputError] = useState(null);
  const validateInput = () => {
    if (newComment.trim() === "") {
      setInputError("Please enter a valid input.");
      return false;
    }
    setInputError(null);
    return true;
  };
  const handleComment = () => {
    if (validateInput()) {
      const newCommentData = {
        avatar: avatar,
        name: "you",
        activity: newComment,
        date: new Date(),
      };
      setComment([...comment, newCommentData]);
      setNewComment("");
    }
  };
  return (
    <>
      {" "}
      <div className="feedBigBox p-4">
        <div className="leaderFeed p-4">
          <CommentGroup>
            <Header as="h3">Comments</Header>
            <div className="feedComment mt-2 p-2">
            <Comment>
              <CommentAvatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
              <CommentContent>
                <CommentAuthor as="a">Matt</CommentAuthor>
                <CommentMetadata>
                  <div>Yesterday at 5:42PM</div>
                </CommentMetadata>
                <CommentText>
                  <p>How artistic!</p>
                </CommentText>
                <CommentActions>
                  <CommentAction> <Icon name="reply" /> Reply</CommentAction>
                </CommentActions>
              </CommentContent>
            </Comment></div>
            <div className="feedComment mt-2 p-2">
            <Comment>
              <CommentAvatar src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
              <CommentContent>
                <CommentAuthor as="a">Elliot Fu</CommentAuthor>
                <CommentMetadata>
                  <div>Yesterday at 12:30AM</div>
                </CommentMetadata>
                <CommentText>
                  <p>
                    This has been very useful for my research. Thanks as well!
                  </p>
                </CommentText>
                <CommentActions>
                  <CommentAction > <Icon name="reply" />  Reply</CommentAction>
                </CommentActions>
              </CommentContent>
              <CommentGroup>
              <div className="feedComment mt-2 p-3">
                <Comment>
                  <CommentAvatar src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
                  <CommentContent>
                    <CommentAuthor as="a">Jenny Hess</CommentAuthor>
                    <CommentMetadata>
                      <div>Just now</div>
                    </CommentMetadata>
                    <CommentText><p>Elliot you are always so right :)</p></CommentText>
                    <CommentActions>
                      <CommentAction> <Icon name="reply" />  Reply</CommentAction>
                    </CommentActions>
                  </CommentContent>
                </Comment></div>
              </CommentGroup>
            </Comment></div>
            <div className="feedComment mt-2 p-2">
            <Comment>
              <CommentAvatar src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
              <CommentContent>
                <CommentAuthor as="a">Joe Henderson</CommentAuthor>
                <CommentMetadata>
                  <div>5 days ago</div>
                </CommentMetadata>
                <CommentText>
                  <p>Dude, this is awesome. Thanks so much</p>
                </CommentText>
                <CommentActions>
                  <CommentAction> <Icon name="reply" /> Reply</CommentAction>
                </CommentActions>
              </CommentContent>
            </Comment> </div>
            {comment.map((comment, index) => (<div className="feedComment mt-2 p-2">
              <Comment key={index}>
                <CommentAvatar src={comment.avatar} />
                <CommentContent>
                  <CommentAuthor as="a">{comment.name} </CommentAuthor>
                  <CommentMetadata>
                    <div>now</div>
                  </CommentMetadata>
                  <CommentText>
                    <p>{comment.activity}</p>
                  </CommentText>
                  <CommentActions >
                    <CommentAction active> <Icon name="reply" /> Reply</CommentAction>
                  </CommentActions>
                </CommentContent>
              </Comment></div>
            ))}

            <Form reply >
              {inputError && <div className="error-message">{inputError}</div>}
              <FormInput
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <Button
                onClick={handleComment}
                content="Post a Comment"
                labelPosition="left"
                icon="edit"
                primary
              />
            </Form>
          </CommentGroup>
        </div>
      </div>
    </>
  );
};

export default LeadFeed;
