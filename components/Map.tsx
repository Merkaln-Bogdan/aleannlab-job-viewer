import React, { useCallback, useRef } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import { defaultTheme } from "../styles/themeMap";

import { MapInfo } from "../sections/MapInfo";
import { ArticleType, LocationType } from "../types/common.types";

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

type MapProps = {
  center: LocationType;
  info: ArticleType;
};

const Map = (props: MapProps) => {
  const { center, info } = { ...props };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDIsWcwptbQZ5jBvEHvuB1AjCeWaXOoWRo", /// should be proccess.env.NEXT_PUBLIC_GOOGLE_API_KEY
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
      center={formatedCenter || defaultCenter}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={defaulOptions}
    >
      <MapInfo info={info} />
    </GoogleMap>
  ) : (
    <>Loading...</>
  );
};

export default React.memo(Map);
