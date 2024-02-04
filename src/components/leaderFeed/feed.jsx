// import React, { useState, useContext } from "react";
// import {
//   FeedUser,
//   FeedSummary,
//   FeedMeta,
//   FeedLike,
//   FeedLabel,
//   FeedExtra,
//   FeedEvent,
//   FeedDate,
//   FeedContent,
//   Feed,
//   Icon,
// } from "semantic-ui-react";
// import "semantic-ui-css/semantic.min.css";
// import "./feed.css";
// import LeaderContext from "../../context/leader";

// const LeadFeed = () => {
//   const leaderContext = useContext(LeaderContext);
//   const [feeds, setFeeds] = useState([]);
//   const [newFeed, setNewFeed] = useState("");

//   const handleAddNewFeed = () => {
//     // اطلاعات جدید را تنظیم کنید
//     const newFeedData = {
//       avatar: leaderContext.leader[12],
//       name: leaderContext.leader[12].name,
//       activity: newFeed,
//       date: "Just Now",
//       likes: 0,
//     };

//     // اضافه کردن اطلاعات فید جدید به لیست فیدها
//     setFeeds((prevFeeds) => [...prevFeeds, newFeedData]);
//     // پاک کردن متن ورودی برای آماده‌سازی برای ورودی جدید
//     setNewFeed(""); };
//     return (
//     <>
//       <div className="feedBigBox p-4">
//         <div className="leaderFeed p-4">
//           <Feed>
//             <FeedEvent>
//               <FeedLabel>
//                 <img src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
//               </FeedLabel>
//               <FeedContent>
//                 <FeedSummary>
//                   <FeedUser>Elliot Fu</FeedUser> added you as a friend
//                   <FeedDate>1 Hour Ago</FeedDate>
//                 </FeedSummary>
//                 <FeedMeta>
//                   <FeedLike>
//                     <Icon name="like" />4 Likes
//                   </FeedLike>
//                 </FeedMeta>
//               </FeedContent>
//             </FeedEvent>

//             <FeedEvent>
//               <FeedLabel>

//                 <img src={leaderContext.leader[2].avatar} />
//               </FeedLabel>
//               <FeedContent>
//                 <FeedSummary>
//                   <a>{leaderContext.leader[2].name}</a> added <a>2 new illustrations</a>
//                   <FeedDate>4 days ago</FeedDate>
//                 </FeedSummary>
//                 <FeedExtra images>
//                   <a>
//                     <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
//                   </a>
//                   <a>
//                     <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
//                   </a>
//                 </FeedExtra>
//                 <FeedMeta>
//                   <FeedLike>
//                     <Icon name="like" />1 Like
//                   </FeedLike>
//                 </FeedMeta>
//               </FeedContent>
//             </FeedEvent>

//             <FeedEvent>
//             <FeedLabel>

//                <img src={leaderContext.leader[8].avatar} />
//              </FeedLabel>
//               <FeedContent>
//                 <FeedSummary
//                   date="2 Days Ago"
//                   user="Jenny Hess"
//                   content="add you as a friend"
//                 />
//                 <FeedMeta>
//                   <FeedLike>
//                     <Icon name="like" />8 Likes
//                   </FeedLike>
//                 </FeedMeta>
//               </FeedContent>
//             </FeedEvent>

//             <FeedEvent>
//             <FeedLabel>

//                <img src={leaderContext.leader[7].avatar} />
//              </FeedLabel>
//               <FeedContent>
//                 <FeedSummary>
//                   <a>Joe Henderson</a> posted on his page
//                   <FeedDate>3 days ago</FeedDate>
//                 </FeedSummary>
//                 <FeedExtra text>
//                   Ours is a life of constant reruns. We're always circling back
//                   to where we'd we started, then starting all over again. Even
//                   if we don't run extra laps that day, we surely will come back
//                   for more of the same another day soon.
//                 </FeedExtra>
//                 <FeedMeta>
//                   <FeedLike>
//                     <Icon name="like" />5 Likes
//                   </FeedLike>
//                 </FeedMeta>
//               </FeedContent>
//             </FeedEvent>

