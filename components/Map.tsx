import React, { useCallback, useRef } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import { defaultTheme } from "../styles/themeMap";

import { Headline } from "./Headline";
import { Icon } from "./Icon";
import { type } from "os";
import { MapInfo } from "../sections/MapInfo";

type LocationObj = {
  lat: number;
  long: number;
};

type MapProps = {
  center: LocationObj;
};

const defaulOptions = {
  zoomControl: true,
  mapTypeControl: true,
  scaleControl: true,
  streetViewControl: true,
  rotateControl: true,
  fullscreenControl: true,
  styles: defaultTheme,
};

const containerStyle = {
  display: "block",
  minWidth: "375px",
  height: "400px",
  borderRadius: "8px",
};

const defaultCenter = {
  lat: 48.22544,
  lng: 16.352566,
};

const Map = (props: MapProps) => {
  const { center } = { ...props };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDIsWcwptbQZ5jBvEHvuB1AjCeWaXOoWRo",
    libraries: ["places"],
  });

  const formatedCenter = {
    lat: center.lat,
    lng: center.long,
  };

  const mapRef = useRef(undefined);

  const onLoad = useCallback(function callback(map: any) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    mapRef.current = map;
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={defaultCenter || formatedCenter}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={defaulOptions}
    >
      <MapInfo />
    </GoogleMap>
  ) : (
    <>Loading...</>
  );
};

export default React.memo(Map);
