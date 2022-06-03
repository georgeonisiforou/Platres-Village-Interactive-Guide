import React from "react";
import { useState } from "react";
import GoogleMapReact from "google-map-react";
import "./map.css";
import MyPlace from "./MyPlace";
import { PLACES } from "./places";
import mapStyles from "./mapStyles";
import MyCurrentLocation from "./MyCurrentLocation";
import API_KEY from "./API_KEY";

export default function Map({ setchildClicked, showPlaces, setShowPlaces }) {
  const coordinates = { lat: 34.887792374726175, lng: 32.865635893328424 };

  const platresAreaBounds = {
    topLat: 34.91615,
    bottomLAt: 34.87156,
    leftLng: 34.89076,
    rightLng: 34.89055,
  };
  const [currentLocationLat, setCurrentLocationLat] = useState(null);
  const [currentLocationLong, setCurrentLocationLong] = useState(null);

  navigator.geolocation.getCurrentPosition(function (position) {
    setCurrentLocationLat(position.coords.latitude);
    setCurrentLocationLong(position.coords.longitude);
  });

  return (
    <div className="mapContainer">
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        bounds={platresAreaBounds}
        // restriction={{
        //   latLngBounds: platresAreaBounds,
        //   strictBounds: false,
        // }}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyles,
        }}
        defaultZoom={15}
        margin={[50, 50, 50, 50]}
        // options={{ mapId: "57fb04d4075b2f68" }}
        onChange={""}
        onChildClick={(child) => setchildClicked(child)}
      >
        {PLACES.map((place, i) =>
          showPlaces ? (
            <MyPlace
              className="mapContainer"
              lat={place.lat}
              lng={place.lng}
              text={place.title}
              photo={place.photo}
              video={place.video}
              key={i}
            />
          ) : null
        )}
        <MyCurrentLocation lat={currentLocationLat} lng={currentLocationLong} />
      </GoogleMapReact>
    </div>
  );
}
