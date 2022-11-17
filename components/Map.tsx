import React, { useCallback, useRef } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const defaultCenter = {
  lat: 50.447731,
  lng: 30.542721,
};

const Map = ({ center }: any) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyC_qUbox8E2eMwSAA6iyKDQWlHyJjvPsDo",
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
    />
  ) : (
    <>Loading...</>
  );
};

export { Map };
