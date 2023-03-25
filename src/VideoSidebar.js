import React from "react";
import "./VideoSidebar.css";
import { Favorite } from "@mui/icons-material";
import { FavoriteBorder } from "@mui/icons-material";
import { Message } from "@mui/icons-material";
import { Share } from "@mui/icons-material";

function VideoSidebar() {
  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        <Favorite />
        <p>300</p>
      </div>
      <div className="videoSidebar__button">
        <Message />
        <p>200</p>
      </div>
      <div className="videoSidebar__button">
        <Share />
        <p>30</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
