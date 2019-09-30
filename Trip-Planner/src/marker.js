const mapboxgl = require("mapbox-gl");

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function(type, coords) {

    let el = document.createElement('div');
    el.className = 'marker';

    if(type === 'activity'){

        el.style.backgroundImage = 'url(' + iconURLs.activities + ')';

    }else if(type === 'hotel'){
        el.style.backgroundImage = 'url(' + iconURLs.hotels + ')';
    }else if(type === 'restaurant'){
        el.style.backgroundImage = 'url(' + iconURLs.restaurants + ')';
    }

    return new mapboxgl.Marker(el).setLngLat(coords)
};

module.exports = buildMarker;