//             <FeedEvent>
//             <FeedLabel>

//                <img src={leaderContext.leader[5].avatar} />
//              </FeedLabel>
//               <FeedContent>
//                 <FeedSummary>
//                   <a>Justen Kitsune</a> added <a>2 new photos</a> of you
//                   <FeedDate>4 days ago</FeedDate>
//                 </FeedSummary>
//                 <FeedExtra images>
//                   <a>
//                     <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
//                   </a>
//                   <a>
//                     <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
//                   </a>
//                 </FeedExtra>
//                 <FeedMeta>
//                   <FeedLike>
//                     <Icon name="like" />
//                     41 Likes
//                   </FeedLike>
//                 </FeedMeta>
//               </FeedContent>
//             </FeedEvent>
//             {feeds.map((feed, index) => (
//               <FeedEvent key={index}>
//                 <FeedLabel>
//                   <img src={leaderContext.leader[12].avatar} alt="User Avatar" />
//                 </FeedLabel>
//                 <FeedContent>
//                   <FeedSummary>
//                     <FeedUser>{feed.name}</FeedUser> {feed.activity}
//                     <FeedDate>{feed.date}</FeedDate>
//                   </FeedSummary>
//                   <FeedMeta>
//                     <FeedLike>
//                       <Icon name="like" />
//                       {feed.likes} Likes
//                     </FeedLike>
//                   </FeedMeta>
//                 </FeedContent>
//               </FeedEvent>
//             ))}

//             {/* متن ورودی برای افزودن فید جدید */}
//             <div>
//               <input
//                 type="text"
//                 placeholder="Enter new text"
//                 value={newFeed}
//                 onChange={(e) => setNewFeed(e.target.value)}
//               />
//               <button onClick={handleAddNewFeed}>Add New Feed</button>
//             </div>
//           </Feed>
//          </div>

//       </div>
//     </>
//   );
// };

// export default LeadFeed;

