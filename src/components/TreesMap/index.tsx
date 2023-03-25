import maplibregl, { LngLatLike } from "maplibre-gl";
import React, { useEffect, useRef, useState } from "react";
import useGetTrees from "../../data/hooks/useGetTrees";
import useGetStyles from "../../data/hooks/useGetStyles";
import OverlayComponent from "./OverlayComponent";
import { Box } from "@mui/system";
import { useTheme } from "@mui/material";
import Tree from "../../types/Trees";
import useTreeState from "./useTreeState";
import { createContext } from "react";

/**
 * A global to keep the entire application in-sync about the currently-selected tree.
 */
export const SelectedTreeContext = createContext<{
  selectedTree?: Tree;
  setSelectedTree: (tree: Tree, index?: number) => void;
}>({ selectedTree: undefined, setSelectedTree: () => {} });

const TreesMap: React.FC<{}> = () => {
  const [latLong, setLatLong] = useState<[number, number]>([
    // 100.77916890420383, 13.723999003278182,
    100.5417, 13.7314,
  ]);

  const mapTreesId = "base-trees";
  const mapSourceId = "base-source";
  const { data: style } = useGetStyles([]);
  const { data: treesData } = useGetTrees({});
  const { palette } = useTheme();
  const map = useRef<maplibregl.Map>();
  const { selectedTree, setSelectedTree } = useTreeState({
    map,
    mapSourceId,
  });

  function flyToTree(tree: Tree) {
    map.current?.flyTo({
      center: tree.geometry.coordinates as LngLatLike,
      animate: true,
      essential: true, // this animation is considered essential with respect to prefers-reduced-motion
      duration: 3500,
      zoom: 15,
    });
  }

  useEffect(() => {
    if (!style?.result || !treesData?.result) return;

    map.current = new maplibregl.Map({
      container: "map",
      center: latLong,
      style: style!.result,
      zoom: 13,
      attributionControl: false,
    });

    map.current!.on("load", () => {
      map.current!.addSource(mapSourceId, {
        type: "geojson",
        data: treesData.result!,
        generateId: true,
        // TODO cluster and make colors
        // cluster: true,
        // clusterMaxZoom: 14,
        // clusterRadius: 40,
      });

      map.current!.addLayer({
        id: mapTreesId,
        type: "circle",
        // @ts-ignore
        source: mapSourceId,
        paint: {
          "circle-radius": [
            "case",
            ["boolean", ["feature-state", "clicked"], false],
            20,
            12,
          ],
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

    map.current.on("click", mapTreesId, (e) => {
      if (e.features?.length) {
        const tree = e.features[0] as Tree;
        setSelectedTree(tree);
      }
    });

    map.current!.on("mouseenter", mapTreesId, () => {
      map.current!.getCanvas().style.cursor = "pointer";
    });

    map.current!.on("mouseleave", mapTreesId, function () {
      map.current!.getCanvas().style.cursor = "";
    });

    return () => {
      // TODO @khongchai add map data source here.
      return map.current!.remove();
    };
  }, [style, treesData]);

  useEffect(() => {
    if (selectedTree) flyToTree(selectedTree);
  }, [selectedTree]);

  return (
    <SelectedTreeContext.Provider
      value={{
        setSelectedTree,
        selectedTree,
      }}
    >
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
    </SelectedTreeContext.Provider>
  );
};

export default TreesMap;
