import React, { useEffect, useState } from "react";
import maplibregl from 'maplibre-gl';

interface TreesMapProps {}

const TreesMap: React.FC<TreesMapProps> = () => {
  const [lat,setLat] = useState(13.80949);
  const [lng, setLng] = useState(100.537682);
  

  useEffect(() => {
    const map = new maplibregl.Map({
      container: 'map',
      style: 'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
      center: [lng, lat],
      zoom: 10
    });
    
    map.on('load', function () {
        map.resize();
    });

    return () => {
      map.remove();
    };
  }, []);

  return <div id='map' style={{ width: '100%', height: '100%', marginTop: '10px' }} />;
};

export default TreesMap;
