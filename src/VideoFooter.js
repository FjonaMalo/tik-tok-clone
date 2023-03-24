import React from "react";
import "./VideoFooter.css";
import Ticker from "react-ticker";
import { MusicNote } from "@mui/icons-material";

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@fjonamalo</h3>
        <p>This is a description</p>
        <MusicNote />
        <Ticker mode="smooth">
          {({ index }) => (
            <>
              <h1>Hello my friend</h1>
            </>
          )}
        </Ticker>
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
