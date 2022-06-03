import React from "react";
import "./welcomeContainer.css";

export default function WelcomeContainer() {
  return (
    <div className="welcomeContainer">
      <h1 className="mainTitle">Platres Village</h1>
      <h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        cupiditate, similique, at cum perferendis laboriosam quisquam
        reprehenderit fugiat nostrum mollitia doloremque voluptates consectetur
        quas eius enim consequuntur maxime aliquid eligendi excepturi veniam
        deserunt eveniet ut voluptatem! Fugiat sequi cum ipsam.
      </h4>
      <button
        className="welcomeBtn"
        onClick={() =>
          window.scrollTo({ top: 550, left: 0, behavior: "smooth" })
        }
      >
        Start Exploring
      </button>
    </div>
  );
}
