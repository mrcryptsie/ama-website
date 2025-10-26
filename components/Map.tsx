import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const markers = [
    { markerOffset: -15, name: "Bénin", coordinates: [2.3158, 9.3077] },
    { markerOffset: -15, name: "Burkina Faso", coordinates: [-1.5296, 12.3714] },
    { markerOffset: -15, name: "Cameroun", coordinates: [11.5213, 3.8480] },
    { markerOffset: 25, name: "Côte d'Ivoire", coordinates: [-5.5471, 7.5399] },
    { markerOffset: 25, name: "Mali", coordinates: [-4.0000, 17.5707] },
    { markerOffset: 25, name: "Mauritanie", coordinates: [-10.9408, 20.2458] },
    { markerOffset: 25, name: "Sénégal", coordinates: [-14.4524, 14.4974] },
    { markerOffset: -15, name: "Togo", coordinates: [0.8248, 8.6195] }
  ];

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -10.0, 0],
        scale: 400
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.filter(d => d.properties.REGION_UN === "Africa").map(geo => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#EAEAEC"
              stroke="#D6D6DA"
            />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates as [number, number]}>
          <circle r={10} fill="#F53" stroke="#fff" strokeWidth={2} />
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default Map;
