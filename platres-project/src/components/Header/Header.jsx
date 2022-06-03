import React from "react";
import "./header.css";
import { useState, useEffect } from "react";

export default function Header({
  setShow,
  show,
  childClicked,
  setShowPlaces,
  showPlaces,
}) {
  //weather API

  const [temp, setTemp] = useState(null);
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    const apiKey = "fe6e59124bf2e4e302ee24e7c5f432ab";
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        "Platres" +
        "&units=metric&appid=" +
        apiKey
    )
      .then((response) => response.json())
      .then((data) => {
        setTemp(data.main.temp);
        setIcon(data.weather[0].icon);
      });
  }, []);

  const [navShow, handleNavShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleNavShow(true);
      } else handleNavShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`headerContainer ${navShow && "navBlack"}`}>
      <h1 className="logo">Platres Guide</h1>
      <div className="weatherInfo">
        {Math.floor(temp) + " °C"}
        <img
          src={"http://openweathermap.org/img/wn/" + icon + ".png"}
          alt="weather icon"
        />
      </div>
      <div className="btnContainer">
        {childClicked ? (
          <button onClick={() => setShow(!show)}>
            {childClicked ? (!show ? "Show Details" : "Hide Details") : null}
          </button>
        ) : null}
        <button onClick={() => setShowPlaces(!showPlaces)}>
          {showPlaces ? "Hide Pins" : "Show Pins"}
        </button>
      </div>
    </div>
  );
}
