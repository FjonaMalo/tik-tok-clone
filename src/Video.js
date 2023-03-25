import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import video1 from "./videos/video.mp4";

function Video() {
  const [playing, setPlay] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        controls
        // autoPlay
        src={video1}
      ></video>
      <VideoFooter />
      <VideoSidebar />
    </div>
  );
}

export default Video;
