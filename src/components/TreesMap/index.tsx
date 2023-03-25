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

  const { data: style } = useGetStyles([]);

  useEffect(() => {
    if (!style?.result) return;
    const map = new maplibregl.Map({
      container: "map",
      center: latLong,
      style: style!.result,
      zoom: 10,
      attributionControl: false,
    });

    return () => {
      map.remove();
    };
  }, [style]);

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
