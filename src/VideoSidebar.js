import React, { useState } from "react";
import "./VideoSidebar.css";
import { Favorite } from "@mui/icons-material";
import { FavoriteBorder } from "@mui/icons-material";
import { Message } from "@mui/icons-material";
import { Share } from "@mui/icons-material";

function VideoSidebar({ likes, shares, messages }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <Favorite onClick={(e) => setLiked(false)} />
        ) : (
          <FavoriteBorder onClick={(e) => setLiked(true)} />
        )}

        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar__button">
        <Message />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__button">
        <Share />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
