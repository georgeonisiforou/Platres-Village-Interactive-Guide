import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Map from "./components/Map/Map";
import Header from "./components/Header/Header";
import DetailsWindow from "./components/DetailsWindow/DetailsWindow";
import { PLACES } from "./components/Map/places";
import WelcomeContainer from "./components/WelcomePicture/WelcomeContainer";
import Footer from "./components/Footer/Footer";
import DecorContainer from "./components/DecorContainer/DecorContainer";

function App() {
  const [childClicked, setchildClicked] = useState(null);
  const [show, setShow] = useState(true);
  const [showPlaces, setShowPlaces] = useState(true);
  let title = PLACES[Number(childClicked)].title;
  let type = PLACES[Number(childClicked)].type;
  let imageURL = PLACES[Number(childClicked)].photo[0];
  let description = PLACES[Number(childClicked)].description;

  //the function will take the user to the map and open the details for the specific pin based on the id
  //from the URL queries. Each poi will have a qr code which when scanned will generate a unique id on the URL.

  // when the user scans a qr code at a poi then he will be directed directly at the map on the website and
  // the relevant child will be clicked. The qr code will direct to a URL path that has a unique id as a parameter
  //and that id will correspond to a point of interest.
  const windowURL = window.location.search;
  const urlParams = new URLSearchParams(windowURL);
  let attri = urlParams.get("id");

  useEffect(() => {
    switch (attri) {
      case "0":
        scrollto();
        break;
      case "1":
        scrollto();
        break;
      case "2":
        scrollto();
        break;
      case "3":
        scrollto();
        break;
      case "4":
        scrollto();
        break;
      case "5":
        scrollto();
        break;
      case "6":
        scrollto();
        break;
      case "7":
        scrollto();
        break;
      case "8":
        scrollto();
        break;
      case "9":
        scrollto();
        break;
      case "10":
        scrollto();
        break;
      case "11":
        scrollto();
        break;
      default:
        console.log(attri);
    }
  });

  function scrollto() {
    window.scrollTo({ top: 550, left: 0, behavior: "smooth" });
    setchildClicked(Number(attri));
  }

  return (
    //header
    //Map container div -> will have places components
    //Info of a place container div, which will appear on the right half of screen
    //footer
    <div className="App">
      <div className="welcomeBg">
        <div className="welcomeFade"></div>

        <Header
          setShow={setShow}
          show={show}
          childClicked={childClicked}
          setShowPlaces={setShowPlaces}
          showPlaces={showPlaces}
        />

        <WelcomeContainer />
      </div>
      {/* <span>{urlParams.get("id")}</span> */}
      <div className="main">
        <Map setchildClicked={setchildClicked} showPlaces={showPlaces} />
        {show ? (
          <DetailsWindow
            image={imageURL}
            description={description}
            title={title}
            childClicked={childClicked}
            type={type}
          />
        ) : null}
      </div>
      <DecorContainer />
      <Footer />
    </div>
  );
}

export default App;
