import React from "react";
import "./detailswindow.css";
import { PLACES } from "../Map/places";
import { useState } from "react";

export default function DetailsWindow({
  title,
  image,
  description,
  childClicked,
  type,
}) {
  const [current, setCurrent] = useState(0);

  const [currentChild, setCurrentChild] = useState(childClicked);

  if (childClicked !== currentChild) {
    setCurrentChild(childClicked);
    setCurrent(0);
  }

  const length = PLACES[Number(childClicked)].photo.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (
    !Array.isArray(PLACES[Number(childClicked)].photo) ||
    PLACES[Number(childClicked)].photo <= 0
  ) {
    return null;
  }
  return (
    childClicked && (
      <div className="detailsContainer">
        <div className="detailsHeader">
          <h3>{title != null ? title : "your current location"}</h3>
          <p className="poiType">{type}</p>
        </div>

        <div className="imageContainer">
          <button className="prevSlide" onClick={prevSlide}>
            <i class="fas fa-angle-left"></i>
          </button>

          {PLACES[Number(childClicked)].photo.map((slide, index) => {
            return (
              <div
                className={
                  index === current ? "imageContainer active" : "imageContainer"
                }
                key={index}
              >
                {index === current && <img src={slide} alt="Something" />}
              </div>
            );
          })}

          <button className="nextSlide" onClick={nextSlide}>
            <i class="fas fa-angle-right"></i>
          </button>
        </div>

        <p>{description}</p>
      </div>
    )
  );
}
