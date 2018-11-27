var m = L.map('map').setView([33.7407712, -84.4485066], 14);

    // Loads Stamen's Toner Lite basemap as a Leaflet tileLayer object.
var CartoDB_DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
    });

    // Adds the Toner Lite layer to our map object.
    m.addLayer(CartoDB_DarkMatter);

function style(feature) {
    return {
        opacity:1,
        color:'#ffffff',
        weight:2,
        className: 'marching'
    };
};

routes = L.geoJson(atl_hwy, {style: style});

m.addLayer(routes)