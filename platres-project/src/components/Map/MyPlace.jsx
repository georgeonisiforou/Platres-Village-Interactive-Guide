import React from "react";
import "./myplace.css";

export default function MyPlace({ lat, lng, text, photo, video }) {
  return (
    <div>
      <i className="fas fa-map-marker-alt mapPin">
        <div className="placeContainer">
          <video className="videoContainer" autoPlay muted loop>
            <source src={video} type="video/mp4" />
            Your browser does not support the video.
          </video>
          <h3>{text}</h3>
        </div>
      </i>
    </div>
  );
}
