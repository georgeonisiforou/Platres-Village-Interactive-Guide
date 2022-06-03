import React from "react";
import "./myplace.css";

export default function MyCurrentLocation({ lat, lng }) {
  return (
    <div>
      <i className="fas fa-map-marker-alt currentLocation"></i>
    </div>
  );
}
