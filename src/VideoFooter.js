import React from "react";
import "./VideoFooter.css";
import { MusicNote } from "@mui/icons-material";

function VideoFooter(channel, description, song) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@fjonamalo</h3>
        <p>Checkout this video</p>
        <div className="videofooter__ticker">
          <MusicNote className="videoFooter__icon" />
          {/* <Ticker mode="smooth">
            {() => (
              <>
                <p>Hello my friend</p>
              </>
            )}
            
          </Ticker> */}
          <marquee>The Chainsmokers - Closer</marquee>
        </div>
      </div>
      <img
        className="videoFooter__record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt="image"
      />
    </div>
  );
}

export default VideoFooter;
