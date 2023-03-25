import maplibregl from "maplibre-gl";
import React, { useEffect, useState } from "react";
import useGetTrees from "../../data/hooks/useGetTrees";
import useGetStyles from "../../data/hooks/useGetStyles";
import OverlayComponent from "./OverlayComponent";
import { Box } from "@mui/system";

interface TreesMapProps {}

// TODO can someone please remove the bottom overflowing section of the map? :D
const TreesMap: React.FC<TreesMapProps> = () => {
  const [latLong, setLatLong] = useState<[number, number]>([
    100.537682, 13.80949,
  ]);

  useEffect(() => {
    const map = new maplibregl.Map({
      container: "map",
      center: latLong,
      // TODO put this style in VallarisService
      style:
        "https://v2k-dev.vallarismaps.com/core/api/styles/1.0-beta/styles/64149d10dc84d7b8cd687c5e?api_key=" +
        // @ts-ignore
        import.meta.env.VITE_VALLARIS_API_KEY,
      zoom: 10,
      attributionControl: false,
    });

    return () => {
      map.remove();
    };
  }, []);

  // TODO change all hard-coded values to use MUI themes
  return (
    <Box
      sx={{
        "& > div": {
          position: "fixed",
          top: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
        },
      }}
    >
      <div id="map" />
      <Box
        sx={{
          pointerEvents: "none",
        }}
      >
        <OverlayComponent />
      </Box>
    </Box>
  );
};

export default TreesMap;
