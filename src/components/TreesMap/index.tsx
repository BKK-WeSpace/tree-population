import React, { useEffect, useState } from "react";
import maplibregl, { MapMouseEvent } from "maplibre-gl";
import useGetStyles from "../../data/hooks/useGetStyles";
import useGetTrees from "../../data/hooks/useGetTrees";

interface TreesMapProps {}

const TreesMap: React.FC<TreesMapProps> = () => {
  const [latLong, setLatLong] = useState<[number, number]>([
    100.537682, 13.80949,
  ]);

  const { data, isLoading } = useGetTrees({});

  useEffect(() => {
    const map = new maplibregl.Map({
      container: "map",
      center: latLong,
      // TODO replace with the real s
      style:
        "https://api.maptiler.com/maps/streets/style.json?key=e54KOp4sPeK6ZYaEgNWX",

      zoom: 10,
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      id="map"
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        width: "100%",
      }}
    />
  );
};

export default TreesMap;
