import maplibregl, { LngLatLike } from "maplibre-gl";
import React, { useEffect, useRef, useState } from "react";
import useGetTrees from "../../data/hooks/useGetTrees";
import useGetStyles from "../../data/hooks/useGetStyles";
import OverlayComponent from "./OverlayComponent";
import { Box } from "@mui/system";
import { useTheme } from "@mui/material";
import Tree from "../../types/Trees";

interface TreesMapProps {}

const TreesMap: React.FC<TreesMapProps> = () => {
  const [latLong, setLatLong] = useState<[number, number]>([
    // 100.77916890420383, 13.723999003278182,
    100.5417, 13.7314,
  ]);

  const { data: style } = useGetStyles([]);
  const { data: treesData } = useGetTrees({});
  const { palette } = useTheme();
  const clickedStateId = useRef<undefined | number | string>(undefined);
  const [selectedTree, setSelectedTree] = useState<Tree | null>(null);

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
        // TODO cluster and make colors
        // cluster: true,
        // clusterMaxZoom: 14,
        // clusterRadius: 40,
        generateId: true,
      });

      map.addLayer({
        id: mapTreesId,
        type: "circle",
        // @ts-ignore
        source: mapSourceId,
        paint: {
          "circle-radius": 15,
          "circle-color": [
            "case",
            [
              "any",
              // @ts-ignore, can someone please make a PR to definitely typed and tell them that the null value should be accepted!
              ["==", ["get", "commonName"], null],
              ["!", ["has", "commonName"]],
            ],
            palette.secondary.main,
            palette.primary.main,
          ],
          "circle-opacity": [
            "case",
            ["boolean", ["feature-state", "clicked"], false],
            1,
            0.5,
          ],
        },
      });
    });

    map.on("click", mapTreesId, (e) => {
      if (Number.isInteger(clickedStateId.current)) {
        map.setFeatureState(
          {
            source: mapSourceId,
            id: clickedStateId.current,
          },
          { clicked: false }
        );
      }
      if (e.features?.length) {
        const tree: Tree = e.features[0]! as Tree;
        clickedStateId.current = tree.id!;
        setSelectedTree(tree);
        map.setFeatureState(
          { source: mapSourceId, id: clickedStateId.current },
          { clicked: true }
        );
        map.flyTo({
          center: tree.geometry.coordinates as LngLatLike,
          animate: true,
          duration: 1000,
          essential: true, // this animation is considered essential with respect to prefers-reduced-motion
        });
      }
    });

    map.on("mouseenter", mapTreesId, () => {
      map.getCanvas().style.cursor = "pointer";
    });

    map.on("mouseleave", mapTreesId, function () {
      map.getCanvas().style.cursor = "";
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
