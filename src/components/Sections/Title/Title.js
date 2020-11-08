import React from "react";

import './title.css'

const video = {
  'Falcon 1': 'moon',
  'Falcon 9': 'earth',
  'Falcon Heavy': 'mars',
  other: 'space',
}
const Title = ({title, name}) => {
  return(
    <section className="main">
      <h1 className="title">
        {name || title}
      </h1>

      {title && <div className="video-container">
        <video
          className="video"
          autoPlay loop muted
          src={`./video/${video.hasOwnProperty(title)
            ? video[title]
            : video.other}.mp4`}
        />
      </div>}
    </section>
  )
};

export default Title;