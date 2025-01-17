const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

mapboxgl.accessToken = "pk.eyJ1Ijoia3dlZ29yZWsiLCJhIjoiY2sxNm1hMXJoMTZ2ZzNibzN6MmxzNHp4cCJ9.FFM6bmiYKaDRIEeWpm_iVw";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});



const markerMy = buildMarker("hotel", [-74.009151, 40.705086]); 
markerMy.addTo(map);