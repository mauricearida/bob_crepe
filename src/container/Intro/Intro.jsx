import { useRef } from "react";

import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const vidRef = useRef();

  return (
    <div className="app__video">
      <video ref={vidRef} src={meal} type="video/mp4" loop autoPlay muted />
      <div className="app__video-overlay flex__center"></div>
    </div>
  );
};

export default Intro;