import React, { useState, useContext } from "react";
import {
  FeedUser,
  FeedSummary,
  FeedMeta,
  FeedLike,
  FeedLabel,
  FeedExtra,
  FeedEvent,
  FeedDate,
  FeedContent,
  Feed,
  Icon,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./feed.css";
import LeaderContext from "../../context/leader";

const LeadFeed = ({name , avatar}) => {
  const leaderContext = useContext(LeaderContext);
  const [feeds, setFeeds] = useState([
  
  ]);
  const handleToggleLike = (feedId) => {
    setFeeds((prevFeeds) =>
      prevFeeds.map((feed) =>
        feed.id === feedId
          ? { ...feed, likes: feed.likes + (feed.isLiked ? -1 : 1), isLiked: !feed.isLiked }
          : feed
      )
    );
  };
  const [inputError, setInputError] = useState(null);
  const validateInput = () => {
    if (newFeed.trim() === "") {
      setInputError("Please enter a valid input.");
      return false;
    }
    setInputError(null);
    return true;
  };
  const [newFeed, setNewFeed] = useState("");
  const handleAddNewFeed = () => {
    if (validateInput()) {
      const newFeedData = {
        avatar: leaderContext.leader[12].avatar,
        name: leaderContext.leader[12].name,
        activity: newFeed,
        date: "Just Now",
        likes: 0,
      };
  
      // اضافه کردن اطلاعات فید جدید به لیست فیدها
      setFeeds((prevFeeds) => [...prevFeeds, newFeedData]);
      
      // پاک کردن متن ورودی برای آماده‌سازی برای ورودی جدید
      setNewFeed("");
    }
  };
  return (
    <>
      <div className="feedBigBox p-4">
        <div className="leaderFeed p-4">
          <h3>{name}'s Feed</h3>
          <Feed>
            <FeedEvent>
              <FeedLabel>
                <img src={avatar}/>
              </FeedLabel>
              <FeedContent>
                <FeedSummary>
                  <FeedUser>{name}</FeedUser> added you as a friend
                  <FeedDate>1 Hour Ago</FeedDate>
                </FeedSummary>
                <FeedMeta>
                  <FeedLike>
                    <Icon name="like" />4 Likes
                  </FeedLike>
                </FeedMeta>
              </FeedContent>
            </FeedEvent>

            <FeedEvent>
              <FeedLabel>
                <img src={leaderContext.leader[2].avatar} />
              </FeedLabel>
              <FeedContent>
                <FeedSummary>
                  <a>{leaderContext.leader[2].name}</a> added{" "}
                  <a>2 new illustrations</a>
                  <FeedDate>4 days ago</FeedDate>
                </FeedSummary>
                <FeedExtra images>
                  <a>
                    <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
                  </a>
                  <a>
                    <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
                  </a>
                </FeedExtra>
                <FeedMeta>
                  <FeedLike>
                    <Icon name="like" />1 Like
                  </FeedLike>
                </FeedMeta>
              </FeedContent>
            </FeedEvent>

            <FeedEvent>
              <FeedLabel>
                <img src={leaderContext.leader[8].avatar} />
              </FeedLabel>
              <FeedContent>
                <FeedSummary
                  date="2 Days Ago"
                  user="Jenny Hess"
                  content="add you as a friend"
                />
                <FeedMeta>
                  <FeedLike>
                    <Icon name="like" />8 Likes
                  </FeedLike>
                </FeedMeta>
              </FeedContent>
            </FeedEvent>

            <FeedEvent>
              <FeedLabel>
                <img src={leaderContext.leader[7].avatar} />
              </FeedLabel>
              <FeedContent>
                <FeedSummary>
                  <a>Joe Henderson</a> posted on his page
                  <FeedDate>3 days ago</FeedDate>
                </FeedSummary>
                <FeedExtra text>
                  Ours is a life of constant reruns. We're always circling back
                  to where we'd we started, then starting all over again. Even
                  if we don't run extra laps that day, we surely will come back
                  for more of the same another day soon.
                </FeedExtra>
                <FeedMeta>
                  <FeedLike>
                    <Icon name="like" />5 Likes
                  </FeedLike>
                </FeedMeta>
              </FeedContent>
            </FeedEvent>

            <FeedEvent>
              <FeedLabel>
                <img src={leaderContext.leader[5].avatar} />
              </FeedLabel>
              <FeedContent>
                <FeedSummary>
                  <a>Justen Kitsune</a> added <a>2 new photos</a> of you
                  <FeedDate>4 days ago</FeedDate>
                </FeedSummary>
                <FeedExtra images>
                  <a>
                    <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
                  </a>
                  <a>
                    <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
                  </a>
                </FeedExtra>
                <FeedMeta>
                  <FeedLike>
                    <Icon name="like" />
                    41 Likes
                  </FeedLike>
                </FeedMeta>
              </FeedContent>
            </FeedEvent>
            {feeds.map((feed, index) => (
              <FeedEvent key={index}>
                <FeedLabel>
                <img
                    src={feed.avatar}
                    alt="User Avatar"
                  />
                </FeedLabel>
                <FeedContent>
                  <FeedSummary>
                   <div> <FeedUser>{feed.name}</FeedUser> </div>
                   {feed.activity}
                    <FeedDate>{feed.date}</FeedDate>
                  </FeedSummary>
                  <FeedMeta>
                  <FeedLike onClick={() => handleToggleLike(feed.id)}>
          <Icon name={feed.isLiked ? "like up red" : "like outline up"} />
          {feed.likes} Likes
        </FeedLike>
                    

                  </FeedMeta>
                </FeedContent>
              </FeedEvent>
            ))}

            {/* متن ورودی برای افزودن فید جدید */}
            <div>
            {inputError && <div className="error-message">{inputError}</div>}
              <input
                type="text"
                placeholder="Enter new text"
                value={newFeed}
                onChange={(e) => setNewFeed(e.target.value)}
              />
             

              <button  onClick={handleAddNewFeed}>Send</button>
            </div>
          </Feed>
        </div>
      </div>
    </>
  );
};

export default LeadFeed;
