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
import "./community.css";
import LeaderContext from "../../context/leader";

const Community = ({ name, avatar }) => {
  const leaderContext = useContext(LeaderContext);
  const [feeds, setFeeds] = useState([]);
  const handleToggleLike = (feedId) => {
    setFeeds((prevFeeds) =>
      prevFeeds.map((feed) =>
        feed.id === feedId
          ? {
              ...feed,
              likes: feed.likes + (feed.isLiked ? -1 : 1),
              isLiked: !feed.isLiked,
            }
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

  const [like, setLike] = useState([
    { likeId: 0, likeCount: 32, likePsition: false },
    { likeId: 1, likeCount: 12, likePsition: false },
    { likeId: 2, likeCount: 43, likePsition: false },
    { likeId: 3, likeCount: 65, likePsition: false },
    { likeId: 4, likeCount: 2, likePsition: false },
  ]);
  const handlelike = (likeid) => {
    const upDateLike = [...like];

    if (upDateLike[likeid].likePsition) {
      upDateLike[likeid].likeCount -= 1;
    } else {
      upDateLike[likeid].likeCount += 1;
    }
    upDateLike[likeid].likePsition = !upDateLike[likeid].likePsition;
    setLike(upDateLike);
  };
  return (
    <>
      <div className="communityBigBox p-4">
        <div className="community p-4">
          <h3>Community</h3>
          <Feed className="feedBox">
            <FeedEvent>
              <FeedLabel>
                <img src={avatar} />
              </FeedLabel>
              <FeedContent>
                <FeedSummary>
                  <FeedUser>{name}</FeedUser> added you as a friend
                  <FeedDate>1 Hour Ago</FeedDate>
                </FeedSummary>
                <FeedMeta>
                  <FeedLike onClick={() => handlelike(0)}>
                    <Icon
                      name={
                        like[0].likePsition ? "like up red" : "like outline up"
                      }
                    />
                    {like[0].likeCount} Likes
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
                  <FeedLike onClick={() => handlelike(1)}>
                    <Icon
                      name={
                        like[1].likePsition ? "like up red" : "like outline up"
                      }
                    />
                    {like[1].likeCount} Likes
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
                  <FeedLike onClick={() => handlelike(2)}>
                    <Icon
                      name={
                        like[2].likePsition ? "like up red" : "like outline up"
                      }
                    />
                    {like[2].likeCount} Likes
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
                  <FeedLike onClick={() => handlelike(3)}>
                    <Icon
                      name={
                        like[3].likePsition ? "like up red" : "like outline up"
                      }
                    />
                    {like[3].likeCount} Likes
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
                  <FeedLike onClick={() => handlelike(4)}>
                    <Icon
                      name={
                        like[4].likePsition ? "like up red" : "like outline up"
                      }
                    />
                    {like[4].likeCount} Likes
                  </FeedLike>
                </FeedMeta>
              </FeedContent>
            </FeedEvent>
            {feeds.map((feed, index) => (
              <FeedEvent key={index}>
                <FeedLabel>
                  <img src={feed.avatar} alt="User Avatar" />
                </FeedLabel>
                <FeedContent>
                  <FeedSummary>
                    <div>
                      {" "}
                      <FeedUser>{feed.name}</FeedUser>{" "}
                    </div>
                    {feed.activity}
                    <FeedDate>{feed.date}</FeedDate>
                  </FeedSummary>
                  <FeedMeta>
                    <FeedLike onClick={() => handleToggleLike(feed.id)}>
                      <Icon
                        name={feed.isLiked ? "like up red" : "like outline up"}
                      />
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

              <button onClick={handleAddNewFeed}>Send</button>
            </div>
          </Feed>
        </div>
      </div>
    </>
  );
};

export default Community;
