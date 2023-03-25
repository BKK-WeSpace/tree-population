import maplibregl from "maplibre-gl";
import React, { useEffect, useRef, useState } from "react";
import useGetTrees from "../../data/hooks/useGetTrees";
import useGetStyles from "../../data/hooks/useGetStyles";
import OverlayComponent from "./OverlayComponent";
import { Box } from "@mui/system";
import { useTheme } from "@mui/material";

interface TreesMapProps {}

const TreesMap: React.FC<TreesMapProps> = () => {
  const [latLong, setLatLong] = useState<[number, number]>([
    100.77916890420383, 13.723999003278182,
  ]);

  const { data: style } = useGetStyles([]);
  const { data: treesData } = useGetTrees({});
  const { palette } = useTheme();
  const hoveredStateId = useRef<undefined | number | string>(undefined);

  const mapTreesId = "base-trees";
  const mapSourceId = "base-source";

  useEffect(() => {
    if (!style?.result || !treesData?.result) return;

    const map = new maplibregl.Map({
      container: "map",
      center: latLong,
      style: style!.result,
      zoom: 13,
      attributionControl: false,
    });

    map.on("load", () => {
      map.addSource(mapSourceId, {
        type: "geojson",
        data: treesData.result!,
        cluster: true,
        clusterMaxZoom: 14,
        clusterRadius: 40,
        generateId: true,
      });

      map.addLayer({
        id: mapTreesId,
        type: "circle",
        // @ts-ignore
        source: mapSourceId,
        paint: {
          "circle-radius": 15,
          "circle-color": palette.primary.main,
          "circle-opacity": [
            "case",
            ["boolean", ["feature-state", "hover"], false],
            1,
            0.5,
          ],
        },
      });
    });

    map.on("mousemove", mapTreesId, (e) => {
      if (e.features?.length) {
        if (hoveredStateId.current) {
          map.setFeatureState(
            { source: mapSourceId, id: hoveredStateId.current },
            { hover: false }
          );
        }
        hoveredStateId.current = e.features[0]!.id!;
        map.setFeatureState(
          { source: mapSourceId, id: hoveredStateId.current },
          { hover: true }
        );
      }
    });

    map.on("mouseleave", mapTreesId, function () {
      if (hoveredStateId) {
        map.setFeatureState(
          { source: mapSourceId, id: hoveredStateId.current },
          { hover: false }
        );
        hoveredStateId.current = undefined;
      }
    });

    return () => {
      // TODO @khongchai add map data source here.
      return map.remove();
    };
  }, [style, treesData]);

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
