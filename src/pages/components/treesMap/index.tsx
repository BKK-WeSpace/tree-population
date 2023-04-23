// Avoid adding components to this class as the entire thing is client-side rendered.

import maplibreGl from "maplibre-gl";
import React, { useEffect, useRef } from "react";
import { api } from "~/utils/api";

// This needs to be a client side component
const TreesMap = () => {
    // Example
    // const { isLoading, data: trees } = api.trees.getAll.useQuery({});
    // console.log(trees);

    const map = useRef<maplibregl.Map>();
    useEffect(() => {
        if (map.current) return;
        map.current = new maplibreGl.Map({
            container: "map",
            style: "https://demotiles.maplibre.org/style.json",
            center: [-74.5, 40],
            zoom: 9,
            attributionControl: false,
        });
    }, []);

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                bottom: 0,
                width: "100%",
                height: "100%",
            }}
            id="map"
        ></div>
    );
};

export default TreesMap;
