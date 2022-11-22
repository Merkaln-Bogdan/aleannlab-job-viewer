import React, { useCallback, useRef } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import { defaultTheme } from "../styles/themeMap";

import { Headline } from "./Headline";
import { Icon } from "./Icon";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

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

const Map = ({ center }: any) => {
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
      <div className="absolute flex flex-col justify-center px-6 py-7 w-full h-2/4 bg-dark text-white z-50 hover:hidden">
        <div className="absolute w-40 h-40 bg-bg_dark rounded-full z-40"> </div>
        <Headline as="p" className="font-bold">
          Department name. University Hospital Giessen.
        </Headline>
        <Headline as="p" className="flex">
          <Icon name="BsGeoAltFill" label="AKH Wien, 1090 Wien, Währinger" />
        </Headline>
        Gürtel 18-20 +43 (01) 40400-12090, post_akh_diz@akhwien.at
      </div>
    </GoogleMap>
  ) : (
    <>Loading...</>
  );
};

export default React.memo(Map);
